import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/home";
import Profile from "./pages/profile"
import BlogDetail from "./pages/blog-detail"

function App() {
	const projects= ["a","b"];

	const myFunction = () => {
		console.log("Hello World");
	}

	const renderMyProjects = () => {
		return projects.map((project) => <li>{project}</li>);
	}
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="profile" element={<Profile/>}/>
				<Route path="blog" element={<BlogDetail/>}/>
			</Routes>
		</div>
	);
}

export default App;
