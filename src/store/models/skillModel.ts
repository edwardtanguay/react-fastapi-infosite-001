/* eslint-disable @typescript-eslint/no-explicit-any */
import { action, Action, thunk, Thunk } from "easy-peasy";
import { Skill } from "../../types";
import axios from "axios";

export interface SkillModel {
	// state
	skills: Skill[];

	// actions
	setSkills: Action<this, Skill[]>;

	// thunks
	loadSkillsThunk: Thunk<this>;
}

export const skillModel: SkillModel = {
	// state
	skills: [],

	// actions
	setSkills: action((state, skills) => {
		state.skills = structuredClone(skills);
	}),

	// thunks
	loadSkillsThunk: thunk((actions) => {
		(async () => {
			try {
				const response = await axios.get(
					"http://localhost:3355/skills"
				);
				if (response.status === 200) {
					const _skills: Skill[] = response.data;
					actions.setSkills(_skills);
				}
			} catch (e: any) {
				console.log(`ERROR: ${e.message}`);
			}
		})();
	}),
};
