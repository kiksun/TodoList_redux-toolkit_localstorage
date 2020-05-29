import React from "react";
import "./App.css";
import Button from "./components/Atoms/Button";
import Select from "./components/Atoms/UserSelect"
const onclick = () => {};

function App() {
	return (
		<div className="App">
			<Button label="aaa" onClick={onclick} />
			<Select/>
		</div>
	);
}

export default App;
