import React from 'react';
import './modal.css';
import Icon from '../../icons/components/Icon';

function Modal(props){
	return (
		<div className="Modal">
			<a href="#" onClick={props.handleClick}>
				<Icon name="times-circle" size="lg" />
			</a>
			{props.children}
		</div>
	)
}

export default Modal;