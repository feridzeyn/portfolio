import SkillsBody from "./SkillsBody.tsx";
import CurrentlyLearning from "./CurrentlyLearning.tsx";
import Languages from "./Languages.tsx";

export default function MySkills() {
	return (
		<>
			<div>
				<div className="pt-22">
					<h1 className="text-6xl text-red-700 font-bold">My skills</h1>
				</div>

				<SkillsBody/>
				<div className="flex justify-between  mt-15">
					<CurrentlyLearning/>
					<Languages/>
				</div>
			</div>


		</>
	)
}
