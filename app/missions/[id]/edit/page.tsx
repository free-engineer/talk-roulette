import Link from "next/link";
import { Metadata } from "next/types";
import { getMission } from "../getMission";
import EditMission from "./EditMission";
export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const mission = await getMission(params.id);
  return { title: mission.title };
}

export default async function Page({ params }: { params: { id: string } }) {
  const mission = await getMission(params.id);
  return (
    <main className="mx-2 sm:mx-4">
      <Link
        href={`/notes/${params.id}`}
        className="inline-block focus-visible:ring ring-pink-300 text-gray-500 hover:text-pink-500 active:text-pink-600 text-s md:text-base font-semibold rounded-lg outline-none transition duration-100"
      >
        ← back
      </Link>
      <h2 className="my-4 text-gray-400 text-xs">Edit Mission</h2>
      <EditMission item={mission} />
    </main>
  );
}
