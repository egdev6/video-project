import React from 'react';
import Fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FreeSolid from '@fortawesome/fontawesome-free-solid';

function Icon(props){
	return (
		<FontAwesomeIcon icon={props.name} size={props.size} color={props.color}/>
	)
}

export default Icon;