import type { CourseData } from "./types";

// Nội dung theo SGK Hóa học 10 – Kết nối tri thức 2022
export const CHEMISTRY_COURSE: CourseData = {
  title: "Hóa học 10 – Cấu tạo nguyên tử và Liên kết hóa học",
  slug: "hoa-hoc-10",
  subject: "chemistry",
  grade: "10",
  description:
    "Khóa học Hóa học lớp 10 theo chương trình THPT mới: Cấu tạo nguyên tử, Bảng tuần hoàn, Liên kết hóa học, Phản ứng oxi hóa – khử — theo SGK Kết nối tri thức 2022.",
  published: true,
  modules: [
    {
      title: "Chương 1: Cấu tạo nguyên tử",
      order: 1,
      lessons: [
        {
          title: "Thành phần và cấu trúc nguyên tử",
          order: 1,
          content: `## Cấu tạo nguyên tử

### 1. Thành phần nguyên tử
Nguyên tử gồm **hạt nhân** (proton + neutron) và **vỏ electron** xung quanh.

| Hạt | Ký hiệu | Điện tích | Khối lượng |
|-----|---------|-----------|------------|
| Proton | p | +1 (1,6×10⁻¹⁹ C) | ≈ 1u |
| Neutron | n | 0 | ≈ 1u |
| Electron | e | −1 (1,6×10⁻¹⁹ C) | ≈ 0,00055u ≈ 0 |

> **1u** (đơn vị khối lượng nguyên tử) = 1,6605×10⁻²⁷ kg

### 2. Các đại lượng cơ bản
- **Số hiệu nguyên tử Z** = số proton = số electron (nguyên tử trung hòa điện)
- **Số khối A** = Z + N (N = số neutron)
- **Ký hiệu nguyên tử:** ₍Z₎ᴬX (ví dụ: ₁₂²⁴Mg)

### 3. Đồng vị (Isotopes)
Là các nguyên tử của **cùng một nguyên tố** (cùng Z) nhưng **khác số neutron** (khác N, khác A).

**Ví dụ – Đồng vị của Hydro:**
| Đồng vị | Z | N | A | Tên gọi |
|---------|---|---|---|---------|
| ¹₁H | 1 | 0 | 1 | Protium (phổ biến nhất) |
| ²₁H | 1 | 1 | 2 | Deuterium (D) |
| ³₁H | 1 | 2 | 3 | Tritium (T, phóng xạ) |

### 4. Khối lượng nguyên tử trung bình
$$\\bar{A} = \\frac{\\sum A_i \\cdot \\%_i}{100}$$

**Ví dụ – Clo (Cl):** ³⁵Cl (75,77%) và ³⁷Cl (24,23%)
$$\\bar{A}_{Cl} = \\frac{35 \\times 75{,}77 + 37 \\times 24{,}23}{100} \\approx 35{,}48$$`,
        },
        {
          title: "Cấu hình electron nguyên tử",
          order: 2,
          content: `## Cấu hình electron nguyên tử

### 1. Lớp và phân lớp electron
**Lớp electron** (ký hiệu n = 1, 2, 3, 4... hay K, L, M, N):
- Electron ở lớp gần hạt nhân (n nhỏ) có năng lượng **thấp hơn**
- Mỗi lớp có tối đa **2n²** electron

**Phân lớp** (s, p, d, f):
| Phân lớp | Số orbital | Số e tối đa |
|----------|-----------|------------|
| s | 1 | 2 |
| p | 3 | 6 |
| d | 5 | 10 |
| f | 7 | 14 |

### 2. Nguyên lý và quy tắc phân bố electron
- **Nguyên lý Aufbau**: Điền e từ mức năng lượng **thấp → cao**
  Thứ tự: 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p...
- **Nguyên lý Pauli**: Mỗi orbital chứa tối đa **2 electron** (ngược chiều spin)
- **Quy tắc Hund**: Trong cùng phân lớp, e điền vào các orbital sao cho **số e độc thân là tối đa**

### 3. Cách viết cấu hình electron

**Ví dụ:**
- **H** (Z=1): 1s¹
- **C** (Z=6): 1s² 2s² 2p²
- **Na** (Z=11): 1s² 2s² 2p⁶ 3s¹
- **Ca** (Z=20): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s²
- **Fe** (Z=26): 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²

### 4. Đặc điểm electron lớp ngoài cùng
- Số e lớp ngoài cùng quyết định **tính chất hóa học**
- 1–3 e ngoài cùng → **Kim loại** (có xu hướng nhường e)
- 5–7 e ngoài cùng → **Phi kim** (có xu hướng nhận e)
- 8 e ngoài cùng → **Khí hiếm** (bền, rất ít phản ứng)
- 4 e ngoài cùng → Kim loại hoặc phi kim tùy nguyên tố`,
        },
      ],
      quiz: {
        title: "Quiz 1 – Cấu tạo nguyên tử",
        questions: [
          {
            text: "Nguyên tử ₁₂²⁴Mg có số proton, neutron, electron lần lượt là:",
            options: JSON.stringify(["12; 12; 12", "12; 12; 24", "24; 12; 12", "12; 24; 12"]),
            answer: "0",
          },
          {
            text: "Đồng vị là các nguyên tử:",
            options: JSON.stringify([
              "Cùng số khối, khác số proton",
              "Cùng số proton, khác số neutron",
              "Cùng số neutron, khác số proton",
              "Khác cả số proton lẫn neutron",
            ]),
            answer: "1",
          },
          {
            text: "Cấu hình electron của Na (Z=11) là:",
            options: JSON.stringify(["1s² 2s² 2p⁷", "1s² 2s² 2p⁶ 3s¹", "1s² 2s² 2p⁵ 3s²", "1s² 2s⁹"]),
            answer: "1",
          },
          {
            text: "Nguyên tử có 6 electron lớp ngoài cùng có tính chất gì?",
            options: JSON.stringify(["Kim loại mạnh", "Kim loại yếu", "Phi kim", "Khí hiếm"]),
            answer: "2",
          },
          {
            text: "Clo (Cl) có hai đồng vị ³⁵Cl (75%) và ³⁷Cl (25%). Khối lượng nguyên tử trung bình xấp xỉ:",
            options: JSON.stringify(["35,0", "35,5", "36,0", "37,0"]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chương 2: Bảng tuần hoàn các nguyên tố hóa học",
      order: 2,
      lessons: [
        {
          title: "Cấu tạo bảng tuần hoàn Mendeleev",
          order: 1,
          content: `## Bảng tuần hoàn các nguyên tố hóa học

### 1. Nguyên tắc sắp xếp
Các nguyên tố được sắp xếp theo chiều tăng dần của **số hiệu nguyên tử Z**.

### 2. Cấu tạo bảng

**Chu kỳ** (Periods) — hàng ngang:
- Bảng có **7 chu kỳ**
- Chu kỳ 1: 2 nguyên tố (H, He)
- Chu kỳ 2 và 3: 8 nguyên tố
- Chu kỳ 4 và 5: 18 nguyên tố
- Chu kỳ 6 và 7: 32 nguyên tố

> **Số thứ tự chu kỳ = số lớp electron** của nguyên tử

**Nhóm** (Groups) — cột dọc:
- Bảng có **18 nhóm**: Nhóm A (IA → VIIIA) và Nhóm B (IB → VIIIB)
- Nhóm A: nguyên tố **khối s** (IA, IIA) và **khối p** (IIIA → VIIIA)
- Nhóm B: nguyên tố **khối d** (kim loại chuyển tiếp)
- Nhóm VIIIA: Khí hiếm (He, Ne, Ar, Kr, Xe, Rn)

> **Số thứ tự nhóm A = số electron lớp ngoài cùng**

### 3. Ví dụ
- Na (Z=11): cấu hình [Ne]3s¹ → **Chu kỳ 3, Nhóm IA**
- Cl (Z=17): cấu hình [Ne]3s²3p⁵ → **Chu kỳ 3, Nhóm VIIA**
- Ca (Z=20): cấu hình [Ar]4s² → **Chu kỳ 4, Nhóm IIA**`,
        },
        {
          title: "Quy luật biến đổi tính chất trong bảng tuần hoàn",
          order: 2,
          content: `## Quy luật biến đổi tính chất trong bảng tuần hoàn

### 1. Bán kính nguyên tử (r)

**Trong một chu kỳ** (trái → phải): r **giảm dần**
(Z tăng, lực hút hạt nhân với e tăng, e bị kéo gần lại)

**Trong một nhóm A** (trên → dưới): r **tăng dần**
(thêm lớp electron, e ở lớp ngoài xa hạt nhân hơn)

---

### 2. Độ âm điện (Electronegativity – χ)

| Xu hướng | Giải thích |
|----------|-----------|
| Trong chu kỳ (→): **tăng** | Điện tích hạt nhân tăng, hút e mạnh hơn |
| Trong nhóm (↓): **giảm** | Bán kính tăng, lực hút e yếu hơn |

Nguyên tố có độ âm điện **lớn nhất**: F (χ = 3,98)

---

### 3. Tính kim loại và phi kim

**Tính kim loại** (khả năng nhường e):
- Trong chu kỳ (→): **giảm**
- Trong nhóm (↓): **tăng**
- Kim loại mạnh nhất: **Cs** (Cesium, nhóm IA, chu kỳ 6)

**Tính phi kim** (khả năng nhận e):
- Trong chu kỳ (→): **tăng**
- Trong nhóm (↓): **giảm**
- Phi kim mạnh nhất: **F** (Flo, nhóm VIIA, chu kỳ 2)

---

### 4. Tính axit – bazơ của oxit và hidroxit

**Trong chu kỳ** (→): Oxit và hidroxit biến đổi từ **bazơ mạnh → lưỡng tính → axit mạnh**
- Na₂O (bazơ mạnh) → Al₂O₃ (lưỡng tính) → SiO₂, P₂O₅, SO₃, Cl₂O₇ (axit)

**Trong nhóm** (↓): Tính bazơ của oxit và hidroxit **tăng**`,
        },
      ],
      quiz: {
        title: "Quiz 2 – Bảng tuần hoàn",
        questions: [
          {
            text: "Nguyên tố X có cấu hình e: 1s² 2s² 2p⁶ 3s² 3p³. X thuộc:",
            options: JSON.stringify(["Chu kỳ 2, Nhóm VA", "Chu kỳ 3, Nhóm VA", "Chu kỳ 3, Nhóm IIIA", "Chu kỳ 3, Nhóm VIIA"]),
            answer: "1",
          },
          {
            text: "Trong một chu kỳ, đi từ trái sang phải, bán kính nguyên tử:",
            options: JSON.stringify(["Tăng dần", "Giảm dần", "Không đổi", "Tăng rồi giảm"]),
            answer: "1",
          },
          {
            text: "Phi kim mạnh nhất trong bảng tuần hoàn là:",
            options: JSON.stringify(["O (Oxi)", "Cl (Clo)", "F (Flo)", "N (Nitơ)"]),
            answer: "2",
          },
          {
            text: "Trong nhóm IIA, tính kim loại biến đổi theo chiều từ trên xuống dưới:",
            options: JSON.stringify(["Giảm dần", "Tăng dần", "Không đổi", "Tăng rồi giảm"]),
            answer: "1",
          },
          {
            text: "Al₂O₃ là oxit lưỡng tính vì nó phản ứng được với:",
            options: JSON.stringify(["Chỉ với axit mạnh", "Chỉ với bazơ mạnh", "Cả axit mạnh và bazơ mạnh", "Không phản ứng với gì"]),
            answer: "2",
          },
        ],
      },
    },
    {
      title: "Chương 3: Liên kết hóa học",
      order: 3,
      lessons: [
        {
          title: "Liên kết ion",
          order: 1,
          content: `## Liên kết ion

### 1. Khái niệm
Liên kết ion được hình thành do **lực hút tĩnh điện** giữa ion dương (cation) và ion âm (anion).

Xảy ra giữa: **Kim loại điển hình** (IA, IIA) + **Phi kim điển hình** (VIA, VIIA)

### 2. Sự hình thành ion
- **Kim loại** → nhường e → **cation** (+)
  - Na → Na⁺ + 1e
  - Mg → Mg²⁺ + 2e
- **Phi kim** → nhận e → **anion** (−)
  - Cl + 1e → Cl⁻
  - O + 2e → O²⁻

### 3. Ví dụ hình thành NaCl
Na → Na⁺ + 1e
Cl + 1e → Cl⁻
→ **Na⁺ + Cl⁻ → NaCl**

### 4. Tính chất hợp chất ion
- Tinh thể ion, liên kết bền chắc
- Nhiệt độ nóng chảy **cao** (NaCl: 801°C)
- Tan trong nước, dẫn điện khi nóng chảy hoặc hòa tan

### 5. Hiệu độ âm điện và loại liên kết
| Hiệu Δχ | Loại liên kết |
|---------|--------------|
| 0 ≤ Δχ < 0,4 | Cộng hóa trị không phân cực |
| 0,4 ≤ Δχ < 1,7 | Cộng hóa trị có phân cực |
| Δχ ≥ 1,7 | Ion |`,
        },
        {
          title: "Liên kết cộng hóa trị",
          order: 2,
          content: `## Liên kết cộng hóa trị

### 1. Khái niệm
Liên kết cộng hóa trị được hình thành bởi **một hoặc nhiều cặp electron dùng chung** giữa hai nguyên tử.

Thường xảy ra giữa: phi kim + phi kim, hoặc kim loại + phi kim (Δχ < 1,7)

### 2. Các loại liên kết cộng hóa trị

| Loại | Số cặp e chung | Ví dụ |
|------|----------------|-------|
| Đơn (—) | 1 | H–H, H–Cl, H₂O |
| Đôi (=) | 2 | O=O (O₂), C=O (CO₂) |
| Ba (≡) | 3 | N≡N (N₂), C≡O (CO) |

### 3. Công thức Lewis (Cấu trúc chấm Lewis)
Biểu diễn các cặp e liên kết và e tự do.

**H₂O:**
- O có 6e hóa trị, cần 2 liên kết
- H–O–H với 2 cặp e tự do trên O
- Góc liên kết H–O–H ≈ 104,5°

**NH₃:**
- N có 5e hóa trị, tạo 3 liên kết N–H
- Còn 1 cặp e tự do trên N
- Góc H–N–H ≈ 107°

### 4. Liên kết cộng hóa trị phân cực và không phân cực
- **Không phân cực**: giữa 2 nguyên tử **cùng loại** (Cl₂, H₂, O₂)
- **Có phân cực**: giữa 2 nguyên tử **khác loại** (HCl, H₂O, NH₃)

### 5. Liên kết cho – nhận (dative bond)
Một nguyên tử cung cấp cả 2e dùng chung.
Ví dụ: NH₃ + H⁺ → NH₄⁺ (N cho cặp e vào H⁺)`,
        },
      ],
      quiz: {
        title: "Quiz 3 – Liên kết hóa học",
        questions: [
          {
            text: "Liên kết nào hình thành giữa Na và Cl trong NaCl?",
            options: JSON.stringify(["Liên kết cộng hóa trị không phân cực", "Liên kết cộng hóa trị phân cực", "Liên kết ion", "Liên kết kim loại"]),
            answer: "2",
          },
          {
            text: "Phân tử N₂ có liên kết:",
            options: JSON.stringify(["Đơn (1 cặp e)", "Đôi (2 cặp e)", "Ba (3 cặp e)", "Ion"]),
            answer: "2",
          },
          {
            text: "Hiệu độ âm điện Δχ = 1,9. Liên kết giữa hai nguyên tử này thuộc loại:",
            options: JSON.stringify(["Cộng hóa trị không phân cực", "Cộng hóa trị phân cực", "Ion", "Kim loại"]),
            answer: "2",
          },
          {
            text: "Trong phân tử H₂O, nguyên tử O có bao nhiêu cặp electron tự do?",
            options: JSON.stringify(["0", "1", "2", "3"]),
            answer: "2",
          },
          {
            text: "Đặc điểm nào KHÔNG đúng với hợp chất ion?",
            options: JSON.stringify([
              "Nhiệt độ nóng chảy cao",
              "Tan trong nước",
              "Dẫn điện ở trạng thái rắn",
              "Dẫn điện khi nóng chảy",
            ]),
            answer: "2",
          },
        ],
      },
    },
    {
      title: "Chương 4: Phản ứng oxi hóa – khử",
      order: 4,
      lessons: [
        {
          title: "Số oxi hóa và quy tắc xác định",
          order: 7,
          content: `## Số oxi hóa

### 1. Khái niệm
**Số oxi hóa** là điện tích giả định của nguyên tử nếu tất cả electron liên kết được chuyển hoàn toàn sang nguyên tử có độ âm điện lớn hơn.

### 2. Quy tắc xác định số oxi hóa
- **H**: +1 (trừ trong hidrua kim loại: NaH → H là −1)
- **O**: −2 (trừ trong OF₂: O là +2; H₂O₂: O là −1)
- **Kim loại nhóm IA**: luôn +1; nhóm IIA: luôn +2
- **Đơn chất**: số oxi hóa = 0
- **Tổng số oxi hóa trong hợp chất trung hòa = 0**

### 3. Ví dụ tính số oxi hóa
> Trong H₂SO₄: H là +1; O là −2; gọi S là x
> 2(+1) + x + 4(−2) = 0 → x = +6 → **S có số oxi hóa +6**

> Trong KMnO₄: K là +1; O là −2; gọi Mn là x
> (+1) + x + 4(−2) = 0 → x = **+7**`,
        },
        {
          title: "Phản ứng oxi hóa – khử và cân bằng",
          order: 8,
          content: `## Phản ứng oxi hóa – khử

### 1. Định nghĩa
- **Chất khử**: chất nhường electron (bị oxi hóa, số oxi hóa tăng)
- **Chất oxi hóa**: chất nhận electron (bị khử, số oxi hóa giảm)

> 2Mg + O₂ → 2MgO
> Mg: 0 → +2 (chất khử); O₂: 0 → −2 (chất oxi hóa)

### 2. Cân bằng phương trình oxi hóa – khử (thăng bằng electron)

**Các bước:**
1. Xác định số oxi hóa thay đổi
2. Viết quá trình nhường/nhận electron
3. Nhân hệ số sao cho electron nhường = electron nhận
4. Đặt hệ số vào phương trình, cân bằng H⁺ và H₂O

> Fe + 4HNO₃(loãng) → Fe(NO₃)₃ + NO↑ + 2H₂O
> Fe: 0→+3 (nhường 3e); N: +5→+2 (nhận 3e) → tỉ lệ 1:1

### 3. Phân loại theo chiều phản ứng
- Phản ứng dị li, tự oxi hóa – khử
- Phản ứng oxi hóa – khử nội phân tử`,
        },
        {
          title: "Ứng dụng phản ứng oxi hóa – khử trong thực tế",
          order: 9,
          content: `## Ứng dụng của phản ứng oxi hóa – khử

### 1. Pin điện và acquy
- Pin Volta: Zn (cực âm) – H₂SO₄ – Cu (cực dương)
- Phản ứng: Zn → Zn²⁺ + 2e⁻ (cực âm); 2H⁺ + 2e⁻ → H₂ (cực dương)
- Acquy chì: có thể sạc lại nhờ phản ứng thuận nghịch

### 2. Ăn mòn kim loại
- **Ăn mòn hóa học**: kim loại tác dụng trực tiếp với chất ăn mòn
- **Ăn mòn điện hóa**: tạo thành pin điện cực nhỏ, phổ biến hơn
- Ví dụ: Fe trong không khí ẩm → gỉ sét (Fe₂O₃·nH₂O)

### 3. Luyện kim và điện phân
- Luyện sắt: C khử Fe₂O₃ trong lò cao
- Điện phân Al₂O₃ nóng chảy → Al tinh khiết
- Mạ điện: bảo vệ và trang trí kim loại

### 4. Chất tẩy trắng, khử trùng
- Cl₂, Ca(OCl)₂ (clorua vôi): chất oxi hóa mạnh dùng khử trùng nước, tẩy vải`,
        },
      ],
      quiz: {
        title: "Quiz 4 – Phản ứng oxi hóa – khử",
        questions: [
          {
            text: "Trong hợp chất H₂SO₄, số oxi hóa của S là:",
            options: JSON.stringify(["+4", "+6", "+2", "−2"]),
            answer: "1",
          },
          {
            text: "Trong phản ứng oxi hóa – khử, chất khử là chất:",
            options: JSON.stringify(["nhận electron", "nhường electron", "không thay đổi số oxi hóa", "bị khử"]),
            answer: "1",
          },
          {
            text: "Phản ứng nào sau đây là phản ứng oxi hóa – khử?",
            options: JSON.stringify(["CaCO₃ → CaO + CO₂", "NaOH + HCl → NaCl + H₂O", "2Mg + O₂ → 2MgO", "BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl"]),
            answer: "2",
          },
          {
            text: "Trong phản ứng Fe + CuSO₄ → FeSO₄ + Cu, chất oxi hóa là:",
            options: JSON.stringify(["Fe", "FeSO₄", "CuSO₄", "Cu"]),
            answer: "2",
          },
          {
            text: "Ăn mòn điện hóa xảy ra khi:",
            options: JSON.stringify([
              "Kim loại tiếp xúc trực tiếp với axit",
              "Hai kim loại khác nhau cùng tiếp xúc với dung dịch điện ly",
              "Kim loại bị đun nóng trong không khí",
              "Kim loại tác dụng với phi kim",
            ]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chương 5: Năng lượng hóa học và Tốc độ phản ứng",
      order: 5,
      lessons: [
        {
          title: "Năng lượng hóa học – Enthalpy phản ứng",
          order: 10,
          content: `## Năng lượng hóa học

### 1. Phản ứng tỏa nhiệt và thu nhiệt
- **Tỏa nhiệt** (exothermic): hệ giải phóng nhiệt ra môi trường; ΔH < 0
- **Thu nhiệt** (endothermic): hệ hấp thụ nhiệt từ môi trường; ΔH > 0

### 2. Enthalpy phản ứng (ΔH)
ΔH = Tổng enthalpy sản phẩm − Tổng enthalpy chất đầu
> ΔH = ΣH(sp) − ΣH(cđ)

**Ví dụ:** C(s) + O₂(g) → CO₂(g); ΔH = −393,5 kJ/mol (tỏa nhiệt)

### 3. Nhiệt tạo thành chuẩn (ΔfH°)
Enthalpy tạo thành 1 mol hợp chất từ các đơn chất bền ở điều kiện chuẩn (25°C, 1 bar).

### 4. Định luật Hess
Enthalpy phản ứng không phụ thuộc con đường phản ứng, chỉ phụ thuộc trạng thái đầu và cuối.

> ΔH_phản ứng = ΣΔfH°(sp) − ΣΔfH°(cđ)`,
        },
        {
          title: "Tốc độ phản ứng hóa học",
          order: 11,
          content: `## Tốc độ phản ứng

### 1. Khái niệm và biểu thức
Tốc độ phản ứng v đo bằng sự thay đổi nồng độ chất phản ứng hoặc sản phẩm theo thời gian:

> v = −Δ[A]/Δt = +Δ[B]/Δt (mol/L·s)

### 2. Các yếu tố ảnh hưởng

| Yếu tố | Ảnh hưởng |
|--------|-----------|
| Nồng độ ↑ | Tốc độ ↑ (thêm va chạm hiệu quả) |
| Nhiệt độ ↑ 10°C | Tốc độ tăng 2–4 lần |
| Diện tích bề mặt ↑ | Tốc độ ↑ (chất rắn nghiền nhỏ) |
| Áp suất ↑ (khí) | Tốc độ ↑ |
| Chất xúc tác | Tốc độ ↑, không bị tiêu hao |

### 3. Biểu thức tốc độ
v = k[A]^m[B]^n
- k: hằng số tốc độ (phụ thuộc nhiệt độ)
- m, n: bậc phản ứng theo từng chất`,
        },
        {
          title: "Cân bằng hóa học",
          order: 12,
          content: `## Cân bằng hóa học

### 1. Phản ứng thuận nghịch và cân bằng
Phản ứng thuận nghịch xảy ra đồng thời theo hai chiều. Trạng thái cân bằng: v_thuận = v_nghịch.

### 2. Hằng số cân bằng Kc
Với phản ứng: aA + bB ⇌ cC + dD

> Kc = [C]^c[D]^d / [A]^a[B]^b

- Kc lớn → cân bằng nghiêng về phía sản phẩm
- Kc nhỏ → cân bằng nghiêng về phía chất đầu
- Kc chỉ phụ thuộc nhiệt độ

### 3. Nguyên lý Le Chatelier
Khi hệ cân bằng bị phá vỡ bởi tác động bên ngoài, cân bằng sẽ chuyển dịch theo chiều **chống lại** sự thay đổi đó.

| Tác động | Chiều chuyển dịch |
|----------|-------------------|
| Tăng nồng độ chất đầu | Thuận (→) |
| Tăng nhiệt độ | Chiều thu nhiệt |
| Tăng áp suất | Chiều giảm số mol khí |
| Thêm xúc tác | Không dịch chuyển (đạt cân bằng nhanh hơn) |`,
        },
      ],
      quiz: {
        title: "Quiz 5 – Năng lượng và Tốc độ phản ứng",
        questions: [
          {
            text: "Phản ứng có ΔH < 0 là phản ứng:",
            options: JSON.stringify(["Thu nhiệt", "Tỏa nhiệt", "Không đổi nhiệt độ", "Cân bằng"]),
            answer: "1",
          },
          {
            text: "Yếu tố nào sau đây KHÔNG ảnh hưởng đến tốc độ phản ứng?",
            options: JSON.stringify(["Nồng độ", "Nhiệt độ", "Màu sắc dung dịch", "Chất xúc tác"]),
            answer: "2",
          },
          {
            text: "Khi tăng nhiệt độ thêm 10°C, tốc độ phản ứng thường:",
            options: JSON.stringify(["Không đổi", "Tăng 2–4 lần", "Giảm một nửa", "Tăng 10 lần"]),
            answer: "1",
          },
          {
            text: "Hằng số cân bằng Kc phụ thuộc vào:",
            options: JSON.stringify(["Nồng độ ban đầu", "Áp suất", "Nhiệt độ", "Chất xúc tác"]),
            answer: "2",
          },
          {
            text: "Theo nguyên lý Le Chatelier, khi tăng áp suất, cân bằng dịch chuyển về chiều:",
            options: JSON.stringify([
              "Tăng số mol khí",
              "Giảm số mol khí",
              "Thu nhiệt",
              "Không thay đổi",
            ]),
            answer: "1",
          },
        ],
      },
    },
  ],
};
