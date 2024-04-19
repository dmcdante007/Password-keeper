import React, { useContext, useRef } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import ContextRead from "../store/context-read";

const Backdrop = (props) => {
  return <div className={classes.backdrop}> </div>;
};
const ModalOverlay = (props) => {
  const ctx = useContext(ContextRead);
  const titleIS = useRef();
  const passIS = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const pass = e.target.password.value;
    const obj = {
      id: Math.random(),
      tit: title,
      pas: pass,
    };
    ctx.allTitlesAndPass.update(obj);

    titleIS.current.value = '';
    passIS.current.value = '';
  };

  return (
    <div className={classes.modal}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleIS}></input> <br />
        <label htmlFor="password">Password</label>
        <input type="passwor" id="password" ref={passIS} />
        <button type="submit">Add</button>
        <button
          type="button"
          onClick={() => {
            props.onClose();
          }}
        >
          x
        </button>
      </form>
    </div>
  );
};

const Modal = (props) => {
  const modalDiv = document.getElementById("modal");

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, modalDiv)}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
        modalDiv
      )}
    </React.Fragment>
  );
};

export default Modal;
