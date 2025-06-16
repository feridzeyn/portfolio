import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Dispatch, SetStateAction} from "react";
type Props = {
	setOpen: Dispatch<SetStateAction<boolean>>;
};
export default function HeaderHamburger({setOpen}:Props) {
	const {t} = useTranslation();

	return (
		<>
			<ul className="flex flex-col justify-center items-center text-lg font-medium text-red-400 pt-6">
				<li onClick={()=>setOpen(false)}>
					<Link to='/'>{t('home')}</Link>
				</li>
				<li className="my-8" onClick={()=>setOpen(false)}>
					<Link to="/about" className="my-6" >{t('about')}</Link>
				</li>
				<li onClick={()=>setOpen(false)}>
					<Link to="/projects">{t('project')}</Link>
				</li>
				<li className="mt-8" onClick={()=>setOpen(false)}>
					<Link to="/contact" className="mt-6">{t('contact')}</Link>
				</li>


			</ul>
		</>
	)
}
