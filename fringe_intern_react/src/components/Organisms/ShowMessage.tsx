import React from "react";

type Props = {
    a: number;
}
const ShowMessage: React.FC<Props> = (props) => {
    const { a } = props;
    return (<div>{a}</div>);
};

export default ShowMessage;