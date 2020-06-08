import React from "react";
import styled from "styled-components";
import ShowMessageIcon from "../Atoms/ShowMassegeIcon";
type Props = {
    ClapUserIcon: string;
    Arrow: string;
    ApploudUserIcon: string,
};
const set2fig = (num: number) => {
    var ret
    if (num < 10) {
			ret = "0" + num;
		} else {
			ret = num;
		}
		return ret;
}
const ShowMessage: React.FC<Props> = (props) => {
	const { ClapUserIcon,Arrow,ApploudUserIcon} = props;
    const date = new Date();
    const dates = `${set2fig(date.getFullYear())}/${
			set2fig(date.getMonth() + 1)
		}/${set2fig(date.getDate())} ${set2fig(date.getHours())}:${set2fig(date.getMinutes())}`;
	console.log(dates);
	
	return (
        <Div_ShowMessage>
            <Div_Left>
                <ShowMessageIcon ClapUserIcon={ClapUserIcon} Arrow={Arrow} ApploudUserIcon={ApploudUserIcon}/>
            </Div_Left>
            <Div_Right>
			<p>{dates}</p>
            </Div_Right>
			
		</Div_ShowMessage>
	);
};
export default ShowMessage;

const Div_ShowMessage = styled.div`
text-align:center;
width:50%;
margin:10px auto;
border:solid;
`

const Div_Left = styled.div`
text-align:left;
`
const Div_Right = styled.div`
	text-align: right;
`;