import React from "react";
import styled from "styled-components";
import UserSelect from "../Atoms/UserSelect";
import { useDispatch } from "react-redux";
import { ChangeUserId } from "../../Rxtk/modules/userSlice";

type Props = {
	users: {
		id: number,
		name: string,
		tasknumber: number,
		complete: number,
		tasks: string[],
	}[],
	tasknumber: number,
	complete: number,
	nowuserid: number,
};


const ShowUserData: React.FC<Props> = (props) => {
	const { users, nowuserid, tasknumber, complete } = props;
	const dispatch = useDispatch();
	const ChangeUser = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = parseInt(e.currentTarget.value, 10);
		dispatch(ChangeUserId(value))
	}
	return (
		<Div_Page>
			<div>
				<StyledImg src={require(`../../images/user${users[nowuserid].id}.jpg`)}></StyledImg>
				<Div_Margin>
					<UserSelect users={users} onChange={ChangeUser} />
				</Div_Margin>
			</div>
			<Div_Inline>残タスク:{tasknumber}</Div_Inline>
			<Div_Inline>累計完了タスク: {complete}</Div_Inline>
		</Div_Page>
	);
};

export default ShowUserData;



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
	font-size:25px;
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
