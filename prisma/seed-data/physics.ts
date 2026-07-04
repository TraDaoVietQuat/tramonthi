import type { CourseData } from "./types";

// Nội dung theo SGK Vật Lý 10 – Kết nối tri thức 2022
export const PHYSICS_COURSE: CourseData = {
  title: "Vật Lý 10 – Cơ học và Nhiệt học",
  slug: "vat-ly-10",
  subject: "physics",
  grade: "10",
  description:
    "Khóa học Vật Lý lớp 10 theo chương trình THPT mới: Động học chất điểm, Động lực học (3 định luật Newton), Các định luật bảo toàn, Nhiệt học — theo SGK Kết nối tri thức 2022.",
  published: true,
  modules: [
    {
      title: "Chương 1: Động học chất điểm",
      order: 1,
      lessons: [
        {
          title: "Chuyển động thẳng đều và thẳng biến đổi đều",
          order: 1,
          content: `## Chuyển động thẳng đều

### Định nghĩa
Chuyển động thẳng đều là chuyển động có quỹ đạo là đường thẳng và vận tốc **không đổi** theo thời gian.

### Phương trình chuyển động
$$x = x_0 + vt$$

Trong đó:
- x₀: tọa độ ban đầu (m)
- v: vận tốc (m/s), v = const
- t: thời gian (s)

### Đồ thị
- **Đồ thị v-t**: đường thẳng song song trục Ot
- **Đồ thị x-t**: đường thẳng (hệ số góc = v)

---

## Chuyển động thẳng biến đổi đều

### Định nghĩa
Chuyển động trên đường thẳng có **gia tốc không đổi** (a = const ≠ 0).

### Gia tốc
$$a = \\frac{\\Delta v}{\\Delta t} = \\frac{v - v_0}{t} \\quad (\\text{m/s}^2)$$

- **a > 0**: vật tăng tốc (a cùng chiều v)
- **a < 0**: vật giảm tốc (a ngược chiều v)

### Hệ phương trình CĐ thẳng BĐĐ
| Công thức | Ý nghĩa |
|-----------|---------|
| v = v₀ + at | Vận tốc tại thời điểm t |
| x = x₀ + v₀t + ½at² | Tọa độ tại thời điểm t |
| s = v₀t + ½at² | Quãng đường đi được |
| v² − v₀² = 2as | Liên hệ v, v₀, a, s (không có t) |

### Rơi tự do
Rơi tự do là trường hợp đặc biệt CĐ nhanh dần đều:
- v₀ = 0; a = g ≈ **9,8 m/s²** (thường lấy 10 m/s²)
- v = gt; h = ½gt²; v² = 2gh`,
        },
        {
          title: "Chuyển động tròn đều",
          order: 2,
          content: `## Chuyển động tròn đều

### Đại lượng đặc trưng

| Đại lượng | Công thức | Đơn vị |
|-----------|-----------|--------|
| Tần số f | Số vòng/giây | Hz = vòng/s |
| Chu kỳ T | T = 1/f | s |
| Vận tốc góc ω | ω = 2πf = 2π/T | rad/s |
| Vận tốc dài v | v = ωr = 2πr/T | m/s |
| Gia tốc hướng tâm aₕₜ | aₕₜ = v²/r = ω²r | m/s² |

### Đặc điểm
- Quỹ đạo: đường tròn bán kính r
- Tốc độ dài v = const, nhưng **hướng vận tốc thay đổi liên tục**
- Gia tốc hướng tâm **luôn hướng vào tâm**, vuông góc với v

### Ví dụ
Kim đồng hồ phút: T = 60 min = 3600 s
- ω = 2π/3600 ≈ 1,745 × 10⁻³ rad/s
- Nếu r = 10 cm = 0,1 m: v = ωr ≈ 1,745 × 10⁻⁴ m/s

### So sánh CĐ thẳng đều và CĐ tròn đều

| | CĐ thẳng đều | CĐ tròn đều |
|---|-------------|------------|
| Quỹ đạo | Đường thẳng | Đường tròn |
| Vận tốc | Không đổi cả độ lớn và hướng | Không đổi độ lớn, đổi hướng |
| Gia tốc | a = 0 | aₕₜ ≠ 0, hướng vào tâm |`,
        },
      ],
      quiz: {
        title: "Quiz 1 – Động học chất điểm",
        questions: [
          {
            text: "Một vật CĐ thẳng đều với v = 5 m/s. Sau 10 s, vật đi được quãng đường:",
            options: JSON.stringify(["2 m", "50 m", "15 m", "0,5 m"]),
            answer: "1",
          },
          {
            text: "Một vật rơi tự do từ độ cao h = 20 m (g = 10 m/s²). Vận tốc khi chạm đất là:",
            options: JSON.stringify(["10 m/s", "20 m/s", "200 m/s", "2 m/s"]),
            answer: "1",
          },
          {
            text: "Công thức nào liên hệ v, v₀, a, s mà KHÔNG chứa t?",
            options: JSON.stringify(["v = v₀ + at", "s = v₀t + ½at²", "v² − v₀² = 2as", "x = x₀ + v₀t + ½at²"]),
            answer: "2",
          },
          {
            text: "Gia tốc hướng tâm trong CĐ tròn đều có hướng:",
            options: JSON.stringify(["Tiếp tuyến với quỹ đạo", "Hướng ra ngoài tâm", "Hướng vào tâm", "Vuông góc với mặt phẳng quỹ đạo"]),
            answer: "2",
          },
          {
            text: "Kim đồng hồ giây có T = 60 s. Vận tốc góc ω của kim giây là:",
            options: JSON.stringify(["2π/60 rad/s", "60/2π rad/s", "π/30 rad/s", "Cả A và C đúng"]),
            answer: "3",
          },
        ],
      },
    },
    {
      title: "Chương 2: Động lực học – Ba định luật Newton",
      order: 2,
      lessons: [
        {
          title: "Ba định luật Newton",
          order: 1,
          content: `## Ba định luật Newton

### Định luật I Newton (Quán tính)
> Một vật đang đứng yên sẽ tiếp tục đứng yên, hoặc đang chuyển động thẳng đều sẽ tiếp tục chuyển động thẳng đều, nếu **không có lực nào tác dụng** vào nó hoặc các lực tác dụng **cân bằng nhau**.

**Quán tính**: xu hướng của vật bảo toàn trạng thái chuyển động.

---

### Định luật II Newton (F = ma)
> Gia tốc của một vật tỉ lệ thuận với lực tổng hợp tác dụng vào nó và tỉ lệ nghịch với khối lượng.

$$\\vec{a} = \\frac{\\vec{F}_{\\text{tổng hợp}}}{m} \\quad \\Leftrightarrow \\quad \\vec{F} = m\\vec{a}$$

- Đơn vị: F (N), m (kg), a (m/s²)
- **1 N** = lực làm vật 1 kg tăng tốc 1 m/s²

---

### Định luật III Newton (Phản lực)
> Khi vật A tác dụng lực lên vật B, thì vật B tác dụng lại vật A một lực **bằng độ lớn nhưng ngược chiều**.

$$\\vec{F}_{AB} = -\\vec{F}_{BA}$$

**Lưu ý:** Cặp lực này **tác dụng vào hai vật khác nhau** nên **không cân bằng nhau**.

---

### Ví dụ áp dụng
Vật m = 2 kg, chịu lực kéo F = 10 N, ma sát f = 2 N.
- F_th = F − f = 10 − 2 = 8 N
- a = F_th/m = 8/2 = **4 m/s²**`,
        },
        {
          title: "Các lực cơ học thường gặp",
          order: 2,
          content: `## Các lực cơ học thường gặp

### 1. Trọng lực (P)
$$\\vec{P} = m\\vec{g} \\quad (g \\approx 9{,}8 \\text{ m/s}^2 \\approx 10 \\text{ m/s}^2)$$
- Hướng: thẳng đứng, **hướng xuống** (về phía tâm Trái Đất)
- Điểm đặt: trọng tâm của vật

### 2. Phản lực pháp tuyến (N)
- Vuông góc với mặt tiếp xúc, **hướng ra** khỏi mặt tiếp xúc
- Vật nằm ngang: N = P = mg
- Vật trên mặt nghiêng góc α: N = mg cosα

### 3. Lực ma sát
**Ma sát trượt (fₜ):** Fₜ = μₜ.N
**Ma sát nghỉ (fₙ):** fₙ ≤ μₙ.N (luôn > μₜ.N)

Trong đó μₜ, μₙ là hệ số ma sát trượt / nghỉ.

### 4. Lực đàn hồi – Định luật Hooke
$$F_{\\text{đh}} = k|\\Delta l|$$

- k: độ cứng lò xo (N/m)
- Δl: độ biến dạng (m)
- Hướng: ngược chiều biến dạng

### 5. Lực hướng tâm
$$F_{\\text{ht}} = \\frac{mv^2}{r} = m\\omega^2 r$$

Lực hướng tâm không phải lực mới mà là **hợp lực** của các lực thực tế tác dụng lên vật, có hướng vào tâm.`,
        },
      ],
      quiz: {
        title: "Quiz 2 – Định luật Newton và các lực",
        questions: [
          {
            text: "Phát biểu nào ĐÚNG về Định luật I Newton?",
            options: JSON.stringify([
              "Vật luôn có xu hướng đứng yên",
              "Vật giữ nguyên trạng thái nếu không có lực hoặc các lực cân bằng",
              "Vật chỉ chuyển động khi có lực tác dụng",
              "Khối lượng lớn thì quán tính nhỏ",
            ]),
            answer: "1",
          },
          {
            text: "Vật m = 5 kg, lực tổng hợp F = 20 N. Gia tốc của vật là:",
            options: JSON.stringify(["100 m/s²", "4 m/s²", "25 m/s²", "0,25 m/s²"]),
            answer: "1",
          },
          {
            text: "Cặp lực theo Định luật III Newton có đặc điểm:",
            options: JSON.stringify([
              "Cùng điểm đặt, ngược chiều",
              "Khác điểm đặt (hai vật khác nhau), bằng độ lớn, ngược chiều",
              "Cùng điểm đặt, cùng chiều",
              "Luôn cân bằng nhau",
            ]),
            answer: "1",
          },
          {
            text: "Lực đàn hồi lò xo tính bằng công thức:",
            options: JSON.stringify(["F = mv", "F = k.Δl", "F = ma", "F = mv²/r"]),
            answer: "1",
          },
          {
            text: "Vật trên mặt phẳng ngang, phản lực N bằng:",
            options: JSON.stringify(["0", "mg/2", "mg", "2mg"]),
            answer: "2",
          },
        ],
      },
    },
    {
      title: "Chương 3: Các định luật bảo toàn",
      order: 3,
      lessons: [
        {
          title: "Động lượng và định luật bảo toàn động lượng",
          order: 1,
          content: `## Động lượng (Momentum)

### Định nghĩa
$$\\vec{p} = m\\vec{v} \\quad (\\text{kg·m/s})$$

Động lượng là đại lượng **vectơ**, cùng hướng với vận tốc.

### Định lý biến thiên động lượng
$$\\vec{F} \\cdot \\Delta t = \\Delta \\vec{p} = m\\vec{v} - m\\vec{v_0}$$

F.Δt gọi là **xung lực** (N·s).

---

## Định luật bảo toàn động lượng

**Hệ kín** (không có ngoại lực hoặc ngoại lực bằng 0):
$$\\vec{p}_{\\text{trước}} = \\vec{p}_{\\text{sau}}$$

$$m_1\\vec{v_1} + m_2\\vec{v_2} = m_1\\vec{v_1'} + m_2\\vec{v_2'}$$

### Ứng dụng: Va chạm mềm (hai vật dính vào nhau)
$$m_1v_1 + m_2v_2 = (m_1 + m_2)V$$

**Ví dụ:** Viên đạn m₁ = 10 g = 0,01 kg, v₁ = 400 m/s bắn vào khúc gỗ m₂ = 1,99 kg đứng yên, dính vào nhau.
- 0,01×400 + 0 = (0,01 + 1,99)×V
- V = 4/2 = **2 m/s**`,
        },
        {
          title: "Công, công suất, năng lượng cơ học",
          order: 2,
          content: `## Công và Công suất

### Công của lực F
$$A = F \\cdot s \\cdot \\cos\\alpha$$

- F: độ lớn lực (N)
- s: quãng đường (m)
- α: góc giữa F và chiều chuyển động
- Đơn vị: J (Joule)

**Lưu ý:**
- α = 0°: A = F.s (lực cùng chiều chuyển động, A > 0)
- α = 90°: A = 0 (lực vuông góc chuyển động, không sinh công)
- α = 180°: A = −F.s (lực ngược chiều chuyển động, A < 0)

### Công suất
$$P = \\frac{A}{t} = F \\cdot v \\quad (\\text{W = J/s})$$

---

## Năng lượng cơ học

### Động năng
$$W_đ = \\frac{1}{2}mv^2 \\quad (\\text{J})$$

**Định lý động năng:** A_tổng = ΔW_đ = W_đ₂ − W_đ₁

### Thế năng trọng trường
$$W_t = mgh \\quad (\\text{J})$$
(chọn mốc thế năng tại mặt đất h = 0)

### Cơ năng và Định luật bảo toàn cơ năng
$$W = W_đ + W_t = \\frac{1}{2}mv^2 + mgh$$

Nếu **chỉ có trọng lực** (không có lực cản):
$$W = \\text{const} \\quad \\Leftrightarrow \\quad \\frac{1}{2}mv_1^2 + mgh_1 = \\frac{1}{2}mv_2^2 + mgh_2$$`,
        },
      ],
      quiz: {
        title: "Quiz 3 – Định luật bảo toàn",
        questions: [
          {
            text: "Vật m = 2 kg chuyển động v = 3 m/s. Động lượng của vật là:",
            options: JSON.stringify(["1,5 kg·m/s", "6 kg·m/s", "9 kg·m/s", "0,67 kg·m/s"]),
            answer: "1",
          },
          {
            text: "Định luật bảo toàn động lượng áp dụng được khi:",
            options: JSON.stringify(["Hệ có nhiều vật", "Hệ là hệ kín (ngoại lực bằng 0)", "Vật chuyển động thẳng đều", "Vật đứng yên"]),
            answer: "1",
          },
          {
            text: "Công của lực F bằng 0 khi:",
            options: JSON.stringify(["F = 0", "α = 90° (lực vuông góc chuyển động)", "v = 0", "Cả A, B, C đều đúng"]),
            answer: "3",
          },
          {
            text: "Vật m = 1 kg, v = 4 m/s. Động năng của vật là:",
            options: JSON.stringify(["4 J", "8 J", "16 J", "2 J"]),
            answer: "1",
          },
          {
            text: "Khi vật rơi tự do (bỏ qua sức cản không khí), đại lượng nào bảo toàn?",
            options: JSON.stringify(["Động năng", "Thế năng", "Cơ năng (W_đ + W_t)", "Động lượng"]),
            answer: "2",
          },
        ],
      },
    },
    {
      title: "Chương 4: Động lượng và Va chạm",
      order: 4,
      lessons: [
        {
          title: "Động lượng và Xung lượng",
          order: 7,
          content: `## Động lượng

### 1. Định nghĩa động lượng
> **p⃗** = m·**v⃗** (kg·m/s)

Động lượng là đại lượng vectơ, cùng chiều với vận tốc.

### 2. Xung lượng của lực
> **J⃗** = **F⃗**·Δt (N·s)

### 3. Định lý động lượng
> **F⃗**·Δt = Δ**p⃗** = m·**v⃗**₂ − m·**v⃗**₁

Ứng dụng: giải thích tại sao đai an toàn, túi khí giảm chấn thương (tăng Δt → giảm F).

### 4. Bảo toàn động lượng
Hệ cô lập (không có lực ngoài): **p⃗**_tổng = const

> m₁**v⃗**₁ + m₂**v⃗**₂ = m₁**v⃗**₁' + m₂**v⃗**₂'`,
        },
        {
          title: "Va chạm đàn hồi và không đàn hồi",
          order: 8,
          content: `## Các loại va chạm

### 1. Va chạm hoàn toàn đàn hồi
Bảo toàn cả **động lượng** và **động năng**:
> m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'
> ½m₁v₁² + ½m₂v₂² = ½m₁v₁'² + ½m₂v₂'²

Kết quả cho va chạm trực diện (m₂ đứng yên):
> v₁' = (m₁−m₂)v₁/(m₁+m₂); v₂' = 2m₁v₁/(m₁+m₂)

### 2. Va chạm hoàn toàn không đàn hồi (dính nhau)
Hai vật dính vào nhau sau va chạm:
> m₁v₁ + m₂v₂ = (m₁+m₂)v'
> v' = (m₁v₁ + m₂v₂)/(m₁+m₂)

Động năng bị mất đi dưới dạng nhiệt, âm, biến dạng.

### 3. Ứng dụng: Súng giật và Tên lửa
Bảo toàn động lượng cho hệ súng+đạn ban đầu đứng yên:
> 0 = m_đạn·v_đạn + M_súng·V_súng → V_súng = −m_đạn·v_đạn/M_súng`,
        },
        {
          title: "Chuyển động bằng phản lực",
          order: 9,
          content: `## Chuyển động phản lực

### 1. Nguyên lý
Dựa trên bảo toàn động lượng. Khi hệ phóng vật chất ra một phía, hệ chuyển động theo chiều ngược lại.

### 2. Tên lửa
- Động cơ tên lửa đốt nhiên liệu → khí thoát ra phía sau (momentum lớn)
- Tên lửa tiến về phía trước

### 3. Công thức Tsiolkovsky
> Δv = v_khí · ln(m₀/m_f)
- v_khí: tốc độ thoát của khí
- m₀: khối lượng ban đầu; m_f: khối lượng sau khi đốt nhiên liệu

### 4. Ví dụ thực tế
- Tên lửa vũ trụ, máy bay phản lực
- Súng phun nước → người bơi lùi
- Bóng bay xả hơi → bay theo chiều ngược`,
        },
      ],
      quiz: {
        title: "Quiz 4 – Động lượng và Va chạm",
        questions: [
          {
            text: "Động lượng của vật khối lượng 2 kg chuyển động với v = 5 m/s là:",
            options: JSON.stringify(["2,5 kg·m/s", "10 kg·m/s", "7 kg·m/s", "0,4 kg·m/s"]),
            answer: "1",
          },
          {
            text: "Trong va chạm hoàn toàn không đàn hồi, đại lượng nào được bảo toàn?",
            options: JSON.stringify(["Động năng", "Động lượng", "Cả hai", "Không cái nào"]),
            answer: "1",
          },
          {
            text: "Định lý động lượng phát biểu: xung lượng của lực bằng:",
            options: JSON.stringify(["Động năng", "Thế năng", "Độ biến thiên động lượng", "Công của lực"]),
            answer: "2",
          },
          {
            text: "Vì sao đai an toàn giảm chấn thương khi tai nạn?",
            options: JSON.stringify([
              "Tăng lực tác dụng",
              "Tăng thời gian tác dụng lực → giảm lực",
              "Giảm khối lượng",
              "Tăng vận tốc",
            ]),
            answer: "1",
          },
          {
            text: "Tên lửa hoạt động dựa trên nguyên lý:",
            options: JSON.stringify(["Bảo toàn năng lượng", "Bảo toàn động lượng", "Định luật Archimedes", "Lực ma sát"]),
            answer: "1",
          },
        ],
      },
    },
    {
      title: "Chương 5: Nhiệt học",
      order: 5,
      lessons: [
        {
          title: "Thuyết động học phân tử và Nhiệt độ",
          order: 10,
          content: `## Thuyết động học phân tử

### 1. Nội dung chính
- Vật chất cấu tạo từ các phân tử (nguyên tử) rất nhỏ
- Các phân tử chuyển động không ngừng (chuyển động nhiệt)
- Nhiệt độ càng cao → phân tử chuyển động càng nhanh
- Giữa các phân tử tồn tại lực hút và lực đẩy

### 2. Nhiệt độ tuyệt đối
> T (K) = t (°C) + 273

Thang Kelvin: 0 K = nhiệt độ tuyệt đối, phân tử dừng chuyển động.

### 3. Hiện tượng khuếch tán
Phân tử chất này xâm nhập vào giữa các phân tử chất khác.
- Tốc độ khuếch tán tăng khi nhiệt độ tăng

### 4. Chuyển động Brown
Chuyển động ngẫu nhiên của các hạt nhỏ trong môi trường chất lỏng/khí → bằng chứng về sự tồn tại và chuyển động của phân tử.`,
        },
        {
          title: "Nội năng và Nhiệt lượng",
          order: 11,
          content: `## Nội năng

### 1. Nội năng (U)
Tổng động năng và thế năng của tất cả phân tử cấu tạo nên vật.
- Nội năng phụ thuộc nhiệt độ và thể tích
- Nội năng tăng khi nhiệt độ tăng

### 2. Nhiệt lượng (Q)
Phần nội năng vật nhận được hoặc mất đi trong quá trình truyền nhiệt:
> Q = mcΔt (J)
- m: khối lượng (kg); c: nhiệt dung riêng (J/kg·K); Δt = t₂ − t₁

| Chất | c (J/kg·K) |
|------|-----------|
| Nước | 4200 |
| Sắt | 460 |
| Nhôm | 880 |
| Đồng | 380 |

### 3. Nguyên lý truyền nhiệt
- Nhiệt tự truyền từ vật nóng hơn sang vật lạnh hơn
- Khi cân bằng nhiệt: Q_tỏa = Q_thu`,
        },
        {
          title: "Các nguyên lý Nhiệt động lực học",
          order: 12,
          content: `## Nhiệt động lực học

### 1. Nguyên lý I – Bảo toàn năng lượng
> ΔU = Q + A
- ΔU: độ tăng nội năng
- Q: nhiệt lượng hệ nhận (Q > 0: nhận; Q < 0: tỏa)
- A: công hệ nhận (A > 0: nhận; A < 0: thực hiện)

### 2. Các quá trình đặc biệt
| Quá trình | Đặc điểm | Nguyên lý I |
|-----------|----------|-------------|
| Đẳng nhiệt | ΔT = 0, ΔU = 0 | Q = −A |
| Đẳng tích | ΔV = 0, A = 0 | ΔU = Q |
| Đoạn nhiệt | Q = 0 | ΔU = A |

### 3. Nguyên lý II
Nhiệt không thể tự chuyển từ vật lạnh sang vật nóng.
Không thể chế tạo động cơ có hiệu suất 100%.

### 4. Hiệu suất máy nhiệt
> η = A/Q₁ = (Q₁ − Q₂)/Q₁ < 1

(Q₁: nhiệt nhận từ nguồn nóng; Q₂: nhiệt tỏa ra nguồn lạnh)`,
        },
      ],
      quiz: {
        title: "Quiz 5 – Nhiệt học",
        questions: [
          {
            text: "0°C bằng bao nhiêu Kelvin?",
            options: JSON.stringify(["0 K", "100 K", "273 K", "373 K"]),
            answer: "2",
          },
          {
            text: "Nhiệt lượng cần để đun 2 kg nước từ 20°C lên 100°C (c=4200 J/kg·K) là:",
            options: JSON.stringify(["336 000 J", "168 000 J", "672 000 J", "84 000 J"]),
            answer: "0",
          },
          {
            text: "Nguyên lý I nhiệt động lực học phát biểu:",
            options: JSON.stringify([
              "Nhiệt không tự truyền từ lạnh sang nóng",
              "ΔU = Q + A",
              "Hiệu suất máy nhiệt < 100%",
              "Nội năng tỉ lệ nghịch với nhiệt độ",
            ]),
            answer: "1",
          },
          {
            text: "Chuyển động Brown là bằng chứng về:",
            options: JSON.stringify([
              "Sóng điện từ",
              "Chuyển động nhiệt của phân tử",
              "Trọng lực",
              "Lực điện từ",
            ]),
            answer: "1",
          },
          {
            text: "Quá trình đẳng tích có đặc điểm:",
            options: JSON.stringify(["Q = 0", "A = 0", "ΔU = 0", "ΔT = 0"]),
            answer: "1",
          },
        ],
      },
    },
  ],
};
