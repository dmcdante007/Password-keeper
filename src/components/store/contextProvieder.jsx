import React, { useState } from "react";
import ContextRead from "./context-read";

const ContextProvider = (props) => {
  const [titles, setTitles] = useState([]);

  const updateTitleList = (title) => {
    // console.log(titles);
    setTitles([...titles, title]);
  };

  const removeItem = (id)=>{
        // console.log(id)
        setTitles((prev) => {
        const updatedList = prev.filter((user) => user.id !== id);
            return updatedList
    });

    }
  const allTitlesAndPass = {
    item: titles,
    update: updateTitleList,
    toDelete: removeItem,
  };

  return (
    <ContextRead.Provider value={{ allTitlesAndPass }}>
      {props.children}
    </ContextRead.Provider>
  );
};

export default ContextProvider;
