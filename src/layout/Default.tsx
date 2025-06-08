import {Header} from "../Components/Header.tsx";
import {Outlet} from "react-router";

export default function Default() {
	return (
	<>
		<div className="container m-auto">
			<Header/>
			<Outlet/>
		</div>

	</>
	)
}
