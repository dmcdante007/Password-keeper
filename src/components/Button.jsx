import React, { useState } from "react";
import { useContext } from "react";
import ContextRead from "./store/context-read";
const Button = (props)=>{
    

    return (
        <button onClick={()=>props.onClick()}>Add New Password</button>
    )
}

export default Button;