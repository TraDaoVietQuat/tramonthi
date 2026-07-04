import { CourseData } from "./types";

export const ENGLISH_12_COURSE: CourseData = {
  title: "Tiếng Anh 12",
  slug: "tieng-anh-12",
  subject: "english",
  grade: "12",
  description: "Ngữ pháp nâng cao, phát âm, từ vựng và kỹ năng đọc hiểu – chương trình Tiếng Anh 12, bám sát cấu trúc đề thi THPT QG.",
  published: true,
  modules: [
    {
      title: "Ngữ pháp nâng cao cho kỳ thi THPT QG",
      order: 1,
      lessons: [
        {
          title: "Đảo ngữ – Câu nhấn mạnh – Subjunctive",
          order: 1,
          content: `## Đảo ngữ (Inversion)

### Đảo ngữ sau trạng từ phủ định
| Trạng từ | Cấu trúc |
|---------|---------|
| Never / Seldom / Rarely | Never + trợ động từ + S + V |
| Not only... but also | Not only + trợ ĐT + S + V, but... |
| Hardly / Scarcely | Hardly + had + S + V₃, when/before... |
| No sooner | No sooner + had + S + V₃, than... |
| Only + adv phrase | Only then/after... + trợ ĐT + S + V |

**Ví dụ:**
- **Never have I** seen such a beautiful sunset.
- **Not only did he** apologize, but he also bought flowers.
- **Hardly had she** arrived when the rain started.

### Đảo ngữ sau "so/such...that"
- **So beautiful was the girl that** everyone stared at her.
- **Such was his dedication that** he worked 16 hours a day.

---

## Câu nhấn mạnh (Cleft Sentences)

### It is/was + X + that/who...
- Tom **broke** the window. → **It was Tom who broke** the window. (nhấn vào chủ ngữ)
- He broke the window **yesterday**. → **It was yesterday that** he broke the window.

### What-cleft
- **What I need** is a good sleep.
- **What surprised me** was his reaction.

---

## Subjunctive (Cầu khẩn pháp)

### Sau "wish"
- Wish + S + V₂ (hiện tại không có thật)
- Wish + S + had + V₃ (quá khứ tiếc nuối)
- Wish + S + would + V (tương lai mong muốn)

### Sau "It is time"
- It is (high) time + S + V₂ (đã đến lúc nên...)
- **It is time you went** to bed. (không nói "go")

### Sau động từ đề nghị/yêu cầu (suggest, insist, recommend, demand...)
> S + V(suggest/insist...) + that + S + (should) + V₀

- She **suggested that he study** harder.
- The doctor **recommended that she take** a rest.`,
        },
        {
          title: "Từ đồng nghĩa – Phrasal verbs – Collocations thường gặp",
          order: 2,
          content: `## Từ đồng nghĩa (Synonyms) thường gặp trong đề thi

| Từ gốc | Từ đồng nghĩa |
|--------|--------------|
| important | significant, crucial, vital, essential |
| show | demonstrate, reveal, indicate, display |
| increase | rise, grow, expand, surge, soar |
| decrease | fall, drop, decline, reduce, diminish |
| help | assist, aid, support, facilitate |
| happy | pleased, delighted, content, joyful |
| difficult | challenging, demanding, tough, hard |
| beautiful | gorgeous, stunning, attractive, lovely |

---

## Phrasal verbs thường gặp

| Phrasal verb | Nghĩa |
|-------------|-------|
| put off | hoãn lại |
| give up | từ bỏ |
| carry out | thực hiện |
| look up to | ngưỡng mộ |
| bring about | gây ra |
| call off | hủy bỏ |
| break down | hỏng hóc; phân tích |
| turn down | từ chối |
| look into | điều tra |
| make up for | bù đắp |

---

## Collocations thường gặp

**Heavy/Strong/High/Deep:**
- heavy rain/traffic/smoker
- strong wind/coffee/evidence
- high temperature/price/standard
- deep sleep/thought/water

**Do vs Make:**
- do: homework, research, business, damage, harm, good
- make: a decision, progress, an effort, a mistake, a speech, money

---

## Confusing words (dễ nhầm lẫn)
- **affect** (v – tác động) vs **effect** (n – kết quả)
- **rise** (tự tăng) vs **raise** (tăng có chủ đích)
- **lie** (nằm – lay, lain) vs **lay** (đặt – laid, laid)
- **economic** (thuộc kinh tế) vs **economical** (tiết kiệm)`,
        },
      ],
      quiz: {
        title: "Quiz: Ngữ pháp nâng cao",
        questions: [
          {
            text: "Choose the correct inversion: 'I have never seen such a beautiful place.'",
            options: JSON.stringify([
              "Never I have seen such a beautiful place.",
              "Never have I seen such a beautiful place.",
              "Never I had seen such a beautiful place.",
              "Never seen I have such a beautiful place.",
            ]),
            answer: "1",
          },
          {
            text: "'It was Tom who broke the window.' This is an example of:",
            options: JSON.stringify(["Inversion", "Cleft sentence", "Reported speech", "Subjunctive"]),
            answer: "1",
          },
          {
            text: "She wishes she _____ harder at school. (Past regret)",
            options: JSON.stringify(["studied", "had studied", "would study", "has studied"]),
            answer: "1",
          },
          {
            text: "The manager suggested that he _____ the report immediately.",
            options: JSON.stringify(["submits", "submitted", "submit", "will submit"]),
            answer: "2",
          },
          {
            text: "Choose the correct phrasal verb: 'The meeting was _____ due to the storm.'",
            options: JSON.stringify(["called off", "called up", "called for", "called out"]),
            answer: "0",
          },
        ],
      },
    },
    {
      title: "Phát âm và Trọng âm (Phonetics)",
      order: 2,
      lessons: [
        {
          title: "Trọng âm từ – Phát âm đuôi -ed, -s",
          order: 3,
          content: `## Trọng âm (Word Stress)

### Quy tắc trọng âm từ 2 âm tiết

**Danh từ và tính từ 2 âm tiết:** thường nhấn âm tiết **THỨ NHẤT**
- **TA**ble, **WIN**dow, **HAP**py, **CLEV**er

**Động từ 2 âm tiết:** thường nhấn âm tiết **THỨ HAI**
- de**CIDE**, re**CORD**, pre**SENT** (v), be**GIN**

**Ngoại lệ phổ biến:**
- **REC**ord (n) vs re**CORD** (v)
- **PRE**sent (n/adj) vs pre**SENT** (v)
- **IN**crease (n) vs in**CREASE** (v)

---

### Quy tắc trọng âm từ 3+ âm tiết

| Hậu tố | Trọng âm | Ví dụ |
|--------|---------|-------|
| -tion, -sion | âm trước hậu tố | edu**CA**tion, **DE**ci**SION** |
| -ic, -ical | âm trước hậu tố | e**CO**nomic, ge**O**graphical |
| -ity, -ety | 3 âm từ cuối | u**NI**versity, so**CI**ety |
| -ous, -ful, -less, -ment, -ness | giữ trọng âm gốc | **DAN**gerous, **CARE**ful |

---

## Phát âm đuôi **-ed**

| Điều kiện | Phát âm | Ví dụ |
|-----------|---------|-------|
| Sau /t/, /d/ | /ɪd/ | want**ed**, need**ed** |
| Sau âm hữu thanh (trừ /d/) | /d/ | play**ed**, liv**ed** |
| Sau âm vô thanh (trừ /t/) | /t/ | walk**ed**, stop**ped** |

---

## Phát âm đuôi **-s/-es**

| Điều kiện | Phát âm | Ví dụ |
|-----------|---------|-------|
| Sau /s/, /z/, /ʃ/, /ʒ/, /tʃ/, /dʒ/ | /ɪz/ | bus**es**, watch**es** |
| Sau âm vô thanh | /s/ | book**s**, stop**s** |
| Sau âm hữu thanh | /z/ | bag**s**, play**s** |`,
        },
        {
          title: "Phát âm nguyên âm và âm câm (Silent letters)",
          order: 4,
          content: `## Phát âm nguyên âm dễ nhầm

### Nguyên âm "ea"
- /iː/: read (đọc), meat, speak, teach, beach
- /e/: read (đã đọc – quá khứ), bread, dead, head, health
- /eɪ/: break, great, steak

### Chữ "oo"
- /uː/: food, school, cool, moon, tool
- /ʊ/: book, cook, look, foot, wood, good

### Chữ "ou"
- /aʊ/: out, house, loud, found, round
- /ʌ/: young, country, trouble, couple
- /uː/: you, soup, group, through
- /ɔː/: four, your, court, pour

---

## Âm câm (Silent letters) thường gặp

| Âm câm | Ví dụ |
|--------|-------|
| Silent **k** | know, knife, knee, knock, knight |
| Silent **w** | write, wrap, wrong, wrist, who, whole |
| Silent **b** | climb, bomb, comb, doubt, thumb |
| Silent **h** | hour, honest, honour, heir |
| Silent **g** | sign, foreign, gnome, gnarled |
| Silent **l** | calm, half, walk, talk, folk, salmon |
| Silent **t** | listen, fasten, castle, whistle, often |
| Silent **gh** | night, light, though, through, daughter |

---

## Phân biệt /θ/ và /ð/

- /θ/ (vô thanh): think, thing, thank, three, through, healthy
- /ð/ (hữu thanh): this, that, the, them, there, though, weather, mother`,
        },
      ],
      quiz: {
        title: "Quiz: Phát âm và Trọng âm",
        questions: [
          {
            text: "Choose the word with different stress pattern: A. hospital  B. education  C. important  D. dependent",
            options: JSON.stringify([
              "hospital (stress on 1st syllable)",
              "education (stress on 3rd syllable)",
              "important (stress on 2nd syllable)",
              "dependent (stress on 2nd syllable)",
            ]),
            answer: "0",
          },
          {
            text: "The word 'wanted' is pronounced:",
            options: JSON.stringify(["/wɒntd/", "/wɒntɪd/", "/wɒnts/", "/wɒnt/"]),
            answer: "1",
          },
          {
            text: "Which word has the underlined part pronounced differently? A. ch**urch** B. ch**em**ist C. ch**all**enge D. ch**ea**p",
            options: JSON.stringify([
              "church (/tʃ/)",
              "chemist (/k/ – different!)",
              "challenge (/tʃ/)",
              "cheap (/tʃ/)",
            ]),
            answer: "1",
          },
          {
            text: "Which word contains a silent letter? A. garden  B. know  C. listen  D. both B and C",
            options: JSON.stringify(["garden", "know (silent k)", "listen (silent t)", "Both know and listen"]),
            answer: "3",
          },
          {
            text: "The word 'record' (noun) has stress on:",
            options: JSON.stringify(["The first syllable: RE-cord", "The second syllable: re-CORD", "Both equally", "Neither"]),
            answer: "0",
          },
        ],
      },
    },
    {
      title: "Kỹ năng đọc hiểu và Điền từ",
      order: 3,
      lessons: [
        {
          title: "Chiến lược đọc hiểu – Skimming và Scanning",
          order: 5,
          content: `## Kỹ năng đọc hiểu (Reading Comprehension)

### Phân loại câu hỏi trong đề thi THPT QG

| Loại câu hỏi | Chiến lược |
|-------------|-----------|
| Main idea / Topic | Đọc câu đầu/cuối đoạn |
| Detail question | Scan từ khóa trong đề → tìm trong bài |
| Inference | Đọc kỹ đoạn liên quan, suy luận |
| Vocabulary in context | Đọc câu trước/sau, đoán nghĩa |
| Reference (it/they/this) | Tìm danh từ mà đại từ thay thế |

---

### Chiến lược SKIMMING (đọc lướt)
Mục đích: nắm ý chính, bố cục bài
- Đọc tiêu đề, heading, caption ảnh
- Đọc câu đầu mỗi đoạn (topic sentence)
- Đọc câu kết đoạn / bài

### Chiến lược SCANNING (đọc quét)
Mục đích: tìm thông tin cụ thể
- Xác định từ khóa trong câu hỏi
- Quét mắt nhanh qua bài để tìm từ khóa
- Đọc kỹ phần có từ khóa

---

### Kỹ thuật loại trừ đáp án
1. Loại những đáp án chứa từ/ý KHÔNG có trong bài
2. Loại đáp án chứa thông tin **đúng nhưng không trả lời câu hỏi**
3. Loại đáp án **quá tổng quát** hoặc **quá cụ thể**
4. Chọn đáp án **diễn đạt lại** ý của bài bằng từ khác (paraphrase)

---

### Từ vựng chủ đề thường gặp

**Environment:**
- global warming, carbon footprint, renewable energy, deforestation
- biodiversity, ecosystem, greenhouse gas, sustainable development

**Technology:**
- artificial intelligence, social media, cybersecurity, digital literacy
- automation, innovation, data privacy, algorithm`,
        },
        {
          title: "Cloze test – Điền từ vào đoạn văn",
          order: 6,
          content: `## Cloze Test (Điền từ vào chỗ trống)

### Chiến lược làm bài cloze test

**Bước 1:** Đọc toàn bộ đoạn văn để hiểu nghĩa tổng quát

**Bước 2:** Xác định loại từ cần điền:
- Danh từ / Động từ / Tính từ / Trạng từ
- Giới từ / Liên từ / Mạo từ

**Bước 3:** Kiểm tra ngữ pháp:
- Sự hòa hợp chủ-vị
- Thì của động từ
- Cụm collocation / phrasal verb

---

### Giới từ thường gặp

| Động từ | Giới từ |
|---------|--------|
| depend on | on |
| consist of | of |
| result in / from | in/from |
| contribute to | to |
| participate in | in |
| be responsible for | for |
| cope with | with |
| interfere with | with |

### Liên từ thường gặp trong cloze

**Tương phản:** although, though, even though, however, nevertheless, in spite of, despite
**Nguyên nhân:** because, since, as, due to, owing to, as a result of
**Bổ sung:** moreover, furthermore, in addition, besides, as well as
**Kết quả:** therefore, thus, consequently, as a result, hence
**Ví dụ:** for example, for instance, such as, including

---

### Ví dụ phân tích
"The internet has __(1)__ changed the way we communicate. __(2)__ its advantages, however, it also brings about many challenges."

(1) → **dramatically/significantly/fundamentally** (trạng từ, bổ nghĩa cho "changed")
(2) → **Despite/In spite of** (giới từ, đứng trước danh từ, chỉ tương phản)`,
        },
      ],
      quiz: {
        title: "Quiz: Đọc hiểu và Điền từ",
        questions: [
          {
            text: "Choose the correct preposition: 'The success of the project depends _____ everyone's cooperation.'",
            options: JSON.stringify(["of", "on", "in", "with"]),
            answer: "1",
          },
          {
            text: "Choose the correct conjunction: 'She worked hard. _____, she failed the exam.'",
            options: JSON.stringify(["Therefore", "However", "Moreover", "Furthermore"]),
            answer: "1",
          },
          {
            text: "In a reading passage, the 'main idea' is best found by:",
            options: JSON.stringify([
              "Reading only the first sentence",
              "Scanning for specific numbers",
              "Reading the first sentence of each paragraph",
              "Counting the number of paragraphs",
            ]),
            answer: "2",
          },
          {
            text: "Choose the word that best fits: 'The government needs to take _____ action to tackle climate change.'",
            options: JSON.stringify(["efficient", "effective", "effect", "affected"]),
            answer: "1",
          },
          {
            text: "Choose the correct form: 'The number of students _____ in the scholarship has increased.' (participate)",
            options: JSON.stringify(["participate", "participating", "participated", "to participate"]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Unit 4: Writing – Kỹ năng viết nâng cao",
      order: 4,
      lessons: [
        {
          title: "Essay writing – Viết bài luận tiếng Anh",
          order: 7,
          content: `## Essay Writing

### 1. Cấu trúc bài luận (5 đoạn chuẩn)
1. **Introduction**: Hook + Background + Thesis statement
2. **Body paragraph 1**: Topic sentence + Evidence/Example + Explanation
3. **Body paragraph 2**: Topic sentence + Evidence/Example + Explanation
4. **Body paragraph 3** (tùy đề): Counterargument + Refutation
5. **Conclusion**: Restate thesis + Summary + Closing thought

### 2. Thesis statement
Câu chủ đề toàn bài, nêu quan điểm cụ thể:
✗ "Technology is important." (quá chung)
✓ "Social media, despite its benefits, negatively affects teenagers' mental health."

### 3. Từ nối (Cohesion)
| Chức năng | Từ nối |
|-----------|--------|
| Thêm ý | Furthermore, Moreover, In addition |
| Đối lập | However, Nevertheless, On the other hand |
| Kết quả | Therefore, Consequently, As a result |
| Ví dụ | For instance, For example, Such as |
| Kết luận | In conclusion, To sum up, Overall |

### 4. Dạng bài phổ biến trong THPT QG
- Argumentative essay (bài luận tranh luận)
- Cause and Effect essay
- Compare and Contrast essay`,
        },
        {
          title: "Letter writing – Viết thư và Email",
          order: 8,
          content: `## Letter & Email Writing

### 1. Formal Letter (Thư trang trọng)
Dùng khi viết cho người không quen hoặc công ty.

**Cấu trúc:**
\`\`\`
[Your address]              [Date]
[Recipient's address]

Dear Mr./Ms. [Surname],

[Opening: reason for writing]
[Body: main points]
[Closing: what you expect]

Yours sincerely/faithfully,
[Your name]
\`\`\`

- **Yours sincerely**: khi biết tên người nhận
- **Yours faithfully**: khi dùng Dear Sir/Madam

### 2. Informal Letter (Thư thông thường)
Gửi bạn bè, người thân — ngôn ngữ thân mật hơn.

Mở đầu: Dear + first name
Kết thúc: Best wishes / Love / Take care

### 3. Email
Tiêu đề rõ ràng; ngắn gọn; formal/informal tùy đối tượng.

**Formal email phrases:**
- I am writing to enquire about...
- Please find attached...
- I look forward to hearing from you.`,
        },
        {
          title: "Summary writing và Paraphrase",
          order: 9,
          content: `## Summary & Paraphrase

### 1. Tóm tắt (Summary writing)
Viết lại ý chính của đoạn văn bằng lời mình:
1. Đọc hiểu toàn đoạn
2. Xác định ý chính (main idea) của mỗi đoạn
3. Viết lại ngắn gọn bằng từ của mình
4. Không copy nguyên câu từ bài gốc

### 2. Paraphrase (Diễn giải lại)
Viết lại câu/đoạn với nghĩa tương đương nhưng khác từ và cấu trúc.

**Kỹ thuật paraphrase:**
- Dùng từ đồng nghĩa: important → significant, crucial
- Đổi cấu trúc: Active ↔ Passive
- Đổi vị trí cụm từ

**Ví dụ:**
> Original: "Many students struggle with time management."
> Paraphrase: "A large number of learners find it challenging to manage their time effectively."

### 3. Lỗi cần tránh
- Chỉ thay 1-2 từ (quá gần với bản gốc = đạo văn)
- Hiểu sai ý nghĩa ban đầu
- Dùng từ không phù hợp ngữ cảnh`,
        },
      ],
      quiz: {
        title: "Quiz 4 – Writing Skills",
        questions: [
          {
            text: "Cấu trúc bài essay 5 đoạn gồm: Introduction, Body (×3), và:",
            options: JSON.stringify(["Summary", "Conclusion", "Appendix", "Reference"]),
            answer: "1",
          },
          {
            text: "Khi viết formal letter mà không biết tên người nhận, kết thúc bằng:",
            options: JSON.stringify(["Yours sincerely", "Best wishes", "Yours faithfully", "Love"]),
            answer: "2",
          },
          {
            text: "Từ nối 'Furthermore' dùng để:",
            options: JSON.stringify(["Đối lập ý kiến", "Thêm ý kiến", "Đưa ra kết luận", "Đưa ra ví dụ"]),
            answer: "1",
          },
          {
            text: "Paraphrase là kỹ thuật:",
            options: JSON.stringify([
              "Copy nguyên câu từ bài gốc",
              "Viết lại ý với từ ngữ và cấu trúc khác",
              "Rút ngắn bài viết",
              "Dịch sang tiếng Việt",
            ]),
            answer: "1",
          },
          {
            text: "Thesis statement trong essay nên:",
            options: JSON.stringify([
              "Chung chung, không cụ thể",
              "Cụ thể, nêu rõ quan điểm của tác giả",
              "Đặt ở cuối bài",
              "Dùng từ ngữ phức tạp",
            ]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Unit 5: Speaking & Pronunciation – Giao tiếp và Phát âm",
      order: 5,
      lessons: [
        {
          title: "Pronunciation – Phát âm chuẩn",
          order: 10,
          content: `## Phát âm tiếng Anh

### 1. Phụ âm dễ nhầm
| Âm | Ví dụ | Mô tả |
|----|-------|-------|
| /θ/ | think, three | Đặt lưỡi giữa hai hàm răng |
| /ð/ | this, the, other | Rung dây thanh + /θ/ |
| /v/ | very, love | Môi trên+răng dưới, rung |
| /w/ | water, wood | Tròn môi, không chạm răng |
| /r/ | right, red | Cong lưỡi, không chạm vòm |

### 2. Trọng âm từ (Word stress)
- Danh từ/Tính từ 2 âm tiết: thường nhấn âm 1 → **PREsent, TAble**
- Động từ 2 âm tiết: thường nhấn âm 2 → **preSENT, rePEAT**
- Hậu tố -tion, -sion, -ic: nhấn vào âm tiết ngay trước → **eduCAtion**

### 3. Trọng âm câu (Sentence stress)
Nhấn vào: danh từ, động từ chính, tính từ, trạng từ
Không nhấn: đại từ, giới từ, liên từ, mạo từ

> "She BOUGHT a NEW DRESS yesterday."

### 4. Nối âm (Linking)
- Phụ âm + nguyên âm: "an apple" → /ə'næpl/
- Âm cuối bỏ: "good morning" → /gʊ'mɔːnɪŋ/`,
        },
        {
          title: "Speaking – Giao tiếp và Thuyết trình",
          order: 11,
          content: `## Speaking Skills

### 1. Cấu trúc thuyết trình
- **Introduction**: Chào hỏi + giới thiệu chủ đề + preview
- **Body**: 2-3 điểm chính với ví dụ minh họa
- **Conclusion**: Tóm tắt + lời kêu gọi hành động/câu hỏi

### 2. Discourse markers (Từ dẫn dắt)
| Chức năng | Cụm từ |
|-----------|---------|
| Bắt đầu | First of all, To begin with |
| Tiếp theo | Moving on to, Next |
| Tóm tắt | In summary, To wrap up |
| Nhấn mạnh | In fact, As a matter of fact |

### 3. Fluency strategies
- Dùng fillers: "Well...", "You know...", "Let me think..."
- Paraphrasing: "What I mean is...", "In other words..."
- Xin nhắc lại: "Could you repeat that?", "Sorry, I didn't catch that."

### 4. Kỹ năng tham gia thảo luận nhóm
- Đồng ý: "I agree with you on that point."
- Không đồng ý lịch sự: "I see your point, but I think..."
- Hỏi ý kiến: "What do you think about...?"
- Chuyển lượt: "I'd like to add that..."`,
        },
        {
          title: "Từ vựng THPT – Chủ đề thi",
          order: 12,
          content: `## Từ vựng theo Chủ đề THPT

### 1. Environment (Môi trường)
- pollution: ô nhiễm; deforestation: phá rừng
- renewable energy: năng lượng tái tạo
- greenhouse effect: hiệu ứng nhà kính
- biodiversity: đa dạng sinh học

### 2. Technology (Công nghệ)
- artificial intelligence (AI): trí tuệ nhân tạo
- social media: mạng xã hội
- cybersecurity: an ninh mạng
- innovation: đổi mới, sáng tạo

### 3. Health & Lifestyle
- sedentary lifestyle: lối sống ít vận động
- mental health: sức khỏe tâm thần
- vaccination: tiêm chủng
- obesity: béo phì

### 4. Education & Career
- distance learning: học từ xa
- vocational training: đào tạo nghề
- scholarship: học bổng
- curriculum: chương trình học

### 5. Collocations hay gặp trong đề thi
- make **progress** / make a **difference**
- have **access** to / have an **impact** on
- take **responsibility** for / take **advantage** of
- raise **awareness** / raise **funds**`,
        },
      ],
      quiz: {
        title: "Quiz 5 – Speaking & Vocabulary",
        questions: [
          {
            text: "Âm /θ/ trong từ 'think' được phát âm bằng cách:",
            options: JSON.stringify([
              "Rung môi và răng",
              "Đặt lưỡi giữa hai hàm răng",
              "Cong lưỡi ra sau",
              "Tròn môi",
            ]),
            answer: "1",
          },
          {
            text: "Trong tiếng Anh, danh từ 2 âm tiết thường được nhấn ở:",
            options: JSON.stringify(["Âm tiết thứ nhất", "Âm tiết thứ hai", "Âm tiết cuối cùng", "Không có quy tắc"]),
            answer: "0",
          },
          {
            text: "'Biodiversity' có nghĩa là:",
            options: JSON.stringify(["Ô nhiễm không khí", "Đa dạng sinh học", "Năng lượng mặt trời", "Thay đổi khí hậu"]),
            answer: "1",
          },
          {
            text: "Collocation đúng: 'make a ___'",
            options: JSON.stringify(["progress", "difference", "awareness", "advantage"]),
            answer: "1",
          },
          {
            text: "Discourse marker 'Moving on to...' dùng để:",
            options: JSON.stringify(["Kết thúc bài", "Chuyển sang điểm tiếp theo", "Đưa ra ví dụ", "Mở đầu bài nói"]),
            answer: "1",
          },
        ],
      },
    },
  ],
};



