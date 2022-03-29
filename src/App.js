import Info from "./components/Info";
import Tech from "./components/Tech";
import Education from './components/Education'
import Experience from "./components/Experience"
import Project from "./components/Projects"
import Footer from "./components/Footer"
import React from 'react';

import tech from "./Data/tech";
import experience from './Data/experience'
import project from "./Data/project"

export default function App() {

	const techElements = tech.map(te => {
		return <Tech
					key = {te.id}
					{...te}
				/>
	})

	const expElements = experience.map(exp => {
		return <Experience
					key = {exp.id}
					{...exp}
				/>
	})

	const projectElements = project.map(pro => {
		return <Project
					key = {pro.id}
					{...pro}
				/>
	})

	return (
		<div> 

			<a className="resume" href="https://drive.google.com/file/d/1AwS107-rk570xinFG90Ixj6VPdWJ7X01/view?usp=sharing">
				<p className="nav-link"> Resume </p>
			</a>

			<Info />

			<h1 className="heading">Tech I'm Familiar with</h1>
			
			{techElements}

			<Education />
			
			<h1 className="heading">Experience</h1>

			{expElements}

			<h1 className="heading">Projects</h1>

			{projectElements}

			<Footer/>
			
		</div>
	)
}
