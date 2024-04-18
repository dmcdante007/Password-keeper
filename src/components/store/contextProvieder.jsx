import React, { useState } from "react";
import ContextRead from "./context-read";

const ContextProvider = (props)=>{
    const [titles, setTitles] = useState([])
    
    const updateTitleList = (title)=>{
        console.log(titles)
        setTitles([...titles, title])
    }

    const allTitlesAndPass ={
        item: titles,
        update: updateTitleList 
    }


    return <ContextRead.Provider value={{allTitlesAndPass}}>
        {props.children}
    </ContextRead.Provider>
}

export default ContextProvider;