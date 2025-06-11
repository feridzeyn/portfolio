import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import infoArray from "../../data/projectsInfo.json";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import {projectsType} from "../../types/types.ts";
import {useTranslation} from "react-i18next";

export function CardComponent() {
	const { pathname } = useLocation();
	const { t } = useTranslation();
	const [visibleCount, setVisibleCount] = useState(3);
	const [visibleItems, setVisibleItems] = useState<projectsType[]>([]);

	// Pathname dəyişəndə göstərəcəyimiz itemləri yenilə
	useEffect(() => {
		if (pathname === "/projects") {
			setVisibleItems(infoArray); // hamısını göstər
		} else {
			setVisibleItems(infoArray.slice(0, visibleCount)); // sayla məhdudlaşdır
		}
	}, [pathname, visibleCount]);

	const loadMore = () => {
		const newCount = visibleCount + 2;
		setVisibleCount(newCount);
	};

	return (
		<>
			{visibleItems.map((item, i) => (
				<div key={i} className="card flex p-6 border-2 border-red-400 mb-6 gap-6 rounded">
					<div className="img w-1/4">
						<img src={item.img} alt="image" className="w-[800px] h-[260px] object-center" />
					</div>
					<div className="body w-3/4 flex flex-col text-red-400">
						<h1 className="text-3xl font-bold text-red-400 mb-6 text-center">{t(item.head)}</h1>
						<p className="text-2xl text-justify">{t(item.body)}</p>
						<div className="flex items-center justify-end mt-10 text-2xl">
							<a href={item.link} target="_blank" rel="noreferrer">
								<span className="mr-2 font-bold">{t("goToLink")} -</span>
								<FontAwesomeIcon
									icon={faArrowUpRightFromSquare}
									className="hover:text-red-500 transition-colors duration-300"
								/>
							</a>
						</div>
					</div>
				</div>
			))}

			{/* Yalnız /projects olmadıqda və daha çox item varsa düyməni göstər */}
			{visibleCount < infoArray.length && pathname !== "/projects" && (
				<div className="text-center">
					<button
						onClick={loadMore}
						className="px-6 py-3 bg-red-400 font-semibold rounded hover:bg-red-500 transition"
					>
						{t('loadMore')}
					</button>
				</div>
			)}
		</>
	);
}
