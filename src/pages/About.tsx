import me from "../assets/images/Me.jpg"
import {Trans, useTranslation} from "react-i18next";

export default function About() {
	const { i18n } = useTranslation();
	return (
		<>
			<div className="border-2 lg:border-4 border-red-900 flex flex-col md:flex-row md:items-center justify-between lg:justify-evenly md:gap-x-4 lg:gap-x-0">
				<div className="w-full lg:w-[500px] order-2 md:order-1">
					<p className="text-red-400 text-base md:text-xl lg:text-2xl py-3 md:py-6 lg:py-8 text-justify p-2 lg:p-0" key={i18n.language}>
						<Trans i18nKey="aboutMe">
							Mən Fərid Zeynalzadə, Azərbaycan Texniki Universitetinin məzunuyam. 2024-cü ilin iyun
							ayından etibarən frontend sahəsində inkişaf etməyə başlamışam. Bu yolda mənə əsas bilikləri
							qazandıran və istiqamət göstərən müəllimim <a className="underline hover:no-underline"
																		  target="_blank"
																		  href="https://e-mammadli.com/about">Elgün
							Məmmədli</a> olub.
						</Trans>
					</p>
				</div>
				<div className="border-1 lg:border-4 border-red-500 w-full md:w-[350px] lg:w-[500px] lg:h-[500px] flex items-center justify-center order-1 md:order-2">
					<img src={me} alt="myPicture"
						 className="rounded-full w-full md:w-[250px] lg:w-[400px] lg:h-[400px] hover:w-[480px] hover:h-[480px] transition-hover duration-1000"/>
				</div>
			</div>
		</>
	)
}
