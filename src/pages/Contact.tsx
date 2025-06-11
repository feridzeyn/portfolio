import {useTranslation} from "react-i18next";

export default function Contact() {
	const {t} = useTranslation();
	return (
	<>
	<div>
		<h1><a href="../assets/pdf/resume.pdf" download className="text-red-500 font-bold text-4xl flex justify-center mb-[600px]">{t('uploadCV')}</a></h1>
	</div>
	</>
	)
}
