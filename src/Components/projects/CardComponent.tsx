import brandImg from "../../../public/images/Screenshot.png"
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import infoArray from "../../data/projectsInfo.json"
export function CardComponent() {
	return (
		<>
			{/*<div className="card flex gap-x-6 p-6">*/}
			{/*	<div className="img">*/}
			{/*		<img src={brandImg} alt="brandImage" className="img-fluid" />*/}
			{/*	</div>*/}
			{/*	<div className="body flex flex-col text-red-400">*/}
			{/*		<h1 className="text-3xl font-bold text-red-400 mb-6 text-center">E-commerce saytı</h1>*/}
			{/*		<p className="text-2xl "> Bu layihə React.js ilə hazırlanıb və komponent əsaslı düşünmə tərzimi inkişaf etdirməyimə kömək*/}
			{/*			edib. Layihədə state management, props ilə işləmə və React Router kimi funksiyalar tətbiq*/}
			{/*			olunub. Məhsulları səbətə əlavə etmək və istifadəçi interfeysini idarə etmək üçün useState,*/}
			{/*			useEffect kimi hook-lardan istifadə olunub.</p>*/}

			{/*		<div className="flex items-center justify-end gap-x-8 mt-10">*/}
			{/*			<p className="text-3xl font-bold">Keçid</p>*/}
			{/*			<a href={"https://fbrand.netlify.app"} target="_blank">*/}
			{/*				<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-3xl hover:text-red-600 transition-colors duration-300"/>*/}
			{/*			</a>*/}

			{/*		</div>*/}
			{/*	</div>*/}
			{/*</div>*/}
			{
				infoArray.map((item, i) => (
					<div key={i} className="card flex  p-6 border-2 border-red-400 mb-6 gap-6">
						<div className="img w-1/4 ">
							<img src={item.img} alt={"image"} className=" w-[800px] h-[260px] object-center" />
						</div>
						<div className="body w-3/4 flex flex-col text-red-400">
							<h1 className="text-3xl font-bold text-red-400 mb-6 text-center">{item.head}</h1>
							<p className="text-2xl text-justify ">{item.body}</p>
							<div className="flex items-center justify-end gap-x-8 mt-10">
								<p className="text-3xl font-bold">Keçid</p>
								<a href={item.link} target="_blank" rel="noreferrer">
									<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-3xl hover:text-red-600 transition-colors duration-300" />
								</a>
							</div>
						</div>
					</div>
				))

			}
		</>
	);
}
