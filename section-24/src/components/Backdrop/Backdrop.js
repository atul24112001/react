import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const cssClasses = ["Backdrop", props.show === "entering" || props.show === "entered" ? "BackDropOpen" : "BackdropClose"]
    return (
        <div onClick={props.onCloseModal} className={cssClasses.join(" ")}></div>
    )
};

export default backdrop;