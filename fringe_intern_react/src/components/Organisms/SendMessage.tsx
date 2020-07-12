import React from "react";
import Button from "../Atoms/Button";
import styled from "styled-components";
import TextAria from "../Atoms/TextAria";
import { placeholderCSS } from "react-select/src/components/Placeholder";

type Props = {
	text: string,
	placeholder:string,
	onChange:(e:React.ChangeEvent<HTMLTextAreaElement>)=>void,
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
};



const SendMessage: React.FC<Props> = (props) => {
	const { text,onChange, onClick } = props;
	return (
		<Div_Page>
			<TextAria text={text} onChange={onChange} placeholder="タスクを入力" />
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
