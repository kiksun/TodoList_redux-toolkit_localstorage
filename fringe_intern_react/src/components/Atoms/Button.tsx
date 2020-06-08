import React from "react";
import styled from "styled-components";

type Props = {
	label: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Props> = (props) => {
	const { label, onClick } = props;
	return <SendButton onClick={onClick}>{label}</SendButton>;
};

export default Button;

const SendButton = styled.button`
	margin: 8px;
	width: 200px;
	height:50px;
`;
