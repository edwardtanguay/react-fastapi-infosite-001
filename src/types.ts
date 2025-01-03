import { z } from "zod";

export const SkillSchema = z.object({
	id: z.number(),
	idCode: z.string(),
	name: z.string(),
	description: z.string(),
	url: z.string().url(),
	isOpen: z.boolean()
});

export type Skill = z.infer<typeof SkillSchema>;
