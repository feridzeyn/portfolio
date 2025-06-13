import {Link, NavLink} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import Hamburger from 'hamburger-react'
import {useEffect, useState} from "react";
import HeaderHamburger from './HeaderHamburger.tsx'
export function Header() {
	const {t} = useTranslation();
	const [isOpen, setOpen] = useState(false);
	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('overflow-hidden');
			setOpen(true);
		} else {
			document.body.classList.remove('overflow-hidden');
		}
		return () => {
			document.body.classList.remove('overflow-hidden');
		setOpen(false);
		};
	}, [isOpen]);
	return (
		<>
			<div className="py-6 pt-10 md:pb-10  mb:pt-16 flex justify-between items-center mb-6 md:mb-12 lg:mb-22 ">
				<Link to="/">
				<span
					className="text-red-400 self-center whitespace-nowrap text-lg md:text-xl lg:text-3xl md:font-semibold ">{t('name')}</span>
				</Link>


				<div className="hidden md:flex gap-x-22 items-center">
					<div className="flex gap-x-6 text-xl font-medium text-red-400 ">
						<NavLink to='/'>{t('home')}</NavLink>
						<NavLink to="/about">{t('about')}</NavLink>
						<NavLink to="/projects">{t('project')}</NavLink>
						<NavLink to="/contact">{t('contact')}</NavLink>
					</div>
				</div>
				<div className="md:hidden">
					<Hamburger toggled={isOpen} toggle={setOpen} color={'#fc8181'} size={18}/>
				</div>
			</div>
			{isOpen && (
				<div
					className=' absolute top-[96px] md:top-[148px] left-0 w-full h-screen bg-[#101722] text-black  z-50  overflow-auto'>
					<HeaderHamburger/>
				</div>
			)}
		</>

	);
}
