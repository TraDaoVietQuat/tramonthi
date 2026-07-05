import { CourseData } from "./types";

export const PHYSICS_9_COURSE: CourseData = {
  title: "Vật lý 9",
  slug: "vat-ly-9",
  subject: "physics",
  grade: "9",
  description: "Điện học, Điện từ học, Quang học, Sự bảo toàn và chuyển hóa năng lượng – chương trình Vật lí 9 THCS.",
  published: true,
  modules: [
    {
      title: "Chương I. Điện học",
      order: 1,
      lessons: [
        {
          title: "Bài 1. Sự phụ thuộc của cường độ dòng điện vào hiệu điện thế giữa hai đầu dây dẫn",
          order: 1,
          content: `## Nội dung chính

- Cường độ dòng điện chạy qua một dây dẫn **tỉ lệ thuận** với hiệu điện thế đặt vào hai đầu dây dẫn đó: U tăng/giảm bao nhiêu lần thì I tăng/giảm bấy nhiêu lần.
- Đồ thị biểu diễn mối quan hệ giữa I và U là một **đường thẳng đi qua gốc tọa độ** (U=0 thì I=0).

**Ví dụ:** Khi U = 2V thì I = 0,1A; khi U = 4V thì I = 0,2A — đúng tỉ lệ thuận.`,
        },
        {
          title: "Bài 2. Điện trở của dây dẫn - Định luật Ôm",
          order: 2,
          content: `## 1. Điện trở dây dẫn

Thương số U/I với mỗi dây dẫn là không đổi, gọi là **điện trở** của dây dẫn: R = U/I (đơn vị: Ôm, kí hiệu Ω)

## 2. Định luật Ôm

> Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây và tỉ lệ nghịch với điện trở của dây: **I = U/R**

**Ví dụ:** U=12V, R=6Ω thì I = 12/6 = 2A`,
        },
        {
          title: "Bài 3. Thực hành: Xác định điện trở của một dây dẫn bằng ampe kế và vôn kế",
          order: 3,
          content: `## Mục đích và cách tiến hành

- Mắc mạch điện gồm dây dẫn cần đo, ampe kế (mắc nối tiếp) và vôn kế (mắc song song với dây dẫn).
- Đo U và I ở nhiều lần khác nhau, tính R = U/I mỗi lần rồi lấy giá trị trung bình.
- So sánh các giá trị R tính được để rút ra R của dây dẫn là không đổi (không phụ thuộc U, I).`,
        },
        {
          title: "Bài 4. Đoạn mạch nối tiếp",
          order: 4,
          content: `## Đặc điểm đoạn mạch nối tiếp (2 điện trở)

- Cường độ dòng điện: **I = I₁ = I₂** (như nhau tại mọi điểm)
- Hiệu điện thế: **U = U₁ + U₂**
- Điện trở tương đương: **Rtđ = R₁ + R₂**
- Hệ quả: U₁/U₂ = R₁/R₂

**Ví dụ:** R₁=5Ω nối tiếp R₂=10Ω, Rtđ=15Ω. Nếu I=1A thì U₁=5V, U₂=10V, U=15V`,
        },
        {
          title: "Bài 5. Đoạn mạch song song",
          order: 5,
          content: `## Đặc điểm đoạn mạch song song (2 điện trở)

- Hiệu điện thế: **U = U₁ = U₂**
- Cường độ dòng điện: **I = I₁ + I₂**
- Điện trở tương đương: **1/Rtđ = 1/R₁ + 1/R₂** (hay Rtđ = R₁R₂/(R₁+R₂))
- Hệ quả: I₁/I₂ = R₂/R₁ (dòng qua điện trở nhỏ hơn thì lớn hơn)

**Ví dụ:** R₁=6Ω song song R₂=3Ω: Rtđ = 6.3/(6+3) = 2Ω`,
        },
        {
          title: "Bài 6. Bài tập vận dụng định luật Ôm",
          order: 6,
          content: `## Phương pháp giải

1. Vẽ lại sơ đồ mạch điện, xác định các điện trở mắc nối tiếp hay song song
2. Tính điện trở tương đương của từng đoạn rồi của cả mạch
3. Áp dụng định luật Ôm I=U/R để tìm đại lượng cần tìm
4. Dùng các hệ quả của mạch nối tiếp/song song để suy ra U, I từng điện trở

**Ví dụ:** Mạch gồm R₁ nối tiếp (R₂ song song R₃), biết U và các giá trị R — tính Rtđ theo 2 bước: R₂₃ song song trước, rồi cộng nối tiếp với R₁.`,
        },
        {
          title: "Bài 7. Sự phụ thuộc của điện trở vào chiều dài dây dẫn",
          order: 7,
          content: `## Kết luận

Điện trở của các dây dẫn có cùng tiết diện và được làm từ cùng một loại vật liệu thì **tỉ lệ thuận với chiều dài** của mỗi dây: R ~ l

**Ví dụ:** Dây dài gấp đôi (cùng tiết diện, vật liệu) thì điện trở gấp đôi.`,
        },
        {
          title: "Bài 8. Sự phụ thuộc của điện trở vào tiết diện dây dẫn",
          order: 8,
          content: `## Kết luận

Điện trở của các dây dẫn có cùng chiều dài và làm từ cùng một loại vật liệu thì **tỉ lệ nghịch với tiết diện** của dây: R ~ 1/S

**Ví dụ:** Dây có tiết diện gấp đôi (cùng chiều dài, vật liệu) thì điện trở giảm một nửa.`,
        },
        {
          title: "Bài 9. Sự phụ thuộc của điện trở vào vật liệu làm dây dẫn",
          order: 9,
          content: `## 1. Điện trở suất

Điện trở suất của một vật liệu (hay một chất) có trị số bằng điện trở của một đoạn dây dẫn hình trụ làm bằng vật liệu đó có chiều dài 1m, tiết diện 1m². Kí hiệu ρ (rô), đơn vị Ω.m

Vật liệu có điện trở suất càng nhỏ thì dẫn điện càng tốt.

## 2. Công thức tính điện trở

> **R = ρ.l/S**

trong đó l: chiều dài (m), S: tiết diện (m²), ρ: điện trở suất (Ω.m)

**Ví dụ:** Dây đồng có ρ=1,7.10⁻⁸ Ω.m, l=4m, S=0,5mm²=0,5.10⁻⁶m²: R = 1,7.10⁻⁸.4/0,5.10⁻⁶ = 0,136Ω`,
        },
        {
          title: "Bài 10. Biến trở - Điện trở dùng trong kỹ thuật",
          order: 10,
          content: `## 1. Biến trở

Biến trở là điện trở có thể thay đổi trị số, dùng để điều chỉnh cường độ dòng điện trong mạch. Các loại: biến trở con chạy, biến trở tay quay, biến trở than (chiết áp).

## 2. Điện trở dùng trong kỹ thuật

Thường có trị số rất lớn, được chế tạo bằng lớp than hay lớp kim loại mỏng nên kích thước nhỏ. Trị số được ghi bằng số hoặc bằng các vòng màu.`,
        },
        {
          title: "Bài 11. Bài tập vận dụng định luật Ôm và công thức tính điện trở của dây dẫn",
          order: 11,
          content: `## Phương pháp giải

Kết hợp công thức R=ρl/S với định luật Ôm I=U/R và các công thức mạch nối tiếp/song song để giải các bài toán tổng hợp.

**Ví dụ:** Tính chiều dài dây dẫn nicrom (ρ=1,1.10⁻⁶Ω.m) có tiết diện 0,2mm² để có điện trở 20Ω: l = R.S/ρ = 20.0,2.10⁻⁶/1,1.10⁻⁶ ≈ 3,6m`,
        },
        {
          title: "Bài 12. Công suất điện",
          order: 12,
          content: `## 1. Công suất định mức

Số oát ghi trên mỗi dụng cụ điện cho biết công suất định mức của dụng cụ đó, nghĩa là công suất điện của dụng cụ khi hoạt động bình thường.

## 2. Công thức tính công suất điện

> **P = U.I** (= I²R = U²/R)

**Ví dụ:** Bóng đèn 220V-75W hoạt động bình thường tiêu thụ công suất 75W tại U=220V, dòng điện qua đèn I=P/U=75/220≈0,34A`,
        },
        {
          title: "Bài 13. Điện năng - Công của dòng điện",
          order: 13,
          content: `## 1. Điện năng

Dòng điện có mang năng lượng vì nó có thể thực hiện công, cũng như có thể làm thay đổi nhiệt năng của vật. Năng lượng của dòng điện gọi là điện năng.

## 2. Công của dòng điện

Công của dòng điện sản ra trong một đoạn mạch là số đo lượng điện năng chuyển hóa thành các dạng năng lượng khác:

> **A = P.t = U.I.t**

đơn vị: Jun (J), hoặc kW.h (1kWh = 3,6.10⁶ J)

**Ví dụ:** Bóng đèn 220V-75W dùng trong 4 giờ tiêu thụ điện năng A=75.4=300Wh=0,3kWh`,
        },
        {
          title: "Bài 14. Bài tập về công suất điện và điện năng sử dụng",
          order: 14,
          content: `## Phương pháp giải

Áp dụng các công thức P=UI, A=Pt, kết hợp định luật Ôm để tính công suất tiêu thụ, điện năng sử dụng và tiền điện phải trả của các thiết bị điện trong gia đình.

**Ví dụ:** Bếp điện 220V-1000W dùng 30 phút mỗi ngày, tính điện năng tiêu thụ trong 30 ngày: A = 1000W × 0,5h × 30 = 15000Wh = 15kWh`,
        },
        {
          title: "Bài 15. Thực hành: Xác định công suất của các dụng cụ điện",
          order: 15,
          content: `## Mục đích và cách tiến hành

- Mắc mạch điện với ampe kế, vôn kế để đo U, I của dụng cụ điện (ví dụ bóng đèn, quạt điện nhỏ)
- Tính công suất P = U.I từ số liệu đo được
- So sánh công suất đo được với công suất định mức ghi trên dụng cụ`,
        },
        {
          title: "Bài 16. Định luật Jun - Len-xơ",
          order: 16,
          content: `## Định luật

> Nhiệt lượng tỏa ra ở dây dẫn khi có dòng điện chạy qua tỉ lệ thuận với bình phương cường độ dòng điện, với điện trở của dây dẫn và thời gian dòng điện chạy qua:

**Q = I².R.t**  (J), hoặc nếu tính bằng calo: Q = 0,24.I².R.t

**Ví dụ:** I=2A, R=10Ω, t=10s: Q = 4.10.10 = 400J`,
        },
        {
          title: "Bài 17. Bài tập vận dụng định luật Jun - Len-xơ",
          order: 17,
          content: `## Phương pháp giải

Áp dụng Q=I²Rt kết hợp với các công thức nhiệt lượng thu vào Q=mcΔt (vật lí về nhiệt) để giải các bài toán về ấm điện, bếp điện.

**Ví dụ:** Ấm điện có R=48,4Ω, I=2,5A đun sôi nước trong 20 phút: Q = 2,5².48,4.1200 = 363000J`,
        },
        {
          title: "Bài 18. Thực hành: Kiểm nghiệm mối quan hệ Q ~ I² trong định luật Jun - Len-xơ",
          order: 18,
          content: `## Mục đích và cách tiến hành

- Dùng dây điện trở đốt nóng nước trong bình nhiệt lượng kế, đo nhiệt độ nước tăng lên khi cho dòng điện I chạy qua trong cùng thời gian t
- Thay đổi I và ghi lại độ tăng nhiệt độ tương ứng
- So sánh tỉ lệ độ tăng nhiệt độ với bình phương cường độ dòng điện để kiểm nghiệm Q ~ I²`,
        },
        {
          title: "Bài 19. Sử dụng an toàn và tiết kiệm điện",
          order: 19,
          content: `## 1. An toàn khi sử dụng điện

- Chỉ làm thí nghiệm với nguồn điện có hiệu điện thế dưới 40V
- Phải sử dụng dây dẫn có vỏ bọc cách điện đúng tiêu chuẩn
- Cần mắc cầu chì, thiết bị đóng ngắt cho mỗi dụng cụ điện
- Nối đất cho các dụng cụ điện có vỏ bằng kim loại

## 2. Tiết kiệm điện năng

- Cần lựa chọn sử dụng các dụng cụ hay thiết bị điện có công suất phù hợp
- Không sử dụng dụng cụ điện trong những lúc không cần thiết, tắt khi không dùng
- Lợi ích: giảm chi tiêu, các dụng cụ bền lâu hơn, giảm bớt sự cố do quá tải điện`,
        },
        {
          title: "Bài 20. Tổng kết chương I: Điện học",
          order: 20,
          content: `## Hệ thống kiến thức trọng tâm

- Định luật Ôm: I = U/R
- Đoạn mạch nối tiếp: I=I₁=I₂; U=U₁+U₂; Rtđ=R₁+R₂
- Đoạn mạch song song: U=U₁=U₂; I=I₁+I₂; 1/Rtđ=1/R₁+1/R₂
- Điện trở dây dẫn: R = ρl/S
- Công suất điện: P = UI = I²R = U²/R
- Điện năng - Công dòng điện: A = Pt = UIt
- Định luật Jun-Len-xơ: Q = I²Rt
- Quy tắc an toàn và tiết kiệm điện năng`,
        },
      ],
      quiz: {
        title: "Ôn tập chương I: Điện học",
        questions: [
          { text: "Cường độ dòng điện qua dây dẫn tỉ lệ thế nào với hiệu điện thế hai đầu dây?", options: JSON.stringify(["Tỉ lệ nghịch", "Tỉ lệ thuận", "Không liên quan", "Tỉ lệ bậc hai"]), answer: "1" },
          { text: "Định luật Ôm được biểu diễn bằng công thức:", options: JSON.stringify(["I=U/R", "I=UR", "I=R/U", "U=IR²"]), answer: "0" },
          { text: "Đơn vị của điện trở là:", options: JSON.stringify(["Ampe (A)", "Vôn (V)", "Ôm (Ω)", "Oát (W)"]), answer: "2" },
          { text: "Trong đoạn mạch nối tiếp, cường độ dòng điện:", options: JSON.stringify(["I=I1+I2", "I=I1=I2", "I=I1-I2", "I=I1.I2"]), answer: "1" },
          { text: "Trong đoạn mạch song song, hiệu điện thế:", options: JSON.stringify(["U=U1+U2", "U=U1=U2", "U=U1-U2", "U=U1/U2"]), answer: "1" },
          { text: "Điện trở tương đương của đoạn mạch nối tiếp là:", options: JSON.stringify(["R=R1+R2", "1/R=1/R1+1/R2", "R=R1.R2", "R=R1-R2"]), answer: "0" },
          { text: "Điện trở của dây dẫn tỉ lệ thuận với:", options: JSON.stringify(["Tiết diện dây", "Chiều dài dây", "Cường độ dòng điện", "Hiệu điện thế"]), answer: "1" },
          { text: "Điện trở của dây dẫn tỉ lệ nghịch với:", options: JSON.stringify(["Chiều dài dây", "Tiết diện dây", "Điện trở suất", "Hiệu điện thế"]), answer: "1" },
          { text: "Công thức tính điện trở theo vật liệu là:", options: JSON.stringify(["R=ρl/S", "R=ρS/l", "R=ρ.l.S", "R=l/(ρS)"]), answer: "0" },
          { text: "Biến trở dùng để:", options: JSON.stringify(["Đo cường độ dòng điện", "Điều chỉnh cường độ dòng điện", "Đo hiệu điện thế", "Đo công suất"]), answer: "1" },
          { text: "Công thức tính công suất điện là:", options: JSON.stringify(["P=U.I", "P=U/I", "P=U+I", "P=U-I"]), answer: "0" },
          { text: "Công của dòng điện được tính bằng:", options: JSON.stringify(["A=P.t", "A=P/t", "A=P+t", "A=P-t"]), answer: "0" },
          { text: "Đơn vị điện năng thường dùng trong sinh hoạt là:", options: JSON.stringify(["Jun (J)", "kWh", "Oát (W)", "Vôn (V)"]), answer: "1" },
          { text: "Định luật Jun-Len-xơ được biểu diễn bằng:", options: JSON.stringify(["Q=I.R.t", "Q=I².R.t", "Q=I.R²t", "Q=I²R²t"]), answer: "1" },
          { text: "Khi làm thí nghiệm điện, chỉ nên dùng nguồn điện có hiệu điện thế:", options: JSON.stringify(["Dưới 40V", "Trên 100V", "Bằng 220V", "Bất kỳ"]), answer: "0" },
          { text: "Hai điện trở R1=5Ω, R2=10Ω mắc nối tiếp có điện trở tương đương:", options: JSON.stringify(["15Ω", "10Ω", "3,3Ω", "50Ω"]), answer: "0" },
          { text: "Hai điện trở R1=6Ω, R2=3Ω mắc song song có điện trở tương đương:", options: JSON.stringify(["9Ω", "2Ω", "18Ω", "3Ω"]), answer: "1" },
          { text: "Bóng đèn 220V-75W hoạt động bình thường, dòng điện qua đèn xấp xỉ:", options: JSON.stringify(["0,34A", "3,4A", "34A", "0,034A"]), answer: "0" },
          { text: "Nối đất cho vỏ kim loại của dụng cụ điện nhằm mục đích:", options: JSON.stringify(["Tiết kiệm điện", "Đảm bảo an toàn khi có rò điện", "Tăng công suất", "Giảm điện trở"]), answer: "1" },
          { text: "Thương số U/I của một dây dẫn được gọi là:", options: JSON.stringify(["Công suất", "Điện trở", "Điện năng", "Cường độ dòng điện"]), answer: "1" },
        ],
      },
    },
    {
      title: "Chương II. Điện từ học",
      order: 2,
      lessons: [
        {
          title: "Bài 21. Nam châm vĩnh cửu",
          order: 1,
          content: `## 1. Từ tính của nam châm

Nam châm nào cũng có hai từ cực: cực Bắc (N) và cực Nam (S). Khi để tự do, cực luôn chỉ hướng Bắc gọi là cực Bắc, cực luôn chỉ hướng Nam gọi là cực Nam.

## 2. Tương tác giữa hai nam châm

> Khi đặt hai nam châm gần nhau, các từ cực **cùng tên thì đẩy nhau, khác tên thì hút nhau**.`,
        },
        {
          title: "Bài 22. Tác dụng từ của dòng điện - Từ trường",
          order: 2,
          content: `## 1. Lực từ

Dòng điện chạy qua dây dẫn thẳng hay dây dẫn có hình dạng bất kỳ đều gây ra tác dụng lực (gọi là lực từ) lên kim nam châm đặt gần nó — gọi là tác dụng từ của dòng điện.

## 2. Từ trường

Không gian xung quanh nam châm, xung quanh dòng điện có khả năng tác dụng lực từ lên kim nam châm đặt trong nó gọi là **từ trường**.

**Cách nhận biết:** Nơi nào trong không gian có lực từ tác dụng lên kim nam châm thì nơi đó có từ trường.`,
        },
        {
          title: "Bài 23. Từ phổ - Đường sức từ",
          order: 3,
          content: `## 1. Từ phổ

Hình ảnh cụ thể về các đường mạt sắt sắp xếp xung quanh nam châm gọi là **từ phổ**. Từ phổ cho ta hình ảnh trực quan về từ trường.

## 2. Đường sức từ

- Đường sức từ có chiều nhất định: bên ngoài nam châm, đi ra từ cực Bắc, đi vào cực Nam
- Nơi nào từ trường mạnh thì đường sức từ dày, nơi nào từ trường yếu thì đường sức từ thưa`,
        },
        {
          title: "Bài 24. Từ trường của ống dây có dòng điện chạy qua",
          order: 4,
          content: `## 1. Từ phổ, đường sức từ của ống dây có dòng điện

Phần từ phổ bên ngoài ống dây có dòng điện chạy qua rất giống phần từ phổ bên ngoài của thanh nam châm. Đường sức từ trong lòng ống dây gần như song song với trục ống dây.

## 2. Quy tắc nắm tay phải

> Nắm bàn tay phải, rồi đặt sao cho bốn ngón tay hướng theo chiều dòng điện chạy qua các vòng dây thì ngón tay cái choãi ra chỉ chiều đường sức từ trong lòng ống dây.`,
        },
        {
          title: "Bài 25. Sự nhiễm từ của sắt, thép - Nam châm điện",
          order: 5,
          content: `## 1. Sự nhiễm từ của sắt, thép

Sắt, thép, niken, coban và các vật liệu từ khác đặt trong từ trường đều bị nhiễm từ. Sau khi nhiễm từ, sắt non không giữ được từ tính lâu dài, còn thép giữ được từ tính lâu dài.

## 2. Nam châm điện

Nam châm điện gồm một ống dây dẫn trong có lõi sắt non. Có thể tăng lực từ của nam châm điện bằng cách tăng cường độ dòng điện qua ống dây hoặc tăng số vòng dây.`,
        },
        {
          title: "Bài 26. Ứng dụng của nam châm",
          order: 6,
          content: `## Các ứng dụng chính

- **Loa điện:** hoạt động dựa vào tác dụng từ của nam châm lên ống dây có dòng điện chạy qua
- **Rơle điện từ:** thiết bị tự động đóng ngắt mạch điện, bảo vệ và điều khiển làm việc của mạch điện
- **Chuông báo động:** ứng dụng nam châm điện để phát hiện và báo động khi có sự cố (VD: cửa mở, mạch hở)`,
        },
        {
          title: "Bài 27. Lực điện từ",
          order: 7,
          content: `## 1. Lực điện từ

Dây dẫn có dòng điện chạy qua đặt trong từ trường và không song song với đường sức từ thì chịu tác dụng của lực điện từ.

## 2. Quy tắc bàn tay trái

> Đặt bàn tay trái sao cho các đường sức từ hướng vào lòng bàn tay, chiều từ cổ tay đến ngón tay giữa hướng theo chiều dòng điện thì ngón tay cái choãi ra 90° chỉ chiều của lực điện từ.`,
        },
        {
          title: "Bài 28. Động cơ điện một chiều",
          order: 8,
          content: `## 1. Nguyên tắc cấu tạo

Động cơ điện một chiều có hai bộ phận chính: nam châm tạo ra từ trường và khung dây dẫn có dòng điện chạy qua.

## 2. Nguyên tắc hoạt động

Động cơ điện một chiều hoạt động dựa trên tác dụng của từ trường lên khung dây dẫn có dòng điện chạy qua đặt trong từ trường, làm khung dây quay liên tục quanh trục.

## 3. Biến đổi năng lượng

Khi hoạt động, động cơ điện chuyển hóa điện năng thành cơ năng.`,
        },
        {
          title: "Bài 29. Thực hành: Chế nam châm vĩnh cửu, nghiệm lại từ tính của ống dây có dòng điện",
          order: 9,
          content: `## Mục đích và cách tiến hành

- Chế tạo một đoạn dây thép thành nam châm vĩnh cửu bằng cách đặt trong lòng ống dây có dòng điện một chiều chạy qua
- Nghiệm lại từ tính của ống dây có dòng điện bằng kim nam châm thử, xác định chiều đường sức từ theo quy tắc nắm tay phải`,
        },
        {
          title: "Bài 30. Bài tập vận dụng quy tắc nắm tay phải và quy tắc bàn tay trái",
          order: 10,
          content: `## Phương pháp giải

- Dùng quy tắc nắm tay phải để xác định chiều đường sức từ trong lòng ống dây khi biết chiều dòng điện (hoặc ngược lại)
- Dùng quy tắc bàn tay trái để xác định chiều lực điện từ tác dụng lên dây dẫn có dòng điện đặt trong từ trường (hoặc xác định chiều dòng điện, chiều từ trường khi biết hai yếu tố còn lại)`,
        },
        {
          title: "Bài 31. Hiện tượng cảm ứng điện từ",
          order: 11,
          content: `## 1. Cấu tạo và hoạt động của đinamô ở xe đạp

Đinamô xe đạp có nam châm quay trước cuộn dây, tạo dòng điện thắp sáng đèn.

## 2. Hiện tượng cảm ứng điện từ

Khi số đường sức từ xuyên qua tiết diện của cuộn dây biến thiên (do cho nam châm chuyển động vào/ra hoặc quay), trong cuộn dây xuất hiện dòng điện gọi là **dòng điện cảm ứng**. Hiện tượng này gọi là **hiện tượng cảm ứng điện từ**.`,
        },
        {
          title: "Bài 32. Điều kiện xuất hiện dòng điện cảm ứng",
          order: 12,
          content: `## Kết luận

> Dòng điện cảm ứng xuất hiện trong cuộn dây dẫn kín khi **số đường sức từ xuyên qua tiết diện của cuộn dây đó biến thiên** (tăng lên hoặc giảm đi).`,
        },
        {
          title: "Bài 33. Dòng điện xoay chiều",
          order: 13,
          content: `## 1. Chiều của dòng điện cảm ứng

Khi cho nam châm quay trước cuộn dây kín, dòng điện cảm ứng xuất hiện luân phiên đổi chiều, gọi là **dòng điện xoay chiều**.

## 2. Cách tạo ra dòng điện xoay chiều

Có hai cách: cho nam châm quay trước cuộn dây dẫn kín, hoặc cho cuộn dây dẫn kín quay trong từ trường của nam châm.`,
        },
        {
          title: "Bài 34. Máy phát điện xoay chiều",
          order: 14,
          content: `## 1. Cấu tạo

Máy phát điện xoay chiều gồm hai bộ phận chính: **nam châm** và **cuộn dây dẫn**. Một trong hai bộ phận đứng yên gọi là **stato**, bộ phận còn lại quay gọi là **rôto**.

## 2. Nguyên tắc hoạt động

Dựa trên hiện tượng cảm ứng điện từ: khi rôto quay, số đường sức từ xuyên qua tiết diện cuộn dây biến thiên, tạo ra dòng điện xoay chiều.`,
        },
        {
          title: "Bài 35. Các tác dụng của dòng điện xoay chiều - Đo cường độ và hiệu điện thế xoay chiều",
          order: 15,
          content: `## 1. Các tác dụng của dòng điện xoay chiều

Dòng điện xoay chiều có các tác dụng: nhiệt, quang, và từ (giống dòng điện một chiều), nhưng tác dụng từ luân phiên đổi chiều theo chiều dòng điện.

## 2. Đo hiệu điện thế và cường độ dòng điện xoay chiều

Dùng vôn kế và ampe kế xoay chiều (kí hiệu AC) để đo. Kết quả đo được là giá trị hiệu dụng của hiệu điện thế và cường độ dòng điện xoay chiều.`,
        },
        {
          title: "Bài 36. Truyền tải điện năng đi xa",
          order: 16,
          content: `## 1. Hao phí điện năng trên đường dây truyền tải

Công suất hao phí do tỏa nhiệt trên đường dây tải điện: **P_hp = P².R/U²**

## 2. Cách làm giảm hao phí

Cách hiệu quả nhất là **tăng hiệu điện thế U** đặt vào hai đầu đường dây (vì P_hp tỉ lệ nghịch với U²) — đây là lý do các đường dây tải điện cao thế được sử dụng.`,
        },
        {
          title: "Bài 37. Máy biến thế",
          order: 17,
          content: `## 1. Cấu tạo và nguyên tắc hoạt động

Máy biến thế gồm 2 cuộn dây có số vòng khác nhau quấn trên cùng một lõi sắt. Hoạt động dựa trên hiện tượng cảm ứng điện từ với dòng điện xoay chiều.

## 2. Công thức máy biến thế

> **U₁/U₂ = n₁/n₂**

trong đó U₁,n₁ là hiệu điện thế và số vòng cuộn sơ cấp; U₂,n₂ là của cuộn thứ cấp. Nếu n₂>n₁ (U₂>U₁): máy tăng thế; nếu n₂<n₁: máy hạ thế.`,
        },
        {
          title: "Bài 38. Thực hành: Vận hành máy phát điện và máy biến thế",
          order: 18,
          content: `## Mục đích và cách tiến hành

- Vận hành mô hình máy phát điện xoay chiều, nhận biết hiệu điện thế xoay chiều tạo ra qua đèn LED hoặc vôn kế xoay chiều
- Vận hành máy biến thế, đo U₁, U₂ và đếm số vòng dây n₁, n₂ để kiểm nghiệm công thức U₁/U₂=n₁/n₂`,
        },
        {
          title: "Bài 39. Tổng kết chương II: Điện từ học",
          order: 19,
          content: `## Hệ thống kiến thức trọng tâm

- Tương tác từ cực: cùng tên đẩy nhau, khác tên hút nhau
- Quy tắc nắm tay phải: xác định chiều đường sức từ trong ống dây
- Quy tắc bàn tay trái: xác định chiều lực điện từ
- Điều kiện xuất hiện dòng điện cảm ứng: số đường sức từ xuyên qua cuộn dây biến thiên
- Máy phát điện xoay chiều hoạt động dựa trên hiện tượng cảm ứng điện từ
- Công suất hao phí khi truyền tải điện: P_hp = P²R/U²
- Công thức máy biến thế: U₁/U₂ = n₁/n₂`,
        },
      ],
      quiz: {
        title: "Ôn tập chương II: Điện từ học",
        questions: [
          { text: "Hai từ cực cùng tên đặt gần nhau thì:", options: JSON.stringify(["Hút nhau", "Đẩy nhau", "Không tương tác", "Vuông góc nhau"]), answer: "1" },
          { text: "Hai từ cực khác tên đặt gần nhau thì:", options: JSON.stringify(["Đẩy nhau", "Hút nhau", "Không tương tác", "Song song nhau"]), answer: "1" },
          { text: "Từ trường tồn tại ở đâu?", options: JSON.stringify(["Chỉ trong nam châm", "Xung quanh nam châm và dòng điện", "Chỉ trong dây dẫn", "Không tồn tại"]), answer: "1" },
          { text: "Đường sức từ bên ngoài nam châm có chiều:", options: JSON.stringify(["Đi từ cực Nam ra cực Bắc", "Đi từ cực Bắc ra cực Nam", "Không có chiều xác định", "Đi vào cả hai cực"]), answer: "1" },
          { text: "Quy tắc xác định chiều đường sức từ trong ống dây là:", options: JSON.stringify(["Quy tắc bàn tay trái", "Quy tắc nắm tay phải", "Quy tắc bàn tay phải", "Quy tắc vặn nút chai"]), answer: "1" },
          { text: "Sắt non sau khi nhiễm từ thì:", options: JSON.stringify(["Giữ từ tính lâu dài", "Mất từ tính ngay", "Trở thành nam châm vĩnh cửu", "Không bị nhiễm từ"]), answer: "1" },
          { text: "Thép sau khi nhiễm từ thì:", options: JSON.stringify(["Mất từ tính ngay", "Giữ được từ tính lâu dài", "Không nhiễm từ được", "Chỉ nhiễm từ tạm thời vài giây"]), answer: "1" },
          { text: "Loa điện hoạt động dựa vào:", options: JSON.stringify(["Tác dụng nhiệt của dòng điện", "Tác dụng từ của nam châm lên ống dây có dòng điện", "Tác dụng hóa học", "Tác dụng phát sáng"]), answer: "1" },
          { text: "Quy tắc xác định chiều lực điện từ là:", options: JSON.stringify(["Quy tắc nắm tay phải", "Quy tắc bàn tay trái", "Quy tắc bàn tay phải", "Quy tắc vặn nút chai"]), answer: "1" },
          { text: "Động cơ điện một chiều biến đổi năng lượng:", options: JSON.stringify(["Cơ năng thành điện năng", "Điện năng thành cơ năng", "Nhiệt năng thành điện năng", "Điện năng thành hóa năng"]), answer: "1" },
          { text: "Dòng điện cảm ứng xuất hiện khi:", options: JSON.stringify(["Số đường sức từ qua cuộn dây không đổi", "Số đường sức từ qua cuộn dây biến thiên", "Cuộn dây đứng yên hoàn toàn", "Không có từ trường"]), answer: "1" },
          { text: "Dòng điện xoay chiều là dòng điện:", options: JSON.stringify(["Luôn có chiều không đổi", "Luân phiên đổi chiều", "Chỉ chạy một chiều", "Không có cường độ"]), answer: "1" },
          { text: "Máy phát điện xoay chiều gồm hai bộ phận chính:", options: JSON.stringify(["Nam châm và cuộn dây dẫn", "Ampe kế và vôn kế", "Điện trở và tụ điện", "Pin và bóng đèn"]), answer: "0" },
          { text: "Bộ phận đứng yên trong máy phát điện gọi là:", options: JSON.stringify(["Rôto", "Stato", "Cực từ", "Vành khuyên"]), answer: "1" },
          { text: "Công suất hao phí trên đường dây tải điện tính theo công thức:", options: JSON.stringify(["P_hp=P²R/U²", "P_hp=PR/U", "P_hp=P.R.U", "P_hp=P/RU"]), answer: "0" },
          { text: "Để giảm hao phí điện năng khi truyền tải, cách hiệu quả nhất là:", options: JSON.stringify(["Giảm hiệu điện thế U", "Tăng hiệu điện thế U", "Tăng điện trở dây", "Giảm chiều dài dây"]), answer: "1" },
          { text: "Công thức máy biến thế là:", options: JSON.stringify(["U1/U2 = n1/n2", "U1.U2 = n1.n2", "U1/U2 = n2/n1", "U1+U2 = n1+n2"]), answer: "0" },
          { text: "Máy biến thế có n2 > n1 là máy:", options: JSON.stringify(["Hạ thế", "Tăng thế", "Không đổi thế", "Chỉnh lưu"]), answer: "1" },
          { text: "Máy biến thế hoạt động với dòng điện:", options: JSON.stringify(["Một chiều", "Xoay chiều", "Cả hai loại như nhau", "Không cần dòng điện"]), answer: "1" },
          { text: "Đo hiệu điện thế xoay chiều dùng dụng cụ:", options: JSON.stringify(["Vôn kế một chiều (DC)", "Vôn kế xoay chiều (AC)", "Ampe kế một chiều", "Nhiệt kế"]), answer: "1" },
        ],
      },
    },
    {
      title: "Chương III. Quang học",
      order: 3,
      lessons: [
        {
          title: "Bài 40. Hiện tượng khúc xạ ánh sáng",
          order: 1,
          content: `## Hiện tượng khúc xạ ánh sáng

Hiện tượng tia sáng truyền từ môi trường trong suốt này sang môi trường trong suốt khác bị **gãy khúc** tại mặt phân cách giữa hai môi trường gọi là hiện tượng khúc xạ ánh sáng.

- Khi ánh sáng truyền từ không khí sang nước: góc khúc xạ **nhỏ hơn** góc tới
- Khi ánh sáng truyền từ nước sang không khí: góc khúc xạ **lớn hơn** góc tới`,
        },
        {
          title: "Bài 41. Quan hệ giữa góc tới và góc khúc xạ",
          order: 2,
          content: `## Kết luận

- Khi góc tới tăng (giảm) thì góc khúc xạ cũng tăng (giảm)
- Khi góc tới bằng 0° (tia sáng vuông góc với mặt phân cách) thì góc khúc xạ cũng bằng 0°, tia sáng không bị gãy khúc`,
        },
        {
          title: "Bài 42. Thấu kính hội tụ",
          order: 3,
          content: `## 1. Đặc điểm

Thấu kính hội tụ thường dùng có phần rìa mỏng hơn phần giữa. Chùm tia tới song song với trục chính cho chùm tia ló hội tụ tại một điểm.

## 2. Đường truyền của 3 tia sáng đặc biệt

- Tia tới đi qua quang tâm O thì tia ló **tiếp tục truyền thẳng**
- Tia tới song song trục chính thì tia ló đi qua **tiêu điểm F**
- Tia tới qua tiêu điểm thì tia ló **song song trục chính**`,
        },
        {
          title: "Bài 43. Ảnh của một vật tạo ra bởi thấu kính hội tụ",
          order: 4,
          content: `## Đặc điểm ảnh qua thấu kính hội tụ

- Vật đặt ngoài khoảng tiêu cự (d>f): cho ảnh thật, ngược chiều với vật (ở rất xa cho ảnh thật nhỏ hơn vật)
- Vật đặt trong khoảng tiêu cự (d<f): cho ảnh ảo, lớn hơn vật, cùng chiều với vật
- Vật đặt rất xa thấu kính: ảnh thật có vị trí cách thấu kính một khoảng bằng tiêu cự`,
        },
        {
          title: "Bài 44. Thấu kính phân kì",
          order: 5,
          content: `## 1. Đặc điểm

Thấu kính phân kì thường dùng có phần rìa dày hơn phần giữa. Chùm tia tới song song với trục chính cho chùm tia ló phân kì (loe rộng ra).

## 2. Đường truyền của 2 tia sáng đặc biệt

- Tia tới đi qua quang tâm O thì tia ló tiếp tục truyền thẳng
- Tia tới song song trục chính thì tia ló kéo dài đi qua tiêu điểm F (cùng phía với tia tới)`,
        },
        {
          title: "Bài 45. Ảnh của một vật tạo bởi thấu kính phân kì",
          order: 6,
          content: `## Đặc điểm ảnh qua thấu kính phân kì

Vật sáng đặt ở mọi vị trí trước thấu kính phân kì luôn cho **ảnh ảo, cùng chiều, nhỏ hơn vật** và luôn nằm trong khoảng tiêu cự của thấu kính.

Vật đặt rất xa thấu kính, ảnh ảo của vật có vị trí cách thấu kính một khoảng bằng tiêu cự.`,
        },
        {
          title: "Bài 46. Thực hành: Đo tiêu cự của thấu kính hội tụ",
          order: 7,
          content: `## Mục đích và cách tiến hành

- Dựa vào đặc điểm: khi đặt vật cách thấu kính hội tụ một khoảng d=2f thì ảnh thật thu được cũng cách thấu kính d'=2f, ảnh cao bằng vật
- Điều chỉnh vị trí vật và màn hứng ảnh sao cho thu được ảnh rõ nét, cao bằng vật, từ đó suy ra tiêu cự f = d/2`,
        },
        {
          title: "Bài 47. Sự tạo ảnh trong máy ảnh",
          order: 8,
          content: `## Cấu tạo và đặc điểm

Máy ảnh gồm hai bộ phận chính: **vật kính** (thấu kính hội tụ) và **buồng tối**.

Ảnh của vật trên phim là ảnh **thật, ngược chiều và nhỏ hơn** vật.`,
        },
        {
          title: "Bài 48. Mắt",
          order: 9,
          content: `## 1. Cấu tạo của mắt

Hai bộ phận quan trọng nhất của mắt là **thể thủy tinh** (đóng vai trò như vật kính) và **màng lưới** (đóng vai trò như phim).

## 2. Sự điều tiết

Sự điều tiết của mắt là sự thay đổi độ cong của thể thủy tinh để ảnh của vật quan sát hiện rõ nét trên màng lưới.

## 3. Điểm cực cận và điểm cực viễn

Điểm xa mắt nhất mà mắt còn nhìn rõ khi không điều tiết gọi là **điểm cực viễn**; điểm gần mắt nhất mà mắt còn nhìn rõ được gọi là **điểm cực cận**.`,
        },
        {
          title: "Bài 49. Mắt cận và mắt lão",
          order: 10,
          content: `## 1. Mắt cận thị

- Mắt cận nhìn rõ vật ở gần nhưng **không nhìn rõ vật ở xa**
- Điểm cực viễn của mắt cận ở gần hơn bình thường
- Cách khắc phục: đeo **kính phân kì** có tiêu điểm trùng với điểm cực viễn

## 2. Mắt lão

- Mắt lão nhìn rõ vật ở xa nhưng **không nhìn rõ vật ở gần**
- Điểm cực cận của mắt lão xa hơn bình thường
- Cách khắc phục: đeo **kính hội tụ** để nhìn rõ vật ở gần`,
        },
        {
          title: "Bài 50. Kính lúp",
          order: 11,
          content: `## 1. Kính lúp là gì

Kính lúp là thấu kính hội tụ có tiêu cự ngắn, dùng để quan sát các vật nhỏ.

Số bội giác G của kính lúp cho biết ảnh quan sát được qua kính lúp gấp bao nhiêu lần ảnh quan sát trực tiếp mà không dùng kính: **G = 25/f** (f tính bằng cm)

## 2. Cách quan sát vật nhỏ qua kính lúp

Đặt vật trong khoảng tiêu cự của kính lúp (d<f) để thu được ảnh ảo, cùng chiều, lớn hơn vật.`,
        },
        {
          title: "Bài 51. Bài tập quang hình học",
          order: 12,
          content: `## Phương pháp giải

- Vẽ ảnh của vật qua thấu kính bằng cách sử dụng ít nhất 2 trong 3 tia sáng đặc biệt
- Dùng kiến thức hình học (tam giác đồng dạng) để tính khoảng cách và độ cao ảnh khi biết d, f
- Áp dụng công thức thấu kính (nếu đã được giới thiệu ở mức nâng cao): 1/f = 1/d + 1/d'`,
        },
        {
          title: "Bài 52. Ánh sáng trắng và ánh sáng màu",
          order: 13,
          content: `## 1. Nguồn phát ánh sáng trắng và ánh sáng màu

Mặt Trời, các đèn có dây tóc nóng sáng phát ra ánh sáng trắng; các đèn LED, đèn laze phát ra ánh sáng màu.

## 2. Tạo ra ánh sáng màu bằng tấm lọc màu

Chiếu ánh sáng trắng hoặc ánh sáng màu qua tấm lọc màu sẽ được ánh sáng có màu của tấm lọc đó.`,
        },
        {
          title: "Bài 53. Sự phân tích ánh sáng trắng",
          order: 14,
          content: `## Kết luận

Có thể phân tích một chùm ánh sáng trắng thành các chùm sáng màu khác nhau bằng cách cho nó đi qua một **lăng kính**, hoặc phản chiếu trên mặt ghi của **đĩa CD**.

> Trong chùm ánh sáng trắng có chứa nhiều chùm ánh sáng màu khác nhau.`,
        },
        {
          title: "Bài 54. Sự trộn các ánh sáng màu",
          order: 15,
          content: `## Kết luận

- Có thể trộn hai hay nhiều ánh sáng màu với nhau để được một ánh sáng màu khác
- Khi trộn các ánh sáng đỏ, lục, lam với những tỉ lệ thích hợp, ta có thể được **ánh sáng trắng**
- Trộn các ánh sáng có màu khác nhau sẽ được ánh sáng màu khác hẳn`,
        },
        {
          title: "Bài 55. Màu sắc các vật dưới ánh sáng trắng và dưới ánh sáng màu",
          order: 16,
          content: `## Kết luận

- Vật màu trắng, đỏ, xanh... dưới ánh sáng trắng có màu đúng như tên gọi
- Dưới ánh sáng đỏ, vật màu trắng có màu đỏ, vật màu đỏ vẫn đỏ, nhưng vật màu xanh gần như có màu đen
- **Vật màu nào thì tán xạ tốt ánh sáng màu đó và tán xạ kém ánh sáng các màu khác**`,
        },
        {
          title: "Bài 56. Các tác dụng của ánh sáng",
          order: 17,
          content: `## Ba tác dụng chính của ánh sáng

- **Tác dụng nhiệt:** ánh sáng chiếu vào vật làm vật nóng lên, ứng dụng: máy sấy, bình nước nóng năng lượng mặt trời
- **Tác dụng sinh học:** ánh sáng gây ra một số biến đổi ở sinh vật, ứng dụng: sự quang hợp của cây xanh
- **Tác dụng quang điện:** ánh sáng chiếu vào pin quang điện làm nó phát sinh ra dòng điện`,
        },
        {
          title: "Bài 57. Thực hành: Nhận biết ánh sáng đơn sắc và ánh sáng không đơn sắc bằng đĩa CD",
          order: 18,
          content: `## Mục đích và cách tiến hành

- Chiếu các chùm ánh sáng màu (đỏ, lục,...) tách ra từ chùm ánh sáng trắng vào mặt ghi của đĩa CD
- Quan sát ánh sáng phản xạ: nếu vẫn giữ nguyên màu ban đầu thì đó là **ánh sáng đơn sắc**; nếu bị tách thành nhiều màu khác thì đó là **ánh sáng không đơn sắc**`,
        },
        {
          title: "Bài 58. Tổng kết chương III: Quang học",
          order: 19,
          content: `## Hệ thống kiến thức trọng tâm

- Hiện tượng khúc xạ ánh sáng: tia sáng bị gãy khúc khi truyền qua mặt phân cách 2 môi trường
- Thấu kính hội tụ: rìa mỏng, cho ảnh thật hoặc ảo tùy vị trí vật
- Thấu kính phân kì: rìa dày, luôn cho ảnh ảo nhỏ hơn vật
- Mắt cận đeo kính phân kì, mắt lão đeo kính hội tụ
- Kính lúp: thấu kính hội tụ tiêu cự ngắn, G=25/f
- Ánh sáng trắng phân tích được thành nhiều ánh sáng màu; có thể trộn màu để tạo lại ánh sáng trắng
- Ánh sáng có 3 tác dụng: nhiệt, sinh học, quang điện`,
        },
      ],
      quiz: {
        title: "Ôn tập chương III: Quang học",
        questions: [
          { text: "Hiện tượng khúc xạ ánh sáng là hiện tượng:", options: JSON.stringify(["Ánh sáng bị hấp thụ hoàn toàn", "Tia sáng bị gãy khúc tại mặt phân cách 2 môi trường", "Ánh sáng phản xạ toàn phần", "Ánh sáng đổi màu"]), answer: "1" },
          { text: "Khi ánh sáng truyền từ không khí sang nước, góc khúc xạ:", options: JSON.stringify(["Lớn hơn góc tới", "Nhỏ hơn góc tới", "Bằng góc tới", "Bằng 90°"]), answer: "1" },
          { text: "Thấu kính hội tụ có đặc điểm:", options: JSON.stringify(["Rìa dày hơn giữa", "Rìa mỏng hơn giữa", "Rìa và giữa bằng nhau", "Hình vuông"]), answer: "1" },
          { text: "Vật đặt ngoài khoảng tiêu cự của thấu kính hội tụ cho ảnh:", options: JSON.stringify(["Ảo, cùng chiều", "Thật, ngược chiều", "Ảo, ngược chiều", "Thật, cùng chiều"]), answer: "1" },
          { text: "Vật đặt trong khoảng tiêu cự của thấu kính hội tụ cho ảnh:", options: JSON.stringify(["Thật, nhỏ hơn vật", "Ảo, lớn hơn vật, cùng chiều", "Thật, ngược chiều", "Ảo, nhỏ hơn vật"]), answer: "1" },
          { text: "Thấu kính phân kì có đặc điểm:", options: JSON.stringify(["Rìa mỏng hơn giữa", "Rìa dày hơn giữa", "Hình tròn đều", "Không có tiêu điểm"]), answer: "1" },
          { text: "Ảnh tạo bởi thấu kính phân kì luôn là:", options: JSON.stringify(["Ảnh thật, lớn hơn vật", "Ảnh ảo, nhỏ hơn vật", "Ảnh thật, nhỏ hơn vật", "Ảnh ảo, lớn hơn vật"]), answer: "1" },
          { text: "Hai bộ phận chính của máy ảnh là:", options: JSON.stringify(["Vật kính và buồng tối", "Gương và lăng kính", "Thấu kính phân kì và phim", "Ống kính và pin"]), answer: "0" },
          { text: "Bộ phận đóng vai trò như vật kính trong mắt là:", options: JSON.stringify(["Màng lưới", "Thể thủy tinh", "Con ngươi", "Giác mạc"]), answer: "1" },
          { text: "Mắt cận thị không nhìn rõ:", options: JSON.stringify(["Vật ở gần", "Vật ở xa", "Cả gần và xa", "Không có tật gì"]), answer: "1" },
          { text: "Cách khắc phục tật cận thị là đeo:", options: JSON.stringify(["Kính hội tụ", "Kính phân kì", "Kính lúp", "Không cần đeo kính"]), answer: "1" },
          { text: "Mắt lão không nhìn rõ:", options: JSON.stringify(["Vật ở xa", "Vật ở gần", "Cả gần và xa", "Không có tật gì"]), answer: "1" },
          { text: "Cách khắc phục tật mắt lão là đeo:", options: JSON.stringify(["Kính phân kì", "Kính hội tụ", "Kính lúp có tiêu cự dài", "Không cần đeo kính"]), answer: "1" },
          { text: "Kính lúp là:", options: JSON.stringify(["Thấu kính phân kì tiêu cự dài", "Thấu kính hội tụ tiêu cự ngắn", "Gương phẳng", "Gương cầu lồi"]), answer: "1" },
          { text: "Số bội giác của kính lúp tính theo công thức:", options: JSON.stringify(["G=25/f", "G=f/25", "G=25.f", "G=f-25"]), answer: "0" },
          { text: "Có thể phân tích ánh sáng trắng bằng:", options: JSON.stringify(["Gương phẳng", "Lăng kính", "Thấu kính phân kì", "Tấm kính trong"]), answer: "1" },
          { text: "Trộn ánh sáng đỏ, lục, lam với tỉ lệ thích hợp được:", options: JSON.stringify(["Ánh sáng đen", "Ánh sáng trắng", "Ánh sáng vàng", "Không tạo ra ánh sáng"]), answer: "1" },
          { text: "Dưới ánh sáng đỏ, vật màu xanh có màu:", options: JSON.stringify(["Xanh rõ nét", "Gần như đen", "Trắng", "Vàng"]), answer: "1" },
          { text: "Tác dụng của ánh sáng lên pin quang điện gọi là:", options: JSON.stringify(["Tác dụng nhiệt", "Tác dụng quang điện", "Tác dụng sinh học", "Tác dụng cơ học"]), answer: "1" },
          { text: "Ánh sáng đơn sắc khi chiếu qua đĩa CD thì:", options: JSON.stringify(["Bị tách thành nhiều màu", "Giữ nguyên màu ban đầu", "Biến mất", "Chuyển thành ánh sáng trắng"]), answer: "1" },
        ],
      },
    },
    {
      title: "Chương IV. Sự bảo toàn và chuyển hóa năng lượng",
      order: 4,
      lessons: [
        {
          title: "Bài 59. Năng lượng và sự chuyển hóa năng lượng",
          order: 1,
          content: `## 1. Nhận biết cơ năng và nhiệt năng

Ta nhận biết được một vật có cơ năng khi nó có khả năng thực hiện công, có nhiệt năng khi nó có thể làm nóng các vật khác.

## 2. Các dạng năng lượng và sự chuyển hóa giữa chúng

Con người có thể nhận biết các dạng năng lượng như hóa năng, quang năng, điện năng khi chúng được **biến đổi thành cơ năng hoặc nhiệt năng**.

**Ví dụ:** Pin (hóa năng) → điện năng → cơ năng (khi chạy động cơ) hoặc quang năng (đèn LED)`,
        },
        {
          title: "Bài 60. Định luật bảo toàn năng lượng",
          order: 2,
          content: `## Định luật bảo toàn năng lượng

> Năng lượng không tự sinh ra hoặc tự mất đi mà chỉ **chuyển hóa từ dạng này sang dạng khác**, hoặc truyền từ vật này sang vật khác.

**Ví dụ:** Khi thả quả bóng rơi, thế năng chuyển thành động năng; khi bóng nảy lên, một phần cơ năng chuyển thành nhiệt năng (do ma sát với không khí và biến dạng khi va chạm) nên độ cao nảy lên thấp hơn độ cao ban đầu.`,
        },
        {
          title: "Bài 61. Sản xuất điện năng - Nhiệt điện và thủy điện",
          order: 3,
          content: `## 1. Nhà máy nhiệt điện

Trong nhà máy nhiệt điện, năng lượng của nhiên liệu bị đốt cháy (hóa năng) được chuyển hóa thành nhiệt năng, rồi thành cơ năng của hơi nước làm quay tua bin, cuối cùng thành điện năng.

## 2. Nhà máy thủy điện

Trong nhà máy thủy điện, thế năng của nước trong hồ chứa được chuyển hóa thành động năng của dòng nước làm quay tua bin, rồi thành điện năng.`,
        },
        {
          title: "Bài 62. Điện gió - Điện mặt trời - Điện hạt nhân",
          order: 4,
          content: `## 1. Điện gió

Động năng của gió làm quay cánh quạt của máy phát điện gió, chuyển hóa thành điện năng.

## 2. Pin mặt trời (điện mặt trời)

Pin mặt trời là những tấm phẳng được chế tạo bằng vật liệu đặc biệt (bán dẫn), khi có ánh sáng chiếu vào thì trực tiếp tạo ra dòng điện — chuyển hóa quang năng thành điện năng.

## 3. Nhà máy điện hạt nhân

Trong nhà máy điện hạt nhân, năng lượng của phản ứng hạt nhân được chuyển hóa thành nhiệt năng, rồi thành cơ năng, cuối cùng thành điện năng — tương tự nhà máy nhiệt điện nhưng nguồn nhiệt là phản ứng phân hạch hạt nhân.`,
        },
      ],
      quiz: {
        title: "Ôn tập chương IV: Sự bảo toàn và chuyển hóa năng lượng",
        questions: [
          { text: "Ta nhận biết một vật có cơ năng khi:", options: JSON.stringify(["Nó có khả năng thực hiện công", "Nó đứng yên", "Nó có màu sắc", "Nó có khối lượng"]), answer: "0" },
          { text: "Ta nhận biết một vật có nhiệt năng khi:", options: JSON.stringify(["Nó có thể thực hiện công cơ học", "Nó có thể làm nóng các vật khác", "Nó phát ra ánh sáng", "Nó có điện tích"]), answer: "1" },
          { text: "Định luật bảo toàn năng lượng phát biểu:", options: JSON.stringify(["Năng lượng tự sinh ra được", "Năng lượng không tự sinh ra hay mất đi, chỉ chuyển hóa hoặc truyền đi", "Năng lượng luôn mất dần theo thời gian", "Năng lượng chỉ tồn tại ở một dạng"]), answer: "1" },
          { text: "Khi quả bóng nảy lên sau khi rơi, độ cao nảy lên luôn thấp hơn ban đầu vì:", options: JSON.stringify(["Mất năng lượng hoàn toàn", "Một phần cơ năng chuyển thành nhiệt năng", "Trọng lực tăng lên", "Không khí đẩy bóng xuống"]), answer: "1" },
          { text: "Trong nhà máy nhiệt điện, năng lượng ban đầu là:", options: JSON.stringify(["Hóa năng của nhiên liệu", "Thế năng của nước", "Quang năng", "Động năng của gió"]), answer: "0" },
          { text: "Trong nhà máy thủy điện, năng lượng ban đầu là:", options: JSON.stringify(["Hóa năng", "Thế năng của nước trong hồ chứa", "Quang năng", "Năng lượng hạt nhân"]), answer: "1" },
          { text: "Pin mặt trời chuyển hóa trực tiếp:", options: JSON.stringify(["Nhiệt năng thành điện năng", "Quang năng thành điện năng", "Hóa năng thành điện năng", "Cơ năng thành điện năng"]), answer: "1" },
          { text: "Điện gió chuyển hóa năng lượng nào thành điện năng?", options: JSON.stringify(["Động năng của gió", "Thế năng của gió", "Hóa năng", "Quang năng"]), answer: "0" },
          { text: "Nhà máy điện hạt nhân sử dụng nguồn năng lượng ban đầu là:", options: JSON.stringify(["Năng lượng phản ứng hạt nhân", "Thế năng của nước", "Động năng của gió", "Quang năng mặt trời"]), answer: "0" },
          { text: "Trong nhà máy nhiệt điện, thứ tự chuyển hóa năng lượng là:", options: JSON.stringify(["Hóa năng → nhiệt năng → cơ năng → điện năng", "Điện năng → nhiệt năng → cơ năng", "Cơ năng → hóa năng → điện năng", "Quang năng → nhiệt năng → điện năng"]), answer: "0" },
          { text: "Trong nhà máy thủy điện, thứ tự chuyển hóa năng lượng là:", options: JSON.stringify(["Thế năng → động năng → điện năng", "Hóa năng → điện năng", "Quang năng → cơ năng → điện năng", "Nhiệt năng → điện năng trực tiếp"]), answer: "0" },
          { text: "Máy phát điện gió chuyển hóa cơ năng thành:", options: JSON.stringify(["Nhiệt năng", "Điện năng", "Hóa năng", "Quang năng"]), answer: "1" },
          { text: "Pin mặt trời được chế tạo từ vật liệu:", options: JSON.stringify(["Kim loại thường", "Vật liệu bán dẫn đặc biệt", "Nhựa", "Gỗ"]), answer: "1" },
          { text: "Ưu điểm của điện gió và điện mặt trời so với nhiệt điện là:", options: JSON.stringify(["Không gây ô nhiễm, dùng nguồn năng lượng tái tạo", "Chi phí luôn thấp hơn", "Sản lượng luôn ổn định hơn", "Không cần thiết bị đặc biệt"]), answer: "0" },
          { text: "Sự chuyển hóa hóa năng thành điện năng xảy ra ở:", options: JSON.stringify(["Pin mặt trời", "Pin, ắc quy khi hoạt động", "Tua bin gió", "Đập thủy điện"]), answer: "1" },
          { text: "Trong ví dụ pin cấp điện cho động cơ điện, năng lượng chuyển hóa theo thứ tự:", options: JSON.stringify(["Hóa năng → điện năng → cơ năng", "Điện năng → hóa năng → cơ năng", "Cơ năng → hóa năng → điện năng", "Nhiệt năng → hóa năng → điện năng"]), answer: "0" },
          { text: "Năng lượng hạt nhân chuyển hóa thành điện năng qua giai đoạn trung gian là:", options: JSON.stringify(["Quang năng", "Nhiệt năng và cơ năng", "Hóa năng", "Thế năng đàn hồi"]), answer: "1" },
          { text: "Định luật bảo toàn năng lượng áp dụng cho:", options: JSON.stringify(["Chỉ cơ năng", "Mọi quá trình biến đổi năng lượng", "Chỉ điện năng", "Chỉ nhiệt năng"]), answer: "1" },
          { text: "Gió có năng lượng ở dạng:", options: JSON.stringify(["Thế năng", "Động năng", "Hóa năng", "Quang năng"]), answer: "1" },
          { text: "Việc phát triển năng lượng tái tạo (gió, mặt trời) nhằm mục đích chính:", options: JSON.stringify(["Giảm phụ thuộc nhiên liệu hóa thạch và bảo vệ môi trường", "Tăng giá điện", "Giảm sản lượng điện", "Không có mục đích đặc biệt"]), answer: "0" },
        ],
      },
    },
  ],
};
