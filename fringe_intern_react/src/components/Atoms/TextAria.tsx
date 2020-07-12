import React from "react";
import styled from "styled-components";

type Props = {
	text: string;
	placeholder: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
const Form: React.FC<Props> = (props) => {
	const { text, placeholder, onChange } = props;
	return<StyledTextArea onChange={onChange} value={text} placeholder={placeholder}></StyledTextArea>;
};
export default Form;

const StyledTextArea = styled.textarea`
	margin: 10px;
	vertical-align:top;
	font-size: 20px;
	width: 80%;
	height: 140px;
`;
