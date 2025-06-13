import {Header} from "../Components/header/Header.tsx";
import {Outlet} from "react-router";
import Footer from "../Components/footer/Footer.tsx";
import LocalSwitcher from "../Components/UI/LocalSwitcher.tsx";

export default function Default() {
	return (
		<>
			<div className="container m-auto relative">
				<div className="absolute top-5 right-0 ">
					<LocalSwitcher/>
				</div>

				<Header/>
				<Outlet/>
				<Footer/>
			</div>

		</>
	)
}
