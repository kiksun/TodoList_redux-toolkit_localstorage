import React from "react";
import styled from "styled-components";
import Button from "../Atoms/Button";


type Props = {
	text: string,
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
};

const MessageItem: React.FC<Props> = (props) => {
	const { text, onClick } = props;


	return (
		<Div_ShowMessage>
			<div>
				{text}
			</div>
			<Button label={"完了"} onClick={onClick} />
		</Div_ShowMessage>
	);
};
export default MessageItem;

const Div_ShowMessage = styled.div`
width:50%;
margin:10px auto;
border:solid;
`

