import React from "react";
import styled from "styled-components";
import ShowUserData from "../Organisms/ShowUserData";
import SendMessage from "../Organisms/SendMessage";
import ShowMessageItem from "../modules/MessageItem";


type Props = {
    users: {
        id: number,
        name: string,
        clap: number,
        apploud: number,
    }[],
    clapuserid:string
    applouduserid: string,
}

type State = {
    clapuserid: string,
    applouduserid: string,
}

export default class home extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.ClapUserChange = this.ClapUserChange.bind(this);
    }
    state: State = {
        clapuserid: '0',
        applouduserid: '1',
    };


    ClapUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        var newclapuserid: string = e.currentTarget.value;
        this.setState({
            clapuserid: newclapuserid,
        })
    };
    ApploudUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        var newapplouduserid: string = e.currentTarget.value;
        this.setState({
            applouduserid: newapplouduserid,
        })
    };

    StyledDiv = styled.div`
    text-align: center;
    border: solid;
    border-color: black;
    `


    render() {
        console.log(this.state.applouduserid);
        return (
            <this.StyledDiv>
                <ShowUserData
                    users={this.props.users}
                    userid={this.state.clapuserid}
                    onChange={this.ClapUserChange}
                />
                <SendMessage
                    users={this.props.users}
                    applouduserid={this.state.applouduserid}
                    onChange={this.ApploudUserChange}
                />
                <ShowMessageItem ClapUserId={this.state.clapuserid} ApploudUserId={this.state.applouduserid}/>
            </this.StyledDiv>
        );
    }
};


