import { CourseData } from "./types";

export const EXAM_PREP_CHEMISTRY_COURSE: CourseData = {
  title: "Ôn thi ĐH Hóa học",
  slug: "on-thi-dh-hoa-hoc",
  subject: "exam-prep",
  grade: "12",
  description: "Ôn luyện Hóa THPT QG từ đề thi 2020–2026: Hóa vô cơ, Hóa hữu cơ, Điện phân và các dạng bài toán đặc trưng.",
  published: true,
  modules: [
    {
      title: "Hóa vô cơ tổng hợp (Đề thi 2020–2022)",
      order: 1,
      lessons: [
        {
          title: "Kim loại – Phản ứng và nhận biết (Đề thi)",
          order: 1,
          content: `## Hóa vô cơ trong đề thi THPT QG

### Dạng 1 – Bài toán kim loại tác dụng axit

> *[THPT QG 2022] Cho 2,7g Al tác dụng với HCl dư. Thể tích H₂ (đktc):*
> n(Al) = 2,7/27 = 0,1 mol
> 2Al + 6HCl → 2AlCl₃ + 3H₂
> n(H₂) = 0,1 × 3/2 = 0,15 mol
> V = 0,15 × 22,4 = **3,36 L**

> *[THPT QG 2021] Cho 5,6g Fe tác dụng HNO₃ loãng dư. Thể tích NO (đktc):*
> n(Fe) = 5,6/56 = 0,1 mol
> Fe + 4HNO₃(loãng) → Fe(NO₃)₃ + NO + 2H₂O
> n(NO) = 0,1 mol
> V = 0,1 × 22,4 = **2,24 L**

### Dạng 2 – Nhận biết các chất vô cơ

| Chất | Thuốc thử | Hiện tượng |
|------|----------|-----------|
| Fe³⁺ | NaOH | Kết tủa đỏ nâu Fe(OH)₃ |
| Cu²⁺ | NaOH | Kết tủa xanh Cu(OH)₂ |
| Al³⁺ | NaOH dư | Kết tủa trắng Al(OH)₃, sau đó tan |
| SO₄²⁻ | BaCl₂/HCl | Kết tủa trắng BaSO₄ không tan trong HCl |
| Cl⁻ | AgNO₃ | Kết tủa trắng AgCl không tan trong HNO₃ |
| NH₄⁺ | NaOH, đun | Khí khai (NH₃) làm quỳ ẩm xanh |

### Dạng 3 – Bài toán hỗn hợp kim loại

> *[THPT QG 2020] Hỗn hợp gồm a mol Al và b mol Fe tác dụng với HCl dư:*
> 2Al + 6HCl → 2AlCl₃ + 3H₂; n(H₂) từ Al = 3a/2
> Fe + 2HCl → FeCl₂ + H₂; n(H₂) từ Fe = b
> Tổng V(H₂) = (3a/2 + b) × 22,4`,
        },
        {
          title: "Điện phân và các bài toán (Đề thi)",
          order: 2,
          content: `## Điện phân trong đề thi THPT QG

### Công thức Faraday
> **m = (A × I × t) / (n × F)**

F = 96500 C/mol; n = số electron trao đổi

### Dạng bài thường gặp

> *[THPT QG 2021] Điện phân dung dịch CuSO₄ với I = 5A trong t = 3860 s.*
> q = I × t = 5 × 3860 = 19300 C = 0,2 × F
> n(Cu) = 0,2/2 × ... = q/(n×F) = 19300/(2×96500) = 0,1 mol
> m(Cu) = 0,1 × 64 = **6,4 g**

> *[THPT QG 2022] Điện phân 100 mL dung dịch AgNO₃ 0,2M với điện cực trơ. Sau thời gian:*
> n(Ag⁺) ban đầu = 0,1 × 0,2 = 0,02 mol
> Catot: Ag⁺ + e⁻ → Ag; m(Ag) = 0,02 × 108 = **2,16 g**

---

## Bài toán CO₂ + kiềm (thường gặp)

> *[THPT QG 2020] Hấp thụ 0,2 mol CO₂ vào 300 mL dung dịch NaOH 1M:*
> n(NaOH) = 0,3 mol; n(CO₂) = 0,2 mol
> T = n(NaOH)/n(CO₂) = 0,3/0,2 = 1,5

| T | Sản phẩm |
|---|---------|
| T ≤ 1 | Chỉ tạo NaHCO₃ |
| 1 < T < 2 | Hỗn hợp Na₂CO₃ và NaHCO₃ |
| T ≥ 2 | Chỉ tạo Na₂CO₃ |

T = 1,5 → hỗn hợp: **n(Na₂CO₃) và n(NaHCO₃)**
Giải: n(Na₂CO₃) = x; n(NaHCO₃) = y
x + y = 0,2; 2x + y = 0,3 → x = 0,1; y = 0,1`,
        },
      ],
      quiz: {
        title: "Quiz: Hóa vô cơ (Đề thi THPT QG)",
        questions: [
          {
            text: "[THPT QG 2022] Cho 5,4g Al tác dụng với dung dịch HCl dư. Thể tích H₂ (đktc) thu được là:",
            options: JSON.stringify(["3,36 L", "6,72 L", "2,24 L", "4,48 L"]),
            answer: "1",
          },
          {
            text: "[THPT QG 2021] Điện phân CuSO₄ với I = 2A trong 9650 s. Khối lượng Cu bám catot:",
            options: JSON.stringify(["3,2 g", "6,4 g", "1,6 g", "12,8 g"]),
            answer: "1",
          },
          {
            text: "[THPT QG 2020] Sục 0,3 mol CO₂ vào 200 mL NaOH 2M. Sản phẩm tạo thành:",
            options: JSON.stringify([
              "Chỉ NaHCO₃",
              "Chỉ Na₂CO₃",
              "Hỗn hợp Na₂CO₃ và NaHCO₃",
              "Na₂CO₃ và NaOH dư",
            ]),
            answer: "1",
          },
          {
            text: "[THPT QG 2021] Cho dung dịch chứa FeSO₄ và CuSO₄. Thêm NaOH dư vào thu được kết tủa. Nung kết tủa trong không khí thu được:",
            options: JSON.stringify(["Fe₂O₃ và CuO", "FeO và CuO", "Fe₃O₄ và Cu", "Fe và Cu"]),
            answer: "0",
          },
          {
            text: "[THPT QG 2022] Kim loại nào sau đây không tan trong dung dịch H₂SO₄ loãng?",
            options: JSON.stringify(["Fe", "Zn", "Cu", "Al"]),
            answer: "2",
          },
        ],
      },
    },
    {
      title: "Hóa hữu cơ tổng hợp (Đề thi 2021–2024)",
      order: 2,
      lessons: [
        {
          title: "Este – Glucozo – Protein trong đề thi",
          order: 3,
          content: `## Hóa hữu cơ trong đề thi THPT QG

### Dạng 1 – Phản ứng xà phòng hóa

> *[THPT QG 2021] Đun 22,2g hỗn hợp este đơn chức (RCOOR') với dung dịch NaOH 1M.*
> Este + NaOH → RCOONa + R'OH

> *CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH*
> *Phân tử khối CH₃COOC₂H₅ = 88; n = 22,2/88 = 0,25 mol*
> *n(NaOH cần) = 0,25 mol*

### Dạng 2 – Đốt cháy hợp chất hữu cơ

> *[THPT QG 2022] Đốt cháy hoàn toàn 0,1 mol glucozo (C₆H₁₂O₆):*
> C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O
> n(CO₂) = 0,6 mol → V(CO₂) = 0,6 × 22,4 = **13,44 L** (đktc)
> n(H₂O) = 0,6 mol → m(H₂O) = **10,8 g**

> *[THPT QG 2021] Đốt cháy 0,2 mol amin no đơn chức: C₂H₅NH₂*
> C₂H₅NH₂ + 21/4 O₂ → 2CO₂ + 7/2 H₂O + ½N₂
> n(CO₂) = 0,2 × 2 = 0,4 mol → V = **8,96 L**

### Dạng 3 – Phản ứng tráng gương (Glucozo)

> *0,1 mol glucozo tráng gương với AgNO₃/NH₃. Khối lượng Ag thu được:*
> C₆H₁₂O₆ + 2AgNO₃ + 3NH₃ + H₂O → C₆H₁₂O₇ + 2Ag + 2NH₄NO₃
> n(Ag) = 2 × 0,1 = 0,2 mol → m(Ag) = 0,2 × 108 = **21,6 g**`,
        },
        {
          title: "Polymer – Amin – Peptide – Bài toán tổng hợp",
          order: 4,
          content: `## Bài toán Amin và Amino acid (Đề thi THPT QG)

### Dạng 1 – Amin tác dụng với HCl

> *[THPT QG 2022] 0,1 mol methylamine (CH₃NH₂) tác dụng với HCl dư:*
> CH₃NH₂ + HCl → CH₃NH₃Cl
> n(CH₃NH₃Cl) = 0,1 mol; m = 0,1 × 67,5 = **6,75 g**

### Dạng 2 – Amino acid lưỡng tính

> *[THPT QG 2021] 0,2 mol glycine (H₂N-CH₂-COOH) tác dụng NaOH dư:*
> H₂N-CH₂-COOH + NaOH → H₂N-CH₂-COONa + H₂O
> n(NaOH) = 0,2 mol; n(muối) = 0,2 mol
> m(muối) = 0,2 × 97 = **19,4 g**

---

## Phân biệt các loại polyme

| Polyme | Monomer | Cách điều chế | Đặc điểm |
|--------|---------|--------------|---------|
| PE | CH₂=CH₂ | Trùng hợp | Nhựa nhiệt dẻo |
| PVC | CH₂=CHCl | Trùng hợp | Cách điện |
| Nylon-6,6 | Hexamethylene diamine + Adipic acid | Trùng ngưng | Sợi dai |
| Tơ tằm | Amino acid | Tự nhiên | Protein |
| Cao su lưu hóa | Isoprene | Trùng hợp | Đàn hồi cao |

---

## Bài toán đốt cháy xác định CTPT

> *[THPT QG 2023] Đốt cháy hoàn toàn 4,4g hợp chất hữu cơ A (C, H, O) thu được 8,8g CO₂ và 3,6g H₂O.*
> n(CO₂) = 0,2 mol → n(C) = 0,2 mol
> n(H₂O) = 0,2 mol → n(H) = 0,4 mol
> m(O) = 4,4 − 0,2×12 − 0,4×1 = 4,4 − 2,4 − 0,4 = **1,6 g** → n(O) = 0,1 mol
> C : H : O = 0,2 : 0,4 : 0,1 = **2 : 4 : 1** → CTTT: C₂H₄O → CTPT: (C₂H₄O)_n`,
        },
      ],
      quiz: {
        title: "Quiz: Hóa hữu cơ (Đề thi THPT QG)",
        questions: [
          {
            text: "[THPT QG 2022] Đốt cháy hoàn toàn 0,1 mol glucozo. Thể tích CO₂ (đktc) thu được là:",
            options: JSON.stringify(["6,72 L", "13,44 L", "2,24 L", "4,48 L"]),
            answer: "1",
          },
          {
            text: "[THPT QG 2021] Este CH₃COOC₂H₅ thủy phân trong NaOH. Sản phẩm là:",
            options: JSON.stringify([
              "CH₃OH và C₂H₅COONa",
              "C₂H₅OH và CH₃COONa",
              "CH₃OH và CH₃COONa",
              "C₂H₅OH và C₂H₅COONa",
            ]),
            answer: "1",
          },
          {
            text: "[THPT QG 2020] 0,1 mol glucozo tác dụng với AgNO₃/NH₃. Khối lượng Ag thu được:",
            options: JSON.stringify(["10,8 g", "21,6 g", "5,4 g", "43,2 g"]),
            answer: "1",
          },
          {
            text: "[THPT QG 2022] Polyme nào sau đây được điều chế bằng phản ứng trùng hợp?",
            options: JSON.stringify(["Nylon-6,6", "Tơ tằm", "Polyethylene (PE)", "Protein"]),
            answer: "2",
          },
          {
            text: "[THPT QG 2021] Aniline (C₆H₅NH₂) tác dụng với dung dịch Br₂ tạo ra:",
            options: JSON.stringify([
              "Dung dịch không màu",
              "Kết tủa trắng",
              "Kết tủa đỏ",
              "Khí không màu",
            ]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Bài toán tổng hợp Hóa học (Đề thi 2023–2026)",
      order: 3,
      lessons: [
        {
          title: "Bài toán hỗn hợp và pH – Đề thi 2023–2025",
          order: 5,
          content: `## Bài toán hỗn hợp thường gặp

### Dạng 1 – Bảo toàn electron

> *[THPT QG 2023] Hòa tan hỗn hợp Fe và Cu trong HNO₃ loãng dư. Biết n(Fe) = 0,1; n(Cu) = 0,1.*
> Fe → Fe³⁺ + 3e⁻; n(e) từ Fe = 0,3
> Cu → Cu²⁺ + 2e⁻; n(e) từ Cu = 0,2
> Tổng e nhường = 0,5 mol
> NO₃⁻ + 4H⁺ + 3e⁻ → NO + 2H₂O
> n(NO) = 0,5/3 × ... = **0,5/3 mol**

### Dạng 2 – pH dung dịch

> *[THPT QG 2024] Dung dịch HCl có pH = 2. Nồng độ HCl là:*
> [H⁺] = 10⁻² = 0,01 M → **C_HCl = 0,01 M**

> *[THPT QG 2023] Trộn 100 mL HCl 0,2M với 100 mL NaOH 0,1M:*
> n(HCl) = 0,02; n(NaOH) = 0,01
> HCl dư = 0,01 mol trong 200 mL → [H⁺] = 0,05 M
> pH = −log(0,05) ≈ **1,3**

---

### Dạng 3 – Bài toán nhiệt luyện

> *[THPT QG 2022] Khử Fe₂O₃ bằng CO dư:*
> Fe₂O₃ + 3CO → 2Fe + 3CO₂
> n(Fe₂O₃) = 0,1 mol → n(Fe) = 0,2 mol → m = **11,2 g**`,
        },
        {
          title: "Nhận biết và Tách chất – Đề thi 2024–2026",
          order: 6,
          content: `## Nhận biết và Tách chất

### Nhận biết hữu cơ thường gặp

| Chất | Thuốc thử | Hiện tượng |
|------|----------|-----------|
| Glucozo | AgNO₃/NH₃ | Tráng gương – Ag↓ |
| Tinh bột | Dung dịch I₂ | Màu xanh tím |
| Aniline | Br₂(aq) | Kết tủa trắng |
| Protein | Cu(OH)₂ | Màu tím (biuret) |
| Acetylene | AgNO₃/NH₃ | Kết tủa vàng C₂Ag₂ |
| Aldehyde | AgNO₃/NH₃ | Tráng gương |
| Phenol | Br₂(aq) | Kết tủa trắng |
| Axit | Quỳ tím | Quỳ đỏ |

---

### Bài toán lập CTPT qua đốt cháy

**Công thức tổng quát:**
CₓHᵧO_z + O₂ → xCO₂ + y/2 H₂O

- n(C) = n(CO₂)
- n(H) = 2n(H₂O)
- n(O) trong hc = n(O) trong hc = [m_hc − m(C) − m(H)] / 16

**Tỉ lệ C:H:O = n(C):n(H):n(O)**

---

### Dạng tính số mol hỗn hợp este

> *[THPT QG 2025] Xà phòng hóa 17,6g hỗn hợp metyl axetat và etyl axetat với NaOH:*
> CTPT: CH₃COOCH₃ (M=74), CH₃COOC₂H₅ (M=88)
> Gọi x = mol metyl axetat; y = mol etyl axetat:
> 74x + 88y = 17,6 (khối lượng)
> n(NaOH) = x + y (tỉ lệ 1:1)
> → Giải hệ phương trình để tìm x, y`,
        },
      ],
      quiz: {
        title: "Quiz: Bài toán tổng hợp Hóa học (Đề thi 2023–2026)",
        questions: [
          {
            text: "[THPT QG 2024] Dung dịch có pH = 3. Nồng độ H⁺ trong dung dịch là:",
            options: JSON.stringify(["0,3 M", "0,03 M", "0,001 M", "3 M"]),
            answer: "2",
          },
          {
            text: "[THPT QG 2023] Khử Fe₂O₃ bằng CO dư, n(Fe₂O₃) = 0,2 mol. Khối lượng Fe thu được:",
            options: JSON.stringify(["11,2 g", "22,4 g", "5,6 g", "16 g"]),
            answer: "1",
          },
          {
            text: "[THPT QG 2022] Để nhận biết glucozo trong hỗn hợp với fructozo và saccarozo, dùng:",
            options: JSON.stringify([
              "Dung dịch Br₂",
              "AgNO₃/NH₃ – chỉ saccarozo không phản ứng",
              "Dung dịch I₂",
              "Cu(OH)₂",
            ]),
            answer: "1",
          },
          {
            text: "[THPT QG 2025] Este đơn chức thủy phân bằng NaOH thu được ancol không phải phenol và muối của axit hữu cơ. Este đó là:",
            options: JSON.stringify(["Vinyl axetat", "Phenyl axetat", "Etyl axetat", "Metyl salicylate"]),
            answer: "2",
          },
          {
            text: "[THPT QG 2023] Trộn 200 mL HCl 0,2M với 300 mL NaOH 0,1M. pH dung dịch thu được:",
            options: JSON.stringify(["< 7 (axit dư)", "= 7 (trung tính)", "> 7 (bazơ dư)", "= 1"]),
            answer: "0",
          },
        ],
      },
    },
    {
      title: "Chuyên đề 4: Hóa hữu cơ tổng hợp – Kim loại nặng",
      order: 4,
      lessons: [
        {
          title: "Bài toán tổng hợp hóa hữu cơ",
          order: 7,
          content: `## Hóa hữu cơ tổng hợp – Đề thi THPT QG

### 1. Bài toán hỗn hợp este – ancol – axit
**Phương pháp quy đổi về nguyên tử C, H, O:**
Hỗn hợp → tổng mol C, H, O → phương trình đốt cháy

**Đốt cháy CₙHₘOₚ:**
> CₙHₘOₚ + (n + m/4 − p/2)O₂ → nCO₂ + (m/2)H₂O

Từ n(CO₂) và n(H₂O) → xác định loại hợp chất, n, m

### 2. Bài toán thủy phân peptide
Peptide n gốc + n−1 H₂O → n amino acid
Cần (n−1) mol NaOH nếu thủy phân trong kiềm (phụ thuộc nhóm COOH/NH₂)

### 3. Nhận biết nhanh hợp chất hữu cơ
| Chất | Thuốc thử | Hiện tượng |
|------|----------|---------|
| Glucose | AgNO₃/NH₃ | Tráng gương |
| Fructose | Cu(OH)₂ | Xanh lam → tan |
| Protein | Cu(OH)₂ | Tím (biuret) |
| Aniline | Br₂/H₂O | Trắng kết tủa |
| Aldehyde | AgNO₃/NH₃ | Tráng gương |

### 4. Bài toán polyme – Trùng hợp/Ngưng
Tính khối lượng monome từ m polyme: m_monome = m_polyme × M_monome/M_mắt xích`,
        },
        {
          title: "Bài toán Kim loại – Dãy điện hóa ứng dụng",
          order: 8,
          content: `## Kim loại – Bài toán tổng hợp đề thi

### 1. Bài toán hòa tan kim loại trong axit
**HCl, H₂SO₄ loãng** (H⁺ oxi hóa):
Fe + 2HCl → FeCl₂ + H₂ (Fe → Fe²⁺)

**HNO₃ loãng** (NO₂/NO sinh ra):
3Fe + 8HNO₃(l) → 3Fe(NO₃)₂ + 2NO + 4H₂O (Fe → Fe²⁺)
(Fe dư → FeCl₃ bị khử về FeCl₂)

**HNO₃ đặc** (NO₂ sinh ra):
Fe + 4HNO₃(đ) → Fe(NO₃)₃ + NO₂ + 2H₂O

### 2. Bài toán hỗn hợp kim loại + axit
Dùng bảo toàn electron:
> Σne cho = Σne nhận

Ví dụ: 0,3 mol Fe; 0,2 mol Cu + HNO₃
- Cu: +2 (0,4e); Fe: +2 (0,6e) nếu còn Cu; +3 (0,9e) nếu hết Cu
- Số mol HNO₃ = số mol N trong muối + số mol khí

### 3. Phương pháp tăng giảm khối lượng
Hòa tan kim loại M vào dung dịch muối M'X:
Δm = m(M bị hòa tan) − m(M' thoát ra)

### 4. Điện phân (Electrolysis)
Tại catot: ion kim loại bị khử (nhận e)
Tại anot: ion âm bị oxi hóa (cho e)
> ne = I·t/F (F = 96500 C/mol)`,
        },
        {
          title: "Đề thử tổng hợp – 20 câu Hóa học khó",
          order: 9,
          content: `## 20 dạng câu Hóa học khó (Vận dụng cao)

### Nhóm 1: Hóa hữu cơ VDC
1. Hỗn hợp peptide thủy phân → tính thành phần amino acid
2. Đốt cháy hỗn hợp ancol-este → xác định CT phân tử
3. Hỗn hợp saccharide + protein → bài toán nhiều chất
4. Polymer: tính độ trùng hợp n từ khối lượng phân tử

### Nhóm 2: Kim loại VDC
5. Fe/Cu tác dụng HNO₃ hỗn hợp loãng/đặc → mol khí
6. Hỗn hợp oxide kim loại + H₂/CO khử → xác định thành phần
7. Điện phân dung dịch muối → khối lượng kim loại, thể tích khí
8. Bài toán tăng giảm khối lượng phức tạp

### Nhóm 3: Vô cơ VDC
9. Hỗn hợp khí CO₂, SO₂ + dung dịch kiềm → tạo muối nào
10. Sục khí NH₃ vào Al³⁺, Zn²⁺, Fe³⁺ → kết tủa nào tan

### Nhóm 4: Nhận biết – Thực nghiệm
11. Nhận biết 5 lọ hóa chất không nhãn
12. Điều chế chất X từ nguyên liệu A, B qua n bước

### Chiến thuật giải bài VDC Hóa:
1. Đọc kỹ đề, xác định dữ kiện và ẩn cần tìm
2. Viết PTHH đúng (bảo toàn e, nguyên tử)
3. Lập hệ phương trình
4. Kiểm tra lại bằng bảo toàn khối lượng`,
        },
      ],
      quiz: {
        title: "Quiz 4 – Hữu cơ và Kim loại tổng hợp",
        questions: [
          {
            text: "Nhận biết protein bằng thuốc thử:",
            options: JSON.stringify(["AgNO₃/NH₃", "Br₂/H₂O", "Cu(OH)₂", "Quỳ tím"]),
            answer: "2",
          },
          {
            text: "Fe tác dụng HNO₃ loãng dư tạo muối:",
            options: JSON.stringify(["FeCl₂", "Fe(NO₃)₂", "Fe(NO₃)₃", "FeO"]),
            answer: "2",
          },
          {
            text: "Công thức tính số mol e chuyển khi điện phân: ne = I·t/F. F bằng:",
            options: JSON.stringify(["9650 C/mol", "96500 C/mol", "965 C/mol", "96,5 C/mol"]),
            answer: "1",
          },
          {
            text: "Hỗn hợp Fe và Cu tác dụng HCl, chất nào phản ứng trước?",
            options: JSON.stringify(["Cu (hoạt động hơn)", "Fe (hoạt động hơn)", "Phản ứng đồng thời", "Không phản ứng"]),
            answer: "1",
          },
          {
            text: "Thủy phân tripeptide (3 gốc amino acid) cần:",
            options: JSON.stringify(["1 mol H₂O", "2 mol H₂O", "3 mol H₂O", "4 mol H₂O"]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chuyên đề 5: Chiến lược thi và Đề thử Hóa Học",
      order: 5,
      lessons: [
        {
          title: "Cấu trúc đề thi và Kế hoạch ôn thi Hóa",
          order: 10,
          content: `## Phân tích đề thi TN THPT Hóa Học

### 1. Cấu trúc đề (40 câu – 50 phút)
| Chủ đề | Số câu | Ghi chú |
|--------|--------|---------|
| Hóa vô cơ (lớp 10–11) | 8–10 | Điện hóa, phi kim |
| Kim loại kiềm, kiềm thổ, Al | 5–6 | Lớp 12 |
| Fe, Cr, Cu và hợp chất | 5–6 | Thường 1 câu khó |
| Hóa hữu cơ (lớp 11–12) | 12–15 | Nhiều nhất |
| Polyme và vật liệu | 2–3 | Lý thuyết |

### 2. Phân bổ mức độ
- Nhận biết: 8 câu (2 điểm)
- Thông hiểu: 16 câu (4 điểm)
- Vận dụng: 12 câu (3 điểm)
- Vận dụng cao: 4 câu (1 điểm)

### 3. Chiến lược ôn tập theo tuần
| Tuần | Nội dung | Mục tiêu |
|------|---------|---------|
| 1–2 | Hữu cơ (alcohol, aldehyde, carboxylic, este) | Nắm vững PTHH |
| 3–4 | Kim loại và hợp chất | Thành thạo bài toán |
| 5 | Vô cơ: phi kim, N, S, P | Cân bằng phản ứng |
| 6 | Đề thử tổng hợp | Luyện tốc độ |`,
        },
        {
          title: "Phương pháp bảo toàn – Giải nhanh trắc nghiệm",
          order: 11,
          content: `## Phương pháp giải nhanh Hóa học

### 1. Bảo toàn khối lượng
m_chất đầu = m_chất cuối (trong mọi phản ứng)

**Ứng dụng**: Tính khối lượng dung dịch sau phản ứng
m_dd sau = m_dd ban đầu + m_chất thêm vào − m_kết tủa − m_khí

### 2. Bảo toàn nguyên tử
Số mol mỗi nguyên tố không đổi qua phản ứng
→ Không cần viết PTHH từng bước

**Ví dụ**: Hỗn hợp Fe₂O₃ + Fe₃O₄ tác dụng HCl
n(Fe trong muối) = n(Fe trong oxide)
n(H₂O tạo ra) = n(O trong oxide)

### 3. Bảo toàn electron
Σ(mol e cho) = Σ(mol e nhận)
- Kim loại M → Mⁿ⁺: cho n·mol_M electron
- H⁺ → H₂: nhận 2 e/mol H₂
- NO₃⁻ → NO: nhận 3 e/mol NO
- NO₃⁻ → NO₂: nhận 1 e/mol NO₂

### 4. Phương pháp quy đổi
Thay hỗn hợp phức tạp bằng các nguyên tử:
Hỗn hợp Fe₂O₃, FeO, Fe₃O₄, Fe → quy về Fe và O
→ n(Fe) = Σ(Fe trong mỗi chất); n(O) = Σ(O trong mỗi chất)

### 5. Kỹ thuật loại đáp án
- Nếu đề cho hỗn hợp → đáp án thường không phải số nguyên đẹp
- Kiểm tra bằng bảo toàn nguyên tố: thay đáp án ngược lại`,
        },
        {
          title: "Lỗi thường gặp và Cách khắc phục",
          order: 12,
          content: `## Lỗi phổ biến trong thi Hóa THPT

### 1. Lỗi phản ứng Fe với HNO₃
✗ Nhầm Fe → Fe³⁺ khi HNO₃ loãng có Fe dư
✓ Fe dư + Fe³⁺ → Fe²⁺: nên kiểm tra Fe/HNO₃

**Quy tắc**: Fe dư + axit có tính oxi hóa mạnh
- Nếu Fe còn dư: muối tạo ra là Fe²⁺
- Nếu HNO₃ dư hoặc vừa đủ: muối là Fe³⁺

### 2. Lỗi thủy phân este trong kiềm
✗ Quên rằng vinyl este (–COOCH=CH₂) không tạo ancol, tạo andehyde
✓ CH₃COOCH=CH₂ + NaOH → CH₃COONa + CH₃CHO

### 3. Lỗi đếm nhóm chức peptide
✗ Nhầm số mol NaOH cần thủy phân tripeptide
✓ Tripeptide (n=3): n_NaOH = n_peptide × 3 (cho 3 nhóm COOH sau thủy phân)
Nếu trong kiềm: còn phụ thuộc cấu trúc amino acid (số nhóm COOH)

### 4. Lỗi điện phân
✗ Điện phân CuSO₄ nhầm sản phẩm catot là H₂
✓ Cu²⁺ bị khử trước H⁺ tại catot: Cu²⁺ + 2e → Cu

### 5. Lỗi nhận biết chất
✗ Nhầm: Cu(OH)₂ nhận biết cả glucozo và fructozo
✓ Glucozo + Fructozo đều hòa tan Cu(OH)₂ → dùng AgNO₃/NH₃ hoặc phân biệt bằng dung dịch Br₂ (glucose làm mất màu, fructose không)`,
        },
      ],
      quiz: {
        title: "Quiz 5 – Chiến lược thi Hóa học",
        questions: [
          {
            text: "Đề thi TN THPT Hóa Học có bao nhiêu câu?",
            options: JSON.stringify(["30 câu", "40 câu", "50 câu", "60 câu"]),
            answer: "1",
          },
          {
            text: "Bảo toàn electron áp dụng khi nào?",
            options: JSON.stringify([
              "Chỉ phản ứng axit-bazơ",
              "Phản ứng oxi hóa-khử",
              "Phản ứng trùng hợp",
              "Chỉ phản ứng kết tủa",
            ]),
            answer: "1",
          },
          {
            text: "Khi Fe + HNO₃ loãng còn Fe dư, sản phẩm muối sắt là:",
            options: JSON.stringify(["Fe(NO₃)₃", "Fe(NO₃)₂", "FeO", "Fe₂O₃"]),
            answer: "1",
          },
          {
            text: "Điện phân CuSO₄(dd) ở catot tạo ra:",
            options: JSON.stringify(["H₂", "O₂", "Cu", "SO₄²⁻"]),
            answer: "2",
          },
          {
            text: "Phương pháp bảo toàn khối lượng phát biểu:",
            options: JSON.stringify([
              "Chỉ đúng với phản ứng không có kết tủa",
              "Tổng khối lượng chất trước = tổng khối lượng chất sau",
              "Chỉ đúng với phản ứng vô cơ",
              "Chỉ đúng nếu không có khí thoát ra",
            ]),
            answer: "1",
          },
        ],
      },
    },
  ],
};



