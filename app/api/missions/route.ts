import { zUpsertMission } from "@/app/missions/type";
import { prisma } from "@/globals/db";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const missions = await prisma.mission.findMany();
  return NextResponse.json(missions);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const parcedData = zUpsertMission.parse(data);
  const mission = await prisma.mission.create({
    data: { title: parcedData.title, body: parcedData.body },
  });
  return new NextResponse(`${mission.id}`, { status: 201 });
}
