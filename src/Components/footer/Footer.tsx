import {faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
	return (
		<>
		<div className="border-t-2 border-red-400 flex justify-between mt-30 p-6">
			<div>
				<p className="text-red-400 self-center whitespace-nowrap text-3xl font-semibold">Fərid Zeynalzadə</p>
			</div>
			<div className="">
				<a href="https://linkedin.com/in/farid-zeynalzade" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faLinkedin} className="text-red-400 self-center whitespace-nowrap text-3xl font-semibold mr-6 hover:text-red-500 transition-colors duration-300" />
				</a>
				<a href="mailto:feridzeynalov12@gmail.com">
					<FontAwesomeIcon icon={faAt} className="text-red-400 self-center whitespace-nowrap text-3xl font-semibold mr-6 hover:text-red-500 transition-colors duration-300"/>
				</a>
				<FontAwesomeIcon icon={faInstagram}  className="text-red-400 self-center whitespace-nowrap text-3xl font-semibold hover:text-red-500 transition-colors duration-300"/>
			</div>
		</div>
		</>
	)
}
