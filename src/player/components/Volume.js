import React from 'react';
import Icon from '../../icons/components/Icon';
import './play-pause.css';


function Volume(props){
	return (
		<div className="Volume">
			<Icon name="volume-up" size="1x" />
			<div className="Volume-range">
				<input 
					type="range" 
					orient="vertical" 
					min={0}
					max={1}
					step={.05}
					onChange={props.handleVolumeChange}
				/>
			</div>
		</div>

	)
}

export default Volume;