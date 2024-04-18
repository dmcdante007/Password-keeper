import React, {useContext} from "react";
import ContextRead from "./store/context-read";

const EnteredDataList = (props) =>{
    const ctx = useContext(ContextRead);
    const removeItem = ()=>{
        console.log('remveed')
    }
    
    return(
    <React.Fragment>
        <ul>
            <h3>Records:</h3>
        {ctx.allTitlesAndPass.item.map((items)=>(
        <li>
            {items.tit} {items.pas}
            <button onClick={removeItem}>Delete</button>
            <button>Edit</button>
        </li>
        
    ))}
        </ul>
    </React.Fragment>)
}

export default EnteredDataList;