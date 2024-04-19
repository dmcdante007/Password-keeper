import React, { useContext } from "react";
import ContextRead from "./store/context-read";
const SearchBar = ()=>{
    const ctx = useContext(ContextRead)

    const filteredRecords = ctx.allTitlesAndPass.valIs.filter((record) =>
  record.tit.toLowerCase().includes(ctx.allTitlesAndPass.search.toLowerCase()) 
);


    return(<React.Fragment>
        <ul>
        {filteredRecords.map((item)=>(
            <li>{item.tit}{item.pas}</li>
        ))}
        </ul>
    </React.Fragment>)
}

export default SearchBar;