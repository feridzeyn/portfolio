import {Header} from "../Components/header/Header.tsx";
import {Outlet} from "react-router";
import Footer from "../Components/footer/Footer.tsx";
import LocalSwitcher from "../Components/UI/LocalSwitcher.tsx";

export default function Default() {
	return (
		<>
			<div className="container m-auto relative px-2 md:px-0">
				<div className="absolute top-3 right-2 md:top-5 md:right-0 ">
					<LocalSwitcher/>
				</div>

				<Header/>
				<Outlet/>
				<Footer/>
			</div>

		</>
	)
}
