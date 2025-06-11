import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBootstrap, faCss3Alt, faGitAlt, faHtml5, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import typescript from "../../../assets/images/Typescript_logo.svg.png";
import tailwind from "../../../assets/images/Tailwind_CSS_Logo.svg.png";
import {useTranslation} from "react-i18next";

export default function SkillsBody() {
	const {t} = useTranslation();
	return (
		<>
			<p className="text-red-400 flex justify-center items-center font-semibold text-2xl mb-[100px] mt-10">{t('usedTechnologies')}</p>

			<section className="flex  justify-evenly ">
				<div>
					<div className="flex items-center gap-x-6">
						<FontAwesomeIcon icon={faHtml5} className="text-orange-500 text-6xl w-1/2"/>
						<span className="text-red-400 text-3xl w-1/2">HTML5</span></div>
					<div className="flex items-center my-8 gap-x-6">
						<FontAwesomeIcon icon={faCss3Alt} className="text-blue-500 text-6xl w-1/2"/>
						<span className="text-red-400 text-3xl w-1/2">CSS3</span></div>
					<div className="flex items-center gap-x-6">
						<FontAwesomeIcon icon={faJs} className="text-yellow-300 text-6xl w-1/2"/>
						<span className="text-red-400 text-3xl w-1/2">Javascript</span>
					</div>
					<div className="flex items-center my-8 gap-x-6">
						<FontAwesomeIcon icon={faReact} className="text-blue-300 text-6xl w-1/2"/>
						<span className="text-red-400 text-3xl w-1/2">React.js</span>
					</div>
				</div>
				<div>
					<div className="flex items-center gap-x-6">
						<FontAwesomeIcon icon={faBootstrap} className="text-purple-600 text-6xl w-1/4"/>
						<span className="text-red-400 text-3xl w-3/4">Bootstrap Css</span>
					</div>
					<div className="flex items-center my-8 gap-x-6">
						<FontAwesomeIcon icon={faGitAlt} className="text-orange-500 text-6xl w-1/4"/>
						<span className="text-red-400 text-3xl w-3/4">Git, GitHub</span>
					</div>
					<div className="flex items-center my-8 gap-x-6">
						<div className="w-1/4">
							<img src={tailwind} alt="Tailwind CSS" className="w-12 h-12"/>
						</div>

						<span className="text-red-400 text-3xl w-3/4">Tailwind Css</span>
					</div>
					<div className="flex items-center my-8 gap-x-6">
						<div className="w-1/4">
							<img src={typescript} alt="Tailwind CSS" className="w-14 h-14  "/>
						</div>
						<span className="text-red-400 text-3xl  w-3/4">TypeScript</span>
					</div>
				</div>
			</section>
		</>

	)
}
