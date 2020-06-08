import React from 'react';
import styled from 'styled-components';


type Props = {
    ClapUserIcon: string;
    ApploudUserIcon: string;
    Arrow: string;
}

const ShowMessageIcon: React.FC<Props> = (props) => {
    const { ClapUserIcon, ApploudUserIcon, Arrow } = props;
    console.log(ClapUserIcon);
    return (
			<div>
				<IMG src={ClapUserIcon}></IMG>
				<IMG src={Arrow}></IMG>
				<IMG src={ApploudUserIcon}></IMG>
			</div>
		);
}

const IMG = styled.img`
margin:1px;
width:80px;
`

export default ShowMessageIcon;
