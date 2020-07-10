import React from "react";
import Home from "./templates/home";
import UserList from "../UsersList";

const App = () => {
	type user = {
		id: number,
		name: string,
		tasknumber: number,
		tasks: string[],
		Dates: string[]
	};
	let users: user[] = [
		{
			id: 0,
			name: "",
			tasknumber: 1,
			tasks: [],
			Dates: []
		}
	];

	if (localStorage.getItem("users")) {
		users = JSON.parse(localStorage.getItem("users") as string);

	} else {
		localStorage.setItem("users", JSON.stringify(UserList));
		users = UserList;

	}
	return (
		<Home users={users} />
	);
};
export default App;
