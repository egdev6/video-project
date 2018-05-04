import React from 'react';
import Icon from '../../icons/components/Icon';
import './play-pause.css';

function PlayPause(props){
	return(
		<div className="PlayPause">
			{
				props.pause ?
					<a href="#" className="Play" onClick={props.handleClick}><Icon name="play" size="1x" /></a>
				:
					<a href="#" className="Pause" onClick={props.handleClick}><Icon name="pause" size="1x" /></a>
			}
		</div>
	)
}

export default PlayPause;