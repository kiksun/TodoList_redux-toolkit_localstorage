import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from "../../Rxtk/modules/rootReducer";
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
    const { id, tasks, complete } = useSelector((state: RootState) => state.user)

    return (
        <div>
            <ShowUserData
                users={users}
                tasknumber={tasks.length}
                complete={complete as number}
                nowuserid={id as number}
            />
            <SendMessage users={users} tasks={tasks} nowuserid={id as number}/>
            <ShowMessage users={users} Tasks={tasks} />
        </div>
    );
};


export default Home;