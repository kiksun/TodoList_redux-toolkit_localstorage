import React from "react";
import "./App.css";
import Button from "./components/Atoms/Button";

const onclick = () => {};

function App() {
	return (
		<div className="App">
			<Button label="aaa" onClick={onclick} />
		</div>
	);
}

export default App;
