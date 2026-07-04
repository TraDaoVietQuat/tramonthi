import { CourseData } from "./types";

export const MATH_11_COURSE: CourseData = {
  title: "Toán học 11",
  slug: "toan-11",
  subject: "math",
  grade: "11",
  description: "Lượng giác, dãy số, mẫu số liệu ghép nhóm, quan hệ song song & vuông góc trong không gian, giới hạn, hàm số mũ-lôgarit, xác suất và đạo hàm – chương trình Toán 11 (Tập 1 + Tập 2) theo SGK Kết nối tri thức 2023.",
  published: true,
  modules: [
    {
      title: "Chương I. Hàm số lượng giác và phương trình lượng giác",
      order: 1,
      volume: 1,
      lessons: [
        {
          title: "Bài 1. Giá trị lượng giác của góc lượng giác",
          order: 1,
          content: `## 1. Góc lượng giác

### Khái niệm
Trong mặt phẳng, cho tia Ox cố định. Khi tia Om quay quanh O từ Ox đến tia Ou theo một chiều nhất định (có thể quay nhiều vòng), ta được **góc lượng giác** (Ox, Ou), kí hiệu sđ(Ox, Ou).

- Chiều **dương**: ngược chiều kim đồng hồ
- Chiều **âm**: cùng chiều kim đồng hồ
- Nếu góc hình học uOx = α thì số đo góc lượng giác (Ox, Ou) = α + k2π (k ∈ ℤ), hoặc α° + k360° nếu đo bằng độ

### Đơn vị rad
> 1 rad là góc ở tâm chắn cung có độ dài bằng bán kính. Công thức đổi: **α rad = (180α/π)°**, ngược lại **a° = (aπ/180) rad**

| Độ | 0° | 30° | 45° | 60° | 90° | 180° | 360° |
|----|----|-----|-----|-----|-----|------|------|
| Rad | 0 | π/6 | π/4 | π/3 | π/2 | π | 2π |

### Đường tròn lượng giác
Đường tròn lượng giác là đường tròn tâm O bán kính 1, có gốc A(1;0), chiều dương ngược chiều kim đồng hồ. Với mỗi số thực α, tồn tại duy nhất điểm M trên đường tròn sao cho sđ(OA, OM) = α.

## 2. Giá trị lượng giác của góc lượng giác

Cho điểm M(x; y) trên đường tròn lượng giác ứng với góc α:
- **sin α = y** (tung độ của M)
- **cos α = x** (hoành độ của M)
- **tan α = sinα/cosα = y/x** (cosα ≠ 0)
- **cot α = cosα/sinα = x/y** (sinα ≠ 0)

### Hệ thức cơ bản
- sin²α + cos²α = 1
- 1 + tan²α = 1/cos²α (cosα ≠ 0)
- 1 + cot²α = 1/sin²α (sinα ≠ 0)
- tanα . cotα = 1

### Dấu của giá trị lượng giác theo góc phần tư
| Góc phần tư | I | II | III | IV |
|---|---|---|---|---|
| sin α | + | + | − | − |
| cos α | + | − | − | + |
| tan α | + | − | + | − |
| cot α | + | − | + | − |

### Bảng giá trị lượng giác các góc đặc biệt
| Góc | 0 | π/6 | π/4 | π/3 | π/2 | π |
|-----|---|-----|-----|-----|-----|---|
| sin | 0 | 1/2 | √2/2 | √3/2 | 1 | 0 |
| cos | 1 | √3/2 | √2/2 | 1/2 | 0 | −1 |
| tan | 0 | √3/3 | 1 | √3 | — | 0 |
| cot | — | √3 | 1 | √3/3 | 0 | — |

## 3. Giá trị lượng giác của các góc có liên quan đặc biệt

- **Hai góc đối nhau** (α và −α): cos(−α) = cosα; sin(−α) = −sinα; tan(−α) = −tanα
- **Hai góc bù nhau** (α và π−α): sin(π−α) = sinα; cos(π−α) = −cosα
- **Hai góc phụ nhau** (α và π/2−α): sin(π/2−α) = cosα; cos(π/2−α) = sinα
- **Hai góc hơn kém π** (α và π+α): sin(π+α) = −sinα; cos(π+α) = −cosα
- **Hai góc hơn kém π/2** (α và π/2+α): sin(π/2+α) = cosα; cos(π/2+α) = −sinα

**Ví dụ:** Tính cos(120°). Ta có 120° = 180° − 60° nên cos120° = −cos60° = −1/2.`,
        },
        {
          title: "Bài 2. Công thức lượng giác",
          order: 2,
          content: `## 1. Công thức cộng

- cos(a − b) = cos a.cos b + sin a.sin b
- cos(a + b) = cos a.cos b − sin a.sin b
- sin(a − b) = sin a.cos b − cos a.sin b
- sin(a + b) = sin a.cos b + cos a.sin b
- tan(a + b) = (tan a + tan b)/(1 − tan a.tan b)
- tan(a − b) = (tan a − tan b)/(1 + tan a.tan b)

**Ví dụ:** cos15° = cos(45° − 30°) = cos45°cos30° + sin45°sin30° = (√6 + √2)/4

## 2. Công thức nhân đôi

- **sin 2a = 2 sin a.cos a**
- **cos 2a = cos²a − sin²a = 2cos²a − 1 = 1 − 2sin²a**
- **tan 2a = 2tan a/(1 − tan²a)**

**Hệ quả (công thức hạ bậc):**
- sin²a = (1 − cos2a)/2
- cos²a = (1 + cos2a)/2

**Ví dụ:** Cho sina = 3/5 (0 < a < π/2). Tính sin2a: cosa = 4/5 → sin2a = 2.(3/5).(4/5) = 24/25

## 3. Công thức biến đổi tích thành tổng

- cos a.cos b = ½[cos(a−b) + cos(a+b)]
- sin a.sin b = ½[cos(a−b) − cos(a+b)]
- sin a.cos b = ½[sin(a−b) + sin(a+b)]

## 4. Công thức biến đổi tổng thành tích

- cos a + cos b = 2cos((a+b)/2).cos((a−b)/2)
- cos a − cos b = −2sin((a+b)/2).sin((a−b)/2)
- sin a + sin b = 2sin((a+b)/2).cos((a−b)/2)
- sin a − sin b = 2cos((a+b)/2).sin((a−b)/2)

**Ví dụ:** sin75° + sin15° = 2sin45°.cos30° = 2.(√2/2).(√3/2) = √6/2`,
        },
        {
          title: "Bài 3. Hàm số lượng giác",
          order: 3,
          content: `## 1. Định nghĩa các hàm số lượng giác

Với mỗi số thực x, xác định một góc lượng giác có số đo x rad, từ đó có sinx, cosx, tanx, cotx. Các quy tắc x ↦ sinx, x ↦ cosx, x ↦ tanx, x ↦ cotx là các **hàm số lượng giác**.

## 2. Tính chất và đồ thị

| Hàm số | Tập xác định | Tập giá trị | Chu kỳ | Tính chẵn/lẻ | Đồng biến |
|--------|-------------|------------|--------|---------------|-----------|
| y = sinx | ℝ | [−1; 1] | 2π | Lẻ | trên (−π/2 + k2π; π/2 + k2π) |
| y = cosx | ℝ | [−1; 1] | 2π | Chẵn | trên (−π + k2π; k2π) |
| y = tanx | x ≠ π/2 + kπ | ℝ | π | Lẻ | trên (−π/2 + kπ; π/2 + kπ) |
| y = cotx | x ≠ kπ | ℝ | π | Lẻ | nghịch biến trên (kπ; π + kπ) |

### Đồ thị hàm số y = sinx
Đường hình sin, đối xứng qua gốc tọa độ O, lặp lại sau mỗi chu kỳ 2π, cắt trục hoành tại x = kπ, đạt GTLN = 1 tại x = π/2 + k2π, đạt GTNN = −1 tại x = −π/2 + k2π.

### Đồ thị hàm số y = cosx
Có được bằng cách tịnh tiến đồ thị y = sinx sang trái π/2 đơn vị theo trục Ox. Đối xứng qua trục Oy.

### Đồ thị hàm số y = tanx, y = cotx
Có các đường tiệm cận đứng tại các điểm hàm số không xác định; mỗi nhánh đồng biến (tanx) hoặc nghịch biến (cotx) trên từng khoảng xác định.

**Ví dụ:** Tìm tập xác định của hàm số y = tan(2x). Cần 2x ≠ π/2 + kπ ⟺ x ≠ π/4 + kπ/2 (k ∈ ℤ)`,
        },
        {
          title: "Bài 4. Phương trình lượng giác cơ bản",
          order: 4,
          content: `## 1. Phương trình sinx = m

- Nếu |m| > 1: phương trình **vô nghiệm**
- Nếu |m| ≤ 1: gọi α là một góc sao cho sinα = m
> **sinx = m ⟺ x = α + k2π hoặc x = π − α + k2π** (k ∈ ℤ)

**Trường hợp đặc biệt:**
- sinx = 0 ⟺ x = kπ
- sinx = 1 ⟺ x = π/2 + k2π
- sinx = −1 ⟺ x = −π/2 + k2π

## 2. Phương trình cosx = m

- Nếu |m| > 1: **vô nghiệm**
- Nếu |m| ≤ 1: gọi α sao cho cosα = m
> **cosx = m ⟺ x = ±α + k2π** (k ∈ ℤ)

**Trường hợp đặc biệt:**
- cosx = 0 ⟺ x = π/2 + kπ
- cosx = 1 ⟺ x = k2π
- cosx = −1 ⟺ x = π + k2π

## 3. Phương trình tanx = m

Điều kiện: x ≠ π/2 + kπ. Gọi α sao cho tanα = m
> **tanx = m ⟺ x = α + kπ** (k ∈ ℤ)

## 4. Phương trình cotx = m

Điều kiện: x ≠ kπ. Gọi α sao cho cotα = m
> **cotx = m ⟺ x = α + kπ** (k ∈ ℤ)

**Ví dụ:** Giải 2sinx − 1 = 0 ⟺ sinx = 1/2 = sin(π/6)
⟺ x = π/6 + k2π hoặc x = 5π/6 + k2π (k ∈ ℤ)

**Ví dụ:** Giải phương trình bậc hai 2sin²x − sinx − 1 = 0
Đặt t = sinx (−1 ≤ t ≤ 1): 2t² − t − 1 = 0 ⟺ t = −1/2 hoặc t = 1
- sinx = −1/2 ⟺ x = −π/6 + k2π hoặc x = 7π/6 + k2π
- sinx = 1 ⟺ x = π/2 + k2π`,
        },
      ],
      quiz: {
        title: "Bài tập cuối chương I",
        questions: [
          {
            text: "Đổi 135° sang radian:",
            options: JSON.stringify(["3π/4", "π/4", "2π/3", "5π/6"]),
            answer: "0",
          },
          {
            text: "Giá trị của cos(π − α) bằng:",
            options: JSON.stringify(["cosα", "−cosα", "sinα", "−sinα"]),
            answer: "1",
          },
          {
            text: "Công thức nào đúng với sin2a?",
            options: JSON.stringify(["sin2a = 2sina", "sin2a = 2sina.cosa", "sin2a = cos²a − sin²a", "sin2a = 2cosa"]),
            answer: "1",
          },
          {
            text: "Hàm số y = cosx là hàm số:",
            options: JSON.stringify(["lẻ", "chẵn", "vừa chẵn vừa lẻ", "không chẵn, không lẻ"]),
            answer: "1",
          },
          {
            text: "Phương trình sinx = √3/2 có nghiệm là:",
            options: JSON.stringify([
              "x = π/3 + k2π",
              "x = π/3 + k2π hoặc x = 2π/3 + k2π",
              "x = π/6 + k2π",
              "x = π/6 + k2π hoặc x = 5π/6 + k2π",
            ]),
            answer: "1",
          },
          {
            text: "sin30° bằng:",
            options: JSON.stringify(["1/2", "√2/2", "√3/2", "1"]),
            answer: "0",
          },
          {
            text: "cos60° bằng:",
            options: JSON.stringify(["1/2", "√3/2", "√2/2", "0"]),
            answer: "0",
          },
          {
            text: "tan45° bằng:",
            options: JSON.stringify(["0", "1", "√3", "√3/3"]),
            answer: "1",
          },
          {
            text: "π/3 rad đổi sang độ bằng:",
            options: JSON.stringify(["30°", "45°", "60°", "90°"]),
            answer: "2",
          },
          {
            text: "Hệ thức nào sau đây đúng với mọi α:",
            options: JSON.stringify(["sin²α − cos²α = 1", "sin²α + cos²α = 1", "sinα + cosα = 1", "sinα.cosα = 1"]),
            answer: "1",
          },
          {
            text: "cos(−α) bằng:",
            options: JSON.stringify(["cosα", "−cosα", "sinα", "−sinα"]),
            answer: "0",
          },
          {
            text: "sin(π/2 − α) bằng:",
            options: JSON.stringify(["sinα", "−sinα", "cosα", "−cosα"]),
            answer: "2",
          },
          {
            text: "Công thức cộng nào sau đây đúng:",
            options: JSON.stringify([
              "cos(a+b) = cosa.cosb + sina.sinb",
              "cos(a+b) = cosa.cosb − sina.sinb",
              "cos(a+b) = sina.cosb + cosa.sinb",
              "cos(a+b) = sina.sinb − cosa.cosb",
            ]),
            answer: "1",
          },
          {
            text: "cos2a bằng:",
            options: JSON.stringify(["2sina.cosa", "cos²a − sin²a", "1 + sin²a", "2sina"]),
            answer: "1",
          },
          {
            text: "Công thức hạ bậc sin²a bằng:",
            options: JSON.stringify(["(1+cos2a)/2", "(1−cos2a)/2", "1−cos2a", "(1−sin2a)/2"]),
            answer: "1",
          },
          {
            text: "Tập giá trị của hàm số y = sinx là:",
            options: JSON.stringify(["ℝ", "[0;1]", "[−1;1]", "(−1;1)"]),
            answer: "2",
          },
          {
            text: "Hàm số y = tanx có tập xác định là:",
            options: JSON.stringify(["ℝ", "x ≠ kπ", "x ≠ π/2 + kπ", "x ≠ π/2 + k2π"]),
            answer: "2",
          },
          {
            text: "Chu kỳ của hàm số y = tanx là:",
            options: JSON.stringify(["π", "2π", "π/2", "4π"]),
            answer: "0",
          },
          {
            text: "Nghiệm của phương trình cosx = 0 là:",
            options: JSON.stringify(["x = kπ", "x = π/2 + kπ", "x = π + k2π", "x = π/2 + k2π"]),
            answer: "1",
          },
          {
            text: "Nghiệm của phương trình tanx = √3 là:",
            options: JSON.stringify(["x = π/3 + kπ", "x = π/6 + kπ", "x = π/3 + k2π", "x = π/4 + kπ"]),
            answer: "0",
          },
        ],
      },
    },
    {
      title: "Chương II. Dãy số. Cấp số cộng và cấp số nhân",
      order: 2,
      volume: 1,
      lessons: [
        {
          title: "Bài 5. Dãy số",
          order: 5,
          content: `## 1. Định nghĩa dãy số

Một hàm số u xác định trên tập các số nguyên dương ℕ* được gọi là một **dãy số vô hạn** (gọi tắt là dãy số), kí hiệu (uₙ). Ta gọi u₁ là số hạng đầu, uₙ là số hạng thứ n (số hạng tổng quát).

Một dãy số hữu hạn là hàm số xác định trên tập {1, 2, ..., m}.

## 2. Cách cho một dãy số

- **Cho bằng công thức số hạng tổng quát:** uₙ = 2n + 1 → dãy 3, 5, 7, 9, ...
- **Cho bằng phương pháp mô tả**
- **Cho bằng hệ thức truy hồi:** cho u₁ (hoặc vài số hạng đầu) và biểu thức tính uₙ₊₁ theo uₙ

**Ví dụ:** u₁ = 1, uₙ₊₁ = uₙ + 3 (n ≥ 1) → dãy 1, 4, 7, 10, ...

## 3. Dãy số tăng, dãy số giảm

- Dãy (uₙ) là **dãy tăng** nếu uₙ₊₁ > uₙ với mọi n
- Dãy (uₙ) là **dãy giảm** nếu uₙ₊₁ < uₙ với mọi n

**Cách xét:** Xét hiệu uₙ₊₁ − uₙ hoặc tỉ số uₙ₊₁/uₙ (nếu uₙ > 0 với mọi n)

**Ví dụ:** uₙ = 1/n. Ta có uₙ₊₁ − uₙ = 1/(n+1) − 1/n = −1/[n(n+1)] < 0 → dãy giảm

## 4. Dãy số bị chặn

- Dãy (uₙ) **bị chặn trên** nếu tồn tại M: uₙ ≤ M với mọi n
- Dãy (uₙ) **bị chặn dưới** nếu tồn tại m: uₙ ≥ m với mọi n
- Dãy (uₙ) **bị chặn** nếu vừa bị chặn trên vừa bị chặn dưới

**Ví dụ:** uₙ = n/(n+1) có 0 < uₙ < 1 với mọi n → dãy bị chặn`,
        },
        {
          title: "Bài 6. Cấp số cộng",
          order: 6,
          content: `## 1. Định nghĩa

Dãy số (uₙ) là **cấp số cộng (CSC)** nếu tồn tại số d (gọi là **công sai**) sao cho:
> **uₙ₊₁ = uₙ + d** với mọi n ≥ 1

## 2. Số hạng tổng quát

> **uₙ = u₁ + (n − 1)d**

**Ví dụ:** CSC có u₁ = 2, d = 3: u₁₀ = 2 + 9×3 = 29

## 3. Tính chất ba số hạng liên tiếp

Nếu uₖ₋₁, uₖ, uₖ₊₁ là ba số hạng liên tiếp của một CSC thì:
> **uₖ = (uₖ₋₁ + uₖ₊₁)/2**

## 4. Tổng n số hạng đầu

> **Sₙ = u₁ + u₂ + ... + uₙ = n(u₁ + uₙ)/2 = n[2u₁ + (n−1)d]/2**

**Ví dụ:** CSC 2, 5, 8, 11, ... có u₁ = 2, d = 3
- u₁₀ = 2 + 9×3 = 29
- S₁₀ = 10(2 + 29)/2 = 155

**Ví dụ ứng dụng:** Một rạp hát có 20 hàng ghế, hàng đầu có 20 ghế, mỗi hàng sau nhiều hơn hàng trước 3 ghế. Số ghế hàng 20: u₂₀ = 20 + 19×3 = 77 ghế. Tổng số ghế: S₂₀ = 20(20+77)/2 = 970 ghế`,
        },
        {
          title: "Bài 7. Cấp số nhân",
          order: 7,
          content: `## 1. Định nghĩa

Dãy số (uₙ) là **cấp số nhân (CSN)** nếu tồn tại số q ≠ 0 (gọi là **công bội**) sao cho:
> **uₙ₊₁ = uₙ.q** với mọi n ≥ 1

## 2. Số hạng tổng quát

> **uₙ = u₁.qⁿ⁻¹** (n ≥ 2)

**Ví dụ:** CSN 2, 6, 18, 54, ... có u₁ = 2, q = 3 → u₅ = 2.3⁴ = 162

## 3. Tính chất ba số hạng liên tiếp

Nếu uₖ₋₁, uₖ, uₖ₊₁ là ba số hạng liên tiếp của một CSN thì:
> **uₖ² = uₖ₋₁.uₖ₊₁**

## 4. Tổng n số hạng đầu

> **Sₙ = u₁(qⁿ − 1)/(q − 1)** khi q ≠ 1

> **Sₙ = n.u₁** khi q = 1

**Ví dụ:** CSN 2, 6, 18, 54, ... có u₁ = 2, q = 3
- S₄ = 2(3⁴ − 1)/(3 − 1) = 2×80/2 = 80

**Ví dụ ứng dụng (lãi kép):** Gửi 100 triệu, lãi suất 6%/năm. Sau n năm số tiền là Tₙ = 100.(1,06)ⁿ triệu đồng — đây là một CSN với u₁ = 106, q = 1,06`,
        },
      ],
      quiz: {
        title: "Bài tập cuối chương II",
        questions: [
          {
            text: "Dãy số uₙ = 1/n là dãy số:",
            options: JSON.stringify(["Tăng", "Giảm", "Không tăng không giảm", "Bị chặn dưới bởi 1"]),
            answer: "1",
          },
          {
            text: "Dãy số 3, 7, 11, 15, ... là CSC với công sai d bằng:",
            options: JSON.stringify(["3", "4", "7", "11"]),
            answer: "1",
          },
          {
            text: "Tổng 10 số hạng đầu của CSC 1, 3, 5, 7, ... bằng:",
            options: JSON.stringify(["81", "90", "100", "110"]),
            answer: "2",
          },
          {
            text: "CSN có u₁ = 2, q = 3. Số hạng u₅ bằng:",
            options: JSON.stringify(["54", "162", "81", "486"]),
            answer: "1",
          },
          {
            text: "CSN có u₁ = 8, u₃ = 2. Công bội q bằng (biết q > 0):",
            options: JSON.stringify(["1/4", "1/2", "2", "4"]),
            answer: "1",
          },
          {
            text: "Dãy số uₙ = 2n + 1. Số hạng u₅ bằng:",
            options: JSON.stringify(["9", "11", "13", "7"]),
            answer: "1",
          },
          {
            text: "Dãy số uₙ = n² là dãy số:",
            options: JSON.stringify(["Tăng", "Giảm", "Không đổi", "Bị chặn trên"]),
            answer: "0",
          },
          {
            text: "Dãy số (uₙ) được gọi là bị chặn trên nếu:",
            options: JSON.stringify([
              "Tồn tại M: uₙ ≤ M với mọi n",
              "Tồn tại m: uₙ ≥ m với mọi n",
              "uₙ₊₁ > uₙ với mọi n",
              "uₙ₊₁ < uₙ với mọi n",
            ]),
            answer: "0",
          },
          {
            text: "Cho u₁ = 1, uₙ₊₁ = uₙ + 3. Số hạng u₄ bằng:",
            options: JSON.stringify(["7", "10", "13", "4"]),
            answer: "1",
          },
          {
            text: "Cấp số cộng 5, 9, 13, 17, ... có công sai d bằng:",
            options: JSON.stringify(["2", "4", "5", "9"]),
            answer: "1",
          },
          {
            text: "Cấp số cộng có u₁ = 3, d = 5. Số hạng u₁₀ bằng:",
            options: JSON.stringify(["38", "43", "48", "53"]),
            answer: "2",
          },
          {
            text: "Nếu uₖ₋₁, uₖ, uₖ₊₁ là ba số hạng liên tiếp của một CSC thì:",
            options: JSON.stringify(["uₖ = uₖ₋₁ + uₖ₊₁", "uₖ = (uₖ₋₁+uₖ₊₁)/2", "uₖ² = uₖ₋₁.uₖ₊₁", "uₖ = uₖ₋₁.uₖ₊₁"]),
            answer: "1",
          },
          {
            text: "Cấp số nhân 3, 6, 12, 24, ... có công bội q bằng:",
            options: JSON.stringify(["2", "3", "4", "6"]),
            answer: "0",
          },
          {
            text: "Cấp số nhân có u₁ = 5, q = 2. Số hạng u₄ bằng:",
            options: JSON.stringify(["20", "30", "40", "80"]),
            answer: "2",
          },
          {
            text: "Nếu uₖ₋₁, uₖ, uₖ₊₁ là ba số hạng liên tiếp của một CSN thì:",
            options: JSON.stringify(["uₖ = (uₖ₋₁+uₖ₊₁)/2", "uₖ² = uₖ₋₁.uₖ₊₁", "uₖ = uₖ₋₁.uₖ₊₁", "uₖ² = uₖ₋₁+uₖ₊₁"]),
            answer: "1",
          },
          {
            text: "Tổng n số hạng đầu của CSN khi q = 1 bằng:",
            options: JSON.stringify(["n.u₁", "u₁/(1−n)", "n(n−1)u₁/2", "u₁.nⁿ"]),
            answer: "0",
          },
          {
            text: "Cấp số nhân lùi vô hạn cần điều kiện của công bội q là:",
            options: JSON.stringify(["q > 1", "|q| < 1", "q ≠ 0", "q < 0"]),
            answer: "1",
          },
          {
            text: "Tổng của cấp số nhân lùi vô hạn 1 + 1/2 + 1/4 + ... bằng:",
            options: JSON.stringify(["1", "1,5", "2", "4"]),
            answer: "2",
          },
          {
            text: "Cấp số cộng có u₁ = 10, d = −2. Tổng 5 số hạng đầu S₅ bằng:",
            options: JSON.stringify(["20", "25", "30", "35"]),
            answer: "2",
          },
          {
            text: "Một rạp hát có hàng ghế đầu 15 ghế, mỗi hàng sau nhiều hơn hàng trước 2 ghế. Hàng thứ 10 có số ghế là:",
            options: JSON.stringify(["27", "30", "33", "35"]),
            answer: "2",
          },
        ],
      },
    },
    {
      title: "Chương III. Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
      order: 3,
      volume: 1,
      lessons: [
        {
          title: "Bài 8. Mẫu số liệu ghép nhóm",
          order: 8,
          content: `## 1. Mẫu số liệu ghép nhóm

Khi số liệu thu được quá lớn hoặc phân tán, người ta chia thành các **nhóm** (khoảng) [aᵢ; aᵢ₊₁) rồi lập bảng tần số ghép nhóm.

**Ví dụ bảng tần số ghép nhóm** (điểm thi của 40 học sinh):

| Nhóm | [0;2) | [2;4) | [4;6) | [6;8) | [8;10] |
|------|-------|-------|-------|-------|--------|
| Tần số | 2 | 6 | 14 | 12 | 6 |

- **Giá trị đại diện** của nhóm [aᵢ; aᵢ₊₁) là trung điểm (aᵢ + aᵢ₊₁)/2
- Cỡ mẫu n = tổng các tần số

## 2. Tần số tích lũy

**Tần số tích lũy** của nhóm là tổng tần số của nhóm đó và các nhóm đứng trước nó.

| Nhóm | [0;2) | [2;4) | [4;6) | [6;8) | [8;10] |
|------|-------|-------|-------|-------|--------|
| Tần số | 2 | 6 | 14 | 12 | 6 |
| Tần số tích lũy | 2 | 8 | 22 | 34 | 40 |

Bảng tần số tích lũy giúp xác định nhanh nhóm chứa trung vị, tứ phân vị.`,
        },
        {
          title: "Bài 9. Các số đặc trưng đo xu thế trung tâm",
          order: 9,
          content: `## 1. Số trung bình cộng

Với mẫu số liệu ghép nhóm có k nhóm, tần số mᵢ, giá trị đại diện cᵢ, cỡ mẫu n = m₁+...+mₖ:
> **x̄ = (m₁c₁ + m₂c₂ + ... + mₖcₖ)/n**

**Ví dụ:** Với bảng ở Bài 8, giá trị đại diện lần lượt là 1, 3, 5, 7, 9:
x̄ = (2×1 + 6×3 + 14×5 + 12×7 + 6×9)/40 = (2+18+70+84+54)/40 = 228/40 = 5,7

## 2. Trung vị (Median)

Gọi n là cỡ mẫu. Nhóm chứa trung vị là nhóm [aₘ; aₘ₊₁) đầu tiên có tần số tích lũy ≥ n/2.
> **Mₑ = aₘ + [(n/2 − C)/mₘ] × (aₘ₊₁ − aₘ)**

trong đó C là tần số tích lũy của nhóm ngay trước nhóm chứa trung vị, mₘ là tần số nhóm chứa trung vị.

## 3. Tứ phân vị

- **Q₂** = trung vị
- **Q₁**: nhóm chứa Q₁ là nhóm đầu tiên có tần số tích lũy ≥ n/4, công thức tương tự trung vị với n/4 thay cho n/2
- **Q₃**: nhóm chứa Q₃ là nhóm đầu tiên có tần số tích lũy ≥ 3n/4

## 4. Mốt (Mode)

Nhóm chứa mốt là nhóm có tần số lớn nhất. Với nhóm [aₘ; aₘ₊₁) chứa mốt, tần số mₘ, tần số nhóm liền trước mₘ₋₁, liền sau mₘ₊₁:
> **Mₒ = aₘ + [(mₘ − mₘ₋₁)/((mₘ − mₘ₋₁) + (mₘ − mₘ₊₁))] × (aₘ₊₁ − aₘ)**

**Ví dụ:** Với bảng ở Bài 8, nhóm [4;6) có tần số 14 lớn nhất → nhóm chứa mốt.
Mₒ = 4 + [(14−6)/((14−6)+(14−12))] × 2 = 4 + (8/10)×2 = 5,6

Các số đặc trưng này giúp mô tả xu thế trung tâm khi không có số liệu gốc chi tiết, thường dùng khi phân tích dữ liệu thống kê thực tế (khảo sát, đo lường).`,
        },
      ],
      quiz: {
        title: "Bài tập cuối chương III",
        questions: [
          {
            text: "Trong mẫu số liệu ghép nhóm, giá trị đại diện của nhóm [aᵢ; aᵢ₊₁) là:",
            options: JSON.stringify(["aᵢ", "aᵢ₊₁", "(aᵢ + aᵢ₊₁)/2", "aᵢ₊₁ − aᵢ"]),
            answer: "2",
          },
          {
            text: "Tần số tích lũy của một nhóm là:",
            options: JSON.stringify([
              "Tần số của riêng nhóm đó",
              "Tổng tần số của nhóm đó và các nhóm đứng trước",
              "Tổng tần số của tất cả các nhóm",
              "Tỉ lệ phần trăm của nhóm đó",
            ]),
            answer: "1",
          },
          {
            text: "Nhóm chứa mốt là nhóm có:",
            options: JSON.stringify(["Tần số nhỏ nhất", "Tần số lớn nhất", "Giá trị đại diện lớn nhất", "Tần số tích lũy lớn nhất"]),
            answer: "1",
          },
          {
            text: "Với mẫu có cỡ mẫu n, nhóm chứa trung vị là nhóm đầu tiên có tần số tích lũy:",
            options: JSON.stringify(["≥ n/4", "≥ n/2", "≥ 3n/4", "= n"]),
            answer: "1",
          },
          {
            text: "Cho bảng tần số ghép nhóm với các nhóm [0;2), [2;4), tần số lần lượt 2 và 6, giá trị đại diện tương ứng 1 và 3. Đóng góp của hai nhóm này vào tổng (m.c) là:",
            options: JSON.stringify(["8", "20", "2", "18"]),
            answer: "1",
          },
          {
            text: "Với bảng tần số ghép nhóm điểm thi (tần số 2, 6, 14, 12, 6 trên 5 nhóm), cỡ mẫu n bằng:",
            options: JSON.stringify(["30", "36", "40", "46"]),
            answer: "2",
          },
          {
            text: "Số trung bình cộng x̄ của mẫu số liệu ở bảng trên (giá trị đại diện 1,3,5,7,9) bằng:",
            options: JSON.stringify(["5,0", "5,5", "5,7", "6,0"]),
            answer: "2",
          },
          {
            text: "Với bảng tần số tích lũy 2, 8, 22, 34, 40 (n = 40), nhóm chứa trung vị là:",
            options: JSON.stringify(["[0;2)", "[2;4)", "[4;6)", "[6;8)"]),
            answer: "2",
          },
          {
            text: "Với bảng trên, nhóm chứa tứ phân vị Q₁ (cần tần số tích lũy ≥ n/4 = 10) là:",
            options: JSON.stringify(["[0;2)", "[2;4)", "[4;6)", "[6;8)"]),
            answer: "2",
          },
          {
            text: "Với bảng trên, nhóm chứa tứ phân vị Q₃ (cần tần số tích lũy ≥ 3n/4 = 30) là:",
            options: JSON.stringify(["[2;4)", "[4;6)", "[6;8)", "[8;10]"]),
            answer: "2",
          },
          {
            text: "Công thức tính số trung bình cộng của mẫu số liệu ghép nhóm là:",
            options: JSON.stringify(["x̄ = Σcᵢ/n", "x̄ = Σ(mᵢcᵢ)/n", "x̄ = Σmᵢ/n", "x̄ = n/Σmᵢ"]),
            answer: "1",
          },
          {
            text: "Giá trị đại diện của một nhóm số liệu là:",
            options: JSON.stringify(["Đầu mút trái của nhóm", "Đầu mút phải của nhóm", "Trung điểm của nhóm", "Độ rộng của nhóm"]),
            answer: "2",
          },
          {
            text: "Với bảng trên, nhóm chứa mốt (tần số lớn nhất) là:",
            options: JSON.stringify(["[2;4)", "[4;6)", "[6;8)", "[8;10]"]),
            answer: "1",
          },
          {
            text: "Tứ phân vị thứ hai Q₂ chính là:",
            options: JSON.stringify(["Số trung bình", "Trung vị", "Mốt", "Độ lệch chuẩn"]),
            answer: "1",
          },
          {
            text: "Trong công thức tính trung vị Mₑ = aₘ + [(n/2 − C)/mₘ]×(aₘ₊₁ − aₘ), C là:",
            options: JSON.stringify([
              "Tần số của nhóm chứa trung vị",
              "Tần số tích lũy của nhóm đứng ngay trước nhóm chứa trung vị",
              "Cỡ mẫu n",
              "Giá trị đại diện của nhóm chứa trung vị",
            ]),
            answer: "1",
          },
          {
            text: "Tứ phân vị Q₁ chia mẫu số liệu đã sắp xếp thành hai phần theo tỉ lệ:",
            options: JSON.stringify(["25% và 75%", "50% và 50%", "75% và 25%", "10% và 90%"]),
            answer: "0",
          },
          {
            text: "Tần số tích lũy của nhóm cuối cùng trong bảng tần số ghép nhóm luôn bằng:",
            options: JSON.stringify(["0", "Tần số lớn nhất", "Cỡ mẫu n", "Giá trị đại diện lớn nhất"]),
            answer: "2",
          },
          {
            text: "Với nhóm [aᵢ; aᵢ₊₁), hiệu (aᵢ₊₁ − aᵢ) được gọi là:",
            options: JSON.stringify(["Giá trị đại diện", "Độ rộng của nhóm", "Tần số của nhóm", "Tần số tích lũy"]),
            answer: "1",
          },
          {
            text: "Với bảng trên, đóng góp (m.c) của nhóm [4;6) (m=14, c=5) vào tổng Σmᵢcᵢ là:",
            options: JSON.stringify(["56", "64", "70", "84"]),
            answer: "2",
          },
          {
            text: "Tổng tất cả các tần số trong bảng tần số ghép nhóm luôn bằng:",
            options: JSON.stringify(["100", "Số nhóm", "Cỡ mẫu n", "Giá trị đại diện lớn nhất"]),
            answer: "2",
          },
        ],
      },
    },
    {
      title: "Chương IV. Quan hệ song song trong không gian",
      order: 4,
      volume: 1,
      lessons: [
        {
          title: "Bài 10. Đường thẳng và mặt phẳng trong không gian",
          order: 10,
          content: `## 1. Các tiên đề của hình học không gian

- **Tiên đề 1:** Có một và chỉ một đường thẳng đi qua hai điểm phân biệt
- **Tiên đề 2:** Có một và chỉ một mặt phẳng đi qua ba điểm không thẳng hàng
- **Tiên đề 3:** Nếu một đường thẳng có hai điểm phân biệt thuộc một mặt phẳng thì mọi điểm của đường thẳng đều thuộc mặt phẳng đó
- **Tiên đề 4:** Tồn tại bốn điểm không cùng thuộc một mặt phẳng
- **Tiên đề 5:** Nếu hai mặt phẳng phân biệt có một điểm chung thì chúng có một đường thẳng chung chứa tất cả các điểm chung (gọi là **giao tuyến**)

## 2. Cách xác định một mặt phẳng

Một mặt phẳng được xác định nếu biết:
1. Ba điểm không thẳng hàng thuộc mặt phẳng
2. Một đường thẳng và một điểm nằm ngoài đường thẳng đó
3. Hai đường thẳng cắt nhau
4. Hai đường thẳng song song

**Kí hiệu:** mp(ABC) hoặc (ABC), (α), (P)...

## 3. Hình chóp và hình tứ diện

- **Hình chóp** S.A₁A₂...Aₙ có đáy là đa giác A₁A₂...Aₙ, đỉnh S không thuộc mặt đáy, các mặt bên là tam giác
- **Hình tứ diện** là hình chóp tam giác (4 mặt đều là tam giác)

## 4. Tìm giao tuyến của hai mặt phẳng

**Phương pháp:** Tìm hai điểm chung phân biệt của hai mặt phẳng, đường thẳng qua hai điểm đó chính là giao tuyến.

**Ví dụ:** Cho hình chóp S.ABCD, đáy ABCD là hình bình hành. Tìm giao tuyến của (SAC) và (SBD): cả hai mặt phẳng đều chứa S và giao điểm O của AC, BD → giao tuyến là SO.`,
        },
        {
          title: "Bài 11. Hai đường thẳng song song",
          order: 11,
          content: `## 1. Vị trí tương đối của hai đường thẳng trong không gian

Cho hai đường thẳng a, b trong không gian, có 4 trường hợp:
- **Trùng nhau**: có vô số điểm chung
- **Cắt nhau**: có đúng 1 điểm chung, đồng phẳng
- **Song song**: đồng phẳng, không có điểm chung
- **Chéo nhau**: không đồng phẳng (không cùng nằm trên một mặt phẳng)

## 2. Tính chất

- **Tính chất 1:** Trong không gian, qua một điểm không nằm trên đường thẳng cho trước, có một và chỉ một đường thẳng song song với đường thẳng đó
- **Tính chất 2 (bắc cầu):** Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song với nhau: a ∥ c, b ∥ c (a ≠ b) → a ∥ b

## 3. Định lý về giao tuyến

**Định lý:** Nếu ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt thì ba giao tuyến ấy hoặc đồng quy hoặc đôi một song song.

**Hệ quả:** Nếu hai mặt phẳng lần lượt chứa hai đường thẳng song song thì giao tuyến của chúng (nếu có) song song với hai đường thẳng đó (hoặc trùng với một trong hai đường).

**Ví dụ:** Cho hình chóp S.ABCD, đáy ABCD là hình thang (AB ∥ CD). Giao tuyến của (SAB) và (SCD) là đường thẳng qua S và song song với AB, CD.`,
        },
        {
          title: "Bài 12. Đường thẳng và mặt phẳng song song",
          order: 12,
          content: `## 1. Định nghĩa

Đường thẳng d và mặt phẳng (α) được gọi là **song song** với nhau nếu chúng không có điểm chung, kí hiệu d ∥ (α).

## 2. Điều kiện để đường thẳng song song với mặt phẳng

> **Định lý:** Nếu đường thẳng d không nằm trong (α) và d song song với một đường thẳng d' nằm trong (α) thì d ∥ (α)

## 3. Tính chất

- **Tính chất 1:** Nếu d ∥ (α) thì mọi mặt phẳng (β) chứa d mà cắt (α) thì giao tuyến của (β) và (α) song song với d
- **Tính chất 2:** Nếu hai mặt phẳng phân biệt cùng song song với một đường thẳng thì giao tuyến của chúng (nếu có) cũng song song với đường thẳng đó

**Ví dụ:** Cho tứ diện ABCD, gọi M, N lần lượt là trung điểm AB, AC. Chứng minh MN ∥ (BCD): Ta có MN là đường trung bình của tam giác ABC nên MN ∥ BC, mà BC ⊂ (BCD) → MN ∥ (BCD).`,
        },
        {
          title: "Bài 13. Hai mặt phẳng song song",
          order: 13,
          content: `## 1. Định nghĩa

Hai mặt phẳng (α), (β) được gọi là **song song** nếu chúng không có điểm chung, kí hiệu (α) ∥ (β).

## 2. Điều kiện hai mặt phẳng song song

> **Định lý:** Nếu (α) chứa hai đường thẳng cắt nhau a, b và a ∥ (β), b ∥ (β) thì (α) ∥ (β)

## 3. Tính chất

- Qua một điểm nằm ngoài mặt phẳng cho trước, có một và chỉ một mặt phẳng song song với mặt phẳng đó
- Nếu hai mặt phẳng song song thì mọi mặt phẳng cắt mặt phẳng này cũng cắt mặt phẳng kia và hai giao tuyến song song
- **Định lý Thalès trong không gian:** Ba mặt phẳng đôi một song song chắn trên hai cát tuyến bất kỳ những đoạn thẳng tỉ lệ

## 4. Hình lăng trụ và hình hộp

- **Hình lăng trụ:** hai đáy là hai đa giác song song và bằng nhau, các mặt bên là hình bình hành
- **Hình hộp:** là hình lăng trụ có đáy là hình bình hành (6 mặt đều là hình bình hành)

**Ví dụ:** Trong hình hộp ABCD.A'B'C'D', mặt phẳng (ABCD) ∥ (A'B'C'D') vì AB, AD cắt nhau trong (ABCD) và đều song song với (A'B'C'D').`,
        },
        {
          title: "Bài 14. Phép chiếu song song",
          order: 14,
          content: `## 1. Định nghĩa

Cho mặt phẳng (α) và đường thẳng l cắt (α) (gọi là **phương chiếu**). Với mỗi điểm M trong không gian, đường thẳng qua M song song (hoặc trùng) với l cắt (α) tại M' — gọi M' là **hình chiếu song song** của M lên (α) theo phương l.

## 2. Tính chất của phép chiếu song song

- Bảo toàn tính thẳng hàng và thứ tự các điểm
- Biến đường thẳng thành đường thẳng, biến đoạn thẳng thành đoạn thẳng
- Biến hai đường thẳng song song thành hai đường thẳng song song hoặc trùng nhau
- Bảo toàn tỉ số độ dài của hai đoạn thẳng nằm trên hai đường thẳng song song (hoặc trùng nhau)

## 3. Hình biểu diễn của một hình không gian

Hình biểu diễn của một hình H trong không gian là hình chiếu song song của H lên một mặt phẳng theo một phương chiếu nào đó (hoặc hình đồng dạng với hình chiếu đó).

**Quy tắc vẽ hình biểu diễn:**
- Hình bình hành biểu diễn cho hình bình hành, hình chữ nhật, hình vuông, hình thoi
- Tam giác bất kỳ biểu diễn cho mọi loại tam giác
- Trung điểm biểu diễn cho trung điểm; trọng tâm biểu diễn cho trọng tâm

**Ví dụ:** Hình biểu diễn của hình lập phương thường được vẽ dưới dạng hình hộp (các mặt là hình bình hành) để thể hiện tính trực quan trên mặt phẳng giấy.`,
        },
      ],
      quiz: {
        title: "Bài tập cuối chương IV",
        questions: [
          {
            text: "Hai đường thẳng không đồng phẳng (không cùng nằm trên một mặt phẳng) được gọi là:",
            options: JSON.stringify(["Song song", "Cắt nhau", "Chéo nhau", "Trùng nhau"]),
            answer: "2",
          },
          {
            text: "Điều kiện để đường thẳng d song song với mặt phẳng (α) (d không nằm trong (α)) là:",
            options: JSON.stringify([
              "d song song với mọi đường thẳng trong (α)",
              "d song song với một đường thẳng nằm trong (α)",
              "d cắt một đường thẳng trong (α)",
              "d vuông góc với (α)",
            ]),
            answer: "1",
          },
          {
            text: "Hai mặt phẳng phân biệt song song với nhau khi:",
            options: JSON.stringify([
              "Chúng cùng song song với một đường thẳng",
              "Một mặt phẳng chứa hai đường thẳng cắt nhau cùng song song với mặt phẳng kia",
              "Chúng có một điểm chung",
              "Chúng cắt một mặt phẳng thứ ba theo hai giao tuyến cắt nhau",
            ]),
            answer: "1",
          },
          {
            text: "Hình lăng trụ có đáy là hình bình hành được gọi là:",
            options: JSON.stringify(["Hình chóp", "Hình hộp", "Hình tứ diện", "Hình chóp cụt"]),
            answer: "1",
          },
          {
            text: "Phép chiếu song song biến hai đường thẳng song song thành:",
            options: JSON.stringify([
              "Hai đường thẳng cắt nhau",
              "Hai đường thẳng song song hoặc trùng nhau",
              "Hai đường thẳng chéo nhau",
              "Một điểm"
            ]),
            answer: "1",
          },
          {
            text: "Một mặt phẳng được xác định nếu biết:",
            options: JSON.stringify(["Hai điểm phân biệt", "Ba điểm không thẳng hàng", "Một điểm và một đường thẳng bất kỳ", "Bốn điểm bất kỳ"]),
            answer: "1",
          },
          {
            text: "Nếu hai mặt phẳng phân biệt có một điểm chung thì chúng:",
            options: JSON.stringify(["Không có điểm chung nào khác", "Có một đường thẳng chung đi qua điểm đó", "Trùng nhau", "Song song với nhau"]),
            answer: "1",
          },
          {
            text: "Qua một điểm không nằm trên đường thẳng cho trước, có bao nhiêu đường thẳng song song với đường thẳng đó?",
            options: JSON.stringify(["0", "1", "2", "Vô số"]),
            answer: "1",
          },
          {
            text: "Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì:",
            options: JSON.stringify(["Cắt nhau", "Chéo nhau", "Song song với nhau", "Trùng nhau"]),
            answer: "2",
          },
          {
            text: "Hình chóp tam giác (4 mặt đều là tam giác) còn được gọi là:",
            options: JSON.stringify(["Hình lăng trụ", "Hình hộp", "Hình tứ diện", "Hình chóp cụt"]),
            answer: "2",
          },
          {
            text: "Nếu ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt thì ba giao tuyến đó:",
            options: JSON.stringify([
              "Luôn đồng quy",
              "Luôn đôi một song song",
              "Đồng quy hoặc đôi một song song",
              "Luôn cắt nhau từng đôi một tại 3 điểm khác nhau",
            ]),
            answer: "2",
          },
          {
            text: "Đường thẳng d nằm ngoài (α) và song song với một đường thẳng d' nằm trong (α). Khi đó:",
            options: JSON.stringify(["d cắt (α)", "d ⊂ (α)", "d song song với (α)", "d và (α) chéo nhau"]),
            answer: "2",
          },
          {
            text: "Nếu hai mặt phẳng phân biệt cùng song song với một đường thẳng thì giao tuyến của chúng (nếu có):",
            options: JSON.stringify(["Vuông góc với đường thẳng đó", "Song song với đường thẳng đó", "Trùng với đường thẳng đó", "Cắt đường thẳng đó"]),
            answer: "1",
          },
          {
            text: "Định lý Thalès trong không gian phát biểu cho:",
            options: JSON.stringify(["Hai mặt phẳng song song", "Ba mặt phẳng đôi một song song", "Hai đường thẳng chéo nhau", "Một mặt phẳng và một đường thẳng"]),
            answer: "1",
          },
          {
            text: "Hình lăng trụ có hai đáy là:",
            options: JSON.stringify(["Hai đa giác bất kỳ không bằng nhau", "Hai đa giác song song và bằng nhau", "Hai tam giác đều", "Hai hình tròn"]),
            answer: "1",
          },
          {
            text: "Trong hình hộp ABCD.A'B'C'D', hai mặt phẳng (ABCD) và (A'B'C'D') có quan hệ:",
            options: JSON.stringify(["Cắt nhau", "Vuông góc", "Song song", "Trùng nhau"]),
            answer: "2",
          },
          {
            text: "Phép chiếu song song bảo toàn tính chất nào sau đây?",
            options: JSON.stringify(["Độ dài đoạn thẳng bất kỳ", "Góc giữa hai đường thẳng bất kỳ", "Tỉ số độ dài của hai đoạn thẳng song song", "Diện tích của hình"]),
            answer: "2",
          },
          {
            text: "Hình biểu diễn của một hình bình hành trong không gian thường được vẽ là:",
            options: JSON.stringify(["Hình thang", "Hình bình hành", "Hình tròn", "Tam giác"]),
            answer: "1",
          },
          {
            text: "Qua phép chiếu song song, trung điểm của một đoạn thẳng biến thành:",
            options: JSON.stringify(["Điểm đầu của đoạn ảnh", "Điểm cuối của đoạn ảnh", "Trung điểm của đoạn thẳng ảnh", "Một điểm bất kỳ trên đoạn ảnh"]),
            answer: "2",
          },
          {
            text: "Cho tứ diện ABCD, M, N lần lượt là trung điểm AB, AC. Khi đó MN song song với:",
            options: JSON.stringify(["AD", "BD", "BC", "CD"]),
            answer: "2",
          },
        ],
      },
    },
    {
      title: "Chương V. Giới hạn. Hàm số liên tục",
      order: 5,
      volume: 1,
      lessons: [
        {
          title: "Bài 15. Giới hạn của dãy số",
          order: 15,
          content: `## 1. Giới hạn hữu hạn của dãy số

Ta nói dãy số (uₙ) có **giới hạn là số L** (hay uₙ dần tới L) khi n → +∞, nếu |uₙ − L| có thể nhỏ hơn một số dương bé tùy ý, kể từ một số hạng nào đó trở đi. Kí hiệu: **lim uₙ = L** hoặc uₙ → L.

**Các giới hạn cơ bản:**
- lim(1/n) = 0; lim(1/nᵏ) = 0 (k nguyên dương)
- lim qⁿ = 0 nếu |q| < 1
- lim c = c (c là hằng số)

## 2. Định lý về giới hạn hữu hạn

Nếu lim uₙ = a, lim vₙ = b thì:
- lim(uₙ + vₙ) = a + b; lim(uₙ − vₙ) = a − b
- lim(uₙ.vₙ) = a.b
- lim(uₙ/vₙ) = a/b (b ≠ 0)

**Ví dụ:** lim (3n+1)/(n+2) = lim (3 + 1/n)/(1 + 2/n) = 3/1 = 3

## 3. Tổng của cấp số nhân lùi vô hạn

Cấp số nhân vô hạn (uₙ) có công bội |q| < 1 gọi là **cấp số nhân lùi vô hạn**. Tổng của nó:
> **S = u₁ + u₁q + u₁q² + ... = u₁/(1 − q)**

**Ví dụ:** 1 + 1/2 + 1/4 + 1/8 + ... = 1/(1 − 1/2) = 2

## 4. Giới hạn vô cực

Ta nói dãy (uₙ) có giới hạn +∞ nếu uₙ có thể lớn hơn một số dương bất kì, kể từ một số hạng nào đó trở đi. Kí hiệu lim uₙ = +∞. Tương tự cho lim uₙ = −∞.
- lim nᵏ = +∞ (k nguyên dương); lim qⁿ = +∞ nếu q > 1`,
        },
        {
          title: "Bài 16. Giới hạn của hàm số",
          order: 16,
          content: `## 1. Giới hạn hữu hạn của hàm số tại một điểm

Cho hàm số y = f(x) xác định trên khoảng K (có thể trừ x₀). Ta nói f(x) có giới hạn là L khi x dần tới x₀ nếu với dãy (xₙ) bất kì, xₙ ∈ K\\{x₀}, xₙ → x₀ thì f(xₙ) → L. Kí hiệu: **lim(x→x₀) f(x) = L**

**Các giới hạn cơ bản:**
- lim(x→x₀) c = c; lim(x→x₀) x = x₀

## 2. Định lý về giới hạn hữu hạn

Nếu lim(x→x₀) f(x) = L, lim(x→x₀) g(x) = M thì:
- lim[f(x) ± g(x)] = L ± M
- lim[f(x).g(x)] = L.M
- lim[f(x)/g(x)] = L/M (M ≠ 0)

**Ví dụ:** lim(x→2) (x² − 4)/(x − 2) = lim(x→2) (x−2)(x+2)/(x−2) = lim(x→2)(x+2) = 4

## 3. Giới hạn một bên

- Giới hạn bên phải: lim(x→x₀⁺) f(x)
- Giới hạn bên trái: lim(x→x₀⁻) f(x)
> lim(x→x₀) f(x) = L ⟺ lim(x→x₀⁺) f(x) = lim(x→x₀⁻) f(x) = L

## 4. Giới hạn hữu hạn của hàm số tại vô cực

lim(x→+∞) f(x) = L, lim(x→−∞) f(x) = L định nghĩa tương tự bằng dãy số xₙ → +∞ (hoặc −∞)

**Ví dụ:** lim(x→+∞) (2x+1)/(x−3) = lim(x→+∞) (2 + 1/x)/(1 − 3/x) = 2

## 5. Giới hạn vô cực của hàm số

lim(x→x₀) f(x) = +∞ hoặc −∞ khi giá trị f(x) tăng (giảm) vô hạn khi x → x₀.

**Ví dụ:** lim(x→0⁺) 1/x = +∞; lim(x→0⁻) 1/x = −∞`,
        },
        {
          title: "Bài 17. Hàm số liên tục",
          order: 17,
          content: `## 1. Hàm số liên tục tại một điểm

Cho hàm số y = f(x) xác định trên khoảng K, x₀ ∈ K. Hàm số f được gọi là **liên tục tại x₀** nếu:
> **lim(x→x₀) f(x) = f(x₀)**

Nếu f không liên tục tại x₀ thì ta nói f **gián đoạn** tại x₀.

## 2. Hàm số liên tục trên một khoảng, một đoạn

- f liên tục trên khoảng (a; b) nếu f liên tục tại mọi điểm thuộc khoảng đó
- f liên tục trên đoạn [a; b] nếu f liên tục trên (a; b) và lim(x→a⁺)f(x) = f(a), lim(x→b⁻)f(x) = f(b)

**Nhận xét:** Hàm đa thức liên tục trên ℝ. Hàm phân thức hữu tỉ, hàm lượng giác liên tục trên từng khoảng xác định của chúng.

## 3. Tính chất của hàm số liên tục

- **Định lý 1:** Tổng, hiệu, tích, thương (mẫu khác 0) của hai hàm liên tục tại một điểm là hàm liên tục tại điểm đó
- **Định lý 2 (giá trị trung gian):** Nếu f liên tục trên [a;b] và f(a).f(b) < 0 thì tồn tại ít nhất một điểm c ∈ (a;b) sao cho f(c) = 0

**Ứng dụng:** Định lý giá trị trung gian dùng để chứng minh phương trình f(x) = 0 có nghiệm trên một khoảng.

**Ví dụ:** Chứng minh phương trình x³ − 3x + 1 = 0 có nghiệm trong (0; 1).
Xét f(x) = x³ − 3x + 1 liên tục trên ℝ (hàm đa thức). f(0) = 1 > 0, f(1) = −1 < 0 → f(0).f(1) < 0 → phương trình có ít nhất một nghiệm trong (0;1).`,
        },
      ],
      quiz: {
        title: "Bài tập cuối chương V",
        questions: [
          {
            text: "lim (2n+1)/(n+3) bằng:",
            options: JSON.stringify(["1", "2", "3", "0"]),
            answer: "1",
          },
          {
            text: "Tổng của cấp số nhân lùi vô hạn 1 + 1/3 + 1/9 + ... bằng:",
            options: JSON.stringify(["3/2", "1", "2", "4/3"]),
            answer: "0",
          },
          {
            text: "lim(x→2) (x²−4)/(x−2) bằng:",
            options: JSON.stringify(["0", "2", "4", "Không tồn tại"]),
            answer: "2",
          },
          {
            text: "Hàm số y = f(x) liên tục tại x₀ khi:",
            options: JSON.stringify([
              "f(x₀) xác định",
              "lim(x→x₀) f(x) tồn tại",
              "lim(x→x₀) f(x) = f(x₀)",
              "f(x) xác định trên ℝ",
            ]),
            answer: "2",
          },
          {
            text: "Để chứng minh PT f(x) = 0 có nghiệm trên (a;b) bằng định lý giá trị trung gian, cần f liên tục trên [a;b] và:",
            options: JSON.stringify(["f(a) = f(b)", "f(a).f(b) < 0", "f(a).f(b) > 0", "f(a) + f(b) = 0"]),
            answer: "1",
          },
          {
            text: "lim(1/n) bằng:",
            options: JSON.stringify(["0", "1", "+∞", "Không tồn tại"]),
            answer: "0",
          },
          {
            text: "Với |q| < 1, lim qⁿ bằng:",
            options: JSON.stringify(["1", "q", "0", "+∞"]),
            answer: "2",
          },
          {
            text: "Công thức tính tổng của cấp số nhân lùi vô hạn (số hạng đầu u₁, công bội q với |q|<1) là:",
            options: JSON.stringify(["S = u₁.q", "S = u₁/(1−q)", "S = u₁(1−q)", "S = u₁/(1+q)"]),
            answer: "1",
          },
          {
            text: "lim(x→x₀) c (với c là hằng số) bằng:",
            options: JSON.stringify(["0", "x₀", "c", "+∞"]),
            answer: "2",
          },
          {
            text: "lim(x→+∞) (2x+1)/(x−3) bằng:",
            options: JSON.stringify(["1", "2", "3", "+∞"]),
            answer: "1",
          },
          {
            text: "lim(x→0⁺) 1/x bằng:",
            options: JSON.stringify(["0", "1", "+∞", "−∞"]),
            answer: "2",
          },
          {
            text: "lim(x→0⁻) 1/x bằng:",
            options: JSON.stringify(["0", "1", "+∞", "−∞"]),
            answer: "3",
          },
          {
            text: "lim(x→x₀) f(x) = L khi và chỉ khi:",
            options: JSON.stringify([
              "lim(x→x₀⁺) f(x) = L",
              "lim(x→x₀⁻) f(x) = L",
              "lim(x→x₀⁺) f(x) = lim(x→x₀⁻) f(x) = L",
              "f(x₀) = L",
            ]),
            answer: "2",
          },
          {
            text: "Hàm đa thức liên tục trên:",
            options: JSON.stringify(["Một khoảng hữu hạn", "ℝ", "Tập số hữu tỉ", "Chỉ tại điểm x = 0"]),
            answer: "1",
          },
          {
            text: "Hàm phân thức hữu tỉ liên tục trên:",
            options: JSON.stringify(["ℝ", "Từng khoảng xác định của nó", "Chỉ tại x = 0", "Tập số nguyên"]),
            answer: "1",
          },
          {
            text: "Nếu f, g liên tục tại x₀ thì f + g:",
            options: JSON.stringify(["Không xác định tại x₀", "Liên tục tại x₀", "Gián đoạn tại x₀", "Chỉ liên tục khi g(x₀) ≠ 0"]),
            answer: "1",
          },
          {
            text: "lim(x→3) (x²−9)/(x−3) bằng:",
            options: JSON.stringify(["0", "3", "6", "9"]),
            answer: "2",
          },
          {
            text: "Dãy số uₙ = 1/2ⁿ có lim uₙ bằng:",
            options: JSON.stringify(["1", "1/2", "0", "+∞"]),
            answer: "2",
          },
          {
            text: "Để chứng minh PT x³ − 3x + 1 = 0 có nghiệm trong (0;1), ta cần f(0).f(1):",
            options: JSON.stringify(["> 0", "< 0", "= 0", "Không xác định"]),
            answer: "1",
          },
          {
            text: "Nếu hàm số f gián đoạn tại x₀ thì:",
            options: JSON.stringify([
              "lim(x→x₀) f(x) tồn tại và bằng f(x₀)",
              "lim(x→x₀) f(x) không tồn tại hoặc khác f(x₀)",
              "f(x₀) luôn không xác định",
              "f liên tục tại mọi điểm khác x₀",
            ]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chương VI. Hàm số mũ và hàm số lôgarit",
      order: 6,
      volume: 2,
      lessons: [
        {
          title: "Bài 18. Luỹ thừa với số mũ thực",
          order: 18,
          content: `## 1. Luỹ thừa với số mũ nguyên

Với a ≠ 0, n nguyên dương: **aⁿ = a.a...a** (n thừa số), **a⁰ = 1**, **a⁻ⁿ = 1/aⁿ**

## 2. Căn bậc n

Cho số thực b và số nguyên n ≥ 2. Số a được gọi là **căn bậc n** của b nếu aⁿ = b.
- n lẻ: mọi b đều có duy nhất một căn bậc n, kí hiệu ⁿ√b
- n chẵn: b > 0 có hai căn trái dấu ±ⁿ√b; b = 0 có một căn là 0; b < 0 không có căn

## 3. Luỹ thừa với số mũ hữu tỉ

Với a > 0, số hữu tỉ r = m/n (m ∈ ℤ, n nguyên dương):
> **a^(m/n) = ⁿ√(aᵐ)**

## 4. Luỹ thừa với số mũ thực

Với a > 0, α là số thực bất kì (có thể vô tỉ), aᵅ được định nghĩa bằng giới hạn của dãy a^(rₙ) với (rₙ) là dãy số hữu tỉ dần tới α.

## 5. Tính chất của luỹ thừa

Với a, b > 0 và α, β ∈ ℝ:
- aᵅ.aᵝ = aᵅ⁺ᵝ
- aᵅ/aᵝ = aᵅ⁻ᵝ
- (aᵅ)ᵝ = aᵅᵝ
- (ab)ᵅ = aᵅ.bᵅ
- (a/b)ᵅ = aᵅ/bᵅ

**Ví dụ:** 8^(2/3) = (2³)^(2/3) = 2² = 4

**So sánh luỹ thừa:** Nếu a > 1 thì aᵅ > aᵝ ⟺ α > β. Nếu 0 < a < 1 thì aᵅ > aᵝ ⟺ α < β`,
        },
        {
          title: "Bài 19. Lôgarit",
          order: 19,
          content: `## 1. Định nghĩa lôgarit

Cho a > 0, a ≠ 1 và b > 0. Số thực c thoả aᶜ = b được gọi là **lôgarit cơ số a của b**, kí hiệu:
> **c = log_a b ⟺ aᶜ = b**

**Lôgarit đặc biệt:**
- Lôgarit thập phân (cơ số 10): log b (hoặc lg b)
- Lôgarit tự nhiên (cơ số e ≈ 2,718): ln b

## 2. Tính chất cơ bản

- log_a 1 = 0; log_a a = 1
- a^(log_a b) = b; log_a(aᵅ) = α

## 3. Các quy tắc tính lôgarit

Với a > 0, a ≠ 1, x, y > 0:
- **log_a(xy) = log_a x + log_a y**
- **log_a(x/y) = log_a x − log_a y**
- **log_a(xᵅ) = α.log_a x**

## 4. Công thức đổi cơ số

> **log_a b = log_c b / log_c a** (c > 0, c ≠ 1)

**Hệ quả:** log_a b = 1/log_b a

**Ví dụ:** log₂8 = 3 vì 2³ = 8

**Ví dụ:** log₃45 − log₃5 = log₃(45/5) = log₃9 = 2`,
        },
        {
          title: "Bài 20. Hàm số mũ và hàm số lôgarit",
          order: 20,
          content: `## 1. Hàm số mũ

Hàm số y = aˣ (a > 0, a ≠ 1) gọi là **hàm số mũ cơ số a**.

| Tính chất | Nội dung |
|---|---|
| Tập xác định | ℝ |
| Tập giá trị | (0; +∞) |
| Tính đơn điệu | Đồng biến nếu a > 1; nghịch biến nếu 0 < a < 1 |
| Đồ thị | Đi qua điểm (0; 1), nằm phía trên trục hoành |

## 2. Hàm số lôgarit

Hàm số y = log_a x (a > 0, a ≠ 1) gọi là **hàm số lôgarit cơ số a**.

| Tính chất | Nội dung |
|---|---|
| Tập xác định | (0; +∞) |
| Tập giá trị | ℝ |
| Tính đơn điệu | Đồng biến nếu a > 1; nghịch biến nếu 0 < a < 1 |
| Đồ thị | Đi qua điểm (1; 0), nằm bên phải trục tung |

## 3. Mối quan hệ giữa hai hàm số

Hàm số mũ y = aˣ và hàm số lôgarit y = log_a x là hai hàm số **ngược nhau**: đồ thị của chúng đối xứng nhau qua đường thẳng y = x.

**Ví dụ:** So sánh log₂3 và log₃2. Vì hàm log_a x đồng biến khi cơ số a > 1: log₂3 > log₂2 = 1 > log₃2 (vì log₃2 < log₃3 = 1) → log₂3 > log₃2

**Ứng dụng thực tế:** Mô hình tăng trưởng dân số, lãi kép, phân rã phóng xạ đều dùng hàm số mũ dạng N(t) = N₀.aᵗ`,
        },
        {
          title: "Bài 21. Phương trình, bất phương trình mũ và lôgarit",
          order: 21,
          content: `## 1. Phương trình mũ cơ bản

Với a > 0, a ≠ 1: **aˣ = b** có nghiệm duy nhất x = log_a b nếu b > 0; vô nghiệm nếu b ≤ 0

**Đưa về cùng cơ số:** aᶠ⁽ˣ⁾ = aᵍ⁽ˣ⁾ ⟺ f(x) = g(x)

**Ví dụ:** 2^(x−1) = 8 ⟺ 2^(x−1) = 2³ ⟺ x − 1 = 3 ⟺ x = 4

## 2. Bất phương trình mũ cơ bản

- Nếu a > 1: aᶠ⁽ˣ⁾ > aᵍ⁽ˣ⁾ ⟺ f(x) > g(x)
- Nếu 0 < a < 1: aᶠ⁽ˣ⁾ > aᵍ⁽ˣ⁾ ⟺ f(x) < g(x)

## 3. Phương trình lôgarit cơ bản

Với a > 0, a ≠ 1: **log_a x = b ⟺ x = aᵇ** (x > 0)

**Đưa về cùng cơ số:** log_a f(x) = log_a g(x) ⟺ f(x) = g(x) (với điều kiện f(x) > 0, g(x) > 0)

**Ví dụ:** log₂(x+1) = 3 ⟺ x + 1 = 2³ = 8 ⟺ x = 7 (thỏa điều kiện x+1>0)

## 4. Bất phương trình lôgarit cơ bản

- Nếu a > 1: log_a f(x) > log_a g(x) ⟺ f(x) > g(x) > 0
- Nếu 0 < a < 1: log_a f(x) > log_a g(x) ⟺ 0 < f(x) < g(x)

## 5. Phương pháp đặt ẩn phụ

**Ví dụ:** Giải 4ˣ − 5.2ˣ + 4 = 0. Đặt t = 2ˣ (t > 0): t² − 5t + 4 = 0 ⟺ t = 1 hoặc t = 4
- 2ˣ = 1 ⟺ x = 0
- 2ˣ = 4 ⟺ x = 2`,
        },
      ],
      quiz: {
        title: "Bài tập cuối chương VI",
        questions: [
          {
            text: "Giá trị của 8^(2/3) bằng:",
            options: JSON.stringify(["2", "4", "8", "16"]),
            answer: "1",
          },
          {
            text: "log₂16 bằng:",
            options: JSON.stringify(["2", "3", "4", "8"]),
            answer: "2",
          },
          {
            text: "Hàm số y = log_a x (0 < a < 1) là hàm số:",
            options: JSON.stringify(["Đồng biến trên (0;+∞)", "Nghịch biến trên (0;+∞)", "Đồng biến trên ℝ", "Không đơn điệu"]),
            answer: "1",
          },
          {
            text: "Nghiệm của phương trình 2^(x−1) = 8 là:",
            options: JSON.stringify(["x = 3", "x = 4", "x = 2", "x = 8"]),
            answer: "1",
          },
          {
            text: "Nghiệm của phương trình log₂(x+1) = 3 là:",
            options: JSON.stringify(["x = 6", "x = 7", "x = 8", "x = 9"]),
            answer: "1",
          },
          {
            text: "Với a ≠ 0, a⁰ bằng:",
            options: JSON.stringify(["0", "1", "a", "Không xác định"]),
            answer: "1",
          },
          {
            text: "Với a ≠ 0, a⁻ⁿ bằng:",
            options: JSON.stringify(["aⁿ", "−aⁿ", "1/aⁿ", "n/a"]),
            answer: "2",
          },
          {
            text: "2³.2² bằng:",
            options: JSON.stringify(["2⁵", "2⁶", "4⁵", "2¹"]),
            answer: "0",
          },
          {
            text: "log_a 1 bằng (a > 0, a ≠ 1):",
            options: JSON.stringify(["0", "1", "a", "Không xác định"]),
            answer: "0",
          },
          {
            text: "log_a a bằng (a > 0, a ≠ 1):",
            options: JSON.stringify(["0", "1", "a", "a²"]),
            answer: "1",
          },
          {
            text: "Với x, y > 0, log_a(xy) bằng:",
            options: JSON.stringify(["log_a x . log_a y", "log_a x + log_a y", "log_a x − log_a y", "log_a(x+y)"]),
            answer: "1",
          },
          {
            text: "Với x, y > 0, log_a(x/y) bằng:",
            options: JSON.stringify(["log_a x + log_a y", "log_a x − log_a y", "log_a x . log_a y", "log_a x / log_a y"]),
            answer: "1",
          },
          {
            text: "Công thức đổi cơ số log_a b bằng (c > 0, c ≠ 1):",
            options: JSON.stringify(["log_c a / log_c b", "log_c b / log_c a", "log_c b . log_c a", "log_c(a.b)"]),
            answer: "1",
          },
          {
            text: "Tập xác định của hàm số y = aˣ (a > 0, a ≠ 1) là:",
            options: JSON.stringify(["(0;+∞)", "ℝ", "[0;+∞)", "ℝ\\{0}"]),
            answer: "1",
          },
          {
            text: "Tập giá trị của hàm số y = aˣ (a > 0, a ≠ 1) là:",
            options: JSON.stringify(["ℝ", "(0;+∞)", "[0;+∞)", "(−∞;0)"]),
            answer: "1",
          },
          {
            text: "Tập xác định của hàm số y = log_a x (a > 0, a ≠ 1) là:",
            options: JSON.stringify(["ℝ", "(0;+∞)", "[0;+∞)", "ℝ\\{0}"]),
            answer: "1",
          },
          {
            text: "Đồ thị của hàm số mũ y = aˣ luôn đi qua điểm:",
            options: JSON.stringify(["(1;0)", "(0;1)", "(0;0)", "(1;1)"]),
            answer: "1",
          },
          {
            text: "Đồ thị của hàm số lôgarit y = log_a x luôn đi qua điểm:",
            options: JSON.stringify(["(0;1)", "(1;0)", "(0;0)", "(1;1)"]),
            answer: "1",
          },
          {
            text: "Với a > 1, bất phương trình aᶠ⁽ˣ⁾ > aᵍ⁽ˣ⁾ tương đương với:",
            options: JSON.stringify(["f(x) < g(x)", "f(x) > g(x)", "f(x) = g(x)", "f(x) ≤ g(x)"]),
            answer: "1",
          },
          {
            text: "Nghiệm của phương trình log₂x = 4 là:",
            options: JSON.stringify(["x = 8", "x = 16", "x = 4", "x = 2"]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chương VII. Quan hệ vuông góc trong không gian",
      order: 7,
      volume: 2,
      lessons: [
        {
          title: "Bài 22. Hai đường thẳng vuông góc",
          order: 22,
          content: `## 1. Góc giữa hai đường thẳng trong không gian

Góc giữa hai đường thẳng a, b trong không gian là góc giữa hai đường thẳng a', b' cùng đi qua một điểm và lần lượt song song (hoặc trùng) với a, b. Kí hiệu (a, b), nhận giá trị từ 0° đến 90°.

## 2. Hai đường thẳng vuông góc

Hai đường thẳng a, b được gọi là **vuông góc** nếu góc giữa chúng bằng 90°, kí hiệu a ⊥ b (kể cả khi a, b chéo nhau, không cắt nhau).

## 3. Vectơ chỉ phương và tích vô hướng

Nếu u, v lần lượt là vectơ chỉ phương của a, b thì:
> **a ⊥ b ⟺ u.v = 0**

## 4. Tính chất

- Hai đường thẳng cùng vuông góc với một đường thẳng thứ ba **không nhất thiết song song** với nhau (khác với hình học phẳng)
- Nếu a ∥ b và c ⊥ a thì c ⊥ b

**Ví dụ:** Cho hình lập phương ABCD.A'B'C'D'. Chứng minh AC ⊥ BD: Vì ABCD là hình vuông nên hai đường chéo AC, BD vuông góc với nhau tại tâm.`,
        },
        {
          title: "Bài 23. Đường thẳng vuông góc với mặt phẳng",
          order: 23,
          content: `## 1. Định nghĩa

Đường thẳng d được gọi là **vuông góc với mặt phẳng (α)** nếu d vuông góc với mọi đường thẳng nằm trong (α), kí hiệu d ⊥ (α).

## 2. Điều kiện để đường thẳng vuông góc với mặt phẳng

> **Định lý:** Nếu d vuông góc với hai đường thẳng cắt nhau a, b cùng nằm trong (α) thì d ⊥ (α)

## 3. Tính chất

- Có duy nhất một mặt phẳng đi qua một điểm cho trước và vuông góc với một đường thẳng cho trước
- Có duy nhất một đường thẳng đi qua một điểm cho trước và vuông góc với một mặt phẳng cho trước
- Nếu a ∥ b và (α) ⊥ a thì (α) ⊥ b
- Nếu (α) ∥ (β) và a ⊥ (α) thì a ⊥ (β)

## 4. Định lý ba đường vuông góc

Cho đường thẳng d không vuông góc với (α), d' là hình chiếu vuông góc của d lên (α). Khi đó với đường thẳng a nằm trong (α):
> **a ⊥ d ⟺ a ⊥ d'**

**Ví dụ:** Cho hình chóp S.ABCD có SA ⊥ (ABCD), đáy ABCD là hình vuông. Chứng minh BD ⊥ SC: Ta có BD ⊥ AC (đường chéo hình vuông) và BD ⊥ SA (vì SA ⊥ (ABCD)) → BD ⊥ (SAC) → BD ⊥ SC.`,
        },
        {
          title: "Bài 24. Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng",
          order: 24,
          content: `## 1. Phép chiếu vuông góc

**Phép chiếu vuông góc** lên mặt phẳng (α) là phép chiếu song song theo phương vuông góc với (α). Hình chiếu vuông góc của điểm M là chân đường vuông góc hạ từ M xuống (α).

## 2. Góc giữa đường thẳng và mặt phẳng

Cho đường thẳng d và mặt phẳng (α):
- Nếu d ⊥ (α) thì góc giữa d và (α) bằng **90°**
- Nếu d không vuông góc (α), gọi d' là hình chiếu vuông góc của d lên (α), góc giữa d và (α) là góc giữa d và d', nhận giá trị trong (0°; 90°)
- Nếu d ∥ (α) hoặc d ⊂ (α) thì góc giữa d và (α) bằng **0°**

**Nhận xét:** Góc giữa đường thẳng và mặt phẳng luôn thuộc đoạn [0°; 90°], và là góc nhỏ nhất trong các góc giữa d với các đường thẳng nằm trong (α).

**Ví dụ:** Cho hình chóp S.ABCD có SA ⊥ (ABCD), đáy ABCD là hình vuông cạnh a, SA = a. Tính góc giữa SC và (ABCD): hình chiếu của SC lên (ABCD) là AC, nên góc cần tìm là góc SCA. tan(SCA) = SA/AC = a/(a√2) = 1/√2`,
        },
        {
          title: "Bài 25. Hai mặt phẳng vuông góc",
          order: 25,
          content: `## 1. Góc nhị diện

**Góc nhị diện** [α, d, β] tạo bởi hai nửa mặt phẳng (α), (β) chung bờ d. **Góc phẳng nhị diện** là góc giữa hai tia Ox ⊂ (α), Oy ⊂ (β) cùng vuông góc với d tại O.

## 2. Hai mặt phẳng vuông góc

Hai mặt phẳng (α), (β) được gọi là **vuông góc** nếu góc nhị diện tạo bởi chúng bằng 90°, kí hiệu (α) ⊥ (β).

## 3. Điều kiện và tính chất

> **Định lý:** (α) ⊥ (β) ⟺ (α) chứa một đường thẳng vuông góc với (β)

- Nếu (α) ⊥ (β), giao tuyến là d, và a ⊂ (α), a ⊥ d thì a ⊥ (β)
- Nếu (α) ⊥ (β) và A ∈ (α) thì đường thẳng qua A vuông góc với (β) nằm trong (α)
- Nếu hai mặt phẳng cắt nhau và cùng vuông góc với mặt phẳng thứ ba thì giao tuyến của chúng vuông góc với mặt phẳng thứ ba

## 4. Hình lăng trụ đứng, hình chóp đều

- **Hình lăng trụ đứng**: các cạnh bên vuông góc với đáy → các mặt bên vuông góc với đáy
- **Hình chóp đều**: đáy là đa giác đều, chân đường cao trùng tâm đáy

**Ví dụ:** Hình lập phương ABCD.A'B'C'D' có mặt bên (ABB'A') ⊥ (ABCD) vì AA' ⊥ (ABCD) và AA' ⊂ (ABB'A').`,
        },
        {
          title: "Bài 26. Khoảng cách",
          order: 26,
          content: `## 1. Khoảng cách từ một điểm

- **Đến đường thẳng**: khoảng cách từ M đến d là độ dài đoạn MH, với H là hình chiếu vuông góc của M lên d
- **Đến mặt phẳng**: khoảng cách từ M đến (α) là độ dài đoạn MH, với H là hình chiếu vuông góc của M lên (α)

## 2. Khoảng cách giữa đường thẳng và mặt phẳng song song

Nếu d ∥ (α), khoảng cách từ d đến (α) là khoảng cách từ một điểm bất kì của d đến (α).

## 3. Khoảng cách giữa hai mặt phẳng song song

Là khoảng cách từ một điểm bất kì của mặt phẳng này đến mặt phẳng kia.

## 4. Khoảng cách giữa hai đường thẳng chéo nhau

Là độ dài **đoạn vuông góc chung** — đoạn thẳng vuông góc với cả hai đường thẳng và có hai đầu mút nằm trên hai đường thẳng đó.

**Cách dựng:** Dựng mặt phẳng chứa một đường và song song với đường kia, sau đó tính khoảng cách từ đường kia đến mặt phẳng đó.

**Ví dụ:** Hình lập phương ABCD.A'B'C'D' cạnh a. Khoảng cách giữa AB và A'D' (hai đường chéo nhau): dựng mặt phẳng (ABB'A') chứa AB và song song A'D', khoảng cách bằng AA' = a.`,
        },
        {
          title: "Bài 27. Thể tích",
          order: 27,
          content: `## 1. Thể tích khối chóp

> **V = ⅓.S_đáy.h**

trong đó S_đáy là diện tích đáy, h là chiều cao (khoảng cách từ đỉnh đến mặt đáy).

## 2. Thể tích khối lăng trụ

> **V = S_đáy.h**

## 3. Trường hợp đặc biệt

- Hình hộp chữ nhật kích thước a, b, c: V = a.b.c
- Hình lập phương cạnh a: V = a³

## 4. Ví dụ

**Ví dụ 1:** Hình chóp tứ giác đều S.ABCD, cạnh đáy a = 6, chiều cao h = 4:
S_đáy = 6² = 36; V = ⅓ × 36 × 4 = **48 (đvtt)**

**Ví dụ 2:** Hình lăng trụ đứng có đáy là tam giác vuông với hai cạnh góc vuông 3 và 4, chiều cao lăng trụ 5:
S_đáy = ½×3×4 = 6; V = 6×5 = **30 (đvtt)**

**Ví dụ 3:** Cho hình chóp S.ABC có SA ⊥ (ABC), SA = a, đáy ABC vuông tại B với AB = a, BC = a√3:
S_đáy = ½.a.a√3 = a²√3/2; V = ⅓.(a²√3/2).a = a³√3/6`,
        },
      ],
      quiz: {
        title: "Bài tập cuối chương VII",
        questions: [
          {
            text: "Hai đường thẳng a, b được gọi là vuông góc nếu:",
            options: JSON.stringify(["Chúng cắt nhau", "Góc giữa chúng bằng 90°", "Chúng chéo nhau", "Chúng song song"]),
            answer: "1",
          },
          {
            text: "Đường thẳng d vuông góc với mặt phẳng (α) khi d vuông góc với:",
            options: JSON.stringify([
              "Một đường thẳng bất kì trong (α)",
              "Hai đường thẳng cắt nhau nằm trong (α)",
              "Hai đường thẳng song song nằm trong (α)",
              "Giao tuyến của (α) với mặt phẳng khác",
            ]),
            answer: "1",
          },
          {
            text: "Nếu d ⊥ (α) thì góc giữa d và (α) bằng:",
            options: JSON.stringify(["0°", "45°", "60°", "90°"]),
            answer: "3",
          },
          {
            text: "Khoảng cách giữa hai đường thẳng chéo nhau được xác định bằng độ dài:",
            options: JSON.stringify(["Đường vuông góc chung", "Đường thẳng bất kì nối hai đường", "Đường trung trực", "Giao tuyến của hai mặt phẳng chứa chúng"]),
            answer: "0",
          },
          {
            text: "Thể tích khối chóp có diện tích đáy S và chiều cao h là:",
            options: JSON.stringify(["S.h", "½.S.h", "⅓.S.h", "⅔.S.h"]),
            answer: "2",
          },
          {
            text: "Cho u, v lần lượt là vectơ chỉ phương của hai đường thẳng a, b. Điều kiện a ⊥ b là:",
            options: JSON.stringify(["u + v = 0", "u.v = 0", "u = v", "u, v cùng phương"]),
            answer: "1",
          },
          {
            text: "Định lý ba đường vuông góc thiết lập mối liên hệ giữa một đường thẳng a nằm trong (α) với:",
            options: JSON.stringify([
              "Đường thẳng d và mặt phẳng (α)",
              "Đường thẳng d và hình chiếu vuông góc d' của d lên (α)",
              "Hai mặt phẳng bất kỳ",
              "Hai đường thẳng song song",
            ]),
            answer: "1",
          },
          {
            text: "Góc giữa một đường thẳng và một mặt phẳng luôn nhận giá trị trong khoảng:",
            options: JSON.stringify(["[0°;180°]", "[0°;90°]", "(0°;90°)", "[90°;180°]"]),
            answer: "1",
          },
          {
            text: "Nếu đường thẳng d song song với mặt phẳng (α) thì góc giữa d và (α) bằng:",
            options: JSON.stringify(["0°", "45°", "60°", "90°"]),
            answer: "0",
          },
          {
            text: "Góc nhị diện là góc tạo bởi:",
            options: JSON.stringify(["Hai đường thẳng cắt nhau", "Hai nửa mặt phẳng có chung bờ", "Một đường thẳng và một mặt phẳng", "Hai mặt phẳng song song"]),
            answer: "1",
          },
          {
            text: "Hai mặt phẳng được gọi là vuông góc khi góc nhị diện tạo bởi chúng bằng:",
            options: JSON.stringify(["0°", "45°", "60°", "90°"]),
            answer: "3",
          },
          {
            text: "(α) ⊥ (β) khi và chỉ khi:",
            options: JSON.stringify([
              "(α) song song với (β)",
              "(α) chứa một đường thẳng vuông góc với (β)",
              "(α) và (β) cắt nhau bất kỳ",
              "(α) chứa một đường thẳng song song với (β)",
            ]),
            answer: "1",
          },
          {
            text: "Khoảng cách từ điểm M đến mặt phẳng (α) là độ dài đoạn thẳng:",
            options: JSON.stringify([
              "Nối M với một điểm bất kỳ trên (α)",
              "MH, với H là hình chiếu vuông góc của M lên (α)",
              "Đường trung trực của M",
              "Vuông góc chung của hai đường thẳng",
            ]),
            answer: "1",
          },
          {
            text: "Khoảng cách giữa hai mặt phẳng song song bằng:",
            options: JSON.stringify(["Khoảng cách từ một điểm bất kỳ của mặt phẳng này đến mặt phẳng kia", "Tổng khoảng cách từ hai điểm bất kỳ", "0", "Không xác định được"]),
            answer: "0",
          },
          {
            text: "Thể tích khối lăng trụ có diện tích đáy S và chiều cao h là:",
            options: JSON.stringify(["⅓.S.h", "S.h", "½.S.h", "2.S.h"]),
            answer: "1",
          },
          {
            text: "Thể tích hình lập phương cạnh a bằng:",
            options: JSON.stringify(["a²", "3a", "a³", "a³/3"]),
            answer: "2",
          },
          {
            text: "Hình chóp tứ giác đều có cạnh đáy a = 4, chiều cao h = 3. Thể tích bằng:",
            options: JSON.stringify(["12", "16", "24", "48"]),
            answer: "1",
          },
          {
            text: "Hình lăng trụ đứng có đáy là hình vuông cạnh 2, chiều cao 6. Thể tích bằng:",
            options: JSON.stringify(["12", "18", "24", "36"]),
            answer: "2",
          },
          {
            text: "Nếu đường thẳng d vuông góc với hai đường thẳng cắt nhau a, b cùng nằm trong (α) thì:",
            options: JSON.stringify(["d song song (α)", "d ⊥ (α)", "d nằm trong (α)", "d cắt (α) tại một góc bất kỳ"]),
            answer: "1",
          },
          {
            text: "Phép chiếu vuông góc lên mặt phẳng (α) là phép chiếu song song theo phương:",
            options: JSON.stringify(["Song song với (α)", "Bất kỳ", "Vuông góc với (α)", "Trùng với (α)"]),
            answer: "2",
          },
        ],
      },
    },
    {
      title: "Chương VIII. Các quy tắc tính xác suất",
      order: 8,
      volume: 2,
      lessons: [
        {
          title: "Bài 28. Biến cố hợp, biến cố giao, biến cố độc lập",
          order: 28,
          content: `## 1. Biến cố hợp

Cho hai biến cố A, B liên quan đến một phép thử. **Biến cố hợp** của A và B, kí hiệu A ∪ B, là biến cố "A xảy ra hoặc B xảy ra".

## 2. Biến cố giao

**Biến cố giao** của A và B, kí hiệu A ∩ B (hoặc AB), là biến cố "cả A và B đều xảy ra".

## 3. Biến cố xung khắc

Hai biến cố A, B được gọi là **xung khắc** nếu chúng không thể đồng thời xảy ra, tức A ∩ B = ∅.

## 4. Biến cố độc lập

Hai biến cố A, B được gọi là **độc lập** nếu việc xảy ra hay không xảy ra của biến cố này không ảnh hưởng đến xác suất xảy ra của biến cố kia.

**Ví dụ:** Gieo một con xúc xắc. Gọi A: "xuất hiện mặt chẵn", B: "xuất hiện mặt lớn hơn 4".
- A ∪ B = {2, 4, 5, 6}; A ∩ B = {4, 6}
- A, B không xung khắc vì A ∩ B ≠ ∅

**Ví dụ về độc lập:** Gieo hai con xúc xắc. A: "xúc xắc 1 xuất hiện mặt 6", B: "xúc xắc 2 xuất hiện mặt 6" là hai biến cố độc lập vì kết quả xúc xắc này không ảnh hưởng xúc xắc kia.`,
        },
        {
          title: "Bài 29. Công thức cộng xác suất",
          order: 29,
          content: `## 1. Công thức cộng xác suất tổng quát

Với hai biến cố A, B bất kì:
> **P(A ∪ B) = P(A) + P(B) − P(A ∩ B)**

## 2. Công thức cộng xác suất cho biến cố xung khắc

Nếu A, B xung khắc (A ∩ B = ∅) thì P(A ∩ B) = 0, do đó:
> **P(A ∪ B) = P(A) + P(B)**

## 3. Biến cố đối

Biến cố đối của A, kí hiệu Ā, là biến cố "A không xảy ra":
> **P(Ā) = 1 − P(A)**

**Ví dụ:** Một hộp có 5 bi đỏ, 3 bi xanh, 2 bi vàng. Lấy ngẫu nhiên 1 bi. Tính xác suất lấy được bi đỏ hoặc bi xanh:
Gọi A: "bi đỏ", B: "bi xanh" — A, B xung khắc
P(A ∪ B) = P(A) + P(B) = 5/10 + 3/10 = 8/10 = 4/5

**Ví dụ (không xung khắc):** Lớp có 40 học sinh, 20 học sinh giỏi Toán, 15 học sinh giỏi Văn, 10 học sinh giỏi cả hai. Chọn ngẫu nhiên 1 học sinh, tính xác suất chọn được học sinh giỏi Toán hoặc giỏi Văn:
P(A ∪ B) = 20/40 + 15/40 − 10/40 = 25/40 = 5/8`,
        },
        {
          title: "Bài 30. Công thức nhân xác suất cho hai biến cố độc lập",
          order: 30,
          content: `## 1. Công thức nhân xác suất

Nếu A, B là hai biến cố **độc lập** thì:
> **P(A ∩ B) = P(A).P(B)**

## 2. Nhận xét

- Công thức này chỉ áp dụng khi A, B độc lập; nếu A, B không độc lập thì không thể tính P(A∩B) chỉ từ P(A), P(B)
- Có thể dùng công thức này để **kiểm tra** hai biến cố có độc lập hay không: nếu P(A∩B) ≠ P(A).P(B) thì A, B không độc lập

## 3. Mở rộng cho nhiều biến cố

Nếu A₁, A₂, ..., Aₙ đôi một độc lập thì:
> **P(A₁ ∩ A₂ ∩ ... ∩ Aₙ) = P(A₁).P(A₂)...P(Aₙ)**

**Ví dụ:** Hai xạ thủ cùng bắn một viên đạn vào bia một cách độc lập. Xác suất bắn trúng của xạ thủ 1 là 0,8; của xạ thủ 2 là 0,7. Tính xác suất cả hai đều bắn trúng:
P(A ∩ B) = 0,8 × 0,7 = 0,56

**Ví dụ:** Tính xác suất để có ít nhất một người bắn trúng (ở ví dụ trên):
P(ít nhất 1 trúng) = 1 − P(cả 2 trượt) = 1 − (1−0,8)(1−0,7) = 1 − 0,2×0,3 = 1 − 0,06 = 0,94`,
        },
      ],
      quiz: {
        title: "Bài tập cuối chương VIII",
        questions: [
          {
            text: "Biến cố hợp A ∪ B là biến cố:",
            options: JSON.stringify(["Cả A và B cùng xảy ra", "A xảy ra hoặc B xảy ra", "A và B không xảy ra", "Chỉ A xảy ra"]),
            answer: "1",
          },
          {
            text: "Hai biến cố A, B xung khắc khi:",
            options: JSON.stringify(["A ∩ B = ∅", "A ∪ B = ∅", "P(A) = P(B)", "A, B độc lập"]),
            answer: "0",
          },
          {
            text: "Công thức cộng xác suất tổng quát là:",
            options: JSON.stringify([
              "P(A∪B) = P(A) + P(B)",
              "P(A∪B) = P(A) + P(B) − P(A∩B)",
              "P(A∪B) = P(A).P(B)",
              "P(A∪B) = P(A) − P(B)",
            ]),
            answer: "1",
          },
          {
            text: "Nếu A, B là hai biến cố độc lập thì P(A∩B) bằng:",
            options: JSON.stringify(["P(A) + P(B)", "P(A) − P(B)", "P(A).P(B)", "P(A)/P(B)"]),
            answer: "2",
          },
          {
            text: "Một hộp có 5 bi đỏ, 3 bi xanh, 2 bi vàng. Lấy ngẫu nhiên 1 bi. Xác suất lấy được bi đỏ hoặc bi xanh là:",
            options: JSON.stringify(["1/2", "4/5", "3/5", "7/10"]),
            answer: "1",
          },
          {
            text: "Biến cố giao A ∩ B là biến cố:",
            options: JSON.stringify(["A xảy ra hoặc B xảy ra", "Cả A và B đều xảy ra", "A và B không xảy ra", "Chỉ B xảy ra"]),
            answer: "1",
          },
          {
            text: "Biến cố đối của A, kí hiệu Ā, là biến cố:",
            options: JSON.stringify(["A xảy ra", "A không xảy ra", "Cả A và Ā cùng xảy ra", "A và Ā xung khắc nhưng không đối nhau"]),
            answer: "1",
          },
          {
            text: "Với biến cố đối Ā của A, ta có P(Ā) bằng:",
            options: JSON.stringify(["P(A)", "1 − P(A)", "1 + P(A)", "P(A)/2"]),
            answer: "1",
          },
          {
            text: "Nếu A, B là hai biến cố xung khắc thì P(A∪B) bằng:",
            options: JSON.stringify(["P(A).P(B)", "P(A) + P(B)", "P(A) − P(B)", "0"]),
            answer: "1",
          },
          {
            text: "Gieo một con xúc xắc cân đối. Xác suất xuất hiện mặt chẵn bằng:",
            options: JSON.stringify(["1/6", "1/3", "1/2", "2/3"]),
            answer: "2",
          },
          {
            text: "Gieo một con xúc xắc. Xác suất xuất hiện mặt lớn hơn 4 (mặt 5 hoặc 6) bằng:",
            options: JSON.stringify(["1/6", "1/3", "1/2", "2/3"]),
            answer: "1",
          },
          {
            text: "Hai biến cố A, B được gọi là độc lập nếu:",
            options: JSON.stringify([
              "A và B luôn xảy ra đồng thời",
              "Việc xảy ra của biến cố này không ảnh hưởng đến xác suất xảy ra của biến cố kia",
              "A và B xung khắc",
              "P(A) = P(B)",
            ]),
            answer: "1",
          },
          {
            text: "Nếu P(A∩B) ≠ P(A).P(B) thì hai biến cố A, B:",
            options: JSON.stringify(["Độc lập", "Không độc lập", "Xung khắc", "Đối nhau"]),
            answer: "1",
          },
          {
            text: "Hai xạ thủ bắn độc lập vào bia, xác suất trúng lần lượt là 0,6 và 0,5. Xác suất cả hai đều bắn trúng là:",
            options: JSON.stringify(["0,1", "0,3", "0,5", "0,8"]),
            answer: "1",
          },
          {
            text: "Ở câu trên (xác suất trúng 0,6 và 0,5), xác suất để có ít nhất một người bắn trúng là:",
            options: JSON.stringify(["0,2", "0,5", "0,8", "1,1"]),
            answer: "2",
          },
          {
            text: "Lớp có 40 học sinh, 20 giỏi Toán, 15 giỏi Văn, 10 giỏi cả hai môn. Chọn ngẫu nhiên 1 học sinh, xác suất chọn được học sinh giỏi Toán hoặc giỏi Văn là:",
            options: JSON.stringify(["1/2", "5/8", "3/4", "7/8"]),
            answer: "1",
          },
          {
            text: "Công thức nhân xác suất P(A∩B) = P(A).P(B) chỉ áp dụng khi:",
            options: JSON.stringify(["A, B xung khắc", "A, B độc lập", "A, B đối nhau", "A, B bất kỳ"]),
            answer: "1",
          },
          {
            text: "Khi hai biến cố A, B không xung khắc, công thức cộng xác suất cần trừ đi thành phần nào để tránh tính trùng?",
            options: JSON.stringify(["P(A)", "P(B)", "P(A∩B)", "P(A) + P(B)"]),
            answer: "2",
          },
          {
            text: "Gieo hai đồng xu cân đối một cách độc lập. Xác suất cả hai đồng xu đều ra mặt ngửa là:",
            options: JSON.stringify(["1/2", "1/3", "1/4", "1/8"]),
            answer: "2",
          },
          {
            text: "Xác suất của biến cố chắc chắn luôn bằng:",
            options: JSON.stringify(["0", "0,5", "1", "Không xác định"]),
            answer: "2",
          },
        ],
      },
    },
    {
      title: "Chương IX. Đạo hàm",
      order: 9,
      volume: 2,
      lessons: [
        {
          title: "Bài 31. Định nghĩa và ý nghĩa của đạo hàm",
          order: 31,
          content: `## 1. Định nghĩa đạo hàm tại một điểm

Cho hàm số y = f(x) xác định trên khoảng (a;b), x₀ ∈ (a;b). Nếu tồn tại giới hạn hữu hạn:
> **f'(x₀) = lim(Δx→0) [f(x₀+Δx) − f(x₀)] / Δx**

thì giới hạn đó gọi là **đạo hàm của f tại x₀**. Hàm f có đạo hàm tại x₀ được gọi là **khả vi** tại x₀.

## 2. Ý nghĩa hình học

Đạo hàm f'(x₀) là **hệ số góc của tiếp tuyến** của đồ thị hàm số y = f(x) tại điểm M(x₀; f(x₀)).

**Phương trình tiếp tuyến:**
> **y − f(x₀) = f'(x₀)(x − x₀)**

**Ví dụ:** Tiếp tuyến của y = x² tại x₀ = 2: f(2) = 4; f'(x) = 2x → f'(2) = 4
PT tiếp tuyến: y − 4 = 4(x−2) ⟺ **y = 4x − 4**

## 3. Ý nghĩa vật lí

Nếu một chất điểm chuyển động có phương trình s = s(t) thì **vận tốc tức thời** tại thời điểm t₀ là:
> **v(t₀) = s'(t₀)**

## 4. Hàm số khả vi trên một khoảng

Hàm số f gọi là có đạo hàm (khả vi) trên khoảng (a;b) nếu nó có đạo hàm tại mọi điểm thuộc khoảng đó. Khi đó x ↦ f'(x) gọi là **đạo hàm** của f, kí hiệu f'(x) hoặc y'.`,
        },
        {
          title: "Bài 32. Các quy tắc tính đạo hàm",
          order: 32,
          content: `## 1. Bảng đạo hàm của một số hàm số thường gặp

| Hàm số | Đạo hàm |
|--------|---------|
| c (hằng số) | 0 |
| x | 1 |
| xⁿ | n.xⁿ⁻¹ |
| √x | 1/(2√x) |
| sinx | cosx |
| cosx | −sinx |
| tanx | 1/cos²x |
| cotx | −1/sin²x |
| eˣ | eˣ |
| aˣ | aˣ.ln a |
| ln x | 1/x |
| log_a x | 1/(x.ln a) |

## 2. Đạo hàm của tổng, hiệu, tích, thương

- **(u ± v)' = u' ± v'**
- **(u.v)' = u'v + uv'**
- **(c.u)' = c.u'** (c là hằng số)
- **(u/v)' = (u'v − uv')/v²** (v ≠ 0)

## 3. Đạo hàm của hàm hợp

Nếu y = f(u) và u = u(x) thì:
> **y'ₓ = y'ᵤ.u'ₓ**, tức [f(u(x))]' = f'(u(x)).u'(x)

**Ví dụ:** y = (3x−1)⁵ → y' = 5(3x−1)⁴.(3x−1)' = 5(3x−1)⁴.3 = 15(3x−1)⁴

**Ví dụ:** y = sin(2x) → y' = cos(2x).(2x)' = 2cos(2x)

**Ví dụ:** y = √(x²+1) → y' = (x²+1)'/(2√(x²+1)) = x/√(x²+1)

**Ví dụ:** y = e^(x²) → y' = e^(x²).(x²)' = 2x.e^(x²)`,
        },
        {
          title: "Bài 33. Đạo hàm cấp hai",
          order: 33,
          content: `## 1. Định nghĩa

Cho hàm số y = f(x) có đạo hàm f'(x). Nếu f'(x) cũng có đạo hàm thì đạo hàm của nó gọi là **đạo hàm cấp hai** của f, kí hiệu:
> **f''(x) = [f'(x)]'** (hoặc y'')

## 2. Cách tính

Để tính đạo hàm cấp hai, ta tính đạo hàm của hàm số hai lần liên tiếp.

**Ví dụ:** y = x³ − 3x² + 2x
- y' = 3x² − 6x + 2
- y'' = 6x − 6

**Ví dụ:** y = sinx
- y' = cosx
- y'' = −sinx

## 3. Ý nghĩa vật lí của đạo hàm cấp hai

Nếu s = s(t) là phương trình chuyển động của một chất điểm thì:
- Vận tốc tức thời: v(t) = s'(t)
- **Gia tốc tức thời**: **a(t) = v'(t) = s''(t)**

**Ví dụ:** Một chất điểm chuyển động theo phương trình s(t) = t³ − 3t² + 2t (m). Tính gia tốc tại thời điểm t = 2s:
v(t) = s'(t) = 3t² − 6t + 2; a(t) = v'(t) = 6t − 6
a(2) = 6×2 − 6 = 6 (m/s²)

## 4. Ứng dụng xét tính lồi, lõm

f''(x) > 0 trên khoảng nào thì đồ thị f "lõm lên" (lồi xuống) trên khoảng đó; f''(x) < 0 thì đồ thị "lồi lên" trên khoảng đó — kiến thức nền tảng liên hệ tới khảo sát hàm số ở lớp 12.`,
        },
      ],
      quiz: {
        title: "Bài tập cuối chương IX",
        questions: [
          {
            text: "Đạo hàm f'(x₀) có ý nghĩa hình học là:",
            options: JSON.stringify([
              "Giá trị của hàm số tại x₀",
              "Hệ số góc của tiếp tuyến tại điểm có hoành độ x₀",
              "Khoảng cách từ gốc tọa độ đến điểm x₀",
              "Diện tích dưới đồ thị",
            ]),
            answer: "1",
          },
          {
            text: "Đạo hàm của hàm số y = x⁴ − 3x² + 5 là:",
            options: JSON.stringify(["y' = 4x³ − 6x", "y' = 4x³ − 3x", "y' = x³ − 6x", "y' = 4x − 6"]),
            answer: "0",
          },
          {
            text: "Đạo hàm của y = sin(3x) là:",
            options: JSON.stringify(["cos(3x)", "3cos(3x)", "−3cos(3x)", "−cos(3x)"]),
            answer: "1",
          },
          {
            text: "Phương trình tiếp tuyến của y = x² tại điểm có x₀ = 3 là:",
            options: JSON.stringify(["y = 6x − 9", "y = 6x + 9", "y = 3x − 9", "y = 6x"]),
            answer: "0",
          },
          {
            text: "Với s(t) = t³ − 3t² + 2t, gia tốc tại t = 2s bằng:",
            options: JSON.stringify(["2 m/s²", "4 m/s²", "6 m/s²", "8 m/s²"]),
            answer: "2",
          },
          {
            text: "Đạo hàm của hằng số c là:",
            options: JSON.stringify(["c", "1", "0", "x"]),
            answer: "2",
          },
          {
            text: "Đạo hàm của hàm số y = xⁿ là:",
            options: JSON.stringify(["xⁿ⁻¹", "n.xⁿ⁻¹", "n.xⁿ", "nⁿ⁻¹"]),
            answer: "1",
          },
          {
            text: "Đạo hàm của y = √x là:",
            options: JSON.stringify(["1/√x", "1/(2√x)", "2√x", "√x/2"]),
            answer: "1",
          },
          {
            text: "Đạo hàm của y = eˣ là:",
            options: JSON.stringify(["eˣ", "x.eˣ⁻¹", "eˣ.ln e", "1"]),
            answer: "0",
          },
          {
            text: "Đạo hàm của y = ln x là:",
            options: JSON.stringify(["x", "1/x", "ln x", "eˣ"]),
            answer: "1",
          },
          {
            text: "Đạo hàm của y = cosx là:",
            options: JSON.stringify(["sinx", "−sinx", "cosx", "−cosx"]),
            answer: "1",
          },
          {
            text: "Quy tắc đạo hàm của tích hai hàm số (u.v)' là:",
            options: JSON.stringify(["u'.v'", "u'v + uv'", "u'v − uv'", "uv' − u'v"]),
            answer: "1",
          },
          {
            text: "Quy tắc đạo hàm của thương (u/v)' (v ≠ 0) là:",
            options: JSON.stringify(["(u'v − uv')/v²", "(u'v + uv')/v²", "u'/v'", "(uv' − u'v)/v²"]),
            answer: "0",
          },
          {
            text: "Đạo hàm của hàm hợp y = f(u(x)) là:",
            options: JSON.stringify(["y' = f'(u)", "y' = f'(u).u'(x)", "y' = f(u').u", "y' = f'(x)"]),
            answer: "1",
          },
          {
            text: "Nếu s = s(t) là phương trình chuyển động của một chất điểm, thì s'(t) biểu thị:",
            options: JSON.stringify(["Quãng đường đi được", "Vận tốc tức thời", "Gia tốc tức thời", "Thời gian chuyển động"]),
            answer: "1",
          },
          {
            text: "Đạo hàm cấp hai f''(x) được định nghĩa là:",
            options: JSON.stringify(["f(x).f(x)", "[f'(x)]'", "f'(x)/x", "f(x) + f'(x)"]),
            answer: "1",
          },
          {
            text: "Nếu s = s(t) là phương trình chuyển động, gia tốc tức thời a(t) bằng:",
            options: JSON.stringify(["s'(t)", "s''(t)", "s(t)/t", "t.s'(t)"]),
            answer: "1",
          },
          {
            text: "Đạo hàm của y = (2x+1)³ là:",
            options: JSON.stringify(["3(2x+1)²", "6(2x+1)²", "3(2x+1)", "6(2x+1)"]),
            answer: "1",
          },
          {
            text: "Đạo hàm của y = 1/x tại x = 2 bằng:",
            options: JSON.stringify(["1/4", "−1/4", "1/2", "−1/2"]),
            answer: "1",
          },
          {
            text: "Hàm số y = x³ − 3x + 2 có y' = 3x² − 3. Số điểm cực trị của hàm số là:",
            options: JSON.stringify(["0", "1", "2", "3"]),
            answer: "2",
          },
        ],
      },
    },
  ],
};
