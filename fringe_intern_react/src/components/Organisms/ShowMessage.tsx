import React from "react";
import styled from "styled-components"
import MessageItem from "../modules/MessageItem"
type Props = {
    Tasks: string[],
    
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

const ShowMessage: React.FC<Props> = (props) => {
    const { Tasks,  onClick } = props;
    return (
        <Div_Page>
            
            <MessageItem Tasks={Tasks}  onClick={onClick} />
        </Div_Page>
    );
};

export default ShowMessage;

const Div_Page = styled.div`
margin:10px auto;
    width:50%;
	border:solid;
	text-align:center;
`;