import React from "react";
import Item from "./Item";

const ItemList = ({items, buyButton}) => {
        const ItemsList = items.map((item) => {
            return (<Item buyButton={buyButton} items = {items} />)
        })
    return (
    <>

    <ul>
        {ItemsList}
    </ul>
    
    </>
    
    )
}

export default ItemList;