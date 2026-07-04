import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { getSession } from "@/lib/auth";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SYSTEM_PROMPT = `Bạn là trợ lý học tập AI của TramOnThi – nền tảng ôn thi THPT Quốc gia hàng đầu Việt Nam.

Nhiệm vụ của bạn:
- Giải thích các khái niệm Toán, Vật Lý, Hóa học, Tiếng Anh theo chương trình THPT Việt Nam
- Giải bài tập và hướng dẫn phương pháp làm bài thi THPT QG
- Trả lời ngắn gọn, rõ ràng, dùng công thức và ví dụ cụ thể khi cần
- Khuyến khích học sinh và giữ thái độ tích cực

Quy tắc:
- Luôn trả lời bằng tiếng Việt (trừ khi người dùng hỏi về Tiếng Anh)
- Trình bày công thức dạng: f(x) = ..., không dùng LaTeX phức tạp
- Nếu không biết, hãy nói thẳng và gợi ý học sinh xem lại bài học trong khóa học
- Không trả lời các câu hỏi ngoài phạm vi học tập`;

export async function POST(req: NextRequest) {
  const user = await getSession();
  if (!user) {
    return NextResponse.json({ error: "Vui lòng đăng nhập." }, { status: 401 });
  }

  const body = await req.json();
  const { messages } = body as { messages: { role: "user" | "assistant"; content: string }[] };

  if (!messages || messages.length === 0) {
    return NextResponse.json({ error: "Tin nhắn không được để trống." }, { status: 400 });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.slice(-10), // Giới hạn 10 tin nhắn gần nhất để tiết kiệm token
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content ?? "Xin lỗi, tôi không thể trả lời ngay bây giờ.";
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("OpenAI error:", err);
    return NextResponse.json({ error: "Lỗi kết nối AI. Vui lòng thử lại." }, { status: 500 });
  }
}
