import React from 'react';
import styled from 'styled-components';



type Props = {
    ClapUserId: number,
    ApploudUserId: number,
}

const ShowMessageIcon: React.FC<Props> = (props) => {
    const { ClapUserId, ApploudUserId} = props;
    console.log(ClapUserId);
    return (
			<div>
            <IMG src={require(`../../images/user${ClapUserId}.jpeg`)}></IMG>
            <IMG src={require("../../images/Arrow.png")}></IMG>
            <IMG src={require(`../../images/user${ApploudUserId}.jpeg`)}></IMG>
			</div>
		);
}

const IMG = styled.img`
margin:1px;
width:80px;
`

export default ShowMessageIcon;
