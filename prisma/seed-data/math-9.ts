import { CourseData } from "./types";

export const MATH_9_COURSE: CourseData = {
  title: "Toán học 9",
  slug: "toan-9",
  subject: "math",
  grade: "9",
  description: "Căn bậc hai/ba, hàm số bậc nhất, hệ thức lượng và đường tròn (Tập 1); hệ phương trình, hàm số y=ax², phương trình bậc hai, góc với đường tròn, hình trụ-nón-cầu (Tập 2) – chương trình Toán 9 THCS.",
  published: true,
  modules: [
    {
      title: "Chương I (Đại số). Căn bậc hai. Căn bậc ba",
      order: 1,
      volume: 1,
      lessons: [
        {
          title: "Bài 1. Căn bậc hai",
          order: 1,
          content: `## 1. Căn bậc hai số học

Với số dương a, số **√a** được gọi là **căn bậc hai số học** của a.

> Với a ≥ 0: **√a** là số không âm sao cho (√a)² = a

Số 0 có căn bậc hai số học là 0. Số âm **không có căn bậc hai**.

## 2. So sánh các căn bậc hai số học

> Với a, b ≥ 0: **a < b ⟺ √a < √b**

**Ví dụ:** So sánh √41 và 5: ta có 5 = √25, vì 41 > 25 nên √41 > √25 = 5.

## 3. Tìm x biết x² = a

Nếu a > 0: phương trình x² = a có hai nghiệm x = √a và x = −√a.

**Ví dụ:** Tìm x biết x² = 9. Ta có x = 3 hoặc x = −3.`,
        },
        {
          title: "Bài 2. Căn thức bậc hai và hằng đẳng thức √A² = |A|",
          order: 2,
          content: `## 1. Căn thức bậc hai

Với A là một biểu thức đại số, **√A** gọi là một căn thức bậc hai của A, A gọi là biểu thức lấy căn.

> **√A xác định (có nghĩa) khi A ≥ 0**

**Ví dụ:** √(5−2x) xác định khi 5 − 2x ≥ 0 ⟺ x ≤ 5/2

## 2. Hằng đẳng thức √A² = |A|

Với mọi số a: **√(a²) = |a|**

- Nếu a ≥ 0 thì |a| = a
- Nếu a < 0 thì |a| = −a

**Ví dụ:** √((-5)²) = |-5| = 5; √((3-π)²) = |3-π| = π-3 (vì π > 3)

## 3. Áp dụng

**Ví dụ:** Rút gọn √(x²) với x < 2: Nếu đề cho √((x-2)²) = |x-2| = 2-x (vì x < 2)`,
        },
        {
          title: "Bài 3. Liên hệ giữa phép nhân và phép khai phương",
          order: 3,
          content: `## 1. Định lí

Với hai số A, B không âm: **√(A.B) = √A . √B**

## 2. Quy tắc khai phương một tích

Muốn khai phương một tích của các số không âm, ta có thể khai phương từng thừa số rồi nhân các kết quả với nhau.

**Ví dụ:** √(16.25) = √16.√25 = 4.5 = 20

## 3. Quy tắc nhân các căn bậc hai

Muốn nhân các căn bậc hai của các số không âm, ta có thể nhân các số dưới dấu căn với nhau rồi khai phương kết quả đó.

**Ví dụ:** √5.√20 = √(5.20) = √100 = 10

## 4. Chú ý (dạng tổng quát)

Với hai biểu thức A, B không âm: √(A.B) = √A.√B; đặc biệt với A không âm: √(A²) = (√A)² = A`,
        },
        {
          title: "Bài 4. Liên hệ giữa phép chia và phép khai phương",
          order: 4,
          content: `## 1. Định lí

Với số A không âm và số B dương: **√(A/B) = √A / √B**

## 2. Quy tắc khai phương một thương

Muốn khai phương một thương a/b, trong đó a không âm, b dương, ta có thể lần lượt khai phương số a và số b rồi lấy kết quả thứ nhất chia cho kết quả thứ hai.

**Ví dụ:** √(25/121) = √25/√121 = 5/11

## 3. Quy tắc chia hai căn bậc hai

Muốn chia căn bậc hai của số a không âm cho căn bậc hai của số b dương, ta có thể chia số a cho số b rồi khai phương kết quả đó.

**Ví dụ:** √80/√5 = √(80/5) = √16 = 4

## 4. Áp dụng tổng quát

Với biểu thức A không âm, B dương: √(A/B) = √A/√B`,
        },
        {
          title: "Bài 5. Bảng căn bậc hai",
          order: 5,
          content: `## 1. Giới thiệu bảng căn bậc hai

Bảng căn bậc hai (bảng số V.M. Bra-đi-xơ) dùng để tìm giá trị gần đúng của căn bậc hai của một số dương cho trước mà không cần máy tính.

## 2. Cách dùng bảng

Bảng gồm các cột: cột hàng đơn vị và hàng chục ở ngoài cùng bên trái, các cột N tương ứng với chữ số hàng phần mười, hàng phần trăm, và 9 cột hiệu chính (dùng để hiệu chỉnh khi số có 4 chữ số).

**Ví dụ:** Tìm √1,68 — dùng bảng, tra hàng 1,6 cột 8: kết quả ≈ 1,296

## 3. Cách tìm căn bậc hai của số lớn hơn 100 hoặc nhỏ hơn 1

Dùng quy tắc dời dấu phẩy: khi dời dấu phẩy của số N đi 2, 4, 6,... chữ số thì dấu phẩy của √N dời đi 1, 2, 3,... chữ số theo chiều tương ứng.

**Ví dụ:** Tìm √1680 = √(16,8 × 100) = 10.√16,8 ≈ 10 × 4,099 = 40,99

**Lưu ý ngày nay:** Trong thực hành hiện đại, máy tính cầm tay được dùng phổ biến thay cho bảng số, nhưng hiểu nguyên tắc bảng số giúp nắm chắc bản chất phép khai phương.`,
        },
        {
          title: "Bài 6. Biến đổi đơn giản biểu thức chứa căn bậc hai",
          order: 6,
          content: `## 1. Đưa thừa số ra ngoài dấu căn

Với A ≥ 0, B ≥ 0: **√(A².B) = A.√B**
Với A < 0, B ≥ 0: **√(A².B) = -A.√B** (tổng quát: √(A²B) = |A|√B)

**Ví dụ:** √(20) = √(4.5) = 2√5

**Ứng dụng:** So sánh 3√5 và 2√7: đưa vào trong dấu căn: 3√5 = √45, 2√7 = √28 → vì 45 > 28 nên 3√5 > 2√7

## 2. Đưa thừa số vào trong dấu căn

Với A ≥ 0, B ≥ 0: **A√B = √(A².B)**
Với A < 0, B ≥ 0: **A√B = -√(A².B)**

**Ví dụ:** 3√5 = √(9.5) = √45

## 3. Ứng dụng

Việc đưa thừa số ra ngoài/vào trong dấu căn giúp so sánh các căn thức, cộng trừ các căn thức đồng dạng.

**Ví dụ:** Rút gọn 3√2 + √8 = 3√2 + 2√2 = 5√2`,
        },
        {
          title: "Bài 7. Biến đổi đơn giản biểu thức chứa căn thức bậc hai (tiếp theo)",
          order: 7,
          content: `## 1. Khử mẫu của biểu thức lấy căn

Với A.B ≥ 0 và B ≠ 0: **√(A/B) = √(AB)/|B|**

**Ví dụ:** √(2/3) = √(2.3)/3 = √6/3

## 2. Trục căn thức ở mẫu

**Trường hợp mẫu là một căn thức:** với B > 0: **A/√B = A√B/B**

**Ví dụ:** 5/√3 = 5√3/3

**Trường hợp mẫu có dạng tổng/hiệu chứa căn:** nhân cả tử và mẫu với biểu thức liên hợp

> Với A ≥ 0, A ≠ B²: C/(√A ± B) = C(√A ∓ B)/(A − B²)

**Ví dụ:** 3/(√5 − 2) = 3(√5+2)/((√5)²−2²) = 3(√5+2)/(5−4) = 3(√5+2) = 3√5+6

## 3. Ứng dụng

Trục căn thức ở mẫu giúp biểu thức dễ tính toán, so sánh và rút gọn hơn.`,
        },
        {
          title: "Bài 8. Rút gọn biểu thức chứa căn thức bậc hai",
          order: 8,
          content: `## 1. Các bước rút gọn

Để rút gọn biểu thức chứa căn thức bậc hai, cần phối hợp các phép biến đổi đã học:
1. Đưa thừa số ra ngoài/vào trong dấu căn
2. Khử mẫu của biểu thức lấy căn
3. Trục căn thức ở mẫu
4. Rút gọn các căn thức đồng dạng (cộng, trừ)

## 2. Ví dụ tổng hợp

**Ví dụ:** Rút gọn biểu thức √20 − √45 + 3√5
- √20 = 2√5; √45 = 3√5
- Biểu thức = 2√5 − 3√5 + 3√5 = 2√5

**Ví dụ:** Rút gọn (với x ≥ 0, x ≠ 1): (√x/(√x−1)) − (1/(√x+1))
Quy đồng, rút gọn theo hằng đẳng thức để đưa về dạng đơn giản nhất.

## 3. Lưu ý khi rút gọn biểu thức có điều kiện xác định (ĐKXĐ)

Luôn nêu rõ điều kiện của biến để căn thức/mẫu số có nghĩa trước khi rút gọn, và đối chiếu kết quả với điều kiện đó.`,
        },
        {
          title: "Bài 9. Căn bậc ba",
          order: 9,
          content: `## 1. Định nghĩa

Căn bậc ba của một số a là số x sao cho **x³ = a**, kí hiệu **∛a**.

Mỗi số a đều có **duy nhất một căn bậc ba** (khác với căn bậc hai — số âm cũng có căn bậc ba, là một số âm).

**Ví dụ:** ∛8 = 2 (vì 2³=8); ∛(-27) = -3 (vì (-3)³=-27)

## 2. Tính chất

- a < b ⟺ ∛a < ∛b
- ∛(ab) = ∛a . ∛b
- Với b ≠ 0: ∛(a/b) = ∛a / ∛b

## 3. Ví dụ

**Ví dụ:** So sánh ∛6 và ∛5: vì 6 > 5 nên ∛6 > ∛5

**Ví dụ:** Tính ∛(-8).∛(27) = (-2).(3) = -6`,
        },
      ],
      quiz: {
        title: "Ôn tập chương I (Đại số)",
        questions: [
          {
            text: "Căn bậc hai số học của 49 là:",
            options: JSON.stringify(["±7", "7", "-7", "49"]),
            answer: "1",
          },
          {
            text: "√((-6)²) bằng:",
            options: JSON.stringify(["6", "-6", "±6", "36"]),
            answer: "0",
          },
          {
            text: "Biểu thức √(3-x) xác định khi:",
            options: JSON.stringify(["x ≥ 3", "x ≤ 3", "x > 3", "x < 3"]),
            answer: "1",
          },
          {
            text: "√(16.25) bằng:",
            options: JSON.stringify(["10", "20", "400", "40"]),
            answer: "1",
          },
          {
            text: "√(25/121) bằng:",
            options: JSON.stringify(["5/11", "5/121", "25/11", "1/5"]),
            answer: "0",
          },
          {
            text: "Đưa thừa số ra ngoài dấu căn: √20 bằng:",
            options: JSON.stringify(["2√5", "4√5", "2√10", "5√2"]),
            answer: "0",
          },
          {
            text: "So sánh 3√5 và 2√7, kết quả đúng là:",
            options: JSON.stringify(["3√5 > 2√7", "3√5 < 2√7", "3√5 = 2√7", "Không so sánh được"]),
            answer: "0",
          },
          {
            text: "Trục căn thức ở mẫu: 5/√3 bằng:",
            options: JSON.stringify(["5√3", "5√3/3", "5/3", "√3/3"]),
            answer: "1",
          },
          {
            text: "Rút gọn √20 − √45 + 3√5 bằng:",
            options: JSON.stringify(["2√5", "4√5", "√5", "5√5"]),
            answer: "0",
          },
          {
            text: "Căn bậc ba của -27 là:",
            options: JSON.stringify(["3", "-3", "±3", "9"]),
            answer: "1",
          },
          {
            text: "Số âm có căn bậc hai không?",
            options: JSON.stringify(["Có", "Không", "Chỉ có với số nguyên", "Chỉ có với số thập phân"]),
            answer: "1",
          },
          {
            text: "Số âm có căn bậc ba không?",
            options: JSON.stringify(["Có, là một số âm", "Không", "Có, là một số dương", "Chỉ số nguyên mới có"]),
            answer: "0",
          },
          {
            text: "√5 . √20 bằng:",
            options: JSON.stringify(["10", "100", "25", "√100"]),
            answer: "0",
          },
          {
            text: "√80/√5 bằng:",
            options: JSON.stringify(["16", "4", "√16", "8"]),
            answer: "1",
          },
          {
            text: "Với A ≥ 0, B ≥ 0, đưa thừa số vào trong dấu căn: 3√5 bằng:",
            options: JSON.stringify(["√15", "√45", "√30", "√8"]),
            answer: "1",
          },
          {
            text: "So sánh √41 và 5:",
            options: JSON.stringify(["√41 > 5", "√41 < 5", "√41 = 5", "Không xác định"]),
            answer: "0",
          },
          {
            text: "Khử mẫu của biểu thức lấy căn √(2/3) bằng:",
            options: JSON.stringify(["√6/3", "√6/9", "2√3/3", "√2/3"]),
            answer: "0",
          },
          {
            text: "Phương trình x² = 9 có nghiệm là:",
            options: JSON.stringify(["x = 3", "x = 3 hoặc x = -3", "x = -3", "Vô nghiệm"]),
            answer: "1",
          },
          {
            text: "∛8 bằng:",
            options: JSON.stringify(["2", "-2", "4", "8"]),
            answer: "0",
          },
          {
            text: "Điều kiện để √(A/B) xác định (theo SGK, khi xét khai phương một thương) là:",
            options: JSON.stringify(["A ≥ 0, B ≥ 0", "A ≥ 0, B > 0", "A > 0, B ≥ 0", "A, B bất kỳ"]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chương II (Đại số). Hàm số bậc nhất",
      order: 2,
      volume: 1,
      lessons: [
        {
          title: "Bài 1-2. Nhắc lại và bổ sung khái niệm hàm số. Hàm số bậc nhất",
          order: 1,
          content: `## 1. Nhắc lại và bổ sung khái niệm hàm số

Nếu đại lượng y phụ thuộc vào đại lượng thay đổi x sao cho với mỗi giá trị của x ta luôn xác định được **chỉ một** giá trị tương ứng của y thì y gọi là **hàm số** của x, x gọi là **biến số**.

- Hàm số có thể cho bằng bảng hoặc bằng công thức.
- Tập xác định của hàm số là tập tất cả các giá trị của x làm cho công thức có nghĩa.
- Đồ thị hàm số y = f(x) là tập hợp tất cả các điểm biểu diễn các cặp giá trị tương ứng (x; f(x)) trên mặt phẳng tọa độ.

**Hàm số đồng biến, nghịch biến:** Cho hàm số y = f(x) xác định với mọi x ∈ ℝ.
- Nếu x₁ < x₂ mà f(x₁) < f(x₂) thì hàm số **đồng biến** trên ℝ
- Nếu x₁ < x₂ mà f(x₁) > f(x₂) thì hàm số **nghịch biến** trên ℝ

## 2. Khái niệm về hàm số bậc nhất

**Định nghĩa:** Hàm số bậc nhất là hàm số được cho bởi công thức **y = ax + b**, trong đó a, b là các số cho trước và **a ≠ 0**.

Khi b = 0, hàm số có dạng y = ax (đã học ở lớp 7 — đại lượng tỉ lệ thuận).

## 3. Tính chất

Hàm số bậc nhất y = ax + b xác định với mọi x ∈ ℝ và có tính chất:
- **Đồng biến** trên ℝ khi **a > 0**
- **Nghịch biến** trên ℝ khi **a < 0**

**Ví dụ:** Hàm số y = 2x − 1 có a = 2 > 0 nên đồng biến trên ℝ; hàm số y = −3x + 5 có a = −3 < 0 nên nghịch biến trên ℝ.`,
        },
        {
          title: "Bài 3. Đồ thị của hàm số y = ax + b (a ≠ 0)",
          order: 2,
          content: `## 1. Đồ thị hàm số y = ax + b (a ≠ 0)

Đồ thị hàm số y = ax + b (a ≠ 0) là một **đường thẳng**:
- Cắt trục tung tại điểm có tung độ bằng b
- Song song với đường thẳng y = ax nếu b ≠ 0, trùng với đường thẳng y = ax nếu b = 0

Đường thẳng y = ax + b (a ≠ 0) còn gọi là đồ thị hàm số y = ax + b.

## 2. Cách vẽ đồ thị hàm số y = ax + b (a ≠ 0)

**Bước 1:** Xác định 2 điểm phân biệt thuộc đồ thị, chẳng hạn:
- Cho x = 0 thì y = b, ta được điểm P(0; b)
- Cho y = 0 thì x = −b/a, ta được điểm Q(−b/a; 0)

**Bước 2:** Vẽ đường thẳng đi qua hai điểm P và Q.

**Ví dụ:** Vẽ đồ thị hàm số y = 2x − 3: Với x=0, y=−3 → P(0;−3). Với y=0, x=1,5 → Q(1,5; 0). Vẽ đường thẳng qua P, Q.`,
        },
        {
          title: "Bài 4. Đường thẳng song song và đường thẳng cắt nhau",
          order: 3,
          content: `## 1. Đường thẳng song song

Xét hai đường thẳng y = ax + b (a≠0) và y = a'x + b' (a'≠0):

> **Song song:** a = a' và b ≠ b'
> **Trùng nhau:** a = a' và b = b'

## 2. Đường thẳng cắt nhau

> Hai đường thẳng **cắt nhau** khi và chỉ khi **a ≠ a'**

Nếu thêm điều kiện b = b', hai đường thẳng cắt nhau tại một điểm trên trục tung có tung độ bằng b.

## 3. Ví dụ áp dụng

**Ví dụ:** Cho hai hàm số y = 2x + 3 và y = 2x − 1: có a = a' = 2, b ≠ b' ⟹ hai đường thẳng **song song**.

**Ví dụ:** Cho y = 2x + 1 và y = −x + 4: có a ≠ a' (2 ≠ −1) ⟹ hai đường thẳng **cắt nhau**. Tọa độ giao điểm tìm được bằng cách giải phương trình 2x+1 = −x+4.`,
        },
        {
          title: "Bài 5. Hệ số góc của đường thẳng y = ax + b (a ≠ 0)",
          order: 4,
          content: `## 1. Khái niệm hệ số góc

Góc tạo bởi đường thẳng y = ax + b (a≠0) và trục Ox là góc tạo bởi tia Ax (tia thuộc trục Ox nằm về bên phải điểm giao) và tia AT (A là giao điểm của đường thẳng với Ox, T thuộc đường thẳng và có tung độ dương).

- Khi **a > 0**: góc tạo bởi đường thẳng và trục Ox là **góc nhọn**, a càng lớn thì góc càng lớn (nhưng vẫn nhỏ hơn 90°)
- Khi **a < 0**: góc tạo bởi đường thẳng và trục Ox là **góc tù**

Vì có liên quan giữa hệ số a và góc tạo bởi đường thẳng y = ax+b với trục Ox nên **a được gọi là hệ số góc** của đường thẳng y = ax + b.

## 2. Ví dụ tính góc

**Ví dụ:** Cho hàm số y = 3x + 2, hệ số góc a = 3. Tính góc α tạo bởi đường thẳng với trục Ox: tan α = 3 ⟹ α ≈ 71°34'

**Chú ý:** Khi a < 0, ta tính góc kề bù rồi suy ra góc cần tìm, ví dụ với y = −2x+3: tan(180°−α) = 2 ⟹ 180°−α ≈ 63°26' ⟹ α ≈ 116°34'`,
        },
      ],
      quiz: {
        title: "Ôn tập chương II (Đại số)",
        questions: [
          {
            text: "Hàm số y = ax + b (a≠0) là hàm số bậc nhất khi:",
            options: JSON.stringify(["a = 0", "a ≠ 0", "b = 0", "b ≠ 0"]),
            answer: "1",
          },
          {
            text: "Hàm số y = 2x − 1 là hàm số:",
            options: JSON.stringify(["Đồng biến trên ℝ", "Nghịch biến trên ℝ", "Không xác định", "Hằng số"]),
            answer: "0",
          },
          {
            text: "Hàm số y = −3x + 5 là hàm số:",
            options: JSON.stringify(["Đồng biến trên ℝ", "Nghịch biến trên ℝ", "Hằng số", "Không xác định"]),
            answer: "1",
          },
          {
            text: "Đồ thị hàm số y = ax + b (a≠0) cắt trục tung tại điểm có tung độ bằng:",
            options: JSON.stringify(["a", "b", "-b/a", "0"]),
            answer: "1",
          },
          {
            text: "Đồ thị hàm số y = 2x + 1 cắt trục hoành tại điểm có hoành độ bằng:",
            options: JSON.stringify(["-1/2", "1/2", "2", "-2"]),
            answer: "0",
          },
          {
            text: "Hai đường thẳng y = ax+b và y = a'x+b' (a,a'≠0) song song với nhau khi:",
            options: JSON.stringify(["a=a', b=b'", "a=a', b≠b'", "a≠a'", "b=b'"]),
            answer: "1",
          },
          {
            text: "Hai đường thẳng y = ax+b và y = a'x+b' trùng nhau khi:",
            options: JSON.stringify(["a=a', b=b'", "a=a', b≠b'", "a≠a'", "a≠a', b=b'"]),
            answer: "0",
          },
          {
            text: "Hai đường thẳng y = 2x+3 và y = −x+4 thì:",
            options: JSON.stringify(["Song song", "Trùng nhau", "Cắt nhau", "Không xác định"]),
            answer: "2",
          },
          {
            text: "Trong công thức y = ax + b (a≠0), hệ số góc là:",
            options: JSON.stringify(["a", "b", "x", "y"]),
            answer: "0",
          },
          {
            text: "Khi hệ số góc a > 0 thì góc tạo bởi đường thẳng với trục Ox là:",
            options: JSON.stringify(["Góc vuông", "Góc nhọn", "Góc tù", "Góc bẹt"]),
            answer: "1",
          },
          {
            text: "Khi hệ số góc a < 0 thì góc tạo bởi đường thẳng với trục Ox là:",
            options: JSON.stringify(["Góc nhọn", "Góc tù", "Góc vuông", "Góc bẹt"]),
            answer: "1",
          },
          {
            text: "Cho hàm số y = f(x) xác định trên ℝ. Hàm số đồng biến khi:",
            options: JSON.stringify(["x1<x2 thì f(x1)<f(x2)", "x1<x2 thì f(x1)>f(x2)", "x1=x2 thì f(x1)=f(x2)", "Luôn đồng biến"]),
            answer: "0",
          },
          {
            text: "Với mỗi giá trị của x, hàm số y=f(x) xác định:",
            options: JSON.stringify(["Nhiều giá trị y", "Chỉ một giá trị y", "Không giá trị nào", "Vô số giá trị"]),
            answer: "1",
          },
          {
            text: "Đồ thị của hàm số y = f(x) là:",
            options: JSON.stringify(["Một đường cong bất kỳ", "Tập hợp các điểm (x; f(x))", "Một điểm duy nhất", "Trục hoành"]),
            answer: "1",
          },
          {
            text: "Cho y = 3x+2, hệ số góc bằng 3, góc tạo với Ox xấp xỉ:",
            options: JSON.stringify(["45°", "60°", "71°34'", "90°"]),
            answer: "2",
          },
          {
            text: "Hàm số y = ax (b=0, a≠0) còn gọi là:",
            options: JSON.stringify(["Hàm hằng", "Đại lượng tỉ lệ thuận", "Đại lượng tỉ lệ nghịch", "Hàm bậc hai"]),
            answer: "1",
          },
          {
            text: "Hai đường thẳng y=ax+b, y=a'x+b' (a,a'≠0) cắt nhau tại một điểm trên trục tung khi:",
            options: JSON.stringify(["a≠a' và b=b'", "a=a' và b=b'", "a≠a' và b≠b'", "a=a' và b≠b'"]),
            answer: "0",
          },
          {
            text: "Đường thẳng y = 5x − 2 có hệ số góc bằng:",
            options: JSON.stringify(["-2", "5", "2", "-5"]),
            answer: "1",
          },
          {
            text: "Để vẽ đồ thị hàm số bậc nhất, ta cần xác định:",
            options: JSON.stringify(["Một điểm", "Hai điểm phân biệt", "Ba điểm", "Bốn điểm"]),
            answer: "1",
          },
          {
            text: "Cho đường thẳng y=2x+1 và y=2x-1, hai đường thẳng này:",
            options: JSON.stringify(["Song song", "Cắt nhau", "Trùng nhau", "Vuông góc"]),
            answer: "0",
          },
        ],
      },
    },
    {
      title: "Chương I (Hình học). Hệ thức lượng trong tam giác vuông",
      order: 3,
      volume: 1,
      lessons: [
        {
          title: "Bài 1. Một số hệ thức về cạnh và đường cao trong tam giác vuông",
          order: 1,
          content: `## 1. Hệ thức giữa cạnh góc vuông và hình chiếu

Cho tam giác ABC vuông tại A, đường cao AH. Đặt AB=c, AC=b, BC=a, AH=h, hình chiếu của AB và AC trên BC lần lượt là c' = BH, b' = CH.

> **b² = a.b'**   và   **c² = a.c'**

## 2. Định lí Pythagore (hệ quả)

Từ hệ thức trên suy ra: **a² = b² + c²**

## 3. Hệ thức liên quan đường cao

> **h² = b'.c'**

## 4. Hệ thức liên quan đến diện tích

> **a.h = b.c** (hệ thức liên hệ giữa đường cao ứng với cạnh huyền và hai cạnh góc vuông)

## 5. Hệ thức về nghịch đảo bình phương đường cao

> **1/h² = 1/b² + 1/c²**

**Ví dụ:** Cho tam giác vuông có hai cạnh góc vuông 6cm, 8cm. Tính đường cao ứng với cạnh huyền: cạnh huyền a=10; a.h=b.c ⟹ h = 6.8/10 = 4,8cm`,
        },
        {
          title: "Bài 2. Tỉ số lượng giác của góc nhọn",
          order: 2,
          content: `## 1. Định nghĩa tỉ số lượng giác của góc nhọn

Cho góc nhọn α. Xét tam giác vuông có một góc nhọn bằng α, với cạnh đối, cạnh kề, cạnh huyền tương ứng:

- **sin α** = cạnh đối / cạnh huyền
- **cos α** = cạnh kề / cạnh huyền
- **tan α** = cạnh đối / cạnh kề
- **cot α** = cạnh kề / cạnh đối

## 2. Tỉ số lượng giác của hai góc phụ nhau

Nếu α + β = 90° thì:
> sin α = cos β; cos α = sin β; tan α = cot β; cot α = tan β

## 3. Một số tính chất

- 0 < sin α < 1; 0 < cos α < 1
- sin²α + cos²α = 1
- tan α = sin α/cos α; cot α = cos α/sin α; tan α.cot α = 1

**Ví dụ:** Với α=30°: sin30°=1/2, cos30°=√3/2, tan30°=√3/3, cot30°=√3`,
        },
        {
          title: "Bài 3. Bảng lượng giác",
          order: 3,
          content: `## 1. Cấu tạo của bảng lượng giác

Bảng lượng giác (bảng VIII, IX, X trong SGK) dùng để tra giá trị sin, cos, tan, cot của một góc nhọn cho trước hoặc ngược lại, tra góc khi biết tỉ số lượng giác.

## 2. Cách dùng bảng để tìm tỉ số lượng giác

- Tra bảng sin và cos: dùng bảng VIII
- Tra bảng tan và cot: dùng bảng IX (góc từ 0° đến 76°) và bảng X (góc từ 76° đến 90°)

**Nhận xét:** Khi góc α tăng từ 0° đến 90°: sin α và tan α tăng, còn cos α và cot α giảm.

## 3. Cách tìm góc nhọn khi biết tỉ số lượng giác

Dùng bảng để tra ngược: tìm góc α biết sin α (hoặc cos, tan, cot) cho trước.

**Lưu ý hiện đại:** Ngày nay máy tính cầm tay (fx-580, fx-880,...) hay được dùng thay bảng số, nhưng nguyên tắc tra cứu và nội suy vẫn giữ nguyên giá trị trong việc rèn luyện kỹ năng tính toán.`,
        },
        {
          title: "Bài 4. Một số hệ thức về cạnh và góc trong tam giác vuông",
          order: 4,
          content: `## 1. Các hệ thức

Cho tam giác ABC vuông tại A, BC=a, AC=b, AB=c. Khi đó:

> **b = a.sinB = a.cosC**
> **c = a.sinC = a.cosB**
> **b = c.tanB = c.cotC**
> **c = b.tanC = b.cotB**

*(Mỗi cạnh góc vuông bằng cạnh huyền nhân sin góc đối hoặc cos góc kề; bằng cạnh góc vuông kia nhân tan góc đối hoặc cot góc kề.)*

## 2. Áp dụng giải tam giác vuông

**Giải tam giác vuông** là tìm tất cả các cạnh và góc còn lại khi biết trước hai cạnh, hoặc một cạnh và một góc nhọn.

**Ví dụ:** Tam giác ABC vuông tại A có AB=5cm, góc B=60°. Tính AC, BC:
- AC = AB.tanB = 5.tan60° = 5√3 ≈ 8,66cm
- BC = AB/cosB = 5/cos60° = 10cm`,
        },
      ],
      quiz: {
        title: "Ôn tập chương I (Hình học)",
        questions: [
          { text: "Trong tam giác vuông, bình phương một cạnh góc vuông bằng:", options: JSON.stringify(["Tích cạnh huyền và hình chiếu cạnh đó", "Tích hai cạnh góc vuông", "Bình phương đường cao", "Tích hai hình chiếu"]), answer: "0" },
          { text: "Hệ thức h² = b'.c' áp dụng cho:", options: JSON.stringify(["Đường cao và hai hình chiếu", "Hai cạnh góc vuông", "Cạnh huyền và đường cao", "Diện tích tam giác"]), answer: "0" },
          { text: "Hệ thức liên hệ giữa đường cao và hai cạnh góc vuông là:", options: JSON.stringify(["a.h=b.c", "h²=b.c", "a²=b.c", "h=b+c"]), answer: "0" },
          { text: "sin α của một góc nhọn bằng:", options: JSON.stringify(["Cạnh kề/cạnh huyền", "Cạnh đối/cạnh huyền", "Cạnh đối/cạnh kề", "Cạnh huyền/cạnh đối"]), answer: "1" },
          { text: "cos α của một góc nhọn bằng:", options: JSON.stringify(["Cạnh đối/cạnh huyền", "Cạnh kề/cạnh huyền", "Cạnh kề/cạnh đối", "Cạnh huyền/cạnh kề"]), answer: "1" },
          { text: "tan α bằng:", options: JSON.stringify(["Cạnh kề/cạnh đối", "Cạnh đối/cạnh kề", "Cạnh đối/cạnh huyền", "Cạnh huyền/cạnh đối"]), answer: "1" },
          { text: "Nếu α + β = 90° thì:", options: JSON.stringify(["sin α = sin β", "sin α = cos β", "tan α = tan β", "cos α = cot β"]), answer: "1" },
          { text: "Giá trị sin²α + cos²α bằng:", options: JSON.stringify(["0", "1", "2", "α"]), answer: "1" },
          { text: "Khi góc α tăng từ 0° đến 90°, sin α:", options: JSON.stringify(["Giảm", "Tăng", "Không đổi", "Bằng 0"]), answer: "1" },
          { text: "Khi góc α tăng từ 0° đến 90°, cos α:", options: JSON.stringify(["Tăng", "Giảm", "Không đổi", "Bằng 1"]), answer: "1" },
          { text: "sin 30° bằng:", options: JSON.stringify(["1/2", "√2/2", "√3/2", "1"]), answer: "0" },
          { text: "tan α . cot α bằng:", options: JSON.stringify(["0", "1", "-1", "2"]), answer: "1" },
          { text: "Trong tam giác vuông, cạnh góc vuông b bằng:", options: JSON.stringify(["a.sinB", "a.cosB", "a.tanB", "a.cotB"]), answer: "0" },
          { text: "Cạnh góc vuông b còn có thể tính bằng:", options: JSON.stringify(["c.tanB", "c.cosB", "c.sinC", "c.cotC"]), answer: "0" },
          { text: "Giải tam giác vuông là:", options: JSON.stringify(["Tìm chu vi tam giác", "Tìm các cạnh và góc còn lại", "Tính diện tích", "Vẽ đường cao"]), answer: "1" },
          { text: "Cho tam giác vuông AB=5cm, góc B=60°, cạnh AC bằng:", options: JSON.stringify(["5tan60°", "5cos60°", "5sin60°", "5cot60°"]), answer: "0" },
          { text: "Bảng lượng giác dùng để:", options: JSON.stringify(["Tính diện tích", "Tra tỉ số lượng giác của góc", "Tính chu vi", "Vẽ hình"]), answer: "1" },
          { text: "Định lí Pythagore trong tam giác vuông là:", options: JSON.stringify(["a²=b²+c²", "a=b+c", "a²=b.c", "a=b²+c²"]), answer: "0" },
          { text: "Hệ thức 1/h² bằng:", options: JSON.stringify(["1/b²+1/c²", "1/b+1/c", "b²+c²", "1/(b.c)"]), answer: "0" },
          { text: "Cạnh kề của góc B trong tam giác ABC vuông tại A là:", options: JSON.stringify(["AB", "AC", "BC", "AH"]), answer: "0" },
        ],
      },
    },
    {
      title: "Chương II (Hình học). Đường tròn",
      order: 4,
      volume: 1,
      lessons: [
        {
          title: "Bài 1. Sự xác định đường tròn. Tính chất đối xứng của đường tròn",
          order: 1,
          content: `## 1. Nhắc lại về đường tròn

Đường tròn tâm O bán kính R (R>0) là hình gồm các điểm cách O một khoảng bằng R, kí hiệu (O;R).

Vị trí điểm M với đường tròn (O;R):
- OM = R: M nằm trên đường tròn
- OM < R: M nằm trong đường tròn
- OM > R: M nằm ngoài đường tròn

## 2. Cách xác định một đường tròn

Qua ba điểm không thẳng hàng, ta vẽ được **một và chỉ một** đường tròn.

> Đường tròn đi qua ba đỉnh của tam giác gọi là **đường tròn ngoại tiếp** tam giác đó; tâm là giao điểm ba đường trung trực của tam giác.

**Chú ý:** Không vẽ được đường tròn nào đi qua ba điểm thẳng hàng.

## 3. Tâm đối xứng và trục đối xứng

- Đường tròn là hình có **tâm đối xứng**: tâm của đường tròn là tâm đối xứng của nó.
- Đường tròn là hình có **trục đối xứng**: bất kì đường kính nào cũng là trục đối xứng của đường tròn.`,
        },
        {
          title: "Bài 2. Đường kính và dây của đường tròn",
          order: 2,
          content: `## 1. So sánh độ dài đường kính và dây

**Định lí 1:** Trong các dây của một đường tròn, dây lớn nhất là đường kính.

## 2. Quan hệ vuông góc giữa đường kính và dây

**Định lí 2:** Trong một đường tròn, đường kính vuông góc với một dây thì đi qua trung điểm của dây ấy.

**Định lí 3:** Trong một đường tròn, đường kính đi qua trung điểm của một dây không đi qua tâm thì vuông góc với dây ấy.

**Ví dụ:** Cho đường tròn (O;R), dây AB không qua tâm. Nếu OH⊥AB tại H thì H là trung điểm AB.`,
        },
        {
          title: "Bài 3. Liên hệ giữa dây và khoảng cách từ tâm đến dây",
          order: 3,
          content: `## 1. Bài toán và định lí

Trong một đường tròn:

**Định lí 1:** Hai dây bằng nhau thì cách đều tâm; hai dây cách đều tâm thì bằng nhau.

**Định lí 2:** Dây nào lớn hơn thì dây đó gần tâm hơn; dây nào gần tâm hơn thì dây đó lớn hơn.

## 2. Ví dụ áp dụng

**Ví dụ:** Cho đường tròn (O;R), hai dây AB và CD với khoảng cách từ O đến AB nhỏ hơn khoảng cách từ O đến CD. Suy ra AB > CD.`,
        },
        {
          title: "Bài 4. Vị trí tương đối của đường thẳng và đường tròn",
          order: 4,
          content: `## 1. Ba vị trí tương đối

Cho đường tròn (O;R) và đường thẳng a, đặt d = khoảng cách từ O đến a:

| Vị trí tương đối | Số điểm chung | Hệ thức giữa d và R |
|---|---|---|
| Đường thẳng và đường tròn cắt nhau | 2 | d < R |
| Đường thẳng và đường tròn tiếp xúc nhau | 1 | d = R |
| Đường thẳng và đường tròn không giao nhau | 0 | d > R |

## 2. Tiếp tuyến của đường tròn

Khi đường thẳng a tiếp xúc với (O), a gọi là **tiếp tuyến**, điểm chung gọi là **tiếp điểm**.

**Ví dụ:** Cho (O;5cm), đường thẳng a cách O một khoảng d=5cm. Vậy a tiếp xúc với (O).`,
        },
        {
          title: "Bài 5. Dấu hiệu nhận biết tiếp tuyến của đường tròn",
          order: 5,
          content: `## 1. Dấu hiệu nhận biết tiếp tuyến

**Định lí:** Nếu một đường thẳng đi qua một điểm của đường tròn và vuông góc với bán kính đi qua điểm đó thì đường thẳng ấy là một tiếp tuyến của đường tròn.

## 2. Áp dụng dựng tiếp tuyến

**Bài toán:** Qua điểm A nằm trên (O;R), dựng tiếp tuyến tại A: chỉ cần dựng đường thẳng qua A vuông góc với OA.

**Ví dụ:** Cho tam giác ABC vuông tại A, đường tròn (B; BA). Chứng minh AC là tiếp tuyến của (B): vì AC ⊥ AB tại A và A thuộc (B;BA) nên theo dấu hiệu, AC là tiếp tuyến.`,
        },
        {
          title: "Bài 6. Tính chất của hai tiếp tuyến cắt nhau",
          order: 6,
          content: `## 1. Định lí về hai tiếp tuyến cắt nhau

Nếu hai tiếp tuyến của một đường tròn cắt nhau tại một điểm thì:
- Điểm đó cách đều hai tiếp điểm
- Tia kẻ từ điểm đó đi qua tâm là tia phân giác của góc tạo bởi hai tiếp tuyến
- Tia kẻ từ tâm đi qua điểm đó là tia phân giác của góc tạo bởi hai bán kính đi qua các tiếp điểm

## 2. Đường tròn nội tiếp tam giác

Đường tròn tiếp xúc với ba cạnh của tam giác gọi là **đường tròn nội tiếp tam giác**, tâm là giao điểm các đường phân giác trong của tam giác.

## 3. Đường tròn bàng tiếp tam giác

Đường tròn tiếp xúc với một cạnh của tam giác và phần kéo dài của hai cạnh kia gọi là **đường tròn bàng tiếp tam giác**.`,
        },
        {
          title: "Bài 7. Vị trí tương đối của hai đường tròn",
          order: 7,
          content: `## 1. Ba vị trí tương đối của hai đường tròn

Cho hai đường tròn (O;R) và (O';r) với R ≥ r, OO'=d:

- **Cắt nhau** (2 điểm chung): R−r < d < R+r
- **Tiếp xúc nhau** (1 điểm chung): tiếp xúc ngoài khi d=R+r; tiếp xúc trong khi d=R−r
- **Không giao nhau** (0 điểm chung): ở ngoài nhau khi d>R+r; đựng nhau khi d<R−r; đồng tâm khi d=0

## 2. Tính chất đường nối tâm

Đường nối tâm là trục đối xứng của hình gồm hai đường tròn đó. Nếu hai đường tròn cắt nhau, đường nối tâm là đường trung trực của dây chung.`,
        },
        {
          title: "Bài 8. Vị trí tương đối của hai đường tròn (tiếp theo)",
          order: 8,
          content: `## 1. Hệ thức giữa đoạn nối tâm và các bán kính

Bảng tóm tắt hệ thức giữa d, R, r ứng với từng vị trí tương đối (xem Bài 7).

## 2. Tiếp tuyến chung của hai đường tròn

**Tiếp tuyến chung** của hai đường tròn là đường thẳng tiếp xúc với cả hai đường tròn đó.

- **Tiếp tuyến chung ngoài:** không cắt đoạn nối tâm
- **Tiếp tuyến chung trong:** cắt đoạn nối tâm

**Ví dụ:** Hai đường tròn tiếp xúc ngoài có 3 tiếp tuyến chung (2 ngoài, 1 trong); hai đường tròn cắt nhau có 2 tiếp tuyến chung ngoài, không có tiếp tuyến chung trong.`,
        },
      ],
      quiz: {
        title: "Ôn tập chương II (Hình học)",
        questions: [
          { text: "Qua ba điểm không thẳng hàng, vẽ được bao nhiêu đường tròn?", options: JSON.stringify(["0", "1", "2", "Vô số"]), answer: "1" },
          { text: "Tâm đường tròn ngoại tiếp tam giác là giao điểm của:", options: JSON.stringify(["Ba đường cao", "Ba đường trung trực", "Ba đường phân giác", "Ba đường trung tuyến"]), answer: "1" },
          { text: "Trong các dây của đường tròn, dây lớn nhất là:", options: JSON.stringify(["Bán kính", "Đường kính", "Dây bất kỳ", "Tiếp tuyến"]), answer: "1" },
          { text: "Đường kính vuông góc với một dây thì:", options: JSON.stringify(["Đi qua trung điểm dây ấy", "Song song với dây ấy", "Không liên quan", "Cắt dây tại 2 điểm"]), answer: "0" },
          { text: "Hai dây bằng nhau thì:", options: JSON.stringify(["Cách đều tâm", "Song song nhau", "Vuông góc nhau", "Cắt nhau tại tâm"]), answer: "0" },
          { text: "Dây nào lớn hơn thì:", options: JSON.stringify(["Xa tâm hơn", "Gần tâm hơn", "Bằng đường kính", "Không xác định"]), answer: "1" },
          { text: "Đường thẳng và đường tròn tiếp xúc nhau khi:", options: JSON.stringify(["d<R", "d=R", "d>R", "d=0"]), answer: "1" },
          { text: "Đường thẳng và đường tròn cắt nhau khi:", options: JSON.stringify(["d<R", "d=R", "d>R", "d=2R"]), answer: "0" },
          { text: "Dấu hiệu nhận biết tiếp tuyến: đường thẳng đi qua một điểm của đường tròn và:", options: JSON.stringify(["Song song với bán kính", "Vuông góc với bán kính tại điểm đó", "Cắt bán kính", "Đi qua tâm"]), answer: "1" },
          { text: "Hai tiếp tuyến cắt nhau tại một điểm thì điểm đó:", options: JSON.stringify(["Cách đều hai tiếp điểm", "Nằm trên đường tròn", "Là tâm đường tròn", "Không xác định"]), answer: "0" },
          { text: "Tâm đường tròn nội tiếp tam giác là giao điểm của:", options: JSON.stringify(["Ba đường trung trực", "Ba đường phân giác trong", "Ba đường cao", "Ba đường trung tuyến"]), answer: "1" },
          { text: "Đường tròn bàng tiếp tam giác tiếp xúc với:", options: JSON.stringify(["Ba cạnh tam giác", "Một cạnh và phần kéo dài hai cạnh kia", "Ba đỉnh tam giác", "Đường cao"]), answer: "1" },
          { text: "Hai đường tròn tiếp xúc ngoài khi:", options: JSON.stringify(["d=R+r", "d=R-r", "d=0", "d>R+r"]), answer: "0" },
          { text: "Hai đường tròn cắt nhau khi:", options: JSON.stringify(["d=R+r", "R-r<d<R+r", "d<R-r", "d=0"]), answer: "1" },
          { text: "Hai đường tròn ở ngoài nhau khi:", options: JSON.stringify(["d>R+r", "d=R+r", "d<R-r", "d=R-r"]), answer: "0" },
          { text: "Hai đường tròn đồng tâm khi:", options: JSON.stringify(["d=0", "d=R+r", "d=R-r", "d=R"]), answer: "0" },
          { text: "Tiếp tuyến chung ngoài của hai đường tròn là tiếp tuyến:", options: JSON.stringify(["Cắt đoạn nối tâm", "Không cắt đoạn nối tâm", "Đi qua tâm", "Song song đoạn nối tâm luôn"]), answer: "1" },
          { text: "Tiếp tuyến chung trong của hai đường tròn là tiếp tuyến:", options: JSON.stringify(["Không cắt đoạn nối tâm", "Cắt đoạn nối tâm", "Đi qua cả hai tâm", "Song song với dây chung"]), answer: "1" },
          { text: "Đường nối tâm của hai đường tròn cắt nhau là:", options: JSON.stringify(["Trung trực của dây chung", "Tiếp tuyến chung", "Đường phân giác", "Đường trung tuyến"]), answer: "0" },
          { text: "Điểm M nằm trong đường tròn (O;R) khi:", options: JSON.stringify(["OM=R", "OM<R", "OM>R", "OM=2R"]), answer: "1" },
          { text: "Đường tròn có trục đối xứng là:", options: JSON.stringify(["Bất kỳ dây nào", "Bất kỳ đường kính nào", "Bán kính", "Tiếp tuyến"]), answer: "1" },
        ],
      },
    },
    {
      title: "Chương III (Đại số). Hệ hai phương trình bậc nhất hai ẩn",
      order: 5,
      volume: 2,
      lessons: [
        {
          title: "Bài 1. Phương trình bậc nhất hai ẩn",
          order: 1,
          content: `## 1. Khái niệm

Phương trình bậc nhất hai ẩn x, y là hệ thức dạng **ax + by = c**, trong đó a, b, c là các số đã biết (a ≠ 0 hoặc b ≠ 0).

## 2. Nghiệm của phương trình bậc nhất hai ẩn

Cặp số (x₀; y₀) thỏa mãn ax₀+by₀=c gọi là một **nghiệm** của phương trình.

Phương trình bậc nhất hai ẩn ax+by=c luôn có **vô số nghiệm**. Tập nghiệm biểu diễn bởi đường thẳng ax+by=c:
- Nếu a≠0, b≠0: đường thẳng là đồ thị hàm số y = (-a/b)x + c/b
- Nếu a≠0, b=0: đường thẳng song song trục Oy (x=c/a)
- Nếu a=0, b≠0: đường thẳng song song trục Ox (y=c/b)

**Ví dụ:** Phương trình 2x−y=1 có nghiệm tổng quát (x; 2x−1) với x∈ℝ tùy ý.`,
        },
        {
          title: "Bài 2. Hệ hai phương trình bậc nhất hai ẩn",
          order: 2,
          content: `## 1. Khái niệm về hệ hai phương trình bậc nhất hai ẩn

Cho hai phương trình bậc nhất hai ẩn ax+by=c và a'x+b'y=c'. Khi đó ta có hệ:

$$\\begin{cases} ax+by=c \\\\ a'x+b'y=c' \\end{cases}$$

Nếu (x₀;y₀) là nghiệm chung của hai phương trình thì gọi là **một nghiệm của hệ**.

## 2. Minh họa hình học tập nghiệm

Gọi (d): ax+by=c và (d'): a'x+b'y=c'. Số nghiệm của hệ tương ứng với số giao điểm của (d) và (d'):
- (d) cắt (d'): hệ có **một nghiệm duy nhất**
- (d) song song (d'): hệ **vô nghiệm**
- (d) trùng (d'): hệ có **vô số nghiệm**

## 3. Hệ phương trình tương đương

Hai hệ phương trình được gọi là tương đương nếu chúng có cùng tập nghiệm.`,
        },
        {
          title: "Bài 3. Giải hệ phương trình bằng phương pháp thế",
          order: 3,
          content: `## 1. Quy tắc thế

**Bước 1:** Từ một phương trình của hệ, biểu diễn một ẩn theo ẩn kia rồi thế vào phương trình còn lại để được phương trình một ẩn.

**Bước 2:** Giải phương trình một ẩn vừa có, rồi suy ra nghiệm của hệ.

## 2. Áp dụng giải hệ phương trình bằng phương pháp thế

**Ví dụ:** Giải hệ:
$$\\begin{cases} x-3y=2 \\\\ -2x+5y=1 \\end{cases}$$

Từ (1): x = 3y+2. Thế vào (2): −2(3y+2)+5y=1 ⟺ −6y−4+5y=1 ⟺ −y=5 ⟺ y=−5. Suy ra x=3(−5)+2=−13. Vậy nghiệm (x;y)=(−13;−5)

## 3. Chú ý các trường hợp đặc biệt

Nếu sau khi thế, phương trình một ẩn trở thành **vô nghiệm** (0=k, k≠0) thì hệ vô nghiệm; nếu trở thành **nghiệm đúng với mọi giá trị** (0=0) thì hệ có vô số nghiệm.`,
        },
        {
          title: "Bài 4. Giải hệ phương trình bằng phương pháp cộng đại số",
          order: 4,
          content: `## 1. Quy tắc cộng đại số

**Bước 1:** Cộng hay trừ từng vế hai phương trình của hệ đã cho để được một phương trình mới.

**Bước 2:** Dùng phương trình mới ấy thay thế cho một trong hai phương trình của hệ (giữ nguyên phương trình kia).

## 2. Áp dụng

**Trường hợp 1 (hệ số của một ẩn bằng nhau hoặc đối nhau):**

**Ví dụ:** Giải hệ:
$$\\begin{cases} 2x+y=3 \\\\ x-y=6 \\end{cases}$$

Cộng hai phương trình: 3x=9 ⟹ x=3. Thay vào (1): y=3−2.3=−3. Nghiệm (3;−3)

**Trường hợp 2 (hệ số không bằng nhau, không đối nhau):** nhân hai vế mỗi phương trình với số thích hợp để đưa hệ số của một ẩn bằng nhau hoặc đối nhau, rồi áp dụng trường hợp 1.

**Ví dụ:** Giải hệ:
$$\\begin{cases} 3x+2y=7 \\\\ 2x+3y=3 \\end{cases}$$

Nhân (1) với 3, (2) với 2: 9x+6y=21 và 4x+6y=6. Trừ vế: 5x=15 ⟹ x=3, thay vào (1): y=(7−9)/2=−1`,
        },
        {
          title: "Bài 5. Giải bài toán bằng cách lập hệ phương trình",
          order: 5,
          content: `## 1. Các bước giải

**Bước 1:** Lập hệ phương trình:
- Chọn hai ẩn và đặt điều kiện thích hợp cho chúng
- Biểu diễn các đại lượng chưa biết theo các ẩn và các đại lượng đã biết
- Lập hai phương trình biểu thị mối quan hệ giữa các đại lượng, từ đó lập hệ hai phương trình

**Bước 2:** Giải hệ phương trình vừa lập.

**Bước 3:** Kiểm tra nghiệm tìm được có thỏa điều kiện đã đặt không rồi kết luận.

## 2. Ví dụ

**Ví dụ:** Tìm hai số biết tổng bằng 100 và hai lần số này lớn hơn số kia 10 đơn vị.

Gọi hai số cần tìm là x, y. Ta có hệ: x+y=100 và 2x−y=10. Giải: 3x=110... (minh họa quy trình lập và giải hệ, đáp số tùy đề cụ thể).

## 3. Dạng toán chuyển động, năng suất, và chung riêng

Đây là các dạng toán thường gặp: bài toán chuyển động (quãng đường=vận tốc×thời gian), bài toán năng suất, bài toán làm chung làm riêng — đều áp dụng chung quy trình 3 bước ở trên.`,
        },
      ],
      quiz: {
        title: "Ôn tập chương III (Đại số)",
        questions: [
          { text: "Phương trình bậc nhất hai ẩn có dạng:", options: JSON.stringify(["ax+b=0", "ax+by=c", "ax²+bx+c=0", "ax+by+cz=0"]), answer: "1" },
          { text: "Phương trình bậc nhất hai ẩn ax+by=c (a≠0 hoặc b≠0) có:", options: JSON.stringify(["Vô nghiệm", "Một nghiệm duy nhất", "Vô số nghiệm", "Hai nghiệm"]), answer: "2" },
          { text: "Hệ hai phương trình bậc nhất hai ẩn có nghiệm duy nhất khi hai đường thẳng biểu diễn:", options: JSON.stringify(["Song song", "Trùng nhau", "Cắt nhau", "Không xác định"]), answer: "2" },
          { text: "Hệ hai phương trình vô nghiệm khi hai đường thẳng biểu diễn:", options: JSON.stringify(["Cắt nhau", "Song song", "Trùng nhau", "Vuông góc"]), answer: "1" },
          { text: "Hệ hai phương trình có vô số nghiệm khi hai đường thẳng biểu diễn:", options: JSON.stringify(["Cắt nhau", "Song song", "Trùng nhau", "Không xác định"]), answer: "2" },
          { text: "Phương pháp thế bắt đầu bằng cách:", options: JSON.stringify(["Cộng hai phương trình", "Biểu diễn một ẩn theo ẩn kia", "Trừ hai phương trình", "Vẽ đồ thị"]), answer: "1" },
          { text: "Phương pháp cộng đại số dùng để:", options: JSON.stringify(["Vẽ đồ thị hệ", "Khử bớt một ẩn bằng cách cộng/trừ hai phương trình", "Tính định thức", "Giải phương trình bậc hai"]), answer: "1" },
          { text: "Giải hệ x-3y=2 và -2x+5y=1 bằng phương pháp thế, nghiệm là:", options: JSON.stringify(["(-13;-5)", "(13;5)", "(-5;-13)", "(5;13)"]), answer: "0" },
          { text: "Giải hệ 2x+y=3 và x-y=6, nghiệm là:", options: JSON.stringify(["(3;-3)", "(-3;3)", "(3;3)", "(-3;-3)"]), answer: "0" },
          { text: "Khi giải hệ bằng phương pháp cộng đại số mà hệ số một ẩn không bằng và không đối nhau, ta:", options: JSON.stringify(["Không giải được", "Nhân hai vế mỗi phương trình với số thích hợp", "Chia hai vế cho 0", "Đổi ẩn số"]), answer: "1" },
          { text: "Bước đầu tiên khi giải bài toán bằng cách lập hệ phương trình là:", options: JSON.stringify(["Giải hệ phương trình", "Chọn ẩn và đặt điều kiện", "Kết luận nghiệm", "Vẽ đồ thị"]), answer: "1" },
          { text: "Bước cuối cùng khi giải bài toán bằng cách lập hệ phương trình là:", options: JSON.stringify(["Lập hệ phương trình", "Chọn ẩn", "Đối chiếu điều kiện và kết luận", "Giải phương trình bậc hai"]), answer: "2" },
          { text: "Hai hệ phương trình tương đương là hai hệ có:", options: JSON.stringify(["Cùng số phương trình", "Cùng tập nghiệm", "Cùng số ẩn", "Cùng hệ số"]), answer: "1" },
          { text: "Nghiệm của hệ phương trình bậc nhất hai ẩn là:", options: JSON.stringify(["Giá trị x bất kỳ", "Cặp số (x;y) thỏa mãn cả hai phương trình", "Giá trị y bất kỳ", "Một số duy nhất"]), answer: "1" },
          { text: "Phương trình 2x-y=1 có nghiệm tổng quát là:", options: JSON.stringify(["(x; 2x-1)", "(x; 2x+1)", "(2x-1; x)", "(x; x-1)"]), answer: "0" },
          { text: "Nếu sau khi thế, phương trình trở thành 0=5 thì hệ:", options: JSON.stringify(["Có nghiệm duy nhất", "Vô nghiệm", "Vô số nghiệm", "Có hai nghiệm"]), answer: "1" },
          { text: "Nếu sau khi thế, phương trình trở thành 0=0 thì hệ:", options: JSON.stringify(["Vô nghiệm", "Có nghiệm duy nhất", "Vô số nghiệm", "Có hai nghiệm"]), answer: "2" },
          { text: "Giải hệ 3x+2y=7 và 2x+3y=3, nghiệm x bằng:", options: JSON.stringify(["3", "-3", "1", "-1"]), answer: "0" },
          { text: "Trong bài toán chuyển động, công thức liên hệ là:", options: JSON.stringify(["S=v.t", "S=v+t", "S=v/t", "S=v-t"]), answer: "0" },
          { text: "Đồ thị của phương trình ax+by=c với a≠0, b=0 là đường thẳng:", options: JSON.stringify(["Song song trục Ox", "Song song trục Oy", "Đi qua gốc tọa độ luôn", "Trùng trục hoành luôn"]), answer: "1" },
        ],
      },
    },
    {
      title: "Chương IV (Đại số). Hàm số y=ax² (a≠0). Phương trình bậc hai một ẩn",
      order: 6,
      volume: 2,
      lessons: [
        {
          title: "Bài 1. Hàm số y = ax² (a ≠ 0)",
          order: 1,
          content: `## 1. Ví dụ mở đầu

Quãng đường rơi tự do s = 5t² là một ví dụ về hàm số dạng y = ax² (với a=5).

## 2. Tính chất của hàm số y = ax² (a≠0)

Hàm số y = ax² (a≠0) xác định với mọi x∈ℝ và có tính chất:
- Nếu **a>0**: hàm số nghịch biến khi x<0, đồng biến khi x>0
- Nếu **a<0**: hàm số đồng biến khi x<0, nghịch biến khi x>0

## 3. Nhận xét về giá trị

- Nếu a>0 thì y>0 với mọi x≠0, y=0 khi x=0. Giá trị **nhỏ nhất** của hàm số là y=0
- Nếu a<0 thì y<0 với mọi x≠0, y=0 khi x=0. Giá trị **lớn nhất** của hàm số là y=0`,
        },
        {
          title: "Bài 2. Đồ thị của hàm số y = ax² (a ≠ 0)",
          order: 2,
          content: `## 1. Dạng đồ thị

Đồ thị hàm số y=ax² (a≠0) là một đường cong gọi là **parabol** đỉnh O, nhận Oy làm trục đối xứng.

- Nếu a>0: đồ thị nằm phía trên trục hoành, O là điểm **thấp nhất**
- Nếu a<0: đồ thị nằm phía dưới trục hoành, O là điểm **cao nhất**

## 2. Cách vẽ đồ thị

**Bước 1:** Lập bảng giá trị tương ứng (x; y) với một số giá trị x đối xứng qua 0

**Bước 2:** Biểu diễn các điểm lên mặt phẳng tọa độ và vẽ đường cong parabol đi qua các điểm đó (chú ý tính đối xứng qua Oy)

**Ví dụ:** Vẽ đồ thị y=x²: bảng giá trị x=-2,-1,0,1,2 tương ứng y=4,1,0,1,4. Nối các điểm thành đường cong parabol.`,
        },
        {
          title: "Bài 3. Phương trình bậc hai một ẩn",
          order: 3,
          content: `## 1. Định nghĩa

Phương trình bậc hai một ẩn (nói gọn là phương trình bậc hai) là phương trình có dạng:

> **ax² + bx + c = 0**

trong đó x là ẩn; a, b, c là các số cho trước gọi là các hệ số và **a ≠ 0**.

## 2. Một số ví dụ về giải phương trình bậc hai

**Trường hợp c=0:** ax²+bx=0 ⟺ x(ax+b)=0 ⟺ x=0 hoặc x=-b/a

**Trường hợp b=0:** ax²+c=0 ⟺ x² = -c/a (có nghiệm khi -c/a≥0)

**Trường hợp tổng quát:** dùng phương pháp biến đổi đưa về dạng bình phương một biểu thức bằng một hằng số (phương pháp thêm bớt hoàn thiện bình phương), làm cơ sở xây dựng công thức nghiệm ở bài sau.`,
        },
        {
          title: "Bài 4. Công thức nghiệm của phương trình bậc hai",
          order: 4,
          content: `## 1. Công thức nghiệm

Xét phương trình ax²+bx+c=0 (a≠0), biệt thức **Δ = b² − 4ac**:

- Nếu **Δ > 0**: phương trình có **hai nghiệm phân biệt** x₁,₂ = (−b ± √Δ)/2a
- Nếu **Δ = 0**: phương trình có **nghiệm kép** x₁ = x₂ = −b/2a
- Nếu **Δ < 0**: phương trình **vô nghiệm**

## 2. Áp dụng

**Ví dụ:** Giải phương trình 2x²+5x−3=0: a=2,b=5,c=−3, Δ=25+24=49>0, √Δ=7. x₁=(−5+7)/4=1/2; x₂=(−5−7)/4=−3`,
        },
        {
          title: "Bài 5. Công thức nghiệm thu gọn",
          order: 5,
          content: `## 1. Công thức nghiệm thu gọn

Khi hệ số b = 2b' (b' nguyên hoặc hữu tỉ), đặt **Δ' = b'² − ac**:

- Nếu **Δ' > 0**: phương trình có hai nghiệm phân biệt x₁,₂ = (−b' ± √Δ')/a
- Nếu **Δ' = 0**: phương trình có nghiệm kép x₁ = x₂ = −b'/a
- Nếu **Δ' < 0**: phương trình vô nghiệm

## 2. Áp dụng

**Ví dụ:** Giải phương trình 5x²+4x−1=0: a=5,b=4⟹b'=2,c=−1. Δ'=4+5=9>0,√Δ'=3. x₁=(−2+3)/5=1/5; x₂=(−2−3)/5=−1

Công thức nghiệm thu gọn giúp tính toán nhanh hơn khi hệ số b chẵn.`,
        },
        {
          title: "Bài 6. Hệ thức Vi-ét và ứng dụng",
          order: 6,
          content: `## 1. Hệ thức Vi-ét

Nếu x₁, x₂ là hai nghiệm của phương trình ax²+bx+c=0 (a≠0) thì:

> **x₁ + x₂ = −b/a**   và   **x₁.x₂ = c/a**

## 2. Ứng dụng: tìm hai số biết tổng và tích

Nếu hai số có tổng bằng S và tích bằng P (S²≥4P) thì hai số đó là nghiệm của phương trình: **x² − Sx + P = 0**

**Ví dụ:** Tìm hai số biết tổng bằng 27, tích bằng 180: hai số là nghiệm của x²−27x+180=0. Δ=729−720=9, √Δ=3. x₁=(27+3)/2=15, x₂=(27−3)/2=12

## 3. Nhẩm nghiệm nhanh

- Nếu a+b+c=0: phương trình có nghiệm x₁=1, x₂=c/a
- Nếu a−b+c=0: phương trình có nghiệm x₁=−1, x₂=−c/a`,
        },
        {
          title: "Bài 7. Phương trình quy về phương trình bậc hai",
          order: 7,
          content: `## 1. Phương trình trùng phương

Phương trình trùng phương có dạng: **ax⁴ + bx² + c = 0** (a≠0)

**Cách giải:** Đặt t=x² (t≥0), đưa về phương trình bậc hai at²+bt+c=0. Giải tìm t rồi suy ra x=±√t (với t≥0 thỏa mãn).

## 2. Phương trình chứa ẩn ở mẫu thức

**Các bước giải:**
1. Tìm điều kiện xác định (ĐKXĐ) của phương trình
2. Quy đồng mẫu thức hai vế rồi khử mẫu
3. Giải phương trình vừa nhận được
4. Đối chiếu nghiệm với ĐKXĐ, loại nghiệm không thỏa, kết luận

## 3. Phương trình tích

Đưa phương trình về dạng A(x).B(x)=0 ⟺ A(x)=0 hoặc B(x)=0, rồi giải từng phương trình.

**Ví dụ:** Giải x³−3x²+2x=0 ⟺ x(x²−3x+2)=0 ⟺ x=0 hoặc x²−3x+2=0 (⟺ x=1 hoặc x=2)`,
        },
        {
          title: "Bài 8. Giải bài toán bằng cách lập phương trình",
          order: 8,
          content: `## 1. Các bước giải

**Bước 1:** Lập phương trình:
- Chọn ẩn số và đặt điều kiện thích hợp cho ẩn
- Biểu diễn các đại lượng chưa biết theo ẩn và các đại lượng đã biết
- Lập phương trình biểu thị mối quan hệ giữa các đại lượng

**Bước 2:** Giải phương trình vừa lập (thường là phương trình bậc hai)

**Bước 3:** Đối chiếu nghiệm với điều kiện của ẩn, loại nghiệm không thích hợp, trả lời.

## 2. Các dạng toán thường gặp

Toán chuyển động, toán năng suất (làm chung-làm riêng), toán về diện tích/hình học, toán có nội dung số học — đều áp dụng chung 3 bước ở trên và thường dẫn đến một phương trình bậc hai cần giải bằng công thức nghiệm hoặc hệ thức Vi-ét.

**Ví dụ:** Một mảnh vườn hình chữ nhật có diện tích 320m², chiều dài hơn chiều rộng 4m. Gọi chiều rộng là x (x>0). Chiều dài x+4. Ta có phương trình x(x+4)=320 ⟺ x²+4x−320=0. Giải: Δ'=4+320=324,√Δ'=18. x=(−2+18)/1=16 (nhận), x=−20 (loại). Vậy chiều rộng 16m, chiều dài 20m.`,
        },
      ],
      quiz: {
        title: "Ôn tập chương IV (Đại số)",
        questions: [
          { text: "Hàm số y=ax² (a≠0) đồng biến khi x>0 nếu:", options: JSON.stringify(["a>0", "a<0", "a=0", "a bất kỳ"]), answer: "0" },
          { text: "Đồ thị hàm số y=ax² (a≠0) là:", options: JSON.stringify(["Đường thẳng", "Parabol", "Đường tròn", "Hyperbol"]), answer: "1" },
          { text: "Nếu a>0, điểm O là điểm ___ của đồ thị y=ax²:", options: JSON.stringify(["Cao nhất", "Thấp nhất", "Giữa", "Không xác định"]), answer: "1" },
          { text: "Phương trình bậc hai một ẩn có dạng:", options: JSON.stringify(["ax+b=0", "ax²+bx+c=0 (a≠0)", "ax²+bx=0", "ax+by=c"]), answer: "1" },
          { text: "Biệt thức Δ của phương trình bậc hai bằng:", options: JSON.stringify(["b²-4ac", "b²+4ac", "4ac-b²", "b-4ac"]), answer: "0" },
          { text: "Khi Δ>0, phương trình bậc hai có:", options: JSON.stringify(["Vô nghiệm", "Nghiệm kép", "Hai nghiệm phân biệt", "Vô số nghiệm"]), answer: "2" },
          { text: "Khi Δ=0, phương trình bậc hai có:", options: JSON.stringify(["Hai nghiệm phân biệt", "Nghiệm kép", "Vô nghiệm", "Ba nghiệm"]), answer: "1" },
          { text: "Khi Δ<0, phương trình bậc hai:", options: JSON.stringify(["Có hai nghiệm", "Có nghiệm kép", "Vô nghiệm", "Có vô số nghiệm"]), answer: "2" },
          { text: "Giải 2x²+5x-3=0, nghiệm là:", options: JSON.stringify(["1/2 và -3", "-1/2 và 3", "1/2 và 3", "-1/2 và -3"]), answer: "0" },
          { text: "Công thức nghiệm thu gọn dùng Δ' khi:", options: JSON.stringify(["b=2b'", "a=2a'", "c=2c'", "b'=2b"]), answer: "0" },
          { text: "Theo hệ thức Vi-ét, x1+x2 bằng:", options: JSON.stringify(["-b/a", "b/a", "c/a", "-c/a"]), answer: "0" },
          { text: "Theo hệ thức Vi-ét, x1.x2 bằng:", options: JSON.stringify(["-b/a", "c/a", "b/a", "-c/a"]), answer: "1" },
          { text: "Nếu a+b+c=0, phương trình bậc hai có nghiệm:", options: JSON.stringify(["x1=1, x2=c/a", "x1=-1, x2=-c/a", "x1=0, x2=c/a", "x1=1, x2=-c/a"]), answer: "0" },
          { text: "Nếu a-b+c=0, phương trình bậc hai có nghiệm:", options: JSON.stringify(["x1=1, x2=c/a", "x1=-1, x2=-c/a", "x1=0", "x1=-1, x2=c/a"]), answer: "1" },
          { text: "Phương trình trùng phương có dạng:", options: JSON.stringify(["ax⁴+bx²+c=0", "ax²+bx+c=0", "ax+by=c", "ax³+bx=0"]), answer: "0" },
          { text: "Để giải phương trình trùng phương, ta đặt:", options: JSON.stringify(["t=x", "t=x² (t≥0)", "t=x³", "t=1/x"]), answer: "1" },
          { text: "Khi giải phương trình chứa ẩn ở mẫu, bước đầu tiên là:", options: JSON.stringify(["Quy đồng mẫu", "Tìm điều kiện xác định", "Khử mẫu", "Kết luận nghiệm"]), answer: "1" },
          { text: "Tìm hai số biết tổng S và tích P, hai số là nghiệm của phương trình:", options: JSON.stringify(["x²-Sx+P=0", "x²+Sx-P=0", "x²-Px+S=0", "x²+Px+S=0"]), answer: "0" },
          { text: "Tìm hai số có tổng 27, tích 180, hai số đó là:", options: JSON.stringify(["15 và 12", "20 và 7", "18 và 9", "25 và 2"]), answer: "0" },
          { text: "Bước cuối cùng khi giải bài toán bằng cách lập phương trình là:", options: JSON.stringify(["Lập phương trình", "Giải phương trình", "Đối chiếu điều kiện và trả lời", "Chọn ẩn số"]), answer: "2" },
        ],
      },
    },
    {
      title: "Chương III (Hình học). Góc với đường tròn",
      order: 7,
      volume: 2,
      lessons: [
        {
          title: "Bài 1. Góc ở tâm. Số đo cung",
          order: 1,
          content: `## 1. Góc ở tâm

Góc có đỉnh trùng với tâm đường tròn gọi là **góc ở tâm**.

## 2. Số đo cung

- Số đo cung nhỏ bằng số đo góc ở tâm chắn cung đó
- Số đo cung lớn bằng 360° trừ số đo cung nhỏ (có chung hai mút với cung lớn)
- Số đo nửa đường tròn bằng 180°

## 3. So sánh hai cung

Trong một đường tròn hay hai đường tròn bằng nhau: hai cung được gọi là **bằng nhau** nếu chúng có số đo bằng nhau; cung nào có số đo lớn hơn thì **lớn hơn**.

## 4. Định lí về cộng số đo cung

Nếu C là điểm nằm trên cung AB thì: **số đo cung AB = số đo cung AC + số đo cung CB**`,
        },
        {
          title: "Bài 2. Liên hệ giữa cung và dây",
          order: 2,
          content: `## 1. Định lí 1

Với hai cung nhỏ trong một đường tròn hay hai đường tròn bằng nhau:
> Hai cung bằng nhau căng hai dây bằng nhau, và ngược lại.

## 2. Định lí 2

> Cung lớn hơn căng dây lớn hơn, và ngược lại.

**Chú ý:** Các định lí trên chỉ áp dụng cho hai cung nhỏ trong một đường tròn hoặc hai đường tròn bằng nhau.`,
        },
        {
          title: "Bài 3. Góc nội tiếp",
          order: 3,
          content: `## 1. Định nghĩa

**Góc nội tiếp** là góc có đỉnh nằm trên đường tròn và hai cạnh chứa hai dây cung của đường tròn đó. Cung nằm bên trong góc gọi là **cung bị chắn**.

## 2. Định lí

> Trong một đường tròn, số đo góc nội tiếp bằng nửa số đo cung bị chắn.

## 3. Hệ quả

Trong một đường tròn:
- Các góc nội tiếp bằng nhau chắn các cung bằng nhau
- Các góc nội tiếp cùng chắn một cung thì bằng nhau
- Góc nội tiếp (nhỏ hơn hoặc bằng 90°) có số đo bằng nửa số đo góc ở tâm cùng chắn một cung
- **Góc nội tiếp chắn nửa đường tròn là góc vuông**`,
        },
        {
          title: "Bài 4. Góc tạo bởi tia tiếp tuyến và dây cung",
          order: 4,
          content: `## 1. Khái niệm

Góc tạo bởi tia tiếp tuyến và dây cung có đỉnh là tiếp điểm, một cạnh là tia tiếp tuyến, cạnh kia chứa dây cung.

## 2. Định lí

> Số đo góc tạo bởi tia tiếp tuyến và dây cung bằng nửa số đo cung bị chắn.

## 3. Hệ quả

Trong một đường tròn, góc tạo bởi tia tiếp tuyến và dây cung và góc nội tiếp cùng chắn một cung thì bằng nhau.`,
        },
        {
          title: "Bài 5. Góc có đỉnh ở bên trong, bên ngoài đường tròn",
          order: 5,
          content: `## 1. Góc có đỉnh ở bên trong đường tròn

> Số đo góc có đỉnh ở bên trong đường tròn bằng **nửa tổng** số đo hai cung bị chắn.

## 2. Góc có đỉnh ở bên ngoài đường tròn

> Số đo góc có đỉnh ở bên ngoài đường tròn bằng **nửa hiệu** số đo hai cung bị chắn.

**Ví dụ:** Góc ở bên trong chắn hai cung 80° và 40°: góc = (80+40)/2 = 60°. Góc ở bên ngoài chắn hai cung 100° và 30°: góc = (100-30)/2 = 35°`,
        },
        {
          title: "Bài 6. Cung chứa góc",
          order: 6,
          content: `## 1. Bài toán quỹ tích cung chứa góc

Với đoạn thẳng AB và góc α (0°<α<180°) cho trước, quỹ tích các điểm M nhìn đoạn AB dưới một góc α là **hai cung chứa góc α dựng trên đoạn AB** (hai cung đối xứng nhau qua AB).

**Đặc biệt:** Nếu α=90°, quỹ tích là đường tròn đường kính AB.

## 2. Cách vẽ cung chứa góc α

Dựng đường thẳng Ax tạo với AB góc α, dựng Ay⊥Ax tại A, dựng đường trung trực d của AB, gọi O là giao của Ay và d, vẽ cung AB tâm O bán kính OA nằm về một phía của AB.

## 3. Cách giải bài toán quỹ tích

**Bước 1:** Phần thuận: chứng minh điểm M có tính chất T thuộc hình H
**Bước 2:** Phần đảo: chứng minh mọi điểm thuộc H đều có tính chất T
**Bước 3:** Kết luận quỹ tích là hình H`,
        },
        {
          title: "Bài 7. Tứ giác nội tiếp",
          order: 7,
          content: `## 1. Khái niệm

Một tứ giác có bốn đỉnh nằm trên một đường tròn gọi là **tứ giác nội tiếp đường tròn** (gọi tắt là tứ giác nội tiếp).

## 2. Định lí thuận

> Trong một tứ giác nội tiếp, tổng số đo hai góc đối diện bằng 180°.

## 3. Định lí đảo

> Nếu một tứ giác có tổng số đo hai góc đối diện bằng 180° thì tứ giác đó nội tiếp được đường tròn.

**Dấu hiệu nhận biết tứ giác nội tiếp thường dùng:**
- Tổng hai góc đối bằng 180°
- Hai đỉnh kề nhau cùng nhìn cạnh chứa hai đỉnh còn lại dưới cùng một góc
- Có một góc ngoài tại một đỉnh bằng góc trong tại đỉnh đối diện`,
        },
        {
          title: "Bài 8. Đường tròn ngoại tiếp. Đường tròn nội tiếp",
          order: 8,
          content: `## 1. Định nghĩa

- Đường tròn đi qua tất cả các đỉnh của một đa giác gọi là đường tròn **ngoại tiếp** đa giác, và đa giác gọi là đa giác nội tiếp đường tròn.
- Đường tròn tiếp xúc với tất cả các cạnh của một đa giác gọi là đường tròn **nội tiếp** đa giác, và đa giác gọi là đa giác ngoại tiếp đường tròn.

## 2. Định lí

> Bất kì đa giác đều nào cũng có một và chỉ một đường tròn ngoại tiếp, có một và chỉ một đường tròn nội tiếp.

Tâm của hai đường tròn này trùng nhau và gọi là **tâm của đa giác đều**.

**Ví dụ:** Với đa giác đều n cạnh, bán kính đường tròn ngoại tiếp R, bán kính đường tròn nội tiếp r, cạnh a: có công thức lượng giác liên hệ a, R, r theo góc ở tâm 360°/n.`,
        },
        {
          title: "Bài 9. Độ dài đường tròn. Độ dài cung tròn",
          order: 9,
          content: `## 1. Công thức tính độ dài đường tròn

> **C = 2πR** (hoặc C = πd với d là đường kính)

trong đó R là bán kính, π ≈ 3,14

## 2. Công thức tính độ dài cung tròn

Độ dài cung tròn n° (bán kính R):

> **ℓ = (πRn)/180**

**Ví dụ:** Tính độ dài cung 60° của đường tròn bán kính 5cm: ℓ = π.5.60/180 = 5π/3 ≈ 5,24cm`,
        },
        {
          title: "Bài 10. Diện tích hình tròn. Diện tích hình quạt tròn",
          order: 10,
          content: `## 1. Công thức tính diện tích hình tròn

> **S = πR²**

## 2. Công thức tính diện tích hình quạt tròn

Hình quạt tròn bán kính R, cung n° có diện tích:

> **S = (πR²n)/360**  (hoặc S = ℓ.R/2 với ℓ là độ dài cung tương ứng)

**Ví dụ:** Tính diện tích hình quạt tròn bán kính 6cm, cung 60°: S = π.36.60/360 = 6π ≈ 18,84cm²`,
        },
      ],
      quiz: {
        title: "Ôn tập chương III (Hình học)",
        questions: [
          { text: "Góc ở tâm là góc có đỉnh:", options: JSON.stringify(["Trên đường tròn", "Trùng tâm đường tròn", "Ngoài đường tròn", "Bất kỳ"]), answer: "1" },
          { text: "Số đo cung nhỏ bằng:", options: JSON.stringify(["Số đo góc ở tâm chắn cung đó", "360° trừ góc ở tâm", "Nửa góc ở tâm", "Gấp đôi góc ở tâm"]), answer: "0" },
          { text: "Trong một đường tròn, hai cung bằng nhau thì căng:", options: JSON.stringify(["Hai dây không bằng nhau", "Hai dây bằng nhau", "Không liên quan", "Hai đường kính"]), answer: "1" },
          { text: "Góc nội tiếp là góc có đỉnh:", options: JSON.stringify(["Trùng tâm đường tròn", "Nằm trên đường tròn", "Nằm ngoài đường tròn", "Bất kỳ vị trí nào"]), answer: "1" },
          { text: "Số đo góc nội tiếp bằng:", options: JSON.stringify(["Số đo cung bị chắn", "Nửa số đo cung bị chắn", "Gấp đôi cung bị chắn", "180° trừ cung bị chắn"]), answer: "1" },
          { text: "Góc nội tiếp chắn nửa đường tròn là:", options: JSON.stringify(["Góc nhọn", "Góc tù", "Góc vuông", "Góc bẹt"]), answer: "2" },
          { text: "Góc tạo bởi tia tiếp tuyến và dây cung có số đo bằng:", options: JSON.stringify(["Cung bị chắn", "Nửa cung bị chắn", "Gấp đôi cung bị chắn", "180° trừ cung bị chắn"]), answer: "1" },
          { text: "Góc có đỉnh ở bên trong đường tròn có số đo bằng:", options: JSON.stringify(["Nửa hiệu hai cung bị chắn", "Nửa tổng hai cung bị chắn", "Tổng hai cung bị chắn", "Hiệu hai cung bị chắn"]), answer: "1" },
          { text: "Góc có đỉnh ở bên ngoài đường tròn có số đo bằng:", options: JSON.stringify(["Nửa tổng hai cung bị chắn", "Nửa hiệu hai cung bị chắn", "Tổng hai cung", "Hiệu hai cung"]), answer: "1" },
          { text: "Quỹ tích các điểm nhìn đoạn AB dưới góc 90° là:", options: JSON.stringify(["Đường thẳng qua A,B", "Đường tròn đường kính AB", "Hai cung chứa góc", "Đường trung trực AB"]), answer: "1" },
          { text: "Tứ giác nội tiếp có tổng hai góc đối diện bằng:", options: JSON.stringify(["90°", "180°", "270°", "360°"]), answer: "1" },
          { text: "Một tứ giác nội tiếp được đường tròn khi tổng hai góc đối bằng:", options: JSON.stringify(["90°", "180°", "360°", "120°"]), answer: "1" },
          { text: "Đa giác đều n cạnh có:", options: JSON.stringify(["Nhiều đường tròn ngoại tiếp", "Một đường tròn ngoại tiếp duy nhất", "Không có đường tròn ngoại tiếp", "Hai đường tròn ngoại tiếp"]), answer: "1" },
          { text: "Tâm đường tròn ngoại tiếp và nội tiếp của đa giác đều:", options: JSON.stringify(["Khác nhau", "Trùng nhau", "Không xác định", "Luôn cách nhau R/2"]), answer: "1" },
          { text: "Công thức tính độ dài đường tròn là:", options: JSON.stringify(["C=2πR", "C=πR²", "C=πR", "C=4πR"]), answer: "0" },
          { text: "Công thức tính độ dài cung tròn n° là:", options: JSON.stringify(["ℓ=πRn/180", "ℓ=πRn/360", "ℓ=2πRn", "ℓ=πR²n/360"]), answer: "0" },
          { text: "Công thức tính diện tích hình tròn là:", options: JSON.stringify(["S=2πR", "S=πR²", "S=πR", "S=πR²/2"]), answer: "1" },
          { text: "Công thức tính diện tích hình quạt tròn cung n° là:", options: JSON.stringify(["S=πR²n/360", "S=πR²n/180", "S=2πRn", "S=πRn/360"]), answer: "0" },
          { text: "Độ dài cung 60° bán kính 5cm bằng:", options: JSON.stringify(["5π/3 cm", "5π/6 cm", "5π cm", "10π/3 cm"]), answer: "0" },
          { text: "Các góc nội tiếp cùng chắn một cung thì:", options: JSON.stringify(["Bằng nhau", "Bù nhau", "Phụ nhau", "Không liên quan"]), answer: "0" },
        ],
      },
    },
    {
      title: "Chương IV (Hình học). Hình trụ. Hình nón. Hình cầu",
      order: 8,
      volume: 2,
      lessons: [
        {
          title: "Bài 1. Hình trụ. Diện tích xung quanh và thể tích hình trụ",
          order: 1,
          content: `## 1. Hình trụ

Khi quay hình chữ nhật ABCD một vòng quanh cạnh CD cố định, ta được một **hình trụ**. Hai đáy là hai hình tròn bằng nhau, DC là **đường cao**, AB (=CD) quét nên **mặt xung quanh**, mỗi vị trí của AB gọi là một **đường sinh**.

## 2. Diện tích xung quanh hình trụ

> **S_xq = 2πRh**

trong đó R là bán kính đáy, h là chiều cao. Diện tích toàn phần: **S_tp = 2πRh + 2πR²**

## 3. Thể tích hình trụ

> **V = πR²h**

**Ví dụ:** Hình trụ có bán kính đáy 3cm, chiều cao 8cm: S_xq=2π.3.8=48π cm²; V=π.9.8=72π cm³`,
        },
        {
          title: "Bài 2. Hình nón. Hình nón cụt. Diện tích và thể tích",
          order: 2,
          content: `## 1. Hình nón

Khi quay tam giác vuông AOC một vòng quanh cạnh góc vuông OA cố định, ta được một **hình nón**. O là tâm đáy, A là **đỉnh**, OA là **đường cao**, AC là **đường sinh** (kí hiệu l).

## 2. Diện tích hình nón

- Diện tích xung quanh: **S_xq = πRl**
- Diện tích toàn phần: **S_tp = πRl + πR²**

## 3. Thể tích hình nón

> **V = (1/3)πR²h**

## 4. Hình nón cụt

Cắt hình nón bởi một mặt phẳng song song với đáy, phần hình nón nằm giữa mặt phẳng đó và đáy gọi là **hình nón cụt**.

- Diện tích xung quanh hình nón cụt: **S_xq = π(R₁+R₂)l**
- Thể tích hình nón cụt: **V = (1/3)πh(R₁²+R₂²+R₁R₂)**

**Ví dụ:** Hình nón có bán kính đáy 5cm, đường sinh 13cm ⟹ đường cao h=√(13²-5²)=12cm. V=(1/3)π.25.12=100π cm³`,
        },
        {
          title: "Bài 3. Hình cầu. Diện tích mặt cầu và thể tích hình cầu",
          order: 3,
          content: `## 1. Hình cầu

Khi quay nửa hình tròn tâm O bán kính R một vòng quanh đường kính cố định, ta được một **hình cầu**. O gọi là **tâm**, R là **bán kính** của hình cầu.

## 2. Diện tích mặt cầu

> **S = 4πR²**

## 3. Thể tích hình cầu

> **V = (4/3)πR³**

**Ví dụ:** Hình cầu bán kính 3cm: S=4π.9=36π cm²; V=(4/3)π.27=36π cm³

## 4. Ứng dụng thực tế

Các bài toán thường liên hệ hình trụ, hình nón, hình cầu trong đời sống (bồn chứa hình trụ, phễu hình nón, quả bóng hình cầu...) và yêu cầu tính diện tích vật liệu hoặc dung tích chứa.`,
        },
      ],
      quiz: {
        title: "Ôn tập chương IV (Hình học)",
        questions: [
          { text: "Hình trụ được tạo ra khi quay hình chữ nhật quanh:", options: JSON.stringify(["Một đường chéo", "Một cạnh cố định", "Một điểm", "Một đường trung bình"]), answer: "1" },
          { text: "Công thức diện tích xung quanh hình trụ là:", options: JSON.stringify(["2πRh", "πR²h", "πRh", "4πR²"]), answer: "0" },
          { text: "Công thức thể tích hình trụ là:", options: JSON.stringify(["πR²h", "2πRh", "(1/3)πR²h", "4πR³/3"]), answer: "0" },
          { text: "Hình nón được tạo ra khi quay tam giác vuông quanh:", options: JSON.stringify(["Cạnh huyền", "Một cạnh góc vuông cố định", "Đường cao", "Trung tuyến"]), answer: "1" },
          { text: "Công thức diện tích xung quanh hình nón là:", options: JSON.stringify(["πRl", "2πRl", "πR²", "πRh"]), answer: "0" },
          { text: "Công thức thể tích hình nón là:", options: JSON.stringify(["πR²h", "(1/3)πR²h", "2πRh", "(4/3)πR³"]), answer: "1" },
          { text: "Đường sinh của hình nón kí hiệu là:", options: JSON.stringify(["h", "R", "l", "d"]), answer: "2" },
          { text: "Hình nón cụt được tạo bằng cách:", options: JSON.stringify(["Cắt hình nón bởi mặt phẳng song song đáy", "Cắt hình trụ", "Quay hình chữ nhật", "Ghép hai hình nón"]), answer: "0" },
          { text: "Công thức thể tích hình nón cụt là:", options: JSON.stringify(["(1/3)πh(R1²+R2²+R1R2)", "πR²h", "(1/3)πR²h", "2πRh"]), answer: "0" },
          { text: "Hình cầu được tạo ra khi quay nửa hình tròn quanh:", options: JSON.stringify(["Một dây cung", "Đường kính cố định", "Một điểm", "Tiếp tuyến"]), answer: "1" },
          { text: "Công thức diện tích mặt cầu là:", options: JSON.stringify(["4πR²", "πR²", "2πR²", "(4/3)πR³"]), answer: "0" },
          { text: "Công thức thể tích hình cầu là:", options: JSON.stringify(["4πR²", "(4/3)πR³", "πR²h", "(1/3)πR³"]), answer: "1" },
          { text: "Hình trụ bán kính 3cm, cao 8cm có thể tích:", options: JSON.stringify(["72π cm³", "48π cm³", "24π cm³", "96π cm³"]), answer: "0" },
          { text: "Hình nón bán kính 5cm, đường sinh 13cm có đường cao:", options: JSON.stringify(["12cm", "8cm", "18cm", "10cm"]), answer: "0" },
          { text: "Hình cầu bán kính 3cm có diện tích mặt cầu:", options: JSON.stringify(["36π cm²", "9π cm²", "27π cm²", "18π cm²"]), answer: "0" },
          { text: "Diện tích toàn phần của hình trụ bằng:", options: JSON.stringify(["S_xq + 2πR²", "S_xq + πR²", "2.S_xq", "S_xq - 2πR²"]), answer: "0" },
          { text: "Diện tích toàn phần của hình nón bằng:", options: JSON.stringify(["πRl + πR²", "πRl", "2πRl", "πRl - πR²"]), answer: "0" },
          { text: "Trong hình trụ, DC (cạnh quay quanh) gọi là:", options: JSON.stringify(["Đường sinh", "Đường cao", "Bán kính", "Đường chéo"]), answer: "1" },
          { text: "Diện tích xung quanh hình nón cụt với hai bán kính R1, R2 là:", options: JSON.stringify(["π(R1+R2)l", "π(R1-R2)l", "πR1.R2.l", "2π(R1+R2)l"]), answer: "0" },
          { text: "Thể tích hình cầu bán kính R gấp mấy lần thể tích hình trụ cùng bán kính R, chiều cao R?", options: JSON.stringify(["4/3 lần", "2 lần", "1/3 lần", "3 lần"]), answer: "0" },
        ],
      },
    },
  ],
};
