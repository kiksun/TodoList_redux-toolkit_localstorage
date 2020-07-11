import React from "react";
import styled from "styled-components";

type Props = {
	users:
	{
		id: number,
		name: string,
		tasknumber: number,
		complete:number,
		tasks: string[],
	}[],
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
};

const UserSelect: React.FC<Props> = (props) => {
	const { users, onChange } = props;
	return (
		<StyledSelect onChange={onChange}>
			{users.map((user,index) => {
				return <option key={index} value={user.id}>{user.name}</option>;
			})}
		</StyledSelect>
	);
};

export default UserSelect;

const StyledSelect = styled.select`
width:120px;
`