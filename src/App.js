import { Routes, Route } from "react-router-dom"

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="my profile" element={<MyProfile/>}/>
			</Routes>
		</div>
	);
}

export default App;
