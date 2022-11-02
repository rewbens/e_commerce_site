import React from "react";
import Button from "./Button";

const Item = ({buyButton}) => {
    function clickHandler (evt) {
        const id = evt.target.value;
        buyButton(id);
    }
    return (
        <>
        <p>hello</p>
        <Button onClick={clickHandler}/>
        </>
    )
}

export default Item