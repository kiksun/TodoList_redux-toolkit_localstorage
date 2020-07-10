import React from "react";
import styled from "styled-components";
import MessageIcon from "../Atoms/MassegeIcon";
import Button from "../Atoms/Button";
type Props = {
	Tasks: string[],
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
};

const MessageItem: React.FC<Props> = (props) => {
	const {Tasks,onClick} = props;


	return (
		<Div_ShowMessage>
			<div>
				Task.map
			</div>
			<Button label={"完了"} onClick={onClick}/>
		</Div_ShowMessage>
	);
};
export default MessageItem;

const Div_ShowMessage = styled.div`
width:50%;
margin:10px auto;
border:solid;
`

const Div_Right = styled.div`
	text-align: right;
`
