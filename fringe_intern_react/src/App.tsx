import React from "react";
import "./App.css";
import ShowUserData from "./components/Organisms/ShowUserData";
import styled from "styled-components";
var user = JSON.parse(localStorage.getItem('Kimura') as string);
var names = JSON.parse(localStorage.getItem('names')as string );
var users = JSON.parse(localStorage.getItem('users')as string);


function App() {
	return (
		<StyledDiv>
			
			<ShowUserData
				image="https://1.bp.blogspot.com/-0-VrA-zoZ0E/WK7fKPKPVkI/AAAAAAABCBQ/1OS-nwYjBMA_iwWKouoLZStze_Uwyc8TwCLcB/s800/pose_furikaeru_man.png"
				clap={user.clap}
				apploud={user.apploud}
				names={names}
			/>
			
		</StyledDiv>
	);
}

export default App;

const StyledDiv = styled.div`
	margin: 10px auto;
	
	text-align: center;
	border: solid;
	border-color: black;
`;
