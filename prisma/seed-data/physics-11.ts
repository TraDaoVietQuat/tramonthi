import { CourseData } from "./types";

export const PHYSICS_11_COURSE: CourseData = {
  title: "Vật lí 11",
  slug: "vat-ly-11",
  subject: "physics",
  grade: "11",
  description: "Dao động, Sóng, Điện trường và Dòng điện - Mạch điện – chương trình Vật lí 11 theo SGK Kết nối tri thức 2023.",
  published: true,
  modules: [
    {
      title: "Chương I. Dao động",
      order: 1,
      lessons: [
        {
          title: "Bài 1. Dao động điều hoà",
          order: 1,
          content: `## 1. Dao động và dao động tuần hoàn

**Dao động** là chuyển động qua lại quanh một vị trí cân bằng xác định. **Dao động tuần hoàn** là dao động mà trạng thái của vật lặp lại như cũ sau những khoảng thời gian bằng nhau.

## 2. Dao động điều hoà

**Dao động điều hoà** là dao động trong đó li độ của vật là một hàm côsin (hoặc sin) theo thời gian:

> **x = A.cos(ωt + φ)**

Trong đó:
- x: li độ (m) — độ dời khỏi vị trí cân bằng
- A: **biên độ** dao động (li độ cực đại, A > 0)
- ω: **tần số góc** (rad/s)
- (ωt + φ): **pha dao động** tại thời điểm t
- φ: **pha ban đầu** (tại t = 0)

## 3. Chu kì và tần số

- **Chu kì T** (s): thời gian để vật thực hiện một dao động toàn phần
- **Tần số f** (Hz): số dao động toàn phần thực hiện được trong một giây

> **T = 2π/ω** ;  **f = 1/T = ω/2π**

## 4. Con lắc lò xo — ví dụ dao động điều hoà

Con lắc lò xo gồm vật khối lượng m gắn vào lò xo độ cứng k, dao động điều hoà với:

> **ω = √(k/m)**

**Ví dụ:** Vật dao động điều hoà với phương trình x = 5cos(4πt + π/3) cm. Ta có A = 5 cm, ω = 4π rad/s, φ = π/3 rad, T = 2π/4π = 0,5 s.`,
        },
        {
          title: "Bài 2. Mô tả dao động điều hoà",
          order: 2,
          content: `## 1. Mối liên hệ giữa dao động điều hoà và chuyển động tròn đều

Một điểm P dao động điều hoà trên trục Ox có thể coi là **hình chiếu** của một điểm M chuyển động tròn đều trên đường tròn bán kính A, tốc độ góc ω, lên trục Ox đi qua tâm.

Đây là cơ sở để biểu diễn dao động điều hoà bằng **véc-tơ quay** — công cụ hữu ích để cộng các dao động điều hoà cùng phương, cùng tần số.

## 2. Đồ thị li độ theo thời gian

Đồ thị x(t) = A.cos(ωt + φ) là một **đường hình sin**, dao động tuần hoàn quanh trục hoành với biên độ A và chu kì T.

- Tại t = 0: x₀ = A.cosφ — vị trí ban đầu phụ thuộc pha ban đầu φ
- Đồ thị lặp lại y hệt sau mỗi khoảng thời gian T

## 3. Các đại lượng đặc trưng qua đồ thị

Từ đồ thị x–t có thể xác định:
- **Biên độ A:** giá trị lớn nhất của |x|
- **Chu kì T:** khoảng thời gian ngắn nhất để đồ thị lặp lại
- **Pha ban đầu φ:** xác định từ vị trí và chiều chuyển động tại t = 0

**Ví dụ:** Đồ thị cho biết vật có li độ cực đại 4 cm, lặp lại sau 2 s → A = 4 cm, T = 2 s, ω = 2π/T = π rad/s.`,
        },
        {
          title: "Bài 3. Vận tốc, gia tốc trong dao động điều hoà",
          order: 3,
          content: `## 1. Vận tốc trong dao động điều hoà

Vận tốc là đạo hàm của li độ theo thời gian:

> **v = x' = −Aω.sin(ωt + φ)**

- Tốc độ cực đại: **v_max = Aω** (đạt được khi vật qua vị trí cân bằng x = 0)
- Vận tốc bằng 0 khi vật ở vị trí biên (x = ±A)
- Vận tốc **sớm pha π/2** so với li độ

## 2. Gia tốc trong dao động điều hoà

Gia tốc là đạo hàm của vận tốc theo thời gian:

> **a = v' = −Aω².cos(ωt + φ) = −ω².x**

- Gia tốc cực đại: **a_max = Aω²** (đạt được ở vị trí biên)
- Gia tốc bằng 0 khi vật qua vị trí cân bằng
- Gia tốc luôn **ngược chiều với li độ**, hướng về vị trí cân bằng (đặc trưng của dao động điều hoà) và **ngược pha** với li độ

## 3. Hệ thức độc lập với thời gian

> **A² = x² + (v/ω)²**

Hệ thức này cho phép tính biên độ hoặc vận tốc tại một li độ bất kì mà không cần biết thời điểm t.

**Ví dụ:** Vật dao động điều hoà A = 10 cm, ω = 2 rad/s. Tại x = 6 cm, tốc độ: v = ω√(A²−x²) = 2√(100−36) = 16 cm/s`,
        },
        {
          title: "Bài 4. Bài tập về dao động điều hoà",
          order: 4,
          content: `## Bài tập vận dụng tổng hợp

**Bài 1:** Một vật dao động điều hoà với phương trình x = 6cos(5πt − π/6) cm.
- Biên độ: A = 6 cm
- Tần số góc: ω = 5π rad/s → chu kì T = 2π/5π = 0,4 s; tần số f = 2,5 Hz
- Tốc độ cực đại: v_max = Aω = 6.5π = 30π cm/s ≈ 94,2 cm/s
- Gia tốc cực đại: a_max = Aω² = 6.(5π)² = 150π² cm/s²

**Bài 2:** Vật dao động điều hoà có A = 8 cm, T = 1 s. Tính tốc độ tại li độ x = 4 cm.
- ω = 2π/T = 2π rad/s
- v = ω√(A² − x²) = 2π√(64−16) = 2π√48 = 8π√3 cm/s ≈ 43,5 cm/s

**Bài 3:** Con lắc lò xo có k = 100 N/m, m = 0,25 kg. Tính chu kì dao động.
- ω = √(k/m) = √(100/0,25) = 20 rad/s
- T = 2π/ω = 2π/20 = π/10 s ≈ 0,314 s

**Phương pháp giải chung:** xác định A, ω, φ từ đề bài (phương trình, đồ thị hoặc điều kiện ban đầu), sau đó áp dụng các công thức x, v, a hoặc hệ thức độc lập thời gian để tính đại lượng cần tìm.`,
        },
        {
          title: "Bài 5. Động năng. Thế năng. Sự chuyển hoá năng lượng trong dao động điều hoà",
          order: 5,
          content: `## 1. Động năng của vật dao động điều hoà

> **W_đ = ½mv² = ½mω²A²sin²(ωt + φ)**

Động năng biến thiên tuần hoàn, đạt cực đại tại vị trí cân bằng (v = v_max), bằng 0 tại vị trí biên.

## 2. Thế năng của vật dao động điều hoà (con lắc lò xo)

> **W_t = ½kx² = ½mω²A²cos²(ωt + φ)**

Thế năng đạt cực đại tại vị trí biên (x = ±A), bằng 0 tại vị trí cân bằng.

## 3. Cơ năng và sự bảo toàn năng lượng

Cơ năng: **W = W_đ + W_t = ½mω²A² = ½kA² = const**

- Cơ năng của vật dao động điều hoà **tỉ lệ với bình phương biên độ**, được **bảo toàn** (khi bỏ qua ma sát) và không phụ thuộc thời gian
- Trong quá trình dao động, động năng và thế năng liên tục **chuyển hoá qua lại** cho nhau, nhưng tổng của chúng không đổi
- Động năng và thế năng đều biến thiên tuần hoàn với **chu kì T' = T/2** (bằng nửa chu kì dao động)

**Ví dụ:** Con lắc lò xo k = 40 N/m, A = 5 cm. Cơ năng: W = ½.40.(0,05)² = 0,05 J. Tại vị trí x = 2,5 cm: W_t = ½.40.(0,025)² = 0,0125 J → W_đ = 0,05 − 0,0125 = 0,0375 J`,
        },
        {
          title: "Bài 6. Dao động tắt dần. Dao động cưỡng bức. Hiện tượng cộng hưởng",
          order: 6,
          content: `## 1. Dao động tắt dần

Dao động có **biên độ giảm dần theo thời gian** do tác dụng của lực cản (ma sát, lực cản môi trường) làm tiêu hao cơ năng.

- Lực cản càng lớn, dao động tắt dần càng nhanh
- Ứng dụng: giảm xóc ô tô, xe máy (dao động tắt dần có lợi)

## 2. Dao động duy trì

Dao động được **duy trì biên độ không đổi** bằng cách bổ sung năng lượng đúng bằng phần năng lượng tiêu hao sau mỗi chu kì, mà không làm thay đổi chu kì dao động riêng của hệ.

## 3. Dao động cưỡng bức

Dao động chịu tác dụng của một **ngoại lực cưỡng bức tuần hoàn** có tần số f. Đặc điểm:
- Sau giai đoạn chuyển tiếp, hệ dao động **ổn định với tần số bằng tần số của lực cưỡng bức** (không phải tần số riêng)
- Biên độ dao động cưỡng bức phụ thuộc biên độ lực cưỡng bức và độ chênh lệch giữa tần số cưỡng bức với tần số riêng f₀ của hệ

## 4. Hiện tượng cộng hưởng

**Hiện tượng cộng hưởng** xảy ra khi tần số của ngoại lực cưỡng bức **bằng tần số riêng** của hệ dao động (f = f₀), khi đó **biên độ dao động đạt giá trị cực đại**.

- Lực cản của môi trường càng nhỏ, biên độ cộng hưởng càng lớn (cộng hưởng càng rõ nét, "nhọn")

**Ứng dụng và tác hại:** hộp đàn ghi-ta cộng hưởng khuếch đại âm thanh (có lợi); cầu, toà nhà rung mạnh khi tần số rung phù hợp với tần số riêng có thể gây sập đổ (có hại, cần tính toán tránh cộng hưởng trong xây dựng).`,
        },
        {
          title: "Bài 7. Bài tập về sự chuyển hoá năng lượng trong dao động điều hoà",
          order: 7,
          content: `## Bài tập vận dụng

**Bài 1:** Con lắc lò xo k = 50 N/m, A = 4 cm dao động điều hoà. Tính cơ năng và động năng tại vị trí x = 2 cm.
- Cơ năng: W = ½kA² = ½.50.(0,04)² = 0,04 J
- Thế năng tại x = 2 cm: W_t = ½kx² = ½.50.(0,02)² = 0,01 J
- Động năng: W_đ = W − W_t = 0,04 − 0,01 = 0,03 J

**Bài 2:** Tại vị trí động năng bằng thế năng (W_đ = W_t), tìm li độ theo biên độ A.
- W_đ = W_t = W/2 → ½kx² = ½.(½kA²) → x² = A²/2 → **x = ±A/√2 ≈ ±0,707A**

**Bài 3:** Vật dao động điều hoà có tốc độ cực đại v_max = 20 cm/s và gia tốc cực đại a_max = 200 cm/s². Tính biên độ A và tần số góc ω.
- ω = a_max/v_max = 200/20 = 10 rad/s
- A = v_max/ω = 20/10 = 2 cm

**Nhận xét:** Các bài toán năng lượng dao động điều hoà thường khai thác hệ thức W = W_đ + W_t = const và tính chất động năng, thế năng biến thiên tuần hoàn với chu kì bằng nửa chu kì dao động.`,
        },
      ],
      quiz: {
        title: "Ôn tập chương I",
        questions: [
          {
            text: "Phương trình dao động điều hoà có dạng tổng quát:",
            options: JSON.stringify(["x = A.t + φ", "x = A.cos(ωt + φ)", "x = A.ω.t", "x = A + ωt"]),
            answer: "1",
          },
          {
            text: "Đơn vị của tần số góc ω là:",
            options: JSON.stringify(["Hz", "rad/s", "m/s", "s"]),
            answer: "1",
          },
          {
            text: "Chu kì T liên hệ với tần số góc ω theo công thức:",
            options: JSON.stringify(["T = 2π/ω", "T = ω/2π", "T = 2πω", "T = ω²/2π"]),
            answer: "0",
          },
          {
            text: "Vận tốc trong dao động điều hoà đạt giá trị cực đại khi vật ở:",
            options: JSON.stringify(["Vị trí biên", "Vị trí cân bằng", "Giữa biên và vị trí cân bằng", "Không xác định"]),
            answer: "1",
          },
          {
            text: "Gia tốc trong dao động điều hoà luôn:",
            options: JSON.stringify(["Cùng chiều với li độ", "Ngược chiều với li độ, hướng về VTCB", "Bằng 0", "Không đổi"]),
            answer: "1",
          },
          {
            text: "Hệ thức độc lập thời gian giữa li độ và vận tốc là:",
            options: JSON.stringify(["A² = x² + (v/ω)²", "A = x + v/ω", "A² = x² − v²", "A = xv/ω"]),
            answer: "0",
          },
          {
            text: "Con lắc lò xo có độ cứng k, khối lượng m dao động điều hoà với tần số góc:",
            options: JSON.stringify(["ω = √(m/k)", "ω = √(k/m)", "ω = k/m", "ω = km"]),
            answer: "1",
          },
          {
            text: "Cơ năng của vật dao động điều hoà tỉ lệ với:",
            options: JSON.stringify(["Biên độ A", "Bình phương biên độ A²", "Căn bậc hai biên độ", "Chu kì T"]),
            answer: "1",
          },
          {
            text: "Động năng của vật dao động điều hoà đạt cực đại khi vật ở:",
            options: JSON.stringify(["Vị trí biên", "Vị trí cân bằng", "Bất kỳ vị trí nào", "Không đạt cực đại"]),
            answer: "1",
          },
          {
            text: "Thế năng của con lắc lò xo đạt cực đại khi:",
            options: JSON.stringify(["Vật ở vị trí cân bằng", "Vật ở vị trí biên", "Vận tốc cực đại", "Gia tốc bằng 0"]),
            answer: "1",
          },
          {
            text: "Động năng và thế năng trong dao động điều hoà biến thiên tuần hoàn với chu kì:",
            options: JSON.stringify(["Bằng chu kì dao động T", "Bằng nửa chu kì dao động T/2", "Bằng 2 lần chu kì dao động", "Không tuần hoàn"]),
            answer: "1",
          },
          {
            text: "Dao động tắt dần là dao động có:",
            options: JSON.stringify(["Biên độ không đổi", "Biên độ tăng dần", "Biên độ giảm dần theo thời gian", "Tần số tăng dần"]),
            answer: "2",
          },
          {
            text: "Nguyên nhân gây ra dao động tắt dần là:",
            options: JSON.stringify(["Lực đàn hồi", "Lực cản (ma sát, lực cản môi trường)", "Trọng lực", "Lực cưỡng bức"]),
            answer: "1",
          },
          {
            text: "Dao động cưỡng bức, sau giai đoạn ổn định, có tần số bằng:",
            options: JSON.stringify(["Tần số riêng của hệ", "Tần số của ngoại lực cưỡng bức", "Luôn bằng 0", "Không xác định"]),
            answer: "1",
          },
          {
            text: "Hiện tượng cộng hưởng xảy ra khi:",
            options: JSON.stringify([
              "Tần số ngoại lực khác tần số riêng",
              "Tần số ngoại lực bằng tần số riêng của hệ",
              "Biên độ ngoại lực bằng 0",
              "Lực cản rất lớn",
            ]),
            answer: "1",
          },
          {
            text: "Khi xảy ra cộng hưởng, biên độ dao động:",
            options: JSON.stringify(["Giảm xuống 0", "Đạt giá trị cực đại", "Không đổi", "Giảm dần"]),
            answer: "1",
          },
          {
            text: "Một vật dao động điều hoà x = 4cos(2πt) cm. Biên độ và chu kì lần lượt là:",
            options: JSON.stringify(["4 cm; 2 s", "4 cm; 1 s", "2 cm; 2 s", "4 cm; π s"]),
            answer: "1",
          },
          {
            text: "Vật dao động điều hoà có A = 5 cm, ω = 4 rad/s. Tốc độ cực đại là:",
            options: JSON.stringify(["10 cm/s", "20 cm/s", "5 cm/s", "4 cm/s"]),
            answer: "1",
          },
          {
            text: "Giảm xóc của xe máy, ô tô là ứng dụng của:",
            options: JSON.stringify(["Cộng hưởng", "Dao động cưỡng bức", "Dao động tắt dần có lợi", "Dao động duy trì"]),
            answer: "2",
          },
          {
            text: "Tại vị trí động năng bằng thế năng trong dao động điều hoà, li độ x bằng:",
            options: JSON.stringify(["±A", "±A/√2", "±A/2", "0"]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chương II. Sóng",
      order: 2,
      lessons: [
        {
          title: "Bài 8. Mô tả sóng",
          order: 8,
          content: `## 1. Khái niệm sóng cơ

**Sóng cơ** là dao động lan truyền trong một môi trường vật chất (rắn, lỏng, khí). Sóng cơ truyền **năng lượng và trạng thái dao động**, không truyền các phần tử vật chất của môi trường đi theo.

## 2. Các đại lượng đặc trưng của sóng

- **Biên độ sóng (A):** biên độ dao động của một phần tử môi trường có sóng truyền qua
- **Chu kì sóng (T), tần số sóng (f):** chu kì, tần số dao động của các phần tử môi trường — bằng chu kì, tần số của nguồn sóng
- **Bước sóng (λ):** quãng đường sóng truyền được trong một chu kì, cũng là khoảng cách giữa hai điểm gần nhau nhất trên phương truyền sóng dao động **cùng pha**
- **Tốc độ truyền sóng (v):** tốc độ lan truyền dao động trong môi trường

## 3. Phương trình liên hệ

> **v = λ/T = λf**

**Lưu ý:** tốc độ truyền sóng v phụ thuộc bản chất môi trường (không đổi trong một môi trường xác định), khác với tốc độ dao động của từng phần tử môi trường.

**Ví dụ:** Sóng có tần số f = 50 Hz truyền với tốc độ v = 340 m/s. Bước sóng: λ = v/f = 340/50 = 6,8 m`,
        },
        {
          title: "Bài 9. Sóng ngang. Sóng dọc. Sự truyền năng lượng của sóng cơ",
          order: 9,
          content: `## 1. Sóng ngang

**Sóng ngang** là sóng trong đó các phần tử môi trường dao động theo phương **vuông góc** với phương truyền sóng.

**Ví dụ:** sóng trên mặt nước, sóng trên dây đàn hồi. Sóng ngang truyền được trong chất rắn và trên bề mặt chất lỏng, không truyền được trong chất lỏng, chất khí (trừ sóng điện từ, không phải sóng cơ).

## 2. Sóng dọc

**Sóng dọc** là sóng trong đó các phần tử môi trường dao động theo phương **trùng với** phương truyền sóng (dao động dọc theo phương truyền, tạo ra các miền nén và miền giãn xen kẽ).

**Ví dụ:** sóng âm trong không khí. Sóng dọc truyền được trong cả chất rắn, lỏng, khí.

## 3. Sự truyền năng lượng của sóng cơ

Khi sóng truyền đi, các phần tử môi trường chỉ **dao động tại chỗ** quanh vị trí cân bằng, không di chuyển theo sóng. Sóng mang theo **năng lượng dao động** truyền từ điểm này sang điểm khác.

- Năng lượng sóng tỉ lệ với bình phương biên độ và bình phương tần số
- Sóng truyền trên mặt (2D) hoặc trong không gian (3D): năng lượng giảm dần theo khoảng cách do lan toả trên diện tích lớn hơn`,
        },
        {
          title: "Bài 10. Thực hành: Đo tần số của sóng âm",
          order: 10,
          content: `## 1. Mục đích thí nghiệm

Đo tần số dao động âm phát ra từ một nguồn âm (âm thoa, loa) bằng dụng cụ đo tần số (dao động kí điện tử, cảm biến âm kết nối máy tính).

## 2. Dụng cụ

- Nguồn phát âm (âm thoa hoặc loa phát tần số biết trước để hiệu chuẩn)
- Microphone/cảm biến âm
- Dao động kí điện tử hoặc phần mềm ghi đồ thị dao động âm theo thời gian

## 3. Các bước tiến hành

1. Kích thích nguồn âm dao động (gõ nhẹ âm thoa) đặt gần microphone
2. Thu tín hiệu âm, quan sát đồ thị dao động (tín hiệu điện áp theo thời gian) trên dao động kí
3. Xác định chu kì T của tín hiệu trên đồ thị (khoảng thời gian ngắn nhất lặp lại dạng sóng)
4. Tính tần số: **f = 1/T**

## 4. Xử lí số liệu và đánh giá sai số

Lặp lại phép đo nhiều lần, tính giá trị trung bình của T, so sánh f đo được với tần số ghi trên âm thoa (giá trị chuẩn) để đánh giá sai số tương đối của phép đo.`,
        },
        {
          title: "Bài 11. Sóng điện từ",
          order: 11,
          content: `## 1. Khái niệm

**Sóng điện từ** là sự lan truyền của điện từ trường trong không gian. Khi điện trường biến thiên sinh ra từ trường biến thiên và ngược lại, quá trình này lan truyền tạo thành sóng điện từ.

## 2. Đặc điểm của sóng điện từ

- Là **sóng ngang**: vectơ cường độ điện trường **E**, vectơ cảm ứng từ **B** và phương truyền sóng vuông góc với nhau từng đôi một
- **Truyền được trong chân không** với tốc độ **c = 3 × 10⁸ m/s** (khác với sóng cơ, cần môi trường vật chất)
- Tuân theo các quy luật: phản xạ, khúc xạ, giao thoa, nhiễu xạ như các sóng khác
- Mang năng lượng

## 3. Thang sóng điện từ

Sóng điện từ có nhiều loại tuỳ theo tần số/bước sóng: sóng vô tuyến, hồng ngoại, ánh sáng nhìn thấy, tử ngoại, tia X, tia gamma — tần số tăng dần, bước sóng giảm dần, năng lượng photon tăng dần.

**Ứng dụng:** sóng vô tuyến trong thông tin liên lạc (radio, TV, điện thoại), sóng ánh sáng nhìn thấy giúp mắt quan sát, tia X trong y học chẩn đoán hình ảnh.`,
        },
        {
          title: "Bài 12. Giao thoa sóng",
          order: 12,
          content: `## 1. Hiện tượng giao thoa

**Giao thoa sóng** là hiện tượng hai (hay nhiều) sóng kết hợp gặp nhau tạo ra những điểm mà biên độ dao động luôn tăng cường (cực đại giao thoa) hoặc luôn triệt tiêu/giảm yếu (cực tiểu giao thoa), ổn định theo thời gian.

## 2. Điều kiện giao thoa — Nguồn kết hợp

Hai nguồn sóng là **nguồn kết hợp** khi dao động cùng phương, cùng tần số và có **độ lệch pha không đổi theo thời gian**.

## 3. Vị trí cực đại, cực tiểu giao thoa

Xét điểm M cách hai nguồn S₁, S₂ (kết hợp, cùng pha) lần lượt các khoảng d₁, d₂:

- **Cực đại giao thoa** (hai sóng đến cùng pha, tăng cường lẫn nhau):
> **d₂ − d₁ = kλ** (k ∈ ℤ)

- **Cực tiểu giao thoa** (hai sóng đến ngược pha, triệt tiêu lẫn nhau):
> **d₂ − d₁ = (k + ½)λ** (k ∈ ℤ)

**Ví dụ:** Hai nguồn kết hợp cùng pha cách nhau, sóng có λ = 2 cm. Điểm M có d₂ − d₁ = 6 cm = 3λ → M là điểm cực đại giao thoa (k = 3).`,
        },
        {
          title: "Bài 13. Sóng dừng",
          order: 13,
          content: `## 1. Khái niệm sóng dừng

**Sóng dừng** là sóng tạo bởi sự giao thoa giữa sóng tới và sóng phản xạ trên cùng một phương truyền, tạo ra hình ảnh sóng "đứng yên" với các điểm **nút** (biên độ dao động bằng 0) và **bụng** (biên độ dao động cực đại) cố định.

## 2. Sóng dừng trên dây có hai đầu cố định

Hai đầu dây là hai nút sóng. Điều kiện để có sóng dừng:

> **l = k.λ/2** (k = 1, 2, 3... là số bó sóng)

Số nút = k + 1; số bụng = k

## 3. Sóng dừng trên dây có một đầu cố định, một đầu tự do

Đầu cố định là nút, đầu tự do là bụng sóng. Điều kiện:

> **l = (2k + 1).λ/4** (k = 0, 1, 2...)

## 4. Ứng dụng

Xác định bước sóng, tốc độ truyền sóng trên dây bằng cách đo chiều dài dây và đếm số bó sóng khi có sóng dừng ổn định — đây là cơ sở của phương pháp đo tốc độ truyền sóng trong thực nghiệm.

**Ví dụ:** Dây dài l = 1,2 m, hai đầu cố định, quan sát thấy 4 bó sóng (k = 4). Bước sóng: λ = 2l/k = 2,4/4 = 0,6 m`,
        },
        {
          title: "Bài 14. Bài tập về sóng",
          order: 14,
          content: `## Bài tập vận dụng tổng hợp

**Bài 1:** Sóng cơ có tần số f = 20 Hz truyền trong môi trường với tốc độ v = 40 m/s. Tính bước sóng.
- λ = v/f = 40/20 = 2 m

**Bài 2:** Hai nguồn kết hợp cùng pha S₁, S₂ phát sóng có λ = 3 cm. Điểm M cách hai nguồn d₁ = 20 cm, d₂ = 26 cm. M là điểm cực đại hay cực tiểu?
- d₂ − d₁ = 6 cm = 2λ → thoả điều kiện cực đại (k = 2) → **M là điểm cực đại giao thoa**

**Bài 3:** Dây đàn hồi hai đầu cố định dài 0,8 m, có sóng dừng với 5 bó sóng. Tính bước sóng và tần số nếu tốc độ truyền sóng trên dây là v = 20 m/s.
- λ = 2l/k = 2.0,8/5 = 0,32 m
- f = v/λ = 20/0,32 = 62,5 Hz

**Bài 4:** Sóng điện từ có tần số f = 100 MHz truyền trong chân không. Tính bước sóng.
- λ = c/f = 3×10⁸/10⁸ = 3 m

**Nhận xét:** Các bài toán về sóng thường xoay quanh công thức v = λf, điều kiện giao thoa d₂ − d₁ = kλ hoặc (k+½)λ, và điều kiện sóng dừng l = kλ/2 hoặc (2k+1)λ/4.`,
        },
        {
          title: "Bài 15. Thực hành: Đo tốc độ truyền âm",
          order: 15,
          content: `## 1. Mục đích thí nghiệm

Xác định tốc độ truyền âm trong không khí bằng phương pháp sóng dừng (ống cộng hưởng) hoặc đo trực tiếp thời gian truyền âm giữa hai điểm.

## 2. Phương pháp ống cộng hưởng

**Dụng cụ:** ống thuỷ tinh (hoặc nhựa) có thể thay đổi cột không khí, âm thoa (hoặc loa phát âm tần số f biết trước), micro thu âm.

**Các bước:**
1. Đặt nguồn âm dao động ở miệng ống, thay đổi chiều dài cột không khí trong ống (một đầu kín, một đầu hở)
2. Tìm các vị trí cột khí cho âm thanh cộng hưởng to nhất (tương ứng vị trí có sóng dừng, một đầu là nút, một đầu là bụng)
3. Đo các chiều dài cột khí cộng hưởng liên tiếp l₁, l₂ — khoảng cách giữa hai vị trí cộng hưởng liên tiếp bằng λ/2
4. Tính bước sóng λ = 2(l₂ − l₁), sau đó tính tốc độ truyền âm: **v = λ.f**

## 3. Xử lí số liệu

Lặp lại đo nhiều vị trí cộng hưởng, tính giá trị trung bình của v, so sánh với giá trị chuẩn (v ≈ 340 m/s trong không khí ở nhiệt độ phòng) để đánh giá sai số của phép đo.`,
        },
      ],
      quiz: {
        title: "Ôn tập chương II",
        questions: [
          {
            text: "Sóng cơ là dao động lan truyền trong môi trường, sóng cơ truyền:",
            options: JSON.stringify(["Các phần tử vật chất đi theo", "Năng lượng và trạng thái dao động", "Chỉ truyền vật chất, không truyền năng lượng", "Không truyền gì cả"]),
            answer: "1",
          },
          {
            text: "Bước sóng λ được định nghĩa là:",
            options: JSON.stringify([
              "Quãng đường sóng truyền trong 1 giây",
              "Quãng đường sóng truyền trong một chu kì",
              "Biên độ dao động",
              "Tần số dao động",
            ]),
            answer: "1",
          },
          {
            text: "Công thức liên hệ giữa tốc độ truyền sóng, bước sóng và tần số là:",
            options: JSON.stringify(["v = λ/f", "v = λf", "v = f/λ", "v = λ + f"]),
            answer: "1",
          },
          {
            text: "Sóng ngang là sóng có phương dao động của các phần tử:",
            options: JSON.stringify(["Trùng với phương truyền sóng", "Vuông góc với phương truyền sóng", "Hợp góc 45° với phương truyền", "Không xác định"]),
            answer: "1",
          },
          {
            text: "Sóng âm truyền trong không khí là:",
            options: JSON.stringify(["Sóng ngang", "Sóng dọc", "Sóng điện từ", "Không phải sóng cơ"]),
            answer: "1",
          },
          {
            text: "Sóng điện từ có đặc điểm:",
            options: JSON.stringify([
              "Không truyền được trong chân không",
              "Là sóng dọc",
              "Truyền được trong chân không với tốc độ c = 3×10⁸ m/s",
              "Chỉ truyền được trong chất rắn",
            ]),
            answer: "2",
          },
          {
            text: "Hai nguồn sóng được gọi là nguồn kết hợp khi:",
            options: JSON.stringify([
              "Cùng biên độ",
              "Cùng phương, cùng tần số, độ lệch pha không đổi theo thời gian",
              "Cùng pha ban đầu bằng 0",
              "Cách nhau một khoảng cố định",
            ]),
            answer: "1",
          },
          {
            text: "Điều kiện để tại điểm M có cực đại giao thoa (hai nguồn kết hợp cùng pha) là:",
            options: JSON.stringify(["d₂ − d₁ = kλ", "d₂ − d₁ = (k+½)λ", "d₂ − d₁ = λ/4", "d₂ − d₁ = 0"]),
            answer: "0",
          },
          {
            text: "Điều kiện để tại điểm M có cực tiểu giao thoa (hai nguồn kết hợp cùng pha) là:",
            options: JSON.stringify(["d₂ − d₁ = kλ", "d₂ − d₁ = (k+½)λ", "d₂ − d₁ = 2λ", "d₂ = d₁"]),
            answer: "1",
          },
          {
            text: "Sóng dừng là kết quả của:",
            options: JSON.stringify([
              "Sự giao thoa giữa sóng tới và sóng phản xạ trên cùng phương truyền",
              "Sự khúc xạ ánh sáng",
              "Hiện tượng cộng hưởng cơ học",
              "Sự tắt dần của dao động",
            ]),
            answer: "0",
          },
          {
            text: "Trên dây hai đầu cố định có sóng dừng, điều kiện chiều dài dây là:",
            options: JSON.stringify(["l = kλ/2", "l = (2k+1)λ/4", "l = kλ", "l = λ/2 luôn cố định"]),
            answer: "0",
          },
          {
            text: "Trên dây một đầu cố định, một đầu tự do có sóng dừng, điều kiện chiều dài dây là:",
            options: JSON.stringify(["l = kλ/2", "l = (2k+1)λ/4", "l = kλ", "l = 2λ"]),
            answer: "1",
          },
          {
            text: "Tại điểm nút của sóng dừng, biên độ dao động:",
            options: JSON.stringify(["Cực đại", "Bằng 0", "Bằng biên độ sóng tới", "Không xác định"]),
            answer: "1",
          },
          {
            text: "Sóng có tần số f = 25 Hz, tốc độ truyền v = 50 m/s. Bước sóng λ bằng:",
            options: JSON.stringify(["1 m", "2 m", "0,5 m", "25 m"]),
            answer: "1",
          },
          {
            text: "Dây đàn hồi hai đầu cố định, dài 1 m, có sóng dừng với 2 bó sóng (k=2). Bước sóng bằng:",
            options: JSON.stringify(["0,5 m", "1 m", "2 m", "0,25 m"]),
            answer: "1",
          },
          {
            text: "Trong thí nghiệm đo tần số sóng âm bằng dao động kí, tần số được xác định bằng:",
            options: JSON.stringify(["f = T", "f = 1/T", "f = λ.T", "f = λ/T"]),
            answer: "1",
          },
          {
            text: "Phương pháp ống cộng hưởng dùng để đo:",
            options: JSON.stringify(["Tần số ánh sáng", "Tốc độ truyền âm trong không khí", "Điện trở dây dẫn", "Chiết suất môi trường"]),
            answer: "1",
          },
          {
            text: "Khoảng cách giữa hai vị trí cộng hưởng liên tiếp trong ống cộng hưởng bằng:",
            options: JSON.stringify(["λ", "λ/2", "λ/4", "2λ"]),
            answer: "1",
          },
          {
            text: "Sóng điện từ có tần số 150 MHz truyền trong chân không có bước sóng:",
            options: JSON.stringify(["1 m", "2 m", "3 m", "0,5 m"]),
            answer: "1",
          },
          {
            text: "Năng lượng sóng cơ tỉ lệ với:",
            options: JSON.stringify(["Biên độ sóng", "Bình phương biên độ sóng", "Nghịch đảo biên độ", "Không phụ thuộc biên độ"]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chương III. Điện trường",
      order: 3,
      lessons: [
        {
          title: "Bài 16. Lực tương tác giữa các điện tích",
          order: 16,
          content: `## 1. Điện tích

Có hai loại điện tích: **dương (+)** và **âm (−)**. Điện tích của một vật được xác định bằng số nguyên lần điện tích nguyên tố e = 1,6×10⁻¹⁹ C.

## 2. Định luật Coulomb

Lực tương tác giữa hai điện tích điểm q₁, q₂ đặt cách nhau một khoảng r trong chân không (hoặc không khí):

> **F = k.|q₁q₂|/r²**

Trong đó k = 9×10⁹ N.m²/C² (hằng số điện — hằng số Coulomb).

- Lực tương tác có phương trùng với đường thẳng nối hai điện tích
- **Hai điện tích cùng dấu:** đẩy nhau
- **Hai điện tích trái dấu:** hút nhau

## 3. Lực tương tác trong điện môi

Khi đặt hai điện tích trong môi trường điện môi đồng chất có hằng số điện môi ε (ε ≥ 1):

> **F = k.|q₁q₂|/(ε.r²)**

Lực tương tác trong điện môi **nhỏ hơn** ε lần so với trong chân không.

**Ví dụ:** Hai điện tích q₁ = 2μC, q₂ = 3μC đặt cách nhau r = 3 cm trong không khí. Lực tương tác: F = 9×10⁹ × (2×10⁻⁶)(3×10⁻⁶)/(0,03)² = 60 N`,
        },
        {
          title: "Bài 17. Khái niệm điện trường",
          order: 17,
          content: `## 1. Điện trường là gì?

**Điện trường** là dạng vật chất tồn tại xung quanh điện tích, tác dụng lực điện lên các điện tích khác đặt trong nó.

## 2. Cường độ điện trường

Đại lượng đặc trưng cho độ mạnh yếu của điện trường tại một điểm:

> **E = F/q** (V/m hoặc N/C)

Trong đó F là lực điện tác dụng lên điện tích thử q đặt tại điểm đó. Vectơ **E** cùng phương chiều với lực điện tác dụng lên điện tích thử **dương**.

## 3. Điện trường của một điện tích điểm

Điện tích điểm Q gây ra tại điểm cách nó khoảng r một cường độ điện trường:

> **E = k.|Q|/r²**

Chiều của E hướng ra xa Q nếu Q > 0, hướng vào Q nếu Q < 0.

## 4. Nguyên lí chồng chất điện trường

Cường độ điện trường tổng hợp do nhiều điện tích gây ra tại một điểm bằng **tổng vectơ** của cường độ điện trường do từng điện tích gây ra:

> **Ē = Ē₁ + Ē₂ + ... + Ēₙ**

## 5. Đường sức điện

Đường sức điện là đường mà tiếp tuyến tại mỗi điểm trùng với phương của vectơ cường độ điện trường tại điểm đó; chiều đường sức là chiều của E. Đường sức xuất phát từ điện tích dương, kết thúc ở điện tích âm (hoặc ra vô cực).`,
        },
        {
          title: "Bài 18. Điện trường đều",
          order: 18,
          content: `## 1. Định nghĩa

**Điện trường đều** là điện trường có vectơ cường độ điện trường **E** tại mọi điểm đều **cùng phương, cùng chiều và cùng độ lớn**.

## 2. Đặc điểm đường sức của điện trường đều

Các đường sức của điện trường đều là những **đường thẳng song song, cách đều nhau**.

## 3. Điện trường giữa hai bản phẳng song song tích điện trái dấu

Điện trường giữa hai bản kim loại phẳng, song song, tích điện trái dấu, đặt cách nhau khoảng d, có hiệu điện thế U giữa hai bản, là điện trường đều với độ lớn:

> **E = U/d**

Đây là mô hình quan trọng để tính điện trường trong tụ điện phẳng.

## 4. Chuyển động của điện tích trong điện trường đều

Điện tích q trong điện trường đều chịu lực điện không đổi F = qE, chuyển động của nó tương tự chuyển động của vật trong trường trọng lực đều (quỹ đạo có thể là thẳng hoặc parabol tuỳ điều kiện ban đầu).

**Ví dụ:** Hai bản phẳng song song cách nhau d = 5 cm, hiệu điện thế U = 100 V. Cường độ điện trường giữa hai bản: E = U/d = 100/0,05 = 2000 V/m`,
        },
        {
          title: "Bài 19. Thế năng điện",
          order: 19,
          content: `## 1. Công của lực điện

Khi điện tích q di chuyển trong điện trường đều từ điểm M đến điểm N:

> **A_MN = q.E.d**

Trong đó d là độ dài hình chiếu của đường đi MN lên phương của đường sức điện trường.

**Đặc điểm quan trọng:** Công của lực điện **không phụ thuộc hình dạng đường đi**, chỉ phụ thuộc vị trí điểm đầu và điểm cuối — lực điện là lực thế (giống lực hấp dẫn, lực đàn hồi).

## 2. Thế năng điện

Thế năng điện của điện tích q tại một điểm M trong điện trường đặc trưng cho khả năng sinh công của lực điện khi điện tích di chuyển từ M ra xa vô cực (hoặc đến một mốc thế năng quy ước):

> **W_M = A_M∞**

Quan hệ giữa công và độ giảm thế năng:

> **A_MN = W_M − W_N**

## 3. Ý nghĩa

Thế năng điện phụ thuộc vào vị trí của điện tích trong điện trường và giá trị của điện tích. Đây là cơ sở để xây dựng khái niệm điện thế và hiệu điện thế ở bài học tiếp theo.`,
        },
        {
          title: "Bài 20. Điện thế",
          order: 20,
          content: `## 1. Điện thế

**Điện thế** tại một điểm M trong điện trường là đại lượng đặc trưng cho điện trường về phương diện tạo ra thế năng của điện tích đặt tại đó:

> **V_M = W_M/q = A_M∞/q** (đơn vị: V — Volt)

## 2. Hiệu điện thế

**Hiệu điện thế** giữa hai điểm M, N:

> **U_MN = V_M − V_N = A_MN/q**

→ **A_MN = q.U_MN**

## 3. Liên hệ giữa hiệu điện thế và cường độ điện trường đều

> **U = E.d**  hay  **E = U/d**

(d: khoảng cách giữa hai điểm M, N tính theo phương đường sức)

## 4. Đơn vị và dụng cụ đo

Đơn vị hiệu điện thế là **vôn (V)**. Dụng cụ đo hiệu điện thế là **vôn kế**, mắc song song với đoạn mạch cần đo.

**Ví dụ:** Hai điểm trong điện trường đều E = 500 V/m cách nhau d = 2 cm theo phương đường sức. Hiệu điện thế giữa hai điểm: U = E.d = 500 × 0,02 = 10 V`,
        },
        {
          title: "Bài 21. Tụ điện",
          order: 21,
          content: `## 1. Tụ điện là gì?

**Tụ điện** là một hệ hai vật dẫn đặt gần nhau, ngăn cách nhau bởi một lớp điện môi, có khả năng **tích và phóng điện**. Tụ điện phẳng gồm hai bản kim loại phẳng song song.

## 2. Điện dung của tụ điện

Điện dung đặc trưng cho khả năng tích điện của tụ ở một hiệu điện thế nhất định:

> **C = Q/U** (đơn vị: F — Farad)

Điện dung C là hằng số đối với mỗi tụ điện (không phụ thuộc Q, U), chỉ phụ thuộc cấu tạo và kích thước của tụ.

## 3. Năng lượng điện trường trong tụ điện

Khi tụ điện tích điện, năng lượng được tích trữ dưới dạng năng lượng điện trường:

> **W = Q²/(2C) = ½CU² = ½QU**

## 4. Ghép tụ điện

**Ghép song song:**
> C_b = C₁ + C₂ + ...; U_b = U₁ = U₂ = ...; Q_b = Q₁ + Q₂ + ...

**Ghép nối tiếp:**
> 1/C_b = 1/C₁ + 1/C₂ + ...; Q_b = Q₁ = Q₂ = ...; U_b = U₁ + U₂ + ...

**Ví dụ:** Tụ điện C = 4 μF được nạp đến hiệu điện thế U = 50 V. Năng lượng tích trữ: W = ½.4×10⁻⁶.50² = 5×10⁻³ J = 5 mJ`,
        },
      ],
      quiz: {
        title: "Ôn tập chương III",
        questions: [
          {
            text: "Định luật Coulomb mô tả lực tương tác giữa hai điện tích điểm tỉ lệ:",
            options: JSON.stringify([
              "Thuận với khoảng cách giữa chúng",
              "Nghịch với bình phương khoảng cách",
              "Thuận với bình phương khoảng cách",
              "Không phụ thuộc khoảng cách",
            ]),
            answer: "1",
          },
          {
            text: "Hai điện tích cùng dấu đặt gần nhau thì:",
            options: JSON.stringify(["Hút nhau", "Đẩy nhau", "Không tương tác", "Trung hoà lẫn nhau"]),
            answer: "1",
          },
          {
            text: "Hai điện tích q₁ = 2μC, q₂ = 3μC cách nhau 3 cm trong không khí. Lực tương tác giữa chúng bằng:",
            options: JSON.stringify(["6 N", "60 N", "600 N", "0,6 N"]),
            answer: "1",
          },
          {
            text: "Cường độ điện trường tại một điểm được định nghĩa là:",
            options: JSON.stringify(["E = F.q", "E = F/q", "E = q/F", "E = F + q"]),
            answer: "1",
          },
          {
            text: "Đơn vị của cường độ điện trường là:",
            options: JSON.stringify(["V", "V/m", "F", "C"]),
            answer: "1",
          },
          {
            text: "Đường sức của điện trường đều có đặc điểm:",
            options: JSON.stringify([
              "Là những đường cong bất kỳ",
              "Là những đường thẳng song song, cách đều nhau",
              "Luôn là đường tròn",
              "Hội tụ về một điểm",
            ]),
            answer: "1",
          },
          {
            text: "Điện trường giữa hai bản phẳng song song cách nhau d, hiệu điện thế U, có độ lớn:",
            options: JSON.stringify(["E = U.d", "E = U/d", "E = d/U", "E = U + d"]),
            answer: "1",
          },
          {
            text: "Công của lực điện khi điện tích di chuyển trong điện trường:",
            options: JSON.stringify([
              "Phụ thuộc hình dạng đường đi",
              "Không phụ thuộc hình dạng đường đi, chỉ phụ thuộc điểm đầu, điểm cuối",
              "Luôn bằng 0",
              "Chỉ phụ thuộc điểm đầu",
            ]),
            answer: "1",
          },
          {
            text: "Điện thế tại một điểm M được định nghĩa là:",
            options: JSON.stringify(["V_M = W_M.q", "V_M = W_M/q", "V_M = q/W_M", "V_M = W_M + q"]),
            answer: "1",
          },
          {
            text: "Hiệu điện thế U_MN liên hệ với công của lực điện theo công thức:",
            options: JSON.stringify(["A_MN = q/U_MN", "A_MN = q.U_MN", "A_MN = U_MN/q", "A_MN = q + U_MN"]),
            answer: "1",
          },
          {
            text: "Dụng cụ đo hiệu điện thế là:",
            options: JSON.stringify(["Ampe kế", "Vôn kế", "Oát kế", "Nhiệt kế"]),
            answer: "1",
          },
          {
            text: "Vôn kế được mắc như thế nào với đoạn mạch cần đo?",
            options: JSON.stringify(["Nối tiếp", "Song song", "Vừa nối tiếp vừa song song", "Không mắc trực tiếp"]),
            answer: "1",
          },
          {
            text: "Điện dung của tụ điện được định nghĩa là:",
            options: JSON.stringify(["C = U/Q", "C = Q/U", "C = Q.U", "C = Q + U"]),
            answer: "1",
          },
          {
            text: "Đơn vị điện dung là:",
            options: JSON.stringify(["Volt (V)", "Coulomb (C)", "Farad (F)", "Ampe (A)"]),
            answer: "2",
          },
          {
            text: "Năng lượng điện trường tích trữ trong tụ điện được tính bằng:",
            options: JSON.stringify(["W = CU", "W = ½CU²", "W = C/U", "W = 2CU²"]),
            answer: "1",
          },
          {
            text: "Khi ghép hai tụ điện song song, điện dung tương đương:",
            options: JSON.stringify(["C_b = C₁ + C₂", "1/C_b = 1/C₁ + 1/C₂", "C_b = C₁.C₂", "C_b = C₁ − C₂"]),
            answer: "0",
          },
          {
            text: "Khi ghép hai tụ điện nối tiếp, điện tích trên mỗi tụ:",
            options: JSON.stringify(["Bằng nhau", "Khác nhau, tỉ lệ với điện dung", "Bằng tổng hai điện tích", "Không xác định"]),
            answer: "0",
          },
          {
            text: "Hai điểm trong điện trường đều E = 400 V/m cách nhau d = 5 cm theo phương đường sức. Hiệu điện thế giữa hai điểm bằng:",
            options: JSON.stringify(["10 V", "20 V", "40 V", "2000 V"]),
            answer: "1",
          },
          {
            text: "Tụ điện C = 2 μF nạp đến U = 100 V. Năng lượng tích trữ trong tụ bằng:",
            options: JSON.stringify(["0,01 J", "0,02 J", "0,1 J", "0,2 J"]),
            answer: "0",
          },
          {
            text: "Nguyên lí chồng chất điện trường phát biểu rằng cường độ điện trường tổng hợp bằng:",
            options: JSON.stringify(["Tích các vectơ điện trường thành phần", "Tổng vectơ của các điện trường thành phần", "Trung bình cộng các điện trường thành phần", "Hiệu các điện trường thành phần"]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chương IV. Dòng điện. Mạch điện",
      order: 4,
      lessons: [
        {
          title: "Bài 22. Cường độ dòng điện",
          order: 22,
          content: `## 1. Dòng điện

**Dòng điện** là dòng chuyển dời có hướng của các hạt mang điện (electron trong kim loại, ion trong chất điện phân...).

**Chiều quy ước của dòng điện:** chiều chuyển động của các điện tích dương (ngược chiều chuyển động của electron trong kim loại).

## 2. Cường độ dòng điện

Cường độ dòng điện đặc trưng cho tác dụng mạnh yếu của dòng điện, đo bằng lượng điện tích dịch chuyển qua tiết diện thẳng của vật dẫn trong một đơn vị thời gian:

> **I = q/t** (dòng điện không đổi) hoặc **I = Δq/Δt** (tổng quát)

Đơn vị: **Ampe (A)**.

## 3. Dòng điện không đổi

Dòng điện không đổi là dòng điện có chiều và cường độ không thay đổi theo thời gian: I = q/t = const.

## 4. Dụng cụ đo

Cường độ dòng điện được đo bằng **ampe kế**, mắc **nối tiếp** vào mạch cần đo.

**Ví dụ:** Trong 5 giây, có điện lượng q = 2,5 C dịch chuyển qua tiết diện dây dẫn. Cường độ dòng điện: I = q/t = 2,5/5 = 0,5 A`,
        },
        {
          title: "Bài 23. Điện trở. Định luật Ohm",
          order: 23,
          content: `## 1. Điện trở

**Điện trở** đặc trưng cho khả năng cản trở dòng điện của vật dẫn. Điện trở của một dây dẫn hình trụ đồng chất:

> **R = ρ.l/S**

- ρ: điện trở suất của vật liệu (Ω.m)
- l: chiều dài dây dẫn (m)
- S: tiết diện dây dẫn (m²)

Điện trở suất phụ thuộc nhiệt độ: **ρ = ρ₀[1 + α(T − T₀)]** (α: hệ số nhiệt điện trở)

## 2. Định luật Ohm đối với đoạn mạch chỉ chứa điện trở

> **I = U/R**  hay  **U = I.R**

## 3. Ghép điện trở

**Ghép nối tiếp:**
> R_tđ = R₁ + R₂ + ...; I không đổi qua các điện trở; U chia theo tỉ lệ R

**Ghép song song:**
> 1/R_tđ = 1/R₁ + 1/R₂ + ...; U không đổi trên các điện trở; I chia theo tỉ lệ nghịch với R

**Ví dụ:** Hai điện trở R₁ = 6Ω, R₂ = 3Ω ghép song song, U = 12V. Điện trở tương đương: R_tđ = 6.3/(6+3) = 2Ω. Cường độ dòng qua mạch chính: I = 12/2 = 6A`,
        },
        {
          title: "Bài 24. Nguồn điện",
          order: 24,
          content: `## 1. Nguồn điện

**Nguồn điện** là thiết bị tạo ra và duy trì hiệu điện thế giữa hai cực để duy trì dòng điện trong mạch, bằng cách thực hiện công để đưa các điện tích dương từ cực âm sang cực dương bên trong nguồn (đi ngược chiều điện trường).

## 2. Suất điện động

**Suất điện động (ε)** của nguồn điện đặc trưng cho khả năng thực hiện công của nguồn:

> **ε = A/q** (V)

Trong đó A là công của lực lạ thực hiện để dịch chuyển điện tích q bên trong nguồn.

## 3. Điện trở trong

Nguồn điện thực có **điện trở trong r**, gây ra sự sụt giảm điện thế bên trong nguồn khi có dòng điện chạy qua.

## 4. Định luật Ohm đối với toàn mạch

Mạch điện kín gồm nguồn (ε, r) nối với điện trở mạch ngoài R_N:

> **I = ε/(R_N + r)**

Hiệu điện thế mạch ngoài: **U_N = ε − I.r = I.R_N**

**Trường hợp đoản mạch (R_N = 0):** I_max = ε/r

**Ví dụ:** Pin có ε = 6V, r = 1Ω, mắc với R = 5Ω. Cường độ dòng điện: I = 6/(5+1) = 1A. Hiệu điện thế mạch ngoài: U_N = 6 − 1×1 = 5V`,
        },
        {
          title: "Bài 25. Năng lượng và công suất điện",
          order: 25,
          content: `## 1. Công của dòng điện (điện năng tiêu thụ)

Điện năng tiêu thụ của một đoạn mạch:

> **A = U.I.t**

## 2. Công suất điện

Công suất điện tiêu thụ của đoạn mạch:

> **P = U.I = I².R = U²/R** (W)

## 3. Định luật Joule–Lenz

Nhiệt lượng toả ra trên vật dẫn có điện trở R khi có dòng điện I chạy qua trong thời gian t:

> **Q = I².R.t**

## 4. Công suất và hiệu suất của nguồn điện

- Công suất của nguồn: **P_nguồn = ε.I**
- Công suất tiêu thụ ở mạch ngoài: **P_N = U_N.I = I².R_N**
- Công suất hao phí bên trong nguồn (do điện trở trong): **P_hp = I².r**
- **Hiệu suất nguồn điện:** H = P_N/P_nguồn = U_N/ε = R_N/(R_N + r)

## 5. Ví dụ ứng dụng

Nguồn ε = 12V, r = 0,5Ω, mạch ngoài R = 5,5Ω:
- I = 12/(5,5+0,5) = 2A
- U_N = 12 − 2×0,5 = 11V
- P_nguồn = 12×2 = 24W; P_N = 11×2 = 22W
- Hiệu suất: H = 22/24 ≈ 91,7%`,
        },
        {
          title: "Bài 26. Thực hành: Đo suất điện động và điện trở trong của pin điện hoá",
          order: 26,
          content: `## 1. Mục đích thí nghiệm

Xác định suất điện động ε và điện trở trong r của một pin điện hoá bằng phương pháp đo gián tiếp, dựa trên định luật Ohm cho toàn mạch.

## 2. Cơ sở lí thuyết

Từ định luật Ohm toàn mạch: I = ε/(R_N + r), suy ra hiệu điện thế mạch ngoài:

> **U_N = ε − I.r**

Đây là phương trình bậc nhất theo I: khi thay đổi điện trở mạch ngoài R_N (dùng biến trở), đo được các cặp giá trị (I, U_N) tương ứng.

## 3. Dụng cụ và các bước tiến hành

**Dụng cụ:** pin điện hoá cần đo, biến trở, ampe kế, vôn kế, dây nối, khoá K.

**Các bước:**
1. Mắc mạch điện gồm pin, biến trở, ampe kế (nối tiếp) và vôn kế (song song với pin/mạch ngoài)
2. Thay đổi giá trị biến trở R_N, ghi lại các cặp giá trị (I, U_N) tương ứng
3. Vẽ đồ thị U_N theo I — đây là một đường thẳng có dạng U_N = ε − I.r

## 4. Xử lí số liệu

Từ đồ thị U_N–I:
- **Giao điểm với trục U_N (khi I = 0):** cho giá trị suất điện động **ε**
- **Độ dốc của đường thẳng (độ lớn):** chính là điện trở trong **r** của pin (r = −ΔU_N/ΔI)

So sánh kết quả đo được với giá trị ghi trên pin để đánh giá sai số của phép đo.`,
        },
      ],
      quiz: {
        title: "Ôn tập chương IV",
        questions: [
          {
            text: "Cường độ dòng điện không đổi được tính bằng công thức:",
            options: JSON.stringify(["I = q.t", "I = q/t", "I = t/q", "I = q + t"]),
            answer: "1",
          },
          {
            text: "Đơn vị của cường độ dòng điện là:",
            options: JSON.stringify(["Volt (V)", "Ampe (A)", "Ohm (Ω)", "Watt (W)"]),
            answer: "1",
          },
          {
            text: "Dụng cụ đo cường độ dòng điện là:",
            options: JSON.stringify(["Vôn kế", "Ampe kế", "Oát kế", "Nhiệt kế"]),
            answer: "1",
          },
          {
            text: "Ampe kế được mắc như thế nào trong mạch điện?",
            options: JSON.stringify(["Song song", "Nối tiếp", "Vừa nối tiếp vừa song song", "Không mắc trực tiếp"]),
            answer: "1",
          },
          {
            text: "Định luật Ohm đối với đoạn mạch chỉ chứa điện trở R là:",
            options: JSON.stringify(["I = U.R", "I = U/R", "I = R/U", "U = I + R"]),
            answer: "1",
          },
          {
            text: "Điện trở của dây dẫn hình trụ đồng chất được tính bằng công thức:",
            options: JSON.stringify(["R = ρ.S/l", "R = ρ.l/S", "R = l/(ρ.S)", "R = ρ.l.S"]),
            answer: "1",
          },
          {
            text: "Khi ghép hai điện trở nối tiếp, điện trở tương đương:",
            options: JSON.stringify(["R_tđ = R₁ + R₂", "1/R_tđ = 1/R₁ + 1/R₂", "R_tđ = R₁.R₂", "R_tđ nhỏ hơn cả R₁ và R₂"]),
            answer: "0",
          },
          {
            text: "Khi ghép hai điện trở song song, hiệu điện thế trên mỗi điện trở:",
            options: JSON.stringify(["Bằng nhau", "Tỉ lệ thuận với điện trở", "Tỉ lệ nghịch với điện trở", "Bằng tổng hai hiệu điện thế"]),
            answer: "0",
          },
          {
            text: "Suất điện động của nguồn điện được định nghĩa là:",
            options: JSON.stringify(["ε = A.q", "ε = A/q", "ε = q/A", "ε = A + q"]),
            answer: "1",
          },
          {
            text: "Định luật Ohm đối với toàn mạch (nguồn ε, r nối với R_N) là:",
            options: JSON.stringify(["I = ε.(R_N + r)", "I = ε/(R_N + r)", "I = (R_N + r)/ε", "I = ε/R_N − r"]),
            answer: "1",
          },
          {
            text: "Hiệu điện thế mạch ngoài U_N liên hệ với suất điện động theo công thức:",
            options: JSON.stringify(["U_N = ε + I.r", "U_N = ε − I.r", "U_N = ε.I.r", "U_N = ε/I.r"]),
            answer: "1",
          },
          {
            text: "Khi xảy ra đoản mạch (R_N = 0), cường độ dòng điện là:",
            options: JSON.stringify(["I = 0", "I = ε/r", "I = ε.r", "I = r/ε"]),
            answer: "1",
          },
          {
            text: "Công suất điện tiêu thụ trên đoạn mạch được tính bằng:",
            options: JSON.stringify(["P = U/I", "P = U.I", "P = U + I", "P = U².I"]),
            answer: "1",
          },
          {
            text: "Định luật Joule–Lenz mô tả nhiệt lượng toả ra trên điện trở R:",
            options: JSON.stringify(["Q = I.R.t", "Q = I².R.t", "Q = I.R²t", "Q = I²R/t"]),
            answer: "1",
          },
          {
            text: "Hiệu suất của nguồn điện được tính bằng:",
            options: JSON.stringify(["H = R_N/(R_N + r)", "H = r/(R_N + r)", "H = R_N.r", "H = ε/r"]),
            answer: "0",
          },
          {
            text: "Nguồn điện ε = 9V, r = 1Ω nối với R = 8Ω. Cường độ dòng điện trong mạch bằng:",
            options: JSON.stringify(["0,9 A", "1 A", "1,125 A", "9 A"]),
            answer: "1",
          },
          {
            text: "Bếp điện ghi 220V – 1000W hoạt động trong 2 giờ tiêu thụ điện năng:",
            options: JSON.stringify(["1 kWh", "2 kWh", "0,5 kWh", "4 kWh"]),
            answer: "1",
          },
          {
            text: "Trong bài thực hành đo suất điện động và điện trở trong của pin, đồ thị U_N theo I có dạng:",
            options: JSON.stringify(["Đường parabol", "Đường thẳng có độ dốc âm", "Đường tròn", "Đường hyperbol"]),
            answer: "1",
          },
          {
            text: "Trong đồ thị U_N–I của bài thực hành, giao điểm với trục U_N (khi I = 0) cho biết:",
            options: JSON.stringify(["Điện trở trong r", "Suất điện động ε", "Điện trở mạch ngoài", "Công suất nguồn"]),
            answer: "1",
          },
          {
            text: "Độ dốc của đồ thị U_N–I trong bài thực hành cho biết giá trị của:",
            options: JSON.stringify(["Suất điện động ε", "Điện trở trong r", "Cường độ dòng điện", "Công suất tiêu thụ"]),
            answer: "1",
          },
        ],
      },
    },
  ],
};
