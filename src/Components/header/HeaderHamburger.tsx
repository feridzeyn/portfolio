import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function HeaderHamburger() {
	const {t} = useTranslation();
	return (
		<>
			<ul className="flex flex-col justify-center items-center text-lg font-medium text-red-400 pt-6">
				<li>
					<Link to='/'>{t('home')}</Link>
				</li>
				<li className="my-8">
					<Link to="/about" className="my-6">{t('about')}</Link>
				</li>
				<li>
					<Link to="/projects">{t('project')}</Link>
				</li>
				<li className="mt-8">
					<Link to="/contact" className="mt-6">{t('contact')}</Link>
				</li>


			</ul>
		</>
	)
}
