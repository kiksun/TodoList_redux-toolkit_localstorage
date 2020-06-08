import React from 'react';
import styled from 'styled-components';



type Props = {
    ClapUserId: string,
    ApploudUserId: string,
}

const ShowMessageIcon: React.FC<Props> = (props) => {
    const { ClapUserId, ApploudUserId} = props;
    console.log(ClapUserId);
    return (
			<div>
            <IMG src={require(`../../images/user${ClapUserId}.jpg`)}></IMG>
            <IMG src={require("../../images/Arrow.png")}></IMG>
            <IMG src={require(`../../images/user${ApploudUserId}.jpg`)}></IMG>
			</div>
		);
}

const IMG = styled.img`
margin:1px;
width:30px;
`

export default ShowMessageIcon;
