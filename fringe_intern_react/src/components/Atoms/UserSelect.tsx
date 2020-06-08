import React from "react";
import styled from "styled-components";

type Props = {
	users: 
		{
			id: number,
			name: string,
			clap: number,
			apploud: number
		}[],
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const UserSelect: React.FC<Props> = (props) => {
	const { users, onChange } = props;
	return (
		<StyledSelect onChange={e => onChange(e)} >
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