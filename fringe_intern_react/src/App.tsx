import React from "react";
import Home from "./components/templates/home";

let users = [
	{
		id: 0,
		name: "kimura",
		clap: 100,
		apploud: 0,
	},
	{
		id: 1,
		name: "yamada",
		clap: 100,
		apploud: 0,
	},
	{
		id: 2,
		name: "kondou",
		clap: 100,
		apploud: 0,
	},
	{
		id: 3,
		name: "tatibana",
		clap: 100,
		apploud: 0,
	},
	{
		id: 4,
		name: "tanaka",
		clap: 100,
		apploud: 0,
	},
];


const App = () => {
	let message: string[];
	if (localStorage.getItem("users")) {
		users = JSON.parse(localStorage.getItem("users") as string);
		console.log(users);
	} else {
		localStorage.setItem("users", JSON.stringify(users));
		console.log(users);
	}

	if (localStorage.getItem("message")) {
		message = JSON.parse(localStorage.getItem("message") as string);
	} else {
		localStorage.setItem("message", JSON.stringify([]));
		message = [];
	}

	return (
		<Home users={users[0]} image={users[0].id} />
	);
};
export default App;
