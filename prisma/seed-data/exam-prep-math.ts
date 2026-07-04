import { CourseData } from "./types";

export const EXAM_PREP_MATH_COURSE: CourseData = {
  title: "Ôn thi ĐH Toán",
  slug: "on-thi-dh-toan",
  subject: "exam-prep",
  grade: "12",
  description: "Ôn luyện Toán THPT QG từ đề thi các năm 2020–2026: Hàm số, Mũ–Logarit, Tích phân, Hình không gian, Số phức, Xác suất.",
  published: true,
  modules: [
    {
      title: "Hàm số và đề thi THPT QG 2020–2022",
      order: 1,
      lessons: [
        {
          title: "Phân tích dạng bài Hàm số trong đề thi",
          order: 1,
          content: `## Dạng bài Hàm số trong đề thi THPT QG

### Cấu trúc câu hỏi phần Hàm số (10–12 câu/đề)

**Dạng 1 – Chiều biến thiên, cực trị:**
Nhận dạng qua đồ thị hoặc bảng biến thiên.

> *[Đề THPT QG 2020] Cho hàm số f(x) có f'(x) = x(x−1)(x+2) với mọi x ∈ ℝ. Hàm số f(x) đồng biến trên khoảng nào?*
>
> Giải: f'(x) = x(x−1)(x+2) = 0 ↔ x = 0, x = 1, x = −2
> Bảng xét dấu: f'(x) > 0 khi x ∈ (−2; 0) hoặc x ∈ (1; +∞)
> **Đáp án: (−2; 0)**

**Dạng 2 – Đọc đồ thị hàm số:**
Từ đồ thị của y = f'(x), suy ra tính chất của y = f(x).

> *[Đề THPT QG 2021] Đồ thị hàm số y = ax⁴ + bx² + c có dạng chữ W thì số điểm cực trị là...*
> **Đáp án: 3 điểm cực trị**

**Dạng 3 – Biện luận số nghiệm:**
Phương trình f(x) = m ↔ số giao điểm đường y = f(x) và y = m.

> *[Đề THPT QG 2022] Phương trình x³ − 3x − m = 0 có đúng 3 nghiệm phân biệt khi:*
> Đặt g(x) = x³ − 3x: g'(x) = 3x² − 3 = 0 → x = ±1
> g(−1) = 2 (cực đại), g(1) = −2 (cực tiểu)
> **Đáp án: −2 < m < 2**

---

### Dạng 4 – Hàm phân thức y = (ax+b)/(cx+d)
- Không có cực trị
- Luôn có tiệm cận đứng x = −d/c và tiệm cận ngang y = a/c
- Đồng biến hoặc nghịch biến trên từng khoảng xác định`,
        },
        {
          title: "Mũ – Logarit trong đề thi THPT QG 2021–2024",
          order: 2,
          content: `## Mũ – Logarit trong đề thi THPT QG

### Dạng bài thường gặp

**Dạng 1 – Rút gọn biểu thức logarit:**

> *[Đề THPT QG 2023] Cho log₃5 = a. Biểu thức log₃45 bằng:*
> 45 = 3² × 5
> log₃45 = log₃(3² × 5) = 2 + log₃5 = **2 + a**

> *[Đề THPT QG 2022] Cho log₂3 = a. Biểu thức log₄12 bằng:*
> 12 = 4 × 3 = 2² × 3
> log₄12 = log₄(2² × 3) = 1 + log₄3 = 1 + log₂3/log₂4 = 1 + a/2 = **(a+2)/2**

**Dạng 2 – Phương trình logarit:**

> *[Đề THPT QG 2021] Nghiệm của phương trình log₂(x−1) = 3 là:*
> x − 1 = 2³ = 8 → **x = 9** (kiểm tra điều kiện x > 1 ✓)

**Dạng 3 – Phương trình mũ (đặt ẩn phụ):**

> *[Đề THPT QG 2024] Phương trình 4ˣ − 5.2ˣ + 4 = 0:*
> Đặt t = 2ˣ (t > 0): t² − 5t + 4 = 0 → (t−1)(t−4) = 0
> t = 1 → 2ˣ = 1 → **x = 0**; t = 4 → 2ˣ = 4 → **x = 2**

**Dạng 4 – Bất phương trình mũ/logarit:**

> *[Đề THPT QG 2020] Bất phương trình (1/3)ˣ > 9:*
> 3⁻ˣ > 3² → −x > 2 (cơ số 1/3 < 1, đổi chiều)
> **x < −2**`,
        },
      ],
      quiz: {
        title: "Quiz: Hàm số và Mũ–Logarit (Đề thi THPT QG)",
        questions: [
          {
            text: "[THPT QG 2022] Hàm số y = x³ − 3x có số điểm cực trị là:",
            options: JSON.stringify(["0", "1", "2", "3"]),
            answer: "2",
          },
          {
            text: "[THPT QG 2023] Cho log₃5 = a. Biểu thức log₃45 bằng:",
            options: JSON.stringify(["a + 1", "2a", "2 + a", "a²"]),
            answer: "2",
          },
          {
            text: "[THPT QG 2021] Nghiệm của phương trình log₂(x − 1) = 3 là:",
            options: JSON.stringify(["x = 7", "x = 8", "x = 9", "x = 6"]),
            answer: "2",
          },
          {
            text: "[THPT QG 2022] Phương trình x³ − 3x − m = 0 có đúng 3 nghiệm phân biệt khi:",
            options: JSON.stringify(["−2 < m < 2", "m > 2", "m < −2", "m = ±2"]),
            answer: "0",
          },
          {
            text: "[THPT QG 2024] Phương trình 4ˣ − 5.2ˣ + 4 = 0 có tổng các nghiệm là:",
            options: JSON.stringify(["0", "1", "2", "3"]),
            answer: "2",
          },
        ],
      },
    },
    {
      title: "Tích phân và Hình học không gian (Đề thi 2020–2025)",
      order: 2,
      lessons: [
        {
          title: "Tích phân qua các đề thi THPT QG",
          order: 3,
          content: `## Tích phân trong đề thi THPT QG

### Dạng thường gặp

**Dạng 1 – Tính tích phân trực tiếp:**

> *∫₀¹ (3x² − 2x) dx = ?*
> = [x³ − x²]₀¹ = (1 − 1) − 0 = **0**

> *∫₀^(π/2) sinx dx = ?*
> = [−cosx]₀^(π/2) = (−cos(π/2)) − (−cos0) = 0 + 1 = **1**

**Dạng 2 – Đổi biến (u-substitution):**

> *∫₀¹ 2x(x²+1)⁴ dx = ?*
> Đặt u = x²+1, du = 2x dx; x=0→u=1, x=1→u=2
> = ∫₁² u⁴ du = [u⁵/5]₁² = 32/5 − 1/5 = **31/5**

**Dạng 3 – Tích phân từng phần:**

> *∫₀¹ x.eˣ dx = ?*
> Đặt u = x, dv = eˣdx → du = dx, v = eˣ
> = [x.eˣ]₀¹ − ∫₀¹ eˣ dx = e − [eˣ]₀¹ = e − (e − 1) = **1**

**Dạng 4 – Diện tích hình phẳng:**

> *[THPT QG 2022] Diện tích hình phẳng giới hạn bởi y = x² và y = x (0 ≤ x ≤ 1):*
> S = ∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = **1/6**

> *[THPT QG 2021] Thể tích vật tròn xoay: y = √x quay quanh Ox, 0 ≤ x ≤ 4:*
> V = π.∫₀⁴ x dx = π.[x²/2]₀⁴ = **8π**`,
        },
        {
          title: "Hình học không gian trong đề thi THPT QG",
          order: 4,
          content: `## Hình học không gian (Đề thi THPT QG)

### Khối đa diện – Công thức thể tích

| Hình | Thể tích |
|------|---------|
| Hình lập phương cạnh a | a³ |
| Hình hộp chữ nhật a×b×c | abc |
| Lăng trụ đứng (đáy S, cao h) | S.h |
| Tứ diện đều cạnh a | a³√2/12 |
| Chóp tứ giác đều cạnh a, cao h | a².h/3 |
| Hình cầu bán kính R | 4πR³/3 |
| Hình nón (đáy R, cao h) | πR²h/3 |

---

### Dạng bài thường gặp

**Dạng 1 – Tính thể tích:**

> *[THPT QG 2021] Hình chóp S.ABCD, đáy là hình vuông cạnh 2, chiều cao 3. Thể tích là:*
> V = (1/3) × 2² × 3 = **4**

**Dạng 2 – Khoảng cách từ điểm đến mặt phẳng:**
Dùng phương trình mặt phẳng Ax + By + Cz + D = 0:
> d(M; (P)) = |AM_x + BM_y + CM_z + D| / √(A² + B² + C²)

**Dạng 3 – Góc giữa đường thẳng và mặt phẳng:**
> sinα = |cos(u⃗, n⃗)| (u⃗: vectơ chỉ phương đt, n⃗: pháp vector mp)

**Dạng 4 – Mặt phẳng song song/vuông góc:**
- Song song: pháp vector song song (tỉ lệ cùng nhau)
- Vuông góc: tích vô hướng pháp vector = 0`,
        },
      ],
      quiz: {
        title: "Quiz: Tích phân và Hình không gian (Đề thi THPT QG)",
        questions: [
          {
            text: "[THPT QG 2022] Diện tích hình phẳng giới hạn bởi y = x² và y = x trên [0; 1] là:",
            options: JSON.stringify(["1/3", "1/6", "1/4", "1/2"]),
            answer: "1",
          },
          {
            text: "[THPT QG 2021] ∫₀^(π/2) cosx dx =",
            options: JSON.stringify(["0", "1", "−1", "π/2"]),
            answer: "1",
          },
          {
            text: "[THPT QG 2023] Thể tích khối cầu bán kính R = 3 là:",
            options: JSON.stringify(["36π", "12π", "9π", "27π"]),
            answer: "0",
          },
          {
            text: "[THPT QG 2022] Hình chóp đều S.ABCD, đáy vuông cạnh a, chiều cao h. Thể tích là:",
            options: JSON.stringify(["a².h", "a².h/2", "a².h/3", "a³/3"]),
            answer: "2",
          },
          {
            text: "[THPT QG 2024] Tính ∫₁² (2x − 1) dx:",
            options: JSON.stringify(["1", "2", "3", "0"]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Số phức – Xác suất – Bài toán tổng hợp",
      order: 3,
      lessons: [
        {
          title: "Số phức trong đề thi THPT QG",
          order: 5,
          content: `## Số phức (Complex Numbers)

### Định nghĩa
> **z = a + bi** (a, b ∈ ℝ; i² = −1)

- a: **phần thực** Re(z)
- b: **phần ảo** Im(z)
- **Mô-đun:** |z| = √(a² + b²)
- **Số phức liên hợp:** z̄ = a − bi

### Phép toán
- Cộng: (a+bi) + (c+di) = (a+c) + (b+d)i
- Trừ: (a+bi) − (c+di) = (a−c) + (b−d)i
- Nhân: (a+bi)(c+di) = (ac−bd) + (ad+bc)i
- Chia: (a+bi)/(c+di) = [(a+bi)(c−di)]/(c²+d²)

---

### Dạng bài thường gặp trong đề thi

**Dạng 1 – Tìm phần thực/ảo:**

> *[THPT QG 2020] Số phức z = (2+i)/(1−2i). Phần thực là:*
> z = (2+i)(1+2i)/((1−2i)(1+2i)) = (2+4i+i+2i²)/(1+4) = (2+5i−2)/5 = 5i/5 = i
> Phần thực = **0**, phần ảo = **1**

**Dạng 2 – Tìm mô-đun:**

> *z = 3 + 4i → |z| = √(9 + 16) = √25 = **5***

**Dạng 3 – Nghiệm phương trình trong tập số phức:**

> *z² + 4 = 0 → z² = −4 → z = ±2i*

**Dạng 4 – Biểu diễn trên mặt phẳng Argand:**
z = a + bi ↔ điểm M(a; b) trên mặt phẳng tọa độ`,
        },
        {
          title: "Xác suất và Tổ hợp – Đề thi THPT QG",
          order: 6,
          content: `## Xác suất và Đếm trong đề thi THPT QG

### Quy tắc đếm

**Quy tắc cộng:** A và B không thể xảy ra đồng thời → |A ∪ B| = |A| + |B|
**Quy tắc nhân:** A và B độc lập → |A × B| = |A| × |B|

### Hoán vị, Chỉnh hợp, Tổ hợp

| Loại | Ký hiệu | Công thức |
|------|---------|-----------|
| Hoán vị | Pₙ | n! |
| Chỉnh hợp | Aₙᵏ | n!/(n−k)! |
| Tổ hợp | Cₙᵏ | n!/(k!(n−k)!) |

---

### Xác suất cổ điển
> **P(A) = |A| / |Ω|**

---

### Dạng bài thường gặp

> *[THPT QG 2022] Từ 5 học sinh nam và 3 học sinh nữ, chọn 3 người. Xác suất chọn được ít nhất 1 nữ:*
> P(ít nhất 1 nữ) = 1 − P(0 nữ) = 1 − C₅³/C₈³ = 1 − 10/56 = **46/56 = 23/28**

> *[THPT QG 2021] Xếp 4 quyển sách khác nhau lên 1 kệ. Số cách xếp là:*
> **P₄ = 4! = 24 cách**

> *[THPT QG 2023] Chọn 2 trong 7 học sinh. Số cách chọn là:*
> **C₇² = 7!/(2!×5!) = 21 cách**

---

### Nhị thức Newton
> **(a + b)ⁿ = Σ Cₙᵏ × aⁿ⁻ᵏ × bᵏ** (k = 0 đến n)

Số hạng thứ (k+1): **T_{k+1} = Cₙᵏ × aⁿ⁻ᵏ × bᵏ**

> *[THPT QG 2024] Tìm hệ số của x³ trong (x + 2)⁵:*
> T_{k+1} = C₅ᵏ × x^(5−k) × 2ᵏ; 5−k = 3 → k = 2
> T₃ = C₅² × x³ × 4 = 10 × 4 × x³ = **40x³**`,
        },
      ],
      quiz: {
        title: "Quiz: Số phức và Xác suất (Đề thi THPT QG)",
        questions: [
          {
            text: "[THPT QG 2020] Mô-đun của số phức z = 3 − 4i là:",
            options: JSON.stringify(["3", "4", "5", "7"]),
            answer: "2",
          },
          {
            text: "[THPT QG 2021] Số cách xếp 4 quyển sách khác nhau lên 1 kệ theo hàng ngang là:",
            options: JSON.stringify(["4", "12", "24", "16"]),
            answer: "2",
          },
          {
            text: "[THPT QG 2022] Từ 5 nam và 3 nữ chọn 3 người. Số cách chọn được ít nhất 1 nữ:",
            options: JSON.stringify(["46", "23", "10", "56"]),
            answer: "0",
          },
          {
            text: "[THPT QG 2023] Hệ số của x³ trong khai triển (x + 2)⁵ là:",
            options: JSON.stringify(["10", "20", "40", "80"]),
            answer: "2",
          },
          {
            text: "[THPT QG 2024] Số phức z = (1+i)² bằng:",
            options: JSON.stringify(["2i", "2", "2+2i", "−2"]),
            answer: "0",
          },
        ],
      },
    },
    {
      title: "Chuyên đề 4: Hình học giải tích Oxyz",
      order: 4,
      lessons: [
        {
          title: "Tọa độ trong không gian – Phương trình mặt phẳng",
          order: 7,
          content: `## Hình học giải tích Oxyz

### 1. Phương trình mặt phẳng
**Dạng tổng quát**: ax + by + cz + d = 0 (n⃗ = (a,b,c) là VTPT)

**Từ 3 điểm không thẳng hàng A, B, C:**
1. Tính AB⃗, AC⃗
2. n⃗ = AB⃗ × AC⃗ (tích có hướng)
3. Viết pt đi qua A với VTPT n⃗

**Khoảng cách từ M(x₀,y₀,z₀) đến (α): ax+by+cz+d=0:**
> d = |ax₀+by₀+cz₀+d| / √(a²+b²+c²)

### 2. Phương trình đường thẳng
**Chính tắc**: (x−x₀)/a = (y−y₀)/b = (z−z₀)/c
**Tham số**: x=x₀+at; y=y₀+bt; z=z₀+ct

### 3. Góc giữa hai mặt phẳng
> cos θ = |n₁⃗·n₂⃗| / (|n₁⃗|·|n₂⃗|)

### 4. Mặt cầu
(x−a)²+(y−b)²+(z−c)²=R² (tâm I(a,b,c), bán kính R)`,
        },
        {
          title: "Các bài toán đường thẳng và Mặt phẳng",
          order: 8,
          content: `## Bài toán đường thẳng – Mặt phẳng (đề thi TN THPT)

### 1. Dạng 1: Viết phương trình mp chứa điểm, vuông góc/song song mp
**Chiến lược**: Xác định n⃗ → viết pt mp

- MP qua A song song mp (α) → có cùng VTPT với (α)
- MP vuông góc hai mp → n⃗ = n₁⃗ × n₂⃗

### 2. Dạng 2: Tính khoảng cách
- d(A; mp): công thức trực tiếp
- d(A; đt): qua công thức hoặc tìm hình chiếu
- d(hai đt song song): chọn một điểm trên đt → tính d(điểm; đt kia)

### 3. Dạng 3: Giao điểm, giao tuyến
- Đt ∩ mp: thay tham số vào pt mp
- Giao tuyến hai mp: giải hệ pt

### 4. Ví dụ đề TN THPT 2024
> Tìm mp qua A(1;0;2), B(2;1;0), C(0;1;3):
> AB⃗=(1,1,−2); AC⃗=(−1,1,1)
> n⃗=AB⃗×AC⃗=(1·1−(−2)·1; (−2)·(−1)−1·1; 1·1−1·(−1))=(3,1,2)
> PT: 3(x−1)+1(y−0)+2(z−2)=0 → **3x+y+2z=7**`,
        },
        {
          title: "Mặt cầu và Hình học không gian tổng hợp",
          order: 9,
          content: `## Mặt cầu – Tổng hợp đề thi

### 1. Nhận dạng pt mặt cầu
x²+y²+z² + 2ax+2by+2cz+d=0
→ Tâm I(−a;−b;−c), R = √(a²+b²+c²−d)

### 2. Mối quan hệ mặt cầu và mặt phẳng
d(I; mp) = d₀ (khoảng cách từ tâm đến mp)
- d₀ < R: mp cắt mặt cầu (giao là đường tròn)
- d₀ = R: mp tiếp xúc mặt cầu
- d₀ > R: mp không cắt mặt cầu

### 3. Khối chóp, khối lăng trụ trong Oxyz
- Tính thể tích qua công thức + tọa độ
- V_chóp = ⅓·S_đáy·h; tính h qua khoảng cách

### 4. Đề thi TN THPT 2023 – Câu mặt cầu
> Mặt cầu tâm I(1;2;−1) bán kính R=3 có pt:
> (x−1)²+(y−2)²+(z+1)²=9
> Mặt phẳng Oxz (y=0): d(I;mp) = |2| = 2 < 3
> → Mặt phẳng CẮT mặt cầu, giao là đường tròn bán kính r=√(9−4)=**√5**`,
        },
      ],
      quiz: {
        title: "Quiz 4 – Hình học Oxyz",
        questions: [
          {
            text: "VTPT của mp 2x − y + 3z + 1 = 0 là:",
            options: JSON.stringify(["(2;−1;3)", "(−2;1;−3)", "(1;2;3)", "(2;1;3)"]),
            answer: "0",
          },
          {
            text: "Khoảng cách từ M(1;2;3) đến mp x+y+z=0 là:",
            options: JSON.stringify(["6/√3", "6", "√6", "2√3"]),
            answer: "3",
          },
          {
            text: "Mặt cầu tâm I(0;0;0) bán kính R=5 có pt:",
            options: JSON.stringify(["x+y+z=5", "x²+y²+z²=5", "x²+y²+z²=25", "|x|+|y|+|z|=5"]),
            answer: "2",
          },
          {
            text: "Hai mặt phẳng song song khi và chỉ khi:",
            options: JSON.stringify([
              "Có cùng tung độ gốc",
              "VTPT của chúng cùng phương",
              "Cắt nhau tạo góc 90°",
              "Đều đi qua gốc tọa độ",
            ]),
            answer: "1",
          },
          {
            text: "Phương trình tham số đường thẳng qua A(1;0;2) với VTCP u=(1;1;−1) là:",
            options: JSON.stringify([
              "x=1+t; y=t; z=2−t",
              "x=t; y=1+t; z=−1+2t",
              "x=1; y=0; z=2",
              "x+y+z=3",
            ]),
            answer: "0",
          },
        ],
      },
    },
    {
      title: "Chuyên đề 5: Ôn thi tổng hợp – Đề thi thử",
      order: 5,
      lessons: [
        {
          title: "Phân tích đề thi TN THPT Toán 2020–2023",
          order: 10,
          content: `## Phân tích cấu trúc đề thi Toán TN THPT

### 1. Cấu trúc đề (50 câu – 90 phút)
| Chủ đề | Số câu | Mức độ |
|--------|--------|--------|
| Hàm số – Đồ thị | 7–8 | Nhận biết → VD cao |
| Mũ – Logarithm | 5–6 | Thông hiểu → VD |
| Nguyên hàm – Tích phân | 5–6 | VD – VD cao |
| Số phức | 3–4 | Nhận biết → Thông hiểu |
| Xác suất – Tổ hợp | 5–6 | Thông hiểu → VD |
| Hình học Oxyz | 5–6 | VD – VD cao |
| Hình học 3D – Thể tích | 3–4 | VD cao |

**Thang điểm**: mỗi câu 0,2 điểm → 10 điểm

### 2. Phân phối điểm số
- Câu 1–30 (6 điểm): mức cơ bản, học sinh trung bình làm được
- Câu 31–45 (3 điểm): khó trung bình, cần luyện nhiều
- Câu 46–50 (1 điểm): rất khó, dành cho 9–10 điểm

### 3. Lỗi thường gặp
- Quên điều kiện TXĐ khi khảo sát hàm số
- Nhầm đơn vị góc: radian vs độ
- Tính toán sai khi đổi biến tích phân`,
        },
        {
          title: "Chiến lược làm bài – Quản lý thời gian",
          order: 11,
          content: `## Chiến thuật thi Toán TN THPT

### 1. Phân bổ thời gian 90 phút
- Câu 1–20 (dễ): 20–25 phút
- Câu 21–40 (TB): 30–35 phút
- Câu 41–50 (khó): 20–25 phút
- Kiểm tra lại: 5–10 phút

### 2. Thứ tự làm bài tối ưu
1. Đọc lướt toàn đề (2 phút)
2. Làm câu chắc chắn đúng ngay
3. Đánh dấu câu còn phân vân → làm sau
4. Câu khó nhất → làm cuối hoặc đoán

### 3. Kỹ năng loại đáp án sai
- **Kiểm tra chiều đơn vị**: nếu đề cho R (m), đáp án (m²) → sai
- **Thử giá trị đặc biệt**: x=0, x=1 → check kết quả
- **Ước tính**: nếu tích phân dương trên [0,1] → đáp án phải > 0

### 4. Mẹo câu hỏi trắc nghiệm
- Đọc kỹ từ "KHÔNG", "SAI", "ngoại trừ"
- Với hàm số: vẽ nháp đồ thị để hình dung
- Đáp án số nguyên thường cho hàm đơn giản → nghĩ ngay tới đó`,
        },
        {
          title: "Bài tập tổng hợp – 15 câu khó thường gặp",
          order: 12,
          content: `## Bài tập khó thường gặp trong đề thi TN THPT

### Dạng 1: Hàm số có tham số m
Đề cho f(x;m) = 0, hỏi giá trị m để hàm có nghiệm/đơn điệu/cực trị

**Chiến lược**: Tách m ra một vế → bài toán giao đồ thị f(x) và đường thẳng y = g(m)

### Dạng 2: Tích phân ngược
Cho ∫f(x)dx = k, tìm ∫g(f(x))dx

**Ví dụ** (đề 2022): ∫₀¹ f(x)dx = 2; tìm ∫₀¹ xf'(x)dx
→ Tích phân từng phần: = [xf(x)]₀¹ − ∫₀¹ f(x)dx = f(1) − 2

### Dạng 3: Số phức dạng hình học
|z−z₀| = R: tập hợp điểm M biểu diễn z là đường tròn
Tìm |z|_min/max = |IO ± R| (O: gốc tọa độ, I: tâm)

### Dạng 4: Xác suất có điều kiện
P(A|B) = P(A∩B)/P(B)

**Mẹo**: Vẽ sơ đồ cây hoặc bảng 2×2 để đếm phần tử

### Dạng 5: Hình học Oxyz – Chân đường vuông góc
Chân đường vuông góc từ M đến đường thẳng d:
Tìm H = A + t·u⃗ sao cho MH⃗ ⊥ u⃗ → tính t → tọa độ H`,
        },
      ],
      quiz: {
        title: "Quiz 5 – Ôn thi tổng hợp Toán",
        questions: [
          {
            text: "Cấu trúc đề thi TN THPT môn Toán có bao nhiêu câu trắc nghiệm?",
            options: JSON.stringify(["40 câu", "50 câu", "60 câu", "100 câu"]),
            answer: "1",
          },
          {
            text: "Trong 90 phút, nên dành bao nhiêu phút cho 20 câu đầu (dễ)?",
            options: JSON.stringify(["5–10 phút", "20–25 phút", "40 phút", "60 phút"]),
            answer: "1",
          },
          {
            text: "Tập hợp điểm M biểu diễn số phức z thỏa |z−(1+i)|=2 là:",
            options: JSON.stringify([
              "Đường thẳng",
              "Đường tròn tâm M(1;1) bán kính 2",
              "Đường tròn tâm O(0;0) bán kính 2",
              "Parabol",
            ]),
            answer: "1",
          },
          {
            text: "Câu có từ 'KHÔNG ĐÚNG' trong đề trắc nghiệm yêu cầu:",
            options: JSON.stringify([
              "Chọn câu đúng nhất",
              "Chọn câu sai",
              "Bỏ qua câu hỏi",
              "Chọn tất cả đáp án",
            ]),
            answer: "1",
          },
          {
            text: "Khi tích phân ∫ₐᵇ f(x)dx có kết quả âm, điều đó có nghĩa là:",
            options: JSON.stringify([
              "Tính toán nhất định sai",
              "f(x) < 0 trên [a,b] hoặc phần âm lớn hơn phần dương",
              "Tích phân không xác định",
              "Không thể xảy ra",
            ]),
            answer: "1",
          },
        ],
      },
    },
  ],
};



