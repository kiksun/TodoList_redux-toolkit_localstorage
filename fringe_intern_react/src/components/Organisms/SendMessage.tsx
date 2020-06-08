import React from "react";
import Button from "../Atoms/Button";
import styled from "styled-components";
import UserSelect from "../Atoms/UserSelect";

type Props = {
	users: {
		id: number,
		name: string,
		clap: number,
		apploud: number
	}[],
	applouduserid: string,
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
};

const onClick = () => { };

const SendMessage: React.FC<Props> = (props) => {
	const { users, applouduserid, onChange } = props;
	return (
		<Div_Page>
			<Div_Grid1>
				<StyledImg src={require(`../../images/user${applouduserid}.jpg`)}></StyledImg>
				<Div_Margin>
					<UserSelect users={users} onChange={e => onChange(e)} />
				</Div_Margin>
			</Div_Grid1>
			<div>
				<TextAria placeholder="5文字以上のメッセージを記入してください" />
				<div>
					<Button label="送信" onClick={onClick} />
				</div>
			</div>


		</Div_Page>
	);
};
export default SendMessage;

const Div_Grid1 = styled.div`
	text-align: left;
`;
const StyledImg = styled.img`
	margin: 10px;
	max-width:70%;
	object-fit: cover;
	background-color: white;
	vertical-align: middle;
`;
const Div_Margin = styled.div`
	margin: 10px;
`;



const Div_Page = styled.div`
	display: grid;
	grid-template-columns: 0.6fr 1.4fr;
	grid-template-rows: 1fr;
	background-color: gray;
	width: 50%;
	margin: auto;
`;
const TextAria = styled.textarea`
margin:10px;
width:90%;
height:90px;

`