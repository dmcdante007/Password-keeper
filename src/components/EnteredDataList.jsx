import React, {useContext} from "react";
import ContextRead from "./store/context-read";

const EnteredDataList = (props) =>{
    const ctx = useContext(ContextRead);
    
    
    const editItem = ()=>{

    }
    return(
    <React.Fragment>
        <ul>
            <h3>Records:</h3>
        {ctx.allTitlesAndPass.item.map((items)=>(
        <li key={items.id}>
            {items.tit} {items.pas}
            <button type="button" onClick={()=>ctx.allTitlesAndPass.toDelete(items.id)}>Delete</button>
            <button type="button" onClick={()=>editItem(items.id)}>Edit</button>
        </li>
        
    ))}
        </ul>
    </React.Fragment>)
}

export default EnteredDataList;