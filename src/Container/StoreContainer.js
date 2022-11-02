import {React, useState} from "react";
import ItemList from "../Components/ItemList";
import Basket from "../Components/Basket";



const StoreContainer = () => {

    

    const [user, setUser] = useState({name: "Jess"})
    const [items, setItems] = useState([
        {id: 0, name: "cheese", price: 2.50}, 
        {id: 1, name: "tomatoes", price: 1.00}, 
        {id: 2, name: "pickle", price: 1.60}, 
        {id: 3, name: "bread", price: 3.00}, 
        {id: 4, name: "sea food sticks", price: 1.00}])
    const [basket, setBasket] = useState([
    ])
    
    function buyButton(id) {
        const chosenItem = items.find(item => item.id === id);
        setBasket(basket.push(chosenItem))

    return (
        <>
            <h3>This is the container</h3>
            <ItemList items = {items} buyButton = {buyButton}/> 
            <Basket basket = {basket} /> 
        </>
    )}

};

export default StoreContainer;