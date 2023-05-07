import Link from "next/link";
import Wheel from "@/components/Wheel";
import { apiUrl } from "@/constants/api";
import { zMissions } from "./missions/type";

export default async function Page() {
  const missions = await getMissions();
  // console.log(missions);

  return (
    <main>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <section className="flex justify-center gap-6 sm:gap-10 md:gap-16">
            <div className="xl:w-8/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
              <p className="text-pink-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
                雑談のネタが思いつからないからと言ってWebサービスに頼ろうとする雑なあなたへ…
              </p>
            </div>
          </section>
          <section className="flex justify-center">
            <div className="w-[600px] h-[600px]">
              <Wheel missions={missions} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

async function getMissions() {
  const res = await fetch(`${apiUrl}/missions`, { cache: "no-store" });
  const data = await res.json();
  console.log(data);
  const missions = zMissions.parse(data);
  return missions;
}
