import type { CourseData } from "./types";

// Nội dung ôn thi THPT Quốc gia – dạng câu hỏi thực tế từ đề thi các năm 2020-2024
export const EXAM_PREP_COURSE: CourseData = {
  title: "Ôn thi Đại học – Toán THPT Quốc gia",
  slug: "on-thi-dh-toan",
  subject: "exam-prep",
  grade: "12",
  description:
    "Khóa ôn luyện Toán thi THPT Quốc gia: Khảo sát hàm số, Mũ – Logarit, Nguyên hàm – Tích phân, Số phức, Xác suất – Thống kê, Hình học không gian. Câu hỏi bám sát cấu trúc đề thi thực tế.",
  published: true,
  modules: [
    {
      title: "Chủ đề 1: Khảo sát hàm số và ứng dụng",
      order: 1,
      lessons: [
        {
          title: "Phương pháp khảo sát hàm số bậc ba y = ax³ + bx² + cx + d",
          order: 1,
          content: `## Khảo sát hàm số bậc ba

### Bước 1: Tập xác định
D = ℝ

### Bước 2: Sự biến thiên
- Tính y' = 3ax² + 2bx + c
- Giải y' = 0 → tìm nghiệm x₁, x₂
- Lập bảng biến thiên

**Với a > 0:**
- y' > 0 khi x < x₁ hoặc x > x₂ → hàm **tăng**
- y' < 0 khi x₁ < x < x₂ → hàm **giảm**
- Cực đại tại x₁ (y' đổi dấu từ + sang −)
- Cực tiểu tại x₂ (y' đổi dấu từ − sang +)

### Bước 3: Giới hạn và đồ thị
- lim(x→+∞) = +∞ và lim(x→−∞) = −∞ (a > 0)
- Điểm uốn: I(x₀; y₀) với x₀ = −b/(3a)

---

## Các dạng câu hỏi về đồ thị hay gặp trong đề thi

### Dạng 1: Đọc đồ thị xác định hàm số
Nhận dạng từ: số cực trị, hướng lên/xuống, giao với trục tung.

### Dạng 2: Biện luận số nghiệm của phương trình
f(x) = m ↔ đường y = m cắt đồ thị y = f(x) bao nhiêu lần.

**Ví dụ (Đề THPT 2023):** Cho hàm f(x) = x³ − 3x + 2.
Phương trình f(x) = m có 3 nghiệm phân biệt khi:
- f'(x) = 3x² − 3 = 0 → x = ±1
- f(−1) = −1+3+2 = 4 (cực đại); f(1) = 1−3+2 = 0 (cực tiểu)
- Đường y=m cắt đồ thị tại 3 điểm ⟺ **0 < m < 4**

### Dạng 3: Tìm m để hàm đơn điệu trên khoảng cho trước
y' ≥ 0 với mọi x ∈ (a; b) ⟺ min của y' trên (a;b) ≥ 0`,
        },
        {
          title: "Hàm số mũ, logarit và ứng dụng",
          order: 2,
          content: `## Hàm số mũ y = aˣ và Hàm logarit y = logₐx

### 1. Hàm mũ y = aˣ (a > 0, a ≠ 1)
- TXĐ: D = ℝ; Tập giá trị: (0; +∞)
- **a > 1**: hàm **đồng biến** trên ℝ
- **0 < a < 1**: hàm **nghịch biến** trên ℝ
- Đồ thị qua (0; 1), không có giá trị âm

### 2. Hàm logarit y = logₐx (a > 0, a ≠ 1)
- TXĐ: D = (0; +∞)
- **a > 1**: hàm **đồng biến**
- **0 < a < 1**: hàm **nghịch biến**
- Đồ thị qua (1; 0)

### 3. Công thức logarit quan trọng
$$\\log_a(xy) = \\log_a x + \\log_a y$$
$$\\log_a\\frac{x}{y} = \\log_a x - \\log_a y$$
$$\\log_a x^n = n\\log_a x$$
$$\\log_a x = \\frac{\\log_b x}{\\log_b a} \\quad \\text{(đổi cơ số)}$$

### 4. Giải phương trình mũ và logarit
**PT mũ:** aᶠ⁽ˣ⁾ = aᵍ⁽ˣ⁾ ⟺ f(x) = g(x)

**PT logarit:** logₐ f(x) = logₐ g(x) ⟺ f(x) = g(x) > 0

**Ví dụ:** 2^(x²-3x) = 16
- 2^(x²-3x) = 2⁴
- x² − 3x = 4
- x² − 3x − 4 = 0 → x = 4 hoặc x = −1`,
        },
      ],
      quiz: {
        title: "Quiz 1 – Khảo sát hàm số (Dạng đề THPT QG)",
        questions: [
          {
            text: "Hàm số y = x³ − 3x + 2 có bao nhiêu cực trị?",
            options: JSON.stringify(["0", "1 cực đại", "1 cực tiểu", "1 cực đại và 1 cực tiểu"]),
            answer: "3",
          },
          {
            text: "Hàm số y = x³ − 3x + 2 đạt cực đại tại x = −1 với giá trị cực đại bằng:",
            options: JSON.stringify(["0", "4", "2", "−4"]),
            answer: "1",
          },
          {
            text: "Phương trình x³ − 3x + 2 = m có 3 nghiệm phân biệt khi:",
            options: JSON.stringify(["m < 0", "0 < m < 4", "m > 4", "m = 0 hoặc m = 4"]),
            answer: "1",
          },
          {
            text: "Phương trình 4^x = 8 có nghiệm là:",
            options: JSON.stringify(["x = 2", "x = 3/2", "x = 1/2", "x = 3"]),
            answer: "1",
          },
          {
            text: "log₂(x² − 3x + 2) = 1. Tập nghiệm là:",
            options: JSON.stringify(["x = 3 hoặc x = 0", "x = 4 hoặc x = −1", "x = 3 hoặc x = −1", "x = 0 hoặc x = 4"]),
            answer: "0",
          },
        ],
      },
    },
    {
      title: "Chủ đề 2: Nguyên hàm – Tích phân và ứng dụng",
      order: 2,
      lessons: [
        {
          title: "Nguyên hàm và các phương pháp tính",
          order: 1,
          content: `## Nguyên hàm (Antiderivative)

### Định nghĩa
F(x) là nguyên hàm của f(x) nếu F'(x) = f(x).
Ký hiệu: ∫f(x)dx = F(x) + C

### Bảng nguyên hàm cơ bản
| f(x) | ∫f(x)dx |
|------|---------|
| xⁿ (n ≠ −1) | xⁿ⁺¹/(n+1) + C |
| 1/x | ln\|x\| + C |
| eˣ | eˣ + C |
| aˣ | aˣ/ln a + C |
| sin x | −cos x + C |
| cos x | sin x + C |
| 1/cos²x | tan x + C |
| 1/sin²x | −cot x + C |

### Phương pháp 1: Đổi biến số (u-substitution)
$$\\int f(g(x))g'(x)dx = \\int f(u)du \\quad (u = g(x))$$

**Ví dụ:** ∫2x(x²+1)⁵ dx
Đặt u = x²+1 → du = 2x dx
= ∫u⁵ du = u⁶/6 + C = **(x²+1)⁶/6 + C**

### Phương pháp 2: Tích phân từng phần
$$\\int u \\cdot dv = uv - \\int v \\cdot du$$

Quy tắc nhớ **LIATE** (ưu tiên làm u):
**L**ogarit, **I**nverse trig, **A**lgebra, **T**rigono, **E**xponential

**Ví dụ:** ∫x·eˣ dx
u = x → du = dx; dv = eˣdx → v = eˣ
= xeˣ − ∫eˣ dx = **xeˣ − eˣ + C**`,
        },
        {
          title: "Tích phân xác định và ứng dụng tính diện tích",
          order: 2,
          content: `## Tích phân xác định

### Định nghĩa (Công thức Newton-Leibniz)
$$\\int_a^b f(x)dx = F(b) - F(a)$$

Trong đó F(x) là một nguyên hàm bất kỳ của f(x).

### Tính chất
- ∫ᵃᵇ f(x)dx = −∫ᵇᵃ f(x)dx
- ∫ᵃᵃ f(x)dx = 0
- ∫ᵃᵇ [f(x) ± g(x)]dx = ∫ᵃᵇ f(x)dx ± ∫ᵃᵇ g(x)dx

---

## Ứng dụng: Tính diện tích hình phẳng

### Diện tích giữa đường cong và trục Ox
$$S = \\int_a^b |f(x)| dx$$

**Ví dụ:** Tính diện tích hình phẳng giới hạn bởi y = x² − x và trục Ox trên [0; 1].
- f(0) = 0, f(1) = 0; f(x) ≤ 0 trên (0; 1)
$$S = \\int_0^1 |x^2 - x| dx = \\int_0^1 (x - x^2) dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$$

### Diện tích giữa hai đường cong y = f(x) và y = g(x)
$$S = \\int_a^b |f(x) - g(x)| dx$$

**Ví dụ (Đề THPT 2022):** Diện tích hình phẳng giới hạn bởi y = x², y = x + 2.
- Giao điểm: x² = x + 2 → x = −1 và x = 2
$$S = \\int_{-1}^{2} [(x+2) - x^2] dx = \\left[\\frac{x^2}{2} + 2x - \\frac{x^3}{3}\\right]_{-1}^{2} = \\frac{9}{2}$$`,
        },
      ],
      quiz: {
        title: "Quiz 2 – Nguyên hàm và Tích phân (Dạng đề THPT QG)",
        questions: [
          {
            text: "∫(3x² − 2x + 1)dx bằng:",
            options: JSON.stringify(["x³ − x² + x + C", "6x − 2 + C", "x³ − x² + C", "3x³ − x² + x + C"]),
            answer: "0",
          },
          {
            text: "∫₀¹ x²dx bằng:",
            options: JSON.stringify(["1/2", "1/3", "2/3", "1"]),
            answer: "1",
          },
          {
            text: "Diện tích hình phẳng giới hạn bởi y = x², y = x trên [0; 1] bằng:",
            options: JSON.stringify(["1/6", "1/3", "1/2", "1"]),
            answer: "0",
          },
          {
            text: "Để tính ∫x·ln(x)dx, phương pháp phù hợp nhất là:",
            options: JSON.stringify(["Đổi biến u = x", "Tích phân từng phần (u = ln x, dv = x dx)", "Công thức trực tiếp", "Đổi biến u = ln x"]),
            answer: "1",
          },
          {
            text: "∫₁² (2/x)dx bằng:",
            options: JSON.stringify(["2 ln 2", "ln 4", "Cả A và B đúng", "2"]),
            answer: "2",
          },
        ],
      },
    },
    {
      title: "Chủ đề 3: Xác suất và Thống kê",
      order: 3,
      lessons: [
        {
          title: "Quy tắc đếm, Hoán vị, Chỉnh hợp, Tổ hợp",
          order: 1,
          content: `## Quy tắc đếm

### Quy tắc nhân
Nếu một công việc gồm **hai giai đoạn liên tiếp**, giai đoạn 1 có m cách, giai đoạn 2 có n cách → tổng số cách = **m × n**.

### Quy tắc cộng
Nếu có k phương án, phương án i có mᵢ cách (loại trừ nhau) → tổng số cách = **m₁ + m₂ + ... + mₖ**.

---

## Hoán vị, Chỉnh hợp, Tổ hợp

### Hoán vị của n phần tử
$$P_n = n! = 1 \\times 2 \\times 3 \\times ... \\times n$$

### Chỉnh hợp chập k của n (có thứ tự, không lặp)
$$A_n^k = \\frac{n!}{(n-k)!}$$

### Tổ hợp chập k của n (không tính thứ tự)
$$C_n^k = \\binom{n}{k} = \\frac{n!}{k!(n-k)!}$$

---

## Ví dụ
**Từ 10 học sinh chọn ra ban cán sự gồm lớp trưởng, lớp phó:**
Số cách = A₁₀² = 10×9 = **90 cách** (có thứ tự – chức vụ khác nhau)

**Từ 10 học sinh chọn ra nhóm 3 người:**
Số cách = C₁₀³ = 10!/(3!×7!) = **120 cách** (không tính thứ tự)

**Công thức nhị thức Newton:**
$$(a+b)^n = \\sum_{k=0}^{n} C_n^k a^{n-k}b^k$$`,
        },
        {
          title: "Xác suất – Các quy tắc tính",
          order: 2,
          content: `## Xác suất (Probability)

### Định nghĩa cổ điển
$$P(A) = \\frac{\\text{Số kết quả thuận lợi cho A}}{\\text{Tổng số kết quả có thể}}$$

Điều kiện: Các kết quả **đồng khả năng xảy ra**.

### Các quy tắc cơ bản

**Biến cố đối lập:** P(Ā) = 1 − P(A)

**Cộng xác suất (biến cố xung khắc):**
P(A ∪ B) = P(A) + P(B) − P(A ∩ B)

Nếu A và B **xung khắc** (không thể đồng thời xảy ra):
P(A ∪ B) = P(A) + P(B)

**Nhân xác suất (biến cố độc lập):**
P(A ∩ B) = P(A) × P(B)

---

## Ví dụ thực tế

**Ví dụ 1:** Tung đồng tiền 3 lần. Xác suất được đúng 2 mặt ngửa?
- n(Ω) = 2³ = 8
- Số kết quả có đúng 2 mặt ngửa: C₃² = 3 (HHT, HTH, THH)
- **P = 3/8**

**Ví dụ 2 (Dạng đề thi):** Hộp có 3 bi đỏ, 5 bi xanh. Lấy ngẫu nhiên 2 bi. Xác suất cả 2 bi cùng màu?
- n(Ω) = C₈² = 28
- Cùng màu: C₃² + C₅² = 3 + 10 = 13
- **P = 13/28**`,
        },
      ],
      quiz: {
        title: "Quiz 3 – Xác suất và Thống kê (Dạng đề THPT QG)",
        questions: [
          {
            text: "Từ 5 nam và 4 nữ, chọn 3 người. Số cách chọn có ít nhất 1 nữ là:",
            options: JSON.stringify(["74", "84", "76", "80"]),
            answer: "0",
          },
          {
            text: "C₁₀³ bằng:",
            options: JSON.stringify(["30", "120", "720", "10"]),
            answer: "1",
          },
          {
            text: "Hộp có 4 bi đỏ, 3 bi xanh, 2 bi vàng. Lấy ngẫu nhiên 1 bi. Xác suất được bi đỏ là:",
            options: JSON.stringify(["1/3", "4/9", "4/7", "1/2"]),
            answer: "1",
          },
          {
            text: "Gieo xúc xắc 2 lần. Xác suất tổng hai lần gieo bằng 7 là:",
            options: JSON.stringify(["1/6", "7/36", "1/4", "5/36"]),
            answer: "0",
          },
          {
            text: "Hệ số của x³ trong khai triển (x + 2)⁵ theo công thức nhị thức Newton là:",
            options: JSON.stringify(["40", "80", "10", "20"]),
            answer: "1",
          },
        ],
      },
    },
  ],
};
