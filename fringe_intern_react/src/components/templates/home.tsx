import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../Rxtk/modules/rootReducer";
import { AddTask, ChangeUserId, AddComplete } from "../../Rxtk/modules/userSlice";
import ShowUserData from "../Organisms/ShowUserData";
import SendMessage from "../Organisms/SendMessage";
import ShowMessage from "../Organisms/ShowMessage";


type Props = {
    users: {
        id: number,
        name: string,
        tasknumber: number,
        complete: number,
        tasks: string[],
    }[],
}


const Home: React.FC<Props> = (props) => {
    const { users } = props
    const [text, setText] = useState('')
    const { id, tasks, complete, tasknumber } = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch();

    const Addcomplete = () => {
        dispatch(AddComplete(1))
    };
    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }
    const ChangeUser = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(e.currentTarget.value, 10);
        dispatch(ChangeUserId(value))
    }
    const sendTask = () => {
        if (text !== "") {
            dispatch(AddTask(text))
            setText('')
        }
    }
    return (
        <StyledDiv>
            <ShowUserData
                users={users}
                onChange={ChangeUser}
                tasknumber={tasks.length}
                complete={complete as number}
                nowuserid={id as number}
            />
            <SendMessage onChange={handleTextAreaChange} onClick={sendTask} text={text} placeholder="タスクを入力" />
            <ShowMessage Tasks={tasks} onClick={Addcomplete} />
        </StyledDiv>
    );
};
const StyledDiv = styled.div`
    border: solid;
    border-color: black;
    `


export default Home;