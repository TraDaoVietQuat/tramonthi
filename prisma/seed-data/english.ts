import type { CourseData } from "./types";

// Nội dung theo SGK Tiếng Anh 10 – Global Success (Kết nối tri thức 2022)
export const ENGLISH_COURSE: CourseData = {
  title: "Tiếng Anh 10 – Ngữ pháp và Từ vựng",
  slug: "tieng-anh-10",
  subject: "english",
  grade: "10",
  description:
    "Khóa học Tiếng Anh lớp 10 theo chương trình THPT mới: ngữ pháp trọng tâm (các thì động từ, câu điều kiện, mệnh đề quan hệ), từ vựng theo chủ đề và kỹ năng đọc hiểu.",
  published: true,
  modules: [
    {
      title: "Ngữ pháp: Các thì động từ cơ bản",
      order: 1,
      lessons: [
        {
          title: "Thì hiện tại đơn và hiện tại tiếp diễn",
          order: 1,
          content: `## Thì hiện tại đơn (Simple Present Tense)

### Cấu trúc
| Dạng | Cấu trúc |
|------|----------|
| Khẳng định | S + V(s/es) |
| Phủ định | S + do/does + not + V |
| Nghi vấn | Do/Does + S + V? |

### Quy tắc thêm -s/-es
- Thêm **-s**: work → works, play → plays
- Thêm **-es** (kết thúc -o, -s, -x, -ch, -sh): go → goes, watch → watches
- Bỏ **y** thêm **-ies** (phụ âm + y): study → studies, carry → carries

### Cách dùng
1. Hành động lặp lại thường xuyên: *She goes to school every day.*
2. Sự thật hiển nhiên / quy luật: *The sun rises in the east.*
3. Lịch trình cố định: *The train leaves at 8 a.m.*

### Dấu hiệu nhận biết
always, usually, often, sometimes, rarely, never, every day/week/month, on Mondays

---

## Thì hiện tại tiếp diễn (Present Continuous Tense)

### Cấu trúc
| Dạng | Cấu trúc |
|------|----------|
| Khẳng định | S + am/is/are + V-ing |
| Phủ định | S + am/is/are + not + V-ing |
| Nghi vấn | Am/Is/Are + S + V-ing? |

### Quy tắc thêm -ing
- Thêm **-ing**: work → working, play → playing
- Gấp đôi phụ âm cuối (nguyên âm ngắn + phụ âm): run → running, sit → sitting
- Bỏ **-e** cuối: make → making, write → writing

### Cách dùng
1. Hành động đang xảy ra ngay lúc nói: *She is reading a book now.*
2. Hành động tạm thời: *He is working in Hà Nội this week.*
3. Kế hoạch tương lai đã sắp xếp: *We are meeting tomorrow at 3 p.m.*

### Dấu hiệu nhận biết
now, at the moment, at present, currently, Look!, Listen!, right now`,
        },
        {
          title: "Thì quá khứ đơn và quá khứ tiếp diễn",
          order: 2,
          content: `## Thì quá khứ đơn (Simple Past Tense)

### Cấu trúc
| Dạng | Cấu trúc |
|------|----------|
| Khẳng định | S + V-ed (quy tắc) / S + V₂ (bất quy tắc) |
| Phủ định | S + didn't + V nguyên thể |
| Nghi vấn | Did + S + V nguyên thể? |

### Một số động từ bất quy tắc quan trọng
| V₁ | V₂ | Nghĩa |
|----|-----|-------|
| go | went | đi |
| see | saw | nhìn thấy |
| come | came | đến |
| make | made | làm |
| take | took | lấy |
| write | wrote | viết |
| eat | ate | ăn |
| buy | bought | mua |
| think | thought | nghĩ |
| teach | taught | dạy |

### Cách dùng
1. Hành động đã xảy ra và kết thúc tại thời điểm xác định trong quá khứ
2. Chuỗi hành động liên tiếp trong quá khứ

### Dấu hiệu nhận biết
yesterday, last week/month/year, ago, in + năm quá khứ (in 2020), when I was young

---

## Thì quá khứ tiếp diễn (Past Continuous Tense)

### Cấu trúc: S + was/were + V-ing

### Cách dùng
1. Hành động đang diễn ra tại thời điểm xác định trong quá khứ:
   *At 8 p.m. last night, she was studying.*
2. Hành động đang diễn ra thì bị xen vào (dùng với Simple Past):
   *While I was walking to school, it started to rain.*
   *I was cooking when the phone rang.*
3. Hai hành động song song:
   *While she was cooking, he was watching TV.*

### Dấu hiệu nhận biết
while, when, at + giờ cụ thể trong quá khứ, at that moment`,
        },
        {
          title: "Thì hiện tại hoàn thành và tương lai đơn",
          order: 3,
          content: `## Thì hiện tại hoàn thành (Present Perfect Tense)

### Cấu trúc: S + have/has + V₃ (past participle)

### Cách dùng
1. Hành động xảy ra trong quá khứ, kết quả còn ảnh hưởng đến hiện tại:
   *I have lost my key.* (Tôi mất chìa khóa → chưa tìm lại được)
2. Kinh nghiệm sống (đã/chưa từng):
   *She has never been to Japan.*
3. Hành động vừa mới xảy ra (just):
   *He has just finished his homework.*
4. Hành động bắt đầu trong quá khứ và kéo dài đến hiện tại (for/since):
   *They have lived here for 10 years.*

### Dấu hiệu nhận biết
already, yet, just, ever, never, recently, lately, since, for, so far, up to now

---

## Thì tương lai đơn (Simple Future Tense)

### Cấu trúc: S + will + V nguyên thể

### Cách dùng
1. Dự đoán về tương lai (không chắc chắn):
   *I think it will rain tomorrow.*
2. Quyết định tức thì ngay lúc nói:
   *— The phone is ringing. — I'll get it!*
3. Lời hứa, lời đề nghị:
   *I will help you with your homework.*

### So sánh will vs be going to
| will | be going to |
|------|------------|
| Quyết định tức thì | Kế hoạch đã định sẵn |
| Dự đoán không có bằng chứng | Dự đoán có bằng chứng hiện tại |
| *I'll have a coffee.* | *I'm going to visit Hội An next week.* |`,
        },
      ],
      quiz: {
        title: "Quiz 1 – Các thì động từ cơ bản",
        questions: [
          {
            text: "She _____ (study) every evening. Chọn đáp án đúng:",
            options: JSON.stringify(["study", "studies", "is studying", "studied"]),
            answer: "1",
          },
          {
            text: "I _____ TV when my mother called me last night.",
            options: JSON.stringify(["watch", "watched", "was watching", "am watching"]),
            answer: "2",
          },
          {
            text: "Listen! Someone _____ at the door.",
            options: JSON.stringify(["knocks", "knocked", "knock", "is knocking"]),
            answer: "3",
          },
          {
            text: "Động từ 'go' ở thì quá khứ đơn (V₂) là gì?",
            options: JSON.stringify(["goed", "goes", "went", "gone"]),
            answer: "2",
          },
          {
            text: "She _____ never _____ to Paris. (kinh nghiệm, Present Perfect)",
            options: JSON.stringify(["has / been", "have / been", "was / gone", "did / go"]),
            answer: "0",
          },
        ],
      },
    },
    {
      title: "Ngữ pháp: Câu điều kiện và Mệnh đề quan hệ",
      order: 2,
      lessons: [
        {
          title: "Câu điều kiện loại 1, 2, 3",
          order: 1,
          content: `## Câu điều kiện (Conditional Sentences)

### Loại 1 – Điều kiện có thể xảy ra ở hiện tại/tương lai
**If + S + V(s/es), S + will + V**

*If it rains tomorrow, I will stay at home.*
*If you study hard, you will pass the exam.*

→ Dùng khi điều kiện **có thể xảy ra** trong tương lai.

---

### Loại 2 – Điều kiện không có thực ở hiện tại
**If + S + V-ed/were, S + would + V**

*If I had a lot of money, I would travel the world.*
*If I were you, I would apologize to her.*

→ Dùng khi điều kiện **không có thực hoặc khó xảy ra** ở hiện tại.
> ⚠️ Với động từ "to be", dùng **were** cho tất cả các ngôi (I/he/she/it were).

---

### Loại 3 – Điều kiện không có thực trong quá khứ
**If + S + had + V₃, S + would have + V₃**

*If she had studied harder, she would have passed the exam.*
*If they had left earlier, they would have caught the train.*

→ Dùng khi điều kiện **không xảy ra trong quá khứ** (tiếc nuối).

---

### Bảng tổng hợp

| Loại | Mệnh đề if | Mệnh đề chính | Ý nghĩa |
|------|-----------|---------------|---------|
| 1 | Simple Present | will + V | Có thể xảy ra |
| 2 | Simple Past | would + V | Không có thực (HT) |
| 3 | Past Perfect | would have + V₃ | Không có thực (QK) |`,
        },
        {
          title: "Mệnh đề quan hệ (Relative Clauses)",
          order: 2,
          content: `## Mệnh đề quan hệ (Relative Clauses)

Mệnh đề quan hệ bổ nghĩa cho danh từ đứng trước nó.

### Đại từ quan hệ

| Đại từ | Thay cho | Ví dụ |
|--------|---------|-------|
| **who** | Người (chủ ngữ) | The girl **who** won the prize is my sister. |
| **whom** | Người (tân ngữ) | The man **whom** I met was very kind. |
| **which** | Vật, sự việc | The book **which** I bought is interesting. |
| **that** | Người hoặc vật | The car **that** he drives is new. |
| **whose** | Sở hữu | The boy **whose** bike was stolen is crying. |

---

### Mệnh đề quan hệ xác định (Defining)
Cần thiết để xác định danh từ, **không có dấu phẩy**.

*The student **who studies** the hardest will get the prize.*
(Xác định học sinh nào → không bỏ được)

### Mệnh đề quan hệ không xác định (Non-defining)
Thông tin thêm, danh từ đã xác định rõ, **có dấu phẩy**, **không dùng that**.

*Hà Nội, **which is the capital of Vietnam**, has a population of over 8 million.*

---

### Rút gọn mệnh đề quan hệ
- **V-ing** (thay cho mệnh đề chủ động): *The man **sitting** in the corner is my uncle.*
- **V₃ / V-ed** (thay cho mệnh đề bị động): *The letter **written** by her was very touching.*`,
        },
      ],
      quiz: {
        title: "Quiz 2 – Câu điều kiện và Mệnh đề quan hệ",
        questions: [
          {
            text: "If I _____ you, I would study harder. (Điều kiện loại 2)",
            options: JSON.stringify(["am", "was", "were", "be"]),
            answer: "2",
          },
          {
            text: "If she _____ (study) harder, she _____ (pass) the exam last year. (Loại 3)",
            options: JSON.stringify(["had studied / would have passed", "studied / would pass", "had studied / would pass", "studied / would have passed"]),
            answer: "0",
          },
          {
            text: "The woman _____ I spoke to was very helpful.",
            options: JSON.stringify(["who", "which", "whose", "whom"]),
            answer: "3",
          },
          {
            text: "Câu nào dùng mệnh đề quan hệ KHÔNG xác định (non-defining) đúng?",
            options: JSON.stringify([
              "The boy that lives next door is my friend.",
              "My father, who is a doctor, works at the hospital.",
              "The book which I read was boring.",
              "The girl that won the race is tall.",
            ]),
            answer: "1",
          },
          {
            text: "Rút gọn: The students who are waiting outside look nervous. → ?",
            options: JSON.stringify([
              "The students waited outside look nervous.",
              "The students waiting outside look nervous.",
              "The students to wait outside look nervous.",
              "The students waited outside are nervous.",
            ]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Từ vựng theo chủ đề thi THPT",
      order: 3,
      lessons: [
        {
          title: "Từ vựng chủ đề Môi trường và Biến đổi khí hậu",
          order: 1,
          content: `## Từ vựng: Môi trường (Environment)

### Vấn đề môi trường
| Từ / Cụm từ | Nghĩa |
|-------------|-------|
| global warming | hiện tượng nóng lên toàn cầu |
| climate change | biến đổi khí hậu |
| greenhouse effect | hiệu ứng nhà kính |
| greenhouse gases | khí nhà kính (CO₂, CH₄, N₂O) |
| air / water / soil pollution | ô nhiễm không khí / nước / đất |
| deforestation | nạn phá rừng |
| desertification | sa mạc hóa |
| flooding / drought | lũ lụt / hạn hán |
| endangered species | loài có nguy cơ tuyệt chủng |
| extinction | sự tuyệt chủng |

### Giải pháp bảo vệ môi trường
| Từ / Cụm từ | Nghĩa |
|-------------|-------|
| renewable energy | năng lượng tái tạo |
| solar / wind / hydropower | năng lượng mặt trời / gió / thủy điện |
| recycle / reuse / reduce (3R) | tái chế / tái sử dụng / giảm thiểu |
| sustainable development | phát triển bền vững |
| carbon footprint | dấu chân carbon |
| eco-friendly | thân thiện với môi trường |
| biodiversity | đa dạng sinh học |
| conservation | bảo tồn |

### Cụm từ hay dùng trong bài thi
- **contribute to** climate change: góp phần gây ra BĐKH
- **raise awareness of**: nâng cao nhận thức về
- **take measures to** protect: thực hiện biện pháp bảo vệ
- **have a negative/positive impact on**: có tác động tiêu cực/tích cực đến
- **be responsible for**: chịu trách nhiệm về

### Ví dụ câu mẫu
- *Deforestation is one of the leading causes of climate change.*
- *We should switch to renewable energy to reduce our carbon footprint.*`,
        },
        {
          title: "Từ vựng chủ đề Khoa học và Công nghệ",
          order: 2,
          content: `## Từ vựng: Khoa học – Công nghệ (Science & Technology)

### Công nghệ thông tin
| Từ / Cụm từ | Nghĩa |
|-------------|-------|
| artificial intelligence (AI) | trí tuệ nhân tạo |
| machine learning | học máy |
| the Internet of Things (IoT) | Internet vạn vật |
| cloud computing | điện toán đám mây |
| cybersecurity | an ninh mạng |
| hacker / cybercrime | tin tặc / tội phạm mạng |
| virtual reality (VR) | thực tế ảo |
| augmented reality (AR) | thực tế tăng cường |
| automation | tự động hóa |
| digital transformation | chuyển đổi số |

### Khoa học và nghiên cứu
| Từ / Cụm từ | Nghĩa |
|-------------|-------|
| breakthrough / innovation | đột phá / đổi mới sáng tạo |
| experiment | thí nghiệm |
| hypothesis | giả thuyết |
| laboratory (lab) | phòng thí nghiệm |
| gene editing | chỉnh sửa gen |
| stem cells | tế bào gốc |
| nanotechnology | công nghệ nano |
| renewable energy | năng lượng tái tạo |

### Word formation – Tạo từ thường gặp
| Động từ | Danh từ | Tính từ |
|---------|---------|---------|
| invent | invention / inventor | inventive |
| discover | discovery | discoverable |
| develop | development | developed / developing |
| automate | automation | automated |
| digitize | digitization | digital |

### Collocations quan trọng
- **make** a breakthrough / a discovery / progress
- **conduct** an experiment / research
- **apply** technology to / in
- **launch** a product / a satellite`,
        },
      ],
      quiz: {
        title: "Quiz 3 – Từ vựng theo chủ đề",
        questions: [
          {
            text: "'Greenhouse effect' có nghĩa là gì?",
            options: JSON.stringify(["Nông nghiệp nhà kính", "Hiệu ứng nhà kính", "Năng lượng xanh", "Trồng cây trong nhà"]),
            answer: "1",
          },
          {
            text: "Từ nào có nghĩa là 'loài có nguy cơ tuyệt chủng'?",
            options: JSON.stringify(["extinct species", "rare species", "endangered species", "invasive species"]),
            answer: "2",
          },
          {
            text: "Chọn collocation đúng: _____ an experiment",
            options: JSON.stringify(["make", "do", "conduct", "Cả B và C đúng"]),
            answer: "3",
          },
          {
            text: "Danh từ của động từ 'invent' là gì?",
            options: JSON.stringify(["inventive", "inventiveness", "invention", "inventor"]),
            answer: "2",
          },
          {
            text: "'Carbon footprint' có nghĩa là:",
            options: JSON.stringify(["Dấu chân trên carbon", "Lượng khí CO₂ thải ra do hoạt động cá nhân/tổ chức", "Năng lượng mặt trời", "Ô nhiễm đất"]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Unit 4: Writing Skills – Kỹ năng viết",
      order: 4,
      lessons: [
        {
          title: "Viết đoạn văn – Paragraph Writing",
          order: 8,
          content: `## Paragraph Writing

### 1. Cấu trúc đoạn văn chuẩn
- **Topic sentence**: câu chủ đề (ý chính của đoạn)
- **Supporting sentences**: 3–5 câu hỗ trợ, ví dụ, chi tiết
- **Concluding sentence**: câu kết (tóm tắt hoặc mở rộng)

### 2. Các loại đoạn văn thường gặp trong THPT
| Loại | Mục đích | Ví dụ chủ đề |
|------|---------|--------------|
| Descriptive | Miêu tả | My hometown |
| Narrative | Kể chuyện | An unforgettable experience |
| Argumentative | Phản biện | Social media pros & cons |
| Expository | Giải thích | How plants make food |

### 3. Linking words quan trọng
- **Thêm ý**: Furthermore, Moreover, In addition, Besides
- **Đối lập**: However, Nevertheless, On the other hand
- **Nguyên nhân**: Because, Since, As, Due to
- **Kết quả**: Therefore, Thus, As a result, Consequently
- **Ví dụ**: For example, For instance, Such as`,
        },
        {
          title: "Viết luận – Essay Writing",
          order: 9,
          content: `## Essay Writing (Bài luận 5 đoạn)

### 1. Cấu trúc bài luận
**Introduction (Mở bài):**
- Hook: câu mở đầu gây chú ý
- Background: thông tin nền
- Thesis statement: luận điểm chính

**Body Paragraphs (Thân bài – 2–3 đoạn):**
- Mỗi đoạn: 1 luận điểm + bằng chứng + phân tích

**Conclusion (Kết bài):**
- Restate thesis (viết lại luận điểm)
- Summary of main points
- Final thought / recommendation

### 2. Chủ đề thường gặp trong THPT QG
- Technology and young people
- Environmental protection
- Education and career
- Social media impact

### 3. Mẫu Thesis Statement
> "While social media offers numerous benefits for communication, its negative effects on mental health and academic performance cannot be ignored."`,
        },
        {
          title: "Viết thư – Email và Formal/Informal Letter",
          order: 10,
          content: `## Letter & Email Writing

### 1. Thư trang trọng (Formal Letter)
**Format:**
Your address / Date
Recipient's address
Dear Sir/Madam (nếu không biết tên) / Dear Mr./Ms. Smith,

Body: nêu lý do, đặt vấn đề, đề xuất

Yours faithfully (không biết tên) / Yours sincerely (biết tên)
Your full name

### 2. Thư thân mật (Informal Letter/Email)
- Bắt đầu: Dear [first name], / Hi [name],
- Ngôn ngữ: tự nhiên, viết tắt OK
- Kết: Best wishes, / Take care, / Love,

### 3. Email trang trọng
**Subject line**: rõ ràng, ngắn gọn
**Salutation**: Dear Dr. Johnson,
**Body**: I am writing to... / I would like to...
**Closing**: I look forward to hearing from you.

### 4. Phân biệt formal vs informal
| Formal | Informal |
|--------|---------|
| I am writing to inform | Just a quick note |
| I would appreciate | Could you please |
| Yours sincerely | Best, / Cheers |`,
        },
      ],
      quiz: {
        title: "Quiz 4 – Writing Skills",
        questions: [
          {
            text: "The main idea of a paragraph is usually stated in the:",
            options: JSON.stringify(["Concluding sentence", "Supporting sentence", "Topic sentence", "Body sentence"]),
            answer: "2",
          },
          {
            text: "Choose the correct linking word: 'She studied hard. _____, she passed the exam.'",
            options: JSON.stringify(["However", "Therefore", "Although", "Unless"]),
            answer: "1",
          },
          {
            text: "In a formal letter, if you don't know the recipient's name, you should end with:",
            options: JSON.stringify(["Yours sincerely", "Best wishes", "Yours faithfully", "Love"]),
            answer: "2",
          },
          {
            text: "Which sentence is the best thesis statement?",
            options: JSON.stringify([
              "Social media is popular.",
              "I will discuss social media.",
              "Social media has both benefits and drawbacks for teenagers.",
              "Many people use social media.",
            ]),
            answer: "2",
          },
          {
            text: "The word 'Furthermore' is used to:",
            options: JSON.stringify(["Show contrast", "Add more information", "Give an example", "Show result"]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Unit 5: Speaking & Pronunciation – Kỹ năng nói",
      order: 5,
      lessons: [
        {
          title: "Phát âm và Trọng âm từ",
          order: 11,
          content: `## Pronunciation – Phát âm

### 1. Các âm hay nhầm lẫn

| Âm | Ví dụ | Mô tả |
|----|-------|-------|
| /θ/ | think, three | Đặt lưỡi giữa răng, thở ra |
| /ð/ | this, that | Như /θ/ nhưng có rung thanh |
| /æ/ | cat, hat | Miệng mở rộng |
| /ʌ/ | cup, bus | Miệng hơi mở |
| /ɪ/ | sit, bit | Ngắn, thư giãn |
| /iː/ | seat, beat | Dài, căng |

### 2. Trọng âm từ (Word Stress)
- 2 âm tiết: thường nhấn âm 1 → **TA**-ble, **STU**-dent
- Ngoại lệ: nhấn âm 2 → be**HIND**, a**LONE**
- Từ 3 âm tiết: **PO**-li-tic, **IM**-por-tant

### 3. Trọng âm theo loại từ
- Danh từ 2 âm tiết: âm 1 → **RE**-cord, **OB**-ject
- Động từ 2 âm tiết: âm 2 → re**CORD**, ob**JECT**`,
        },
        {
          title: "Giao tiếp – Common Expressions",
          order: 12,
          content: `## Giao tiếp thực tế

### 1. Expressions for Agreeing/Disagreeing
**Đồng ý:**
- I totally agree with you.
- That's a good point.
- Exactly! / Absolutely!
- You're right about that.

**Không đồng ý lịch sự:**
- I'm not sure I agree.
- I see your point, but...
- With respect, I think...
- Actually, I think differently.

### 2. Asking for Clarification
- Could you explain that again?
- What do you mean by...?
- Could you give an example?
- I'm not sure I follow.

### 3. Interrupting Politely
- Sorry to interrupt, but...
- Can I just add something?
- If I may...

### 4. Giving Opinions
- In my opinion, / I think, / I believe,
- As far as I'm concerned,
- From my point of view,
- It seems to me that...

### 5. Common THPT Speaking Topics
- Education and future careers
- Environmental issues
- Technology in daily life
- Vietnamese culture and traditions`,
        },
        {
          title: "Đọc hiểu và Từ vựng theo chủ đề",
          order: 13,
          content: `## Vocabulary by Topics (Từ vựng theo chủ đề)

### 1. Chủ đề Giáo dục (Education)
- curriculum /kəˈrɪkjʊləm/ – chương trình học
- scholarship – học bổng
- extracurricular – ngoại khóa
- compulsory – bắt buộc
- distance learning – học từ xa

### 2. Chủ đề Môi trường (Environment)
- biodiversity – đa dạng sinh học
- deforestation – phá rừng
- renewable energy – năng lượng tái tạo
- ecosystem – hệ sinh thái
- sustainable development – phát triển bền vững

### 3. Chủ đề Công nghệ (Technology)
- artificial intelligence – trí tuệ nhân tạo
- digital literacy – năng lực số
- cyberbullying – bắt nạt mạng
- social networking – mạng xã hội
- e-commerce – thương mại điện tử

### 4. Word Formation (Tạo từ)
| Gốc | Danh từ | Tính từ | Động từ |
|-----|---------|---------|---------|
| pollute | pollution | polluted | pollute |
| develop | development | developed | develop |
| educate | education | educational | educate |`,
        },
      ],
      quiz: {
        title: "Quiz 5 – Speaking & Vocabulary",
        questions: [
          {
            text: "Which word has the stress on the SECOND syllable?",
            options: JSON.stringify(["TABLE", "STUDENT", "beLIEVE", "TEACHer"]),
            answer: "2",
          },
          {
            text: "Choose the correct expression to disagree politely:",
            options: JSON.stringify([
              "You're completely wrong!",
              "I see your point, but I think differently.",
              "No way!",
              "That's nonsense.",
            ]),
            answer: "1",
          },
          {
            text: "The word 'deforestation' means:",
            options: JSON.stringify(["Planting trees", "Cutting down forests", "Forest fire", "Animal extinction"]),
            answer: "1",
          },
          {
            text: "The noun form of 'educate' is:",
            options: JSON.stringify(["educator", "educational", "education", "educative"]),
            answer: "2",
          },
          {
            text: "Which sound is in the word 'think'?",
            options: JSON.stringify(["/s/", "/t/", "/θ/", "/ð/"]),
            answer: "2",
          },
        ],
      },
    },
  ],
};
