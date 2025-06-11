import me from "../assets/images/Me.jpg"
import {Trans, useTranslation} from "react-i18next";

export default function About() {
	const { i18n } = useTranslation();
	return (
		<>
			<div className="border-4 border-red-900 flex items-center justify-evenly ">
				<div className="w-[500px]">
					<p className="text-red-400 text-2xl py-8" key={i18n.language}>
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
				<div className="border-4 border-red-500 w-[500px] h-[500px] flex items-center justify-center">
					<img src={me} alt="myPicture"
						 className="rounded-full w-[400px] h-[400px] hover:w-[480px] hover:h-[480px] transition-hover duration-1000"/>
				</div>
			</div>
		</>
	)
}
