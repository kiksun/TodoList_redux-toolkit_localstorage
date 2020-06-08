import React from "react";
import styled from "styled-components";

type Props = {
	text: string;
};
const Form: React.FC<Props> = (props) => {
	const { text } = props;
	return <StyledInput placeholder={text}></StyledInput>;
};
export default Form;

const StyledInput = styled.input`
	margin: 10px;
	vertical-align:top;
	font-size: 20px;
	width: 80%;
	height: 140px;
`;
