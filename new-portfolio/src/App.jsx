/** @format */
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import Welcome from "./components/pages/Welcome";
import Projects from "./components/pages/Projects";
import { Contact } from "./components/pages/Contact";
import AboutMe from "./components/pages/AboutMe";
import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
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
