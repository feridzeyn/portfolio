import i18n from "i18next";
import React, {useEffect} from "react";

export default function LocalSwitcher() {
	const handleLanguageChange = (e:React.ChangeEvent<HTMLSelectElement>)=> {
		console.log(e.target.value)
		i18n.changeLanguage(e.target.value)
	}
	// HTML lang atributunu sinxronlaşdır
	useEffect(() => {
		document.documentElement.lang = i18n.language;
	}, [i18n.language]); // dil dəyişdikcə yenilə
	return (
		<select defaultValue={i18n.language}
				onChange={handleLanguageChange}
				className={'bg-transparent border-none focus:outline-none text-red-400 text-[14px] md:text-sm lg:text-lg'}>
			<option value="az">AZ</option>
			<option value="en">EN</option>
			<option value="cz">CZ</option>
		</select>
	)
}
