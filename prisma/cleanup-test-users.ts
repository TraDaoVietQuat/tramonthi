import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.user.deleteMany({
    where: { email: { contains: "test-prod-register-" } },
  });
  console.log(`Đã xóa ${result.count} tài khoản test.`);
}

main()
  .catch((e) => {
    console.error("Lỗi:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
