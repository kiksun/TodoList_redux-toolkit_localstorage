import React from "react";
import styled from "styled-components";
import MessageIcon from "./MassegeIcon";
type Props = {
	Arrow: string;
	ClapUserId: number,
	ApploudUserId: number;
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
const MessageItem: React.FC<Props> = (props) => {
	const { ClapUserId, ApploudUserId, Arrow } = props;
	const date = new Date();
	const dates = `${set2fig(date.getFullYear())}/${
		set2fig(date.getMonth() + 1)
		}/${set2fig(date.getDate())} ${set2fig(date.getHours())}:${set2fig(date.getMinutes())}`;
	console.log(dates);

	return (
		<Div_ShowMessage>
			<Div_Left>
				<MessageIcon ClapUserId={ClapUserId}  ApploudUserId={ApploudUserId} />
			</Div_Left>
			<Div_Right>
				<Button_Left></Button_Left>
				<p>{dates}</p>
			</Div_Right>

		</Div_ShowMessage>
	);
};
export default MessageItem;

const Div_ShowMessage = styled.div`
text-align:center;
width:50%;
margin:10px auto;
border:solid;
`
const Button_Left = styled.button`text-align:left`
const Div_Left = styled.div`
text-align:left;
`
const Div_Right = styled.div`
	text-align: right;
`;