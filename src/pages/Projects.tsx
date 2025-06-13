import {CardComponent} from "../Components/projects/CardComponent.tsx";
import {useTranslation} from "react-i18next";

export default function Projects() {
	const {t} = useTranslation();
	return (
		<>
			<section>
				<div className="mb-2 md:mb-10 lg:mb-16">
					<h1 className="flex justify-center md:justify-start items-center text-xl md:text-3xl lg:text-6xl text-red-500 font-bold uppercase">{t('myProjects')}</h1>
				</div>
				<div className="">
					<CardComponent/>
				</div>
			</section>
		</>
	)
}
