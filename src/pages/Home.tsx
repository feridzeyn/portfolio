import HomeHeader from "../Components/home/HomeHeader.tsx";
import MySkills from "../Components/home/skills/MySkills.tsx";
import Projects from "./Projects.tsx";

export default function Home() {
	return (
		<>
			<HomeHeader/>
			<MySkills/>
			<div className="pt-22">
				<Projects/>
			</div>



		</>
	)
}
