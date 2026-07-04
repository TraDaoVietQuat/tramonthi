import { CourseData } from "./types";

export const PHYSICS_12_COURSE: CourseData = {
  title: "Vật Lý 12",
  slug: "vat-ly-12",
  subject: "physics",
  grade: "12",
  description: "Dao động cơ, điện xoay chiều và vật lý hạt nhân – chương trình Vật Lý 12, bám sát cấu trúc đề thi THPT QG.",
  published: true,
  modules: [
    {
      title: "Dao động cơ và Sóng cơ",
      order: 1,
      lessons: [
        {
          title: "Dao động điều hòa – Con lắc lò xo và con lắc đơn",
          order: 1,
          content: `## Dao động điều hòa

### Định nghĩa
Dao động điều hòa là dao động được mô tả bằng hàm sin hoặc cos theo thời gian.

### Phương trình dao động
> **x = A.cos(ωt + φ)**

- A: **biên độ** (m) – li độ cực đại
- ω: **tần số góc** (rad/s)
- φ: **pha ban đầu** (rad)
- ωt + φ: **pha dao động** tại thời điểm t

### Vận tốc và gia tốc
- **v = x' = −Aω.sin(ωt + φ)**
- **a = v' = −Aω².cos(ωt + φ) = −ω².x**

| Đại lượng | Tại vị trí cân bằng (x = 0) | Tại biên (x = ±A) |
|-----------|---------------------------|------------------|
| v | **v_max = Aω** | 0 |
| a | 0 | **a_max = Aω²** |

### Chu kỳ, tần số, tần số góc
> **T = 2π/ω = 1/f** ;  **f = ω/(2π)**

---

## Con lắc lò xo

> **ω = √(k/m)** ;  **T = 2π√(m/k)**

- Không phụ thuộc chiều dài và gia tốc trọng trường
- Năng lượng: W = kA²/2 = const (bảo toàn)
- Động năng: W_đ = m.v²/2 = kA²/2 − kx²/2
- Thế năng: W_t = kx²/2

---

## Con lắc đơn (biên độ nhỏ)

> **ω = √(g/l)** ;  **T = 2π√(l/g)**

- Phụ thuộc chiều dài l và g (không phụ thuộc khối lượng)
- **Ứng dụng:** g = 4π²l/T²`,
        },
        {
          title: "Sóng cơ – Giao thoa – Sóng dừng",
          order: 2,
          content: `## Sóng cơ

### Định nghĩa
Sóng cơ là quá trình truyền dao động cơ trong môi trường vật chất.

### Các đại lượng đặc trưng
- **Bước sóng (λ):** khoảng cách giữa hai điểm gần nhau nhất dao động cùng pha
  > **λ = v.T = v/f**
- **Biên độ sóng:** biên độ dao động của phần tử
- **Tốc độ truyền sóng v:** phụ thuộc môi trường, không phụ thuộc f

**Phương trình sóng** tại điểm M cách nguồn O một khoảng d:
> u_M = A.cos(ωt − 2πd/λ)

---

## Giao thoa sóng

Điều kiện để hai sóng giao thoa được: **cùng tần số** và **hiệu pha không đổi** (nguồn kết hợp).

### Hai nguồn cùng pha (S₁, S₂ cách nhau l)
**Điểm cực đại (gợn lồi):**
> |d₂ − d₁| = kλ (k ∈ ℤ)

**Điểm cực tiểu (nút sóng):**
> |d₂ − d₁| = (2k + 1)λ/2

---

## Sóng dừng

Sóng dừng = sóng tới + sóng phản xạ giao thoa với nhau.

**Điều kiện sóng dừng trên dây hai đầu cố định:**
> **l = n.λ/2** (n = 1, 2, 3, ...)

**Tần số sóng dừng:** f_n = n.v/(2l)
- n = 1: âm cơ bản (sóng hài cơ bản)
- n = 2, 3: họa âm (harmonic)

**Dây một đầu cố định, một đầu tự do:**
> **l = (2n − 1).λ/4** (n = 1, 2, 3, ...)`,
        },
      ],
      quiz: {
        title: "Quiz: Dao động và Sóng cơ",
        questions: [
          {
            text: "Con lắc đơn có chiều dài l = 1m tại nơi g = 10 m/s². Tần số dao động là:",
            options: JSON.stringify(["0,5 Hz", "1 Hz", "√10/2π Hz", "1/(2π) Hz"]),
            answer: "0",
          },
          {
            text: "Vật dao động điều hòa x = 5cos(2πt) cm. Vận tốc cực đại là:",
            options: JSON.stringify(["5 cm/s", "10π cm/s", "5π cm/s", "10 cm/s"]),
            answer: "1",
          },
          {
            text: "Sóng cơ có tần số 100 Hz truyền trong nước với v = 1500 m/s. Bước sóng là:",
            options: JSON.stringify(["15 m", "1,5 m", "150 m", "0,15 m"]),
            answer: "0",
          },
          {
            text: "Sóng dừng trên dây dài 60 cm, hai đầu cố định. Bước sóng ứng với tần số cơ bản là:",
            options: JSON.stringify(["30 cm", "60 cm", "120 cm", "90 cm"]),
            answer: "2",
          },
          {
            text: "Trong dao động điều hòa, gia tốc a và li độ x có mối quan hệ:",
            options: JSON.stringify([
              "a cùng chiều x",
              "a ngược chiều x: a = −ω²x",
              "a = ωx",
              "a và x không liên quan",
            ]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Điện xoay chiều",
      order: 2,
      lessons: [
        {
          title: "Mạch RLC nối tiếp – Cộng hưởng điện",
          order: 3,
          content: `## Dòng điện xoay chiều (AC)

### Biểu thức
- Điện áp: **u = U₀cos(ωt + φ_u)**
- Dòng điện: **i = I₀cos(ωt + φ_i)**
- Giá trị hiệu dụng: U = U₀/√2 ; I = I₀/√2

---

## Mạch RLC nối tiếp

### Tổng trở
> **Z = √(R² + (Z_L − Z_C)²)**

- Cảm kháng: **Z_L = ωL = 2πfL**
- Dung kháng: **Z_C = 1/(ωC) = 1/(2πfC)**

### Định luật Ohm
> **I = U/Z = U/√(R² + (Z_L − Z_C)²)**

### Góc lệch pha (u sớm pha hơn i góc φ):
> **tanφ = (Z_L − Z_C)/R**

| Trường hợp | tanφ | Tính chất |
|-----------|------|---------|
| Z_L > Z_C | > 0 | u sớm pha hơn i (tính cảm kháng) |
| Z_L < Z_C | < 0 | u trễ pha hơn i (tính dung kháng) |
| Z_L = Z_C | 0 | u cùng pha với i – **Cộng hưởng** |

---

## Cộng hưởng điện

**Điều kiện cộng hưởng:** Z_L = Z_C → ω₀ = 1/√(LC)
> **f₀ = 1/(2π√(LC))**

**Khi cộng hưởng:**
- Z_min = R → **I_max = U/R**
- cosφ = 1 → P_max = U².I = U²/R
- U_R = U ; U_L = U_C (có thể >> U)

---

## Điện áp và công suất

- **U = √(U_R² + (U_L − U_C)²)**
- **P = U.I.cosφ = I².R = U².R/Z²** (W)
- **Hệ số công suất:** cosφ = R/Z`,
        },
        {
          title: "Máy biến áp và Truyền tải điện năng",
          order: 4,
          content: `## Máy biến áp

### Cấu tạo và nguyên lý
Gồm hai cuộn dây (sơ cấp N₁ vòng, thứ cấp N₂ vòng) quấn trên lõi sắt.

### Công thức cơ bản (lý tưởng)
> **U₁/U₂ = N₁/N₂** (tỉ số điện áp = tỉ số số vòng)

> **I₁/I₂ = N₂/N₁** (tỉ số dòng ngược với tỉ số điện áp)

> **P₁ = P₂** (bảo toàn năng lượng, lý tưởng)

| N₁ > N₂ | Máy **hạ áp** (U₁ > U₂) |
|---------|-------------------------|
| N₁ < N₂ | Máy **tăng áp** (U₁ < U₂) |

---

## Truyền tải điện năng

**Vấn đề:** Điện trở đường dây R gây tổn hao P = I².R

### Cách giảm tổn thất
Dùng máy biến áp tăng điện áp lên n lần → I giảm n lần → P giảm n² lần.

**Công thức:**
- Công suất truyền: P
- Hiệu điện thế truyền: U
- Điện trở đường dây: R
- Cường độ dòng: I = P/U
- **Công suất hao phí:** ΔP = I².R = P²R/U²

**Ví dụ:** Nếu tăng U lên 10 lần → ΔP giảm **100 lần**.

---

## Máy phát điện xoay chiều

- Nguyên lý: từ thông biến thiên sinh ra suất điện động cảm ứng
- **e = NBS.ω.sin(ωt)** = E₀.sin(ωt)
- Tần số: **f = np** (n: số vòng/giây, p: số cặp cực)`,
        },
      ],
      quiz: {
        title: "Quiz: Điện xoay chiều",
        questions: [
          {
            text: "Mạch RLC nối tiếp: R = 100Ω, Z_L = 200Ω, Z_C = 100Ω. Tổng trở Z là:",
            options: JSON.stringify(["100√2 Ω", "200 Ω", "300 Ω", "100 Ω"]),
            answer: "0",
          },
          {
            text: "Điều kiện cộng hưởng điện trong mạch RLC là:",
            options: JSON.stringify(["Z_L > Z_C", "Z_L < Z_C", "Z_L = Z_C", "R = 0"]),
            answer: "2",
          },
          {
            text: "Máy biến áp có N₁ = 1000 vòng, N₂ = 50 vòng. Điện áp vào U₁ = 220V. Điện áp ra U₂ là:",
            options: JSON.stringify(["11 V", "22 V", "440 V", "110 V"]),
            answer: "0",
          },
          {
            text: "Mạch RLC đạt cộng hưởng khi ω₀ = 100 rad/s, L = 0,2 H. Điện dung C bằng:",
            options: JSON.stringify(["5 × 10⁻⁴ F", "5 × 10⁻³ F", "5 × 10⁻² F", "5 × 10⁻⁵ F"]),
            answer: "0",
          },
          {
            text: "Tăng điện áp truyền tải lên 5 lần thì công suất hao phí trên đường dây giảm:",
            options: JSON.stringify(["5 lần", "10 lần", "25 lần", "50 lần"]),
            answer: "2",
          },
        ],
      },
    },
    {
      title: "Vật lý hạt nhân",
      order: 3,
      lessons: [
        {
          title: "Phóng xạ và Định luật phóng xạ",
          order: 5,
          content: `## Cấu tạo hạt nhân

### Ký hiệu hạt nhân
> **ᴬ_Z X**

- Z: số hiệu nguyên tử (số proton)
- A: số khối (số nucleon = Z proton + N neutron)
- N = A − Z

**Ví dụ:** ²³⁸_₉₂ U có 92 proton, 146 neutron, A = 238

---

## Phóng xạ

### Các loại tia phóng xạ

| Tia | Bản chất | Ký hiệu | Xuyên thấu |
|-----|---------|--------|-----------|
| Alpha (α) | Hạt ⁴₂He | α | Yếu (vài cm không khí) |
| Beta trừ (β⁻) | Electron | e⁻ | Trung bình (vài mm Al) |
| Beta cộng (β⁺) | Positron | e⁺ | Trung bình |
| Gamma (γ) | Photon | γ | Mạnh (qua nhiều cm Pb) |

### Phóng xạ α: ᴬ_Z X → ⁴_₂He + ᴬ⁻⁴_Z₋₂ Y
**Ví dụ:** ²³⁸_₉₂ U → ⁴_₂He + ²³⁴_₉₀ Th

### Phóng xạ β⁻: ¹_₀ n → ¹_₁ p + ⁰_₋₁ e + ν̄
**Ví dụ:** ¹⁴_₆ C → ¹⁴_₇ N + ⁰_₋₁ e + ν̄

---

## Định luật phóng xạ

> **N(t) = N₀.(1/2)^(t/T) = N₀.e^(−λt)**

- T: **chu kỳ bán rã** (thời gian N giảm còn N₀/2)
- λ: **hằng số phóng xạ** = ln2/T ≈ 0,693/T
- **Khối lượng còn lại:** m(t) = m₀.(1/2)^(t/T)

**Ví dụ:** ²²⁶Ra có T = 1600 năm. Sau 3200 năm:
- t/T = 2 → N = N₀/4 → còn 25% lượng ban đầu`,
        },
        {
          title: "Phản ứng hạt nhân – Năng lượng liên kết",
          order: 6,
          content: `## Phản ứng hạt nhân

### Bảo toàn trong phản ứng hạt nhân
1. **Số khối A:** Σ A_trước = Σ A_sau
2. **Điện tích Z:** Σ Z_trước = Σ Z_sau
3. **Động lượng**
4. **Năng lượng toàn phần** (bao gồm năng lượng nghỉ E = mc²)

### Năng lượng phản ứng
> **ΔE = (m_trước − m_sau).c²**

- ΔE > 0: **phản ứng tỏa năng lượng** (nhiệt hạch, phân hạch)
- ΔE < 0: phản ứng thu năng lượng

---

## Năng lượng liên kết hạt nhân

### Độ hụt khối
> **Δm = Z.m_p + N.m_n − m_hạtnhân**

### Năng lượng liên kết
> **W_lk = Δm.c²**

### Năng lượng liên kết riêng (độ bền hạt nhân)
> **ε = W_lk/A** (J/nucleon hoặc MeV/nucleon)

- ε lớn → hạt nhân càng **bền**
- Hạt nhân bền nhất: ⁵⁶_₂₆ Fe (ε ≈ 8,8 MeV/nucleon)

---

## Phân hạch và Nhiệt hạch

### Phân hạch (Fission)
Hạt nhân nặng (U, Pu) + neutron → hai mảnh trung bình + 2-3 neutron + năng lượng
- **Phản ứng dây chuyền** → lò phản ứng hạt nhân
- ²³⁵_₉₂ U + ¹_₀ n → ⁹⁵_₃₇ Rb + ¹³⁹_₅₅ Cs + 2¹_₀ n + Q

### Nhiệt hạch (Fusion)
Hai hạt nhân nhẹ hợp nhất → hạt nhân nặng hơn + năng lượng
- ²_₁ H + ³_₁ H → ⁴_₂ He + ¹_₀ n + 17,6 MeV
- Cần nhiệt độ **rất cao** (hàng trăm triệu °C)
- Nguồn năng lượng của Mặt Trời`,
        },
      ],
      quiz: {
        title: "Quiz: Vật lý hạt nhân",
        questions: [
          {
            text: "Hạt nhân ²³⁸_₉₂ U có số neutron là:",
            options: JSON.stringify(["92", "238", "146", "330"]),
            answer: "2",
          },
          {
            text: "Chất phóng xạ có chu kỳ bán rã T = 10 ngày. Sau 30 ngày, phần lượng chất còn lại là:",
            options: JSON.stringify(["1/3", "1/4", "1/8", "1/6"]),
            answer: "2",
          },
          {
            text: "Trong phản ứng hạt nhân: ²³⁸_₉₂ U → ⁴_₂He + ? Hạt nhân con là:",
            options: JSON.stringify(["²³⁴_₉₀ Th", "²³⁴_₉₂ U", "²³⁴_₈₈ Ra", "²³⁸_₉₀ Th"]),
            answer: "0",
          },
          {
            text: "Phản ứng nhiệt hạch xảy ra trong điều kiện nào?",
            options: JSON.stringify([
              "Nhiệt độ thấp, áp suất cao",
              "Nhiệt độ rất cao (hàng trăm triệu °C)",
              "Điều kiện bình thường",
              "Có mặt neutron nhiệt",
            ]),
            answer: "1",
          },
          {
            text: "Năng lượng liên kết riêng của hạt nhân đặc trưng cho:",
            options: JSON.stringify([
              "Khối lượng hạt nhân",
              "Số nucleon trong hạt nhân",
              "Độ bền vững của hạt nhân",
              "Tốc độ phân rã",
            ]),
            answer: "2",
          },
        ],
      },
    },
    {
      title: "Chương 4: Lượng tử ánh sáng – Quang điện",
      order: 4,
      lessons: [
        {
          title: "Hiện tượng quang điện – Thuyết photon",
          order: 7,
          content: `## Hiện tượng quang điện ngoài

### 1. Thí nghiệm Hertz
Chiếu ánh sáng tử ngoại vào tấm kẽm tích điện âm → điện tích bị trung hòa (electron bật ra).

### 2. Các định luật quang điện
1. Chỉ xảy ra khi λ ≤ λ₀ (bước sóng giới hạn)
2. Cường độ dòng quang điện bão hòa tỉ lệ với cường độ sáng chiếu vào
3. Động năng ban đầu cực đại của electron KHÔNG phụ thuộc cường độ sáng, chỉ phụ thuộc λ

### 3. Thuyết lượng tử ánh sáng (Einstein)
**Photon**: hạt ánh sáng, năng lượng ε = hf = hc/λ
h = 6,625×10⁻³⁴ J·s (hằng số Planck)
c = 3×10⁸ m/s

**Phương trình Einstein**:
> hf = A + ½mv²_max
> A: công thoát electron (eV), ½mv²_max: động năng ban đầu cực đại`,
        },
        {
          title: "Mẫu nguyên tử Bohr – Quang phổ hidrô",
          order: 8,
          content: `## Mẫu nguyên tử Bohr

### 1. Hai tiên đề Bohr
1. Electron chuyển động trong quỹ đạo dừng, không bức xạ năng lượng
2. Khi electron chuyển từ quỹ đạo E_m xuống E_n: hf = E_m − E_n

### 2. Quỹ đạo dừng hidrô
r_n = n²·a₀ (a₀ = 0,529 Å – Bohr radius)
Năng lượng: E_n = −13,6/n² (eV)

| Quỹ đạo | n | r | E (eV) |
|---------|---|---|--------|
| K | 1 | a₀ | −13,6 |
| L | 2 | 4a₀ | −3,4 |
| M | 3 | 9a₀ | −1,51 |

### 3. Dãy phổ hidrô
- **Lyman**: tia tử ngoại (n → 1)
- **Balmer**: ánh sáng nhìn thấy (n → 2)
- **Paschen**: hồng ngoại (n → 3)

### 4. Bước sóng photon phát ra
hc/λ = E_m − E_n = 13,6(1/n² − 1/m²) eV`,
        },
        {
          title: "Hạt nhân nguyên tử – Phóng xạ",
          order: 9,
          content: `## Vật lý hạt nhân

### 1. Cấu tạo hạt nhân
Hạt nhân ₐᴬX: Z proton + (A−Z) neutron
A: số khối, Z: nguyên tử số

### 2. Năng lượng liên kết hạt nhân
Độ hụt khối: Δm = Z·m_p + (A−Z)·m_n − m_X
Năng lượng liên kết: W = Δm·c² (dùng đơn vị u và MeV)
1u = 931,5 MeV/c²

### 3. Phóng xạ
**Alpha (α)**: ₐᴬX → ₐ₋₂ᴬ⁻⁴Y + ₂⁴He
**Beta trừ (β⁻)**: ₐᴬX → ₐ₊₁ᴬY + e⁻ + ν̄
**Beta cộng (β⁺)**: ₐᴬX → ₐ₋₁ᴬY + e⁺ + ν

**Định luật phân rã phóng xạ**:
> N(t) = N₀ · (1/2)^(t/T) = N₀ · e^(−λt)
> T₁/₂: chu kỳ bán rã; λ = ln2/T

### 4. Phản ứng hạt nhân
- **Phân hạch**: Hạt nhân nặng vỡ thành hạt nhân nhỏ, tỏa năng lượng (lò phản ứng, bom nguyên tử)
- **Nhiệt hạch**: Hai hạt nhân nhẹ kết hợp, tỏa năng lượng lớn hơn (bom H)`,
        },
      ],
      quiz: {
        title: "Quiz 4 – Lượng tử và Hạt nhân",
        questions: [
          {
            text: "Năng lượng photon ánh sáng bước sóng λ là:",
            options: JSON.stringify(["hλ/c", "hc/λ", "hc·λ", "h/cλ"]),
            answer: "1",
          },
          {
            text: "Trong mẫu Bohr, năng lượng electron ở quỹ đạo K (n=1) là:",
            options: JSON.stringify(["−13,6 eV", "−3,4 eV", "+13,6 eV", "0 eV"]),
            answer: "0",
          },
          {
            text: "Phân rã alpha làm hạt nhân mẹ thay đổi:",
            options: JSON.stringify([
              "Z tăng 2, A giảm 4",
              "Z giảm 2, A giảm 4",
              "Z không đổi, A giảm 4",
              "Z giảm 1, A không đổi",
            ]),
            answer: "1",
          },
          {
            text: "Sau 2 chu kỳ bán rã, chất phóng xạ còn lại bao nhiêu %?",
            options: JSON.stringify(["50%", "25%", "12,5%", "75%"]),
            answer: "1",
          },
          {
            text: "Phản ứng nhiệt hạch:",
            options: JSON.stringify([
              "Hạt nhân nặng vỡ thành hạt nhân nhỏ",
              "Hai hạt nhân nhẹ kết hợp thành hạt nhân nặng",
              "Phóng xạ alpha tự nhiên",
              "Hấp thụ neutron",
            ]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chương 5: Điện xoay chiều – Mạch RLC",
      order: 5,
      lessons: [
        {
          title: "Dòng điện xoay chiều – Các giá trị đặc trưng",
          order: 10,
          content: `## Dòng điện xoay chiều (AC)

### 1. Biểu thức tức thời
> i = I₀cos(ωt + φ) (A)
> u = U₀cos(ωt + φ) (V)

ω = 2πf: tần số góc (rad/s); f: tần số (Hz); T = 1/f

### 2. Giá trị hiệu dụng
> I = I₀/√2; U = U₀/√2; E = E₀/√2

Đây là giá trị ghi trên máy móc, đồng hồ đo.

### 3. Cảm kháng và Dung kháng
- **Cảm kháng**: Z_L = ωL = 2πfL (Ω)
- **Dung kháng**: Z_C = 1/(ωC) = 1/(2πfC) (Ω)
- Cuộn cảm: u sớm pha π/2 so với i
- Tụ điện: u trễ pha π/2 so với i

### 4. Mạch RLC nối tiếp
Tổng trở: Z = √(R² + (Z_L − Z_C)²)
> U = Z·I; tan φ = (Z_L − Z_C)/R`,
        },
        {
          title: "Công suất AC – Cộng hưởng điện",
          order: 11,
          content: `## Công suất và Cộng hưởng

### 1. Công suất mạch AC
> P = UI·cosφ = I²R

cosφ: hệ số công suất (0 ≤ cosφ ≤ 1)
cosφ = R/Z

Điện trở thuần: cosφ = 1 (P = UI)
Cuộn cảm/Tụ điện thuần: cosφ = 0 (P = 0)

### 2. Cộng hưởng điện
Khi Z_L = Z_C: ω₀ = 1/√(LC); f₀ = 1/(2π√(LC))

Tại cộng hưởng:
- Z = Z_min = R
- I = I_max = U/R
- cosφ = 1 (φ = 0, u đồng pha với i)

### 3. Máy biến áp
> U₁/U₂ = N₁/N₂; I₁/I₂ = N₂/N₁

- N₁ > N₂: hạ áp
- N₁ < N₂: tăng áp

### 4. Truyền tải điện năng
Hao phí: P_hp = I²R = P²R/U² (giảm bằng cách tăng U)`,
        },
        {
          title: "Máy phát điện – Động cơ điện",
          order: 12,
          content: `## Máy phát điện và Động cơ điện

### 1. Máy phát điện xoay chiều (Generator)
**Nguyên lý**: khung dây quay trong từ trường → suất điện động cảm ứng e = E₀sinωt
E₀ = NBAω (N: số vòng, B: cảm ứng từ, A: diện tích)

### 2. Máy phát 3 pha
Ba cuộn dây lệch nhau 120°, tạo 3 suất điện động đồng biên cách nhau T/3.
- **Mắc sao (Y)**: U_d = √3·U_p; I_d = I_p
- **Mắc tam giác (△)**: U_d = U_p; I_d = √3·I_p

### 3. Động cơ điện xoay chiều
- Nguyên lý: dòng điện trong từ trường → lực từ quay rôto
- **Động cơ đồng bộ**: n = 60f/p (p: số cặp cực)
- **Động cơ không đồng bộ**: n < 60f/p (hiệu suất thực tế)

### 4. Hiệu suất
> η = P_cơ/P_điện = 1 − P_tổn thất/P_điện

Công suất cơ: P = Mω (M: momen, ω: tốc độ góc)`,
        },
      ],
      quiz: {
        title: "Quiz 5 – Điện xoay chiều",
        questions: [
          {
            text: "Giá trị hiệu dụng I liên hệ với biên độ I₀ theo:",
            options: JSON.stringify(["I = I₀", "I = I₀/2", "I = I₀/√2", "I = I₀√2"]),
            answer: "2",
          },
          {
            text: "Công suất mạch xoay chiều là P = UI·cosφ. Điện trở thuần có cosφ bằng:",
            options: JSON.stringify(["0", "0,5", "√2/2", "1"]),
            answer: "3",
          },
          {
            text: "Tần số cộng hưởng mạch RLC là:",
            options: JSON.stringify(["f₀ = 2π√(LC)", "f₀ = 1/(2π√(LC))", "f₀ = R/(2πL)", "f₀ = 1/(RC)"]),
            answer: "1",
          },
          {
            text: "Máy biến áp có N₁=100 vòng, N₂=200 vòng, U₁=220V. U₂ là:",
            options: JSON.stringify(["110 V", "220 V", "440 V", "100 V"]),
            answer: "2",
          },
          {
            text: "Để giảm hao phí truyền tải điện năng người ta:",
            options: JSON.stringify(["Giảm điện áp truyền tải", "Tăng điện áp truyền tải", "Tăng cường độ dòng điện", "Dùng dây đồng"]),
            answer: "1",
          },
        ],
      },
    },
  ],
};



