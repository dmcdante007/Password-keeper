import React, { useState } from "react";
import ContextRead from "./context-read";

const ContextProvider = (props) => {
  const [titles, setTitles] = useState([]);
  const [searchList, setsearchList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  
  const updateTitleList = (title) => {
    // console.log(titles);
    setTitles([...titles, title]);
    setsearchList([...titles, title]);
  };

  const searchBar = (e)=>{
    setSearchTerm(e)
  }


  const removeItem = (id , title, pass)=>{
        // console.log(id)
        
        setTitles((prev) => {
        const updatedList = prev.filter((user) => user.id !== id);
            return updatedList
        
    });
    setsearchList((prev) => {
        const updatedList = prev.filter((user) => user.id !== id);
            return updatedList
        
    });
    

    }

    const toEditItem =(id, newTitle, newPass)=>{
        setTitles(prev => prev.map(item => {
            if (item.id === id) {
              return { ...item, title: newTitle, pass: newPass };
            }
            return item;
          }));
        setTitles((prev) => {
            const updatedList = prev.filter((user) => user.id !== id);
                return updatedList
        });
    }
  const allTitlesAndPass = {
    item: titles,
    update: updateTitleList,
    toDelete: removeItem,
    editItem: toEditItem,
    setSearch: searchBar,
    valIs: searchList,
    search: searchTerm,
  };

  return (
    <ContextRead.Provider value={{ allTitlesAndPass }}>
      {props.children}
    </ContextRead.Provider>
  );
};

export default ContextProvider;
