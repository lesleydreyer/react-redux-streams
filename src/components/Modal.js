import React from 'react';
import ReactDOM from 'react-dom';

//portals are good if you want to create a modal or render something that was not created by react
//helps cuz then you dont have to mess with z-index and 100s of parent component css to get it to show correct
const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active" >
            <div onClick={(e) => e.stopPropagation()/*prevents bubbling up the dom so that the onclick to history above doesn't happen on the modal, only the background*/} className="ui standard modal visible active" >
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;