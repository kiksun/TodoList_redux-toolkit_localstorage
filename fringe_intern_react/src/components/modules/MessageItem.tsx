import React from "react";
import styled from "styled-components";
import MessageIcon from "../Atoms/MassegeIcon";
import Button from "../Atoms/Button";
type Props = {
	ClapUserId: string,
	ApploudUserId: string;
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
	const { ClapUserId, ApploudUserId } = props;
	const date = new Date();
	const dates = `${set2fig(date.getFullYear())}/${
		set2fig(date.getMonth() + 1)
		}/${set2fig(date.getDate())} ${set2fig(date.getHours())}:${set2fig(date.getMinutes())}`;
	console.log(dates);

	return (
		<Div_ShowMessage>
			<Div_Left>
				<MessageIcon ClapUserId={ClapUserId} ApploudUserId={ApploudUserId} />
				<p>とても頭が良くて尊敬します！</p>
				<P_middle>
					<IMG_Left src={require(`../../images/clap.jpg`)} alt={"aaa"}></IMG_Left>
					{190}
				</P_middle>
			</Div_Left>
			<Div_Right>
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
const IMG_Left = styled.img`
text-align:left;
width:50px;
vertical-align: middle;
`
const Div_Left = styled.div`
text-align:left;
`
const Div_Right = styled.div`
	text-align: right;
`

const P_middle = styled.p`
margin-right:10px;
vertical-align: middle;
`