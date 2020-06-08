import React from "react";
import styled from "styled-components";

type Props = {
	names: string[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
const UserSelect: React.FC<Props> = (props) => {
	const { names,onChange} = props;
	return (
		<StyledSelect onChange={e=>onChange(e)} >
			{names.map((names,index) => {
				return <option  value={index}>{names}</option>;
			})}
		</StyledSelect>
	);
};

export default UserSelect;

const StyledSelect = styled.select`
width:120px;
`