import type { CourseData } from "./types";

// Nội dung theo SGK Toán 10 – Kết nối tri thức 2022
export const MATH_COURSE: CourseData = {
  title: "Toán 10 – Đại số và Hình học",
  slug: "toan-10",
  subject: "math",
  grade: "10",
  description:
    "Khóa học Toán lớp 10 theo chương trình THPT mới: Mệnh đề – Tập hợp, Bất phương trình, Hàm số bậc hai, Vectơ và Phương trình đường thẳng theo SGK Kết nối tri thức 2022.",
  published: true,
  modules: [
    {
      title: "Chương 1: Mệnh đề và Tập hợp",
      order: 1,
      lessons: [
        {
          title: "Mệnh đề – Kéo theo và Tương đương",
          order: 1,
          content: `## Mệnh đề (Proposition)

### 1. Khái niệm
**Mệnh đề** là câu khẳng định một sự kiện, có thể xác định là đúng (Đ) hoặc sai (S), không thể vừa đúng vừa sai.

**Là mệnh đề:**
- "2 + 3 = 5" → **ĐÚNG**
- "Hà Nội là thủ đô của Việt Nam" → **ĐÚNG**
- "3 chia hết cho 4" → **SAI**

**Không là mệnh đề:**
- "Học đi nào!" (câu mệnh lệnh)
- "x + 1 = 5" (phụ thuộc x → mệnh đề chứa biến)

### 2. Phủ định của mệnh đề
Phủ định của P, ký hiệu **P̄**, có giá trị chân lý ngược lại P.

Ví dụ: P: "12 chia hết cho 3" (Đ) → P̄: "12 không chia hết cho 3" (S)

### 3. Mệnh đề kéo theo: P ⇒ Q ("Nếu P thì Q")

**Bảng chân trị:**
| P | Q | P ⇒ Q |
|---|---|--------|
| Đ | Đ | **Đ** |
| Đ | S | **S** |
| S | Đ | **Đ** |
| S | S | **Đ** |

> P ⇒ Q **chỉ sai** khi P đúng mà Q sai.

**Mệnh đề đảo:** Q ⇒ P (mệnh đề đúng chưa chắc có đảo đúng)
- Ví dụ: "Nếu n⋮4 thì n⋮2" (Đ), nhưng đảo "Nếu n⋮2 thì n⋮4" (S, vì n=6)

### 4. Mệnh đề tương đương: P ⟺ Q
P ⟺ Q đúng khi (P ⇒ Q) **và** (Q ⇒ P) đều đúng.

Ví dụ: "n⋮2 ⟺ n là số chẵn" → ĐÚNG

### 5. Điều kiện cần và đủ
- **P là điều kiện đủ để có Q**: P ⇒ Q
- **P là điều kiện cần để có Q**: Q ⇒ P
- **P là điều kiện cần và đủ để có Q**: P ⟺ Q`,
        },
        {
          title: "Tập hợp – Các phép toán",
          order: 2,
          content: `## Tập hợp (Set)

### 1. Cách xác định tập hợp
**Liệt kê:** A = {1; 2; 3; 4; 5}
**Tính chất đặc trưng:** B = {x ∈ ℝ | x² − 5x + 6 = 0} = {2; 3}

### 2. Các tập hợp số quan trọng
ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ

- **ℕ** = {0; 1; 2; 3; ...}: số tự nhiên
- **ℤ**: số nguyên (cả âm)
- **ℚ**: số hữu tỉ (viết được dạng p/q, q ≠ 0)
- **ℝ**: số thực

### 3. Các phép toán tập hợp

**Hợp: A ∪ B** = {x | x ∈ A **hoặc** x ∈ B}
Ví dụ: {1;2;3} ∪ {2;3;4} = {1;2;3;4}

**Giao: A ∩ B** = {x | x ∈ A **và** x ∈ B}
Ví dụ: {1;2;3} ∩ {2;3;4} = {2;3}

**Hiệu: A \\ B** = {x | x ∈ A **và** x ∉ B}
Ví dụ: {1;2;3} \\ {2;3;4} = {1}

**Phần bù trong X: CₓA** = X \\ A

### 4. Số tập con
Tập A có **n** phần tử → có **2ⁿ** tập con.
Ví dụ: A = {a; b; c} (n=3) → 2³ = **8** tập con.

### 5. Khoảng, đoạn, nửa khoảng (tập con của ℝ)
| Ký hiệu | Điều kiện | Gọi là |
|---------|-----------|--------|
| (a; b) | a < x < b | Khoảng mở |
| [a; b] | a ≤ x ≤ b | Đoạn |
| [a; b) | a ≤ x < b | Nửa khoảng |
| (a; +∞) | x > a | Khoảng vô hạn |
| (−∞; b] | x ≤ b | Khoảng vô hạn |`,
        },
      ],
      quiz: {
        title: "Quiz 1 – Mệnh đề và Tập hợp",
        questions: [
          {
            text: "Câu nào sau đây là mệnh đề?",
            options: JSON.stringify(["Bạn có khỏe không?", "Hãy cố gắng học tập!", "Số π là số vô tỉ.", "x + 5 = 10"]),
            answer: "2",
          },
          {
            text: "Mệnh đề P ⇒ Q sai khi nào?",
            options: JSON.stringify(["P sai, Q đúng", "P đúng, Q sai", "P sai, Q sai", "P đúng, Q đúng"]),
            answer: "1",
          },
          {
            text: "Cho A = {1;2;3;4;5}, B = {3;4;5;6;7}. Tập A ∩ B là:",
            options: JSON.stringify(["{1;2;3;4;5;6;7}", "{3;4;5}", "{1;2}", "{6;7}"]),
            answer: "1",
          },
          {
            text: "Tập hợp A = {a; b; c} có bao nhiêu tập con?",
            options: JSON.stringify(["3", "6", "8", "9"]),
            answer: "2",
          },
          {
            text: "'P là điều kiện đủ để có Q' có nghĩa là:",
            options: JSON.stringify(["Q ⇒ P", "P ⟺ Q", "P ⇒ Q", "P và Q không liên quan"]),
            answer: "2",
          },
        ],
      },
    },
    {
      title: "Chương 2: Bất phương trình bậc nhất và bậc hai",
      order: 2,
      lessons: [
        {
          title: "Bất phương trình bậc nhất một ẩn",
          order: 1,
          content: `## Bất phương trình bậc nhất một ẩn

### 1. Định nghĩa
Dạng: **ax + b > 0** (hoặc ≥, <, ≤), với a ≠ 0.

### 2. Quy tắc biến đổi
- Cộng/trừ cùng một số: **không đổi chiều**
- Nhân/chia cùng số **dương**: không đổi chiều
- Nhân/chia cùng số **âm**: **đổi chiều** bất phương trình

### 3. Ví dụ
**Giải:** −3x + 9 ≥ 0
→ −3x ≥ −9
→ x ≤ 3 (đổi chiều vì chia −3)
→ **Tập nghiệm: S = (−∞; 3]**

---

## Hệ bất phương trình bậc nhất
Giải từng bất phương trình, lấy **giao** các tập nghiệm.

**Ví dụ:** Giải hệ { 2x + 1 > 3  và  x − 5 < 0 }
- BPT 1: 2x > 2 → x > 1 → S₁ = (1; +∞)
- BPT 2: x < 5 → S₂ = (−∞; 5)
- **S = S₁ ∩ S₂ = (1; 5)**

---

## Bất phương trình chứa giá trị tuyệt đối
- **|f(x)| < a** (a > 0) ⟺ −a < f(x) < a
- **|f(x)| > a** (a > 0) ⟺ f(x) < −a **hoặc** f(x) > a

**Ví dụ:** |2x − 1| < 5
→ −5 < 2x − 1 < 5 → −4 < 2x < 6 → **−2 < x < 3**`,
        },
        {
          title: "Dấu của tam thức bậc hai – Bất phương trình bậc hai",
          order: 2,
          content: `## Dấu của tam thức bậc hai f(x) = ax² + bx + c (a ≠ 0)

### Định lý về dấu (Δ = b² − 4ac)

**Nếu Δ < 0:** f(x) cùng dấu với **a** với mọi x ∈ ℝ.

**Nếu Δ = 0:** f(x) cùng dấu với **a** với mọi x ≠ −b/2a; và f(−b/2a) = 0.

**Nếu Δ > 0** (hai nghiệm x₁ < x₂):

| x | (−∞; x₁) | x₁ | (x₁; x₂) | x₂ | (x₂; +∞) |
|---|-----------|----|-----------|----|-----------|
| f(x) với a > 0 | + | 0 | − | 0 | + |
| f(x) với a < 0 | − | 0 | + | 0 | − |

---

## Giải bất phương trình bậc hai

**Ví dụ:** Giải x² − 5x + 6 < 0

**B1:** Δ = 25 − 24 = 1 > 0
**B2:** Nghiệm: x₁ = 2, x₂ = 3
**B3:** a = 1 > 0 → f(x) < 0 khi x₁ < x < x₂
**Kết luận: S = (2; 3)**

---

## Bất phương trình phân thức

Đưa về f(x)/g(x) > 0, rồi lập bảng xét dấu tử và mẫu.

**Ví dụ:** (x − 1)/(x + 2) > 0

| x | −∞ | −2 | (−2;1) | 1 | +∞ |
|---|-----|-----|--------|---|-----|
| x + 2 | − | 0 | + | + | + |
| x − 1 | − | − | − | 0 | + |
| Phân thức | + | KXĐ | − | 0 | + |

**Kết luận: S = (−∞; −2) ∪ (1; +∞)**`,
        },
      ],
      quiz: {
        title: "Quiz 2 – Bất phương trình",
        questions: [
          {
            text: "Khi chia hai vế bất phương trình cho −2, ta phải:",
            options: JSON.stringify(["Giữ nguyên chiều", "Đổi chiều bất phương trình", "Nhân thêm 2", "Cộng thêm 2"]),
            answer: "1",
          },
          {
            text: "Tập nghiệm của −3x + 9 ≥ 0 là:",
            options: JSON.stringify(["(3; +∞)", "(−∞; 3)", "(−∞; 3]", "[3; +∞)"]),
            answer: "2",
          },
          {
            text: "|x − 2| < 3 tương đương với:",
            options: JSON.stringify(["x < 5", "−1 < x < 5", "x > −1 hoặc x < 5", "x < −1 hoặc x > 5"]),
            answer: "1",
          },
          {
            text: "Tam thức x² − 3x + 2 = 0 có hai nghiệm x₁=1, x₂=2. Bất phương trình x² − 3x + 2 < 0 có nghiệm:",
            options: JSON.stringify(["x < 1 hoặc x > 2", "1 < x < 2", "x = 1 hoặc x = 2", "Vô nghiệm"]),
            answer: "1",
          },
          {
            text: "Hệ BPT { x > 2  và  x < 5 } có tập nghiệm là:",
            options: JSON.stringify(["(2; +∞)", "(−∞; 5)", "(2; 5)", "[2; 5]"]),
            answer: "2",
          },
        ],
      },
    },
    {
      title: "Chương 3: Hàm số bậc hai",
      order: 3,
      lessons: [
        {
          title: "Hàm số bậc hai và đồ thị parabol",
          order: 1,
          content: `## Hàm số bậc hai y = ax² + bx + c (a ≠ 0)

### 1. Tính chất
- **Tập xác định:** D = ℝ
- **Đỉnh:** I(x₀; y₀) với x₀ = −b/(2a), y₀ = −Δ/(4a)
- **Trục đối xứng:** x = −b/(2a)
- **a > 0:** parabol mở lên, đỉnh là điểm **thấp nhất** (GTNN)
- **a < 0:** parabol mở xuống, đỉnh là điểm **cao nhất** (GTLN)

### 2. Vị trí parabol và trục Ox
| Δ | Vị trí | Số nghiệm của ax²+bx+c=0 |
|---|--------|--------------------------|
| Δ > 0 | Cắt Ox tại 2 điểm phân biệt | 2 nghiệm: x₁, x₂ |
| Δ = 0 | Tiếp xúc Ox (1 điểm) | Nghiệm kép: x = −b/2a |
| Δ < 0 | Không cắt Ox | Vô nghiệm thực |

### 3. Ví dụ: Khảo sát y = x² − 4x + 3

**a = 1 > 0** → parabol mở lên trên.

**Đỉnh:** x₀ = −(−4)/2 = 2; y₀ = 4 − 8 + 3 = −1 → **I(2; −1)**

**Trục đối xứng:** x = 2

**Giao Ox** (y = 0): x² − 4x + 3 = 0 → x = 1 hoặc x = 3

**Giao Oy** (x = 0): y = 3 → C(0; 3)

---

### 4. GTLN, GTNN của hàm số bậc hai

Với f(x) = ax² + bx + c trên D = ℝ:
- **a > 0:** GTNN = −Δ/(4a) tại x = −b/(2a), không có GTLN.
- **a < 0:** GTLN = −Δ/(4a) tại x = −b/(2a), không có GTNN.`,
        },
        {
          title: "Định lý Vi-ét và ứng dụng",
          order: 2,
          content: `## Định lý Vi-ét (Vieta's Formulas)

Nếu x₁, x₂ là hai nghiệm của **ax² + bx + c = 0** thì:

$$x_1 + x_2 = -\\frac{b}{a} \\qquad x_1 \\cdot x_2 = \\frac{c}{a}$$

### Điều kiện để phương trình có nghiệm
- **2 nghiệm phân biệt:** Δ > 0
- **Nghiệm kép:** Δ = 0
- **Vô nghiệm:** Δ < 0

---

## Dạng 1: Tìm m để pt có 2 nghiệm phân biệt

**Ví dụ:** x² − 2(m+1)x + m² − 1 = 0

Δ > 0 ⟺ 4(m+1)² − 4(m²−1) > 0
⟺ 4m² + 8m + 4 − 4m² + 4 > 0
⟺ 8m + 8 > 0 ⟺ **m > −1**

---

## Dạng 2: Dùng Vi-ét giải bài toán về nghiệm

**Ví dụ:** Tìm m để pt x² − (m+3)x + 2m + 4 = 0 có hai nghiệm thỏa x₁² + x₂² = 5.

- Theo Vi-ét: x₁ + x₂ = m + 3; x₁x₂ = 2m + 4
- x₁² + x₂² = (x₁+x₂)² − 2x₁x₂ = (m+3)² − 2(2m+4) = m² + 2m + 1 = 5
- → m² + 2m − 4 = 0 → **m = −1 ± √5**

---

## Dạng 3: Tìm parabol qua 3 điểm

**Ví dụ:** Parabol y = ax² + bx + c qua A(0;1), B(1;0), C(−1;4).
- Tại A(0;1): c = 1
- Tại B(1;0): a + b + 1 = 0 → a + b = −1
- Tại C(−1;4): a − b + 1 = 4 → a − b = 3
- Giải: a = 1, b = −2 ... **Kiểm tra lại bằng cách thế vào**`,
        },
      ],
      quiz: {
        title: "Quiz 3 – Hàm số bậc hai",
        questions: [
          {
            text: "Đỉnh của parabol y = x² − 6x + 5 có tọa độ:",
            options: JSON.stringify(["(3; −4)", "(−3; 4)", "(3; 4)", "(−3; −4)"]),
            answer: "0",
          },
          {
            text: "Parabol y = −2x² + 4x − 1 mở theo chiều nào?",
            options: JSON.stringify(["Lên trên (a > 0)", "Xuống dưới (a < 0)", "Sang trái", "Sang phải"]),
            answer: "1",
          },
          {
            text: "Phương trình x² + 2x + 5 = 0 có Δ = 4 − 20 = −16 < 0. Kết luận:",
            options: JSON.stringify(["Vô nghiệm thực", "1 nghiệm kép", "2 nghiệm phân biệt", "Vô số nghiệm"]),
            answer: "0",
          },
          {
            text: "Theo Vi-ét, tổng hai nghiệm của 2x² − 5x + 3 = 0 bằng:",
            options: JSON.stringify(["5/2", "−5/2", "3/2", "−3/2"]),
            answer: "0",
          },
          {
            text: "Hàm y = 2x² − 4x + 1 đạt GTNN bằng:",
            options: JSON.stringify(["1", "−1", "2", "−2"]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chương 4: Vectơ và Tọa độ trong mặt phẳng",
      order: 4,
      lessons: [
        {
          title: "Vectơ và các phép toán",
          order: 7,
          content: `## Vectơ

### 1. Định nghĩa
**Vectơ** là một đoạn thẳng có hướng, ký hiệu **a⃗** hoặc AB⃗.
- Độ dài (module): |**a⃗**|
- Vectơ-không: **0⃗** (điểm đầu = điểm cuối)

### 2. Các phép toán vectơ
**Tổng vectơ (quy tắc hình bình hành / tam giác):**
> AB⃗ + BC⃗ = AC⃗

**Tích vectơ với số k:**
> |k·**a⃗**| = |k|·|**a⃗**|; cùng chiều với **a⃗** nếu k > 0

**Hiệu vectơ:**
> **a⃗** − **b⃗** = **a⃗** + (−**b⃗**)

### 3. Tích vô hướng
> **a⃗**·**b⃗** = |**a⃗**|·|**b⃗**|·cos∠(**a⃗**,**b⃗**)

- **a⃗** ⊥ **b⃗** ⟺ **a⃗**·**b⃗** = 0
- **a⃗** ∥ **b⃗** ⟺ **a⃗** = k·**b⃗** (k ≠ 0)`,
        },
        {
          title: "Tọa độ vectơ và Phương trình đường thẳng",
          order: 8,
          content: `## Tọa độ trong mặt phẳng Oxy

### 1. Tọa độ vectơ
Nếu A(x₁; y₁), B(x₂; y₂) thì:
> AB⃗ = (x₂−x₁; y₂−y₁)
> |AB⃗| = √[(x₂−x₁)² + (y₂−y₁)²]

### 2. Phương trình đường thẳng
**Dạng tổng quát:** ax + by + c = 0 (a² + b² ≠ 0)
**Dạng hệ số góc:** y = kx + m (k là hệ số góc)
**Dạng qua 2 điểm** A(x₁;y₁), B(x₂;y₂):
> (x−x₁)/(x₂−x₁) = (y−y₁)/(y₂−y₁)

### 3. Khoảng cách từ điểm đến đường thẳng
> d(M₀; d) = |ax₀ + by₀ + c| / √(a²+b²)

### 4. Vị trí tương đối của 2 đường thẳng
- Song song: a/a' = b/b' ≠ c/c'
- Trùng nhau: a/a' = b/b' = c/c'
- Cắt nhau: a/a' ≠ b/b'`,
        },
        {
          title: "Phương trình đường tròn",
          order: 9,
          content: `## Phương trình đường tròn

### 1. Dạng chính tắc
Đường tròn tâm I(a;b), bán kính R:
> (x−a)² + (y−b)² = R²

### 2. Dạng mở rộng
> x² + y² − 2ax − 2by + (a²+b²−R²) = 0

Hay: x² + y² + Dx + Ey + F = 0 với:
- Tâm I(−D/2; −E/2)
- R = √(D²/4 + E²/4 − F) (R > 0 thì có đường tròn)

### 3. Vị trí điểm và đường tròn
- M trong đường tròn: IM < R
- M trên đường tròn: IM = R
- M ngoài đường tròn: IM > R

### 4. Ví dụ
> Đường tròn qua 3 điểm A(1;0), B(0;1), C(−1;0)
> Lập hệ phương trình từ (x−a)²+(y−b)²=R² → giải ra tâm và bán kính`,
        },
      ],
      quiz: {
        title: "Quiz 4 – Vectơ và Tọa độ",
        questions: [
          {
            text: "Nếu A(1;2) và B(4;6), độ dài AB bằng:",
            options: JSON.stringify(["3", "5", "7", "√7"]),
            answer: "1",
          },
          {
            text: "Hai vectơ **a⃗** và **b⃗** vuông góc nhau khi:",
            options: JSON.stringify(["**a⃗**·**b⃗** = 1", "**a⃗**·**b⃗** = 0", "|**a⃗**| = |**b⃗**|", "**a⃗** = k·**b⃗**"]),
            answer: "1",
          },
          {
            text: "Đường thẳng y = 2x + 3 có hệ số góc bằng:",
            options: JSON.stringify(["3", "2", "−2", "1/2"]),
            answer: "1",
          },
          {
            text: "Phương trình (x−1)² + (y+2)² = 9 có tâm và bán kính là:",
            options: JSON.stringify(["I(1;−2), R=9", "I(1;−2), R=3", "I(−1;2), R=3", "I(−1;2), R=9"]),
            answer: "1",
          },
          {
            text: "Khoảng cách từ điểm M(1;1) đến đường thẳng 3x+4y−5=0 là:",
            options: JSON.stringify(["1", "2/5", "2", "5"]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chương 5: Thống kê và Xác suất",
      order: 5,
      lessons: [
        {
          title: "Các số đặc trưng của mẫu số liệu",
          order: 10,
          content: `## Thống kê mô tả

### 1. Số trung bình (Mean)
> x̄ = (x₁+x₂+...+xₙ) / n = (Σfᵢxᵢ) / n

### 2. Số trung vị (Median – Me)
Giá trị giữa khi sắp xếp theo thứ tự tăng dần:
- n lẻ: Me = x_{(n+1)/2}
- n chẵn: Me = (x_{n/2} + x_{n/2+1}) / 2

### 3. Mode (Tứ phân vị)
**Mode**: giá trị xuất hiện nhiều nhất trong mẫu số liệu.

### 4. Phương sai và Độ lệch chuẩn
> s² = [Σ(xᵢ − x̄)²] / n (phương sai)
> s = √s² (độ lệch chuẩn)

Độ lệch chuẩn đo mức độ phân tán của dữ liệu xung quanh trung bình.`,
        },
        {
          title: "Xác suất và các quy tắc cơ bản",
          order: 11,
          content: `## Xác suất

### 1. Không gian mẫu và Biến cố
- **Không gian mẫu Ω**: tập hợp tất cả kết quả có thể xảy ra
- **Biến cố A**: tập con của Ω

### 2. Định nghĩa xác suất cổ điển
> P(A) = |A| / |Ω| (khi các kết quả đều khả dĩ như nhau)

### 3. Các quy tắc
**Cộng xác suất** (A, B xung khắc):
> P(A∪B) = P(A) + P(B)

**Nhân xác suất** (A, B độc lập):
> P(A∩B) = P(A)·P(B)

**Xác suất bù:**
> P(Ā) = 1 − P(A)

### 4. Ví dụ
> Tung đồng xu 2 lần. Ω = {HH, HT, TH, TT}
> P(ít nhất 1 H) = 1 − P(không có H) = 1 − 1/4 = 3/4`,
        },
        {
          title: "Tổ hợp và Xác suất nâng cao",
          order: 12,
          content: `## Hoán vị, Chỉnh hợp, Tổ hợp

### 1. Hoán vị
Số cách sắp xếp n phần tử:
> Pₙ = n! = n×(n−1)×...×2×1

### 2. Chỉnh hợp (không lặp)
Chọn k phần tử từ n và có thứ tự:
> A^k_n = n! / (n−k)!

### 3. Tổ hợp (không thứ tự)
Chọn k phần tử từ n, không quan tâm thứ tự:
> C^k_n = A^k_n / k! = n! / [k!(n−k)!]

### 4. Ứng dụng trong Xác suất
> Lớp 10 có 30 HS, chọn ngẫu nhiên 2 HS. Xác suất 2 HS đều là nam (biết 12 nam):
> P = C^2_{12} / C^2_{30} = 66/435 = 22/145

### 5. Nhị thức Newton
> (a+b)ⁿ = ΣC^k_n · aⁿ⁻ᵏ · bᵏ (k từ 0 đến n)`,
        },
      ],
      quiz: {
        title: "Quiz 5 – Thống kê và Xác suất",
        questions: [
          {
            text: "Mẫu số liệu: 2, 4, 6, 8, 10. Số trung bình là:",
            options: JSON.stringify(["4", "5", "6", "7"]),
            answer: "2",
          },
          {
            text: "Xác suất tung đồng xu ra mặt ngửa là:",
            options: JSON.stringify(["1", "0", "1/2", "1/4"]),
            answer: "2",
          },
          {
            text: "C^3_5 bằng:",
            options: JSON.stringify(["20", "10", "60", "15"]),
            answer: "1",
          },
          {
            text: "Phương sai đo:",
            options: JSON.stringify(["Giá trị trung bình", "Mức độ phân tán dữ liệu", "Số lớn nhất", "Giá trị xuất hiện nhiều nhất"]),
            answer: "1",
          },
          {
            text: "Hai biến cố A và B độc lập. P(A)=0,5; P(B)=0,4. P(A∩B) bằng:",
            options: JSON.stringify(["0,9", "0,1", "0,2", "0,45"]),
            answer: "2",
          },
        ],
      },
    },
  ],
};
