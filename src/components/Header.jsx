import React, { useContext } from "react";
import Button from "./Button";
import ContextRead from "./store/context-read";

const Header = (props) => {
    const ctx = useContext(ContextRead)
    let records = ctx.allTitlesAndPass.item.length

  return (
    <div style={{marginBottom:'10em', textAlign: 'center'}}>
      <h1>Password Keeper</h1>
      <h3>Total Passwords:{records}</h3>
      <Button onClick={props.onbuttonClick}/>
    </div>
  );
};

export default Header;
