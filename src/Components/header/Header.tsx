
import {Link,NavLink} from 'react-router-dom';
import LocalSwitcher from "../UI/LocalSwitcher.tsx";
import {useTranslation} from "react-i18next";

export function Header() {
	const {t} = useTranslation();
	return (
		<div  className="py-10 flex justify-between items-center mb-22 ">
			<Link to="/">
				<span className="text-red-400 self-center whitespace-nowrap text-3xl font-semibold ">{t('name')}</span>
			</Link>
			<div className="flex gap-x-22 items-center">
				<div className="flex gap-x-6 text-xl font-medium text-red-400 ">
					<NavLink to='/'>{t('home')}</NavLink>
					<NavLink to="/about">{t('about')}</NavLink>
					<NavLink to="/projects">{t('project')}</NavLink>
					<NavLink to="/contact">{t('contact')}</NavLink>
				</div>
				<div>
					<LocalSwitcher/>
				</div>
			</div>

		</div>
	);
}
