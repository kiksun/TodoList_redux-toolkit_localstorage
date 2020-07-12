import React from "react";
import styled from "styled-components"
import MessageItem from "../modules/MessageItem"


type Props = {
    users: {
        id: number,
        name: string,
        tasknumber: number,
        complete: number,
        tasks: string[],
    }[],
    Tasks: string[],
}
const ShowMessage: React.FC<Props> = (props) => {
    const { users,Tasks } = props;

    return (
        <Div_Page>
            {Tasks.map((task, index) => {
                return (
                    <MessageItem key={index} text={task} index={index} />
                )
            })}
        </Div_Page>
    );
};

export default ShowMessage;

const Div_Page = styled.div`
margin:10px auto;
    width:50%;
	text-align:center;
`;