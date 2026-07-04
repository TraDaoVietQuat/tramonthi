# Lối Nghiên Cứu — E-learning Phương pháp NCKH

Web app Next.js + Prisma + SQLite, chạy local. Landing page và kiến trúc dữ liệu cho khóa học "Phương pháp Nghiên cứu khoa học" dành cho sinh viên đại học.

## Chạy local (trên máy bạn, không phải trên sandbox)

```bash
# 1. Cài dependency
npm install

# 2. Tạo file .env từ mẫu, rồi tạo database SQLite
cp .env.example .env
npx prisma migrate dev --name init

# 3. Chạy dev server
npm run dev
```

Mở http://localhost:3000.

> Lưu ý: project này được dựng trong môi trường sandbox có giới hạn mạng nên
> `node_modules` CHƯA được cài đầy đủ. Khi tải về máy, chạy `npm install` là
> nó sẽ tự cài bình thường (chỉ cần Node.js 18+).

## Cấu trúc

- `prisma/schema.prisma` — model: User, Course, Module, Lesson, Enrollment, Progress, Quiz, Question, Attempt, SurveyResponse (khảo sát pre/post-test cho phần NCKH).
- `src/app/page.tsx` — landing page giới thiệu khóa học (áp dụng quy tắc thiết kế từ skill `design-taste-frontend` — xem `.agents/skills/design-taste-frontend/SKILL.md`).
- `src/lib/prisma.ts` — Prisma client singleton.

## Khi cần deploy/bán thật

1. Đổi `provider = "sqlite"` trong `prisma/schema.prisma` thành `"postgresql"`.
2. Đổi `DATABASE_URL` trong `.env` sang connection string Postgres (Railway/Supabase/Neon).
3. `npx prisma migrate deploy`.
4. Deploy lên Vercel (kết nối repo, set biến môi trường `DATABASE_URL`).

## Việc tiếp theo

- [ ] Trang đăng nhập/đăng ký (NextAuth.js)
- [ ] Trang học bài (đọc `Lesson`, ghi `Progress`)
- [ ] Trang làm quiz (`Quiz`, `Question`, `Attempt`)
- [ ] Form khảo sát pre/post-test (`SurveyResponse`)
- [ ] Dashboard giảng viên (thống kê tiến độ, xuất CSV)
