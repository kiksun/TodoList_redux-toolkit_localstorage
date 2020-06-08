import React from "react";
import styled from "styled-components";
import ShowUserData from "../Organisms/ShowUserData";
import SendMessage from "../Organisms/SendMessage";
import ShowMessage from "../Organisms/ShowMessage";

type Props = {
    users: {
        id: number,
        name: string,
        clap: number,
        apploud: number,
    }
    image: number;
}
const ClapUserChange = () => { };
const ApploudUserChange = () => { };

const home: React.FC<Props> = (props) => {
    const { users ,image} = props;
    return (
        <StyledDiv>
            <ShowUserData
                image={require(`../../images/user${users.id}.jpeg`)}
                clap={users.clap}
                apploud={users.apploud}
                names={["aa", "aa"]}
                onChange={ClapUserChange}
            />
            <SendMessage
                names={["aa", "aa"]}
                image={require(`../../images/user${users.id}.jpeg`)}
                onChange={ApploudUserChange}
            />
            <ShowMessage ClapUserIcon={"aa"} Arrow={"aa"} ApploudUserIcon={"aa"} />
        </StyledDiv>
    );
};

export default home;

const StyledDiv = styled.div`
	text-align: center;
	border: solid;
	border-color: black;
`;
