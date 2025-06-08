import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBootstrap, faCss3Alt, faGitAlt, faHtml5, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import typescript from "../../../assets/images/Typescript_logo.svg.png";
import tailwind from "../../../assets/images/Tailwind_CSS_Logo.svg.png";

export default function SkillsBody() {
	return (
		<>
			<p className="text-red-400 flex justify-center items-center font-semibold text-2xl mb-[100px] mt-10">Istifadə etdiyim
				texnologiyalar və bacarıqlarım :</p>

			<section className="flex  justify-evenly ">
				<div>
					<p className="flex items-center gap-x-8">
						<FontAwesomeIcon icon={faHtml5} className="text-orange-500 text-6xl"/>
						<span className="text-red-400 text-3xl">HTML5</span></p>
					<p className="flex items-center gap-x-8 my-6">
						<FontAwesomeIcon icon={faCss3Alt} className="text-blue-500 text-6xl"/>

						<span className="text-red-400 text-3xl">CSS3</span></p>
					<p className="flex items-center gap-x-8 ">
						<FontAwesomeIcon icon={faJs} className="text-yellow-300 text-6xl"/>
						<span className="text-red-400 text-3xl">Javascript</span>
					</p>
					<p className="flex items-center gap-x-8 my-6">
						<img src={typescript} alt="Tailwind CSS" className="w-12 h-12"/>
						<span className="text-red-400 text-3xl">TypeScript</span>
					</p>
				</div>
				<div>
					<p className="flex items-center gap-x-8 ">
						<FontAwesomeIcon icon={faReact} className="text-blue-300 text-6xl"/>
						<span className="text-red-400 text-3xl">React.js</span>
					</p>
					<p className="flex items-center gap-x-8 my-6">
						<img src={tailwind} alt="Tailwind CSS" className="w-12 h-12"/>
						<span className="text-red-400 text-3xl">Tailwind Css</span>
					</p>
					<p className="flex items-center gap-x-8">
						<FontAwesomeIcon icon={faBootstrap} className="text-purple-600 text-6xl"/>
						<span className="text-red-400 text-3xl">Bootstrap Css</span>
					</p>
					<p className="flex items-center gap-x-8 my-6">
						<FontAwesomeIcon icon={faGitAlt} className="text-orange-500 text-6xl"/>
						<span className="text-red-400 text-3xl">Git, GitHub</span>
					</p>
				</div>
			</section>
		</>

	)
}
