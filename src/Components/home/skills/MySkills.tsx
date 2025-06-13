import SkillsBody from "./SkillsBody.tsx";
import CurrentlyLearning from "./CurrentlyLearning.tsx";
import LanguageSkills from "./LanguageSkills.tsx";
import {useTranslation} from "react-i18next";

export default function MySkills() {
	const {t} = useTranslation();
	return (
		<>
			<div>
				<div className="pt-26 md:pt-22 mb-2 md:mb-10 lg:mb-16">
					<h1 className="flex justify-center md:justify-start items-center text-xl md:text-3xl lg:text-6xl text-red-500 font-bold uppercase">{t('mySkills')}</h1>
				</div>
				<div>
					<SkillsBody/>
				</div>

				<div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between mt-6 md:mt-10 lg:mt-15 ">
					<div >
						<CurrentlyLearning/>
					</div>
					<div>
						<LanguageSkills/>
					</div>

				</div>
			</div>


		</>
	)
}
