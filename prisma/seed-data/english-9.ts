import { CourseData } from "./types";

export const ENGLISH_9_COURSE: CourseData = {
  title: "Tiếng Anh 9",
  slug: "tieng-anh-9",
  subject: "english",
  grade: "9",
  description: "12 units theo chương trình Tiếng Anh 9 Global Success (NXB Giáo dục Việt Nam & Pearson) – Tập một (Unit 1-6) và Tập hai (Unit 7-12).",
  published: true,
  modules: [
    {
      title: "Unit 1. Local Environment",
      order: 1,
      volume: 1,
      lessons: [
        {
          title: "Vocabulary & Pronunciation",
          order: 1,
          content: `## 1. Vocabulary — Local environment

| Từ vựng | Nghĩa | Ví dụ |
|---------|-------|-------|
| pollution (n) | ô nhiễm | Air pollution is a serious problem. |
| litter (n/v) | rác; xả rác | Please don't litter in the park. |
| recycle (v) | tái chế | We should recycle plastic bottles. |
| overcrowded (adj) | quá đông đúc | The city center is overcrowded. |
| community (n) | cộng đồng | Our community keeps the area clean. |
| deforestation (n) | phá rừng | Deforestation harms wildlife. |
| eco-friendly (adj) | thân thiện môi trường | Use eco-friendly products. |

## 2. Pronunciation — Stress on two-syllable words

Nhiều danh từ 2 âm tiết trọng âm rơi vào âm 1, động từ trọng âm rơi vào âm 2.

**Ví dụ:** LITter (n) vs. reCYcle (v)`,
        },
        {
          title: "Grammar: Relative clauses (defining)",
          order: 2,
          content: `## Mệnh đề quan hệ xác định

Dùng **who/which/that/where** để bổ nghĩa cho danh từ đứng trước, xác định rõ danh từ đó là ai/cái gì.

- **who:** thay cho người (chủ ngữ) — The man **who** lives next door is a teacher.
- **which:** thay cho vật — The river **which** flows through town is polluted.
- **that:** thay cho người hoặc vật — The park **that** we visited was clean.
- **where:** thay cho nơi chốn — This is the village **where** I was born.

**Lưu ý:** Không dùng dấu phẩy trước mệnh đề quan hệ xác định.`,
        },
        {
          title: "Reading, Speaking & Writing",
          order: 3,
          content: `## Reading

Đọc đoạn văn về vấn đề môi trường tại địa phương (ô nhiễm không khí, rác thải, nước thải), trả lời câu hỏi đọc hiểu và tìm ý chính từng đoạn.

## Speaking

Thảo luận về các vấn đề môi trường ở nơi em sống và đề xuất giải pháp (trồng cây, phân loại rác, hạn chế túi ni lông).

## Writing

Viết đoạn văn (100-120 từ) mô tả một vấn đề môi trường ở địa phương em và đề xuất cách giải quyết.`,
        },
      ],
      quiz: {
        title: "Ôn tập Unit 1: Local Environment",
        questions: [
          { text: "\"Litter\" (v) nghĩa là:", options: JSON.stringify(["Xả rác", "Tái chế", "Trồng cây", "Dọn dẹp"]), answer: "0" },
          { text: "Chọn từ đúng: The city center is very ___.", options: JSON.stringify(["overcrowded", "recycle", "litter", "eco"]), answer: "0" },
          { text: "Mệnh đề quan hệ dùng cho người (chủ ngữ) là:", options: JSON.stringify(["which", "who", "where", "what"]), answer: "1" },
          { text: "The river ___ flows through town is polluted. Chọn từ đúng:", options: JSON.stringify(["who", "which", "when", "whom"]), answer: "1" },
          { text: "This is the village ___ I was born. Chọn từ đúng:", options: JSON.stringify(["which", "where", "who", "what"]), answer: "1" },
          { text: "Mệnh đề quan hệ xác định KHÔNG dùng:", options: JSON.stringify(["Dấu phẩy trước mệnh đề", "who", "that", "which"]), answer: "0" },
          { text: "\"Deforestation\" nghĩa là:", options: JSON.stringify(["Phá rừng", "Trồng rừng", "Ô nhiễm nước", "Tái chế"]), answer: "0" },
          { text: "\"Eco-friendly\" nghĩa là:", options: JSON.stringify(["Gây hại môi trường", "Thân thiện môi trường", "Đắt tiền", "Hiện đại"]), answer: "1" },
          { text: "That thay thế được cho:", options: JSON.stringify(["Chỉ người", "Chỉ vật", "Cả người và vật", "Không thay thế được gì"]), answer: "2" },
          { text: "\"Community\" nghĩa là:", options: JSON.stringify(["Cộng đồng", "Cá nhân", "Chính phủ", "Công ty"]), answer: "0" },
          { text: "The man ___ lives next door is a teacher. Chọn từ đúng:", options: JSON.stringify(["which", "who", "where", "whose only"]), answer: "1" },
          { text: "Trọng âm của danh từ 2 âm tiết \"litter\" rơi vào:", options: JSON.stringify(["Âm tiết 1", "Âm tiết 2", "Không có trọng âm", "Cả hai âm tiết"]), answer: "0" },
          { text: "\"Recycle\" là loại từ:", options: JSON.stringify(["Danh từ", "Động từ", "Tính từ", "Trạng từ"]), answer: "1" },
          { text: "Giải pháp giảm ô nhiễm môi trường địa phương KHÔNG bao gồm:", options: JSON.stringify(["Trồng cây xanh", "Phân loại rác", "Xả rác bừa bãi", "Hạn chế túi ni lông"]), answer: "2" },
          { text: "Chọn câu đúng ngữ pháp:", options: JSON.stringify(["The park which we visited was clean.", "The park who we visited was clean.", "The park, which we visited, clean.", "The park where we visited was clean."]), answer: "0" },
          { text: "\"Pollution\" là loại từ:", options: JSON.stringify(["Động từ", "Danh từ", "Tính từ", "Giới từ"]), answer: "1" },
          { text: "Trong bài Reading, chủ đề chính là:", options: JSON.stringify(["Vấn đề môi trường địa phương", "Du lịch", "Ẩm thực", "Thể thao"]), answer: "0" },
          { text: "Từ nào KHÔNG liên quan đến chủ đề môi trường?", options: JSON.stringify(["Pollution", "Recycle", "Recipe", "Litter"]), answer: "2" },
          { text: "Chọn từ đồng nghĩa gần nhất với \"rubbish\":", options: JSON.stringify(["Litter", "Community", "Environment", "Recycle"]), answer: "0" },
          { text: "Mục tiêu của Writing trong Unit 1 là:", options: JSON.stringify(["Viết đoạn văn về vấn đề môi trường địa phương", "Viết thư mời", "Viết công thức nấu ăn", "Viết đơn xin việc"]), answer: "0" },
        ],
      },
    },
    {
      title: "Unit 2. City Life",
      order: 2,
      volume: 1,
      lessons: [
        {
          title: "Vocabulary & Pronunciation",
          order: 1,
          content: `## 1. Vocabulary — City life

| Từ vựng | Nghĩa | Ví dụ |
|---------|-------|-------|
| skyscraper (n) | tòa nhà chọc trời | New York has many skyscrapers. |
| public transport (n) | phương tiện công cộng | I use public transport to school. |
| convenience (n) | sự tiện lợi | City life offers great convenience. |
| traffic jam (n) | tắc đường | Traffic jams happen every morning. |
| cost of living (n. phr) | chi phí sinh hoạt | The cost of living in the city is high. |
| high-rise (adj) | nhà cao tầng | They live in a high-rise building. |

## 2. Pronunciation — Sentence stress

Trong câu, các từ mang nội dung chính (danh từ, động từ, tính từ) thường được nhấn trọng âm, còn từ chức năng (giới từ, mạo từ) thường không nhấn.`,
        },
        {
          title: "Grammar: Comparative and superlative forms",
          order: 2,
          content: `## So sánh hơn và so sánh nhất

**So sánh hơn:** adj/adv + -er + than (tính từ ngắn), more + adj/adv + than (tính từ dài)

- City life is **more convenient than** country life.
- The traffic here is **worse than** before.

**So sánh nhất:** the + adj/adv + -est, the most + adj/adv

- This is **the tallest** skyscraper in the city.
- It is **the most expensive** area to live in.

**So sánh kép (càng...càng):** the + so sánh hơn, the + so sánh hơn — *The bigger the city, the busier the life.*`,
        },
        {
          title: "Reading, Speaking & Writing",
          order: 3,
          content: `## Reading

Đọc bài về ưu và nhược điểm của cuộc sống thành thị (tiện nghi, cơ hội việc làm) so với nông thôn (không khí trong lành, yên tĩnh).

## Speaking

Thảo luận theo cặp: so sánh cuộc sống ở thành phố và nông thôn, nêu ưu nhược điểm mỗi bên.

## Writing

Viết đoạn văn so sánh cuộc sống thành thị và nông thôn (100-120 từ), sử dụng cấu trúc so sánh hơn/so sánh nhất đã học.`,
        },
      ],
      quiz: {
        title: "Ôn tập Unit 2: City Life",
        questions: [
          { text: "\"Skyscraper\" nghĩa là:", options: JSON.stringify(["Tòa nhà chọc trời", "Công viên", "Nhà ga", "Cầu vượt"]), answer: "0" },
          { text: "City life is ___ (convenient) than country life. Chọn dạng đúng:", options: JSON.stringify(["convenienter", "more convenient", "most convenient", "convenient"]), answer: "1" },
          { text: "This is the ___ (tall) skyscraper. Chọn dạng đúng:", options: JSON.stringify(["taller", "tallest", "most tall", "tall"]), answer: "1" },
          { text: "So sánh hơn với tính từ ngắn dùng công thức:", options: JSON.stringify(["more + adj", "adj + -er", "the most + adj", "adj + -est"]), answer: "1" },
          { text: "So sánh nhất với tính từ dài dùng công thức:", options: JSON.stringify(["the + adj + -est", "the most + adj", "more + adj", "adj + -er"]), answer: "1" },
          { text: "\"Traffic jam\" nghĩa là:", options: JSON.stringify(["Tắc đường", "Đường cao tốc", "Bến xe", "Vỉa hè"]), answer: "0" },
          { text: "\"Cost of living\" nghĩa là:", options: JSON.stringify(["Chi phí sinh hoạt", "Chất lượng cuộc sống", "Tuổi thọ", "Mức lương"]), answer: "0" },
          { text: "The bigger the city, ___ busier the life. Chọn từ đúng:", options: JSON.stringify(["the", "a", "more", "most"]), answer: "0" },
          { text: "\"Public transport\" nghĩa là:", options: JSON.stringify(["Phương tiện công cộng", "Xe riêng", "Xe đạp", "Máy bay"]), answer: "0" },
          { text: "Từ nào là tính từ mô tả nhà cao tầng?", options: JSON.stringify(["High-rise", "Convenience", "Traffic", "Skyscraper (n)"]), answer: "0" },
          { text: "So sánh hơn của \"bad\" là:", options: JSON.stringify(["badder", "worse", "more bad", "baddest"]), answer: "1" },
          { text: "Trong câu so sánh kép, cấu trúc đúng là:", options: JSON.stringify(["the + so sánh hơn, the + so sánh hơn", "so sánh hơn + than + so sánh hơn", "the + so sánh nhất, the + so sánh nhất", "so sánh nhất + than"]), answer: "0" },
          { text: "Ưu điểm của thành phố KHÔNG bao gồm:", options: JSON.stringify(["Nhiều cơ hội việc làm", "Không khí trong lành hơn nông thôn", "Tiện nghi hiện đại", "Giao thông công cộng phát triển"]), answer: "1" },
          { text: "Chủ đề chính của bài đọc Unit 2 là:", options: JSON.stringify(["So sánh thành thị và nông thôn", "Công thức nấu ăn", "Du lịch vũ trụ", "Bảo vệ môi trường"]), answer: "0" },
          { text: "\"Convenience\" là loại từ:", options: JSON.stringify(["Danh từ", "Động từ", "Tính từ", "Trạng từ"]), answer: "0" },
          { text: "Trọng âm câu thường rơi vào:", options: JSON.stringify(["Từ chức năng (giới từ, mạo từ)", "Từ mang nội dung chính", "Không có quy tắc", "Chỉ động từ"]), answer: "1" },
          { text: "Chọn câu đúng ngữ pháp:", options: JSON.stringify(["This city is more busy than before.", "This city is busier than before.", "This city is busyer than before.", "This city is most busy than before."]), answer: "1" },
          { text: "\"High-rise building\" nghĩa là:", options: JSON.stringify(["Nhà cao tầng", "Nhà cấp 4", "Biệt thự", "Chung cư thấp tầng"]), answer: "0" },
          { text: "Kỹ năng Writing của Unit 2 yêu cầu viết về:", options: JSON.stringify(["So sánh cuộc sống thành thị và nông thôn", "Kể một chuyến du lịch", "Miêu tả món ăn", "Viết thư xin lỗi"]), answer: "0" },
          { text: "So sánh nhất của \"good\" là:", options: JSON.stringify(["goodest", "best", "better", "more good"]), answer: "1" },
        ],
      },
    },
    {
      title: "Unit 3. Teen Stress and Pressure",
      order: 3,
      volume: 1,
      lessons: [
        {
          title: "Vocabulary & Pronunciation",
          order: 1,
          content: `## 1. Vocabulary — Stress and pressure

| Từ vựng | Nghĩa | Ví dụ |
|---------|-------|-------|
| stress (n) | căng thẳng | Exams cause a lot of stress. |
| pressure (n) | áp lực | Teens face pressure from parents. |
| anxiety (n) | sự lo lắng | She felt anxiety before the test. |
| relieve (v) | giảm bớt, làm dịu | Exercise helps relieve stress. |
| overwhelmed (adj) | quá tải, choáng ngợp | He felt overwhelmed with homework. |
| cope with (v. phr) | đối phó với | Learn to cope with stress. |

## 2. Pronunciation — Intonation in questions

Câu hỏi Yes/No lên giọng ở cuối; câu hỏi Wh- xuống giọng ở cuối.

**Ví dụ:** Are you okay? ↗ | What's wrong? ↘`,
        },
        {
          title: "Grammar: Reported speech (statements)",
          order: 2,
          content: `## Câu tường thuật (câu trần thuật)

Khi chuyển câu trực tiếp sang gián tiếp: lùi thì động từ, đổi đại từ nhân xưng và trạng từ chỉ thời gian/nơi chốn cho phù hợp.

- Direct: "I **am** stressed," she **said**.
  Reported: She said (that) she **was** stressed.
- Direct: "I **will** study harder," he said.
  Reported: He said (that) he **would** study harder.

**Bảng lùi thì phổ biến:** am/is/are → was/were; will → would; can → could; have done → had done`,
        },
        {
          title: "Reading, Speaking & Writing",
          order: 3,
          content: `## Reading

Đọc bài về nguyên nhân gây căng thẳng ở tuổi teen (áp lực học tập, kỳ vọng gia đình, mạng xã hội) và cách vượt qua.

## Speaking

Thảo luận cặp đôi: chia sẻ nguồn gây stress của bản thân và cách giải quyết (chia sẻ với bạn bè, tập thể dục, sắp xếp thời gian).

## Writing

Viết đoạn văn (100-120 từ) về một tình huống căng thẳng em từng trải qua và cách em đã vượt qua nó.`,
        },
      ],
      quiz: {
        title: "Ôn tập Unit 3: Teen Stress and Pressure",
        questions: [
          { text: "\"Stress\" nghĩa là:", options: JSON.stringify(["Căng thẳng", "Niềm vui", "Sự tự tin", "Sự thư giãn"]), answer: "0" },
          { text: "\"Relieve\" nghĩa là:", options: JSON.stringify(["Làm dịu, giảm bớt", "Làm tăng thêm", "Gây ra", "Bỏ qua"]), answer: "0" },
          { text: "Direct: \"I am stressed,\" she said. Reported speech đúng là:", options: JSON.stringify(["She said she is stressed.", "She said she was stressed.", "She said I was stressed.", "She said she stressed."]), answer: "1" },
          { text: "Trong câu tường thuật, \"will\" đổi thành:", options: JSON.stringify(["would", "will", "can", "shall"]), answer: "0" },
          { text: "Trong câu tường thuật, \"am/is/are\" đổi thành:", options: JSON.stringify(["was/were", "will be", "has been", "am/is/are (không đổi)"]), answer: "0" },
          { text: "\"Cope with\" nghĩa là:", options: JSON.stringify(["Đối phó với", "Tránh né", "Gây ra", "Bỏ cuộc"]), answer: "0" },
          { text: "\"Overwhelmed\" nghĩa là:", options: JSON.stringify(["Quá tải, choáng ngợp", "Thư giãn", "Vui vẻ", "Bình tĩnh"]), answer: "0" },
          { text: "Câu hỏi Yes/No có ngữ điệu:", options: JSON.stringify(["Lên giọng cuối câu", "Xuống giọng cuối câu", "Không đổi ngữ điệu", "Luôn nhấn từ đầu câu"]), answer: "0" },
          { text: "Câu hỏi Wh- có ngữ điệu:", options: JSON.stringify(["Lên giọng cuối câu", "Xuống giọng cuối câu", "Không có ngữ điệu", "Luôn hỏi lại"]), answer: "1" },
          { text: "\"Anxiety\" nghĩa là:", options: JSON.stringify(["Sự lo lắng", "Sự tự hào", "Sự vui mừng", "Sự chán nản"]), answer: "0" },
          { text: "Direct: \"I will study harder,\" he said. Reported speech đúng:", options: JSON.stringify(["He said he will study harder.", "He said he would study harder.", "He said he studies harder.", "He said I would study harder."]), answer: "1" },
          { text: "Nguyên nhân gây stress ở tuổi teen KHÔNG bao gồm:", options: JSON.stringify(["Áp lực học tập", "Kỳ vọng gia đình", "Mạng xã hội", "Chơi thể thao thường xuyên"]), answer: "3" },
          { text: "Cách giảm stress hiệu quả là:", options: JSON.stringify(["Tập thể dục, chia sẻ với bạn bè", "Tránh né mọi vấn đề", "Thức khuya làm bài liên tục", "Không nghỉ ngơi"]), answer: "0" },
          { text: "Trong câu tường thuật, \"can\" đổi thành:", options: JSON.stringify(["could", "can (không đổi)", "will", "would"]), answer: "0" },
          { text: "\"Pressure\" là loại từ:", options: JSON.stringify(["Danh từ", "Động từ", "Trạng từ", "Giới từ"]), answer: "0" },
          { text: "Chủ đề chính của Unit 3 là:", options: JSON.stringify(["Căng thẳng và áp lực ở tuổi teen", "Du lịch", "Ẩm thực", "Nghề nghiệp tương lai"]), answer: "0" },
          { text: "Chọn câu tường thuật đúng cho: \"I have finished my homework,\" she said.", options: JSON.stringify(["She said she had finished her homework.", "She said she has finished her homework.", "She said she finished her homework now.", "She said I have finished."]), answer: "0" },
          { text: "Kỹ năng Writing Unit 3 yêu cầu viết về:", options: JSON.stringify(["Một tình huống căng thẳng và cách vượt qua", "Một công thức nấu ăn", "Một chuyến du lịch vũ trụ", "Nghề nghiệp mơ ước"]), answer: "0" },
          { text: "Từ nào liên quan đến chủ đề Unit 3?", options: JSON.stringify(["Stress", "Skyscraper", "Recipe", "Spacecraft"]), answer: "0" },
          { text: "Mục đích chính khi học Reported speech là:", options: JSON.stringify(["Thuật lại lời người khác nói một cách gián tiếp", "Hỏi trực tiếp", "Viết công thức nấu ăn", "So sánh hai đối tượng"]), answer: "0" },
        ],
      },
    },
    {
      title: "Unit 4. Life in the Past",
      order: 4,
      volume: 1,
      lessons: [
        {
          title: "Vocabulary & Pronunciation",
          order: 1,
          content: `## 1. Vocabulary — Life in the past

| Từ vựng | Nghĩa | Ví dụ |
|---------|-------|-------|
| ancestor (n) | tổ tiên | Our ancestors lived a simple life. |
| tradition (n) | truyền thống | Many traditions have changed. |
| generation (n) | thế hệ | Life differs between generations. |
| primitive (adj) | thô sơ, nguyên thủy | People used primitive tools. |
| modernize (v) | hiện đại hóa | Villages have been modernized. |
| convenience (n) | sự tiện nghi | Modern life has more convenience. |

## 2. Pronunciation — Stress in compound nouns

Danh từ ghép (compound noun) thường nhấn trọng âm ở **từ đầu tiên**.

**Ví dụ:** LIFEstyle, GRANDparents`,
        },
        {
          title: "Grammar: Used to",
          order: 2,
          content: `## Cấu trúc "used to"

Diễn tả thói quen, hành động lặp lại trong quá khứ nhưng **không còn đúng ở hiện tại**.

> **S + used to + V(nguyên thể)**

- People **used to travel** by horse.
- She **didn't use to like** vegetables, but now she does.
- **Did** you **use to** live in the countryside?

**Phân biệt:** "be/get used to + V-ing" nghĩa là "quen với việc gì" — khác với "used to + V".`,
        },
        {
          title: "Reading, Speaking & Writing",
          order: 3,
          content: `## Reading

Đọc bài về cuộc sống ngày xưa so với ngày nay (phương tiện đi lại, liên lạc, giải trí) và những thay đổi qua các thế hệ.

## Speaking

Phỏng vấn ông bà/người lớn tuổi về cuộc sống ngày xưa, chia sẻ trước lớp những thông tin thú vị thu thập được.

## Writing

Viết đoạn văn (100-120 từ) so sánh cuộc sống ngày xưa và ngày nay, dùng cấu trúc "used to".`,
        },
      ],
      quiz: {
        title: "Ôn tập Unit 4: Life in the Past",
        questions: [
          { text: "\"Ancestor\" nghĩa là:", options: JSON.stringify(["Tổ tiên", "Con cháu", "Bạn bè", "Hàng xóm"]), answer: "0" },
          { text: "Cấu trúc \"used to\" diễn tả:", options: JSON.stringify(["Thói quen trong quá khứ không còn đúng hiện tại", "Hành động đang diễn ra", "Kế hoạch tương lai", "Sự thật hiển nhiên"]), answer: "0" },
          { text: "People ___ travel by horse. Chọn đáp án đúng:", options: JSON.stringify(["used to", "use to", "using to", "uses to"]), answer: "0" },
          { text: "Câu phủ định của \"used to\" là:", options: JSON.stringify(["didn't use to", "didn't used to", "doesn't use to", "not used to"]), answer: "0" },
          { text: "\"Be used to + V-ing\" nghĩa là:", options: JSON.stringify(["Quen với việc gì", "Thói quen quá khứ", "Kế hoạch tương lai", "Không liên quan"]), answer: "0" },
          { text: "\"Tradition\" nghĩa là:", options: JSON.stringify(["Truyền thống", "Hiện đại", "Công nghệ", "Khoa học"]), answer: "0" },
          { text: "\"Primitive\" nghĩa là:", options: JSON.stringify(["Thô sơ, nguyên thủy", "Hiện đại", "Tiện nghi", "Nhanh chóng"]), answer: "0" },
          { text: "Trọng âm của danh từ ghép thường rơi vào:", options: JSON.stringify(["Từ đầu tiên", "Từ thứ hai", "Âm tiết cuối", "Không có quy tắc"]), answer: "0" },
          { text: "\"Generation\" nghĩa là:", options: JSON.stringify(["Thế hệ", "Gia đình", "Dòng họ", "Quốc gia"]), answer: "0" },
          { text: "Did you ___ live in the countryside? Chọn đáp án đúng:", options: JSON.stringify(["use to", "used to", "using", "uses"]), answer: "0" },
          { text: "\"Modernize\" là loại từ:", options: JSON.stringify(["Động từ", "Danh từ", "Tính từ", "Trạng từ"]), answer: "0" },
          { text: "Chủ đề chính của Unit 4 là:", options: JSON.stringify(["Cuộc sống ngày xưa so với ngày nay", "Du lịch vũ trụ", "Công thức nấu ăn", "Nghề nghiệp tương lai"]), answer: "0" },
          { text: "She didn't use to like vegetables, but now she ___. Chọn đáp án đúng:", options: JSON.stringify(["does", "did", "do", "is"]), answer: "0" },
          { text: "Hoạt động Speaking của Unit 4 yêu cầu:", options: JSON.stringify(["Phỏng vấn người lớn tuổi về cuộc sống xưa", "Thảo luận về stress", "Mô tả món ăn", "Giới thiệu nghề nghiệp"]), answer: "0" },
          { text: "Từ nào KHÔNG liên quan đến chủ đề Unit 4?", options: JSON.stringify(["Ancestor", "Tradition", "Recipe", "Generation"]), answer: "2" },
          { text: "Cấu trúc đúng của \"used to\" ở thể khẳng định là:", options: JSON.stringify(["S + used to + V-ing", "S + used to + V(nguyên thể)", "S + use + to V", "S + was used to + V"]), answer: "1" },
          { text: "\"Convenience\" trong bài liên quan đến:", options: JSON.stringify(["Sự tiện nghi của cuộc sống hiện đại", "Sự khó khăn", "Truyền thống cổ xưa", "Thiên tai"]), answer: "0" },
          { text: "Chọn câu đúng ngữ pháp:", options: JSON.stringify(["He use to smoke.", "He used to smoke.", "He was use to smoke.", "He using to smoke."]), answer: "1" },
          { text: "Mục đích của bài Writing Unit 4 là:", options: JSON.stringify(["So sánh cuộc sống xưa và nay", "Viết đơn xin việc", "Miêu tả căng thẳng", "Viết về du lịch không gian"]), answer: "0" },
          { text: "\"Lifestyle\" là ví dụ của:", options: JSON.stringify(["Danh từ ghép", "Động từ ghép", "Tính từ ghép", "Trạng từ ghép"]), answer: "0" },
        ],
      },
    },
    {
      title: "Unit 5. Wonders of Vietnam",
      order: 5,
      volume: 1,
      lessons: [
        {
          title: "Vocabulary & Pronunciation",
          order: 1,
          content: `## 1. Vocabulary — Wonders of Vietnam

| Từ vựng | Nghĩa | Ví dụ |
|---------|-------|-------|
| heritage site (n. phr) | di sản | Ha Long Bay is a heritage site. |
| landscape (n) | phong cảnh | The landscape here is stunning. |
| limestone (n) | đá vôi | The cave is made of limestone. |
| breathtaking (adj) | ngoạn mục | The view was breathtaking. |
| preserve (v) | bảo tồn | We must preserve our heritage. |
| attraction (n) | điểm thu hút | This is a popular tourist attraction. |

## 2. Pronunciation — Intonation in exclamations

Câu cảm thán (What a..., How...) thường xuống giọng mạnh ở từ nhấn.

**Ví dụ:** What a **beautiful** view! ↘`,
        },
        {
          title: "Grammar: Passive voice",
          order: 2,
          content: `## Câu bị động

> **S + be + V(p.p) + (by + O)**

Dùng khi muốn nhấn mạnh vào đối tượng chịu tác động của hành động, hơn là người/vật thực hiện.

- Active: People **visit** Ha Long Bay every year.
- Passive: Ha Long Bay **is visited** by people every year.
- Active: UNESCO **recognized** the site in 1994.
- Passive: The site **was recognized** by UNESCO in 1994.

**Lưu ý thì:** động từ "be" chia theo đúng thì của câu chủ động (hiện tại đơn → is/are + p.p; quá khứ đơn → was/were + p.p).`,
        },
        {
          title: "Reading, Speaking & Writing",
          order: 3,
          content: `## Reading

Đọc bài giới thiệu về các kỳ quan, di sản thiên nhiên của Việt Nam (Vịnh Hạ Long, Phong Nha - Kẻ Bàng, Tràng An...) và giá trị của chúng.

## Speaking

Giới thiệu về một danh lam thắng cảnh Việt Nam mà em yêu thích, nêu lý do và trải nghiệm (nếu có).

## Writing

Viết đoạn văn (100-120 từ) giới thiệu một kỳ quan/di sản của Việt Nam, dùng câu bị động khi phù hợp.`,
        },
      ],
      quiz: {
        title: "Ôn tập Unit 5: Wonders of Vietnam",
        questions: [
          { text: "\"Heritage site\" nghĩa là:", options: JSON.stringify(["Di sản", "Nhà hàng", "Trường học", "Bệnh viện"]), answer: "0" },
          { text: "Câu bị động có cấu trúc:", options: JSON.stringify(["S + be + V(p.p)", "S + V + O", "S + have + V(p.p)", "S + will + V"]), answer: "0" },
          { text: "Ha Long Bay ___ by people every year. Chọn đáp án đúng:", options: JSON.stringify(["is visited", "visits", "visited", "visiting"]), answer: "0" },
          { text: "The site ___ by UNESCO in 1994. Chọn đáp án đúng:", options: JSON.stringify(["was recognized", "is recognized", "recognized", "recognizes"]), answer: "0" },
          { text: "\"Breathtaking\" nghĩa là:", options: JSON.stringify(["Ngoạn mục", "Buồn tẻ", "Nguy hiểm", "Ồn ào"]), answer: "0" },
          { text: "\"Preserve\" nghĩa là:", options: JSON.stringify(["Bảo tồn", "Phá hủy", "Khám phá", "Xây dựng"]), answer: "0" },
          { text: "\"Limestone\" nghĩa là:", options: JSON.stringify(["Đá vôi", "Cát", "Đất sét", "Kim loại"]), answer: "0" },
          { text: "Câu bị động dùng khi muốn nhấn mạnh vào:", options: JSON.stringify(["Đối tượng chịu tác động", "Người thực hiện hành động", "Thời gian hành động", "Địa điểm"]), answer: "0" },
          { text: "\"Landscape\" nghĩa là:", options: JSON.stringify(["Phong cảnh", "Con người", "Động vật", "Thời tiết"]), answer: "0" },
          { text: "Chọn câu bị động đúng của: \"They built this temple in 1010.\"", options: JSON.stringify(["This temple was built in 1010.", "This temple is built in 1010.", "This temple built in 1010.", "This temple has build in 1010."]), answer: "0" },
          { text: "\"Attraction\" trong ngữ cảnh du lịch nghĩa là:", options: JSON.stringify(["Điểm thu hút khách du lịch", "Sự nguy hiểm", "Chi phí du lịch", "Phương tiện di chuyển"]), answer: "0" },
          { text: "Trong câu cảm thán \"What a beautiful view!\", ngữ điệu:", options: JSON.stringify(["Xuống giọng mạnh ở từ nhấn", "Lên giọng cuối câu", "Giữ đều không đổi", "Không có ngữ điệu"]), answer: "0" },
          { text: "Chủ đề chính của Unit 5 là:", options: JSON.stringify(["Các kỳ quan, di sản của Việt Nam", "Cuộc sống thành thị", "Nghề nghiệp tương lai", "Du lịch vũ trụ"]), answer: "0" },
          { text: "Ví dụ về di sản thiên nhiên Việt Nam là:", options: JSON.stringify(["Vịnh Hạ Long", "Tháp Eiffel", "Vạn Lý Trường Thành", "Kim tự tháp Ai Cập"]), answer: "0" },
          { text: "Động từ \"be\" trong câu bị động được chia theo:", options: JSON.stringify(["Thì của câu chủ động gốc", "Luôn ở hiện tại đơn", "Luôn ở quá khứ đơn", "Không cần chia thì"]), answer: "0" },
          { text: "Chọn câu bị động đúng: \"People speak English all over the world.\"", options: JSON.stringify(["English is spoken all over the world.", "English speaks all over the world.", "English was spoken all over the world.", "English spoken all over the world."]), answer: "0" },
          { text: "Kỹ năng Writing của Unit 5 yêu cầu viết về:", options: JSON.stringify(["Giới thiệu một kỳ quan/di sản Việt Nam", "So sánh thành thị nông thôn", "Nghề nghiệp mơ ước", "Một tình huống stress"]), answer: "0" },
          { text: "\"Wonder\" trong tiêu đề Unit 5 nghĩa là:", options: JSON.stringify(["Kỳ quan", "Sự lo lắng", "Nghề nghiệp", "Thói quen"]), answer: "0" },
          { text: "Phong Nha - Kẻ Bàng nổi tiếng với:", options: JSON.stringify(["Hệ thống hang động đá vôi", "Bãi biển", "Núi tuyết", "Sa mạc"]), answer: "0" },
          { text: "Trong câu bị động, \"by + O\" dùng để:", options: JSON.stringify(["Chỉ ra người/vật thực hiện hành động (nếu cần)", "Chỉ thời gian", "Chỉ địa điểm", "Không có chức năng gì"]), answer: "0" },
        ],
      },
    },
    {
      title: "Unit 6. Viet Nam: Then and Now",
      order: 6,
      volume: 1,
      lessons: [
        {
          title: "Vocabulary & Pronunciation",
          order: 1,
          content: `## 1. Vocabulary — Viet Nam: then and now

| Từ vựng | Nghĩa | Ví dụ |
|---------|-------|-------|
| development (n) | sự phát triển | Vietnam has seen rapid development. |
| infrastructure (n) | cơ sở hạ tầng | Infrastructure has improved a lot. |
| standard of living (n. phr) | mức sống | The standard of living has risen. |
| urbanization (n) | đô thị hóa | Urbanization is happening quickly. |
| transform (v) | biến đổi | The city has been transformed. |
| significant (adj) | đáng kể | There has been significant change. |

## 2. Pronunciation — Stress in words ending in -tion/-sion

Các từ kết thúc bằng **-tion/-sion** thường nhấn trọng âm ở âm tiết ngay trước đuôi đó.

**Ví dụ:** development → develoPMENT`,
        },
        {
          title: "Grammar: Past simple vs. Present perfect",
          order: 2,
          content: `## Phân biệt quá khứ đơn và hiện tại hoàn thành

**Quá khứ đơn:** diễn tả hành động đã xảy ra và kết thúc tại một thời điểm xác định trong quá khứ.
> Vietnam **joined** ASEAN in 1995.

**Hiện tại hoàn thành:** diễn tả hành động xảy ra trong quá khứ nhưng có liên quan/kết quả đến hiện tại, không xác định rõ thời điểm.
> Vietnam **has changed** a lot since 1995.

**Dấu hiệu nhận biết:** quá khứ đơn thường đi với mốc thời gian cụ thể (in 1995, last year); hiện tại hoàn thành thường đi với since, for, already, yet, just.`,
        },
        {
          title: "Reading, Speaking & Writing",
          order: 3,
          content: `## Reading

Đọc bài về sự thay đổi và phát triển của Việt Nam qua các thời kỳ (kinh tế, cơ sở hạ tầng, đời sống người dân).

## Speaking

Thảo luận về những thay đổi ở quê hương/thành phố em qua thời gian, sử dụng quá khứ đơn và hiện tại hoàn thành.

## Writing

Viết đoạn văn (100-120 từ) về sự phát triển của Việt Nam hoặc địa phương em từ trước đến nay.`,
        },
      ],
      quiz: {
        title: "Ôn tập Unit 6: Viet Nam - Then and Now",
        questions: [
          { text: "\"Development\" nghĩa là:", options: JSON.stringify(["Sự phát triển", "Sự suy thoái", "Sự ổn định", "Sự thất bại"]), answer: "0" },
          { text: "Vietnam ___ ASEAN in 1995. Chọn đáp án đúng:", options: JSON.stringify(["joined", "has joined", "join", "joins"]), answer: "0" },
          { text: "Vietnam ___ a lot since 1995. Chọn đáp án đúng:", options: JSON.stringify(["changed", "has changed", "change", "changing"]), answer: "1" },
          { text: "Quá khứ đơn dùng để diễn tả:", options: JSON.stringify(["Hành động đã xảy ra và kết thúc tại thời điểm xác định", "Hành động đang diễn ra", "Hành động chưa xảy ra", "Thói quen hiện tại"]), answer: "0" },
          { text: "Hiện tại hoàn thành thường đi với:", options: JSON.stringify(["since, for, already", "yesterday, last year", "next week", "tomorrow"]), answer: "0" },
          { text: "\"Infrastructure\" nghĩa là:", options: JSON.stringify(["Cơ sở hạ tầng", "Dân số", "Khí hậu", "Văn hóa"]), answer: "0" },
          { text: "\"Standard of living\" nghĩa là:", options: JSON.stringify(["Mức sống", "Tuổi thọ", "Trình độ học vấn", "Diện tích đất"]), answer: "0" },
          { text: "\"Urbanization\" nghĩa là:", options: JSON.stringify(["Đô thị hóa", "Công nghiệp hóa", "Hiện đại hóa nông nghiệp", "Toàn cầu hóa"]), answer: "0" },
          { text: "Trọng âm của từ \"development\" rơi vào:", options: JSON.stringify(["Âm tiết đầu", "Âm tiết ngay trước -ment", "Âm tiết cuối", "Không có trọng âm"]), answer: "1" },
          { text: "\"Transform\" là loại từ:", options: JSON.stringify(["Động từ", "Danh từ", "Tính từ", "Trạng từ"]), answer: "0" },
          { text: "Chọn câu đúng dùng hiện tại hoàn thành:", options: JSON.stringify(["She has lived here for 10 years.", "She has lived here in 2010.", "She lived here since 2010.", "She has live here for 10 years."]), answer: "0" },
          { text: "Chủ đề chính của Unit 6 là:", options: JSON.stringify(["Sự thay đổi và phát triển của Việt Nam", "Nghề nghiệp tương lai", "Du lịch vũ trụ", "Công thức nấu ăn"]), answer: "0" },
          { text: "\"Significant\" nghĩa là:", options: JSON.stringify(["Đáng kể", "Nhỏ nhặt", "Không quan trọng", "Bình thường"]), answer: "0" },
          { text: "Dấu hiệu dùng quá khứ đơn là:", options: JSON.stringify(["Mốc thời gian cụ thể như \"in 1995\"", "since 1995", "already", "just"]), answer: "0" },
          { text: "Chọn câu đúng: \"They ___ the bridge last year.\"", options: JSON.stringify(["built", "have built", "build", "has built"]), answer: "0" },
          { text: "Kỹ năng Writing Unit 6 yêu cầu viết về:", options: JSON.stringify(["Sự phát triển của Việt Nam/địa phương", "Một công thức nấu ăn", "Nghề nghiệp mơ ước", "Chuyến du lịch không gian"]), answer: "0" },
          { text: "\"Just, already, yet\" thường đi kèm thì:", options: JSON.stringify(["Hiện tại hoàn thành", "Quá khứ đơn", "Tương lai đơn", "Hiện tại đơn"]), answer: "0" },
          { text: "Việt Nam gia nhập ASEAN vào năm:", options: JSON.stringify(["1995", "2000", "1975", "2007"]), answer: "0" },
          { text: "Chọn câu đúng: \"I ___ my homework yet.\"", options: JSON.stringify(["haven't finished", "didn't finish", "don't finish", "won't finish"]), answer: "0" },
          { text: "Review 2 (cuối Unit 4-6) chủ yếu ôn tập:", options: JSON.stringify(["Từ vựng và ngữ pháp Unit 4, 5, 6", "Toàn bộ chương trình lớp 9", "Chỉ ngữ âm", "Chỉ kỹ năng nói"]), answer: "0" },
        ],
      },
    },
    {
      title: "Unit 7. Recipes and Eating Habits",
      order: 7,
      volume: 2,
      lessons: [
        {
          title: "Vocabulary & Pronunciation",
          order: 1,
          content: `## 1. Vocabulary — Recipes and eating habits

| Từ vựng | Nghĩa | Ví dụ |
|---------|-------|-------|
| ingredient (n) | nguyên liệu | Check the ingredients before cooking. |
| recipe (n) | công thức nấu ăn | This is my grandmother's recipe. |
| boil (v) | luộc, đun sôi | Boil the water first. |
| stir-fry (v) | xào | Stir-fry the vegetables quickly. |
| nutritious (adj) | bổ dưỡng | Eat more nutritious food. |
| eating habit (n. phr) | thói quen ăn uống | Good eating habits improve health. |

## 2. Pronunciation — Weak forms of "and"

Trong câu, "and" thường được phát âm yếu là /ən/ hoặc /n/ khi nối các từ trong danh sách.

**Ví dụ:** salt **and** pepper /ən/`,
        },
        {
          title: "Grammar: Quantifiers & Imperatives",
          order: 2,
          content: `## 1. Lượng từ (Quantifiers)

- **much** dùng với danh từ không đếm được: How **much** rice do we need?
- **many** dùng với danh từ đếm được số nhiều: How **many** eggs?
- **a little/little** (không đếm được), **a few/few** (đếm được): Add **a little** salt.
- **some/any:** some trong câu khẳng định, any trong câu phủ định/nghi vấn

## 2. Câu mệnh lệnh (Imperatives)

Dùng V nguyên thể đầu câu để đưa ra hướng dẫn, công thức nấu ăn:

> **Cut** the onions. **Don't add** too much sugar. **Stir** well before serving.`,
        },
        {
          title: "Reading, Speaking & Writing",
          order: 3,
          content: `## Reading

Đọc bài về thói quen ăn uống lành mạnh và công thức món ăn truyền thống Việt Nam.

## Speaking

Mô tả cách chế biến một món ăn yêu thích bằng câu mệnh lệnh (imperatives).

## Writing

Viết công thức nấu ăn đơn giản (100-120 từ) gồm nguyên liệu và các bước thực hiện.`,
        },
      ],
      quiz: {
        title: "Ôn tập Unit 7: Recipes and Eating Habits",
        questions: [
          { text: "\"Ingredient\" nghĩa là:", options: JSON.stringify(["Nguyên liệu", "Công thức", "Dụng cụ nấu ăn", "Hương vị"]), answer: "0" },
          { text: "\"Recipe\" nghĩa là:", options: JSON.stringify(["Công thức nấu ăn", "Nhà hàng", "Bữa ăn", "Thực đơn"]), answer: "0" },
          { text: "How ___ rice do we need? Chọn từ đúng (không đếm được):", options: JSON.stringify(["much", "many", "few", "a few"]), answer: "0" },
          { text: "How ___ eggs do we need? Chọn từ đúng (đếm được):", options: JSON.stringify(["much", "many", "little", "a little"]), answer: "1" },
          { text: "Câu mệnh lệnh bắt đầu bằng:", options: JSON.stringify(["V nguyên thể", "S + V", "To + V", "V-ing"]), answer: "0" },
          { text: "Chọn câu mệnh lệnh đúng:", options: JSON.stringify(["Cut the onions.", "You cut the onions.", "Cutting the onions.", "To cut the onions."]), answer: "0" },
          { text: "\"Stir-fry\" nghĩa là:", options: JSON.stringify(["Xào", "Luộc", "Nướng", "Hấp"]), answer: "0" },
          { text: "\"Boil\" nghĩa là:", options: JSON.stringify(["Luộc, đun sôi", "Xào", "Nướng", "Chiên"]), answer: "0" },
          { text: "\"Nutritious\" nghĩa là:", options: JSON.stringify(["Bổ dưỡng", "Độc hại", "Đắt tiền", "Ngon miệng"]), answer: "0" },
          { text: "Add ___ salt (một ít muối). Chọn từ đúng:", options: JSON.stringify(["a little", "a few", "many", "much (không dùng a)"]), answer: "0" },
          { text: "Câu phủ định mệnh lệnh dùng:", options: JSON.stringify(["Don't + V", "Not + V", "No + V", "Never + V-ing"]), answer: "0" },
          { text: "\"Eating habit\" nghĩa là:", options: JSON.stringify(["Thói quen ăn uống", "Nhà bếp", "Chế độ ăn kiêng", "Dinh dưỡng"]), answer: "0" },
          { text: "Trong câu khẳng định, lượng từ thường dùng là:", options: JSON.stringify(["some", "any", "no", "none"]), answer: "0" },
          { text: "Trong câu phủ định/nghi vấn, lượng từ thường dùng là:", options: JSON.stringify(["any", "some", "much only", "many only"]), answer: "0" },
          { text: "\"And\" trong danh sách liệt kê thường phát âm ở dạng:", options: JSON.stringify(["Yếu /ən/", "Mạnh /ænd/", "Không phát âm", "Luôn nhấn mạnh"]), answer: "0" },
          { text: "Chủ đề chính của Unit 7 là:", options: JSON.stringify(["Công thức nấu ăn và thói quen ăn uống", "Du lịch", "Nghề nghiệp", "Thay đổi xã hội"]), answer: "0" },
          { text: "Kỹ năng Writing Unit 7 yêu cầu viết:", options: JSON.stringify(["Một công thức nấu ăn đơn giản", "Một bài luận về môi trường", "Đơn xin việc", "Thư mời"]), answer: "0" },
          { text: "\"Few\" dùng với danh từ:", options: JSON.stringify(["Đếm được, số nhiều", "Không đếm được", "Số ít", "Riêng"]), answer: "0" },
          { text: "\"Little\" dùng với danh từ:", options: JSON.stringify(["Không đếm được", "Đếm được số nhiều", "Chỉ số ít riêng", "Chỉ danh từ riêng"]), answer: "0" },
          { text: "Chọn câu đúng: \"___ add too much sugar.\"", options: JSON.stringify(["Don't", "Not", "No", "Never to"]), answer: "0" },
        ],
      },
    },
    {
      title: "Unit 8. Tourism",
      order: 8,
      volume: 2,
      lessons: [
        {
          title: "Vocabulary & Pronunciation",
          order: 1,
          content: `## 1. Vocabulary — Tourism

| Từ vựng | Nghĩa | Ví dụ |
|---------|-------|-------|
| destination (n) | điểm đến | Da Nang is a popular destination. |
| itinerary (n) | lịch trình | Check our travel itinerary. |
| accommodation (n) | chỗ ở | We booked accommodation online. |
| sustainable tourism (n. phr) | du lịch bền vững | Sustainable tourism protects nature. |
| souvenir (n) | quà lưu niệm | I bought a souvenir for my mom. |
| explore (v) | khám phá | We explored the old town. |

## 2. Pronunciation — Stress in words ending in -ism

Từ kết thúc bằng **-ism** thường nhấn trọng âm ở âm tiết trước đó.

**Ví dụ:** tourism → TOURism`,
        },
        {
          title: "Grammar: Gerunds and infinitives",
          order: 2,
          content: `## Danh động từ (V-ing) và động từ nguyên mẫu (to-V)

- Một số động từ theo sau bởi **V-ing**: enjoy, love, finish, avoid, suggest
  → I **enjoy traveling** to new places.
- Một số động từ theo sau bởi **to-V**: want, plan, decide, hope, need
  → We **plan to visit** Hoi An next month.
- Một số động từ dùng được cả hai nhưng đổi nghĩa: **stop to do** (dừng lại để làm) vs **stop doing** (ngừng hẳn việc gì)

**Lưu ý:** Sau giới từ luôn dùng V-ing: interested **in traveling**, good **at exploring**.`,
        },
        {
          title: "Reading, Speaking & Writing",
          order: 3,
          content: `## Reading

Đọc bài về ngành du lịch Việt Nam, các điểm đến nổi tiếng và xu hướng du lịch bền vững.

## Speaking

Lên kế hoạch một chuyến du lịch cùng bạn: điểm đến, lịch trình, chỗ ở, hoạt động.

## Writing

Viết đoạn văn (100-120 từ) giới thiệu một điểm du lịch và gợi ý lịch trình tham quan.`,
        },
      ],
      quiz: {
        title: "Ôn tập Unit 8: Tourism",
        questions: [
          { text: "\"Destination\" nghĩa là:", options: JSON.stringify(["Điểm đến", "Phương tiện", "Chi phí", "Hành lý"]), answer: "0" },
          { text: "\"Itinerary\" nghĩa là:", options: JSON.stringify(["Lịch trình", "Vé máy bay", "Hộ chiếu", "Khách sạn"]), answer: "0" },
          { text: "I enjoy ___ to new places. Chọn dạng đúng:", options: JSON.stringify(["traveling", "to travel", "travel", "traveled"]), answer: "0" },
          { text: "We plan ___ Hoi An next month. Chọn dạng đúng:", options: JSON.stringify(["to visit", "visiting", "visit", "visited"]), answer: "0" },
          { text: "\"Accommodation\" nghĩa là:", options: JSON.stringify(["Chỗ ở", "Thức ăn", "Vé xe", "Bản đồ"]), answer: "0" },
          { text: "Sau giới từ, động từ theo sau ở dạng:", options: JSON.stringify(["V-ing", "to-V", "V nguyên thể", "V-ed"]), answer: "0" },
          { text: "\"Interested in traveling\" — \"traveling\" ở đây là:", options: JSON.stringify(["Danh động từ (V-ing) sau giới từ", "Động từ nguyên mẫu", "Danh từ số nhiều", "Tính từ"]), answer: "0" },
          { text: "\"Sustainable tourism\" nghĩa là:", options: JSON.stringify(["Du lịch bền vững", "Du lịch mạo hiểm", "Du lịch giá rẻ", "Du lịch tự túc"]), answer: "0" },
          { text: "\"Souvenir\" nghĩa là:", options: JSON.stringify(["Quà lưu niệm", "Vé tham quan", "Bản đồ du lịch", "Hướng dẫn viên"]), answer: "0" },
          { text: "Động từ nào theo sau bởi to-V?", options: JSON.stringify(["want", "enjoy", "avoid", "suggest"]), answer: "0" },
          { text: "Động từ nào theo sau bởi V-ing?", options: JSON.stringify(["finish", "want", "decide", "hope"]), answer: "0" },
          { text: "\"Stop to do\" và \"stop doing\" khác nhau ở:", options: JSON.stringify(["Nghĩa: dừng lại để làm >< ngừng hẳn việc gì", "Không khác nhau", "Chỉ khác về thì", "Chỉ dùng trong văn viết"]), answer: "0" },
          { text: "\"Explore\" nghĩa là:", options: JSON.stringify(["Khám phá", "Trốn tránh", "Đặt chỗ", "Hủy bỏ"]), answer: "0" },
          { text: "Trọng âm từ \"tourism\" rơi vào:", options: JSON.stringify(["Âm tiết đầu (TOUR)", "Âm tiết cuối (-ism)", "Âm giữa", "Không có trọng âm"]), answer: "0" },
          { text: "Chủ đề chính Unit 8 là:", options: JSON.stringify(["Du lịch", "Ẩm thực", "Khoa học vũ trụ", "Nghề nghiệp"]), answer: "0" },
          { text: "Kỹ năng Writing Unit 8 yêu cầu viết:", options: JSON.stringify(["Giới thiệu điểm du lịch và lịch trình", "Công thức nấu ăn", "Đơn xin việc", "Bài luận về stress"]), answer: "0" },
          { text: "Chọn câu đúng ngữ pháp:", options: JSON.stringify(["She is good at exploring new places.", "She is good to explore new places.", "She is good explore new places.", "She is good at explore new places."]), answer: "0" },
          { text: "\"Good at + V-ing\" là cấu trúc với:", options: JSON.stringify(["Giới từ + danh động từ", "Động từ khiếm khuyết", "Câu bị động", "Câu điều kiện"]), answer: "0" },
          { text: "Chọn câu đúng: \"They decided ___ Ha Long Bay.\"", options: JSON.stringify(["to visit", "visiting", "visit", "visited"]), answer: "0" },
          { text: "Xu hướng du lịch hiện đại chú trọng:", options: JSON.stringify(["Du lịch bền vững, bảo vệ môi trường", "Chỉ tập trung chi phí thấp nhất", "Không quan tâm môi trường", "Chỉ du lịch trong nước"]), answer: "0" },
        ],
      },
    },
    {
      title: "Unit 9. English in the World",
      order: 9,
      volume: 2,
      lessons: [
        {
          title: "Vocabulary & Pronunciation",
          order: 1,
          content: `## 1. Vocabulary — English in the world

| Từ vựng | Nghĩa | Ví dụ |
|---------|-------|-------|
| global language (n. phr) | ngôn ngữ toàn cầu | English is a global language. |
| fluent (adj) | thông thạo | She is fluent in English. |
| accent (n) | giọng, ngữ điệu vùng | He has a British accent. |
| native speaker (n. phr) | người bản ngữ | Talk to a native speaker to practice. |
| official language (n. phr) | ngôn ngữ chính thức | English is an official language in many countries. |
| bilingual (adj) | song ngữ | She is bilingual in English and French. |

## 2. Pronunciation — Regional accent differences

Các vùng nói tiếng Anh khác nhau (Anh, Mỹ, Úc) có cách phát âm nguyên âm khác nhau, ví dụ âm /ɑː/ trong "can't" phát âm khác giữa Anh-Anh và Anh-Mỹ.`,
        },
        {
          title: "Grammar: Conditional sentences type 1",
          order: 2,
          content: `## Câu điều kiện loại 1

Diễn tả điều kiện có thể xảy ra ở hiện tại/tương lai và kết quả có thể xảy ra.

> **If + S + V(hiện tại đơn), S + will + V(nguyên thể)**

- **If** you **practice** English every day, you **will improve** quickly.
- **If** she **doesn't study**, she **won't pass** the exam.

**Lưu ý:** Mệnh đề "if" dùng thì hiện tại đơn dù ý nghĩa nói về tương lai; có thể đảo vị trí hai mệnh đề mà không đổi nghĩa.`,
        },
        {
          title: "Reading, Speaking & Writing",
          order: 3,
          content: `## Reading

Đọc bài về vai trò của tiếng Anh như ngôn ngữ toàn cầu, lợi ích của việc học tiếng Anh trong thời đại hội nhập.

## Speaking

Thảo luận về lý do và động lực học tiếng Anh, chia sẻ kế hoạch cải thiện kỹ năng tiếng Anh của bản thân.

## Writing

Viết đoạn văn (100-120 từ) về tầm quan trọng của tiếng Anh và dùng câu điều kiện loại 1 để nêu kế hoạch học tập.`,
        },
      ],
      quiz: {
        title: "Ôn tập Unit 9: English in the World",
        questions: [
          { text: "\"Global language\" nghĩa là:", options: JSON.stringify(["Ngôn ngữ toàn cầu", "Ngôn ngữ địa phương", "Ngôn ngữ cổ", "Ngôn ngữ lập trình"]), answer: "0" },
          { text: "Câu điều kiện loại 1 có cấu trúc:", options: JSON.stringify(["If + hiện tại đơn, S + will + V", "If + quá khứ đơn, S + would + V", "If + hiện tại hoàn thành, S + will + V", "If + will, S + V"]), answer: "0" },
          { text: "If you practice every day, you ___ quickly. Chọn đáp án đúng:", options: JSON.stringify(["will improve", "improved", "improve (không will)", "improving"]), answer: "0" },
          { text: "If she ___ study, she won't pass. Chọn đáp án đúng:", options: JSON.stringify(["doesn't", "don't", "didn't", "isn't"]), answer: "0" },
          { text: "\"Fluent\" nghĩa là:", options: JSON.stringify(["Thông thạo", "Chậm chạp", "Lười biếng", "Nhút nhát"]), answer: "0" },
          { text: "\"Native speaker\" nghĩa là:", options: JSON.stringify(["Người bản ngữ", "Người mới học", "Giáo viên", "Phiên dịch viên"]), answer: "0" },
          { text: "\"Bilingual\" nghĩa là:", options: JSON.stringify(["Song ngữ", "Đơn ngữ", "Đa quốc gia", "Toàn cầu"]), answer: "0" },
          { text: "\"Accent\" nghĩa là:", options: JSON.stringify(["Giọng, ngữ điệu vùng", "Ngữ pháp", "Từ vựng", "Chính tả"]), answer: "0" },
          { text: "\"Official language\" nghĩa là:", options: JSON.stringify(["Ngôn ngữ chính thức", "Ngôn ngữ lóng", "Ngôn ngữ cổ", "Ngôn ngữ ký hiệu"]), answer: "0" },
          { text: "Trong câu điều kiện loại 1, mệnh đề if dùng thì:", options: JSON.stringify(["Hiện tại đơn", "Tương lai đơn", "Quá khứ đơn", "Hiện tại hoàn thành"]), answer: "0" },
          { text: "Mệnh đề chính trong câu điều kiện loại 1 dùng:", options: JSON.stringify(["will + V nguyên thể", "would + V nguyên thể", "V-ed", "am/is/are + V-ing"]), answer: "0" },
          { text: "Chọn câu đúng: \"If it rains, we ___ stay at home.\"", options: JSON.stringify(["will", "would", "did", "are"]), answer: "0" },
          { text: "Câu điều kiện loại 1 diễn tả:", options: JSON.stringify(["Điều kiện có thể xảy ra ở hiện tại/tương lai", "Điều kiện không có thật ở hiện tại", "Điều kiện không có thật trong quá khứ", "Sự thật hiển nhiên"]), answer: "0" },
          { text: "Chủ đề chính Unit 9 là:", options: JSON.stringify(["Vai trò của tiếng Anh trên thế giới", "Du lịch", "Công thức nấu ăn", "Nghề nghiệp tương lai"]), answer: "0" },
          { text: "Kỹ năng Writing Unit 9 yêu cầu viết về:", options: JSON.stringify(["Tầm quan trọng của tiếng Anh", "Một chuyến du lịch", "Một món ăn", "Một tình huống stress"]), answer: "0" },
          { text: "Sự khác biệt về phát âm giữa các vùng nói tiếng Anh gọi là:", options: JSON.stringify(["Regional accent", "Grammar mistake", "Spelling error", "Slang"]), answer: "0" },
          { text: "Hai mệnh đề trong câu điều kiện loại 1 có thể:", options: JSON.stringify(["Đảo vị trí cho nhau mà không đổi nghĩa", "Không thể đảo vị trí", "Chỉ dùng ở dạng phủ định", "Luôn cần dấu phẩy ở giữa"]), answer: "0" },
          { text: "Chọn câu đúng: \"If you don't hurry, you ___ miss the bus.\"", options: JSON.stringify(["will", "would", "did", "do"]), answer: "0" },
          { text: "Việc học tiếng Anh giúp ích cho:", options: JSON.stringify(["Giao tiếp và hội nhập quốc tế", "Chỉ để thi cử", "Không có lợi ích thực tế", "Chỉ dùng trong sách vở"]), answer: "0" },
          { text: "Review 3 (sau Unit 7-9) chủ yếu ôn tập:", options: JSON.stringify(["Từ vựng và ngữ pháp Unit 7, 8, 9", "Toàn bộ chương trình", "Chỉ phát âm", "Chỉ kỹ năng viết"]), answer: "0" },
        ],
      },
    },
    {
      title: "Unit 10. Space Travel",
      order: 10,
      volume: 2,
      lessons: [
        {
          title: "Vocabulary & Pronunciation",
          order: 1,
          content: `## 1. Vocabulary — Space travel

| Từ vựng | Nghĩa | Ví dụ |
|---------|-------|-------|
| spacecraft (n) | tàu vũ trụ | The spacecraft landed safely. |
| astronaut (n) | phi hành gia | The astronaut walked on the moon. |
| launch (v) | phóng (tàu vũ trụ) | They launched the rocket yesterday. |
| gravity (n) | trọng lực | There is no gravity in space. |
| orbit (n/v) | quỹ đạo; bay quanh quỹ đạo | The satellite orbits the Earth. |
| exploration (n) | sự khám phá | Space exploration has advanced a lot. |

## 2. Pronunciation — Stress in words with prefixes (re-, un-, dis-)

Từ có tiền tố thường giữ trọng âm ở gốc từ chính, không rơi vào tiền tố.

**Ví dụ:** unKNOWN, disCOVer`,
        },
        {
          title: "Grammar: Future forms (will, be going to)",
          order: 2,
          content: `## Các cách diễn tả tương lai

- **will + V:** dự đoán không có căn cứ rõ ràng, quyết định tức thời
  → I think space travel **will become** common one day.
- **be going to + V:** dự định đã có kế hoạch từ trước, hoặc dự đoán có căn cứ rõ ràng
  → NASA **is going to launch** a new rocket next month.
- **Hiện tại tiếp diễn** cũng dùng cho kế hoạch tương lai đã sắp xếp cụ thể: The astronauts **are leaving** for the ISS next week.`,
        },
        {
          title: "Reading, Speaking & Writing",
          order: 3,
          content: `## Reading

Đọc bài về lịch sử và tương lai của du hành vũ trụ, các sứ mệnh khám phá không gian nổi bật.

## Speaking

Thảo luận về việc con người có nên tiếp tục khám phá vũ trụ hay không, nêu quan điểm cá nhân.

## Writing

Viết đoạn văn (100-120 từ) dự đoán về du hành vũ trụ trong tương lai, dùng will/be going to.`,
        },
      ],
      quiz: {
        title: "Ôn tập Unit 10: Space Travel",
        questions: [
          { text: "\"Spacecraft\" nghĩa là:", options: JSON.stringify(["Tàu vũ trụ", "Phi hành gia", "Vệ tinh", "Trọng lực"]), answer: "0" },
          { text: "\"Astronaut\" nghĩa là:", options: JSON.stringify(["Phi hành gia", "Kỹ sư", "Nhà khoa học", "Phi công"]), answer: "0" },
          { text: "NASA ___ launch a new rocket next month. Chọn đáp án đúng (kế hoạch đã định):", options: JSON.stringify(["is going to", "will", "is", "was going to"]), answer: "0" },
          { text: "I think space travel ___ become common one day. Chọn đáp án đúng (dự đoán):", options: JSON.stringify(["will", "is going to", "is", "was"]), answer: "0" },
          { text: "\"Gravity\" nghĩa là:", options: JSON.stringify(["Trọng lực", "Ánh sáng", "Nhiệt độ", "Áp suất"]), answer: "0" },
          { text: "\"Orbit\" (v) nghĩa là:", options: JSON.stringify(["Bay quanh quỹ đạo", "Hạ cánh", "Phóng lên", "Rơi xuống"]), answer: "0" },
          { text: "\"Launch\" (v) nghĩa là:", options: JSON.stringify(["Phóng (tàu vũ trụ)", "Hạ cánh", "Sửa chữa", "Thiết kế"]), answer: "0" },
          { text: "\"Be going to\" thường dùng cho:", options: JSON.stringify(["Dự định đã có kế hoạch từ trước", "Quyết định tức thời", "Thói quen quá khứ", "Sự thật hiển nhiên"]), answer: "0" },
          { text: "\"Will\" thường dùng cho:", options: JSON.stringify(["Dự đoán không có căn cứ rõ ràng", "Kế hoạch đã sắp xếp cụ thể", "Hành động đang diễn ra", "Thói quen hiện tại"]), answer: "0" },
          { text: "Hiện tại tiếp diễn có thể dùng để diễn tả:", options: JSON.stringify(["Kế hoạch tương lai đã sắp xếp cụ thể", "Sự thật hiển nhiên", "Quá khứ đã hoàn thành", "Thói quen chung chung"]), answer: "0" },
          { text: "\"Exploration\" nghĩa là:", options: JSON.stringify(["Sự khám phá", "Sự phá hủy", "Sự trì hoãn", "Sự thất bại"]), answer: "0" },
          { text: "Trọng âm từ có tiền tố \"un-\" thường rơi vào:", options: JSON.stringify(["Gốc từ chính (không rơi vào tiền tố)", "Tiền tố un-", "Âm tiết cuối luôn", "Không có trọng âm"]), answer: "0" },
          { text: "Chọn câu đúng: \"Look at those clouds! It ___ rain.\"", options: JSON.stringify(["is going to", "will (ít chắc chắn hơn)", "is", "was going to"]), answer: "0" },
          { text: "Chủ đề chính Unit 10 là:", options: JSON.stringify(["Du hành vũ trụ", "Du lịch trên Trái Đất", "Công thức nấu ăn", "Thay đổi xã hội"]), answer: "0" },
          { text: "Kỹ năng Writing Unit 10 yêu cầu viết về:", options: JSON.stringify(["Dự đoán về du hành vũ trụ tương lai", "Một công thức nấu ăn", "Một chuyến du lịch trong nước", "Nghề nghiệp mơ ước"]), answer: "0" },
          { text: "Con người đầu tiên đặt chân lên Mặt Trăng là phi hành gia của:", options: JSON.stringify(["Chương trình Apollo (Mỹ)", "Chương trình của Việt Nam", "Chương trình tư nhân", "Không có ai từng lên Mặt Trăng"]), answer: "0" },
          { text: "Vệ tinh nhân tạo hoạt động bằng cách:", options: JSON.stringify(["Bay quanh quỹ đạo Trái Đất", "Đứng yên một chỗ trên mặt đất", "Chìm dưới đại dương", "Bay trong khí quyển thấp"]), answer: "0" },
          { text: "The astronauts ___ for the ISS next week (kế hoạch cụ thể). Chọn đáp án đúng:", options: JSON.stringify(["are leaving", "leave", "left", "will have left"]), answer: "0" },
          { text: "Trong không gian, các phi hành gia trải nghiệm:", options: JSON.stringify(["Trạng thái không trọng lực", "Trọng lực gấp đôi Trái Đất", "Nhiệt độ luôn ấm áp", "Không khí trong lành"]), answer: "0" },
          { text: "Chọn câu đúng: \"She ___ study Astronomy at university\" (đã lên kế hoạch).", options: JSON.stringify(["is going to", "will (ít chắc chắn hơn)", "is", "was"]), answer: "0" },
        ],
      },
    },
    {
      title: "Unit 11. Changing Roles in Society",
      order: 11,
      volume: 2,
      lessons: [
        {
          title: "Vocabulary & Pronunciation",
          order: 1,
          content: `## 1. Vocabulary — Changing roles in society

| Từ vựng | Nghĩa | Ví dụ |
|---------|-------|-------|
| gender equality (n. phr) | bình đẳng giới | Gender equality is important today. |
| stereotype (n) | định kiến | We should break gender stereotypes. |
| breadwinner (n) | trụ cột kinh tế | Both parents can be breadwinners. |
| household chores (n. phr) | việc nhà | Household chores should be shared. |
| workforce (n) | lực lượng lao động | Women make up half the workforce. |
| empower (v) | trao quyền | Education empowers women. |

## 2. Pronunciation — Stress in compound adjectives

Tính từ ghép (VD: well-educated, hard-working) thường nhấn cả hai phần, nhưng trọng âm chính thường rơi vào phần sau.`,
        },
        {
          title: "Grammar: Passive voice (continued) & Causative form",
          order: 2,
          content: `## 1. Ôn tập câu bị động (thì khác)

Câu bị động có thể dùng ở nhiều thì khác nhau: hiện tại hoàn thành (has/have been + p.p), tương lai (will be + p.p).

- Housework **has been shared** more equally in recent years.
- Women **will be given** more opportunities in the future.

## 2. Thể sai khiến (Causative form)

> **have/get + something + done** — nhờ/thuê ai đó làm gì cho mình

- She **had her hair cut** yesterday.
- We **get our house cleaned** every week.`,
        },
        {
          title: "Reading, Speaking & Writing",
          order: 3,
          content: `## Reading

Đọc bài về sự thay đổi vai trò của nam và nữ trong gia đình và xã hội hiện đại.

## Speaking

Thảo luận về việc phân chia công việc nhà và vai trò giới trong gia đình hiện nay so với trước đây.

## Writing

Viết đoạn văn (100-120 từ) về quan điểm của em đối với bình đẳng giới trong gia đình và xã hội.`,
        },
      ],
      quiz: {
        title: "Ôn tập Unit 11: Changing Roles in Society",
        questions: [
          { text: "\"Gender equality\" nghĩa là:", options: JSON.stringify(["Bình đẳng giới", "Phân biệt giới tính", "Vai trò gia đình", "Quyền lực"]), answer: "0" },
          { text: "\"Stereotype\" nghĩa là:", options: JSON.stringify(["Định kiến", "Sự thật", "Quy tắc", "Luật lệ"]), answer: "0" },
          { text: "\"Breadwinner\" nghĩa là:", options: JSON.stringify(["Trụ cột kinh tế gia đình", "Người nội trợ", "Người thất nghiệp", "Người về hưu"]), answer: "0" },
          { text: "\"Household chores\" nghĩa là:", options: JSON.stringify(["Việc nhà", "Công việc văn phòng", "Bài tập về nhà", "Hoạt động ngoại khóa"]), answer: "0" },
          { text: "She had her hair ___ yesterday. Chọn đáp án đúng (thể sai khiến):", options: JSON.stringify(["cut", "cutting", "to cut", "cuts"]), answer: "0" },
          { text: "Cấu trúc thể sai khiến là:", options: JSON.stringify(["have/get + something + done (p.p)", "have + V nguyên thể", "get + to V", "have + V-ing"]), answer: "0" },
          { text: "\"Workforce\" nghĩa là:", options: JSON.stringify(["Lực lượng lao động", "Nơi làm việc", "Giờ làm việc", "Mức lương"]), answer: "0" },
          { text: "\"Empower\" nghĩa là:", options: JSON.stringify(["Trao quyền", "Tước quyền", "Bỏ qua", "Từ chối"]), answer: "0" },
          { text: "Housework ___ more equally in recent years (bị động, hiện tại hoàn thành). Chọn đáp án đúng:", options: JSON.stringify(["has been shared", "has shared", "is shared", "shared"]), answer: "0" },
          { text: "Women ___ more opportunities in the future (bị động, tương lai). Chọn đáp án đúng:", options: JSON.stringify(["will be given", "will give", "are given", "gave"]), answer: "0" },
          { text: "We get our house ___ every week. Chọn đáp án đúng:", options: JSON.stringify(["cleaned", "clean", "cleaning", "to clean"]), answer: "0" },
          { text: "Thể sai khiến \"have something done\" nghĩa là:", options: JSON.stringify(["Nhờ/thuê người khác làm việc gì đó", "Tự mình làm việc gì đó", "Từ chối làm việc gì", "Quên làm việc gì"]), answer: "0" },
          { text: "Chủ đề chính Unit 11 là:", options: JSON.stringify(["Sự thay đổi vai trò trong xã hội (bình đẳng giới)", "Du hành vũ trụ", "Công thức nấu ăn", "Du lịch"]), answer: "0" },
          { text: "Trọng âm chính của tính từ ghép thường rơi vào:", options: JSON.stringify(["Phần sau của từ ghép", "Phần đầu của từ ghép", "Không có trọng âm", "Cả hai phần bằng nhau luôn"]), answer: "0" },
          { text: "Kỹ năng Writing Unit 11 yêu cầu viết về:", options: JSON.stringify(["Quan điểm về bình đẳng giới", "Công thức nấu ăn", "Chuyến du lịch vũ trụ", "Kế hoạch nghề nghiệp"]), answer: "0" },
          { text: "Xu hướng hiện đại về vai trò gia đình là:", options: JSON.stringify(["Công việc nhà được chia sẻ bình đẳng hơn", "Chỉ phụ nữ làm việc nhà", "Chỉ nam giới đi làm kiếm tiền", "Không có thay đổi gì"]), answer: "0" },
          { text: "\"Well-educated\" là ví dụ của:", options: JSON.stringify(["Tính từ ghép", "Danh từ ghép", "Động từ ghép", "Trạng từ ghép"]), answer: "0" },
          { text: "Việc trao quyền cho phụ nữ (empowerment) thường liên quan đến:", options: JSON.stringify(["Giáo dục và cơ hội việc làm", "Hạn chế học tập", "Giảm cơ hội làm việc", "Không liên quan gì đến giáo dục"]), answer: "0" },
          { text: "Chọn câu đúng: \"He is getting his car ___ today.\"", options: JSON.stringify(["repaired", "repair", "repairing", "to repair"]), answer: "0" },
          { text: "\"Both parents can be breadwinners\" thể hiện quan điểm:", options: JSON.stringify(["Bình đẳng trong vai trò kinh tế gia đình", "Chỉ cha mới đi làm", "Chỉ mẹ mới đi làm", "Không ai cần đi làm"]), answer: "0" },
        ],
      },
    },
    {
      title: "Unit 12. My Future Career",
      order: 12,
      volume: 2,
      lessons: [
        {
          title: "Vocabulary & Pronunciation",
          order: 1,
          content: `## 1. Vocabulary — My future career

| Từ vựng | Nghĩa | Ví dụ |
|---------|-------|-------|
| career (n) | sự nghiệp, nghề nghiệp | She has a successful career. |
| qualification (n) | bằng cấp, trình độ | You need a qualification for this job. |
| ambition (n) | hoài bão | His ambition is to become a doctor. |
| skill (n) | kỹ năng | Communication skills are important. |
| occupation (n) | nghề nghiệp | What is your occupation? |
| pursue (v) | theo đuổi | She wants to pursue a career in science. |

## 2. Pronunciation — Stress in job-related nouns ending in -er/-or/-ist

Danh từ chỉ nghề nghiệp kết thúc bằng -er/-or/-ist thường nhấn trọng âm ở âm tiết gốc trước đuôi đó.

**Ví dụ:** SCIENtist, TEACHer`,
        },
        {
          title: "Grammar: First conditional & Modal verbs for advice",
          order: 2,
          content: `## 1. Câu điều kiện loại 1 (ôn tập nâng cao)

Áp dụng cho việc lập kế hoạch nghề nghiệp: **If** I **study** hard, I **will achieve** my career goals.

## 2. Động từ khiếm khuyết khuyên bảo (should, ought to, had better)

- **should/ought to + V:** đưa ra lời khuyên chung
  → You **should choose** a career you are passionate about.
- **had better + V:** lời khuyên mạnh, có tính cảnh báo
  → You **had better start** preparing for the exam now.

**Lưu ý:** "had better" mạnh hơn "should", thường ngụ ý hậu quả nếu không làm theo.`,
        },
        {
          title: "Reading, Speaking & Writing",
          order: 3,
          content: `## Reading

Đọc bài về các yếu tố cần cân nhắc khi chọn nghề nghiệp tương lai (sở thích, năng lực, nhu cầu xã hội).

## Speaking

Chia sẻ về nghề nghiệp mơ ước của em, lý do lựa chọn và kế hoạch để đạt được nó.

## Writing

Viết đoạn văn (100-120 từ) về nghề nghiệp tương lai em mong muốn và kế hoạch thực hiện, dùng câu điều kiện loại 1 và động từ khiếm khuyết khuyên bảo.`,
        },
      ],
      quiz: {
        title: "Ôn tập Unit 12: My Future Career",
        questions: [
          { text: "\"Career\" nghĩa là:", options: JSON.stringify(["Sự nghiệp, nghề nghiệp", "Sở thích", "Kỳ nghỉ", "Trường học"]), answer: "0" },
          { text: "\"Qualification\" nghĩa là:", options: JSON.stringify(["Bằng cấp, trình độ", "Lương thưởng", "Giờ làm việc", "Đồng nghiệp"]), answer: "0" },
          { text: "\"Ambition\" nghĩa là:", options: JSON.stringify(["Hoài bão", "Sự thất vọng", "Sự nghỉ ngơi", "Sự chán nản"]), answer: "0" },
          { text: "You ___ choose a career you are passionate about (lời khuyên chung). Chọn đáp án đúng:", options: JSON.stringify(["should", "must always", "had to", "will"]), answer: "0" },
          { text: "You ___ start preparing now (lời khuyên mạnh, cảnh báo). Chọn đáp án đúng:", options: JSON.stringify(["had better", "should maybe", "could possibly", "might"]), answer: "0" },
          { text: "\"Had better\" so với \"should\" thì:", options: JSON.stringify(["Mạnh hơn, có tính cảnh báo", "Yếu hơn", "Giống hệt nhau về mức độ", "Chỉ dùng ở thì quá khứ"]), answer: "0" },
          { text: "\"Pursue\" nghĩa là:", options: JSON.stringify(["Theo đuổi", "Từ bỏ", "Trì hoãn", "Quên lãng"]), answer: "0" },
          { text: "\"Skill\" nghĩa là:", options: JSON.stringify(["Kỹ năng", "Bằng cấp", "Mức lương", "Vị trí công việc"]), answer: "0" },
          { text: "If I study hard, I ___ achieve my career goals. Chọn đáp án đúng:", options: JSON.stringify(["will", "would", "did", "was"]), answer: "0" },
          { text: "\"Occupation\" nghĩa là:", options: JSON.stringify(["Nghề nghiệp", "Sở thích", "Địa chỉ", "Ngày sinh"]), answer: "0" },
          { text: "Trọng âm của \"scientist\" rơi vào:", options: JSON.stringify(["Âm tiết đầu (SCI-)", "Đuôi -ist", "Âm giữa", "Không có trọng âm"]), answer: "0" },
          { text: "Yếu tố cần cân nhắc khi chọn nghề KHÔNG bao gồm:", options: JSON.stringify(["Sở thích cá nhân", "Năng lực bản thân", "Nhu cầu xã hội", "Chọn ngẫu nhiên không suy nghĩ"]), answer: "3" },
          { text: "Chủ đề chính Unit 12 là:", options: JSON.stringify(["Nghề nghiệp tương lai", "Bình đẳng giới", "Du hành vũ trụ", "Công thức nấu ăn"]), answer: "0" },
          { text: "Kỹ năng Writing Unit 12 yêu cầu viết về:", options: JSON.stringify(["Nghề nghiệp tương lai và kế hoạch thực hiện", "Một công thức nấu ăn", "Chuyến du lịch", "Vai trò giới trong gia đình"]), answer: "0" },
          { text: "Chọn câu đúng: \"You ___ practice English every day if you want to improve.\"", options: JSON.stringify(["should", "will must", "had to always", "is going"]), answer: "0" },
          { text: "\"Communication skills\" là ví dụ của:", options: JSON.stringify(["Kỹ năng cần thiết cho công việc", "Bằng cấp học thuật", "Sở thích cá nhân", "Thời gian rảnh"]), answer: "0" },
          { text: "Review 4 (cuối Unit 10-12) chủ yếu ôn tập:", options: JSON.stringify(["Từ vựng và ngữ pháp Unit 10, 11, 12", "Toàn bộ SGK lớp 9", "Chỉ phát âm", "Chỉ ngữ pháp lớp 8"]), answer: "0" },
          { text: "Động từ khiếm khuyết dùng để khuyên bảo gồm:", options: JSON.stringify(["should, ought to, had better", "will, would, can", "must, have to (chỉ bắt buộc)", "may, might (chỉ khả năng)"]), answer: "0" },
          { text: "Mục Glossary ở cuối sách Tiếng Anh 9 Tập hai dùng để:", options: JSON.stringify(["Tra cứu nghĩa từ vựng đã học", "Danh sách bài kiểm tra", "Lịch học", "Đáp án bài tập"]), answer: "0" },
          { text: "Đặt mục tiêu nghề nghiệp nên dựa trên:", options: JSON.stringify(["Sở thích, năng lực và nhu cầu thực tế", "Chỉ theo ý kiến người khác", "Chọn nghề có tên gọi hay", "Không cần đặt mục tiêu"]), answer: "0" },
        ],
      },
    },
  ],
};
