import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/home";
import Profile from "./pages/profile"
import BlogDetail from "./pages/blog-detail"
import NotFound from "./pages/not-found";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import VerifyAccountPage from "./pages/verify-account";
import ForgotPasswordPage from "./pages/forgot-password";
import ResetPasswordPage from "./pages/reset-password"
import ChangePasswordPage from "./pages/change-password";
import NavBar from "./components/NavBar";
import CreateBlog from "./pages/create-blog";
import MyBlogs from "./pages/my-blogs";
import Footer from "./components/Footer";

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
			<NavBar/>
			<hr/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/profile" element={<Profile/>}/>
				<Route path="/blog" element={<BlogDetail/>}/>
				<Route path="/login" element={<Login/>}/>
				<Route path="/signUp" element={<SignUp/>}/>
				<Route path="/verification/:token" element={<VerifyAccountPage />} />
				<Route path="/verification-change-email/:token" element={<VerifyAccountPage />} />
				<Route path="/forgot-password" element={<ForgotPasswordPage />} />
				<Route path="/reset-password/:token" element={<ResetPasswordPage />} />
				<Route path="/change-password" element={<ChangePasswordPage/>} />
				<Route path="/create-blog" element={<CreateBlog/>}/>
				<Route path="/myblogs" element={<MyBlogs/>}/>
				<Route path="*" element={<NotFound/>}/>
			</Routes>
			<Footer/>
		</div>
	);
}

export default App;
