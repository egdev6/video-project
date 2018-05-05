import React from 'react';
import './modal.css';
import Icon from '../../icons/components/Icon';

function Modal(props){
	return (
		<div className="Modal">
			<a className="close" href="#" onClick={props.handleClick}>
				<Icon name="times-circle" size="2x" />
			</a>
			{props.children}
		</div>
	)
}

export default Modal;