/* eslint-disable @typescript-eslint/no-explicit-any */
import { action, Action, thunk, Thunk } from "easy-peasy";
import { Skill } from "../../types";
import * as dataModel from '../dataModel';

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
			const _skills = await dataModel.getSkills()
			console.log(11114, _skills);
			actions.setSkills(_skills);
		})();
	}),
};
