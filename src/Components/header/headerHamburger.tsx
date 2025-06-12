import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function HeaderHamburger() {
	const {t} = useTranslation();
	return (
		<>
			<div className="text-lg font-medium text-red-400 ">
				<NavLink to='/' >{t('home')}</NavLink>
				<NavLink to="/about" className="my-6">{t('about')}</NavLink>
				<NavLink to="/projects">{t('project')}</NavLink>
				<NavLink to="/contact" className="mt-6">{t('contact')}</NavLink>
			</div>
		</>
	)
}
