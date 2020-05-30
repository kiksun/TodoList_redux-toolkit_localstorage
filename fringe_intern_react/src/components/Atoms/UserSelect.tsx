import React from "react";
import styled from "styled-components";

type Props = {names:string[]};
const UserDropDown: React.FC<Props> = (props) => {
	const { names } = props;
	console.log(names.length);
	return (
		<select>
			{names.map((names,index) => {
				return <option value={index}>{names}</option>;
			})}
		</select>
	);
};

export default UserDropDown;
