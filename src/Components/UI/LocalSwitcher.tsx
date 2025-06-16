import i18n from "i18next";
import React, {useEffect} from "react";

export default function LocalSwitcher() {
	const handleLanguageChange = async (e:React.ChangeEvent<HTMLSelectElement>)=> {
		console.log(e.target.value)
		await i18n.changeLanguage(e.target.value)
	}
	// HTML lang atributunu sinxronlaşdır
	useEffect(() => {
		document.documentElement.lang = i18n.language;
	}, [i18n.language]); // dil dəyişdikcə yenilə
	return (
		<select defaultValue={i18n.language}
				onChange={handleLanguageChange}
				className={'bg-[#101722] border-none focus:outline-none text-red-400 text-base md:text-lg '}>
			<option value="az">AZ</option>
			<option value="en">EN</option>
			<option value="cz">CZ</option>
		</select>
	)
}
