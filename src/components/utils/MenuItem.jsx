import React from "react";
import Burger from "./CartBurger";

function MenuItem (props) {
    console.log(props.el)
    return(
        <ul className={`${props.class} pl-4 pr-4`}>
        {props.data.map(item =>{
            if(item.type === props.el){
            return <Burger key={item._id} data={item}/>				
            }
        })}
         </ul>
    )
}
export default MenuItem


// пропс предает объект data  нужно еще передать класс для ui и type 