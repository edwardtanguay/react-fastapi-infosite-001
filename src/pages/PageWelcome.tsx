import { useTypedStoreState } from "../store/hooks";
import { Skill } from "../types";

export const PageWelcome = () => {
	const { message } = useTypedStoreState((state) => state.mainModel);
	const { skills } = useTypedStoreState((state) => state.skillModel);

	const handleToggleSkill = (skill: Skill) => {
		alert('clicked ' + skill.name)
	}

	return (
		<>
			<p>{message}</p>

			<h2 className="mt-3 text-xl mb-3">{skills.length} Skills</h2>
			<ul className="list-disc ml-4">
				{skills.map((skill) => {
					return (
						<li key={skill.id}>
							<p className="cursor-pointer" onClick={() => handleToggleSkill(skill)}>{skill.name}</p>
							{skill.isOpen && (
								<div className="border border-slate-500 border-1 bg-slate-300 px-2 py-1 mb-2 w-fit rounded-md">
									<p>{skill.description}</p>
									<p className="text-sm italic">
										get more info about{" "}
										<a
											href={skill.url}
											className="underline"
											target="_blank"
										>
											{skill.name}
										</a>
									</p>
								</div>
							)}
						</li>
					);
				})}
			</ul>
		</>
	);
};
