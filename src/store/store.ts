import { createStore } from "easy-peasy";
import { mainModel, MainModel } from "./models/mainModel";
import { skillModel, SkillModel } from "./models/skillModel";

export type StoreModel = {
	mainModel: MainModel;
	skillModel: SkillModel;
};

export const store = createStore<StoreModel>({
	mainModel,
	skillModel
});
