import { CourseData } from "./types";

export const CHEMISTRY_11_COURSE: CourseData = {
  title: "Hóa học 11",
  slug: "hoa-hoc-11",
  subject: "chemistry",
  grade: "11",
  description: "Cân bằng hóa học, Nitrogen–Sulfur, Đại cương hóa hữu cơ, Hydrocarbon, Dẫn xuất halogen–Alcohol–Phenol và Hợp chất carbonyl–Carboxylic acid – chương trình Hóa học 11 theo SGK Kết nối tri thức 2023.",
  published: true,
  modules: [
    {
      title: "Chương 1. Cân bằng hoá học",
      order: 1,
      lessons: [
        {
          title: "Bài 1. Khái niệm về cân bằng hoá học",
          order: 1,
          content: `## 1. Phản ứng một chiều và phản ứng thuận nghịch

- **Phản ứng một chiều:** chỉ xảy ra theo một chiều, chất sản phẩm không phản ứng lại tạo chất đầu, kí hiệu →
- **Phản ứng thuận nghịch:** xảy ra đồng thời theo hai chiều ngược nhau, kí hiệu ⇌

**Ví dụ:** N₂(g) + 3H₂(g) ⇌ 2NH₃(g)

## 2. Trạng thái cân bằng hoá học

Trong phản ứng thuận nghịch, khi **tốc độ phản ứng thuận = tốc độ phản ứng nghịch**, hệ đạt **trạng thái cân bằng hoá học**.

- Đây là **cân bằng động**: phản ứng thuận và nghịch vẫn xảy ra liên tục nhưng nồng độ các chất không đổi theo thời gian.

## 3. Hằng số cân bằng K_C

Cho phản ứng: aA(g) + bB(g) ⇌ cC(g) + dD(g)

> **K_C = [C]ᶜ[D]ᵈ / ([A]ᵃ[B]ᵇ)**

(Nồng độ chất rắn không có mặt trong biểu thức K_C)

- K_C chỉ phụ thuộc vào **nhiệt độ** và bản chất phản ứng, không phụ thuộc nồng độ đầu
- K_C >> 1: cân bằng nghiêng về phía sản phẩm
- K_C << 1: cân bằng nghiêng về phía chất đầu

## 4. Nguyên lí chuyển dịch cân bằng Le Chatelier

> Khi một hệ đang ở trạng thái cân bằng chịu tác động từ bên ngoài (nồng độ, nhiệt độ, áp suất), cân bằng sẽ chuyển dịch theo chiều **làm giảm tác động đó**.

**Ảnh hưởng của nồng độ:** tăng nồng độ chất phản ứng → cân bằng chuyển dịch thuận

**Ảnh hưởng của nhiệt độ:** phản ứng toả nhiệt (ΔH<0): tăng T → cân bằng chuyển dịch nghịch; phản ứng thu nhiệt (ΔH>0): tăng T → cân bằng chuyển dịch thuận

**Ảnh hưởng của áp suất** (chỉ với hệ khí có số mol khí hai vế khác nhau): tăng áp suất → cân bằng chuyển dịch về phía **ít mol khí hơn**

**Chất xúc tác:** làm tăng tốc độ cả hai chiều như nhau, **không làm chuyển dịch cân bằng**, chỉ giúp hệ đạt cân bằng nhanh hơn

## 5. Ý nghĩa trong sản xuất hoá học

Quy trình Haber tổng hợp NH₃: N₂ + 3H₂ ⇌ 2NH₃, ΔH = −92 kJ/mol
- Nhiệt độ 450–500°C, áp suất 150–200 atm, xúc tác Fe — cân đối giữa tốc độ phản ứng và hiệu suất cân bằng`,
        },
        {
          title: "Bài 2. Cân bằng trong dung dịch nước",
          order: 2,
          content: `## 1. Sự điện li

**Sự điện li** là quá trình phân li các chất trong nước (hoặc khi nóng chảy) tạo thành ion.

- **Chất điện li mạnh:** phân li hoàn toàn (acid mạnh, base mạnh, hầu hết muối tan) — HCl → H⁺ + Cl⁻
- **Chất điện li yếu:** phân li không hoàn toàn, tồn tại cân bằng điện li (acid yếu, base yếu) — CH₃COOH ⇌ CH₃COO⁻ + H⁺

## 2. Thuyết Brønsted–Lowry về acid–base

> **Acid** là chất cho proton (H⁺); **Base** là chất nhận proton (H⁺)

**Ví dụ:** CH₃COOH + H₂O ⇌ CH₃COO⁻ + H₃O⁺ (CH₃COOH là acid, H₂O là base)

## 3. Tích số ion của nước

Nước điện li rất yếu: H₂O ⇌ H⁺ + OH⁻

> **K_W = [H⁺][OH⁻] = 10⁻¹⁴ (ở 25°C)**

- Môi trường trung tính: [H⁺] = [OH⁻] = 10⁻⁷ M
- Môi trường acid: [H⁺] > 10⁻⁷ M
- Môi trường base: [H⁺] < 10⁻⁷ M

## 4. pH — Thang đo độ acid, base

> **pH = −log[H⁺]**

| pH | < 7 | = 7 | > 7 |
|----|-----|-----|-----|
| Môi trường | Acid | Trung tính | Base |

**Ví dụ:** [H⁺] = 10⁻³ M → pH = 3 (môi trường acid mạnh)

## 5. Chất chỉ thị acid–base

- **Quỳ tím:** đỏ trong acid (pH<7), xanh trong base (pH>7), tím trong trung tính
- **Phenolphthalein:** không màu trong acid/trung tính, hồng trong base (pH>8)

## 6. Chuẩn độ acid–base

Phương pháp xác định nồng độ một dung dịch acid (hoặc base) chưa biết bằng dung dịch base (hoặc acid) đã biết nồng độ chính xác, dựa vào phản ứng trung hoà:
> n(acid) = n(base) tại điểm tương đương (với acid, base đơn chức)`,
        },
      ],
      quiz: {
        title: "Ôn tập chương 1",
        questions: [
          {
            text: "Cho cân bằng: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH = −198 kJ. Yếu tố nào làm cân bằng chuyển dịch theo chiều thuận?",
            options: JSON.stringify(["Tăng nhiệt độ", "Giảm áp suất", "Tăng nồng độ SO₂", "Tăng nồng độ SO₃"]),
            answer: "2",
          },
          {
            text: "Hằng số cân bằng K_C của phản ứng N₂ + 3H₂ ⇌ 2NH₃ là:",
            options: JSON.stringify([
              "K_C = [NH₃]²/([N₂][H₂]³)",
              "K_C = [N₂][H₂]³/[NH₃]²",
              "K_C = [NH₃]/([N₂][H₂])",
              "K_C = 2[NH₃]/([N₂].3[H₂])",
            ]),
            answer: "0",
          },
          {
            text: "Tác động nào sau đây KHÔNG làm chuyển dịch cân bằng hoá học?",
            options: JSON.stringify(["Thay đổi nồng độ", "Thay đổi nhiệt độ", "Thêm chất xúc tác", "Thay đổi áp suất (với khí)"]),
            answer: "2",
          },
          {
            text: "Phản ứng thu nhiệt (ΔH > 0). Để tăng hiệu suất phản ứng thuận cần:",
            options: JSON.stringify(["Giảm nhiệt độ", "Tăng nhiệt độ", "Tăng lượng sản phẩm", "Giảm nồng độ chất đầu"]),
            answer: "1",
          },
          {
            text: "Phản ứng: PCl₅(g) ⇌ PCl₃(g) + Cl₂(g). Tăng áp suất, cân bằng chuyển dịch theo chiều:",
            options: JSON.stringify(["thuận", "nghịch", "không thay đổi", "phụ thuộc nhiệt độ"]),
            answer: "1",
          },
          {
            text: "Chất điện li mạnh là chất khi tan trong nước:",
            options: JSON.stringify(["Không phân li", "Phân li một phần", "Phân li hoàn toàn thành ion", "Chỉ tồn tại ở dạng phân tử"]),
            answer: "2",
          },
          {
            text: "Theo thuyết Brønsted–Lowry, acid là chất:",
            options: JSON.stringify(["Nhận proton", "Cho proton", "Nhận electron", "Cho electron"]),
            answer: "1",
          },
          {
            text: "Tích số ion của nước K_W ở 25°C có giá trị:",
            options: JSON.stringify(["10⁻⁷", "10⁻¹⁴", "10⁻¹", "1"]),
            answer: "1",
          },
          {
            text: "Dung dịch có [H⁺] = 10⁻³ M có pH bằng:",
            options: JSON.stringify(["3", "11", "7", "10"]),
            answer: "0",
          },
          {
            text: "Dung dịch có pH = 10 có môi trường:",
            options: JSON.stringify(["Acid mạnh", "Acid yếu", "Trung tính", "Base"]),
            answer: "3",
          },
          {
            text: "Quỳ tím chuyển sang màu xanh trong môi trường:",
            options: JSON.stringify(["Acid (pH < 7)", "Base (pH > 7)", "Trung tính (pH = 7)", "Không đổi màu"]),
            answer: "1",
          },
          {
            text: "Phenolphthalein chuyển sang màu hồng khi:",
            options: JSON.stringify(["pH < 7", "pH = 7", "pH > 8", "Không bao giờ đổi màu"]),
            answer: "2",
          },
          {
            text: "CH₃COOH là chất điện li yếu vì trong nước nó:",
            options: JSON.stringify(["Không tan", "Phân li hoàn toàn", "Chỉ phân li một phần, tồn tại cân bằng điện li", "Không có H linh động"]),
            answer: "2",
          },
          {
            text: "Ở trạng thái cân bằng hoá học, tốc độ phản ứng thuận và nghịch:",
            options: JSON.stringify(["Bằng nhau và khác 0", "Đều bằng 0", "Tốc độ thuận lớn hơn", "Tốc độ nghịch lớn hơn"]),
            answer: "0",
          },
          {
            text: "Hằng số cân bằng K_C phụ thuộc vào yếu tố nào?",
            options: JSON.stringify(["Nồng độ đầu của các chất", "Áp suất hệ", "Nhiệt độ", "Chất xúc tác"]),
            answer: "2",
          },
          {
            text: "Chuẩn độ acid–base dùng để:",
            options: JSON.stringify([
              "Xác định nồng độ một dung dịch acid hoặc base",
              "Làm chất chỉ thị đổi màu",
              "Tăng tốc độ phản ứng trung hoà",
              "Xác định hằng số cân bằng K_C",
            ]),
            answer: "0",
          },
          {
            text: "Trong quy trình Haber tổng hợp NH₃, xúc tác được sử dụng là:",
            options: JSON.stringify(["Pt", "Ni", "Fe", "V₂O₅"]),
            answer: "2",
          },
          {
            text: "Dung dịch trung tính có:",
            options: JSON.stringify(["[H⁺] > [OH⁻]", "[H⁺] < [OH⁻]", "[H⁺] = [OH⁻] = 10⁻⁷ M", "[H⁺] = 0"]),
            answer: "2",
          },
          {
            text: "Phản ứng một chiều khác phản ứng thuận nghịch ở điểm nào?",
            options: JSON.stringify([
              "Phản ứng một chiều xảy ra nhanh hơn",
              "Phản ứng một chiều chỉ xảy ra theo một hướng, sản phẩm không phản ứng lại tạo chất đầu",
              "Phản ứng một chiều luôn tỏa nhiệt",
              "Phản ứng một chiều không cần xúc tác",
            ]),
            answer: "1",
          },
          {
            text: "Với phản ứng aA(g) + bB(g) ⇌ cC(g) + dD(g), nếu K_C >> 1 thì:",
            options: JSON.stringify([
              "Cân bằng nghiêng về phía chất đầu",
              "Cân bằng nghiêng về phía sản phẩm",
              "Phản ứng không xảy ra",
              "Phản ứng luôn ở trạng thái đầu",
            ]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chương 2. Nitrogen - Sulfur",
      order: 2,
      lessons: [
        {
          title: "Bài 4. Nitrogen",
          order: 4,
          content: `## 1. Cấu tạo phân tử

Phân tử N₂ gồm hai nguyên tử N liên kết với nhau bằng **liên kết ba (N≡N)** rất bền, năng lượng liên kết lớn (946 kJ/mol) → N₂ **trơ** ở nhiệt độ thường.

## 2. Tính chất vật lí

Khí không màu, không mùi, không vị, nhẹ hơn không khí, hoá lỏng ở −196°C, chiếm khoảng **78% thể tích không khí**, ít tan trong nước.

## 3. Tính chất hoá học

Ở nhiệt độ thường N₂ trơ; ở nhiệt độ cao, có xúc tác, N₂ thể hiện cả tính oxi hoá và tính khử:

**Tính oxi hoá:**
- Tác dụng H₂: N₂ + 3H₂ ⇌ 2NH₃ (xúc tác Fe, 450°C, 200 atm)
- Tác dụng kim loại hoạt động mạnh: 3Mg + N₂ → Mg₃N₂ (magnesium nitride)

**Tính khử:**
- Tác dụng O₂: N₂ + O₂ ⇌ 2NO (3000°C hoặc tia lửa điện — xảy ra trong cơn giông)

## 4. Trạng thái tự nhiên và ứng dụng

- Có trong khí quyển, trong thành phần protein, DNA của sinh vật
- Ứng dụng: sản xuất amoniac, tạo môi trường trơ (bảo quản thực phẩm, hàn cắt kim loại), làm lạnh (N₂ lỏng)

## 5. Chu trình nitrogen trong tự nhiên

N₂ khí quyển → cố định đạm (vi khuẩn, sét đánh, công nghiệp) → hợp chất chứa N trong đất, cây trồng → động vật → phân huỷ → trả lại N₂ cho khí quyển (quá trình phản nitrat hoá)`,
        },
        {
          title: "Bài 5. Ammonia. Muối ammonium",
          order: 5,
          content: `## 1. Cấu tạo và tính chất vật lí của Ammonia (NH₃)

Phân tử NH₃ có cấu trúc **hình chóp tam giác**, N còn một cặp electron chưa liên kết.

Tính chất vật lí: khí không màu, mùi khai, nhẹ hơn không khí, tan rất nhiều trong nước (tạo dung dịch ammonia).

## 2. Tính chất hoá học của Ammonia

**Tính base yếu** (do cặp electron chưa liên kết trên N nhận proton):
- NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ (dung dịch NH₃ làm quỳ tím hoá xanh)
- NH₃ + HCl → NH₄Cl (tạo khói trắng — nhận biết khí NH₃ và HCl)

**Tính khử** (N trong NH₃ có số oxi hoá −3, thấp nhất):
- 4NH₃ + 3O₂ → 2N₂ + 6H₂O (cháy trong oxi không xúc tác)
- 4NH₃ + 5O₂ →(xt Pt, 850°C) 4NO + 6H₂O (phản ứng oxi hoá xúc tác — bước đầu sản xuất HNO₃)

## 3. Ứng dụng của Ammonia

Sản xuất phân đạm (urea, ammonium nitrate), sản xuất HNO₃, chất làm lạnh trong công nghiệp (NH₃ lỏng).

## 4. Muối Ammonium

Chứa ion NH₄⁺, hầu hết **tan tốt trong nước**, là chất điện li mạnh.

**Tính chất hoá học:**
- Tác dụng với dung dịch kiềm (đun nhẹ) sinh khí mùi khai → **dùng để nhận biết ion NH₄⁺**:
  NH₄Cl + NaOH →(t°) NaCl + NH₃↑ + H₂O
- Dễ bị nhiệt phân: NH₄HCO₃ →(t°) NH₃ + H₂O + CO₂; NH₄NO₃ →(t°) N₂O + 2H₂O

**Ứng dụng:** sản xuất phân đạm (NH₄NO₃, (NH₄)₂SO₄, NH₄Cl)`,
        },
        {
          title: "Bài 6. Một số hợp chất của nitrogen với oxygen",
          order: 6,
          content: `## 1. Các oxide của nitrogen

Nitrogen tạo nhiều oxide: N₂O, NO, N₂O₃, NO₂, N₂O₅ ứng với số oxi hoá +1 đến +5.

- **NO:** khí không màu, dễ bị oxi hoá thành NO₂ trong không khí: 2NO + O₂ → 2NO₂
- **NO₂:** khí màu nâu đỏ, độc, là một nguyên nhân gây mưa acid và hiệu ứng khói mù quang hoá

**Nguồn phát thải:** tự nhiên (sét đánh), nhân tạo (đốt nhiên liệu hoá thạch, khí thải động cơ, sản xuất công nghiệp) → gây ô nhiễm không khí, mưa acid: NO₂ + H₂O + O₂ → HNO₃

## 2. Nitric acid (HNO₃)

**Tính chất vật lí:** chất lỏng không màu, bốc khói mạnh trong không khí ẩm, tan vô hạn trong nước.

**Tính acid mạnh:** đổi màu quỳ tím, tác dụng oxide base, base, muối của acid yếu hơn (như CaCO₃).

**Tính oxi hoá mạnh** (do N trong HNO₃ có số oxi hoá +5):
- HNO₃ đặc + kim loại → muối + **NO₂** (khí màu nâu đỏ) + H₂O
- HNO₃ loãng + kim loại → muối + **NO** (khí không màu, hoá nâu trong không khí) + H₂O
- Cu + 4HNO₃(đặc) → Cu(NO₃)₂ + 2NO₂↑ + 2H₂O
- 3Cu + 8HNO₃(loãng) → 3Cu(NO₃)₂ + 2NO↑ + 4H₂O

**Lưu ý:** Fe, Al, Cr bị **thụ động hoá** trong HNO₃ đặc nguội và H₂SO₄ đặc nguội (không phản ứng).

## 3. Sản xuất HNO₃ trong công nghiệp

Ba giai đoạn từ NH₃:
1. Oxi hoá NH₃: 4NH₃ + 5O₂ →(Pt, 850°C) 4NO + 6H₂O
2. Oxi hoá NO: 2NO + O₂ → 2NO₂
3. Hấp thụ NO₂ vào nước có O₂: 4NO₂ + O₂ + 2H₂O → 4HNO₃

## 4. Ứng dụng của HNO₃

Sản xuất phân đạm (NH₄NO₃), thuốc nổ (TNT), tơ nhân tạo, phẩm nhuộm.`,
        },
        {
          title: "Bài 7. Sulfur và sulfur dioxide",
          order: 7,
          content: `## 1. Sulfur (S)

**Trạng thái tự nhiên:** tồn tại ở dạng đơn chất trong tự nhiên (mỏ lưu huỳnh), và trong hợp chất (quặng sulfide, sulfate).

**Tính chất vật lí:** chất rắn màu vàng, không tan trong nước, có hai dạng thù hình S_α và S_β.

**Tính chất hoá học:** S có số oxi hoá 0, có thể tăng hoặc giảm → vừa oxi hoá vừa khử.

**Tính oxi hoá** (tác dụng kim loại, H₂):
- Fe + S →(t°) FeS
- H₂ + S →(t°) H₂S

**Tính khử** (tác dụng phi kim mạnh hơn, chất oxi hoá):
- S + O₂ →(t°) SO₂
- S + 2H₂SO₄(đặc) →(t°) 3SO₂ + 2H₂O

**Ứng dụng:** sản xuất H₂SO₄, lưu hoá cao su, thuốc trừ sâu, diêm.

## 2. Sulfur dioxide (SO₂)

**Tính chất vật lí:** khí không màu, mùi hắc, độc, tan tốt trong nước.

**Là oxide acid:** SO₂ + H₂O ⇌ H₂SO₃ (acid sulfurơ, acid yếu)

**Vừa có tính oxi hoá vừa có tính khử** (S trong SO₂ có số oxi hoá +4, ở giữa):
- **Tính khử:** SO₂ + Br₂ + 2H₂O → H₂SO₄ + 2HBr (làm mất màu dung dịch bromine — nhận biết SO₂)
- **Tính oxi hoá:** SO₂ + 2H₂S → 3S↓ + 2H₂O

**Ứng dụng:** sản xuất H₂SO₄, tẩy trắng giấy/bột giấy, chống nấm mốc, bảo quản thực phẩm khô (với liều lượng cho phép).

**Tác hại:** SO₂ là một nguyên nhân chính gây **mưa acid**, ô nhiễm không khí, ảnh hưởng hô hấp.`,
        },
        {
          title: "Bài 8. Sulfuric acid và muối sulfate",
          order: 8,
          content: `## 1. Cấu tạo, tính chất vật lí

H₂SO₄ là chất lỏng sánh như dầu, không màu, không bay hơi, tan vô hạn trong nước và **toả rất nhiều nhiệt** (khi pha loãng phải rót từ từ acid vào nước, không làm ngược lại).

## 2. Tính chất hoá học của H₂SO₄ loãng — Tính acid mạnh

- Đổi màu quỳ tím thành đỏ
- Tác dụng kim loại (đứng trước H): Fe + H₂SO₄(loãng) → FeSO₄ + H₂↑
- Tác dụng oxide base, base: CuO + H₂SO₄ → CuSO₄ + H₂O
- Tác dụng muối: BaCl₂ + H₂SO₄ → BaSO₄↓ + 2HCl

## 3. Tính chất hoá học của H₂SO₄ đặc

**Tính oxi hoá mạnh** (do S có số oxi hoá +6):
- Cu + 2H₂SO₄(đặc, nóng) → CuSO₄ + SO₂↑ + 2H₂O (không giải phóng H₂, kể cả với kim loại đứng sau H)
- **Lưu ý:** Fe, Al thụ động hoá trong H₂SO₄ đặc nguội

**Tính háo nước** (than hoá hợp chất hữu cơ):
> C₁₂H₂₂O₁₁ (đường) + H₂SO₄(đặc) → 12C + 11H₂O (đường hoá đen)

## 4. Sản xuất H₂SO₄ — Phương pháp tiếp xúc

Ba giai đoạn:
1. S + O₂ →(t°) SO₂ (hoặc đốt quặng pyrite FeS₂)
2. 2SO₂ + O₂ ⇌(xt V₂O₅, 450°C) 2SO₃
3. SO₃ + H₂O → H₂SO₄ (thực tế hấp thụ SO₃ vào H₂SO₄ đặc tạo oleum, sau đó pha loãng)

## 5. Nhận biết ion sulfate (SO₄²⁻)

Dùng dung dịch **BaCl₂** (hoặc Ba(NO₃)₂): tạo kết tủa trắng **BaSO₄** không tan trong acid mạnh
> Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl

## 6. Ứng dụng của H₂SO₄

Sản xuất phân bón (superphosphate, ammonium sulfate), chất tẩy rửa, phẩm nhuộm, tơ sợi, ắc quy chì.`,
        },
      ],
      quiz: {
        title: "Ôn tập chương 2",
        questions: [
          {
            text: "Trong công nghiệp, ammonia được tổng hợp từ N₂ và H₂ bằng phương pháp Haber ở điều kiện:",
            options: JSON.stringify(["200°C, 1 atm, xúc tác Pt", "450°C, 200 atm, xúc tác Fe", "500°C, 1 atm, xúc tác V₂O₅", "300°C, 100 atm, xúc tác Pt"]),
            answer: "1",
          },
          {
            text: "Cho Cu tác dụng với HNO₃ đặc nóng. Khí sinh ra là:",
            options: JSON.stringify(["H₂", "NO", "NO₂", "N₂"]),
            answer: "2",
          },
          {
            text: "H₂SO₄ đặc tác dụng với đường saccarose (C₁₂H₂₂O₁₁) gây ra hiện tượng:",
            options: JSON.stringify(["Đường tan ra", "Đường kết tinh lại", "Đường hoá đen (than hoá)", "Toả nhiệt mạnh, không có hiện tượng"]),
            answer: "2",
          },
          {
            text: "Chất nào sau đây vừa tác dụng với HNO₃ loãng vừa tác dụng với NaOH?",
            options: JSON.stringify(["Fe", "Al", "Cu", "Ag"]),
            answer: "1",
          },
          {
            text: "Thuốc thử dùng để nhận biết ion sulfate (SO₄²⁻) là:",
            options: JSON.stringify(["Quỳ tím", "Dung dịch BaCl₂", "Dung dịch NaOH", "Dung dịch AgNO₃"]),
            answer: "1",
          },
          {
            text: "Phân tử N₂ trơ ở nhiệt độ thường vì:",
            options: JSON.stringify(["N₂ không tan trong nước", "N₂ có liên kết ba rất bền", "N₂ nhẹ hơn không khí", "N₂ không màu không mùi"]),
            answer: "1",
          },
          {
            text: "Để nhận biết khí NH₃, có thể dùng:",
            options: JSON.stringify(["Quỳ tím ẩm hoá xanh", "Quỳ tím ẩm hoá đỏ", "Que đóm còn tàn đỏ", "Dung dịch BaCl₂"]),
            answer: "0",
          },
          {
            text: "Muối ammonium khi tác dụng với dung dịch kiềm, đun nhẹ, sinh ra:",
            options: JSON.stringify(["Khí H₂", "Khí NH₃ mùi khai", "Khí NO₂", "Kết tủa trắng"]),
            answer: "1",
          },
          {
            text: "Kim loại nào bị thụ động hoá trong HNO₃ đặc nguội và H₂SO₄ đặc nguội?",
            options: JSON.stringify(["Cu, Ag", "Fe, Al", "Zn, Mg", "Na, K"]),
            answer: "1",
          },
          {
            text: "Khí SO₂ làm mất màu dung dịch bromine, thể hiện SO₂ có tính:",
            options: JSON.stringify(["Oxi hoá", "Khử", "Acid", "Base"]),
            answer: "1",
          },
          {
            text: "Nguyên nhân chính gây ra hiện tượng mưa acid là do khí thải chứa:",
            options: JSON.stringify(["CO₂ và CH₄", "SO₂ và NOₓ", "N₂ và O₂", "H₂ và CO"]),
            answer: "1",
          },
          {
            text: "Trong phân tử NH₃, nguyên tử N có dạng lai hoá và hình học phân tử là:",
            options: JSON.stringify(["Tam giác phẳng", "Hình chóp tam giác", "Đường thẳng", "Tứ diện đều"]),
            answer: "1",
          },
          {
            text: "Phương pháp sản xuất H₂SO₄ trong công nghiệp gọi là:",
            options: JSON.stringify(["Phương pháp điện phân", "Phương pháp tiếp xúc", "Phương pháp Haber", "Phương pháp Solvay"]),
            answer: "1",
          },
          {
            text: "Trong giai đoạn đầu sản xuất HNO₃ công nghiệp, NH₃ bị oxi hoá bởi O₂ (xúc tác Pt) tạo thành:",
            options: JSON.stringify(["N₂", "NO", "NO₂", "N₂O₅"]),
            answer: "1",
          },
          {
            text: "Số oxi hoá của S trong H₂SO₄ là:",
            options: JSON.stringify(["+2", "+4", "+6", "0"]),
            answer: "2",
          },
          {
            text: "Fe + 4HNO₃ (loãng) → Fe(NO₃)₃ + NO + 2H₂O. Vai trò của HNO₃ trong phản ứng này là:",
            options: JSON.stringify(["Chỉ là môi trường acid", "Chỉ là chất oxi hoá", "Vừa là acid vừa là chất oxi hoá", "Chỉ là chất khử"]),
            answer: "2",
          },
          {
            text: "SO₂ là oxide acid vì SO₂ tác dụng với nước tạo thành:",
            options: JSON.stringify(["H₂SO₄", "H₂SO₃", "H₂S", "SO₃"]),
            answer: "1",
          },
          {
            text: "Muối ammonium nitrate (NH₄NO₃) khi bị nhiệt phân tạo ra khí:",
            options: JSON.stringify(["NH₃ và HNO₃", "N₂O và H₂O", "N₂ và O₂", "NO₂ và H₂"]),
            answer: "1",
          },
          {
            text: "Đâu KHÔNG phải là ứng dụng của sulfuric acid?",
            options: JSON.stringify(["Sản xuất phân bón", "Chế tạo ắc quy chì", "Làm chất làm lạnh", "Sản xuất chất tẩy rửa"]),
            answer: "2",
          },
          {
            text: "Khi pha loãng H₂SO₄ đặc, thao tác đúng là:",
            options: JSON.stringify([
              "Rót nước vào acid đặc",
              "Rót từ từ acid đặc vào nước, khuấy đều",
              "Rót acid và nước cùng lúc",
              "Đun nóng acid trước khi pha loãng",
            ]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chương 3. Đại cương về hoá học hữu cơ",
      order: 3,
      lessons: [
        {
          title: "Bài 10. Hợp chất hữu cơ và hoá học hữu cơ",
          order: 10,
          content: `## 1. Khái niệm hợp chất hữu cơ

**Hợp chất hữu cơ** là hợp chất của carbon (trừ một số ít không được coi là hữu cơ: CO, CO₂, muối carbonate, cyanide, carbide...). **Hoá học hữu cơ** là ngành hoá học nghiên cứu các hợp chất hữu cơ.

## 2. Đặc điểm chung của hợp chất hữu cơ

- Nhất thiết phải chứa carbon, thường có H, hay gặp O, N, halogen, S, P
- Liên kết chủ yếu là **liên kết cộng hoá trị**
- Nhiệt độ nóng chảy, sôi thường **thấp**; phần lớn không tan hoặc ít tan trong nước, tan tốt trong dung môi hữu cơ
- Dễ cháy, kém bền với nhiệt hơn hợp chất vô cơ
- Phản ứng hoá học thường xảy ra **chậm**, theo nhiều hướng khác nhau, cần xúc tác

## 3. Phân loại hợp chất hữu cơ

| Loại | Đặc điểm | Ví dụ |
|------|---------|-------|
| Hydrocarbon | Chỉ chứa C, H | CH₄, C₂H₄, C₆H₆ |
| Dẫn xuất hydrocarbon | Có thêm nguyên tố khác (O, N, halogen...) thay thế H | C₂H₅OH, CH₃COOH, CH₃Cl |

## 4. Phân tích nguyên tố

**Phân tích định tính:** xác định các nguyên tố có trong hợp chất (chuyển hoá C thành CO₂, H thành H₂O rồi nhận biết).

**Phân tích định lượng:** xác định thành phần phần trăm khối lượng mỗi nguyên tố, làm cơ sở lập công thức phân tử.

> Đốt cháy hoàn toàn hợp chất chứa C, H, O sinh ra CO₂ và H₂O; từ khối lượng CO₂, H₂O và mẫu ban đầu, tính được %C, %H, %O.`,
        },
        {
          title: "Bài 11. Phương pháp tách biệt và tinh chế hợp chất hữu cơ",
          order: 11,
          content: `## 1. Phương pháp chưng cất

Dựa vào sự khác nhau về **nhiệt độ sôi** của các chất trong hỗn hợp lỏng để tách chúng ra khỏi nhau (chưng cất thường, chưng cất phân đoạn).

**Ứng dụng:** tách ethanol ra khỏi hỗn hợp lên men, chưng cất dầu mỏ.

## 2. Phương pháp chiết

Dựa vào sự khác nhau về **độ tan** của chất trong hai dung môi không trộn lẫn (chiết lỏng–lỏng, dùng phễu chiết) hoặc chiết chất tan ra khỏi hỗn hợp rắn bằng dung môi thích hợp.

**Ứng dụng:** chiết tinh dầu từ vỏ cam, chiết iodine ra khỏi nước bằng dung môi hữu cơ.

## 3. Phương pháp kết tinh

Dựa vào sự khác nhau về **độ tan theo nhiệt độ**: hoà tan chất rắn ở nhiệt độ cao thành dung dịch bão hoà, sau đó làm nguội hoặc bay hơi bớt dung môi để chất kết tinh tách ra, còn tạp chất ở lại trong dung dịch.

**Ứng dụng:** tinh chế đường, muối ăn.

## 4. Phương pháp sắc kí

Dựa vào sự khác nhau về **khả năng hấp phụ / phân bố** của các chất giữa pha tĩnh và pha động để tách các chất ra khỏi hỗn hợp (sắc kí cột, sắc kí bản mỏng, sắc kí giấy).

**Ứng dụng:** tách các sắc tố trong lá cây, kiểm nghiệm thành phần thuốc.`,
        },
        {
          title: "Bài 12. Công thức phân tử hợp chất hữu cơ",
          order: 12,
          content: `## 1. Công thức đơn giản nhất

Công thức biểu thị **tỉ lệ tối giản** số nguyên tử của các nguyên tố trong phân tử.

**Ví dụ:** ethylene có công thức đơn giản nhất là CH₂ (tỉ lệ C:H = 1:2)

## 2. Công thức phân tử

Công thức biểu thị **đúng số lượng nguyên tử** của mỗi nguyên tố trong phân tử. Công thức phân tử là bội số nguyên của công thức đơn giản nhất.

**Ví dụ:** ethylene có công thức phân tử C₂H₄ (gấp 2 lần CH₂)

## 3. Xác định công thức phân tử

**Bước 1:** Từ % khối lượng nguyên tố (phân tích định lượng), lập công thức đơn giản nhất
**Bước 2:** Xác định phân tử khối M (qua phổ khối lượng MS hoặc tỉ khối hơi)
**Bước 3:** Công thức phân tử = (công thức đơn giản nhất)ₙ với n = M / M(đơn giản nhất)

**Ví dụ:** Hợp chất có %C = 40%, %H = 6,67%, %O = 53,33%, M = 180.
- Công thức đơn giản nhất: CH₂O
- n = 180/30 = 6 → công thức phân tử: C₆H₁₂O₆ (glucose)

## 4. Phổ khối lượng (MS)

Phổ khối lượng cho biết phân tử khối của hợp chất thông qua mảnh ion phân tử [M]⁺ — là công cụ hiện đại để xác định M nhanh chóng và chính xác.`,
        },
        {
          title: "Bài 13. Cấu tạo hoá học hợp chất hữu cơ",
          order: 13,
          content: `## 1. Thuyết cấu tạo hoá học (Butlerov)

1. Trong phân tử hợp chất hữu cơ, các nguyên tử liên kết với nhau theo đúng **hoá trị** và theo một **thứ tự nhất định** — thứ tự đó gọi là cấu tạo hoá học
2. Trong phân tử, carbon có hoá trị **IV**; các nguyên tử C có thể liên kết với nhau tạo mạch carbon (mạch thẳng, nhánh, vòng)
3. Tính chất của các chất phụ thuộc vào **thành phần phân tử** (bản chất, số lượng nguyên tử) và **cấu tạo hoá học** (thứ tự liên kết)

## 2. Đồng đẳng và đồng phân

- **Đồng đẳng:** các hợp chất có tính chất hoá học tương tự nhau, thành phần phân tử hơn kém nhau một hay nhiều nhóm CH₂
- **Đồng phân:** các hợp chất có cùng công thức phân tử nhưng khác nhau về cấu tạo hoá học → tính chất khác nhau

## 3. Các loại công thức biểu diễn cấu tạo

- **Công thức cấu tạo đầy đủ:** biểu diễn tất cả các liên kết
- **Công thức cấu tạo thu gọn:** viết gọn các nhóm nguyên tử (CH₃–CH₂–OH)
- **Công thức khung phân tử (khung xương carbon):** chỉ biểu diễn liên kết carbon–carbon và nhóm chức, ẩn nguyên tử H liên kết với C

## 4. Liên kết trong phân tử hợp chất hữu cơ

Chủ yếu là **liên kết cộng hoá trị**: liên kết đơn (σ), liên kết đôi (1σ + 1π), liên kết ba (1σ + 2π).

**Ví dụ so sánh đồng phân:** C₄H₁₀ có 2 đồng phân cấu tạo: butane (mạch thẳng CH₃CH₂CH₂CH₃) và isobutane (mạch nhánh (CH₃)₃CH)`,
        },
      ],
      quiz: {
        title: "Ôn tập chương 3",
        questions: [
          {
            text: "Hợp chất hữu cơ là hợp chất của nguyên tố:",
            options: JSON.stringify(["Oxygen", "Carbon", "Nitrogen", "Hydrogen"]),
            answer: "1",
          },
          {
            text: "Liên kết chủ yếu trong hợp chất hữu cơ là:",
            options: JSON.stringify(["Liên kết ion", "Liên kết cộng hoá trị", "Liên kết kim loại", "Liên kết hydrogen"]),
            answer: "1",
          },
          {
            text: "Phương pháp tách chất dựa vào sự khác nhau về nhiệt độ sôi là:",
            options: JSON.stringify(["Chiết", "Kết tinh", "Chưng cất", "Sắc kí"]),
            answer: "2",
          },
          {
            text: "Phương pháp chiết dựa vào sự khác nhau về:",
            options: JSON.stringify(["Nhiệt độ sôi", "Độ tan trong các dung môi", "Khối lượng phân tử", "Màu sắc"]),
            answer: "1",
          },
          {
            text: "Phương pháp kết tinh dựa vào sự khác nhau về:",
            options: JSON.stringify(["Độ tan theo nhiệt độ", "Nhiệt độ sôi", "Khả năng hấp phụ", "Tỉ khối hơi"]),
            answer: "0",
          },
          {
            text: "Công thức đơn giản nhất biểu thị:",
            options: JSON.stringify([
              "Số nguyên tử thực của mỗi nguyên tố",
              "Tỉ lệ tối giản số nguyên tử của các nguyên tố",
              "Cấu tạo không gian phân tử",
              "Khối lượng phân tử",
            ]),
            answer: "1",
          },
          {
            text: "Hợp chất có công thức đơn giản nhất là CH₂O và M = 60. Công thức phân tử là:",
            options: JSON.stringify(["CH₂O", "C₂H₄O₂", "C₃H₆O₃", "C₂H₂O₂"]),
            answer: "1",
          },
          {
            text: "Theo thuyết cấu tạo hoá học Butlerov, carbon trong hợp chất hữu cơ có hoá trị:",
            options: JSON.stringify(["II", "III", "IV", "V"]),
            answer: "2",
          },
          {
            text: "Đồng phân là những hợp chất:",
            options: JSON.stringify([
              "Có cùng công thức phân tử nhưng khác cấu tạo",
              "Có cùng cấu tạo nhưng khác công thức phân tử",
              "Hơn kém nhau một nhóm CH₂",
              "Có cùng tính chất hoá học",
            ]),
            answer: "0",
          },
          {
            text: "Đồng đẳng là những hợp chất:",
            options: JSON.stringify([
              "Có cùng công thức phân tử",
              "Có tính chất hoá học tương tự, thành phần hơn kém nhau một hay nhiều nhóm CH₂",
              "Có cùng khối lượng phân tử",
              "Không có mối liên hệ về cấu tạo",
            ]),
            answer: "1",
          },
          {
            text: "C₄H₁₀ có bao nhiêu đồng phân cấu tạo mạch carbon?",
            options: JSON.stringify(["1", "2", "3", "4"]),
            answer: "1",
          },
          {
            text: "Phổ khối lượng (MS) được dùng để xác định:",
            options: JSON.stringify(["Thành phần phần trăm nguyên tố", "Phân tử khối hợp chất", "Nhiệt độ sôi", "Độ tan"]),
            answer: "1",
          },
          {
            text: "Phương pháp sắc kí dựa trên nguyên tắc:",
            options: JSON.stringify([
              "Sự khác nhau về nhiệt độ sôi",
              "Sự khác nhau về khả năng hấp phụ/phân bố giữa pha tĩnh và pha động",
              "Sự khác nhau về khối lượng riêng",
              "Sự khác nhau về độ tan theo nhiệt độ",
            ]),
            answer: "1",
          },
          {
            text: "Hợp chất hữu cơ so với hợp chất vô cơ thường có đặc điểm:",
            options: JSON.stringify([
              "Nhiệt độ nóng chảy, sôi cao hơn",
              "Kém bền với nhiệt, dễ cháy",
              "Phản ứng luôn xảy ra tức thời",
              "Tan tốt trong nước hơn dung môi hữu cơ",
            ]),
            answer: "1",
          },
          {
            text: "Công thức cấu tạo thu gọn của ethanol là:",
            options: JSON.stringify(["CH₃–CH₂–OH", "C₂H₆O (chỉ công thức phân tử)", "CH₂O", "C₂H₄"]),
            answer: "0",
          },
          {
            text: "Chất nào sau đây là dẫn xuất hydrocarbon (không phải hydrocarbon)?",
            options: JSON.stringify(["CH₄", "C₂H₄", "CH₃COOH", "C₆H₆"]),
            answer: "2",
          },
          {
            text: "Để xác định công thức phân tử từ công thức đơn giản nhất, cần biết thêm:",
            options: JSON.stringify(["Nhiệt độ sôi", "Phân tử khối M", "Màu sắc hợp chất", "Độ tan trong nước"]),
            answer: "1",
          },
          {
            text: "Đốt cháy hoàn toàn hợp chất hữu cơ chứa C, H, O luôn sinh ra:",
            options: JSON.stringify(["CO và H₂", "CO₂ và H₂O", "C và H₂O", "CO₂ và H₂"]),
            answer: "1",
          },
          {
            text: "Tính chất hoá học của hợp chất hữu cơ phụ thuộc vào:",
            options: JSON.stringify([
              "Chỉ thành phần phân tử",
              "Chỉ cấu tạo hoá học",
              "Cả thành phần phân tử và cấu tạo hoá học",
              "Chỉ khối lượng phân tử",
            ]),
            answer: "2",
          },
          {
            text: "Phản ứng của hợp chất hữu cơ so với hợp chất vô cơ thường:",
            options: JSON.stringify(["Xảy ra nhanh hơn", "Xảy ra chậm, theo nhiều hướng, cần xúc tác", "Luôn xảy ra hoàn toàn", "Không cần điều kiện gì"]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chương 4. Hydrocarbon",
      order: 4,
      lessons: [
        {
          title: "Bài 15. Alkane",
          order: 15,
          content: `## 1. Khái niệm, đồng đẳng, đồng phân

**Alkane** (parafin) là hydrocarbon no, mạch hở, công thức chung **CₙH₂ₙ₊₂** (n ≥ 1).

**Ví dụ:** CH₄, C₂H₆, C₃H₈... tạo thành dãy đồng đẳng.

Từ C₄H₁₀ trở đi xuất hiện **đồng phân mạch carbon** (mạch thẳng, mạch nhánh).

## 2. Danh pháp

Tên alkane = tên mạch chính + đuôi "**-ane**": methane (CH₄), ethane (C₂H₆), propane (C₃H₈), butane (C₄H₁₀), pentane (C₅H₁₂)...

Với alkane mạch nhánh: gọi tên theo IUPAC — chọn mạch chính dài nhất, đánh số ưu tiên nhánh nhỏ nhất, gọi tên nhánh (nhóm alkyl) + tên mạch chính.

## 3. Tính chất vật lí

Ở điều kiện thường: C₁–C₄ là khí, C₅–C₁₇ là lỏng, từ C₁₈ trở lên là rắn. Không tan trong nước, nhẹ hơn nước, tan tốt trong dung môi hữu cơ.

## 4. Tính chất hoá học

**Phản ứng thế halogen** (đặc trưng của alkane, cần ánh sáng):
> CH₄ + Cl₂ →(ánh sáng) CH₃Cl + HCl

**Phản ứng tách (cracking, đề hydro hoá)** ở nhiệt độ cao, xúc tác:
> C₄H₁₀ →(t°, xt) C₂H₄ + C₂H₆ (cracking) hoặc C₄H₁₀ → C₄H₈ + H₂ (tách H₂)

**Phản ứng oxi hoá (phản ứng cháy):**
> CₙH₂ₙ₊₂ + (3n+1)/2 O₂ →(t°) nCO₂ + (n+1)H₂O

Alkane **không làm mất màu dung dịch bromine, không làm mất màu KMnO₄** ở điều kiện thường — dùng để phân biệt với hydrocarbon không no.

## 5. Điều chế và ứng dụng

Điều chế: chưng cất phân đoạn dầu mỏ, khí thiên nhiên.
Ứng dụng: nhiên liệu (gas, xăng, dầu), nguyên liệu tổng hợp hữu cơ, dung môi.`,
        },
        {
          title: "Bài 16. Hydrocarbon không no",
          order: 16,
          content: `## A. ALKENE — CₙH₂ₙ (n ≥ 2)

### 1. Đặc điểm cấu tạo

Alkene có **một liên kết đôi C=C** trong phân tử. Ví dụ: ethylene CH₂=CH₂, propene CH₃–CH=CH₂.

### 2. Tính chất hoá học — Phản ứng cộng (đặc trưng)

- **Cộng H₂:** CH₂=CH₂ + H₂ →(Ni, t°) CH₃–CH₃
- **Cộng HX (quy tắc Markovnikov):** CH₃–CH=CH₂ + HBr → CH₃–CHBr–CH₃ (sản phẩm chính — H cộng vào carbon có nhiều H hơn, X cộng vào carbon còn lại)
- **Cộng H₂O (hydrate hoá, xúc tác acid):** CH₂=CH₂ + H₂O →(H⁺, t°) C₂H₅OH

### 3. Phản ứng trùng hợp

> nCH₂=CH₂ →(t°, p, xúc tác) (–CH₂–CH₂–)ₙ  (polyethylene, PE)

### 4. Phản ứng oxi hoá — Nhận biết alkene

- **Làm mất màu dung dịch bromine:** CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br
- **Làm mất màu dung dịch KMnO₄** (phản ứng oxi hoá làm đứt liên kết π)

## B. ALKYNE — CₙH₂ₙ₋₂ (n ≥ 2)

### 1. Đặc điểm cấu tạo

Alkyne có **một liên kết ba C≡C**. Chất tiêu biểu: acetylene (ethyne) HC≡CH.

### 2. Tính chất hoá học

**Phản ứng cộng** (xảy ra qua 2 giai đoạn, cộng lần lượt):
> HC≡CH + Br₂ → CHBr=CHBr; CHBr=CHBr + Br₂ → CHBr₂–CHBr₂

**Phản ứng thế đặc trưng của ank-1-yne** (có H linh động ở carbon đầu mạch nối ba):
> HC≡CH + 2AgNO₃ + 2NH₃ → Ag–C≡C–Ag↓ (kết tủa vàng) + 2NH₄NO₃

→ Đây là phản ứng dùng để **nhận biết ank-1-yne**.

**Phản ứng cháy:** toả nhiều nhiệt (acetylene dùng trong đèn xì hàn cắt kim loại).`,
        },
        {
          title: "Bài 17. Arene (Hydrocarbon thơm)",
          order: 17,
          content: `## 1. Khái niệm

**Arene** là hydrocarbon có chứa một hay nhiều vòng benzene. Chất đại diện: benzene (C₆H₆) có cấu trúc vòng 6 cạnh phẳng, các liên kết C–C trong vòng có độ dài bằng nhau (hệ liên hợp bền vững).

## 2. Tính chất vật lí

Benzene và các arene đơn giản là chất lỏng hoặc rắn, không màu, có mùi thơm đặc trưng, không tan trong nước, nhẹ hơn nước, độc.

## 3. Tính chất hoá học

### a) Phản ứng thế (đặc trưng — vòng benzene bền, ưu tiên phản ứng thế H hơn phá vỡ vòng)

- **Halogen hoá** (xúc tác FeBr₃/FeCl₃): C₆H₆ + Br₂ →(FeBr₃) C₆H₅Br + HBr
- **Nitro hoá** (xúc tác H₂SO₄ đặc): C₆H₆ + HNO₃ →(H₂SO₄đ, t°) C₆H₅NO₂ + H₂O (nitrobenzene)

### b) Phản ứng cộng (khó hơn alkene, cần điều kiện mạnh)

> C₆H₆ + 3H₂ →(Ni, 180°C, áp suất) cyclohexane (C₆H₁₂)

### c) Phản ứng oxi hoá

- **Không làm mất màu dung dịch bromine, không làm mất màu KMnO₄ ở điều kiện thường** → phân biệt arene với alkene, alkyne
- Đồng đẳng benzene có nhánh alkyl (như toluene C₆H₅CH₃) làm mất màu KMnO₄ **khi đun nóng** (do nhánh alkyl bị oxi hoá, vòng benzene không bị oxi hoá)

## 4. Một số arene khác và ứng dụng

- **Toluene** (C₆H₅CH₃): dung môi, sản xuất TNT
- **Styrene** (C₆H₅CH=CH₂): nguyên liệu sản xuất polystyrene (nhựa PS)

**Ứng dụng chung:** dung môi hữu cơ, nguyên liệu tổng hợp phẩm nhuộm, dược phẩm, chất dẻo, thuốc nổ.`,
        },
      ],
      quiz: {
        title: "Ôn tập chương 4",
        questions: [
          {
            text: "Công thức tổng quát của alkane là:",
            options: JSON.stringify(["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ"]),
            answer: "1",
          },
          {
            text: "Chất nào sau đây làm mất màu dung dịch bromine?",
            options: JSON.stringify(["CH₄ (methane)", "C₆H₆ (benzene)", "C₂H₄ (ethylene)", "C₂H₆ (ethane)"]),
            answer: "2",
          },
          {
            text: "Sản phẩm chính của phản ứng CH₃–CH=CH₂ + HBr theo quy tắc Markovnikov là:",
            options: JSON.stringify(["CH₃–CHBr–CH₃ (2-bromopropane)", "CH₃–CH₂–CH₂Br (1-bromopropane)", "Hỗn hợp đều hai sản phẩm", "CH₂Br–CH=CH₂"]),
            answer: "0",
          },
          {
            text: "Phản ứng đặc trưng để nhận biết acetylene C₂H₂ là:",
            options: JSON.stringify(["Tác dụng với H₂O", "Tác dụng với AgNO₃/NH₃ tạo kết tủa vàng", "Làm mất màu KMnO₄", "Tác dụng với NaOH"]),
            answer: "1",
          },
          {
            text: "Đốt cháy hoàn toàn 0,1 mol C₂H₄. Thể tích CO₂ (đktc) thu được là:",
            options: JSON.stringify(["2,24 L", "4,48 L", "3,36 L", "6,72 L"]),
            answer: "1",
          },
          {
            text: "Phản ứng đặc trưng của alkane là:",
            options: JSON.stringify(["Phản ứng cộng", "Phản ứng thế halogen", "Phản ứng trùng hợp", "Phản ứng thuỷ phân"]),
            answer: "1",
          },
          {
            text: "Alkane không làm mất màu dung dịch KMnO₄ và dung dịch bromine ở điều kiện thường vì:",
            options: JSON.stringify([
              "Alkane có liên kết đôi bền",
              "Alkane chỉ có liên kết đơn C–C bền, khó bị oxi hoá/cộng",
              "Alkane có tính khử mạnh",
              "Alkane không cháy được",
            ]),
            answer: "1",
          },
          {
            text: "Công thức tổng quát của alkene là:",
            options: JSON.stringify(["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙH₂ₙ₋₆"]),
            answer: "1",
          },
          {
            text: "Phản ứng trùng hợp ethylene tạo ra:",
            options: JSON.stringify(["Cao su", "Polyethylene (PE)", "PVC", "Tơ nylon"]),
            answer: "1",
          },
          {
            text: "Alkyne có công thức tổng quát:",
            options: JSON.stringify(["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙH₂ₙ₋₆"]),
            answer: "2",
          },
          {
            text: "Cấu trúc vòng benzene có đặc điểm:",
            options: JSON.stringify([
              "Có 3 liên kết đôi cố định xen kẽ 3 liên kết đơn",
              "Các liên kết C–C trong vòng có độ dài bằng nhau (hệ liên hợp bền)",
              "Chỉ có liên kết đơn",
              "Chỉ có liên kết ba",
            ]),
            answer: "1",
          },
          {
            text: "Phản ứng đặc trưng của benzene là:",
            options: JSON.stringify(["Phản ứng cộng", "Phản ứng thế (halogen hoá, nitro hoá)", "Phản ứng trùng hợp", "Phản ứng tách"]),
            answer: "1",
          },
          {
            text: "Benzene tác dụng với Br₂ khan cần xúc tác:",
            options: JSON.stringify(["Ánh sáng", "FeBr₃", "Ni, t°", "H₂SO₄ loãng"]),
            answer: "1",
          },
          {
            text: "Toluene (C₆H₅CH₃) làm mất màu KMnO₄ khi đun nóng là do:",
            options: JSON.stringify([
              "Vòng benzene bị oxi hoá",
              "Nhánh CH₃ bị oxi hoá, vòng benzene không bị oxi hoá",
              "Toluene không phản ứng với KMnO₄",
              "Phản ứng cộng xảy ra ở vòng benzene",
            ]),
            answer: "1",
          },
          {
            text: "Styrene là nguyên liệu để sản xuất:",
            options: JSON.stringify(["PVC", "Polystyrene (PS)", "PE", "Cao su thiên nhiên"]),
            answer: "1",
          },
          {
            text: "Phản ứng cracking C₄H₁₀ tạo ra sản phẩm nào sau đây?",
            options: JSON.stringify(["C₂H₄ + C₂H₆", "CH₄ + C₃H₈", "Cả hai phương án trên đều có thể xảy ra", "Chỉ tạo CH₄"]),
            answer: "2",
          },
          {
            text: "Điều kiện để benzene cộng H₂ tạo cyclohexane là:",
            options: JSON.stringify(["Ni, nhiệt độ và áp suất cao", "FeBr₃, nhiệt độ thường", "Ánh sáng", "H₂SO₄ đặc"]),
            answer: "0",
          },
          {
            text: "Nguồn nguyên liệu chính để điều chế alkane trong công nghiệp là:",
            options: JSON.stringify(["Chưng cất phân đoạn dầu mỏ, khí thiên nhiên", "Thuỷ phân tinh bột", "Lên men rượu", "Điện phân nước"]),
            answer: "0",
          },
          {
            text: "So với alkane cùng số carbon, alkene có số nguyên tử H:",
            options: JSON.stringify(["Nhiều hơn 2", "Ít hơn 2", "Bằng nhau", "Ít hơn 4"]),
            answer: "1",
          },
          {
            text: "Chất nào sau đây là đồng đẳng của benzene?",
            options: JSON.stringify(["Cyclohexane", "Toluene", "Hexane", "Ethylene"]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chương 5. Dẫn xuất halogen - Alcohol - Phenol",
      order: 5,
      lessons: [
        {
          title: "Bài 19. Dẫn xuất halogen",
          order: 19,
          content: `## 1. Khái niệm và phân loại

**Dẫn xuất halogen** là hợp chất hữu cơ trong đó một hay nhiều nguyên tử H trong hydrocarbon được thay thế bằng nguyên tử halogen (F, Cl, Br, I).

**Ví dụ:** CH₃Cl (methyl chloride), CH₂=CH–Cl (vinyl chloride), C₆H₅Br (bromobenzene).

Phân loại theo bậc carbon liên kết với halogen: bậc 1, bậc 2, bậc 3.

## 2. Tính chất vật lí

Không tan trong nước, tan trong dung môi hữu cơ; nhiều dẫn xuất là chất lỏng dễ bay hơi, một số có tác dụng gây mê (CHCl₃), làm lạnh (CFC).

## 3. Tính chất hoá học

### a) Phản ứng thế nguyên tử halogen bằng nhóm –OH (thuỷ phân trong môi trường kiềm)

> R–X + NaOH →(t°) R–OH + NaX

**Ví dụ:** C₂H₅Br + NaOH →(t°) C₂H₅OH + NaBr

### b) Phản ứng tách HX (đun nóng trong KOH/ethanol) — tạo alkene

> CH₃–CH₂Br + KOH →(ethanol, t°) CH₂=CH₂ + KBr + H₂O

## 4. Ứng dụng

Dung môi (CH₂Cl₂, CHCl₃), nguyên liệu tổng hợp polymer (vinyl chloride → PVC), thuốc trừ sâu, thuốc gây mê; một số dẫn xuất (CFC) gây suy giảm tầng ozone nên bị hạn chế sử dụng.`,
        },
        {
          title: "Bài 20. Alcohol",
          order: 20,
          content: `## 1. Khái niệm, phân loại, danh pháp

**Alcohol** là hợp chất hữu cơ có nhóm **–OH** liên kết trực tiếp với carbon no (không thuộc vòng thơm).

- Phân loại theo bậc: alcohol bậc 1, bậc 2, bậc 3 (theo bậc carbon liên kết OH); theo số nhóm OH: đơn chức, đa chức (glycerol có 3 nhóm OH)
- Danh pháp thay thế: tên hydrocarbon tương ứng + đuôi "**-ol**" — ví dụ methanol (CH₃OH), ethanol (C₂H₅OH)

## 2. Tính chất vật lí

Alcohol có **liên kết hydrogen** giữa các phân tử → nhiệt độ sôi cao hơn hydrocarbon có phân tử khối tương đương; các alcohol nhỏ (methanol, ethanol) tan vô hạn trong nước.

## 3. Tính chất hoá học

### a) Phản ứng với kim loại kiềm (thể hiện H linh động)

> 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑

### b) Phản ứng tách nước (dehydrate hoá), xúc tác H₂SO₄ đặc, 170°C — tạo alkene

> CH₃–CH₂OH →(H₂SO₄đ, 170°C) CH₂=CH₂ + H₂O

### c) Phản ứng oxi hoá

- **Alcohol bậc 1** bị oxi hoá thành **aldehyde**, rồi thành **carboxylic acid**: CH₃CH₂OH →(CuO, t°) CH₃CHO →[O] CH₃COOH
- **Alcohol bậc 2** bị oxi hoá thành **ketone**
- **Alcohol bậc 3** không bị oxi hoá bởi CuO/t° (không còn H trên carbon mang OH)

### d) Phản ứng cháy

> C₂H₅OH + 3O₂ →(t°) 2CO₂ + 3H₂O

## 4. Điều chế và ứng dụng

**Điều chế ethanol:** lên men tinh bột/đường (C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂) hoặc hydrate hoá ethylene (xúc tác acid).

**Ứng dụng:** ethanol làm dung môi, nhiên liệu sinh học, sát khuẩn; glycerol dùng trong mĩ phẩm, dược phẩm, sản xuất chất dẻo.`,
        },
        {
          title: "Bài 21. Phenol",
          order: 21,
          content: `## 1. Khái niệm, cấu tạo

**Phenol** là hợp chất hữu cơ có nhóm **–OH liên kết trực tiếp với carbon của vòng benzene**. Chất đại diện: C₆H₅OH (phenol).

Do nhóm OH liên kết trực tiếp với vòng thơm, cặp electron trên O liên hợp với vòng benzene làm cho **liên kết O–H phân cực mạnh hơn** alcohol, đồng thời vòng benzene hoạt động hoá học hơn.

## 2. Tính chất vật lí

Chất rắn, không màu (để lâu chuyển hồng do bị oxi hoá), ít tan trong nước lạnh, tan tốt trong nước nóng và dung môi hữu cơ, độc, gây bỏng da.

## 3. Tính chất hoá học

### a) Tính acid yếu (mạnh hơn alcohol, yếu hơn carbonic acid)

> C₆H₅OH + NaOH → C₆H₅ONa + H₂O (phenol phản ứng được với NaOH, khác với alcohol)

Phenol **không làm đổi màu quỳ tím** (acid quá yếu) nhưng phản ứng được với dung dịch kiềm mạnh.

### b) Phản ứng thế ở vòng thơm (dễ hơn benzene do nhóm OH đẩy electron vào vòng)

> C₆H₅OH + 3Br₂(nước) → C₆H₂Br₃OH↓ (2,4,6-tribromophenol, kết tủa trắng) + 3HBr

→ Đây là phản ứng đặc trưng dùng để **nhận biết phenol**.

## 4. Điều chế và ứng dụng

**Điều chế:** từ cumene (isopropylbenzene) qua quá trình oxi hoá bằng oxygen không khí rồi thuỷ phân bằng acid (phương pháp công nghiệp phổ biến nhất, đồng thời tạo ra acetone).

**Ứng dụng:** sản xuất nhựa phenol-formaldehyde (bakelite), chất diệt khuẩn, thuốc diệt cỏ, phẩm nhuộm, dược phẩm (aspirin tổng hợp từ phenol).`,
        },
      ],
      quiz: {
        title: "Ôn tập chương 5",
        questions: [
          {
            text: "Dẫn xuất halogen là hợp chất hữu cơ trong đó nguyên tử H được thay thế bởi:",
            options: JSON.stringify(["Nhóm OH", "Nguyên tử halogen", "Nhóm NH₂", "Nhóm COOH"]),
            answer: "1",
          },
          {
            text: "Phản ứng thuỷ phân dẫn xuất halogen trong môi trường kiềm tạo ra:",
            options: JSON.stringify(["Alkene", "Alcohol", "Aldehyde", "Carboxylic acid"]),
            answer: "1",
          },
          {
            text: "Phản ứng tách HX từ dẫn xuất halogen (đun trong KOH/ethanol) tạo ra:",
            options: JSON.stringify(["Alcohol", "Alkene", "Alkane", "Arene"]),
            answer: "1",
          },
          {
            text: "Alcohol là hợp chất hữu cơ có nhóm –OH liên kết với:",
            options: JSON.stringify(["Carbon của vòng benzene", "Carbon no (không thuộc vòng thơm)", "Nguyên tử nitrogen", "Nguyên tử oxygen khác"]),
            answer: "1",
          },
          {
            text: "Alcohol có nhiệt độ sôi cao hơn hydrocarbon có phân tử khối tương đương là do:",
            options: JSON.stringify(["Alcohol có khối lượng phân tử lớn hơn", "Alcohol có liên kết hydrogen giữa các phân tử", "Alcohol có liên kết ion", "Alcohol không phân cực"]),
            answer: "1",
          },
          {
            text: "Alcohol bậc 1 khi bị oxi hoá bởi CuO, đun nóng, tạo ra:",
            options: JSON.stringify(["Ketone", "Aldehyde", "Ether", "Carboxylic acid trực tiếp, không qua aldehyde"]),
            answer: "1",
          },
          {
            text: "Alcohol bậc 3 khi tác dụng với CuO, đun nóng thì:",
            options: JSON.stringify(["Bị oxi hoá thành ketone", "Bị oxi hoá thành aldehyde", "Không bị oxi hoá", "Bị oxi hoá thành acid"]),
            answer: "2",
          },
          {
            text: "Phản ứng CH₃CH₂OH →(H₂SO₄ đặc, 170°C) tạo ra sản phẩm chính là:",
            options: JSON.stringify(["CH₃CHO", "CH₂=CH₂", "CH₃COOH", "CH₃OCH₃"]),
            answer: "1",
          },
          {
            text: "Ethanol được điều chế trong công nghiệp thực phẩm bằng phương pháp:",
            options: JSON.stringify(["Hydrate hoá ethylene", "Lên men tinh bột/đường", "Oxi hoá methane", "Thuỷ phân dẫn xuất halogen"]),
            answer: "1",
          },
          {
            text: "Phenol có nhóm –OH liên kết trực tiếp với:",
            options: JSON.stringify(["Carbon no mạch hở", "Carbon của vòng benzene", "Nguyên tử N", "Nhóm carbonyl"]),
            answer: "1",
          },
          {
            text: "Phenol phản ứng được với NaOH vì phenol có tính:",
            options: JSON.stringify(["Base mạnh", "Acid yếu", "Trung tính", "Không phản ứng với NaOH"]),
            answer: "1",
          },
          {
            text: "Phản ứng đặc trưng dùng để nhận biết phenol là phản ứng với:",
            options: JSON.stringify(["Dung dịch NaOH", "Dung dịch Br₂ tạo kết tủa trắng", "Kim loại Na", "Dung dịch HCl"]),
            answer: "1",
          },
          {
            text: "Sản phẩm của phản ứng phenol với dung dịch bromine dư là:",
            options: JSON.stringify(["Bromobenzene", "2,4,6-tribromophenol (kết tủa trắng)", "Phenyl bromide", "Không phản ứng"]),
            answer: "1",
          },
          {
            text: "Phenol không làm đổi màu quỳ tím vì:",
            options: JSON.stringify(["Phenol là base", "Tính acid của phenol quá yếu", "Phenol trung tính hoàn toàn", "Phenol không tan trong nước"]),
            answer: "1",
          },
          {
            text: "Phenol được điều chế phổ biến trong công nghiệp từ:",
            options: JSON.stringify(["Benzene và HNO₃", "Cumene (qua oxi hoá rồi thuỷ phân)", "Toluene và KMnO₄", "Ethanol và H₂SO₄"]),
            answer: "1",
          },
          {
            text: "Ứng dụng chính của phenol là sản xuất:",
            options: JSON.stringify(["Cao su thiên nhiên", "Nhựa phenol-formaldehyde (bakelite)", "Tơ nylon", "Polyethylene"]),
            answer: "1",
          },
          {
            text: "Glycerol là alcohol:",
            options: JSON.stringify(["Đơn chức", "Đa chức (3 nhóm OH)", "Không có nhóm OH", "Chỉ có 1 nhóm OH"]),
            answer: "1",
          },
          {
            text: "Phản ứng của alcohol với kim loại Na chứng tỏ trong phân tử alcohol có:",
            options: JSON.stringify(["Liên kết đôi C=C", "Nguyên tử H linh động trong nhóm OH", "Vòng benzene", "Liên kết ba"]),
            answer: "1",
          },
          {
            text: "Alcohol bậc 2 khi bị oxi hoá tạo thành:",
            options: JSON.stringify(["Aldehyde", "Ketone", "Carboxylic acid", "Ether"]),
            answer: "1",
          },
          {
            text: "So với alcohol, phenol có tính acid:",
            options: JSON.stringify(["Yếu hơn alcohol", "Mạnh hơn alcohol nhưng yếu hơn carbonic acid", "Mạnh hơn HCl", "Không có tính acid"]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chương 6. Hợp chất carbonyl - Carboxylic acid",
      order: 6,
      lessons: [
        {
          title: "Bài 23. Hợp chất carbonyl",
          order: 23,
          content: `## 1. Khái niệm và phân loại

**Hợp chất carbonyl** là hợp chất hữu cơ có chứa nhóm chức **>C=O**.

- **Aldehyde:** nhóm carbonyl liên kết với ít nhất một nguyên tử H — R–CHO. Ví dụ: HCHO (formaldehyde), CH₃CHO (acetaldehyde)
- **Ketone:** nhóm carbonyl liên kết với hai gốc hydrocarbon — R–CO–R'. Ví dụ: CH₃–CO–CH₃ (acetone)

## 2. Danh pháp

Aldehyde: tên hydrocarbon tương ứng + đuôi "**-al**" (methanal, ethanal...)
Ketone: tên hydrocarbon tương ứng + đuôi "**-one**" (propanone...)

## 3. Tính chất vật lí

Formaldehyde là chất khí; các aldehyde/ketone khác thường là chất lỏng có mùi đặc trưng; tan tốt trong nước (do nhóm C=O phân cực) đối với các chất có mạch carbon ngắn.

## 4. Tính chất hoá học

### a) Phản ứng khử — tạo alcohol

> R–CHO + H₂ →(Ni, t°) R–CH₂OH (alcohol bậc 1)
> R–CO–R' + H₂ →(Ni, t°) R–CH(OH)–R' (alcohol bậc 2)

### b) Phản ứng oxi hoá của aldehyde (ketone KHÔNG có phản ứng này — dùng để phân biệt)

**Phản ứng tráng bạc (với thuốc thử Tollens — AgNO₃/NH₃):**
> R–CHO + 2AgNO₃ + 3NH₃ + H₂O →(t°) R–COONH₄ + 2Ag↓ (lớp bạc sáng bóng) + 2NH₄NO₃

**Phản ứng với Cu(OH)₂/NaOH, đun nóng:**
> R–CHO + 2Cu(OH)₂ + NaOH →(t°) R–COONa + Cu₂O↓ (kết tủa đỏ gạch) + 3H₂O

→ Hai phản ứng này là dấu hiệu đặc trưng để **nhận biết và phân biệt aldehyde với ketone** (ketone không phản ứng).

## 5. Điều chế và ứng dụng

**Điều chế:** oxi hoá alcohol bậc 1 (→ aldehyde), oxi hoá alcohol bậc 2 (→ ketone).

**Ứng dụng:** formaldehyde (dung dịch formalin) sát trùng, sản xuất nhựa phenol-formaldehyde; acetone là dung môi hoà tan sơn, vecni, chất tẩy rửa.`,
        },
        {
          title: "Bài 24. Carboxylic acid",
          order: 24,
          content: `## 1. Khái niệm và danh pháp

**Carboxylic acid** là hợp chất hữu cơ có chứa nhóm chức **–COOH** (carboxyl).

Danh pháp thay thế: tên hydrocarbon tương ứng + đuôi "**-oic acid**" (methanoic acid, ethanoic acid...); tên thông thường quen thuộc: formic acid (HCOOH), acetic acid (CH₃COOH).

## 2. Tính chất vật lí

Carboxylic acid có **liên kết hydrogen liên phân tử mạnh hơn alcohol** (do nhóm COOH phân cực mạnh) → nhiệt độ sôi cao hơn alcohol có cùng số carbon; các acid nhỏ tan tốt trong nước, có vị chua.

## 3. Tính chất hoá học

### a) Tính acid (là acid yếu, điện li không hoàn toàn: RCOOH ⇌ RCOO⁻ + H⁺)

- Đổi màu quỳ tím thành đỏ
- Tác dụng kim loại (đứng trước H): 2CH₃COOH + Zn → (CH₃COO)₂Zn + H₂↑
- Tác dụng base, oxide base: CH₃COOH + NaOH → CH₃COONa + H₂O
- Tác dụng muối của acid yếu hơn: 2CH₃COOH + CaCO₃ → (CH₃COO)₂Ca + CO₂↑ + H₂O

### b) Phản ứng ester hoá (với alcohol, xúc tác H₂SO₄ đặc, đun nóng, thuận nghịch)

> RCOOH + R'OH ⇌(H₂SO₄đ, t°) RCOOR' + H₂O

**Ví dụ:** CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ (ethyl acetate, mùi thơm) + H₂O

## 4. Điều chế

- Oxi hoá alcohol bậc 1 hoặc aldehyde: CH₃CH₂OH →[O] CH₃CHO →[O] CH₃COOH
- Lên men giấm: C₂H₅OH + O₂ →(men giấm) CH₃COOH + H₂O

## 5. Ứng dụng

Acetic acid (giấm ăn) dùng trong thực phẩm, tổng hợp hữu cơ; formic acid dùng trong công nghiệp nhuộm, thuộc da; các acid béo (stearic, oleic) là thành phần của chất béo, xà phòng.`,
        },
      ],
      quiz: {
        title: "Ôn tập chương 6",
        questions: [
          {
            text: "Hợp chất carbonyl là hợp chất hữu cơ chứa nhóm chức:",
            options: JSON.stringify(["–OH", ">C=O", "–COOH", "–NH₂"]),
            answer: "1",
          },
          {
            text: "Aldehyde khác ketone ở chỗ nhóm carbonyl trong aldehyde liên kết với:",
            options: JSON.stringify(["Hai gốc hydrocarbon", "Ít nhất một nguyên tử H", "Nhóm OH", "Nguyên tử halogen"]),
            answer: "1",
          },
          {
            text: "Phản ứng tráng bạc dùng thuốc thử:",
            options: JSON.stringify(["Cu(OH)₂/NaOH", "AgNO₃/NH₃ (thuốc thử Tollens)", "Dung dịch Br₂", "Quỳ tím"]),
            answer: "1",
          },
          {
            text: "Chất nào sau đây có phản ứng tráng bạc?",
            options: JSON.stringify(["CH₃–CO–CH₃ (acetone)", "CH₃CHO (acetaldehyde)", "C₂H₅OH (ethanol)", "CH₃COOH (acetic acid)"]),
            answer: "1",
          },
          {
            text: "Phản ứng của aldehyde với Cu(OH)₂/NaOH khi đun nóng tạo kết tủa màu:",
            options: JSON.stringify(["Trắng", "Đỏ gạch (Cu₂O)", "Vàng", "Xanh lam"]),
            answer: "1",
          },
          {
            text: "Ketone KHÔNG có phản ứng nào sau đây (dùng để phân biệt với aldehyde)?",
            options: JSON.stringify(["Phản ứng cộng H₂", "Phản ứng tráng bạc", "Phản ứng với HCN", "Phản ứng khử"]),
            answer: "1",
          },
          {
            text: "Carboxylic acid có nhóm chức đặc trưng là:",
            options: JSON.stringify(["–CHO", "–COOH", "–OH", ">C=O"]),
            answer: "1",
          },
          {
            text: "Carboxylic acid có nhiệt độ sôi cao hơn alcohol có cùng số carbon vì:",
            options: JSON.stringify([
              "Khối lượng phân tử lớn hơn",
              "Liên kết hydrogen giữa các phân tử acid mạnh hơn",
              "Acid có tính acid",
              "Acid không tan trong nước",
            ]),
            answer: "1",
          },
          {
            text: "Phản ứng ester hoá giữa acetic acid và ethanol cần xúc tác:",
            options: JSON.stringify(["NaOH", "HCl", "H₂SO₄ đặc, đun nóng", "H₂O"]),
            answer: "2",
          },
          {
            text: "Phản ứng ester hoá là phản ứng:",
            options: JSON.stringify(["Một chiều, xảy ra hoàn toàn", "Thuận nghịch", "Không cần xúc tác", "Chỉ xảy ra ở nhiệt độ thấp"]),
            answer: "1",
          },
          {
            text: "Carboxylic acid tác dụng với kim loại đứng trước H sinh ra khí:",
            options: JSON.stringify(["O₂", "H₂", "CO₂", "N₂"]),
            answer: "1",
          },
          {
            text: "Acetic acid tác dụng với CaCO₃ sinh ra khí:",
            options: JSON.stringify(["H₂", "CO₂", "SO₂", "NH₃"]),
            answer: "1",
          },
          {
            text: "Acetic acid được điều chế trong công nghiệp thực phẩm (giấm ăn) bằng phương pháp:",
            options: JSON.stringify(["Lên men giấm từ ethanol", "Oxi hoá methane", "Thuỷ phân ester", "Cracking dầu mỏ"]),
            answer: "0",
          },
          {
            text: "Nhóm chức carbonyl khi bị khử bởi H₂ (xúc tác Ni) tạo thành:",
            options: JSON.stringify(["Carboxylic acid", "Alcohol", "Ester", "Alkene"]),
            answer: "1",
          },
          {
            text: "Formaldehyde (HCHO) có ứng dụng quan trọng để sản xuất:",
            options: JSON.stringify(["Nhựa phenol-formaldehyde, dung dịch sát trùng (formalin)", "Xà phòng", "Tơ nylon", "Cao su"]),
            answer: "0",
          },
          {
            text: "Acetone (CH₃COCH₃) chủ yếu được dùng làm:",
            options: JSON.stringify(["Chất sát trùng y tế", "Dung môi hoà tan sơn, vecni", "Nguyên liệu sản xuất tơ", "Chất tẩy trắng"]),
            answer: "1",
          },
          {
            text: "Ethyl acetate (CH₃COOC₂H₅) được tạo ra từ phản ứng giữa:",
            options: JSON.stringify(["Acetic acid và methanol", "Acetic acid và ethanol", "Formic acid và ethanol", "Ethanol và ethanol"]),
            answer: "1",
          },
          {
            text: "Carboxylic acid là acid:",
            options: JSON.stringify(["Mạnh, điện li hoàn toàn", "Yếu, điện li không hoàn toàn", "Không có tính acid", "Chỉ phản ứng với base mạnh"]),
            answer: "1",
          },
          {
            text: "Danh pháp thay thế của carboxylic acid có đuôi:",
            options: JSON.stringify(["-al", "-one", "-oic acid", "-ol"]),
            answer: "2",
          },
          {
            text: "Sản phẩm của phản ứng oxi hoá alcohol bậc 1 hai lần liên tiếp (qua aldehyde) là:",
            options: JSON.stringify(["Ketone", "Carboxylic acid", "Ester", "Ether"]),
            answer: "1",
          },
        ],
      },
    },
  ],
};
