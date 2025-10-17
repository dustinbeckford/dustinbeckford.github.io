/** @format */
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import { NavBar } from "./components/Navbar";
import Welcome from "./components/pages/Welcome";
import Projects from "./components/pages/Projects";
import { Contact } from "./components/pages/Contact";
import AboutMe from "./components/pages/AboutMe";
import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { initFadeAnimations } from "./utils/fadeAnimations";

function App() {
	useEffect(() => {
		const cleanup = initFadeAnimations();
		return cleanup;
	}, []);

	return (
		<>
			<NavBar />
			<Welcome />
			<AboutMe />
			<Skills />
			<Projects />
			<Contact />
			<Routes>
				<Route path='/About' element={<AboutMe />}></Route>
				<Route path='/Projects' element={<Projects />}></Route>
				<Route path='/Contact' element={<Contact />}></Route>
			</Routes>
		</>
	);
}

export default App;
