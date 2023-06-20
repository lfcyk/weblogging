import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/home";
import Profile from "./pages/profile"
import BlogDetail from "./pages/blog-detail"
import NotFound from "./pages/not-found";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";

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
				<Route path="login" element={<Login/>}/>
				<Route path="signUp" element={<SignUp/>}/>./..
				<Route path="*" element={<NotFound/>}/>
			</Routes>
		</div>
	);
}

export default App;
