import {Header} from "../Components/header/Header.tsx";
import {Outlet} from "react-router";
import Footer from "../Components/footer/Footer.tsx";
import LocalSwitcher from "../Components/UI/LocalSwitcher.tsx";

export default function Default() {
	return (
		<>
			<div className="container m-auto relative px-2 md:px-0">
				<div className={"container fixed top-0  z-50 shadow bg-[#101722] px-2 md:px-0"}>
					<div className="absolute right-3 top-3 md:top-5 ">
						<LocalSwitcher/>
					</div>
					<div>
						<Header/>
					</div>
				</div>
				<div className='pt-30 lg:pt-48'></div>
				<Outlet/>
				<Footer/>
			</div>

		</>
	)
}
