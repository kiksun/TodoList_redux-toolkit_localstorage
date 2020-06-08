import React from "react";
import styled from "styled-components";
import UserSelect from "../Atoms/UserSelect";

type Props = {
	users: {
		id: number,
		name: string,
		clap: number,
		apploud: number,
	}[],
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
};


const ShowUserData: React.FC<Props> = (props) => {
	const { users, onChange } = props;
	return (
		<Div_Page>
			<Div_Left>
				<StyledImg src={require(`../../images/user${users[2].id}.jpeg`)}></StyledImg>
				<Div_Margin>
					<UserSelect users={users} onChange={e => onChange(e)} />
				</Div_Margin>
			</Div_Left>
			<Div_Inline>拍手できる:{users[1].clap}</Div_Inline>
			<Div_Inline>拍手された: {users[1].apploud}</Div_Inline>
		</Div_Page>
	);
};

export default ShowUserData;

const Div_Left = styled.div`
	text-align: left;
`;

const Div_Margin = styled.div`
	margin: 10px;
`;

const Div_Page = styled.div`
	margin: 10px auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr;
	background-color: skyblue;
	text-align: left;
	width: 50%;
	border: solid;
`;
const Div_Inline = styled.div`
	display: flex;
	font-size:20px;
	align-items: center;
	text-align: center;
	border-left: solid;
`;

const StyledImg = styled.img`
	margin: 10px;
	max-width: 63%;
	object-fit: cover;
	background-color: white;
	vertical-align: middle;
`;
