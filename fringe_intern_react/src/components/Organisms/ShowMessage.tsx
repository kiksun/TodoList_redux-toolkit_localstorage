import React from "react";

type Props = {
    a: string;
}
const ShowMessage: React.FC<Props> = (props) => {
    const { a } = props;
    return (<div>{a}</div>);
};

export default ShowMessage;