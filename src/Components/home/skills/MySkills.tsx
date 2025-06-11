import SkillsBody from "./SkillsBody.tsx";
import CurrentlyLearning from "./CurrentlyLearning.tsx";
import Languages from "./Languages.tsx";
import {useTranslation} from "react-i18next";

export default function MySkills() {
	const {t} = useTranslation();
	return (
		<>
			<div>
				<div className="pt-22">
					<h1 className="text-6xl text-red-500 font-bold uppercase">{t('mySkills')}</h1>
				</div>
				<SkillsBody/>
				<div className="flex justify-between  mt-15">
					<div >
						<CurrentlyLearning/>
					</div>
					<div>
						<Languages/>
					</div>

				</div>
			</div>


		</>
	)
}
