import React, { useState } from "react";
import styled from "styled-components";
import ShowUserData from "../Organisms/ShowUserData";
import SendMessage from "../Organisms/SendMessage";
import ShowMessage from "../Organisms/ShowMessage";
import user from "../../Rxtk/modules/userSlice";



type Props = {
    users: {
        id: number,
        name: string,
        tasknumber: number,
        tasks: string[],
        Dates: string[],
    }[],
}

const sendTask = () => {
    console.log("AddTask")
}

const Home: React.FC<Props> = (props) => {
    const [task, setTask] = useState(0);
    const { users } = props;
    const User = user;


    const AddFinishTask = () => {
        console.log(task)
        setTask(task + 1)
    };

    return (
        <StyledDiv>
            <ShowUserData
                users={props.users}
            //onChange={User.actions.Addtask}
                finishedtask={task}
            />
            <SendMessage onClick={sendTask} />
            <ShowMessage Tasks={users[0].tasks} onClick={AddFinishTask} />
        </StyledDiv>
    );
};
const StyledDiv = styled.div`
    border: solid;
    border-color: black;
    `


export default Home;