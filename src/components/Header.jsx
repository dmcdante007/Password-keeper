import React, { useContext, useState } from "react";
import Button from "./Button";
import ContextRead from "./store/context-read";
import SearchBar from "./SearchBar";

const Header = (props) => {
  const ctx = useContext(ContextRead);
  let records = ctx.allTitlesAndPass.item.length;

  return (
    <div style={{ marginBottom: "10em", textAlign: "center" }}>
      <h1>Password Keeper</h1>
      <h3>Total Passwords:{records}</h3>
      <Button onClick={props.onbuttonClick} /> <br />
      <input
        type="text"
        // value={ctx.allTitlesAndPass.valIs}
        onChange={(e) => ctx.allTitlesAndPass.setSearch(e.target.value)}
        style={{ marginBottom: "1em" }}
      />
      <SearchBar/>
    </div>
  );
};

export default Header;
