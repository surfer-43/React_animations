import React from 'react';
import Transition from 'react-transition-group/Transition'

import './Modal.css';

/**
 * to make sure the entir animation plays
 * the duration in miliseconds must be the same
 */
const animationTiming = {
    enter: 400,
    exit: 1000
}

const modal = (props) => {
    console.log("(modal) what is the props: ", props);
    const cssClasses = ['Modal'];

    console.log("value of cssClasses: ", cssClasses);

    return (
        <Transition
            mountOnEnter
            unmountOnExit
            in={props.show}
            timeout={animationTiming}
        >
            { state => {
                const cssClasses = ['Modal'
                ,state === 'entering' 
                ? 'ModalOpen' 
                : state === 'exiting'? 'ModalClosed' : null ];
                return (
                    <div className={cssClasses.join(' ')}>
                        <h1>A Modal</h1>
                        <button className="Button" onClick={props.closed}>Dismiss</button>
                    </div>
                )
            }}
        </Transition>
    );
};

export default modal;