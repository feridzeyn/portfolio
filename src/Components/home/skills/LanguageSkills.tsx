import {useTranslation} from "react-i18next";

export default function LanguageSkills() {
	const {t} = useTranslation();
	return (
		<>
			<section className="mt-8 md:mt-0">
				<p className="text-red-400 flex justify-center items-center font-semibold text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 lg:mb-12">
					{t('languagesIKnow')}
				</p>
				<div className="grid grid-cols-2 gap-x-32 lg:gap-x-48 ">
					<div>
						<p className="text-red-400 text-base md:text-xl lg:text-2xl ">{t('languageLevels.english')}</p>
						<p className="text-red-400 text-base md:text-xl lg:text-2xl my-6">{t('languageLevels.czech')}</p>
						<p className="text-red-400 text-base md:text-xl lg:text-2xl ">{t('languageLevels.turkish')}</p>
						<p className="text-red-400 text-base md:text-xl lg:text-2xl mt-6">{t('languageLevels.azerbaijani')}</p>
					</div>
					<div>
						<p className="text-red-400 text-base md:text-xl lg:text-2xl ">{t('languageLevels.b2')}</p>
						<p className="text-red-400 text-base md:text-xl lg:text-2xl my-6">{t('languageLevels.b1')}</p>
						<p className="text-red-400 text-base md:text-xl lg:text-2xl ">{t('languageLevels.c1')}</p>
						<p className="text-red-400 text-base md:text-xl lg:text-2xl mt-6">{t('languageLevels.motherTongue')}</p>
					</div>
				</div>
			</section>
		</>
	)
}
