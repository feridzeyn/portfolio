import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import infoArray from "../../data/projectsInfo.json"
import {useState} from "react";

export function CardComponent() {
	const [visibleCount, setVisibleCount] = useState(2);
	const [visibleItem, setvisibleItem] = useState(infoArray.slice(0, 2));

	const loadMore = () => {
		const newCount = visibleCount + 3;
		setVisibleCount(newCount);
		setvisibleItem(infoArray.slice(0, newCount));
	}
	return (
		<>

			{
				visibleItem.map((item, i) => (
					<div key={i} className="card flex  p-6 border-2 border-red-400 mb-6 gap-6 rounded">
						<div className="img w-1/4 ">
							<img src={item.img} alt={"image"} className=" w-[800px] h-[260px] object-center"/>
						</div>
						<div className="body w-3/4 flex flex-col text-red-400">
							<h1 className="text-3xl font-bold text-red-400 mb-6 text-center">{item.head}</h1>
							<p className="text-2xl text-justify ">{item.body}</p>
							<div className="flex items-center justify-end mt-10 text-2xl">
								<a href={item.link} target="_blank" rel="noreferrer">
									<span className="mr-2 font-bold">Keçid et -</span>
									<FontAwesomeIcon icon={faArrowUpRightFromSquare}
													 className=" hover:text-red-500 transition-colors duration-300"/>
								</a>
							</div>
						</div>
					</div>
				))

			}
			{visibleCount < infoArray.length && (
				<div className="text-center">
					<button
						onClick={loadMore}
						className="px-6 py-3 bg-red-400  font-semibold rounded hover:bg-red-500 transition"
					>
						Daha çoxunu göstər
					</button>
				</div>
			)}
		</>
	);
}
