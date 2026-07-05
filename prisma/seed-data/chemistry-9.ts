import { CourseData } from "./types";

export const CHEMISTRY_9_COURSE: CourseData = {
  title: "Hóa học 9",
  slug: "hoa-hoc-9",
  subject: "chemistry",
  grade: "9",
  description: "Các loại hợp chất vô cơ, Kim loại, Phi kim, Hiđrocacbon-nhiên liệu, Dẫn xuất của hiđrocacbon-Polime – chương trình Hóa học 9 THCS.",
  published: true,
  modules: [
    {
      title: "Chương 1. Các loại hợp chất vô cơ",
      order: 1,
      lessons: [
        {
          title: "Bài 1. Tính chất hóa học của oxit. Khái quát về sự phân loại oxit",
          order: 1,
          content: `## 1. Tính chất hóa học của oxit

**Oxit bazơ** có các tính chất: tác dụng với nước (một số oxit) tạo dung dịch bazơ, tác dụng với axit tạo muối và nước, tác dụng với oxit axit tạo muối.

**Oxit axit** có các tính chất: tác dụng với nước tạo dung dịch axit, tác dụng với dung dịch bazơ tạo muối và nước, tác dụng với oxit bazơ tạo muối.

## 2. Phân loại oxit

Oxit được chia thành 4 loại: **oxit bazơ, oxit axit, oxit lưỡng tính, oxit trung tính**.

**Ví dụ:** CaO + H₂O → Ca(OH)₂; CO₂ + Ca(OH)₂ → CaCO₃ + H₂O`,
        },
        {
          title: "Bài 2. Một số oxit quan trọng",
          order: 2,
          content: `## 1. Canxi oxit (CaO)

Là oxit bazơ, tác dụng với nước tạo Ca(OH)₂ (vôi tôi), tác dụng với axit và oxit axit. Ứng dụng: sản xuất vôi, xử lý đất chua, khử chua đất trồng.

## 2. Lưu huỳnh đioxit (SO₂)

Là oxit axit, tác dụng với nước tạo axit sunfurơ H₂SO₃, tác dụng với dung dịch bazơ và oxit bazơ. Là một trong những chất gây ô nhiễm không khí, gây mưa axit.`,
        },
        {
          title: "Bài 3. Tính chất hóa học của axit",
          order: 3,
          content: `## Tính chất hóa học của axit

- Làm đổi màu quỳ tím thành đỏ
- Tác dụng với kim loại (đứng trước H) tạo muối và giải phóng khí H₂
- Tác dụng với bazơ tạo muối và nước (phản ứng trung hòa)
- Tác dụng với oxit bazơ tạo muối và nước
- Một số axit tác dụng với muối

**Ví dụ:** Fe + 2HCl → FeCl₂ + H₂↑; NaOH + HCl → NaCl + H₂O`,
        },
        {
          title: "Bài 4. Một số axit quan trọng",
          order: 4,
          content: `## 1. Axit clohiđric (HCl)

Có đầy đủ tính chất hóa học của axit. Ứng dụng: điều chế muối clorua, làm sạch bề mặt kim loại, chế biến thực phẩm, dược phẩm.

## 2. Axit sunfuric (H₂SO₄)

Axit sunfuric loãng có tính chất của axit thông thường. Axit sunfuric đặc còn có tính chất riêng: tác dụng với nhiều kim loại không giải phóng H₂, có tính háo nước (làm than hóa đường, giấy, vải).

Ứng dụng: sản xuất phân bón, thuốc trừ sâu, chất tẩy rửa, chế biến dầu mỏ.`,
        },
        {
          title: "Bài 5. Luyện tập: Tính chất hóa học của oxit và axit",
          order: 5,
          content: `## Hệ thống hóa kiến thức

Ôn tập mối quan hệ giữa oxit bazơ, oxit axit, axit và bazơ qua sơ đồ chuyển hóa. Vận dụng giải bài tập nhận biết, viết phương trình hóa học minh họa tính chất của oxit và axit đã học.

**Ví dụ bài tập:** Cho các chất CaO, SO₂, HCl, hãy viết PTHH thể hiện tính chất hóa học của mỗi chất khi tác dụng với nước.`,
        },
        {
          title: "Bài 6. Thực hành: Tính chất hóa học của oxit và axit",
          order: 6,
          content: `## Mục đích và cách tiến hành

- Thí nghiệm 1: Phản ứng của CaO với nước, quan sát hiện tượng tỏa nhiệt, tạo dung dịch bazơ
- Thí nghiệm 2: Phản ứng của P₂O₅ với nước, thử dung dịch bằng quỳ tím
- Thí nghiệm 3: Nhận biết dung dịch axit HCl, H₂SO₄ và dung dịch muối Na₂SO₄ đựng trong các lọ mất nhãn bằng phương pháp hóa học`,
        },
        {
          title: "Bài 7. Tính chất hóa học của bazơ",
          order: 7,
          content: `## Tính chất hóa học của bazơ

- Làm đổi màu quỳ tím thành xanh, phenolphtalein không màu thành hồng (bazơ tan)
- Tác dụng với axit tạo muối và nước
- Bazơ tan tác dụng với oxit axit tạo muối và nước
- Bazơ không tan bị nhiệt phân hủy tạo oxit và nước
- Dung dịch bazơ tác dụng với dung dịch muối

**Ví dụ:** Cu(OH)₂ →(nhiệt) CuO + H₂O; NaOH + CO₂ → Na₂CO₃ + H₂O`,
        },
        {
          title: "Bài 8. Một số bazơ quan trọng",
          order: 8,
          content: `## 1. Natri hiđroxit (NaOH)

Là bazơ tan mạnh, có đầy đủ tính chất hóa học của bazơ. Ứng dụng: sản xuất xà phòng, giấy, tơ nhân tạo, chế biến dầu mỏ.

## 2. Canxi hiđroxit (Ca(OH)₂) - Thang pH

Ca(OH)₂ (nước vôi trong) là bazơ ít tan, có tính chất của bazơ. Ứng dụng: khử chua đất, xử lý nước thải, chế tạo vữa xây.

Thang pH dùng biểu thị độ axit/bazơ của dung dịch: pH=7 trung tính, pH<7 tính axit, pH>7 tính bazơ.`,
        },
        {
          title: "Bài 9. Tính chất hóa học của muối",
          order: 9,
          content: `## Tính chất hóa học của muối

- Tác dụng với kim loại tạo muối mới và kim loại mới
- Tác dụng với axit tạo muối mới và axit mới
- Tác dụng với dung dịch muối khác tạo hai muối mới
- Tác dụng với dung dịch bazơ tạo muối mới và bazơ mới
- Một số muối bị nhiệt phân hủy

**Ví dụ:** CuSO₄ + Fe → FeSO₄ + Cu; AgNO₃ + NaCl → AgCl↓ + NaNO₃`,
        },
        {
          title: "Bài 10. Một số muối quan trọng",
          order: 10,
          content: `## 1. Muối natri clorua (NaCl)

Có trong nước biển và mỏ muối. Ứng dụng: làm gia vị, bảo quản thực phẩm, nguyên liệu sản xuất Na, NaOH, Cl₂, các hợp chất khác.

## 2. Muối kali nitrat (KNO₃)

Tan nhiều trong nước, bị phân hủy ở nhiệt độ cao giải phóng oxi. Ứng dụng: chế tạo thuốc nổ đen, làm phân bón.`,
        },
        {
          title: "Bài 11. Phân bón hóa học",
          order: 11,
          content: `## 1. Vai trò của các nguyên tố hóa học đối với thực vật

Cây trồng cần các nguyên tố N, P, K, Ca, Mg, S và một số nguyên tố vi lượng để sinh trưởng và phát triển.

## 2. Một số phân bón hóa học thường dùng

- **Phân đạm:** cung cấp N (ure, amoni nitrat...)
- **Phân lân:** cung cấp P (supephotphat...)
- **Phân kali:** cung cấp K (kali clorua, kali sunfat...)
- **Phân hỗn hợp và phân vi lượng:** chứa 2-3 nguyên tố dinh dưỡng chính hoặc các nguyên tố vi lượng`,
        },
        {
          title: "Bài 12. Mối quan hệ giữa các loại hợp chất vô cơ",
          order: 12,
          content: `## Sơ đồ mối quan hệ

Oxit bazơ, oxit axit, bazơ, axit, muối có mối quan hệ qua lại và có thể chuyển hóa lẫn nhau thông qua các phản ứng hóa học đã học.

**Ví dụ chuỗi chuyển hóa:** Na → Na₂O → NaOH → NaCl → NaNO₃, viết đầy đủ PTHH thể hiện mỗi bước chuyển hóa.`,
        },
        {
          title: "Bài 13. Luyện tập chương 1: Các loại hợp chất vô cơ",
          order: 13,
          content: `## Hệ thống hóa kiến thức chương 1

Ôn tập toàn bộ tính chất hóa học của oxit, axit, bazơ, muối và mối quan hệ giữa chúng. Vận dụng giải các bài tập nhận biết chất, hoàn thành chuỗi phản ứng, tính toán theo phương trình hóa học.`,
        },
        {
          title: "Bài 14. Thực hành: Tính chất hóa học của bazơ và muối",
          order: 14,
          content: `## Mục đích và cách tiến hành

- Thí nghiệm: Điều chế Cu(OH)₂ và thử tính bị nhiệt phân hủy
- Thí nghiệm: Phản ứng của NaOH với dung dịch muối FeCl₃
- Thí nghiệm: Phản ứng của muối CuSO₄ với kim loại Fe, và phản ứng của BaCl₂ với dung dịch Na₂SO₄`,
        },
      ],
      quiz: {
        title: "Ôn tập chương 1: Các loại hợp chất vô cơ",
        questions: [
          { text: "Oxit bazơ tác dụng với axit tạo ra:", options: JSON.stringify(["Muối và nước", "Chỉ có muối", "Chỉ có nước", "Không phản ứng"]), answer: "0" },
          { text: "Oxit axit tác dụng với nước tạo ra:", options: JSON.stringify(["Dung dịch bazơ", "Dung dịch axit", "Muối", "Không tạo gì"]), answer: "1" },
          { text: "CaO tác dụng với nước tạo ra:", options: JSON.stringify(["Ca(OH)2", "CaCO3", "CaCl2", "CaSO4"]), answer: "0" },
          { text: "Axit làm quỳ tím chuyển sang màu:", options: JSON.stringify(["Xanh", "Đỏ", "Vàng", "Không đổi màu"]), answer: "1" },
          { text: "Axit tác dụng với kim loại đứng trước H tạo ra:", options: JSON.stringify(["Muối và giải phóng khí H2", "Chỉ có muối", "Oxit kim loại", "Không phản ứng"]), answer: "0" },
          { text: "Axit sunfuric đặc có tính chất đặc biệt là:", options: JSON.stringify(["Tính háo nước", "Không phản ứng với kim loại", "Làm quỳ tím hóa xanh", "Không dẫn điện"]), answer: "0" },
          { text: "Bazơ tan làm quỳ tím chuyển sang màu:", options: JSON.stringify(["Đỏ", "Xanh", "Vàng", "Không đổi"]), answer: "1" },
          { text: "Bazơ không tan khi bị nhiệt phân hủy tạo ra:", options: JSON.stringify(["Oxit và nước", "Muối và axit", "Chỉ có nước", "Kim loại"]), answer: "0" },
          { text: "NaOH được ứng dụng để sản xuất:", options: JSON.stringify(["Xà phòng, giấy", "Chỉ dùng làm gia vị", "Thuốc nổ", "Chỉ dùng trong y tế"]), answer: "0" },
          { text: "Dung dịch có pH > 7 có tính chất:", options: JSON.stringify(["Axit", "Bazơ", "Trung tính", "Không xác định"]), answer: "1" },
          { text: "Muối tác dụng với kim loại tạo ra:", options: JSON.stringify(["Muối mới và kim loại mới", "Chỉ có khí", "Chỉ có nước", "Oxit"]), answer: "0" },
          { text: "Phản ứng CuSO4 + Fe tạo ra sản phẩm:", options: JSON.stringify(["FeSO4 và Cu", "CuFe và SO4", "Fe2(SO4)3", "Không phản ứng"]), answer: "0" },
          { text: "NaCl được khai thác chủ yếu từ:", options: JSON.stringify(["Nước biển và mỏ muối", "Không khí", "Đất sét", "Đá vôi"]), answer: "0" },
          { text: "Phân đạm cung cấp nguyên tố chính là:", options: JSON.stringify(["Nitơ (N)", "Photpho (P)", "Kali (K)", "Canxi (Ca)"]), answer: "0" },
          { text: "Phân lân cung cấp nguyên tố chính là:", options: JSON.stringify(["Nitơ (N)", "Photpho (P)", "Kali (K)", "Lưu huỳnh (S)"]), answer: "1" },
          { text: "Phân kali cung cấp nguyên tố chính là:", options: JSON.stringify(["Kali (K)", "Nitơ (N)", "Photpho (P)", "Canxi (Ca)"]), answer: "0" },
          { text: "Sơ đồ Na → Na2O → NaOH thể hiện:", options: JSON.stringify(["Mối quan hệ giữa các hợp chất vô cơ", "Phản ứng oxi hóa khử đơn thuần", "Phản ứng phân hủy", "Phản ứng trao đổi ion"]), answer: "0" },
          { text: "Phản ứng trung hòa là phản ứng giữa:", options: JSON.stringify(["Axit và bazơ", "Oxit và kim loại", "Muối và muối", "Kim loại và kim loại"]), answer: "0" },
          { text: "AgNO3 + NaCl tạo ra kết tủa:", options: JSON.stringify(["AgCl", "Ag2O", "NaNO3 kết tủa", "Không có kết tủa"]), answer: "0" },
          { text: "SO2 là oxit thuộc loại:", options: JSON.stringify(["Oxit bazơ", "Oxit axit", "Oxit lưỡng tính", "Oxit trung tính"]), answer: "1" },
        ],
      },
    },
    {
      title: "Chương 2. Kim loại",
      order: 2,
      lessons: [
        {
          title: "Bài 15. Tính chất vật lý của kim loại",
          order: 1,
          content: `## Tính chất vật lý chung

- **Tính dẻo:** kim loại có thể kéo sợi, dát mỏng, rèn được
- **Tính dẫn điện:** kim loại dẫn điện tốt, Ag dẫn điện tốt nhất, sau đó đến Cu, Al, Fe
- **Tính dẫn nhiệt:** kim loại dẫn nhiệt tốt
- **Ánh kim:** kim loại có vẻ sáng lấp lánh (ánh kim)

Ngoài ra kim loại còn có tính chất riêng: khối lượng riêng, nhiệt độ nóng chảy, độ cứng khác nhau tùy kim loại.`,
        },
        {
          title: "Bài 16. Tính chất hóa học của kim loại",
          order: 2,
          content: `## Tính chất hóa học chung của kim loại

- **Tác dụng với phi kim:** nhiều kim loại tác dụng với oxi tạo oxit, tác dụng với phi kim khác (Cl₂, S...) tạo muối
- **Tác dụng với dung dịch axit:** một số kim loại tác dụng với dung dịch axit (HCl, H₂SO₄ loãng) tạo muối và giải phóng H₂
- **Tác dụng với dung dịch muối:** kim loại mạnh hơn đẩy kim loại yếu hơn ra khỏi dung dịch muối của nó

**Ví dụ:** 3Fe + 2O₂ →(t°) Fe₃O₄; Zn + CuSO₄ → ZnSO₄ + Cu`,
        },
        {
          title: "Bài 17. Dãy hoạt động hóa học của kim loại",
          order: 3,
          content: `## Dãy hoạt động hóa học của một số kim loại

> **K, Na, Mg, Al, Zn, Fe, Pb, (H), Cu, Ag, Au**

Ý nghĩa của dãy:
- Mức độ hoạt động hóa học của kim loại giảm dần từ trái sang phải
- Kim loại đứng trước Mg phản ứng với nước ở điều kiện thường tạo bazơ và giải phóng khí H₂
- Kim loại đứng trước H phản ứng với một số dung dịch axit giải phóng khí H₂
- Kim loại đứng trước (trừ Na, K...) đẩy được kim loại đứng sau ra khỏi dung dịch muối`,
        },
        {
          title: "Bài 18. Nhôm",
          order: 4,
          content: `## 1. Tính chất vật lý

Nhôm là kim loại màu trắng bạc, có ánh kim, nhẹ, dẫn điện và dẫn nhiệt tốt, dẻo.

## 2. Tính chất hóa học

Nhôm có tính chất hóa học của kim loại: tác dụng với phi kim, dung dịch axit, dung dịch muối. Ngoài ra nhôm còn tác dụng được với dung dịch kiềm (NaOH) do có lớp oxit Al₂O₃ lưỡng tính bảo vệ.

## 3. Sản xuất nhôm

Nhôm được sản xuất bằng phương pháp điện phân nóng chảy quặng boxit (Al₂O₃).`,
        },
        {
          title: "Bài 19. Sắt",
          order: 5,
          content: `## 1. Tính chất vật lý

Sắt là kim loại màu trắng xám, có ánh kim, dẫn điện, dẫn nhiệt tốt, dẻo, có tính nhiễm từ.

## 2. Tính chất hóa học

Sắt có đầy đủ tính chất hóa học của kim loại: tác dụng với phi kim (tạo oxit sắt từ, muối sắt (III) với Cl₂), tác dụng với dung dịch axit tạo muối sắt (II), tác dụng với dung dịch muối của kim loại yếu hơn.

**Lưu ý:** Sắt có hai hóa trị thường gặp là II và III tùy chất phản ứng.`,
        },
        {
          title: "Bài 20. Hợp kim sắt: Gang, thép",
          order: 6,
          content: `## 1. Hợp kim của sắt

**Gang** là hợp kim của sắt với cacbon (2-5%) và một số nguyên tố khác. **Thép** là hợp kim của sắt với cacbon (dưới 2%) và một số nguyên tố khác.

## 2. Sản xuất gang, thép

- Sản xuất gang: luyện quặng sắt (oxit sắt) trong lò cao bằng CO ở nhiệt độ cao
- Sản xuất thép: luyện gang hoặc sắt phế liệu trong lò luyện thép, oxi hóa loại bỏ bớt các nguyên tố cacbon, silic, mangan...`,
        },
        {
          title: "Bài 21. Sự ăn mòn kim loại và bảo vệ kim loại không bị ăn mòn",
          order: 7,
          content: `## 1. Sự ăn mòn kim loại

Sự phá hủy kim loại, hợp kim do tác dụng hóa học của môi trường xung quanh gọi là sự ăn mòn kim loại.

## 2. Các yếu tố ảnh hưởng

Sự ăn mòn kim loại phụ thuộc vào thành phần của môi trường và nhiệt độ (nhiệt độ càng cao, ăn mòn càng nhanh).

## 3. Biện pháp bảo vệ

- Ngăn không cho kim loại tiếp xúc với môi trường (sơn, mạ, bôi dầu mỡ...)
- Chế tạo hợp kim ít bị ăn mòn (thép không gỉ - inox)`,
        },
        {
          title: "Bài 22. Luyện tập chương 2: Kim loại",
          order: 8,
          content: `## Hệ thống hóa kiến thức

Ôn tập tính chất vật lý, tính chất hóa học chung của kim loại, dãy hoạt động hóa học, tính chất riêng của nhôm và sắt, hợp kim gang thép, sự ăn mòn kim loại. Vận dụng giải bài tập nhận biết kim loại, viết PTHH, tính toán theo phương trình.`,
        },
        {
          title: "Bài 23. Thực hành: Tính chất hóa học của nhôm và sắt",
          order: 9,
          content: `## Mục đích và cách tiến hành

- Thí nghiệm: Tác dụng của bột nhôm với oxi (đốt cháy), quan sát hiện tượng
- Thí nghiệm: Tác dụng của sắt với lưu huỳnh (đun nóng hỗn hợp bột Fe và S)
- Thí nghiệm: Nhận biết kim loại nhôm và sắt bằng dung dịch NaOH (nhôm tan, sắt không tan)`,
        },
        {
          title: "Bài 24. Ôn tập học kì 1",
          order: 10,
          content: `## Hệ thống hóa kiến thức học kì 1

Tổng ôn toàn bộ nội dung: các loại hợp chất vô cơ (oxit, axit, bazơ, muối) và tính chất, ứng dụng của kim loại (tính chất chung, dãy hoạt động hóa học, nhôm, sắt, hợp kim, sự ăn mòn). Luyện tập các dạng bài tập nhận biết chất, viết chuỗi phản ứng, tính theo phương trình hóa học đã học trong học kì 1.`,
        },
      ],
      quiz: {
        title: "Ôn tập chương 2: Kim loại",
        questions: [
          { text: "Kim loại dẫn điện tốt nhất là:", options: JSON.stringify(["Đồng (Cu)", "Bạc (Ag)", "Nhôm (Al)", "Sắt (Fe)"]), answer: "1" },
          { text: "Tính chất vật lý chung của kim loại gồm:", options: JSON.stringify(["Tính dẻo, dẫn điện, dẫn nhiệt, ánh kim", "Chỉ có tính dẻo", "Chỉ dẫn điện", "Không có tính chất chung"]), answer: "0" },
          { text: "Kim loại tác dụng với dung dịch axit (HCl, H2SO4 loãng) tạo ra:", options: JSON.stringify(["Muối và giải phóng khí H2", "Chỉ có muối", "Oxit kim loại", "Không phản ứng"]), answer: "0" },
          { text: "Trong dãy hoạt động hóa học, kim loại mạnh nhất trong các kim loại sau là:", options: JSON.stringify(["K", "Cu", "Ag", "Au"]), answer: "0" },
          { text: "Kim loại đứng trước H trong dãy hoạt động hóa học thì:", options: JSON.stringify(["Phản ứng với axit giải phóng H2", "Không phản ứng với axit", "Không tồn tại trong tự nhiên", "Luôn là kim loại quý"]), answer: "0" },
          { text: "Nhôm được sản xuất bằng phương pháp:", options: JSON.stringify(["Điện phân nóng chảy quặng boxit", "Nung quặng trong lò cao", "Nhiệt phân muối nhôm", "Điện phân dung dịch"]), answer: "0" },
          { text: "Nhôm có phản ứng đặc biệt với:", options: JSON.stringify(["Dung dịch kiềm NaOH", "Dung dịch muối ăn", "Nước tinh khiết", "Khí nitơ"]), answer: "0" },
          { text: "Sắt có tính chất vật lý đặc biệt là:", options: JSON.stringify(["Tính nhiễm từ", "Không dẫn điện", "Rất nhẹ", "Trong suốt"]), answer: "0" },
          { text: "Gang là hợp kim của sắt với cacbon có hàm lượng cacbon:", options: JSON.stringify(["2-5%", "Dưới 2%", "Trên 10%", "0%"]), answer: "0" },
          { text: "Thép là hợp kim của sắt với cacbon có hàm lượng cacbon:", options: JSON.stringify(["Trên 5%", "Dưới 2%", "10-20%", "50%"]), answer: "1" },
          { text: "Sản xuất gang dùng nguyên liệu chính là:", options: JSON.stringify(["Quặng sắt và CO trong lò cao", "Nhôm và oxi", "Đồng và lưu huỳnh", "Muối ăn"]), answer: "0" },
          { text: "Sự ăn mòn kim loại là:", options: JSON.stringify(["Sự phá hủy kim loại do tác dụng hóa học của môi trường", "Sự nóng chảy kim loại", "Sự kéo dài kim loại", "Sự phát sáng của kim loại"]), answer: "0" },
          { text: "Biện pháp bảo vệ kim loại khỏi ăn mòn là:", options: JSON.stringify(["Sơn, mạ, bôi dầu mỡ", "Để kim loại ngoài trời mưa", "Ngâm kim loại trong nước muối", "Không có biện pháp nào"]), answer: "0" },
          { text: "Thép không gỉ (inox) là ví dụ về:", options: JSON.stringify(["Hợp kim ít bị ăn mòn", "Kim loại nguyên chất", "Phi kim", "Hợp chất hữu cơ"]), answer: "0" },
          { text: "Nhiệt độ càng cao thì sự ăn mòn kim loại:", options: JSON.stringify(["Càng nhanh", "Càng chậm", "Không đổi", "Dừng lại"]), answer: "0" },
          { text: "Kim loại đứng trước Mg trong dãy hoạt động hóa học phản ứng với nước tạo ra:", options: JSON.stringify(["Bazơ và khí H2", "Axit", "Muối trung hòa", "Không phản ứng"]), answer: "0" },
          { text: "Phản ứng Zn + CuSO4 tạo ra sản phẩm:", options: JSON.stringify(["ZnSO4 và Cu", "ZnCu và SO4", "Không phản ứng", "Zn(OH)2"]), answer: "0" },
          { text: "3Fe + 2O2 đun nóng tạo ra:", options: JSON.stringify(["Fe3O4", "FeO", "Fe2O3", "FeS"]), answer: "0" },
          { text: "Kim loại nào sau đây đứng sau H trong dãy hoạt động hóa học?", options: JSON.stringify(["Ag", "Zn", "Fe", "Al"]), answer: "0" },
          { text: "Al2O3 có tính chất là oxit:", options: JSON.stringify(["Lưỡng tính", "Chỉ là oxit bazơ", "Chỉ là oxit axit", "Trung tính"]), answer: "0" },
        ],
      },
    },
    {
      title: "Chương 3. Phi kim. Sơ lược về bảng tuần hoàn các nguyên tố hóa học",
      order: 3,
      lessons: [
        {
          title: "Bài 25. Tính chất của phi kim",
          order: 1,
          content: `## 1. Tính chất vật lý

Phi kim tồn tại ở cả 3 trạng thái: rắn (C, S, P...), lỏng (Br₂), khí (O₂, Cl₂, N₂...). Phần lớn không dẫn điện, dẫn nhiệt, nhiệt độ nóng chảy thấp.

## 2. Tính chất hóa học

- Tác dụng với kim loại tạo muối hoặc oxit
- Tác dụng với hiđro tạo hợp chất khí
- Tác dụng với oxi tạo oxit axit

Mức độ hoạt động hóa học của phi kim được xét dựa vào khả năng phản ứng với kim loại và hiđro: F, O, Cl là phi kim mạnh.`,
        },
        {
          title: "Bài 26. Clo",
          order: 2,
          content: `## 1. Tính chất vật lý

Clo là chất khí màu vàng lục, mùi hắc, độc.

## 2. Tính chất hóa học

Clo có tính chất hóa học của phi kim (tác dụng với kim loại, hiđro) và còn tác dụng với nước, với dung dịch NaOH tạo nước Javen.

## 3. Ứng dụng và điều chế

Ứng dụng: khử trùng nước sinh hoạt, tẩy trắng vải sợi, sản xuất nhựa PVC, chất diệt trùng. Điều chế trong phòng thí nghiệm bằng MnO₂ tác dụng HCl đặc.`,
        },
        {
          title: "Bài 27. Cacbon",
          order: 3,
          content: `## 1. Các dạng thù hình của cacbon

Cacbon có 3 dạng thù hình chính: kim cương (cứng, trong suốt), than chì (mềm, dẫn điện), cacbon vô định hình (than gỗ, than đá, mồ hóng).

## 2. Tính chất hóa học

Cacbon có tính khử: tác dụng với oxi tạo CO₂ (khi dư oxi) hoặc CO (khi thiếu oxi), khử được oxit của một số kim loại (như CuO, Fe₂O₃) ở nhiệt độ cao.

**Ví dụ:** C + 2CuO →(t°) 2Cu + CO₂↑`,
        },
        {
          title: "Bài 28. Các oxit của cacbon",
          order: 4,
          content: `## 1. Cacbon oxit (CO)

Là oxit trung tính, không tạo muối trong điều kiện thường. Có tính khử mạnh: khử được nhiều oxit kim loại ở nhiệt độ cao. CO rất độc.

## 2. Cacbon đioxit (CO₂)

Là oxit axit, tác dụng với nước tạo axit cacbonic, tác dụng với dung dịch bazơ và oxit bazơ tạo muối cacbonat. Ứng dụng: chữa cháy, bảo quản thực phẩm, sản xuất nước giải khát có gas.`,
        },
        {
          title: "Bài 29. Axit cacbonic và muối cacbonat",
          order: 5,
          content: `## 1. Axit cacbonic (H₂CO₃)

Là axit yếu, không bền, dễ bị phân hủy thành CO₂ và H₂O.

## 2. Muối cacbonat

Có 2 loại: muối cacbonat trung hòa (CaCO₃, Na₂CO₃...) và muối hiđrocacbonat (Ca(HCO₃)₂, NaHCO₃...).

Tính chất: tác dụng với dung dịch axit giải phóng CO₂, một số muối cacbonat tan tác dụng với dung dịch bazơ và dung dịch muối khác, đa số muối cacbonat trung hòa (trừ muối kim loại kiềm) bị nhiệt phân hủy.`,
        },
        {
          title: "Bài 30. Silic. Công nghiệp silicat",
          order: 6,
          content: `## 1. Silic (Si)

Là phi kim hoạt động hóa học yếu hơn cacbon, clo. Silic đioxit (SiO₂) là oxit axit, tác dụng với kiềm và oxit bazơ ở nhiệt độ cao.

## 2. Công nghiệp silicat

Bao gồm sản xuất **đồ gốm sứ** (từ đất sét, thạch anh, fenspat), **thủy tinh** (từ cát trắng, đá vôi, sođa), **xi măng** (từ đất sét, đá vôi và một số phụ gia).`,
        },
        {
          title: "Bài 31. Sơ lược về bảng tuần hoàn các nguyên tố hóa học",
          order: 7,
          content: `## 1. Nguyên tắc sắp xếp

Các nguyên tố được sắp xếp theo chiều tăng dần của điện tích hạt nhân.

## 2. Cấu tạo bảng tuần hoàn

- **Ô nguyên tố:** cho biết số hiệu nguyên tử, kí hiệu hóa học, tên nguyên tố, nguyên tử khối
- **Chu kì:** dãy các nguyên tố có cùng số lớp electron, xếp theo chiều điện tích hạt nhân tăng dần
- **Nhóm:** gồm các nguyên tố có số electron lớp ngoài cùng bằng nhau, tính chất hóa học tương tự nhau

## 3. Sự biến đổi tính chất

Trong một chu kì, tính kim loại giảm dần, tính phi kim tăng dần theo chiều tăng điện tích hạt nhân. Trong một nhóm, tính kim loại tăng dần theo chiều tăng điện tích hạt nhân.`,
        },
        {
          title: "Bài 32. Luyện tập chương 3: Phi kim - Sơ lược về bảng tuần hoàn các nguyên tố hóa học",
          order: 8,
          content: `## Hệ thống hóa kiến thức

Ôn tập tính chất của phi kim nói chung, tính chất riêng của clo, cacbon và các oxit của cacbon, muối cacbonat, silic và công nghiệp silicat, cấu tạo và quy luật biến đổi trong bảng tuần hoàn. Vận dụng giải bài tập viết PTHH, xác định vị trí nguyên tố trong bảng tuần hoàn.`,
        },
        {
          title: "Bài 33. Thực hành: Tính chất hóa học của phi kim và hợp chất của chúng",
          order: 9,
          content: `## Mục đích và cách tiến hành

- Thí nghiệm: Cacbon khử CuO ở nhiệt độ cao, quan sát sự đổi màu và khí CO₂ tạo thành (thử bằng nước vôi trong)
- Thí nghiệm: Nhiệt phân muối NaHCO₃, thử khí CO₂ sinh ra
- Thí nghiệm: Nhận biết các dung dịch muối cacbonat và muối clorua bằng dung dịch axit và dung dịch AgNO₃`,
        },
      ],
      quiz: {
        title: "Ôn tập chương 3: Phi kim",
        questions: [
          { text: "Phi kim tồn tại ở trạng thái:", options: JSON.stringify(["Chỉ rắn", "Rắn, lỏng, khí", "Chỉ khí", "Chỉ lỏng"]), answer: "1" },
          { text: "Phần lớn phi kim có tính chất dẫn điện là:", options: JSON.stringify(["Dẫn điện tốt", "Không dẫn điện", "Dẫn điện như kim loại", "Dẫn điện khi nóng chảy"]), answer: "1" },
          { text: "Clo là chất khí có màu:", options: JSON.stringify(["Vàng lục", "Không màu", "Nâu đỏ", "Xanh lam"]), answer: "0" },
          { text: "Clo tác dụng với dung dịch NaOH tạo ra:", options: JSON.stringify(["Nước Javen", "Khí H2", "Muối ăn tinh khiết", "Không phản ứng"]), answer: "0" },
          { text: "Cacbon có bao nhiêu dạng thù hình chính?", options: JSON.stringify(["2", "3", "4", "1"]), answer: "1" },
          { text: "Dạng thù hình cứng nhất của cacbon là:", options: JSON.stringify(["Than chì", "Kim cương", "Than gỗ", "Mồ hóng"]), answer: "1" },
          { text: "Cacbon khử CuO tạo ra sản phẩm:", options: JSON.stringify(["Cu và CO2", "CuO2", "Cu(OH)2", "CuCO3"]), answer: "0" },
          { text: "CO là oxit thuộc loại:", options: JSON.stringify(["Oxit axit", "Oxit trung tính", "Oxit bazơ", "Oxit lưỡng tính"]), answer: "1" },
          { text: "CO2 tác dụng với nước tạo ra:", options: JSON.stringify(["Axit cacbonic H2CO3", "Bazơ", "Muối trung hòa", "Không phản ứng"]), answer: "0" },
          { text: "Axit cacbonic là axit:", options: JSON.stringify(["Mạnh và bền", "Yếu và không bền", "Không tồn tại", "Chỉ có ở dạng khí"]), answer: "1" },
          { text: "Muối hiđrocacbonat là loại muối:", options: JSON.stringify(["NaHCO3, Ca(HCO3)2", "NaCl, KCl", "Na2CO3, CaCO3 trung hòa", "Chỉ có CaCO3"]), answer: "0" },
          { text: "SiO2 là oxit thuộc loại:", options: JSON.stringify(["Oxit axit", "Oxit bazơ", "Oxit trung tính", "Oxit lưỡng tính"]), answer: "0" },
          { text: "Công nghiệp silicat KHÔNG bao gồm:", options: JSON.stringify(["Sản xuất đồ gốm sứ", "Sản xuất thủy tinh", "Sản xuất xi măng", "Sản xuất phân đạm"]), answer: "3" },
          { text: "Bảng tuần hoàn sắp xếp nguyên tố theo:", options: JSON.stringify(["Chiều tăng điện tích hạt nhân", "Chiều giảm khối lượng", "Thứ tự bảng chữ cái", "Ngẫu nhiên"]), answer: "0" },
          { text: "Chu kì trong bảng tuần hoàn là:", options: JSON.stringify(["Dãy nguyên tố có cùng số lớp electron", "Cột các nguyên tố giống nhau", "Nhóm nguyên tố kim loại", "Chỉ gồm phi kim"]), answer: "0" },
          { text: "Nhóm trong bảng tuần hoàn gồm các nguyên tố có:", options: JSON.stringify(["Số electron lớp ngoài cùng bằng nhau", "Cùng số lớp electron", "Cùng khối lượng nguyên tử", "Cùng trạng thái tồn tại"]), answer: "0" },
          { text: "Trong một chu kì, theo chiều tăng điện tích hạt nhân, tính kim loại:", options: JSON.stringify(["Tăng dần", "Giảm dần", "Không đổi", "Biến đổi không theo quy luật"]), answer: "1" },
          { text: "Trong một nhóm, theo chiều tăng điện tích hạt nhân, tính kim loại:", options: JSON.stringify(["Giảm dần", "Tăng dần", "Không đổi", "Không theo quy luật"]), answer: "1" },
          { text: "Ô nguyên tố trong bảng tuần hoàn KHÔNG cho biết:", options: JSON.stringify(["Số hiệu nguyên tử", "Kí hiệu hóa học", "Nguyên tử khối", "Giá thành nguyên tố"]), answer: "3" },
          { text: "CO rất độc vì:", options: JSON.stringify(["Có khả năng kết hợp với hemoglobin trong máu", "Có mùi hắc khó chịu", "Có màu vàng lục", "Có tính axit mạnh"]), answer: "0" },
        ],
      },
    },
    {
      title: "Chương 4. Hiđrocacbon, nhiên liệu",
      order: 4,
      lessons: [
        {
          title: "Bài 34. Khái niệm về hợp chất hữu cơ và hóa học hữu cơ",
          order: 1,
          content: `## 1. Hợp chất hữu cơ

Hợp chất hữu cơ là hợp chất của cacbon (trừ CO, CO₂, muối cacbonat, H₂CO₃... vẫn được coi là hợp chất vô cơ).

## 2. Phân loại hợp chất hữu cơ

Chia làm 2 loại chính:
- **Hiđrocacbon:** chỉ chứa C và H (metan, etilen, benzen...)
- **Dẫn xuất của hiđrocacbon:** ngoài C, H còn có các nguyên tố khác như O, N, Cl... (rượu etylic, axit axetic...)`,
        },
        {
          title: "Bài 35. Cấu tạo phân tử hợp chất hữu cơ",
          order: 2,
          content: `## Đặc điểm cấu tạo phân tử hợp chất hữu cơ

- Trong hợp chất hữu cơ, cacbon luôn có hóa trị **IV**, hiđro hóa trị I, oxi hóa trị II
- Các nguyên tử liên kết với nhau theo đúng hóa trị, mỗi liên kết biểu diễn bằng một nét gạch nối
- Các nguyên tử cacbon có thể liên kết trực tiếp với nhau tạo thành **mạch cacbon** (mạch thẳng, mạch nhánh, mạch vòng)
- Mỗi hợp chất hữu cơ có một công thức cấu tạo ứng với một trật tự liên kết xác định giữa các nguyên tử trong phân tử`,
        },
        {
          title: "Bài 36. Metan",
          order: 3,
          content: `## 1. Tính chất vật lý

Metan (CH₄) là chất khí không màu, không mùi, ít tan trong nước, nhẹ hơn không khí.

## 2. Cấu tạo phân tử

Trong phân tử metan có 4 liên kết đơn C-H.

## 3. Tính chất hóa học

- **Phản ứng cháy:** CH₄ + 2O₂ →(t°) CO₂ + 2H₂O, tỏa nhiều nhiệt
- **Phản ứng thế với clo (ánh sáng):** CH₄ + Cl₂ →(ánh sáng) CH₃Cl + HCl

Metan được dùng làm nhiên liệu, nguyên liệu trong đời sống và công nghiệp.`,
        },
        {
          title: "Bài 37. Etilen",
          order: 4,
          content: `## 1. Tính chất vật lý và cấu tạo

Etilen (C₂H₄) là chất khí không màu, không mùi, ít tan trong nước. Trong phân tử có một **liên kết đôi** C=C.

## 2. Tính chất hóa học

- **Phản ứng cháy:** tạo CO₂ và H₂O, tỏa nhiệt
- **Phản ứng cộng:** do có liên kết đôi kém bền, etilen dễ tham gia phản ứng cộng với Br₂, H₂ (làm mất màu dung dịch brom)
- **Phản ứng trùng hợp:** nhiều phân tử etilen kết hợp với nhau tạo thành polietilen (PE)

Ứng dụng: nguyên liệu sản xuất nhựa PE, kích thích quả mau chín, sản xuất rượu etylic, axit axetic.`,
        },
        {
          title: "Bài 38. Axetilen",
          order: 5,
          content: `## 1. Tính chất vật lý và cấu tạo

Axetilen (C₂H₂) là chất khí không màu, không mùi, ít tan trong nước. Trong phân tử có một **liên kết ba** C≡C.

## 2. Tính chất hóa học

Tương tự etilen: có phản ứng cháy (tỏa nhiều nhiệt, dùng làm đèn xì hàn cắt kim loại), có phản ứng cộng với dung dịch brom và H₂ (do có liên kết kém bền).

Điều chế axetilen chủ yếu từ đất đèn (CaC₂) tác dụng với nước.`,
        },
        {
          title: "Bài 39. Benzen",
          order: 6,
          content: `## 1. Tính chất vật lý và cấu tạo

Benzen (C₆H₆) là chất lỏng không màu, không tan trong nước, nhẹ hơn nước, hòa tan được nhiều chất. Phân tử có cấu tạo vòng 6 cạnh khép kín, các liên kết đơn xen kẽ 3 liên kết đôi.

## 2. Tính chất hóa học

- **Phản ứng cháy:** tạo CO₂ và H₂O, có nhiều muội than
- **Phản ứng thế** với brom (có xúc tác Fe): tương tự metan
- Khó tham gia phản ứng cộng hơn etilen, axetilen do cấu tạo vòng bền

Benzen là nguyên liệu quan trọng trong công nghiệp hóa học (sản xuất phẩm nhuộm, dược phẩm, thuốc trừ sâu).`,
        },
        {
          title: "Bài 40. Dầu mỏ và khí thiên nhiên",
          order: 7,
          content: `## 1. Dầu mỏ

Dầu mỏ là hỗn hợp lỏng, sánh, màu nâu đen, không tan trong nước, nhẹ hơn nước. Thành phần chính là các hiđrocacbon.

**Chưng cất dầu mỏ:** dựa vào nhiệt độ sôi khác nhau để tách dầu mỏ thành các sản phẩm: xăng, dầu hỏa, dầu diezen, dầu mazut...

## 2. Khí thiên nhiên

Có trong các mỏ khí riêng biệt, thành phần chủ yếu là metan. Là nhiên liệu, nguyên liệu quan trọng trong đời sống và công nghiệp.

## 3. Dầu mỏ và khí thiên nhiên ở Việt Nam

Việt Nam có trữ lượng dầu mỏ và khí thiên nhiên đáng kể, tập trung chủ yếu ở thềm lục địa phía Nam.`,
        },
        {
          title: "Bài 41. Nhiên liệu",
          order: 8,
          content: `## 1. Nhiên liệu là gì

Nhiên liệu là những chất cháy được, khi cháy tỏa nhiệt và phát sáng.

## 2. Phân loại nhiên liệu

- **Nhiên liệu rắn:** than mỏ, gỗ...
- **Nhiên liệu lỏng:** xăng, dầu hỏa, cồn...
- **Nhiên liệu khí:** khí thiên nhiên, khí mỏ dầu, khí lò cốc...

## 3. Sử dụng nhiên liệu hiệu quả

Cần cung cấp đủ oxi (không khí) cho quá trình cháy, tăng diện tích tiếp xúc của nhiên liệu với không khí, điều chỉnh lượng nhiên liệu để duy trì sự cháy phù hợp với nhu cầu sử dụng.`,
        },
        {
          title: "Bài 42. Luyện tập chương 4: Hiđrocacbon - Nhiên liệu",
          order: 9,
          content: `## Hệ thống hóa kiến thức

Ôn tập cấu tạo, tính chất hóa học đặc trưng của metan (phản ứng thế), etilen và axetilen (phản ứng cộng, trùng hợp), benzen (phản ứng thế), dầu mỏ, khí thiên nhiên và nhiên liệu. So sánh đặc điểm cấu tạo và tính chất hóa học của các hiđrocacbon đã học.`,
        },
        {
          title: "Bài 43. Thực hành: Tính chất của hiđrocacbon",
          order: 10,
          content: `## Mục đích và cách tiến hành

- Thí nghiệm: Điều chế axetilen từ đất đèn (CaC₂) và nước
- Thí nghiệm: Tính chất của axetilen — thử phản ứng với dung dịch brom (làm mất màu) và đốt cháy khí axetilen sinh ra
- Quan sát và giải thích các hiện tượng thí nghiệm liên quan đến phản ứng cộng của axetilen`,
        },
      ],
      quiz: {
        title: "Ôn tập chương 4: Hiđrocacbon - Nhiên liệu",
        questions: [
          { text: "Hợp chất hữu cơ là hợp chất của nguyên tố:", options: JSON.stringify(["Cacbon", "Nitơ", "Oxi", "Lưu huỳnh"]), answer: "0" },
          { text: "Hiđrocacbon là hợp chất chỉ chứa:", options: JSON.stringify(["C và H", "C, H và O", "C và N", "Chỉ có C"]), answer: "0" },
          { text: "Trong hợp chất hữu cơ, cacbon có hóa trị:", options: JSON.stringify(["II", "III", "IV", "I"]), answer: "2" },
          { text: "Công thức phân tử của metan là:", options: JSON.stringify(["CH4", "C2H4", "C2H2", "C6H6"]), answer: "0" },
          { text: "Metan tham gia phản ứng đặc trưng là:", options: JSON.stringify(["Phản ứng cộng", "Phản ứng thế với clo", "Phản ứng trùng hợp", "Phản ứng trung hòa"]), answer: "1" },
          { text: "Etilen có công thức phân tử:", options: JSON.stringify(["C2H4", "CH4", "C2H2", "C6H6"]), answer: "0" },
          { text: "Etilen có đặc điểm cấu tạo là:", options: JSON.stringify(["Một liên kết đôi C=C", "Một liên kết ba C≡C", "Chỉ có liên kết đơn", "Cấu tạo vòng"]), answer: "0" },
          { text: "Phản ứng đặc trưng của etilen là:", options: JSON.stringify(["Phản ứng thế", "Phản ứng cộng", "Không phản ứng", "Phản ứng trung hòa"]), answer: "1" },
          { text: "Axetilen có công thức phân tử:", options: JSON.stringify(["C2H2", "C2H4", "CH4", "C6H6"]), answer: "0" },
          { text: "Axetilen có đặc điểm cấu tạo là:", options: JSON.stringify(["Liên kết ba C≡C", "Liên kết đôi C=C", "Chỉ liên kết đơn", "Cấu tạo vòng 6 cạnh"]), answer: "0" },
          { text: "Axetilen được điều chế chủ yếu từ:", options: JSON.stringify(["Đất đèn (CaC2) và nước", "Dầu mỏ trực tiếp", "Không khí", "Muối ăn"]), answer: "0" },
          { text: "Benzen có công thức phân tử:", options: JSON.stringify(["C6H6", "C2H2", "CH4", "C2H4"]), answer: "0" },
          { text: "Cấu tạo phân tử benzen là:", options: JSON.stringify(["Mạch thẳng", "Vòng 6 cạnh khép kín", "Mạch nhánh", "Không xác định"]), answer: "1" },
          { text: "Dầu mỏ có đặc điểm:", options: JSON.stringify(["Chất lỏng, không tan trong nước, nhẹ hơn nước", "Chất rắn màu trắng", "Tan tốt trong nước", "Nặng hơn nước"]), answer: "0" },
          { text: "Phương pháp tách dầu mỏ thành các sản phẩm là:", options: JSON.stringify(["Chưng cất", "Lọc", "Kết tinh", "Chiết"]), answer: "0" },
          { text: "Thành phần chính của khí thiên nhiên là:", options: JSON.stringify(["Metan", "Etilen", "Axetilen", "Benzen"]), answer: "0" },
          { text: "Nhiên liệu là những chất:", options: JSON.stringify(["Cháy được, tỏa nhiệt và phát sáng", "Không cháy được", "Chỉ có ở dạng khí", "Chỉ có ở dạng rắn"]), answer: "0" },
          { text: "Để sử dụng nhiên liệu hiệu quả cần:", options: JSON.stringify(["Cung cấp đủ oxi cho sự cháy", "Hạn chế oxi tối đa", "Đốt trong môi trường kín hoàn toàn", "Không cần điều chỉnh gì"]), answer: "0" },
          { text: "Etilen được dùng làm nguyên liệu sản xuất:", options: JSON.stringify(["Nhựa PE", "Axit sunfuric", "Muối ăn", "Vôi sống"]), answer: "0" },
          { text: "Trữ lượng dầu mỏ và khí thiên nhiên của Việt Nam tập trung chủ yếu ở:", options: JSON.stringify(["Thềm lục địa phía Nam", "Miền núi phía Bắc", "Đồng bằng sông Hồng", "Tây Nguyên"]), answer: "0" },
        ],
      },
    },
    {
      title: "Chương 5. Dẫn xuất của hiđrocacbon, Polime",
      order: 5,
      lessons: [
        {
          title: "Bài 44. Rượu etylic",
          order: 1,
          content: `## 1. Tính chất vật lý và cấu tạo

Rượu etylic (C₂H₅OH hay C₂H₆O) là chất lỏng không màu, tan vô hạn trong nước, sôi ở 78,3°C. Trong phân tử có nhóm **-OH** liên kết với gốc hiđrocacbon.

## 2. Tính chất hóa học

- **Phản ứng cháy:** C₂H₅OH + 3O₂ →(t°) 2CO₂ + 3H₂O
- **Phản ứng với Na:** 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑
- **Phản ứng với axit axetic** tạo este (phản ứng este hóa)

Ứng dụng: làm nhiên liệu, dung môi, nguyên liệu sản xuất axit axetic, dùng trong y tế, đồ uống có cồn.`,
        },
        {
          title: "Bài 45. Axit axetic",
          order: 2,
          content: `## 1. Tính chất vật lý và cấu tạo

Axit axetic (CH₃COOH) là chất lỏng không màu, tan vô hạn trong nước, có vị chua (thành phần chính của giấm ăn). Phân tử có nhóm **-COOH**.

## 2. Tính chất hóa học

Có đầy đủ tính chất của một axit (làm quỳ tím hóa đỏ, tác dụng với kim loại, oxit bazơ, bazơ, muối cacbonat) và còn phản ứng với rượu etylic tạo este (phản ứng este hóa, có H₂SO₄ đặc xúc tác).

**Ví dụ:** CH₃COOH + C₂H₅OH ⇌(H₂SO₄ đặc, t°) CH₃COOC₂H₅ + H₂O`,
        },
        {
          title: "Bài 46. Mối liên hệ giữa etilen, rượu etylic và axit axetic",
          order: 3,
          content: `## Sơ đồ chuyển hóa

> **Etilen → Rượu etylic → Axit axetic → Etyl axetat**

- Etilen + H₂O →(xúc tác axit) rượu etylic
- Rượu etylic + O₂ →(men giấm) axit axetic + H₂O
- Axit axetic + rượu etylic ⇌ etyl axetat + H₂O

Sơ đồ này thể hiện mối quan hệ chuyển hóa giữa hiđrocacbon và các dẫn xuất chứa oxi của nó.`,
        },
        {
          title: "Bài 47. Chất béo",
          order: 4,
          content: `## 1. Chất béo là gì

Chất béo là hỗn hợp nhiều este của glixerol với các axit béo, có trong tế bào động thực vật, nhẹ hơn nước, không tan trong nước, tan trong xăng, dầu hỏa, benzen.

## 2. Tính chất hóa học

Chất béo bị thủy phân trong môi trường axit tạo glixerol và axit béo; trong môi trường kiềm (phản ứng xà phòng hóa) tạo glixerol và muối của axit béo (xà phòng).

## 3. Vai trò

Là thành phần dinh dưỡng quan trọng, nguồn nguyên liệu sản xuất xà phòng và glixerol.`,
        },
        {
          title: "Bài 48. Luyện tập: Rượu etylic, axit axetic và chất béo",
          order: 5,
          content: `## Hệ thống hóa kiến thức

Ôn tập công thức cấu tạo, tính chất hóa học đặc trưng và mối quan hệ chuyển hóa giữa etilen, rượu etylic, axit axetic. Ôn tập tính chất, ứng dụng của chất béo. Vận dụng giải bài tập nhận biết, tính toán theo phương trình phản ứng este hóa và xà phòng hóa.`,
        },
        {
          title: "Bài 49. Thực hành: Tính chất của rượu và axit",
          order: 6,
          content: `## Mục đích và cách tiến hành

- Thí nghiệm: Phản ứng của rượu etylic với natri kim loại, quan sát khí H₂ thoát ra
- Thí nghiệm: Phản ứng của axit axetic với quỳ tím, với kẽm, với dung dịch Na₂CO₃
- Thí nghiệm: Phản ứng este hóa giữa rượu etylic và axit axetic (có H₂SO₄ đặc, đun nóng), nhận biết mùi thơm đặc trưng của este`,
        },
        {
          title: "Bài 50. Glucozơ",
          order: 7,
          content: `## 1. Tính chất vật lý và trạng thái tự nhiên

Glucozơ (C₆H₁₂O₆) là chất kết tinh không màu, vị ngọt, tan nhiều trong nước, có trong hầu hết các bộ phận của cây (quả chín, đặc biệt là nho).

## 2. Tính chất hóa học

- **Phản ứng oxi hóa** (phản ứng tráng gương): glucozơ tác dụng với dung dịch bạc nitrat trong amoniac tạo bạc kim loại (dùng để tráng gương, ruột phích)
- **Phản ứng lên men rượu:** glucozơ →(men rượu) rượu etylic + CO₂

Ứng dụng: pha huyết thanh, sản xuất vitamin C, tráng gương, tráng ruột phích.`,
        },
        {
          title: "Bài 51. Saccarozơ",
          order: 8,
          content: `## 1. Tính chất vật lý và trạng thái tự nhiên

Saccarozơ (C₁₂H₂₂O₁₁, đường mía) là chất kết tinh không màu, vị ngọt, tan nhiều trong nước, có trong nhiều loài thực vật (mía, củ cải đường, thốt nốt).

## 2. Tính chất hóa học

Không có phản ứng tráng gương. Khi đun nóng với dung dịch axit, saccarozơ bị thủy phân tạo glucozơ và fructozơ.

Ứng dụng: chất dinh dưỡng quan trọng, nguyên liệu cho công nghiệp thực phẩm, pha chế thuốc.`,
        },
        {
          title: "Bài 52. Tinh bột và xenlulozơ",
          order: 9,
          content: `## 1. Trạng thái tự nhiên và tính chất vật lý

**Tinh bột** có nhiều trong các loại hạt, củ, quả (gạo, ngô, khoai...). **Xenlulozơ** có nhiều trong sợi bông, tre, gỗ, nứa. Cả hai đều là chất rắn, không tan trong nước ở nhiệt độ thường.

## 2. Tính chất hóa học

- Bị thủy phân trong môi trường axit tạo glucozơ
- Phản ứng màu với iot: hồ tinh bột tác dụng với dung dịch iot tạo màu **xanh đặc trưng** (dùng để nhận biết hồ tinh bột)

Cả hai đều có công thức chung (C₆H₁₀O₅)ₙ nhưng có phân tử khối khác nhau.`,
        },
        {
          title: "Bài 53. Protein",
          order: 10,
          content: `## 1. Trạng thái tự nhiên

Protein có trong cơ thể người, động vật, thực vật như trứng, thịt, máu, sữa, tóc, sừng, móng, rễ, thân, lá.

## 2. Thành phần và cấu tạo phân tử

Protein là hợp chất phức tạp, thành phần chính gồm C, H, O, N và một lượng nhỏ nguyên tố khác. Protein có phân tử khối rất lớn, cấu tạo từ nhiều mắt xích amino axit.

## 3. Tính chất

- **Phản ứng thủy phân:** trong môi trường axit, bazơ hoặc nhờ xúc tác của enzim tạo các amino axit
- **Sự đông tụ:** protein bị đông tụ khi đun nóng hoặc cho thêm một số hóa chất`,
        },
        {
          title: "Bài 54. Polime",
          order: 11,
          content: `## 1. Khái niệm

Polime là những chất có phân tử khối rất lớn do nhiều mắt xích liên kết với nhau tạo thành.

## 2. Phân loại

- **Polime thiên nhiên:** tinh bột, xenlulozơ, protein, cao su thiên nhiên
- **Polime tổng hợp:** polietilen (PE), poli(vinyl clorua) (PVC), tơ nilon, cao su buna

## 3. Ứng dụng

Chất dẻo, tơ sợi, cao su là những vật liệu polime quan trọng, được sử dụng rộng rãi trong đời sống và sản xuất (bao bì, ống nhựa, quần áo, lốp xe...).`,
        },
        {
          title: "Bài 55. Thực hành: Tính chất của gluxit",
          order: 12,
          content: `## Mục đích và cách tiến hành

- Thí nghiệm: Phản ứng tráng gương của glucozơ với dung dịch AgNO₃ trong NH₃
- Thí nghiệm: Phân biệt glucozơ, saccarozơ và hồ tinh bột đựng trong 3 lọ mất nhãn bằng các phản ứng đặc trưng (tráng gương và phản ứng màu với iot)`,
        },
        {
          title: "Bài 56. Ôn tập cuối năm",
          order: 13,
          content: `## Hệ thống hóa kiến thức cả năm

Tổng ôn toàn bộ chương trình Hóa học 9: các loại hợp chất vô cơ, kim loại, phi kim, hiđrocacbon và nhiên liệu, dẫn xuất của hiđrocacbon (rượu, axit, este, chất béo, gluxit, protein, polime).

Luyện tập các dạng bài tập: viết chuỗi phản ứng, nhận biết chất, tính toán theo phương trình hóa học, giải bài tập tổng hợp về hữu cơ và vô cơ.`,
        },
      ],
      quiz: {
        title: "Ôn tập chương 5: Dẫn xuất của hiđrocacbon, Polime",
        questions: [
          { text: "Công thức của rượu etylic là:", options: JSON.stringify(["C2H5OH", "CH3COOH", "C6H12O6", "C12H22O11"]), answer: "0" },
          { text: "Nhóm chức đặc trưng của rượu etylic là:", options: JSON.stringify(["-OH", "-COOH", "-CHO", "-NH2"]), answer: "0" },
          { text: "Công thức của axit axetic là:", options: JSON.stringify(["CH3COOH", "C2H5OH", "C6H12O6", "CH4"]), answer: "0" },
          { text: "Phản ứng giữa rượu etylic và axit axetic tạo ra:", options: JSON.stringify(["Este và nước", "Muối và khí H2", "Chỉ có nước", "Không phản ứng"]), answer: "0" },
          { text: "Chất béo bị thủy phân trong môi trường kiềm tạo ra:", options: JSON.stringify(["Glixerol và xà phòng", "Glucozơ", "Axit axetic", "Rượu etylic"]), answer: "0" },
          { text: "Glucozơ có công thức phân tử:", options: JSON.stringify(["C6H12O6", "C12H22O11", "C2H5OH", "CH3COOH"]), answer: "0" },
          { text: "Phản ứng tráng gương là phản ứng đặc trưng của:", options: JSON.stringify(["Glucozơ", "Saccarozơ", "Tinh bột", "Xenlulozơ"]), answer: "0" },
          { text: "Saccarozơ có công thức phân tử:", options: JSON.stringify(["C12H22O11", "C6H12O6", "C2H5OH", "CH3COOH"]), answer: "0" },
          { text: "Hồ tinh bột tác dụng với dung dịch iot tạo màu:", options: JSON.stringify(["Xanh đặc trưng", "Đỏ", "Vàng", "Không đổi màu"]), answer: "0" },
          { text: "Tinh bột và xenlulozơ có công thức chung là:", options: JSON.stringify(["(C6H10O5)n", "C6H12O6", "C12H22O11", "C2H5OH"]), answer: "0" },
          { text: "Protein khi đun nóng thì:", options: JSON.stringify(["Bị đông tụ", "Không thay đổi", "Bốc hơi hết", "Chuyển thành đường"]), answer: "0" },
          { text: "Protein được cấu tạo từ các mắt xích:", options: JSON.stringify(["Amino axit", "Glucozơ", "Etilen", "Axit axetic"]), answer: "0" },
          { text: "Polime là chất có:", options: JSON.stringify(["Phân tử khối rất lớn", "Phân tử khối rất nhỏ", "Không có phân tử khối", "Chỉ tồn tại ở dạng khí"]), answer: "0" },
          { text: "PE (polietilen) thuộc loại:", options: JSON.stringify(["Polime tổng hợp", "Polime thiên nhiên", "Không phải polime", "Kim loại"]), answer: "0" },
          { text: "Cao su thiên nhiên, tinh bột, xenlulozơ là:", options: JSON.stringify(["Polime thiên nhiên", "Polime tổng hợp", "Kim loại", "Axit"]), answer: "0" },
          { text: "Sơ đồ Etilen → Rượu etylic → Axit axetic thể hiện:", options: JSON.stringify(["Mối liên hệ chuyển hóa giữa các hợp chất hữu cơ", "Phản ứng oxi hóa khử vô cơ", "Phản ứng phân hủy muối", "Không có mối liên hệ"]), answer: "0" },
          { text: "Rượu etylic phản ứng với Na tạo ra khí:", options: JSON.stringify(["H2", "O2", "CO2", "N2"]), answer: "0" },
          { text: "Giấm ăn có thành phần chính là:", options: JSON.stringify(["Axit axetic loãng", "Rượu etylic", "Glucozơ", "NaCl"]), answer: "0" },
          { text: "Chất béo không tan trong:", options: JSON.stringify(["Nước", "Xăng", "Dầu hỏa", "Benzen"]), answer: "0" },
          { text: "Đường mía sử dụng hàng ngày là:", options: JSON.stringify(["Saccarozơ", "Glucozơ", "Tinh bột", "Xenlulozơ"]), answer: "0" },
        ],
      },
    },
  ],
};
