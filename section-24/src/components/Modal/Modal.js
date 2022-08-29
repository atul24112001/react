import React from 'react';

import './Modal.css';

const modal = (props) => {
    const cssClasses = ["Modal", props.show === "entering" || props.show === "entered" ? "ModalOpen" : "ModalClose"]

    return (
        <div className={cssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button onClick={props.onCloseModal} className="Button">Dismiss</button>
        </div>
    )
};

export default modal;
// import React from "react";
// import CSSTransition from "react-transition-group/CSSTransition";

// import "./Modal.css";

// const animationTiming = {
//     enter: 500,
//     exit: 300
// };

// const modal = props => {
//     return (
//         <CSSTransition
//             mountOnEnter
//             unmountOnExit
//             in={props.show}
//             timeout={animationTiming}
//             classNames={{
//                 enter: '',
//                 enterActive: 'ModalOpen',
//                 exit: '',
//                 exitActive: 'ModalClosed'
//             }}>
//             <div className="Modal">
//                 <h1>A Modal</h1>
//                 <button className="Button" onClick={props.onCloseModal}>
//                     Dismiss
//                 </button>
//             </div>
//         </CSSTransition>
//     );
// };

// export default modal;