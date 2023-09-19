/** @format */

import { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
function App() {
	return (
		<>
			<NavBar />
			<Welcome />
			{/* <AboutMe /> */}
		</>
	);
}

export default App;
