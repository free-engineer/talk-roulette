import { z } from "zod";

export const zMission = z.object({
  id: z.number().int(),
  title: z.string(),
  body: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const zMissions = z.array(zMission);
export const zUpsertMission = z.object({
  title: z.string(),
  body: z.string(),
});

export type Mission = z.infer<typeof zMission>;
export type Missions = z.infer<typeof zMissions>;
