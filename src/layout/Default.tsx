import {Header} from "../Components/header/Header.tsx";
import {Outlet} from "react-router";
import Footer from "../Components/footer/Footer.tsx";

export default function Default() {
	return (
		<>
			<div className="container m-auto">
				<Header/>
				<Outlet/>
				<Footer/>
			</div>

		</>
	)
}
