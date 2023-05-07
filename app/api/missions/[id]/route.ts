import { zUpsertMission } from "@/app/missions/type";
import { prisma } from "@/globals/db";
import { NextRequest, NextResponse } from "next/server";

// read
export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const mission = await prisma.mission.findUnique({
    where: { id: Number(params.id) },
  });
  if (mission === null) {
    return new NextResponse(null, { status: 404 });
  }
  return NextResponse.json(mission);
}

// update
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  const parcedData = zUpsertMission.parse(data);
  const mission = await prisma.mission.update({
    where: { id: Number(params.id) },
    data: { title: parcedData.title, body: parcedData.body },
  });
  return new NextResponse(null, { status: 204 });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const mission = await prisma.mission.delete({
    where: { id: Number(params.id) },
  });
  return new NextResponse(null, { status: 204 });
}
