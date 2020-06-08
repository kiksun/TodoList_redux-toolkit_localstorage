import React from "react";
import styled from "styled-components";
import ShowUserData from "../Organisms/ShowUserData";
import SendMessage from "../Organisms/SendMessage";
import ShowMessage from "../Atoms/MessageItem";


type Props = {
    users: {
        id: number,
        name: string,
        clap: number,
        apploud: number,
    }[],
    clapuserid:number,
    applouduserid:number,
}

type State = {
    clapuserid: number,
    applouduserid: number,
}

export default class home extends React.Component<Props, State> {
    state: State = {
        clapuserid: 0,
        applouduserid: 1,
    };

    ClapUserChange = () => {
        this.setState({
        })
    };
    ApploudUserChange = () => { };
    StyledDiv = styled.div`
    text-align: center;
    border: solid;
    border-color: black;
    `


    render() {
        console.log(this.state.clapuserid);
        return (
            <this.StyledDiv>
                <ShowUserData
                    users={this.props.users}
                    onChange={this.ClapUserChange}
                />
                <SendMessage
                    users={this.props.users}
                    onChange={this.ApploudUserChange}
                />
            </this.StyledDiv>
        );
    }
};


