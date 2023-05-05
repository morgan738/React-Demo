import React from "react";

const Topping = (props) => {
    console.log("props --> ", props)
    return(
        <li onClick={() => props.changeTopping(props.toppingName)}>{props.toppingName}</li>
        
    )

}

export default Topping