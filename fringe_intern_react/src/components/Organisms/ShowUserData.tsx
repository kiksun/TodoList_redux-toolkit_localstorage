import React from "react";
import styled from "styled-components";
import Select from "../Atoms/UserSelect";
import Button from "../Atoms/Button";

type Props = {
	image: string;
	clap: number;
	apploute: number;
};
var UserInfo = {
	name: "Keita Kimura",
	imege:
		"https://1.bp.blogspot.com/-0-VrA-zoZ0E/WK7fKPKPVkI/AAAAAAABCBQ/1OS-nwYjBMA_iwWKouoLZStze_Uwyc8TwCLcB/s800/pose_furikaeru_man.png",
	clap: 100,
	apploud: 0,
};
const onClick = () => {
	localStorage.setItem("user01", JSON.stringify(UserInfo));
};
const ShowUserData: React.FC<Props> = (props) => {
	const { image, clap, apploute } = props;
	return (
		<Div_Page>
			<div>
				<StyledImg src={image}></StyledImg>
				拍手できる:{clap} 拍手された: {apploute}
			</div>
			<div>
				<Select />
			</div>
		</Div_Page>
	);
};

export default ShowUserData;

const Div_Page = styled.div`
	margin: 10px auto;
	background-color: skyblue;
	width: 75%;
	height: 75%;
	border: solid;
	border-color: black;
`;

const StyledImg = styled.img`
	width: 5%;
	height: 5%;
	vertical-align: middle;
`;
