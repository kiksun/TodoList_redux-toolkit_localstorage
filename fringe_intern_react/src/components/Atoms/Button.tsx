import React from "react";
import styled from "styled-components";

type Props = {
	label: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<Props> = (props) => {
	const { label, onClick } = props;
	return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
	margin: 8px;
`;
