import { CourseData } from "./types";

export const EXAM_PREP_ENGLISH_COURSE: CourseData = {
  title: "Ôn thi ĐH Tiếng Anh",
  slug: "on-thi-dh-tieng-anh",
  subject: "exam-prep",
  grade: "12",
  description: "Ôn luyện Tiếng Anh THPT QG từ đề thi 2020–2026: Phát âm–Trọng âm, Ngữ pháp, Đọc hiểu và Giao tiếp.",
  published: true,
  modules: [
    {
      title: "Phát âm – Trọng âm – Ngữ pháp (Đề thi 2020–2022)",
      order: 1,
      lessons: [
        {
          title: "Phân tích dạng bài Phát âm và Trọng âm trong đề thi",
          order: 1,
          content: `## Phát âm và Trọng âm trong đề thi THPT QG

### Cấu trúc đề thi Tiếng Anh (50 câu)
- Phát âm: 2 câu (âm tiết khác nhau, trọng âm khác nhau)
- Ngữ pháp–Từ vựng: 15–17 câu
- Tình huống giao tiếp: 2 câu
- Đọc hiểu (cloze + reading): 20–22 câu
- Tìm lỗi sai / Viết lại câu: 5–7 câu

---

### Dạng 1 – Phát âm âm tiết gạch chân khác nhau

> *[THPT QG 2022] Chọn từ có phần gạch chân phát âm khác:*
> A. ch**urch** /tʃ/  B. ch**em**ist /k/  C. ch**all**enge /tʃ/  D. ch**ea**p /tʃ/
> **Đáp án: B** (chemist: /k/, các từ còn lại: /tʃ/)

> *[THPT QG 2021]*
> A. want**ed** /ɪd/  B. look**ed** /t/  C. play**ed** /d/  D. need**ed** /ɪd/
> **Đáp án: B** (looked /t/, wanted và needed /ɪd/, played /d/)
> → Chọn từ khác với nhóm đa số: A,D = /ɪd/; C = /d/; **B = /t/** (khác cả A,C,D)

---

### Dạng 2 – Trọng âm khác nhau

> *[THPT QG 2020] Chọn từ có trọng âm khác:*
> A. **de**velop  B. **com**puter  C. **a**dventure  D. **stu**dent
> Develop: /dɪ'veləp/ stress âm 2; Computer: /kəm'pjuːtər/ stress âm 2
> Adventure: /əd'ventʃər/ stress âm 2; **Student: /'stjuːdənt/ stress âm 1**
> **Đáp án: D**

> *[THPT QG 2022]*
> A. **ed**ucate  B. **sat**isfy  C. be**lieve**  D. **cel**ebrate
> A, B, D: stress âm 1; **C (believe): stress âm 2**
> **Đáp án: C**`,
        },
        {
          title: "Ngữ pháp và Từ vựng thường gặp trong đề thi",
          order: 2,
          content: `## Ngữ pháp trong đề thi THPT QG 2020–2024

### Các điểm ngữ pháp hay xuất hiện:

**1. Thì động từ (tenses):**
> *[THPT QG 2022] By the time she _____, we _____ dinner.*
> → **arrived / had finished** (Past Perfect + Simple Past)

**2. Câu bị động:**
> *[THPT QG 2021] The Eiffel Tower _____ in 1889.*
> → **was built** (Simple Past Passive)

**3. Câu điều kiện:**
> *[THPT QG 2020] If she _____ harder, she would have passed the exam.*
> → **had studied** (Type 3 – Mixed)

**4. Reported speech:**
> *"I will call you tomorrow," he said. → He said he _____ me the next day.*
> → **would call**

**5. Relative clauses:**
> *The man _____ car was stolen reported it to the police.*
> → **whose** (chỉ sở hữu)

**6. Từ đồng nghĩa/trái nghĩa:**
> *[THPT QG 2023] The word "significant" is closest in meaning to:*
> → **important** / crucial / vital

**7. Phrasal verbs:**
> *She had to _____ the meeting because of the pandemic.*
> → **put off** (hoãn lại) / call off (hủy bỏ)

**8. Collocations:**
> *make a _____ (decision, mistake, effort, speech, progress)*
> *do _____ (homework, research, business, harm, good)*`,
        },
      ],
      quiz: {
        title: "Quiz: Phát âm và Ngữ pháp (Đề thi THPT QG)",
        questions: [
          {
            text: "[THPT QG 2022] Choose the word whose underlined part is pronounced differently: A. church  B. chemist  C. challenge  D. cheap",
            options: JSON.stringify(["A. church /tʃ/", "B. chemist /k/ – khác!", "C. challenge /tʃ/", "D. cheap /tʃ/"]),
            answer: "1",
          },
          {
            text: "[THPT QG 2020] Choose the word with different stress: A. develop  B. adventure  C. computer  D. student",
            options: JSON.stringify([
              "A. develop (stress âm 2)",
              "B. adventure (stress âm 2)",
              "C. computer (stress âm 2)",
              "D. student (stress âm 1 – khác!)",
            ]),
            answer: "3",
          },
          {
            text: "[THPT QG 2021] The Eiffel Tower _____ in Paris in 1889.",
            options: JSON.stringify(["built", "was built", "has been built", "had built"]),
            answer: "1",
          },
          {
            text: "[THPT QG 2022] By the time she arrived, we _____ dinner.",
            options: JSON.stringify(["finished", "have finished", "had finished", "were finishing"]),
            answer: "2",
          },
          {
            text: "[THPT QG 2023] The word 'significant' is closest in meaning to:",
            options: JSON.stringify(["small", "important", "difficult", "interesting"]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Tình huống giao tiếp – Điền từ (Đề thi 2021–2024)",
      order: 2,
      lessons: [
        {
          title: "Giao tiếp và Cloze Test – Phân tích đề thi",
          order: 3,
          content: `## Tình huống giao tiếp trong đề thi THPT QG

### Các tình huống thường gặp

**1. Lời mời và Đáp lại:**
> A: "Would you like to come to my party?"
> B: "_____, but I have another appointment."
> → **I'd love to** / That sounds great, (nhưng sau dấu phẩy có "but" → từ chối lịch sự)
> → **That's very kind of you** (rồi giải thích lý do từ chối)

**2. Lời đề nghị:**
> A: "Shall I help you carry those bags?"
> B: "_____"
> → **Yes, please. That's very kind of you.**

**3. Lời khen:**
> A: "You look great in that dress!"
> B: "_____"
> → **Thank you. You're very kind.**

**4. Xin phép:**
> A: "Do you mind if I open the window?"
> B: "No, not at all." (= Không phiền gì / Cứ mở đi)

---

## Cloze Test – Chiến lược làm bài

### Dạng 1: Giới từ
> contributed _____ (to), result _____ (in/from), depend _____ (on), cope _____ (with)

### Dạng 2: Liên từ
> _____ his hard work, he failed. → **Despite / In spite of** (giới từ + N/V-ing)
> _____ he worked hard, he failed. → **Although / Even though** (liên từ + clause)

### Dạng 3: Collocation
> make a _____ (decision/speech/mistake)
> take _____ (action/part/care/responsibility)
> pay _____ (attention/a visit/a compliment)

---

### Ví dụ đoạn Cloze (THPT QG 2022):
*"Social media has (1)_____ changed the way young people communicate. (2)_____ its many advantages, it also creates challenges such as cyberbullying and privacy issues."*

(1) → **dramatically / significantly / fundamentally** (adverb before changed)
(2) → **Despite / In spite of** (contrast; followed by noun phrase)`,
        },
        {
          title: "Lỗi sai và Viết lại câu – Đề thi THPT QG",
          order: 4,
          content: `## Tìm lỗi sai (Error Identification) trong đề thi

### Các lỗi hay gặp

**1. Hòa hợp chủ-vị:**
> "The number of students **are** increasing." ❌
> → **is** increasing ✓ (The number of + N → động từ số ít)

**2. Thì động từ sai:**
> "She has lived here since she **comes** to the city." ❌
> → **came** ✓ (Present Perfect + since + Simple Past)

**3. Gerund vs Infinitive:**
> "She enjoys **to swim** in the morning." ❌
> → **swimming** ✓ (enjoy + V-ing)

**4. Trật tự tính từ:**
> "a beautiful large old French house" ✓
> (size → age → origin → material → noun)

**5. Từ loại sai:**
> "He made an **importance** decision." ❌
> → **important** ✓ (cần tính từ trước danh từ)

---

## Viết lại câu cùng nghĩa

> *"She started learning English 5 years ago."*
> → **She has been learning English for 5 years.**

> *"It's too hot for us to go outside."*
> → **It's so hot that we can't go outside.**
> → **The weather is too hot for us to go outside.**

> *"Although the weather was bad, they went for a picnic."*
> → **Despite the bad weather, they went for a picnic.**
> → **In spite of the bad weather, they went for a picnic.**`,
        },
      ],
      quiz: {
        title: "Quiz: Giao tiếp và Viết câu (Đề thi THPT QG)",
        questions: [
          {
            text: "[THPT QG 2022] A: 'Would you like some more coffee?' B: '_____'",
            options: JSON.stringify([
              "Yes, I would like.",
              "Yes, please. Just a little.",
              "No, I wouldn't like.",
              "I'd rather not to.",
            ]),
            answer: "1",
          },
          {
            text: "[THPT QG 2021] Choose the correct preposition: 'Young people should contribute _____ protecting the environment.'",
            options: JSON.stringify(["in", "of", "to", "for"]),
            answer: "2",
          },
          {
            text: "[THPT QG 2023] Choose the correct conjunction: '_____ his illness, he continued to work.'",
            options: JSON.stringify(["Although", "Despite", "Because of", "Since"]),
            answer: "1",
          },
          {
            text: "[THPT QG 2022] Find the error: 'The committee have not reached a final decision yet.'",
            options: JSON.stringify([
              "'The committee' should be 'A committee'",
              "'have' should be 'has'",
              "'reached' should be 'reach'",
              "'final' should be 'finally'",
            ]),
            answer: "1",
          },
          {
            text: "[THPT QG 2020] Rewrite: 'Although the film was boring, we stayed until the end.' → 'Despite _____, we stayed until the end.'",
            options: JSON.stringify([
              "the film was boring",
              "being boring the film",
              "the boring of the film",
              "the film's being boring",
            ]),
            answer: "3",
          },
        ],
      },
    },
    {
      title: "Đọc hiểu nâng cao (Đề thi 2023–2026)",
      order: 3,
      lessons: [
        {
          title: "Kỹ thuật làm bài đọc hiểu – Phân tích đề thi 2023–2025",
          order: 5,
          content: `## Đọc hiểu trong đề thi THPT QG (15–18 câu)

### Cấu trúc phần đọc hiểu
- **Đoạn 1 (Passage 1):** 3–4 câu – đoạn ngắn, từ vựng–ngữ pháp
- **Đoạn 2 (Passage 2):** 5–6 câu – đoạn vừa, thông tin–chủ đề
- **Đoạn 3 (Passage 3):** 6–7 câu – đoạn dài, suy luận

---

### Chiến lược làm bài từng loại câu hỏi

**Câu hỏi Chủ đề (Main Topic/Title):**
Đọc câu đầu đoạn 1 và câu kết của bài.
→ Chọn đáp án bao quát TOÀN bộ bài, không quá hẹp/rộng.

**Câu hỏi Thông tin cụ thể (According to the passage...):**
Scan từ khóa trong câu hỏi → tìm đoạn chứa thông tin.
→ Chú ý: đáp án thường là paraphrase (diễn đạt lại) của văn bản.

**Câu hỏi Suy luận (It can be inferred that...):**
Đọc kỹ đoạn liên quan. Đáp án KHÔNG được nói thẳng trong bài.
→ Loại đáp án nói ĐÚNG nguyên văn bài (quá rõ ràng) hoặc KHÔNG có cơ sở.

**Câu hỏi Từ vựng trong ngữ cảnh:**
"The word X in paragraph Y is closest in meaning to..."
→ Đọc cả câu chứa từ đó → đoán nghĩa → kiểm tra với 4 đáp án.

**Câu hỏi Đại từ tham chiếu:**
"The pronoun 'they' in paragraph 2 refers to..."
→ Tìm danh từ số nhiều đứng trước "they" trong bài.

---

### Chủ đề thường gặp (THPT QG 2020–2026)
- Môi trường và biến đổi khí hậu (environment, climate change)
- Công nghệ và AI (technology, social media)
- Sức khỏe (health, medicine)
- Giáo dục (education, online learning)
- Văn hóa và Xã hội (culture, social issues)`,
        },
        {
          title: "Đọc hiểu thực hành – Mẫu đề thi THPT QG 2024–2026",
          order: 6,
          content: `## Đọc hiểu mẫu – Chủ đề Công nghệ và Giáo dục

### Đoạn văn mẫu (dạng THPT QG 2024–2026):

*"Artificial intelligence (AI) is transforming education in unprecedented ways. Unlike traditional teaching methods that treat all students the same, AI-powered systems can analyze each student's learning patterns and adapt content accordingly. Students who struggle with certain concepts receive additional practice, while advanced learners are challenged with more complex material. Research suggests that personalized learning through AI can improve academic performance by up to 30% compared to conventional methods.*

*However, critics argue that excessive reliance on technology may reduce critical thinking skills and human interaction. Teachers, they say, provide not just knowledge but also emotional support and motivation that no machine can replicate. The ideal approach, most educators agree, is to use AI as a tool to enhance – not replace – the human element in education."*

**Câu hỏi phân tích:**

**Q1 (Main idea):** The passage mainly discusses...
→ **The benefits and limitations of AI in education** ✓

**Q2 (Specific info):** According to the passage, AI-powered systems can...
→ **adapt content based on each student's learning patterns** ✓

**Q3 (Vocabulary):** The word "unprecedented" (line 1) means...
→ **never happened before** ✓

**Q4 (Inference):** It can be inferred from the passage that...
→ **Most educators support a balanced approach combining AI and human teaching** ✓

**Q5 (Reference):** "they" (paragraph 2) refers to...
→ **critics** ✓`,
        },
      ],
      quiz: {
        title: "Quiz: Đọc hiểu (Đề thi THPT QG 2024–2026)",
        questions: [
          {
            text: "[THPT QG 2024] According to the passage above, AI-powered educational systems can BEST be described as:",
            options: JSON.stringify([
              "Systems that replace teachers completely",
              "Systems that provide personalized learning experiences",
              "Systems that only benefit advanced students",
              "Systems that reduce academic performance",
            ]),
            answer: "1",
          },
          {
            text: "[THPT QG 2024] The word 'unprecedented' in the passage is closest in meaning to:",
            options: JSON.stringify(["common", "expected", "never seen before", "well-known"]),
            answer: "2",
          },
          {
            text: "[THPT QG 2024] According to critics mentioned in the passage, what cannot AI replicate?",
            options: JSON.stringify([
              "Knowledge delivery",
              "Learning pattern analysis",
              "Emotional support and motivation",
              "Content adaptation",
            ]),
            answer: "2",
          },
          {
            text: "[THPT QG 2025] The pronoun 'they' in paragraph 2 refers to:",
            options: JSON.stringify(["AI systems", "students", "critics", "teachers"]),
            answer: "2",
          },
          {
            text: "[THPT QG 2025] The BEST title for the passage would be:",
            options: JSON.stringify([
              "AI Will Replace Teachers",
              "The Future of Online Education",
              "AI in Education: Promise and Concerns",
              "Why Students Prefer Technology",
            ]),
            answer: "2",
          },
        ],
      },
    },
    {
      title: "Chuyên đề 4: Ngữ pháp nâng cao và Từ vựng THPT QG",
      order: 4,
      lessons: [
        {
          title: "Cấu trúc ngữ pháp thường gặp trong đề thi",
          order: 7,
          content: `## Ngữ pháp trọng tâm THPT QG

### 1. Câu điều kiện – 4 loại
| Loại | Cấu trúc | Ý nghĩa |
|------|---------|---------|
| 0 | If + V_hiện tại, V_hiện tại | Sự thật hiển nhiên |
| 1 | If + V_htại, will + V | Có thể xảy ra |
| 2 | If + V_qkhứ, would + V | Không có thật hiện tại |
| 3 | If + had + V_pp, would have + V_pp | Không có thật quá khứ |

**Dạng hỗn hợp**: If + had V_pp (ĐK3), would V (ĐK2)

### 2. Câu bị động – Thì và đặc biệt
- **Thì tiếp diễn bị động**: is/are/was being + V_pp
- **Bị động với động từ chỉ giác quan**: S + was seen/heard/felt + to V
- **Bị động với make/let**: S + was made + to V (make thêm "to")

### 3. Reported speech – Câu gián tiếp
Quy tắc lùi thì: said "will" → said would; "can" → could; "is" → was
- "Come here" → He told me **to come** there.
- "Don't go" → He told me **not to go**.
- "Are you ready?" → He asked me **if/whether I was** ready.

### 4. Articles (Mạo từ)
- **a/an**: lần đầu nhắc, số ít đếm được
- **the**: đã biết, duy nhất, bộ phận cơ thể
- **Ø**: số nhiều chung, tên riêng, bữa ăn, môn thể thao`,
        },
        {
          title: "Cấu trúc và từ vựng thường gặp trong đề THPT",
          order: 8,
          content: `## Cấu trúc – Từ vựng Đề thi THPT QG

### 1. Phrasal Verbs hay thi
| Phrasal Verb | Nghĩa |
|-------------|-------|
| give up | từ bỏ |
| put off | hoãn lại |
| look forward to + V-ing | mong đợi |
| run out of | hết, cạn kiệt |
| come up with | nghĩ ra |
| carry out | thực hiện |
| get along with | hòa thuận |
| take up | bắt đầu (sở thích) |
| break down | hỏng hóc |
| look up | tra cứu |

### 2. Word formation (Từ phái sinh)
| Gốc | Danh từ | Tính từ | Động từ |
|-----|---------|---------|---------|
| create | creation, creativity | creative | create |
| educate | education, educator | educational | educate |
| pollute | pollution, pollutant | polluted | pollute |
| economy | economy, economist | economic | economize |

### 3. Idioms và Fixed Expressions
- make ends meet: kiếm đủ tiền sống
- once in a blue moon: rất hiếm khi
- hit the nail on the head: nói đúng vào điểm
- under the weather: không khỏe

### 4. Connectives thường xuất hiện
- **Contrast**: although, while, whereas, despite, in spite of
- **Result**: therefore, consequently, as a result
- **Addition**: furthermore, moreover, in addition`,
        },
        {
          title: "Đọc hiểu – Điền từ – Đồng nghĩa/Trái nghĩa",
          order: 9,
          content: `## Ba dạng bài trọng tâm đề THPT QG Tiếng Anh

### 1. Đọc hiểu (Reading comprehension – 15+ câu)
**Phân loại câu hỏi:**
- Main idea: ý chính toàn bài
- Detail questions: thông tin cụ thể trong bài
- Inference: suy luận từ ngữ cảnh
- Vocabulary in context: nghĩa từ theo ngữ cảnh

**Chiến thuật:**
1. Đọc câu hỏi trước
2. Skim bài lấy ý chính
3. Scan để tìm đáp án cụ thể
4. Câu suy luận: loại đáp án cực đoan

### 2. Điền từ (Cloze test – 10 câu)
**4 bước:**
1. Đọc toàn bài, hiểu chủ đề
2. Xác định từ loại cần điền (verb/noun/adj/prep/conj)
3. Xét nghĩa + cú pháp
4. Kiểm tra lại toàn bài

### 3. Đồng nghĩa – Trái nghĩa (Synonym/Antonym)
"The word X in line Y is closest in meaning to..."
**Chiến thuật:**
- Đọc cả câu/đoạn có từ X
- Loại đáp án sai nghĩa hoàn toàn
- Xem ngữ cảnh (positive/negative, formal/informal)

Từ hay xuất hiện:
- abundant = plentiful; rare = scarce
- enhance = improve; hinder = impede`,
        },
      ],
      quiz: {
        title: "Quiz 4 – Ngữ pháp và Từ vựng THPT",
        questions: [
          {
            text: "Choose the correct conditional: 'If I ___ rich, I would travel the world.'",
            options: JSON.stringify(["am", "were", "will be", "had been"]),
            answer: "1",
          },
          {
            text: "'put off' có nghĩa là:",
            options: JSON.stringify(["thực hiện", "hoãn lại", "từ bỏ", "bắt đầu"]),
            answer: "1",
          },
          {
            text: "Choose passive: 'They are building a new school.' →",
            options: JSON.stringify([
              "A new school is being built.",
              "A new school is built.",
              "A new school was being built.",
              "A new school has been built.",
            ]),
            answer: "0",
          },
          {
            text: "The word 'abundant' is closest in meaning to:",
            options: JSON.stringify(["scarce", "plentiful", "expensive", "rare"]),
            answer: "1",
          },
          {
            text: "Reported speech: She said 'I will call you tomorrow.' →",
            options: JSON.stringify([
              "She said she will call me tomorrow.",
              "She said she would call me the next day.",
              "She said she calls me tomorrow.",
              "She said she had called me.",
            ]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chuyên đề 5: Phát âm – Giao tiếp – Đề thử Tiếng Anh",
      order: 5,
      lessons: [
        {
          title: "Phát âm và Trọng âm – Dạng bài trong đề thi",
          order: 10,
          content: `## Pronunciation trong đề thi THPT QG

### 1. Dạng bài 1: Chọn từ có cách đọc phần gạch chân khác
**Nguyên âm hay bị nhầm:**
| Nhóm | Từ | Phát âm |
|------|----|---------| 
| /iː/ | seat, beat, meat | /siːt/ |
| /ɪ/ | sit, bit, mit | /sɪt/ |
| /eɪ/ | name, cake, make | /neɪm/ |
| /e/ | bed, met, ten | /bed/ |
| /ʌ/ | but, cup, fun | /bʌt/ |
| /ɑː/ | car, far, bar | /kɑː/ |

### 2. Dạng bài 2: Chọn từ có trọng âm khác
**Quy tắc trọng âm:**
- Danh từ/Tính từ 2 âm tiết: thường nhấn âm 1
- Động từ 2 âm tiết: thường nhấn âm 2
- Từ tận –tion, –sion, –ic: nhấn âm trước hậu tố

**Ví dụ:**
- **pre**sent (n/adj) vs pre**sent** (v)
- **com**fort (n) vs com**fort** (v)

### 3. Exceptions thường gặp
- Từ mượn tiếng Pháp: garage /ɡəˈrɑːʒ/ (nhấn âm 2)
- Từ khoa học: chemic**al**, biol**og**ical

### 4. Mẹo làm bài phát âm
- Đọc to (trong đầu) từng đáp án
- Tìm "con vịt lạc đàn" (1 từ khác 3 từ còn lại)`,
        },
        {
          title: "Giao tiếp – Tình huống và Câu đáp lại",
          order: 11,
          content: `## Communication – Câu giao tiếp trong đề thi

### 1. Dạng bài: Chọn câu đáp lại phù hợp
Đọc context + câu hỏi → chọn đáp án hợp lý nhất

### 2. Nhóm tình huống thường gặp
**Đưa ra lời mời (Invitation):**
- "Would you like to...?" → "I'd love to." / "I'm afraid I can't."

**Đề nghị giúp đỡ (Offer):**
- "Shall I help you?" → "Yes, please." / "No, that's alright."

**Chúc mừng (Congratulations):**
- "Congratulations on your promotion!" → "Thank you so much!"

**Xin lỗi (Apology):**
- "I'm sorry for being late." → "Don't worry about it." / "That's OK."

**Hỏi ý kiến (Asking for opinion):**
- "What do you think about...?" → "In my opinion,...", "I think..."

### 3. Bẫy trong câu giao tiếp
- Đáp án đúng ngữ pháp nhưng không tự nhiên/phù hợp ngữ cảnh
- Đáp án lịch sự hơn thường là đáp án đúng trong văn phong formal

### 4. 20 mẫu câu giao tiếp hay xuất hiện trong đề
"It's very kind of you." → "Not at all."
"I'm sorry to hear that." → "Thank you for your concern."`,
        },
        {
          title: "Chiến lược thi và Phân tích đề THPT QG Tiếng Anh",
          order: 12,
          content: `## Chiến lược thi Tiếng Anh THPT QG

### 1. Cấu trúc đề (50 câu – 60 phút)
| Phần | Số câu | Chủ đề |
|------|--------|--------|
| Phát âm | 4 | Nguyên âm, phụ âm, trọng âm |
| Giao tiếp | 2 | Tình huống hội thoại |
| Ngữ pháp | 10 | Thì, điều kiện, bị động... |
| Từ vựng | 6 | Word form, phrasal verb, idiom |
| Đồng/trái nghĩa | 4 | Synonym, antonym |
| Cloze test | 10 | Điền từ đoạn văn |
| Đọc hiểu | 14 | 2 đoạn văn |

### 2. Phân bổ thời gian 60 phút
- Phát âm + Giao tiếp: 5 phút
- Ngữ pháp + Từ vựng: 12 phút
- Cloze test: 12 phút
- Đọc hiểu 1 (đơn giản): 12 phút
- Đọc hiểu 2 (khó): 15 phút
- Kiểm tra lại: 4 phút

### 3. Chiến lược từng phần
- **Phát âm**: đọc thành tiếng trong đầu, tìm từ "lạc"
- **Cloze**: đọc toàn đoạn trước, xác định từ loại
- **Reading**: câu hỏi suy luận → loại đáp án cực đoan
- **Đồng nghĩa**: xét ngữ cảnh, không chỉ nghĩa đơn lẻ

### 4. Mục tiêu điểm
| Điểm mục tiêu | Cần làm đúng |
|---------------|-------------|
| 5 điểm (50%) | 25 câu |
| 7 điểm (70%) | 35 câu |
| 8 điểm (80%) | 40 câu |
| 9+ điểm | 45+ câu |`,
        },
      ],
      quiz: {
        title: "Quiz 5 – Chiến lược thi Tiếng Anh",
        questions: [
          {
            text: "Đề thi TN THPT Tiếng Anh có bao nhiêu câu và thời gian?",
            options: JSON.stringify(["40 câu – 50 phút", "50 câu – 60 phút", "50 câu – 90 phút", "60 câu – 60 phút"]),
            answer: "1",
          },
          {
            text: "Khi từ 'present' là động từ, trọng âm rơi vào:",
            options: JSON.stringify(["Âm tiết 1: PRE-sent", "Âm tiết 2: pre-SENT", "Không có trọng âm", "Cả hai âm tiết"]),
            answer: "1",
          },
          {
            text: "'I'm sorry for being late.' Câu đáp lại phù hợp nhất:",
            options: JSON.stringify(["I don't care.", "Don't worry about it.", "You're welcome.", "Thank you."]),
            answer: "1",
          },
          {
            text: "Phần đọc hiểu chiếm bao nhiêu câu trong đề 50 câu?",
            options: JSON.stringify(["4 câu", "10 câu", "14 câu", "20 câu"]),
            answer: "2",
          },
          {
            text: "Để đạt 8 điểm (80%) cần làm đúng khoảng bao nhiêu câu?",
            options: JSON.stringify(["25 câu", "35 câu", "40 câu", "45 câu"]),
            answer: "2",
          },
        ],
      },
    },
  ],
};



