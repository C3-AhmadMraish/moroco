import React from 'react'
import { useHistory } from "react-router-dom";

function Main() {
    const history = useHistory();
    history.push("/Login");
    return (
        <div>
            <h1>Hi Mai </h1>
        </div>
    )
}

export default Main


