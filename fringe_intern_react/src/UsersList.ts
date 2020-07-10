type user = {
	id: number,
	name: string,
	tasknumber:number,
	tasks: string[],
	Dates:string[]
}; 
const UserList :user[]= [
	{
		id: 0,
		name: "kimura",
		tasknumber:1,
		tasks: ["課題を終わらせる"],
		Dates:["2020/04/11"],
	},
	{
		id: 1,
		name: "yamada",
		tasknumber:1,
		tasks: ["献立を考える"],
		Dates: ["2020/05/08"]
	},
	{
		id: 2,
		name: "kondou",
		tasknumber:1,
		tasks: ["試験勉強をする"],
		Dates: ["2020/01/13"]
	},
 ];
export default UserList

