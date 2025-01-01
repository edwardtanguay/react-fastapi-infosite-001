import { useTypedStoreState } from "../store/hooks";

export const PageWelcome = () => {
	const { message } = useTypedStoreState((state) => state.mainModel);
	const { skills } = useTypedStoreState((state) => state.skillModel);

	// useEffect(() => {
	// 	(async () => {
	// 		const response = await axios.get("http://localhost:3355/skills");
	// 		const _skills = response.data;
	// 		setSkills(_skills);
	// 	})();
	// }, []);

	return (
		<>
			<p>{message}</p>

			<h2 className="mt-3 text-xl">{skills.length} Skills</h2>
			<ul>
				{skills.map((skill) => {
					return <li key={skill.id}>{skill.name}</li>;
				})}
			</ul>
		</>
	);
};
