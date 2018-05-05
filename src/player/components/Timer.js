import React from 'react';
import './timer.css';

function leftPad(num){
	const pad = '00';
	return pad.substring(0, pad.length - num.length) + num;
}

function formateTime(sec){
	const minutes = parseInt(sec / 60, 10);
	const seconds = parseInt(sec % 60, 10);
	return `${leftPad(minutes.toString())}:${leftPad(seconds.toString())}`;
}
function Timer(props){
	return(
		<div className="Timer">
			<p>
				{formateTime(props.currentTime)} / {formateTime(props.duration)}
			</p>
		</div>
	)
}

export default Timer;