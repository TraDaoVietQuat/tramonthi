import { CourseData } from "./types";

export const EXAM_PREP_PHYSICS_COURSE: CourseData = {
  title: "Ôn thi ĐH Vật Lý",
  slug: "on-thi-dh-vat-ly",
  subject: "exam-prep",
  grade: "12",
  description: "Ôn luyện Vật Lý THPT QG từ đề thi 2020–2026: Dao động, Sóng, Điện xoay chiều, Hạt nhân và Quang lượng tử.",
  published: true,
  modules: [
    {
      title: "Dao động và Sóng cơ học (Đề thi 2020–2022)",
      order: 1,
      lessons: [
        {
          title: "Phân tích dạng bài Dao động trong đề thi",
          order: 1,
          content: `## Dao động điều hòa trong đề thi THPT QG

### Dạng 1 – Tính các đại lượng cơ bản

> *[THPT QG 2021] Con lắc đơn dài l = 1m, g = 10 m/s². Chu kỳ dao động:*
> T = 2π√(l/g) = 2π√(1/10) = 2π/√10 ≈ **1,99 s ≈ 2s**
> f = 1/T ≈ 0,5 Hz

> *[THPT QG 2022] Vật dao động điều hòa x = 5cos(4πt) cm. Tìm vận tốc cực đại:*
> A = 5 cm, ω = 4π rad/s
> v_max = Aω = 5 × 4π = **20π cm/s ≈ 62,8 cm/s**

### Dạng 2 – Bài toán năng lượng

> *Con lắc lò xo: k = 100 N/m, A = 4 cm. Cơ năng:*
> W = ½kA² = ½ × 100 × (0,04)² = **0,08 J**

> *Khi x = A/2, động năng:*
> W_đ = W − W_t = kA²/2 − kx²/2 = 0,08 − k(A/2)²/2
> = 0,08 − 100×(0,02)²/2 = 0,08 − 0,02 = **0,06 J**

### Dạng 3 – Bài toán thời gian

> *Con lắc x = Acos(ωt). Thời gian đi từ vị trí cân bằng đến x = A/2:*
> cos(ωt) = 1/2 → ωt = π/3 → t = π/(3ω) = **T/6**

---

## Sóng cơ trong đề thi THPT QG

### Giao thoa sóng – Đề thi thường gặp:

> *[THPT QG 2020] Hai nguồn S₁, S₂ cách nhau 8cm, cùng pha, tần số 50Hz, v = 40cm/s.*
> λ = v/f = 40/50 = **0,8 cm**
> Số đường cực đại giữa S₁S₂: 2k + 1 điều kiện |d₂−d₁| < 8cm
> → k = 0, ±1, ..., ±5 (loại k = ±5 nếu nằm ngoài) → **9 đường cực đại**`,
        },
        {
          title: "Sóng âm và Giao thoa – Phân tích đề thi",
          order: 2,
          content: `## Sóng âm trong đề thi THPT QG

### Mức cường độ âm (dB)
> **L = 10.log₁₀(I/I₀)** dB

Trong đó: I₀ = 10⁻¹² W/m² (ngưỡng nghe)

> *[THPT QG 2021] Tại điểm M, mức cường độ âm là 60 dB. Cường độ âm là:*
> 60 = 10.log₁₀(I/I₀) → log₁₀(I/I₀) = 6 → I = 10⁶ × I₀ = **10⁻⁶ W/m²**

### Hiệu ứng Doppler
> f_obs = f_s × (v ± v_obs)/(v ∓ v_s)

- **+** ở tử số khi observer tiến lại gần
- **−** ở mẫu số khi nguồn tiến lại gần

---

## Sóng dừng – Đề thi thường gặp

> *[THPT QG 2022] Dây đàn hồi dài 60cm, hai đầu cố định. Tốc độ truyền sóng v = 40 m/s. Tần số nhỏ nhất để có sóng dừng:*
> Tần số cơ bản: f₁ = v/(2L) = 40/(2×0,6) = **33,3 Hz**

> *Số bụng sóng khi tần số f = 200 Hz:*
> n = f/f₁ = 200/33,3 ≈ 6 → 6 bụng (6 vòng sóng)`,
        },
      ],
      quiz: {
        title: "Quiz: Dao động và Sóng (Đề thi THPT QG)",
        questions: [
          {
            text: "[THPT QG 2021] Con lắc đơn l = 1m, g = 10 m/s². Chu kỳ gần đúng là:",
            options: JSON.stringify(["1 s", "2 s", "3 s", "π/2 s"]),
            answer: "1",
          },
          {
            text: "[THPT QG 2022] Vật dao động x = 4cos(2πt) cm. Vận tốc cực đại là:",
            options: JSON.stringify(["4 cm/s", "8 cm/s", "4π cm/s", "8π cm/s"]),
            answer: "3",
          },
          {
            text: "[THPT QG 2020] Sóng cơ f = 100 Hz, v = 200 m/s. Bước sóng là:",
            options: JSON.stringify(["2 m", "0,5 m", "20 m", "0,02 m"]),
            answer: "0",
          },
          {
            text: "[THPT QG 2021] Mức cường độ âm 80 dB. Cường độ âm tương ứng (I₀ = 10⁻¹² W/m²) là:",
            options: JSON.stringify(["10⁻⁴ W/m²", "10⁻⁵ W/m²", "10⁻⁸ W/m²", "10⁻⁶ W/m²"]),
            answer: "0",
          },
          {
            text: "[THPT QG 2022] Dây 1m hai đầu cố định, v = 200 m/s. Tần số cơ bản là:",
            options: JSON.stringify(["100 Hz", "200 Hz", "50 Hz", "400 Hz"]),
            answer: "0",
          },
        ],
      },
    },
    {
      title: "Điện xoay chiều (Đề thi 2020–2025)",
      order: 2,
      lessons: [
        {
          title: "Mạch RLC nối tiếp – Dạng bài đề thi",
          order: 3,
          content: `## Điện xoay chiều trong đề thi THPT QG (chiếm ~10–12 câu)

### Dạng 1 – Tính tổng trở và cường độ dòng điện

> *[THPT QG 2022] Mạch RLC: R = 60Ω, L = 0,4/π H, C = 10⁻³/(6π) F, f = 50 Hz.*
> ω = 2π × 50 = 100π rad/s
> Z_L = ωL = 100π × 0,4/π = **40 Ω**
> Z_C = 1/(ωC) = 1/(100π × 10⁻³/6π) = 6π²/(100π × 10⁻³) ... = **60 Ω**
> Z = √(60² + (40 − 60)²) = √(3600 + 400) = √4000 = **20√10 Ω**

### Dạng 2 – Điện áp trên từng phần tử

Khi biết I:
- U_R = I.R; U_L = I.Z_L; U_C = I.Z_C
- U = √(U_R² + (U_L − U_C)²)

### Dạng 3 – Bài toán cực trị với L hoặc C thay đổi

**Khi thay đổi C để I_max (cộng hưởng):**
> Z_C = Z_L → C = 1/(ω²L) = 1/(4π²f²L)

**Khi thay đổi C để U_C max:**
> C = 1/(ω²(L − R²/2Z_L²)) ... phức tạp hơn

### Dạng 4 – Bài toán công suất

> *[THPT QG 2021] Mạch R = 100Ω, Z_L = Z_C = 100Ω, U = 200V. Công suất tiêu thụ:*
> Cộng hưởng → Z = R = 100Ω; I = U/R = 2A
> P = I²R = 4 × 100 = **400 W**`,
        },
        {
          title: "Máy biến áp và Truyền tải điện năng – Đề thi",
          order: 4,
          content: `## Máy biến áp trong đề thi THPT QG

### Dạng bài thường gặp

> *[THPT QG 2020] Máy biến áp N₁ = 1000v, N₂ = 50v, U₁ = 220V. Tính U₂:*
> U₂ = U₁ × N₂/N₁ = 220 × 50/1000 = **11 V**

> *[THPT QG 2022] Máy biến áp lý tưởng: U₁ = 4400V, U₂ = 220V. Tỉ số N₁/N₂:*
> N₁/N₂ = U₁/U₂ = 4400/220 = **20**

---

## Truyền tải điện năng – Dạng bài đề thi

> *[THPT QG 2021] Nhà máy phát P = 100 kW, U = 1000V, R đường dây = 10Ω.*
> I = P/U = 100000/1000 = 100A
> ΔP = I²R = 10000 × 10 = **100 000 W = 100 kW** (hao phí = công suất phát → không thực tế)
>
> *→ Nếu tăng U lên 10 lần (dùng máy tăng áp U' = 10000V):*
> I' = 100000/10000 = 10A
> ΔP' = 100 × 10 = **1000 W** (giảm 100 lần)

### Công thức tổng quát:
> ΔP = (P/U)².R = P².R/U²

Tăng U lên n lần → ΔP giảm **n² lần**

---

## Máy phát điện xoay chiều

> *f = np* (n: số vòng/giây, p: số cặp cực)
> *[THPT QG 2023] Máy phát có 3 cặp cực, n = 600 vòng/phút. Tần số:*
> n = 600/60 = 10 vòng/giây; f = 10 × 3 = **30 Hz**`,
        },
      ],
      quiz: {
        title: "Quiz: Điện xoay chiều (Đề thi THPT QG)",
        questions: [
          {
            text: "[THPT QG 2021] Mạch RLC cộng hưởng với R = 100Ω, U = 200V. Công suất tiêu thụ là:",
            options: JSON.stringify(["200 W", "400 W", "100 W", "800 W"]),
            answer: "1",
          },
          {
            text: "[THPT QG 2020] Máy biến áp N₁/N₂ = 20, U₁ = 220V. Điện áp thứ cấp U₂ là:",
            options: JSON.stringify(["4400 V", "11 V", "440 V", "22 V"]),
            answer: "1",
          },
          {
            text: "[THPT QG 2022] Tăng điện áp truyền tải lên 5 lần thì công suất hao phí giảm:",
            options: JSON.stringify(["5 lần", "10 lần", "25 lần", "50 lần"]),
            answer: "2",
          },
          {
            text: "[THPT QG 2023] Máy phát 4 cặp cực, quay 750 vòng/phút. Tần số dòng điện:",
            options: JSON.stringify(["50 Hz", "25 Hz", "100 Hz", "60 Hz"]),
            answer: "0",
          },
          {
            text: "[THPT QG 2021] Mạch có R = 50Ω, Z_L = 100Ω, Z_C = 50Ω, U = 200V. Cường độ hiệu dụng I là:",
            options: JSON.stringify(["4 A", "2 A", "2√2 A", "1 A"]),
            answer: "2",
          },
        ],
      },
    },
    {
      title: "Vật lý hạt nhân và Quang lượng tử (Đề thi 2020–2026)",
      order: 3,
      lessons: [
        {
          title: "Phóng xạ và bài toán hạt nhân – Đề thi",
          order: 5,
          content: `## Phóng xạ trong đề thi THPT QG

### Dạng 1 – Định luật phóng xạ

> *[THPT QG 2021] Chất phóng xạ T = 5 ngày. Sau 15 ngày còn bao nhiêu % ban đầu?*
> t/T = 15/5 = 3 → N = N₀.(1/2)³ = N₀/8 = **12,5%**

> *[THPT QG 2022] m₀ = 1g, T = 3 năm. Khối lượng còn lại sau 9 năm:*
> t/T = 3 → m = 1 × (1/2)³ = **0,125 g**

### Dạng 2 – Tìm chu kỳ bán rã

> *[THPT QG 2020] Sau t = 200 ngày còn 25% ban đầu. Chu kỳ bán rã là:*
> (1/2)^(t/T) = 0,25 = (1/2)² → t/T = 2 → T = 200/2 = **100 ngày**

### Dạng 3 – Khối lượng đã phân rã

> *m_phân rã = m₀ − m(t) = m₀[1 − (1/2)^(t/T)]*

---

## Phản ứng hạt nhân

> *[THPT QG 2022] ²³⁸U → ⁴He + ?*
> Bảo toàn Z: 92 = 2 + Z₂ → Z₂ = 90
> Bảo toàn A: 238 = 4 + A₂ → A₂ = 234
> **Hạt nhân con: ²³⁴Th** (Thorium-234)

### Năng lượng tỏa ra

> *Hạt nhân ²²⁶Ra phân rã α. Biết m(Ra) = 225,977 u, m(Rn) = 221,970 u, m(He) = 4,003 u.*
> Δm = m_trước − m_sau = 225,977 − (221,970 + 4,003) = 0,004 u
> ΔE = 0,004 × 931,5 MeV = **3,726 MeV**`,
        },
        {
          title: "Quang lượng tử – Hiệu ứng quang điện",
          order: 6,
          content: `## Lượng tử ánh sáng và Hiệu ứng quang điện

### Năng lượng photon
> **ε = hf = hc/λ**

- h = 6,625 × 10⁻³⁴ J.s (hằng số Planck)
- c = 3 × 10⁸ m/s

### Hiệu ứng quang điện (Photoelectric Effect)
**Điều kiện:** λ ≤ λ₀ (giới hạn quang điện)

**Phương trình Einstein:**
> **hf = A + ½mv²_max = A + eU_h**

- A = hf₀ = hc/λ₀: **công thoát** electron
- U_h: **hiệu điện thế hãm** (stopping potential)

---

### Dạng bài thường gặp

> *[THPT QG 2021] Kim loại có λ₀ = 0,36 μm. Chiếu ánh sáng λ = 0,18 μm. Vận tốc cực đại của electron:*
> A = hc/λ₀ = 6,625×10⁻³⁴ × 3×10⁸/(0,36×10⁻⁶) = 5,52 × 10⁻¹⁹ J
> hf = hc/λ = 5,52×10⁻¹⁹ × (0,36/0,18) = 11,04 × 10⁻¹⁹ J
> ½mv² = hf − A = 5,52 × 10⁻¹⁹ J
> v = √(2 × 5,52×10⁻¹⁹/9,11×10⁻³¹) ≈ **1,1 × 10⁶ m/s**

> *[THPT QG 2022] Hiệu điện thế hãm U_h = 3V. Động năng cực đại của quang electron:*
> W_đ_max = eU_h = 1,6×10⁻¹⁹ × 3 = **4,8 × 10⁻¹⁹ J**`,
        },
      ],
      quiz: {
        title: "Quiz: Hạt nhân và Quang lượng tử (Đề thi THPT QG)",
        questions: [
          {
            text: "[THPT QG 2021] Chất phóng xạ T = 4 ngày. Sau 12 ngày còn bao nhiêu % so với ban đầu?",
            options: JSON.stringify(["50%", "25%", "12,5%", "6,25%"]),
            answer: "2",
          },
          {
            text: "[THPT QG 2022] Phóng xạ α: ²³⁸₉₂U → ⁴₂He + X. Hạt nhân X là:",
            options: JSON.stringify(["²³⁴₉₂U", "²³⁴₉₀Th", "²³⁸₉₀Th", "²³⁴₈₈Ra"]),
            answer: "1",
          },
          {
            text: "[THPT QG 2020] Sau 200 ngày còn 25% ban đầu. Chu kỳ bán rã là:",
            options: JSON.stringify(["50 ngày", "100 ngày", "200 ngày", "400 ngày"]),
            answer: "1",
          },
          {
            text: "[THPT QG 2022] Hiệu điện thế hãm U_h = 2V. Động năng cực đại quang electron (eV):",
            options: JSON.stringify(["1 eV", "2 eV", "4 eV", "0,5 eV"]),
            answer: "1",
          },
          {
            text: "[THPT QG 2021] Ánh sáng có λ = 0,5 μm. Năng lượng mỗi photon là:",
            options: JSON.stringify(["3,97 × 10⁻¹⁹ J", "2,65 × 10⁻¹⁹ J", "5,3 × 10⁻¹⁹ J", "1,32 × 10⁻¹⁹ J"]),
            answer: "0",
          },
        ],
      },
    },
    {
      title: "Chuyên đề 4: Vật lý hiện đại – Tổng hợp đề thi",
      order: 4,
      lessons: [
        {
          title: "Tổng hợp bài toán Dao động cơ học",
          order: 7,
          content: `## Dao động cơ – Bài toán tổng hợp

### 1. Dao động điều hòa x = Acos(ωt + φ)
**Các hệ thức vuông góc** (quan trọng nhất):
> (x/A)² + (v/ωA)² = 1 (ellipse pha)
> v² + ω²x² = ω²A²

**Từ v và x suy ra A**: A = √(x² + v²/ω²)

### 2. Năng lượng dao động
- W = ½mω²A² = const
- W_đ = ½mv² = ½mω²(A²−x²)
- W_t = ½kx² = ½mω²x²

**Khi W_đ = W_t**: x = ±A/√2; v = ±ωA/√2

### 3. Bài toán thời gian – Con lắc đơn
T = 2π√(L/g) → g = 4π²L/T²

**Đo g bằng con lắc đơn:**
Đo L và T → g = 4π²L/T²

### 4. Con lắc lò xo – Bài toán ghép
- **Ghép nối tiếp**: 1/k_s = 1/k₁ + 1/k₂
- **Ghép song song**: k_p = k₁ + k₂
Từ k và m → T = 2π√(m/k)

### 5. Cộng hưởng
f_đặt = f_riêng → biên độ cực đại (với cùng lực kích thích)`,
        },
        {
          title: "Tổng hợp bài toán Điện xoay chiều",
          order: 8,
          content: `## Điện xoay chiều – Dạng bài thi THPT QG

### 1. Sơ đồ tư duy mạch RLC nối tiếp
- Z = √(R² + (Z_L−Z_C)²)
- tan φ = (Z_L−Z_C)/R
- U = IZ; U_R = IR; U_L = IZ_L; U_C = IZ_C

**Hệ thức về hiệu điện thế:**
> U² = U_R² + (U_L−U_C)²

### 2. Bài toán công suất cực đại
**Biến R → P_max**: R = |Z_L − Z_C|, P_max = U²/(2|Z_L−Z_C|)
**Biến ω (f) → P_max = U²/R** tại cộng hưởng ω₀=1/√(LC)

### 3. Bài toán truyền tải
Hao phí: ΔP = I²R_đường = (P/U)²·R_đường
Khi tăng U → n lần: ΔP giảm n² lần

### 4. Máy biến áp – Các hệ thức
U₁/U₂ = N₁/N₂ (lý tưởng)
I₁/I₂ = N₂/N₁
→ P₁ = P₂ (không tổn thất)

### 5. Ví dụ đề 2023
> Mạch RLC: R=100Ω; L=1/π H; C=100/π μF; U=200V; f=50Hz
> Z_L = 2πfL = 100Ω; Z_C = 1/(2πfC) = 100Ω
> Z = R = 100Ω (cộng hưởng); I = 2A; P = I²R = **400W**`,
        },
        {
          title: "Tổng hợp bài toán Vật lý hạt nhân",
          order: 9,
          content: `## Vật lý hạt nhân – Đề thi THPT QG

### 1. Bài toán phóng xạ
N = N₀·(1/2)^(t/T) → m = m₀·(1/2)^(t/T)
**% chất phóng xạ còn lại**: (1/2)^k × 100% (k = số chu kỳ)

**Ví dụ**: T = 8 ngày; sau 24 ngày (= 3T): còn (1/2)³ = 12,5%

### 2. Viết phương trình phân rã
Bảo toàn số khối (A) và điện tích (Z):
> A_X = A_Y + A_tia; Z_X = Z_Y + Z_tia
- Tia α: ₂⁴He → A giảm 4, Z giảm 2
- Tia β⁻: _₋₁⁰e → Z tăng 1
- Tia β⁺: ₁⁰e → Z giảm 1

### 3. Phản ứng hạt nhân – Năng lượng
Δm = m_trước − m_sau; E = Δm·c² (1u = 931,5 MeV/c²)
Δm > 0: tỏa năng lượng (phân hạch, nhiệt hạch)

### 4. Bài toán tổng hợp đề 2024
> ²³⁸U → ²⁰⁶Pb + 8α + 6β⁻
> Kiểm tra: A: 238 = 206 + 32 ✓; Z: 92 = 82 + 16 − 6 ✓
> Độ phóng xạ H = λN = (ln2/T)·N (đơn vị Bq)`,
        },
      ],
      quiz: {
        title: "Quiz 4 – Bài toán tổng hợp",
        questions: [
          {
            text: "Con lắc đơn dài 1m ở nơi có g=10 m/s². Chu kỳ dao động là:",
            options: JSON.stringify(["π/√10 s", "2π/√10 s", "2π s", "π s"]),
            answer: "1",
          },
          {
            text: "Mạch RLC đạt cộng hưởng khi:",
            options: JSON.stringify(["R = L", "Z_L = Z_C", "U_L = U_C = 0", "ω = R/L"]),
            answer: "1",
          },
          {
            text: "Phân rã alpha làm A thay đổi:",
            options: JSON.stringify(["A tăng 4", "A giảm 4", "A không đổi", "A giảm 2"]),
            answer: "1",
          },
          {
            text: "Độ phóng xạ H = λN có đơn vị là:",
            options: JSON.stringify(["eV", "J/s", "Becquerel (Bq)", "mol"]),
            answer: "2",
          },
          {
            text: "Hao phí truyền tải P_hp khi tăng điện áp U lên 3 lần sẽ:",
            options: JSON.stringify(["Tăng 3 lần", "Tăng 9 lần", "Giảm 3 lần", "Giảm 9 lần"]),
            answer: "3",
          },
        ],
      },
    },
    {
      title: "Chuyên đề 5: Chiến lược thi và Đề thử Vật Lý",
      order: 5,
      lessons: [
        {
          title: "Phân tích đề thi TN THPT Vật Lý – Cấu trúc và xu hướng",
          order: 10,
          content: `## Cấu trúc đề thi Vật Lý TN THPT

### 1. Cấu trúc đề (40 câu – 50 phút)
| Chủ đề | Số câu | Ghi chú |
|--------|--------|---------|
| Dao động cơ | 6–7 | Thường có 1 câu khó |
| Sóng cơ – Sóng âm | 4–5 | Giao thoa sóng |
| Điện xoay chiều | 8–9 | Nhiều nhất, khó |
| Dao động điện LC | 2–3 | Năng lượng mạch |
| Sóng điện từ | 2–3 | Lý thuyết |
| Quang học (Giao thoa) | 3–4 | Young, |λ tính toán |
| Vật lý hạt nhân | 4–5 | Phóng xạ, phản ứng |
| Lượng tử (Quang điện) | 4–5 | Einstein, Bohr |

### 2. Phân loại mức độ
- Nhận biết + Thông hiểu: 20 câu (5 điểm)
- Vận dụng: 14 câu (3,5 điểm)
- Vận dụng cao: 6 câu (1,5 điểm)

### 3. Xu hướng 2023–2026
- Tăng bài toán thực tế (truyền tải điện, mạch LC)
- Giảm lý thuyết thuần túy
- Bài tổng hợp nhiều công thức trong một câu`,
        },
        {
          title: "Phương pháp giải nhanh các dạng bài",
          order: 11,
          content: `## Giải nhanh Vật Lý THPT

### 1. Dao động điều hòa
**Tốc độ tại vị trí x**: v = ω√(A²−x²)
**Xét vị trí đặc biệt**: x=0 → v_max = ωA; x=±A → v=0

### 2. Giao thoa sóng trên mặt nước
Cực đại tại d₁−d₂ = kλ
Cực tiểu tại d₁−d₂ = (k+½)λ

**Đếm cực đại/tiểu giữa S₁S₂:**
- Cực đại: k từ −⌊AB/λ⌋ đến ⌊AB/λ⌋ → số = 2⌊AB/λ⌋+1 (trừ đi các điểm trùng)

### 3. Thí nghiệm Young
i = λD/a; x_sáng = ki; x_tối = (k+½)i

**Số vân sáng trong khoảng L**:
N = 1 + 2⌊L/(2i)⌋ (nếu L/2i không nguyên)

### 4. Mạch LC – Năng lượng
Chọn t=0 tại VTCB (tụ phóng điện hoàn toàn):
- q = Q₀cos(ωt+φ)
- u_C = Q₀/C · cos(ωt+φ)
- i = Q₀ω·sin(ωt+φ)

**Tốc độ góc mạch LC**: ω = 1/√(LC)`,
        },
        {
          title: "Đề thử tổng hợp – 20 câu khó nhất",
          order: 12,
          content: `## 20 dạng câu khó trong đề thi Vật Lý THPT QG

### Nhóm 1: Điện xoay chiều (Vận dụng cao)
1. Mạch RLC biến tần f, tìm f để P_max, U_L_max, U_C_max
2. Mạch có cuộn cảm thực (R_L ≠ 0), biểu đồ pha
3. Máy biến áp không lý tưởng – tính hiệu suất

### Nhóm 2: Dao động cơ (VDC)
4. Hai vật gắn lò xo, sau va chạm tính A mới
5. Con lắc lò xo đứng, tính chiều dài tự nhiên
6. Ghép con lắc: chu kỳ khi dùng 1 nửa lò xo

### Nhóm 3: Giao thoa sóng (VDC)
7. Điểm M dao động với biên độ cực đại/triệt tiêu
8. Bề rộng vùng dao động giữa S₁S₂
9. Giao thoa ánh sáng: tìm khoảng cách hai vân tối liên tiếp

### Nhóm 4: Hạt nhân (VDC)
10. Phóng xạ: tính tuổi mẫu vật cổ (Carbon-14)
11. Năng lượng tỏa ra trong phản ứng nhiệt hạch

### Chiến lược câu VDC:
- Vẽ sơ đồ/hình minh họa
- Xác định đây là dạng bài nào
- Áp công thức đúng → tính toán cẩn thận`,
        },
      ],
      quiz: {
        title: "Quiz 5 – Chiến lược thi Vật Lý",
        questions: [
          {
            text: "Đề thi TN THPT Vật Lý có bao nhiêu câu?",
            options: JSON.stringify(["30 câu", "40 câu", "50 câu", "60 câu"]),
            answer: "1",
          },
          {
            text: "Chủ đề có nhiều câu nhất trong đề Vật Lý THPT là:",
            options: JSON.stringify(["Quang học", "Điện xoay chiều", "Hạt nhân nguyên tử", "Dao động cơ"]),
            answer: "1",
          },
          {
            text: "Trong thí nghiệm Young, khoảng vân i = λD/a. Nếu tăng λ gấp đôi, khoảng vân:",
            options: JSON.stringify(["Không đổi", "Tăng gấp đôi", "Giảm một nửa", "Tăng gấp bốn"]),
            answer: "1",
          },
          {
            text: "Tốc độ góc mạch dao động LC là:",
            options: JSON.stringify(["ω = LC", "ω = 1/√(LC)", "ω = √(LC)", "ω = 1/(LC)"]),
            answer: "1",
          },
          {
            text: "Câu vận dụng cao chiếm bao nhiêu % điểm trong đề Vật Lý THPT?",
            options: JSON.stringify(["10%", "15%", "25%", "50%"]),
            answer: "1",
          },
        ],
      },
    },
  ],
};



