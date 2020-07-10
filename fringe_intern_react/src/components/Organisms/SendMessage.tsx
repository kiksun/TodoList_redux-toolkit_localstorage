import React from "react";
import Button from "../Atoms/Button";
import styled from "styled-components";


type Props = {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
};



const SendMessage: React.FC<Props> = (props) => {
	const { onClick } = props;
	return (
		<Div_Page>	
				<TextAria placeholder="5文字以上のメッセージを記入してください" />		
					<Button label="送信" onClick={onClick} />		
		</Div_Page>
	);
};
export default SendMessage;

const Div_Page = styled.div`
margin:10px auto;
    width:25%;
	background-color:grey;
	text-align:center;
`;
const TextAria = styled.textarea`
margin:10px;
width:90%;
height:90px;

`