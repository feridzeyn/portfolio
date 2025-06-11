import {CardComponent} from "../Components/projects/CardComponent.tsx";
import {useTranslation} from "react-i18next";

export default function Projects() {
	const {t} = useTranslation();
	return (
		<>
			<section>
				<div className="mb-[100px]">
					<h1 className="text-6xl text-red-500 font-bold uppercase">{t('myProjects')}</h1>
				</div>
				<div className="">
					<CardComponent/>
				</div>
			</section>
		</>
	)
}
