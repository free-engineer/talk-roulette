import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // delete all
  await prisma.metadata.deleteMany();
  await prisma.mission.deleteMany();

  // seeding

  // (metadata)
  const metadatas: Prisma.MetadataCreateInput[] = [
    {
      key: "version",
      value: "13.2.1",
    },
    {
      key: "faq",
      value: "FAQs",
    },
    {
      key: "tos",
      value: "Terms of Service",
    },
  ];
  for (const metadata of metadatas) {
    await prisma.metadata.create({
      data: metadata,
    });
  }

  // (Mission)
  const missions: Prisma.MissionCreateInput[] = [
    {
      title: "恋の話",
      body: "略してコイバナ。人に言えないとっておきなやつをお願いします！",
    },
    {
      title: "情けない話",
      body: "せつないやつをゼヒ！",
    },
  ];
  for (const mission of missions) {
    await prisma.mission.create({
      data: mission,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
