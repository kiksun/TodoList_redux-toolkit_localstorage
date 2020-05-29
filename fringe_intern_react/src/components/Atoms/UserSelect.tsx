import React from "react";

type Props = {};
const UserDropDown: React.FC<Props> = (props) => {
	return (
		<select>
			<option value="grapefruit">Grapefruit</option>
			<option value="lime">Lime</option>
			<option value="coconut">Coconut</option>
			<option value="mango">Mango</option>
		</select>
	);
};

export default UserDropDown;
