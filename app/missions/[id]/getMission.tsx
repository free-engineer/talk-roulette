import { apiUrl } from "@/constants/api";
import "server-only";
import { zMission } from "../type";

export const getMission = async (id: string) => {
  const res = await fetch(`${apiUrl}/missions/${id}`, { cache: "no-store" });
  const data = await res.json();
  const mission = zMission.parse(data);
  return mission;
};
