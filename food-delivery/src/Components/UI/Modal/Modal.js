import React from 'react';
import ReactDOM from 'react-dom';
import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClick}/>
    )
}

const Overlay = (props) => {
    return (
            <div className={classes.modal}>
                <div className={classes.content}>{props.children}</div>
            </div>
    )
}

export default function Modal(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, document.getElementById("overlay"))}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById("overlay"))}
        </React.Fragment>
    )
}
