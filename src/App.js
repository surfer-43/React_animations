import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import CSSTransition from "react-transition-group/CSSTransition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state= {
    modalIsOpen: false,
    showRedBlock: false,
    showBlueBlock: false
  }
  showModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    })
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    })
  }

  showBlock = (evt) => {
    console.log("this the the event fired: ", evt.target.innerHTML);
    if(evt.target.innerHTML.includes("red") ) {
      console.log("it;s all about red");
      this.setState({showRedBlock: !this.state.showRedBlock});
    }
    if(evt.target.innerHTML.includes("blue") ) {
      console.log("do the blue!");
      this.setState({showBlueBlock: !this.state.showBlueBlock});
    }
  }
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={(event) => this.showBlock(event)}>Toggle red square</button>
        <button className="Button" onClick={(event) => this.showBlock(event)}>Toggle blue square</button>
        <br />
        <Transition 
          in={this.state.showRedBlock} 
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => {console.log("onEnter callback was fired")}}
          onEntering={() => {console.log("onEntering callback was fired")}}
          onEntered={() => {console.log("onEntered callback was fired")}}
          onExit={() => {console.log("onExit callback was fired")}}
          onExiting={() => {console.log("onExiting callback was fired")}}
          onExited={() => {console.log("onExited callback was fired")}}
          >
          {state => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: 'opacity 1s ease-out',
                opacity: state === 'exiting' ? 0 : 1
              }}
            />
          )}
        </Transition>

        <CSSTransition
          in={this.state.showBlueBlock} 
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => {console.log("onEnter callback was fired")}}
          onEntering={() => {console.log("onEntering callback was fired")}}
          onEntered={() => {console.log("onEntered callback was fired")}}
          onExit={() => {console.log("onExit callback was fired")}}
          onExiting={() => {console.log("onExiting callback was fired")}}
          onExited={() => {console.log("onExited callback was fired")}}
          classNames='fade-slide'
        >
          <div className='blueBox'/>

        </CSSTransition>
        {/* <Transition
          in={this.state.modalIsOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {state => (<Modal show={state} closed={this.closeModal}/>)}
        </Transition> */}
        <Modal show={this.state.modalIsOpen} closed={this.closeModal}/>
        { this.state.modalIsOpen ? (<Backdrop show={this.state.modalIsOpen} closed={this.closeModal}/>) : null }
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
