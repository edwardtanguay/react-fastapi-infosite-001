import { Skill } from "../../types";

export interface SkillModel {
	// state
	skills: Skill[];
}

export const skillModel: SkillModel = {
	// state
	skills: [
		{
			idCode: "angular",
			name: "Angular",
			url: "https://onespace.pages.dev/techItems?id=36",
			description:
				"together with React and Vue.js one of the three most popular JavaScript frameworks",
			id: 1,
		},
		{
			idCode: "cicd",
			name: "CI/CD",
			url: "https://about.gitlab.com/topics/ci-cd",
			description:
				"the combined practices of continuous integration (CI) and continuous deployment (CD)",
			id: 2,
		},
	],
};
