import React from "react";
import styled from "styled-components";
import Select from "../Atoms/UserSelect";
import UserInfo from "../../Userinfo";

type Props = {
	names: string[];
	image: string;
	clap: number;
	apploud: number;
};

const ShowUserData: React.FC<Props> = (props) => {
	const { names, image, clap, apploud } = props;
	return (
		<Div_Page>
			<div>
				<StyledImg src={image}></StyledImg>
				拍手できる:{clap} 拍手された: {apploud}
			</div>
			<Div_Inline>
				<Select names={names}/>
			</Div_Inline>
		</Div_Page>
	);
};

export default ShowUserData;

const Div_Page = styled.div`
	margin: 10px auto;
	background-color: skyblue;
	text-align: center;
	width: 75%;
	border: solid;
`;
const Div_Inline = styled.div`
	margin: 10px;
	display: inline-block;
`;

const StyledImg = styled.img`
	width: 10%;
	height: 10%;
	margin: 10px;
	background-color: white;
	vertical-align: middle;
`;
