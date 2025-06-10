import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Default from "./layout/Default.tsx";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";


function App() {

	return (
		<>
			<Router>
				<Routes>
					<Route element={<Default/>}>
						<Route path="/" element={<Home/>}/>
						<Route path="/about" element={<About/>}/>
						<Route path="/projects" element={<Projects/>}/>
						<Route path="/contact" element={<Contact/>}/>

					</Route>

				</Routes>
			</Router>
		</>
	)
}

export default App
