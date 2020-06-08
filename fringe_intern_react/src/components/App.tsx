import React from "react";
import Home from "./templates/home";
import UserList from "../UsersList"

const App = () => {
	type user = {
		id: number,
		name: string,
		clap: number,
		apploud: number,
	};
	let users: user[] = [
		{
			id: 0,
			name: "",
			clap: 0,
			apploud: 0,
		}
	];
	let clapuserid = '0';
	let applouduserid = '1';
	let message;
	if (localStorage.getItem("users")) {
		users = JSON.parse(localStorage.getItem("users") as string);
	} else {
		localStorage.setItem("users", JSON.stringify(UserList));
		users = UserList;
	}
	if (localStorage.getItem("message")) {
		message = JSON.parse(localStorage.getItem("message") as string);
	} else {
		localStorage.setItem("message", JSON.stringify([]));
		message = [];
	}
	return (
		<Home users={users} clapuserid={clapuserid} applouduserid={applouduserid} />
	);
};
export default App;
