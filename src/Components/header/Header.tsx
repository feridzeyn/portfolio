import {Link, NavLink} from 'react-router-dom';
import LocalSwitcher from "../UI/LocalSwitcher.tsx";
import {useTranslation} from "react-i18next";
import Hamburger from 'hamburger-react'
import {useState} from "react";

export function Header() {
	const {t} = useTranslation();
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<div className="py-6 md:py-10 flex justify-between items-center mb-6 md:mb-12 lg:mb-22">
				<Link to="/">
				<span
					className="text-red-400 self-center whitespace-nowrap text-lg md:text-xl lg:text-3xl md:font-semibold ">{t('name')}</span>
				</Link>
				<div className="md:hidden">
					<Hamburger toggled={isOpen} toggle={setOpen}/>
				</div>

				<div className="hidden md:flex gap-x-22 items-center">
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
			{isOpen && (
				<div
					className=' absolute top-[120px] md:top-[148px] left-0 w-full h-screen bg-white text-black  z-50  overflow-auto'>
					<headerHamburger/>
				</div>
			)}
		</>

	);
}
