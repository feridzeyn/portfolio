import {faGithub,  faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";

export default function Footer() {
	const {t} = useTranslation();
	return (
		<>
		<div className="border-t-2 border-red-400 flex justify-between mt-30 p-6">
			<div>
				<p className="text-red-400 self-center whitespace-nowrap text-3xl font-semibold">{t('name')}</p>
			</div>
			<div className="">
				<a href="https://github.com/feridzeyn" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faGithub}
									 className="text-red-400 self-center whitespace-nowrap text-3xl font-semibold mr-6 hover:text-red-500 transition-colors duration-300"/>
				</a>
				<a href="https://linkedin.com/in/farid-zeynalzade"   target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faLinkedin}
									 className="text-red-400 self-center whitespace-nowrap text-3xl font-semibold mr-6 hover:text-red-500 transition-colors duration-300"/>
				</a>
				<a href="mailto:feridzeynalov12@gmail.com" onClick={() => console.log("Mailto link clicked")}>
					<FontAwesomeIcon icon={faAt}
									 className="text-red-400 self-center whitespace-nowrap text-3xl font-semibold mr-6 hover:text-red-500 transition-colors duration-300"/>
				</a>

			</div>
		</div>
		</>
	)
}
