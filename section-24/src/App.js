import React, { Component, Fragment } from "react";
import { Transition } from 'react-transition-group';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const anmationTiming = {
  enter: 500,
  exit: 300
}

class App extends Component {
  state = {
    ModalIsOpen: false,
    isVisible: false
  }

  modalShowHandler = () => {
    this.setState(prev => ({ ModalIsOpen: !prev.ModalIsOpen }));
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        {/* <Modal
          onCloseModal={this.modalShowHandler}
          show={this.state.ModalIsOpen}
        /> */}
        <Transition
          in={this.state.ModalIsOpen}
          timeout={anmationTiming}
          unmountOnExit
          mountOnEnter
          onEnter={() => (console.log("enter"))}
          onEntering={() => (console.log("onEntering"))}
          onEntered={() => (console.log("onEntered"))}
        >
          {state => (
            <Fragment>
              <Modal
                onCloseModal={this.modalShowHandler}
                show={state}
              />
              <Backdrop
                onCloseModal={this.modalShowHandler}
                show={state}
              />
            </Fragment>

          )}
        </Transition>

        <button onClick={this.modalShowHandler} className="Button">Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
