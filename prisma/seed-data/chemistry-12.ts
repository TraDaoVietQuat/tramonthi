import { CourseData } from "./types";

export const CHEMISTRY_12_COURSE: CourseData = {
  title: "Hóa học 12",
  slug: "hoa-hoc-12",
  subject: "chemistry",
  grade: "12",
  description: "Este–Carbohydrate, Amin–Protein và Kim loại – chương trình Hóa học 12, bám sát cấu trúc đề thi THPT QG.",
  published: true,
  modules: [
    {
      title: "Este – Lipid – Carbohydrate",
      order: 1,
      lessons: [
        {
          title: "Este và phản ứng thủy phân – xà phòng hóa",
          order: 1,
          content: `## Este

### Định nghĩa và công thức
Este là sản phẩm thay thế nhóm −OH của axit bằng nhóm −OR:
> **RCOOR'** (R: gốc axit, R': gốc ancol)

**Danh pháp:** Tên gốc R' + tên anion axit (đổi đuôi -ic thành -at)
- CH₃COOC₂H₅: **ethyl acetate** (etyl axetat)
- HCOOCH₃: **methyl formate** (metyl fomat)

### Tính chất vật lý
- Este thường là **chất lỏng**, mùi thơm đặc trưng (hoa quả)
- Ít tan trong nước, tan trong dung môi hữu cơ

### Điều chế (ester hóa Fischer)
> **RCOOH + R'OH ⇌ RCOOR' + H₂O** (H₂SO₄ đặc, t°)

### Phản ứng thủy phân
**Môi trường axit (thuận nghịch):**
RCOOR' + H₂O ⇌ RCOOH + R'OH

**Môi trường kiềm (xà phòng hóa – một chiều):**
> **RCOOR' + NaOH → RCOONa + R'OH**

**Ví dụ:**
- CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH
- (RCOO)₃C₃H₅ (mỡ) + 3NaOH → 3RCOONa (xà phòng) + C₃H₅(OH)₃ (glycerol)

### Este đặc biệt – Vinyl este
CH₃COOCH=CH₂ + NaOH → CH₃COONa + CH₃CHO
(không tạo ra ancol vinyl – không bền, chuyển thành aldehyde)`,
        },
        {
          title: "Glucozo – Saccarozo – Tinh bột – Cellulose",
          order: 2,
          content: `## Glucozo (C₆H₁₂O₆)

### Cấu trúc và tính chất
- Dạng mạch hở: CH₂OH−(CHOH)₄−CHO (aldehyde + 5 nhóm OH)
- Dạng mạch vòng: α-D-glucose (phổ biến hơn)

### Phản ứng đặc trưng
**Tráng gương (Fehling/Tollens):**
C₆H₁₂O₆ + 2AgNO₃ + 3NH₃ + H₂O → C₆H₁₂O₇ + 2Ag↓ + 2NH₄NO₃

**Lên men:**
C₆H₁₂O₆ →(xt, 30°C) 2C₂H₅OH + 2CO₂

---

## Fructozo (C₆H₁₂O₆ – đồng phân glucozo)
- Cấu trúc keto, vị ngọt hơn glucozo
- Cũng tráng gương được (chuyển thành dạng aldehyde trong môi trường bazơ)

---

## Saccarozo (C₁₂H₂₂O₁₁)
- **Disaccharide:** glucozo + fructozo
- **Không** tráng gương (không có nhóm CHO tự do)
- Thủy phân: C₁₂H₂₂O₁₁ + H₂O →(H⁺, t°) C₆H₁₂O₆ + C₆H₁₂O₆

---

## Tinh bột (C₆H₁₀O₅)ₙ
- Polymer của α-glucozo (liên kết α-1,4 và α-1,6)
- **Nhận biết:** dung dịch tinh bột + I₂ → màu **xanh tím**
- Thủy phân: (C₆H₁₀O₅)ₙ + nH₂O →(H⁺/amylase) nC₆H₁₂O₆

---

## Cellulose (C₆H₁₀O₅)ₙ
- Polymer của β-glucozo (liên kết β-1,4)
- **Không tan** trong nước, tan trong Cu(NH₃)₄(OH)₂ (Schweitzer)
- Phản ứng với axit: [C₆H₇O₂(OH)₃]ₙ + 3nHNO₃ → [C₆H₇O₂(ONO₂)₃]ₙ + 3nH₂O (cellulose trinitrate – thuốc súng không khói)`,
        },
      ],
      quiz: {
        title: "Quiz: Este và Carbohydrate",
        questions: [
          {
            text: "Thủy phân este CH₃COOC₂H₅ trong NaOH thu được muối và ancol. Muối đó là:",
            options: JSON.stringify(["CH₃ONa", "C₂H₅ONa", "CH₃COONa", "HCOONa"]),
            answer: "2",
          },
          {
            text: "Glucozo có thể tham gia phản ứng tráng gương vì:",
            options: JSON.stringify([
              "Có nhiều nhóm –OH",
              "Có nhóm aldehyde –CHO",
              "Là chất khử mạnh",
              "Tan nhiều trong nước",
            ]),
            answer: "1",
          },
          {
            text: "Chất nào sau đây KHÔNG làm mất màu dung dịch AgNO₃/NH₃?",
            options: JSON.stringify(["Glucozo", "Fructozo", "Saccarozo", "Formaldehyde (HCHO)"]),
            answer: "2",
          },
          {
            text: "Nhận biết hồ tinh bột bằng thuốc thử:",
            options: JSON.stringify(["AgNO₃/NH₃", "Dung dịch Br₂", "Dung dịch I₂", "Cu(OH)₂"]),
            answer: "2",
          },
          {
            text: "Đốt cháy hoàn toàn 0,1 mol glucozo (C₆H₁₂O₆). Thể tích CO₂ (đktc) thu được là:",
            options: JSON.stringify(["13,44 L", "6,72 L", "4,48 L", "22,4 L"]),
            answer: "0",
          },
        ],
      },
    },
    {
      title: "Amin – Amino acid – Protein – Polyme",
      order: 2,
      lessons: [
        {
          title: "Amin – Cấu tạo và tính chất",
          order: 3,
          content: `## Amin

### Định nghĩa và phân loại
Amin là dẫn xuất của NH₃ khi thay H bằng gốc hydrocarbon.

| Bậc | Ví dụ | Tên |
|-----|-------|-----|
| Bậc 1 (RNH₂) | C₂H₅NH₂ | Ethylamine |
| Bậc 2 (R₂NH) | (CH₃)₂NH | Dimethylamine |
| Bậc 3 (R₃N) | (CH₃)₃N | Trimethylamine |
| Thơm | C₆H₅NH₂ | Aniline |

### Tính chất vật lý
- Methylamine, ethylamine: khí, mùi khai
- Aniline: lỏng, màu vàng nâu, độc

### Tính bazơ
> **RNH₂ + H₂O ⇌ RNH₃⁺ + OH⁻**

**Độ mạnh bazơ:** Alkylamine > NH₃ > Aniline
(Nhóm alkyl đẩy e → tăng mật độ e tại N → tăng tính bazơ)

### Phản ứng với axit
- C₂H₅NH₂ + HCl → C₂H₅NH₃Cl (ethylammonium chloride)
- C₆H₅NH₂ + HCl → C₆H₅NH₃Cl (aniline hydrochloride)

### Phản ứng đặc trưng của aniline
**Tác dụng với Br₂:**
C₆H₅NH₂ + 3Br₂(aq) → C₆H₂Br₃NH₂↓ + 3HBr
(kết tủa trắng 2,4,6-tribromoaniline – nhận biết aniline)`,
        },
        {
          title: "Amino acid – Peptide – Protein",
          order: 4,
          content: `## Amino acid

### Cấu tạo
Phân tử chứa đồng thời **nhóm amino (–NH₂)** và **nhóm carboxyl (–COOH)**:
> H₂N–CH(R)–COOH

**α-amino acid thường gặp:**
- Glycine (Gly): H₂N–CH₂–COOH (R = H)
- Alanine (Ala): H₂N–CH(CH₃)–COOH
- Glutamic acid (Glu): H₂N–CH(CH₂CH₂COOH)–COOH (vị umami)
- Lysine (Lys): H₂N–(CH₂)₄–CH(NH₂)–COOH (2 nhóm NH₂)

### Tính lưỡng tính
- Tác dụng với NaOH (tính axit): H₂N–R–COOH + NaOH → H₂N–R–COONa + H₂O
- Tác dụng với HCl (tính bazơ): H₂N–R–COOH + HCl → ClH₃N–R–COOH

### Điều chế peptide
α-amino acid kết hợp với nhau qua **liên kết peptide (–CO–NH–)**:
H₂N–CH(R₁)–CO–**NH**–CH(R₂)–COOH (dipeptide)

---

## Protein

### Cấu trúc
- Polymer của α-amino acid, chuỗi rất dài
- Cấu trúc bậc 1 (trình tự), bậc 2 (cuộn), bậc 3, bậc 4

### Tính chất
- **Thủy phân:** Protein + H₂O →(H⁺ hoặc enzyme) α-amino acid
- **Biến tính:** nhiệt độ cao, axit/bazơ, muối kim loại nặng
- **Phản ứng màu biuret:** protein + Cu(OH)₂ → màu **tím** (nhận biết protein)

---

## Polyme

| Polyme | Monomer | Phương pháp |
|--------|---------|-------------|
| PE (polyethylene) | CH₂=CH₂ | Trùng hợp |
| PVC | CH₂=CHCl | Trùng hợp |
| Cao su thiên nhiên | Isoprene (C₅H₈) | Trùng hợp |
| Nylon-6,6 | HO–OC(CH₂)₄CO–OH + H₂N(CH₂)₆NH₂ | Trùng ngưng |`,
        },
      ],
      quiz: {
        title: "Quiz: Amin và Protein",
        questions: [
          {
            text: "Aniline (C₆H₅NH₂) tác dụng với dung dịch Br₂ tạo:",
            options: JSON.stringify([
              "Dung dịch không màu",
              "Kết tủa trắng 2,4,6-tribromoaniline",
              "Kết tủa đen",
              "Khí thoát ra",
            ]),
            answer: "1",
          },
          {
            text: "Amino acid nào có hai nhóm –COOH?",
            options: JSON.stringify(["Glycine", "Alanine", "Glutamic acid", "Lysine"]),
            answer: "2",
          },
          {
            text: "Phản ứng nào dùng để nhận biết protein?",
            options: JSON.stringify([
              "Tráng gương",
              "Phản ứng màu biuret với Cu(OH)₂ → màu tím",
              "Tác dụng với I₂",
              "Phản ứng với Br₂",
            ]),
            answer: "1",
          },
          {
            text: "Tính bazơ của các amin theo thứ tự giảm dần:",
            options: JSON.stringify([
              "Aniline > NH₃ > CH₃NH₂",
              "CH₃NH₂ > NH₃ > Aniline",
              "NH₃ > CH₃NH₂ > Aniline",
              "Aniline > CH₃NH₂ > NH₃",
            ]),
            answer: "1",
          },
          {
            text: "Polyme nào được điều chế bằng phản ứng trùng ngưng?",
            options: JSON.stringify(["PE", "PVC", "Nylon-6,6", "Cao su thiên nhiên"]),
            answer: "2",
          },
        ],
      },
    },
    {
      title: "Kim loại và Điện hóa",
      order: 3,
      lessons: [
        {
          title: "Dãy điện hóa và tính chất kim loại",
          order: 5,
          content: `## Tính chất chung của kim loại

### Tính chất hóa học cơ bản
Kim loại có tính **khử** (nhường electron):
> M → Mⁿ⁺ + n.e⁻

1. **Tác dụng với phi kim:** 2Fe + 3Cl₂ → 2FeCl₃
2. **Tác dụng với axit HCl, H₂SO₄ loãng:** Fe + H₂SO₄ → FeSO₄ + H₂↑
3. **Tác dụng với H₂O:** Na + H₂O → NaOH + ½H₂↑ (kim loại mạnh)
4. **Tác dụng với dung dịch muối:** Fe + CuSO₄ → FeSO₄ + Cu↓

---

## Dãy điện hóa (dãy hoạt động hóa học)

K, Na, Mg, Al, Zn, Fe, Ni, Sn, Pb, **H**, Cu, Ag, Au

- Càng về **trái**: kim loại càng mạnh, khử mạnh hơn
- Càng về **phải**: ion kim loại có tính oxi hóa mạnh hơn
- Kim loại đứng trước H đẩy được H₂ ra khỏi axit loãng

### Quy tắc α (alpha)
Kim loại đứng trước trong dãy điện hóa đẩy kim loại đứng sau ra khỏi dung dịch muối:
Fe + CuSO₄ → FeSO₄ + Cu↓ (Fe đứng trước Cu)

---

## Kim loại quan trọng

**Na (Natri):** 2Na + 2H₂O → 2NaOH + H₂↑
**Ca (Canxi):** Ca + 2H₂O → Ca(OH)₂ + H₂↑
**Al (Nhôm):**
- Al + NaOH + H₂O → NaAlO₂ + 3/2 H₂↑ (tan trong kiềm)
- Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O (amphoteric oxide)

**Fe (Sắt):**
- Fe + 2HCl → FeCl₂ + H₂↑ (tạo Fe²⁺ với axit loãng)
- Fe + 4HNO₃(loãng) → Fe(NO₃)₃ + NO + 2H₂O (tạo Fe³⁺ với axit oxi hóa)
- Fe bị thụ động trong HNO₃ đặc nguội, H₂SO₄ đặc nguội`,
        },
        {
          title: "Điện phân – Ăn mòn điện hóa",
          order: 6,
          content: `## Điện phân

### Điện phân nóng chảy
Dùng để điều chế kim loại mạnh (Na, Mg, Al):
> 2Al₂O₃ →(điện phân nc) 4Al + 3O₂↑ (sản xuất nhôm – quy trình Hall-Héroult)

### Điện phân dung dịch
**Thứ tự phóng điện tại catot (−):** Cation oxi hóa theo thứ tự dãy điện hóa (ion sau H⁺ được ưu tiên)
**Thứ tự phóng điện tại anot (+):** Cl⁻ > OH⁻ > SO₄²⁻, NO₃⁻

**Điện phân CuSO₄ (điện cực trơ):**
- Catot: Cu²⁺ + 2e⁻ → Cu↓
- Anot: H₂O → ½O₂ + 2H⁺ + 2e⁻
- Kết quả: Đồng bám vào catot, pH dung dịch giảm

**Điện phân NaCl dung dịch (màng ngăn):**
- Catot: 2H₂O + 2e⁻ → H₂↑ + 2OH⁻
- Anot: 2Cl⁻ → Cl₂↑ + 2e⁻
- Sản phẩm: H₂, Cl₂, NaOH (sản xuất công nghiệp)

**Công thức Faraday:**
> **m = (A × I × t) / (n × F)**

- m: khối lượng chất giải phóng (g)
- A: nguyên tử khối
- I: cường độ dòng điện (A)
- t: thời gian (s)
- n: số electron trao đổi
- F = 96500 C/mol

---

## Ăn mòn điện hóa

**Điều kiện:** Hai kim loại khác nhau tiếp xúc điện, trong dung dịch điện ly.

**Ví dụ:** Cặp Fe–Cu trong H₂SO₄ loãng:
- Fe (cực âm – anot): Fe → Fe²⁺ + 2e⁻ (Fe bị ăn mòn)
- Cu (cực dương – catot): 2H⁺ + 2e⁻ → H₂↑`,
        },
      ],
      quiz: {
        title: "Quiz: Kim loại và Điện hóa",
        questions: [
          {
            text: "Kim loại nào tan được trong dung dịch NaOH?",
            options: JSON.stringify(["Fe", "Cu", "Al", "Ag"]),
            answer: "2",
          },
          {
            text: "Điện phân dung dịch CuSO₄ với điện cực trơ. Tại catot xảy ra phản ứng:",
            options: JSON.stringify([
              "Cu → Cu²⁺ + 2e⁻",
              "Cu²⁺ + 2e⁻ → Cu",
              "2H₂O → O₂ + 4H⁺ + 4e⁻",
              "2H₂O + 2e⁻ → H₂ + 2OH⁻",
            ]),
            answer: "1",
          },
          {
            text: "Khối lượng Cu thoát ra khi điện phân CuSO₄ với I = 2A trong t = 9650 s là:",
            options: JSON.stringify(["3,2 g", "6,4 g", "1,6 g", "12,8 g"]),
            answer: "1",
          },
          {
            text: "Ngâm đinh sắt vào dung dịch CuSO₄. Hiện tượng xảy ra là:",
            options: JSON.stringify([
              "Không có hiện tượng gì",
              "Đinh sắt tan ra, khí H₂ thoát ra",
              "Có lớp đồng đỏ bám vào đinh sắt, màu xanh nhạt dần",
              "Dung dịch chuyển màu đỏ",
            ]),
            answer: "2",
          },
          {
            text: "Trong ăn mòn điện hóa của cặp Fe–Cu trong H₂SO₄ loãng, kim loại bị ăn mòn là:",
            options: JSON.stringify(["Cu", "Fe", "Cả hai đều bị", "Không kim loại nào bị"]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chương 4: Đại cương kim loại – Dãy điện hóa",
      order: 4,
      lessons: [
        {
          title: "Tính chất chung và Dãy điện hóa kim loại",
          order: 7,
          content: `## Kim loại – Tổng quan

### 1. Vị trí và Cấu tạo
Kim loại chiếm 80% nguyên tố, chủ yếu nhóm IA, IIA, IIIA và các kim loại chuyển tiếp.
Liên kết kim loại: electron tự do "biển electron"

### 2. Tính chất vật lý
- Dẫn điện, dẫn nhiệt tốt
- Có ánh kim, dẻo, có thể kéo sợi/dát mỏng
- Kim loại dẫn điện tốt nhất: Ag > Cu > Au > Al

### 3. Tính chất hóa học – Tính khử
Mức độ khử: Li > K > Ca > Na > Mg > Al > Zn > Fe > Ni > Sn > Pb > H > Cu > Ag > Au

**Phản ứng với phi kim:** Fe + Cl₂ → FeCl₃; 2Fe + 3/2O₂ → Fe₂O₃
**Phản ứng với axit:**
- HCl, H₂SO₄ loãng: kim loại đứng trước H khử H⁺
- H₂SO₄ đặc, HNO₃: oxi hóa mạnh, Cu, Ag tan được

### 4. Dãy điện hóa – Pin điện
Dãy điện hóa (dãy Beketov) xếp theo chiều giảm tính khử:
> Li K Ca Na Mg Al Zn Fe Ni Pb H Cu Ag Au
**Chất khử mạnh (đứng trước) đẩy chất khử yếu (đứng sau) ra khỏi dung dịch muối**`,
        },
        {
          title: "Kim loại kiềm – Kiềm thổ – Nhôm",
          order: 8,
          content: `## Kim loại quan trọng

### 1. Kim loại kiềm (Nhóm IA: Na, K, Li...)
- Mềm nhất, nhẹ nhất trong kim loại
- Tác dụng mãnh liệt với nước: 2Na + 2H₂O → 2NaOH + H₂↑
- Bảo quản trong dầu hỏa (tránh ẩm và O₂)

### 2. Hợp chất Natri quan trọng
| Chất | CTPT | Tên thường | Ứng dụng |
|------|------|-----------|---------|
| NaOH | NaOH | Xút ăn da | Sản xuất xà phòng, giấy |
| Na₂CO₃ | Na₂CO₃ | Soda | Thủy tinh, thuốc tẩy |
| NaHCO₃ | NaHCO₃ | Baking soda | Bánh, thuốc dạ dày |
| NaCl | NaCl | Muối ăn | Thực phẩm, y tế |

### 3. Kim loại kiềm thổ (Nhóm IIA: Mg, Ca, Ba...)
Ca + 2H₂O → Ca(OH)₂ + H₂↑ (Ca(OH)₂: vôi tôi)
CaCO₃ ⇌ CaO + CO₂ (nung vôi)

### 4. Nhôm (Al)
- Al tan trong kiềm: 2Al + 2NaOH + 2H₂O → 2NaAlO₂ + 3H₂
- Al₂O₃: oxit lưỡng tính (tan cả axit lẫn kiềm)
- Phản ứng nhiệt nhôm: 2Al + Fe₂O₃ → Al₂O₃ + 2Fe (hàn đường ray)`,
        },
        {
          title: "Sắt – Crom – Đồng và hợp kim",
          order: 9,
          content: `## Sắt, Crom, Đồng

### 1. Sắt (Fe) – Z = 26
Có 2 hóa trị: +2 (FeO, FeCl₂) và +3 (Fe₂O₃, FeCl₃)
- Fe + HCl → FeCl₂ + H₂ (Fe → Fe²⁺, H₂SO₄ loãng)
- Fe + Cl₂ → FeCl₃ (Fe → Fe³⁺, không cho Fe²⁺)
- Fe + CuSO₄ → FeSO₄ + Cu (đẩy Cu ra)

### 2. Hợp chất của Sắt
| Oxit | Tính chất |
|------|---------|
| FeO | Oxit bazơ, khử được → Fe |
| Fe₂O₃ | Oxit bazơ, gỉ sắt, quặng hematit |
| Fe₃O₄ | Oxit hỗn hợp, từ tính mạnh, quặng manhetit |

### 3. Gang và Thép
- **Gang**: C 2–5%, giòn → đúc
- **Thép**: C < 2%, dẻo → xây dựng, cơ khí

### 4. Đồng (Cu) và Crom (Cr)
- Cu tác dụng HNO₃ loãng: 3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 2NO + 4H₂O
- Cr bền với HNO₃ đặc nguội (thụ động hóa)
- Hợp kim đồng: đồng thau (Cu+Zn), đồng thiếc (Cu+Sn)`,
        },
      ],
      quiz: {
        title: "Quiz 4 – Kim loại",
        questions: [
          {
            text: "Natri được bảo quản trong:",
            options: JSON.stringify(["Nước", "Cồn", "Dầu hỏa", "Axit"]),
            answer: "2",
          },
          {
            text: "Fe + Cl₂ tạo ra sản phẩm:",
            options: JSON.stringify(["FeCl₂", "FeCl₃", "Fe₂Cl₃", "Fe₃Cl₄"]),
            answer: "1",
          },
          {
            text: "Thép là hợp kim sắt với hàm lượng carbon:",
            options: JSON.stringify(["< 2%", "2–5%", "5–10%", "> 10%"]),
            answer: "0",
          },
          {
            text: "Nhôm tan trong dung dịch NaOH vì:",
            options: JSON.stringify([
              "Al là kim loại kiềm",
              "Al₂O₃ và Al có tính lưỡng tính",
              "NaOH là axit mạnh",
              "Nhôm tan trong mọi dung dịch",
            ]),
            answer: "1",
          },
          {
            text: "Kim loại dẫn điện tốt nhất là:",
            options: JSON.stringify(["Vàng (Au)", "Đồng (Cu)", "Bạc (Ag)", "Nhôm (Al)"]),
            answer: "2",
          },
        ],
      },
    },
    {
      title: "Chương 5: Hóa học và Môi trường",
      order: 5,
      lessons: [
        {
          title: "Ô nhiễm môi trường – Hóa học xanh",
          order: 10,
          content: `## Hóa học và Ô nhiễm môi trường

### 1. Ô nhiễm không khí
**Nguyên nhân chính:**
- SO₂ từ đốt than, dầu → mưa axit (H₂SO₄ loãng)
- NO, NO₂ từ xe cơ giới, nhà máy điện
- CO từ đốt cháy không hoàn toàn
- CO₂, CH₄, N₂O → hiệu ứng nhà kính

**Mưa axit**: SO₂ + O₃ → SO₃ → H₂SO₄; NO₂ + H₂O → HNO₃
pH < 5,6: mưa axit, ăn mòn công trình, hại sinh vật

### 2. Ô nhiễm nước
- Kim loại nặng: Hg, Pb, Cd, As (từ khai thác mỏ, thuốc trừ sâu)
- Phú dưỡng hóa (eutrophication): N, P quá nhiều → tảo nở hoa
- Chất hữu cơ khó phân hủy: DDT, dioxin

### 3. Hóa học xanh (Green Chemistry)
12 nguyên tắc: phòng ngừa > xử lý, dùng nguyên liệu tái tạo, tiết kiệm năng lượng...
Ví dụ: dung môi siêu tới hạn CO₂, phản ứng xúc tác sinh học (enzyme)`,
        },
        {
          title: "Phân bón – Thuốc trừ sâu – Hóa chất nông nghiệp",
          order: 11,
          content: `## Hóa học nông nghiệp

### 1. Phân bón hóa học
| Loại | Ví dụ | Công thức | Hàm lượng |
|------|-------|-----------|---------|
| Phân đạm | Urê | CO(NH₂)₂ | 46% N |
| Phân đạm | SA (amoni sunfat) | (NH₄)₂SO₄ | 21% N |
| Phân lân | Supe phosphate | Ca(H₂PO₄)₂ | 14–20% P₂O₅ |
| Phân kali | KCl | KCl | 60% K₂O |
| Phân hỗn hợp NPK | — | — | Cả N, P, K |

**Hàm lượng nguyên tố dinh dưỡng** được tính qua: %N, %P₂O₅, %K₂O

### 2. Thuốc trừ sâu
- Clo hữu cơ: DDT (bị cấm vì độc và bền vững)
- Lân hữu cơ: Malathion (phân hủy nhanh hơn)
- Sinh học: Bt (Bacillus thuringiensis) – an toàn

### 3. Hóa chất nguy hại và xử lý
Xử lý nước: Cl₂, O₃ (khử khuẩn); phèn (keo tụ)
Xử lý SO₂: Ca(OH)₂ + SO₂ → CaSO₃ + H₂O`,
        },
        {
          title: "Vật liệu mới – Hóa học trong công nghiệp",
          order: 12,
          content: `## Vật liệu và Công nghệ Hóa học

### 1. Vật liệu polyme nâng cao
- **Kevlar**: polyaramide, chống đạn (nhẹ hơn thép 5 lần)
- **PTFE (Teflon)**: siêu trơ, chống dính
- **Carbon fiber**: composite nhẹ bền (hàng không, xe đua)

### 2. Chất bán dẫn
- **Silicon (Si)**: chất bán dẫn chủ yếu, làm chip điện tử
- **GaAs**: bán dẫn III-V, hiệu suất cao trong LED, solar cell
- **Graphene**: dẫn điện siêu tốt, mạnh hơn thép 200 lần

### 3. Công nghệ hóa học quan trọng
| Quá trình | Sản phẩm | Tầm quan trọng |
|-----------|---------|----------------|
| Cracking | Xăng, LPG | Từ dầu mỏ nặng |
| Reforming | Xăng octane cao | Chất lượng nhiên liệu |
| Haber-Bosch | NH₃ | Phân bón, chất nổ |
| Solvay | Na₂CO₃ | Thủy tinh, giấy |

### 4. Hóa học năng lượng tương lai
- **Nhiên liệu hydrogen**: 2H₂ + O₂ → 2H₂O + năng lượng (pin nhiên liệu)
- **Biodiesel**: từ dầu thực vật/mỡ động vật
- **Ethanol sinh học**: từ cellulose, tinh bột`,
        },
      ],
      quiz: {
        title: "Quiz 5 – Hóa học và Môi trường",
        questions: [
          {
            text: "Mưa axit được tạo thành chủ yếu từ:",
            options: JSON.stringify(["CO₂", "SO₂ và NO₂", "CH₄", "NH₃"]),
            answer: "1",
          },
          {
            text: "Phân urê có công thức:",
            options: JSON.stringify(["NH₄NO₃", "(NH₄)₂SO₄", "CO(NH₂)₂", "Ca(H₂PO₄)₂"]),
            answer: "2",
          },
          {
            text: "Kevlar được dùng làm áo chống đạn vì:",
            options: JSON.stringify(["Rất nặng", "Dẫn điện tốt", "Nhẹ và bền chắc", "Rẻ tiền"]),
            answer: "2",
          },
          {
            text: "Quá trình Haber-Bosch sản xuất:",
            options: JSON.stringify(["HCl", "H₂SO₄", "NH₃", "NaOH"]),
            answer: "2",
          },
          {
            text: "DDT bị cấm sử dụng vì:",
            options: JSON.stringify(["Đắt tiền", "Kém hiệu quả", "Độc hại và bền vững trong môi trường", "Khó điều chế"]),
            answer: "2",
          },
        ],
      },
    },
  ],
};



