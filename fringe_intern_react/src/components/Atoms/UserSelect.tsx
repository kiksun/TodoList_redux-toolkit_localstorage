import React from "react";
import styled from "styled-components";

type Props = {};
const UserDropDown: React.FC<Props> = (props) => {
	return (
		<Select_Padding>
			<option value="grapefruit">Grapefruit</option>
			<option value="lime">Lime</option>
			<option value="coconut">Coconut</option>
			<option value="mango">Mango</option>
		</Select_Padding>
	);
};

export default UserDropDown;

const Select_Padding=styled.select`
margin:10px;
padding:20px,20px,0px,0px;
`