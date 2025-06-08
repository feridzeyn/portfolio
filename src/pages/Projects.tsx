import {CardComponent} from "../Components/projects/CardComponent.tsx";

export default function Projects() {
	return (
		<>
			<section>
				<div className="mb-[100px]">
					<h1 className="text-6xl text-red-700 font-bold">My Projects</h1>
				</div>
				<div className="">
					<CardComponent/>
				</div>
			</section>
		</>
	)
}
