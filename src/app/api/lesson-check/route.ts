import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { getSession } from "@/lib/auth";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { lessonTitle, content } = await req.json() as { lessonTitle: string; content: string };

  const prompt = `Bạn là giáo viên THPT Việt Nam. Dựa vào nội dung bài học dưới đây, hãy tạo ĐÚNG 3 câu hỏi trắc nghiệm để kiểm tra hiểu bài.

Tên bài: ${lessonTitle}

Nội dung bài:
${content.slice(0, 3000)}

Yêu cầu:
- 3 câu, mỗi câu có 4 đáp án (A, B, C, D)
- Câu hỏi bám sát nội dung bài, không hỏi kiến thức ngoài
- Chỉ có 1 đáp án đúng
- Trả về JSON hợp lệ theo đúng format sau, KHÔNG thêm bất kỳ text nào ngoài JSON:

[
  {
    "text": "Câu hỏi 1?",
    "options": ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
    "answer": 0,
    "explanation": "Giải thích ngắn gọn tại sao đáp án đúng"
  },
  ...
]

(answer là index 0-3 của đáp án đúng trong mảng options)`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 800,
      temperature: 0.4,
      response_format: { type: "json_object" },
    });

    const raw = completion.choices[0]?.message?.content ?? "{}";

    // Parse – GPT đôi khi wrap trong object
    let parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      // ok
    } else if (parsed.questions) {
      parsed = parsed.questions;
    } else {
      const key = Object.keys(parsed)[0];
      parsed = key ? parsed[key] : [];
    }

    const questions = (parsed as { text: string; options: string[]; answer: number; explanation: string }[])
      .slice(0, 3)
      .filter((q) => q.text && Array.isArray(q.options) && q.options.length === 4 && typeof q.answer === "number");

    if (questions.length === 0) {
      return NextResponse.json({ error: "Không tạo được câu hỏi." }, { status: 500 });
    }

    return NextResponse.json({ questions });
  } catch (err) {
    console.error("lesson-check error:", err);
    return NextResponse.json({ error: "Lỗi tạo câu hỏi. Thử lại sau." }, { status: 500 });
  }
}
