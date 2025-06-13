import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBootstrap, faCss3Alt, faGitAlt, faHtml5, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import typescript from "../../../assets/images/Typescript_logo.svg.png";
import tailwind from "../../../assets/images/Tailwind_CSS_Logo.svg.png";
import {useTranslation} from "react-i18next";

export default function SkillsBody() {
	const {t} = useTranslation();
	return (
		<>
			<p className="text-red-400 flex justify-center items-center md:font-semibold text-lg md:text-xl lg:text-2xl mb-3 md:mb-6 mt-4 md:mt-8 lg:mt-10">{t('usedTechnologies')}</p>

			<section className="flex justify-evenly ">
				<div>
					<div className="flex items-center gap-x-2 md:gap-x-6">
						<FontAwesomeIcon icon={faHtml5} className="text-orange-500 text-2xl md:text-5xl lg:text-6xl w-1/4 md:w-1/2"/>
						<span className="text-red-400 text-lg md:text-xl lg:text-3xl w-3/4 md:w-1/2">HTML5</span></div>
					<div className="flex items-center my-3 md:my-6 lg:my-8 gap-x-2 md:gap-x-6">
						<FontAwesomeIcon icon={faCss3Alt} className="text-blue-500 text-2xl md:text-5xl lg:text-6xl w-1/4 md:w-1/2"/>
						<span className="text-red-400 text-lg md:text-xl lg:text-3xl w-3/4 md:w-1/2">CSS3</span></div>
					<div className="flex items-center gap-x-2 md:gap-x-6">
						<FontAwesomeIcon icon={faJs} className="text-yellow-300 text-2xl md:text-5xl lg:text-6xl w-1/4 md:w-1/2"/>
						<span className="text-red-400 text-lg md:text-xl lg:text-3xl w-3/4 md:w-1/2">Javascript</span>
					</div>
					<div className="flex items-center my-3 md:my-6 lg:my-8 gap-x-2 md:gap-x-6">
						<FontAwesomeIcon icon={faReact} className="text-blue-300 text-2xl md:text-5xl lg:text-6xl w-1/4 md:w-1/2"/>
						<span className="text-red-400 text-lg md:text-xl lg:text-3xl w-3/4 md:w-1/2">React.js</span>
					</div>
				</div>
				<div>
					<div className="flex items-center gap-x-2 md:gap-x-6">
						<FontAwesomeIcon icon={faBootstrap} className="text-purple-600 text-2xl md:text-5xl lg:text-6xl w-1/4"/>
						<span className="text-red-400 text-lg md:text-xl lg:text-3xl w-3/4">Bootstrap</span>
					</div>
					<div className="flex items-center my-3 md:my-6 lg:my-8 gap-x-2 md:gap-x-6">
						<FontAwesomeIcon icon={faGitAlt} className="text-orange-500 text-2xl md:text-5xl lg:text-6xl w-1/4"/>
						<span className="text-red-400 text-lg md:text-xl lg:text-3xl w-3/4">Git,GitHub</span>
					</div>
					<div className="flex items-center gap-x-2 md:gap-x-6">
						<div className="w-1/4">
							<img src={tailwind} alt="Tailwind CSS" className="w-6 h-6 md:w-12 md:h-12 m-auto"/>
						</div>

						<span className="text-red-400 text-lg md:text-xl lg:text-3xl w-3/4">Tailwind</span>
					</div>
					<div className="flex items-center mt-3 md:mt-6 lg:mt-8 gap-x-2 md:gap-x-6">
						<div className="w-1/4 ">
							<img src={typescript} alt="Tailwind CSS" className="w-7 h-7 md:w-14 md:h-14  m-auto"/>
						</div>
						<span className="text-red-400 text-lg md:text-xl lg:text-3xl w-3/4">TypeScript</span>
					</div>
				</div>
			</section>
		</>

	)
}
