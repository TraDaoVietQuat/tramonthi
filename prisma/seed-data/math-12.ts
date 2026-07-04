import { CourseData } from "./types";

export const MATH_12_COURSE: CourseData = {
  title: "Toán học 12",
  slug: "toan-12",
  subject: "math",
  grade: "12",
  description: "Khảo sát hàm số, hàm số mũ–logarit và tích phân – chương trình Toán 12 theo SGK Kết nối tri thức 2022, bám sát cấu trúc đề thi THPT QG.",
  published: true,
  modules: [
    {
      title: "Khảo sát hàm số",
      order: 1,
      lessons: [
        {
          title: "Đơn điệu, cực trị và bảng biến thiên",
          order: 1,
          content: `## Khảo sát hàm số

### 1. Sự đơn điệu (tính đồng biến, nghịch biến)
Tính f'(x) và giải f'(x) > 0 (đồng biến) hoặc f'(x) < 0 (nghịch biến).

**Ví dụ:** y = x³ − 3x² − 9x + 5
- y' = 3x² − 6x − 9 = 3(x² − 2x − 3) = 3(x − 3)(x + 1)
- y' = 0 ↔ x = −1 hoặc x = 3

| Khoảng | x < −1 | −1 < x < 3 | x > 3 |
|--------|--------|-----------|-------|
| y' | + | − | + |
| y | ↗ tăng | ↘ giảm | ↗ tăng |

→ Đồng biến trên (−∞; −1) và (3; +∞)
→ Nghịch biến trên (−1; 3)

### 2. Cực trị
- y'(−1) = 0, y' đổi dấu từ + → − → **Cực đại** tại x = −1: y_CĐ = 10
- y'(3) = 0, y' đổi dấu từ − → + → **Cực tiểu** tại x = 3: y_CT = −22

### 3. Giá trị lớn nhất / Nhỏ nhất trên đoạn [a; b]
So sánh: f(a), f(b) và giá trị tại các điểm cực trị trong [a; b]

### 4. Tiệm cận
**Hàm phân thức** y = (2x − 1)/(x + 2):
- **Tiệm cận đứng:** x + 2 = 0 → x = −2
- **Tiệm cận ngang:** lim(x→±∞) y = 2 → y = 2`,
        },
        {
          title: "Đồ thị hàm số bậc ba và hàm phân thức bậc nhất/bậc nhất",
          order: 2,
          content: `## Đồ thị hàm số

### Hàm bậc ba: y = ax³ + bx² + cx + d (a ≠ 0)
**Sơ đồ khảo sát:**
1. Tìm TXĐ: D = ℝ
2. Chiều biến thiên: tính y', giải y' = 0
3. Cực đại, cực tiểu
4. Bảng biến thiên
5. Giao trục tọa độ (x=0 → giao Oy; y=0 → giao Ox)
6. Vẽ đồ thị

**Hình dạng đồ thị bậc ba (a > 0):**
- Có cực đại và cực tiểu nếu Δ = b² − 3ac > 0
- Đơn điệu tăng nếu Δ ≤ 0

---

### Hàm phân thức: y = (ax + b)/(cx + d)
- TXĐ: D = ℝ \\ {−d/c}
- Tiệm cận đứng: x = −d/c
- Tiệm cận ngang: y = a/c
- Đồng biến khi ad − bc < 0, nghịch biến khi ad − bc > 0

---

### Ứng dụng: Biện luận số nghiệm phương trình
Phương trình f(x) = m tương đương giao điểm đồ thị y = f(x) với đường thẳng y = m.

**Ví dụ:** Số nghiệm của x³ − 3x = m phụ thuộc vào m:
- m > 2: 1 nghiệm
- m = 2: 2 nghiệm (tiếp xúc ở cực đại)
- −2 < m < 2: 3 nghiệm
- m = −2: 2 nghiệm
- m < −2: 1 nghiệm`,
        },
      ],
      quiz: {
        title: "Quiz: Khảo sát hàm số",
        questions: [
          {
            text: "Hàm số y = x³ − 3x² + 1 có điểm cực tiểu tại x = ?",
            options: JSON.stringify(["x = 0", "x = 1", "x = 2", "x = −1"]),
            answer: "2",
          },
          {
            text: "Hàm số y = −x³ + 3x nghịch biến trên khoảng:",
            options: JSON.stringify(["(−1; 1)", "(−∞; −1) và (1; +∞)", "(−∞; 0)", "(0; +∞)"]),
            answer: "1",
          },
          {
            text: "Đồ thị hàm số y = (2x + 1)/(x − 3) có tiệm cận đứng là:",
            options: JSON.stringify(["x = 3", "x = −3", "x = 1/2", "y = 2"]),
            answer: "0",
          },
          {
            text: "Hàm số y = x³ − 3x + 2 có bao nhiêu điểm cực trị?",
            options: JSON.stringify(["0", "1", "2", "3"]),
            answer: "2",
          },
          {
            text: "Phương trình x³ − 3x − m = 0 có đúng 3 nghiệm phân biệt khi:",
            options: JSON.stringify(["−2 < m < 2", "m = ±2", "m > 2", "m < −2"]),
            answer: "0",
          },
        ],
      },
    },
    {
      title: "Hàm số mũ và Logarit",
      order: 2,
      lessons: [
        {
          title: "Lũy thừa – Hàm số mũ và phương trình mũ",
          order: 3,
          content: `## Lũy thừa và Hàm số mũ

### Lũy thừa với số mũ thực
- a^m × a^n = a^(m+n)
- a^m / a^n = a^(m−n)
- (a^m)^n = a^(mn)
- (ab)^n = aⁿ × bⁿ
- a^(m/n) = ⁿ√(aᵐ) (a > 0)

### Hàm số mũ y = aˣ (a > 0, a ≠ 1)
- TXĐ: D = ℝ; Tập giá trị: (0; +∞)
- **a > 1:** đồng biến, đồ thị dốc lên từ trái sang phải
- **0 < a < 1:** nghịch biến, đồ thị dốc xuống
- Luôn qua điểm (0; 1)

### Phương trình mũ
**Cùng cơ số:** aˢ = aᵗ ↔ s = t (a > 0, a ≠ 1)

**Đặt ẩn phụ:** 4ˣ − 2ˣ − 6 = 0
Đặt t = 2ˣ (t > 0): t² − t − 6 = 0 → (t − 3)(t + 2) = 0
→ t = 3 → 2ˣ = 3 → **x = log₂3**

### Bất phương trình mũ
- a > 1: aˢ > aᵗ ↔ s > t
- 0 < a < 1: aˢ > aᵗ ↔ s < t

**Ví dụ:** (1/2)ˣ < 8 → (2⁻¹)ˣ < 2³ → 2⁻ˣ < 2³ → −x < 3 → **x > −3**`,
        },
        {
          title: "Logarit – Phương trình và bất phương trình logarit",
          order: 4,
          content: `## Logarit

### Định nghĩa
> log_a b = c ↔ a^c = b (a > 0, a ≠ 1, b > 0)

**Logarit thập phân:** lg x = log₁₀ x
**Logarit tự nhiên:** ln x = log_e x (e ≈ 2,718)

### Tính chất logarit
- log_a 1 = 0
- log_a a = 1
- log_a(M.N) = log_a M + log_a N
- log_a(M/N) = log_a M − log_a N
- log_a Mⁿ = n.log_a M
- **Đổi cơ số:** log_a b = log_c b / log_c a = 1/log_b a

### Phương trình logarit
**log₂(x − 1) = 3** → x − 1 = 2³ = 8 → **x = 9** (kiểm tra: x > 1 ✓)

**Đặt ẩn phụ:** log²₂x − 5log₂x + 6 = 0
Đặt t = log₂x: t² − 5t + 6 = 0 → t = 2 hoặc t = 3
→ x = 4 hoặc x = 8

### Bất phương trình logarit
- a > 1: log_a s > log_a t ↔ s > t > 0
- 0 < a < 1: log_a s > log_a t ↔ 0 < s < t

**Bài tập thường gặp THPT QG:**
Cho log₃5 = a. Tính log₃45:
45 = 9 × 5 = 3² × 5
log₃45 = log₃(3² × 5) = 2 + log₃5 = **2 + a**`,
        },
      ],
      quiz: {
        title: "Quiz: Hàm số mũ và Logarit",
        questions: [
          {
            text: "Hàm số y = (1/3)ˣ:",
            options: JSON.stringify([
              "Đồng biến trên ℝ",
              "Nghịch biến trên ℝ",
              "Đồng biến trên (0; +∞)",
              "Nghịch biến trên (0; +∞)",
            ]),
            answer: "1",
          },
          {
            text: "Nghiệm của phương trình log₂(x − 1) = 3 là:",
            options: JSON.stringify(["x = 7", "x = 9", "x = 8", "x = 6"]),
            answer: "1",
          },
          {
            text: "Cho log₂3 = a. Biểu thức log₂12 bằng:",
            options: JSON.stringify(["a + 2", "2a + 1", "a + 4", "2 + a/2"]),
            answer: "0",
          },
          {
            text: "Phương trình 4ˣ − 5.2ˣ + 4 = 0 có nghiệm là:",
            options: JSON.stringify(["x = 0; x = 1", "x = 0; x = 2", "x = 1; x = 2", "x = −1; x = 1"]),
            answer: "2",
          },
          {
            text: "Bất phương trình log₀,₅(x + 1) < −2 có nghiệm là:",
            options: JSON.stringify(["x > 3", "x > 4", "0 < x < 4", "x > 3 và x > −1"]),
            answer: "0",
          },
        ],
      },
    },
    {
      title: "Nguyên hàm – Tích phân và ứng dụng",
      order: 3,
      lessons: [
        {
          title: "Nguyên hàm và các phương pháp tính",
          order: 5,
          content: `## Nguyên hàm

### Định nghĩa
F(x) là nguyên hàm của f(x) trên (a; b) nếu F'(x) = f(x) ∀x ∈ (a; b).

Ký hiệu: **∫f(x)dx = F(x) + C**

### Bảng nguyên hàm cơ bản

| f(x) | ∫f(x)dx |
|------|---------|
| xⁿ (n ≠ −1) | xⁿ⁺¹/(n+1) + C |
| 1/x | ln\|x\| + C |
| eˣ | eˣ + C |
| aˣ | aˣ/ln a + C |
| sinx | −cosx + C |
| cosx | sinx + C |
| 1/cos²x | tanx + C |
| 1/sin²x | −cotx + C |
| 1/√(1−x²) | arcsinx + C |

### Phương pháp đổi biến (u-substitution)
∫f(g(x)).g'(x)dx = ∫f(u)du (đặt u = g(x))

**Ví dụ:** ∫2x(x²+1)⁵ dx
Đặt u = x² + 1, du = 2x dx:
= ∫u⁵ du = u⁶/6 + C = **(x² + 1)⁶/6 + C**

### Phương pháp từng phần (Integration by parts)
> ∫u dv = uv − ∫v du

**Ví dụ:** ∫x.eˣ dx
Đặt u = x, dv = eˣdx → du = dx, v = eˣ
= x.eˣ − ∫eˣ dx = **x.eˣ − eˣ + C = eˣ(x − 1) + C**`,
        },
        {
          title: "Tích phân xác định và ứng dụng",
          order: 6,
          content: `## Tích phân xác định

### Định nghĩa và công thức Newton-Leibniz
> **∫_a^b f(x)dx = F(b) − F(a)**

Trong đó F(x) là một nguyên hàm của f(x).

### Tính chất
- ∫_a^a f(x)dx = 0
- ∫_a^b f(x)dx = −∫_b^a f(x)dx
- ∫_a^b [f(x) ± g(x)]dx = ∫_a^b f(x)dx ± ∫_a^b g(x)dx
- ∫_a^b k.f(x)dx = k.∫_a^b f(x)dx
- ∫_a^b f(x)dx = ∫_a^c f(x)dx + ∫_c^b f(x)dx

**Ví dụ:** ∫_0^1 (3x² − 2x + 1)dx = [x³ − x² + x]_0^1 = (1 − 1 + 1) − 0 = **1**

---

## Ứng dụng tích phân

### Diện tích hình phẳng
Diện tích hình giới hạn bởi y = f(x), y = g(x), x = a, x = b:
> **S = ∫_a^b |f(x) − g(x)| dx**

**Ví dụ:** Diện tích giữa y = x² và y = x (x ∈ [0; 1]):
S = ∫_0^1 (x − x²)dx = [x²/2 − x³/3]_0^1 = 1/2 − 1/3 = **1/6**

### Thể tích vật thể tròn xoay
Quay hình phẳng giới hạn bởi y = f(x), Ox, x = a, x = b quanh trục Ox:
> **V = π.∫_a^b [f(x)]² dx**

**Ví dụ:** Quay y = √x (0 ≤ x ≤ 4) quanh Ox:
V = π.∫_0^4 x dx = π.[x²/2]_0^4 = **8π**`,
        },
      ],
      quiz: {
        title: "Quiz: Tích phân",
        questions: [
          {
            text: "Nguyên hàm của f(x) = 3x² − 2x + 5 là:",
            options: JSON.stringify([
              "F(x) = x³ − x² + 5x + C",
              "F(x) = 3x³ − 2x² + 5x + C",
              "F(x) = 6x − 2 + C",
              "F(x) = x³ − x + 5 + C",
            ]),
            answer: "0",
          },
          {
            text: "Tính ∫_0^2 (2x + 1) dx:",
            options: JSON.stringify(["4", "5", "6", "3"]),
            answer: "2",
          },
          {
            text: "∫ cosx dx =",
            options: JSON.stringify(["sinx + C", "−sinx + C", "sinx", "−sinx"]),
            answer: "0",
          },
          {
            text: "Diện tích hình phẳng giới hạn bởi y = x² và y = x (0 ≤ x ≤ 1) là:",
            options: JSON.stringify(["1/6", "1/3", "1/2", "1/4"]),
            answer: "0",
          },
          {
            text: "Thể tích vật thể tròn xoay khi quay y = x (0 ≤ x ≤ 2) quanh Ox là:",
            options: JSON.stringify(["4π/3", "8π/3", "4π", "8π"]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chương 4: Hàm số mũ – Logarithm – Ứng dụng",
      order: 4,
      lessons: [
        {
          title: "Hàm số mũ và Hàm số logarithm",
          order: 7,
          content: `## Hàm số mũ và Logarithm

### 1. Hàm số mũ y = aˣ (a > 0, a ≠ 1)
- a > 1: hàm đồng biến trên ℝ
- 0 < a < 1: hàm nghịch biến trên ℝ
- TXĐ: ℝ; TGT: (0; +∞)

### 2. Hàm số logarithm y = log_a(x)
- TXĐ: (0; +∞); TGT: ℝ
- a > 1: đồng biến; 0 < a < 1: nghịch biến
- log_a(aˣ) = x và a^(log_a x) = x

### 3. Công thức logarithm
- log_a(MN) = log_a M + log_a N
- log_a(M/N) = log_a M − log_a N
- log_a(Mⁿ) = n·log_a M
- Đổi cơ số: log_a b = log_c b / log_c a

### 4. Logarithm thường dùng
- **lg x = log₁₀ x** (logarithm thập phân)
- **ln x = log_e x** (e ≈ 2,718 – logarithm tự nhiên)`,
        },
        {
          title: "Phương trình và Bất phương trình mũ – logarithm",
          order: 8,
          content: `## Phương trình Mũ – Logarithm

### 1. Phương trình mũ
**Dạng cơ bản**: aᶠ⁽ˣ⁾ = aᵍ⁽ˣ⁾ → f(x) = g(x)
**Đặt ẩn phụ**: aˣ = t (t > 0) rồi giải phương trình ẩn t

### 2. Phương trình logarithm
**Dạng cơ bản**: log_a f(x) = log_a g(x) → f(x) = g(x) (kèm điều kiện f(x) > 0)

**Đặt ẩn phụ**: log_a x = t

### 3. Bất phương trình mũ
- a > 1: aˣ > aʸ ⟺ x > y (bảo chiều)
- 0 < a < 1: aˣ > aʸ ⟺ x < y (đổi chiều)

### 4. Bất phương trình logarithm
- a > 1: log_a f(x) > log_a g(x) ⟺ f(x) > g(x) (kèm điều kiện)
- 0 < a < 1: đổi chiều bất đẳng thức

### 5. Ví dụ
> Giải 4ˣ − 5·2ˣ + 4 = 0
> Đặt t = 2ˣ (t > 0): t² − 5t + 4 = 0
> t = 1 → 2ˣ = 1 → x = 0; t = 4 → 2ˣ = 4 → x = 2`,
        },
        {
          title: "Ứng dụng hàm mũ – logarithm trong thực tế",
          order: 9,
          content: `## Ứng dụng thực tế

### 1. Tăng trưởng liên tục
> A(t) = A₀ · eʳᵗ (r: tốc độ tăng trưởng)

Ví dụ: Dân số 1 triệu, tăng 2%/năm sau 10 năm:
A = 1.000.000 × e^(0,02×10) ≈ 1.221.403

### 2. Phân rã phóng xạ
> A(t) = A₀ · e^(−λt), T₁/₂ = ln2/λ

### 3. Tính pH (độ axit)
> pH = −log[H⁺]

pH = 7: trung tính; pH < 7: axit; pH > 7: bazơ

### 4. Thang đo Richter (độ mạnh động đất)
> M = log(I/I₀)

Tăng 1 đơn vị Richter = cường độ tăng 10 lần

### 5. Lãi kép
> A = P(1 + r/n)^(nt)
> A = P·eʳᵗ (lãi liên tục)

Ví dụ: Gửi 100 triệu, lãi 6%/năm, sau 5 năm:
A = 100 × e^(0,06×5) ≈ 134,99 triệu`,
        },
      ],
      quiz: {
        title: "Quiz 4 – Mũ và Logarithm",
        questions: [
          {
            text: "log₂8 bằng:",
            options: JSON.stringify(["2", "3", "4", "8"]),
            answer: "1",
          },
          {
            text: "Hàm y = (1/2)ˣ là hàm:",
            options: JSON.stringify(["Đồng biến", "Nghịch biến", "Hàm chẵn", "Hàm lẻ"]),
            answer: "1",
          },
          {
            text: "log₂(16) − log₂(4) bằng:",
            options: JSON.stringify(["4", "3", "2", "1"]),
            answer: "2",
          },
          {
            text: "Giải 2ˣ = 8:",
            options: JSON.stringify(["x = 2", "x = 3", "x = 4", "x = 8"]),
            answer: "1",
          },
          {
            text: "Công thức lãi kép liên tục là:",
            options: JSON.stringify(["A = P(1+r)ᵗ", "A = Peʳᵗ", "A = P·r·t", "A = P/(1+r)ᵗ"]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chương 5: Nguyên hàm – Tích phân và Ứng dụng",
      order: 5,
      lessons: [
        {
          title: "Nguyên hàm",
          order: 10,
          content: `## Nguyên hàm

### 1. Định nghĩa
F(x) là nguyên hàm của f(x) trên (a,b) nếu F'(x) = f(x) ∀x ∈ (a,b)
Ký hiệu: ∫f(x)dx = F(x) + C

### 2. Bảng nguyên hàm cơ bản
| f(x) | ∫f(x)dx |
|------|---------|
| xⁿ (n≠−1) | xⁿ⁺¹/(n+1) + C |
| 1/x | ln|x| + C |
| eˣ | eˣ + C |
| aˣ | aˣ/ln a + C |
| sin x | −cos x + C |
| cos x | sin x + C |
| 1/cos²x | tan x + C |

### 3. Tính chất
- ∫[f(x) ± g(x)]dx = ∫f(x)dx ± ∫g(x)dx
- ∫k·f(x)dx = k·∫f(x)dx

### 4. Phương pháp tính
- **Đổi biến số**: u = g(x)
- **Tích phân từng phần**: ∫u dv = uv − ∫v du`,
        },
        {
          title: "Tích phân xác định",
          order: 11,
          content: `## Tích phân xác định

### 1. Định nghĩa – Công thức Newton-Leibniz
> ∫ₐᵇ f(x)dx = F(b) − F(a) = [F(x)]ₐᵇ

### 2. Tính chất
- ∫ₐᵃ f(x)dx = 0
- ∫ₐᵇ f(x)dx = −∫ᵦₐ f(x)dx
- ∫ₐᵇ f(x)dx + ∫ᵦᶜ f(x)dx = ∫ₐᶜ f(x)dx

### 3. Ví dụ tính
> ∫₀² (3x² + 2x)dx = [x³ + x²]₀² = (8 + 4) − (0) = **12**

> ∫₀^(π/2) cos x dx = [sin x]₀^(π/2) = 1 − 0 = **1**

### 4. Đổi biến trong tích phân xác định
Khi đổi x = φ(t), phải đổi cả cận a,b thành α,β

### 5. Tích phân từng phần
> ∫ₐᵇ u·v' dx = [u·v]ₐᵇ − ∫ₐᵇ u'·v dx`,
        },
        {
          title: "Ứng dụng tích phân – Diện tích và Thể tích",
          order: 12,
          content: `## Ứng dụng tích phân

### 1. Diện tích hình phẳng
**Diện tích miền giới hạn bởi y = f(x), trục Ox, x=a, x=b:**
> S = ∫ₐᵇ |f(x)| dx

**Diện tích giữa hai đường cong y = f(x) và y = g(x):**
> S = ∫ₐᵇ |f(x) − g(x)| dx

### 2. Thể tích vật thể tròn xoay
Quay miền [a,b] quanh trục Ox:
> V = π ∫ₐᵇ [f(x)]² dx

### 3. Ví dụ
> S giữa y = x² và y = x trên [0,1]:
> Tìm giao: x² = x → x = 0; x = 1
> S = ∫₀¹ (x − x²)dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = **1/6**

### 4. Ứng dụng thực tế
- Tính quãng đường: s = ∫v(t)dt
- Tính công: W = ∫F(x)dx
- Giá trị trung bình: f̄ = (1/(b−a)) ∫ₐᵇ f(x)dx`,
        },
      ],
      quiz: {
        title: "Quiz 5 – Nguyên hàm và Tích phân",
        questions: [
          {
            text: "∫x²dx bằng:",
            options: JSON.stringify(["2x + C", "x³ + C", "x³/3 + C", "3x³ + C"]),
            answer: "2",
          },
          {
            text: "∫₀¹ 2x dx bằng:",
            options: JSON.stringify(["0", "1", "2", "4"]),
            answer: "1",
          },
          {
            text: "∫cos x dx bằng:",
            options: JSON.stringify(["−sin x + C", "sin x + C", "tan x + C", "−cos x + C"]),
            answer: "1",
          },
          {
            text: "Thể tích vật thể tròn xoay quanh Ox trên [a,b] là:",
            options: JSON.stringify(["∫[f(x)]dx", "π∫[f(x)]²dx", "2π∫f(x)dx", "∫|f(x)|dx"]),
            answer: "1",
          },
          {
            text: "∫₀² (x+1)dx bằng:",
            options: JSON.stringify(["2", "3", "4", "5"]),
            answer: "2",
          },
        ],
      },
    },
  ],
};



