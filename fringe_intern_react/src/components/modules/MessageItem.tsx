import React from "react";
import styled from "styled-components";
import Button from "../Atoms/Button";
import { useDispatch } from "react-redux"
import { DeleteTask, AddComplete } from "../../Rxtk/modules/userSlice";


type Props = {
	text: string,
	index: number,
};

const MessageItem: React.FC<Props> = (props) => {
	const { text, index, } = props;
	const dispatch = useDispatch();
	const Addcomplete = () => {
		dispatch(DeleteTask(index));
		dispatch(AddComplete(1));
	};

	return (
		<Div_ShowMessage>
			<div>
				{text}
			</div>
			<Button label={"完了"} onClick={Addcomplete} />
		</Div_ShowMessage>
	);
};
export default MessageItem;

const Div_ShowMessage = styled.div`
width:50%;
margin:10px auto;
border:solid;
`

