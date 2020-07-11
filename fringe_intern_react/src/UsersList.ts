type user = {
	id: number,
	name: string,
	tasknumber: number,
	complete: number,
	tasks: string[],
}; 
const UserList :user[]= [
	{
		id: 0,
		name: "kimura",
		tasknumber: 1,
		complete: 0,
		tasks: ["課題を終わらせる"],
	},
	{
		id: 1,
		name: "yamada",
		tasknumber:1,
		complete: 0,
		tasks: ["献立を考える"],
		
	},
	{
		id: 2,
		name: "kondou",
		tasknumber: 1,
		complete: 0,
		tasks: ["試験勉強をする"],
		
	},
 ];
export default UserList

