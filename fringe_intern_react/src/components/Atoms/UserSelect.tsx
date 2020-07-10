import React from "react";
import styled from "styled-components";

type Props = {
	users:
	{
		id: number,
		name:string,
		tasknumber: number,
		tasks: string[],
		Dates: string[]
	}[],
	
};

const UserSelect: React.FC<Props> = (props) => {
	const { users } = props;
	return (
		<StyledSelect  >
			{users.map((user) => {
				return <option key={user.id} value={user.id}>{user.name}</option>;
			})}
		</StyledSelect>
	);
};

export default UserSelect;

const StyledSelect = styled.select`
width:120px;
`