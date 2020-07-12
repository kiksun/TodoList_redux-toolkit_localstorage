import React, { useState } from "react";
import Button from "../Atoms/Button";
import styled from "styled-components";
import TextAria from "../Atoms/TextAria";
import { useDispatch } from "react-redux";
import { AddTask } from "../../Rxtk/modules/userSlice";


type Props = {
	users: {
		id: number,
		name: string,
		tasknumber: number,
		complete: number,
		tasks: string[],
	}[],
	tasks:string[],
	nowuserid: number
}

const SendMessage: React.FC<Props> = (props) => {
	const { users, nowuserid,tasks } = props
	const [text, setText] = useState('')
	const dispatch = useDispatch();
	const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
	}
	const sendTask = () => {
		if (text !== "") {
			dispatch(AddTask(text))
			setText('')
		}
	}
	return (
		<Div_Page>
			<TextAria text={text} onChange={handleTextAreaChange} placeholder="タスクを入力" />
			<Button label="送信" onClick={sendTask} />
		</Div_Page>
	);
};
export default SendMessage;

const Div_Page = styled.div`
margin:10px auto;
    width:50%;
	background-color:grey;
	text-align:center;
`;
