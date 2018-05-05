import React from 'react';
import Icon from '../../icons/components/Icon';
import './play-pause.css';

function FullScreen(props){
	return (
		<div 
			className="FullScreen"
			onClick={props.handleFullScreen}
			>
			<Icon 
				name="arrows-alt" 
				size="1x" 
			/>
		</div>
	)
}

export default FullScreen;