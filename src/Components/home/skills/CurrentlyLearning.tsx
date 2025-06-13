
import next from "../../../assets/images/nextjs-icon.svg";
import typescript from "../../../assets/images/Typescript_logo.svg.png";
import {useTranslation} from "react-i18next";

export default function CurrentlyLearning() {
	const {t} = useTranslation();
	return (
		<>
			<section className="flex flex-col justify-center items-center md:items-start ">
				<p className="text-red-400 text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 lg:mb-12">{t('currentlyLearning')}</p>
				<div >
					<p className="flex items-center gap-x-2 md:gap-x-6 mb-3 md:mb-6 lg:mb-8">
						<img src={next} alt="Tailwind CSS" className="w-6 h-6 md:w-12 md:h-12"/>
						<span className="text-red-400 text-lg md:text-xl lg:text-2xl">Next.js</span></p>
					<p className="flex items-center gap-x-2 md:gap-x-6 md:my-6">
						<img src={typescript} alt="Tailwind CSS" className="w-6 h-6 md:w-12 md:h-12"/>
						<span className="text-red-400 text-lg md:text-xl lg:text-2xl">Advanced TypeScript</span>
					</p>
				</div>

			</section>
		</>
	)
}
