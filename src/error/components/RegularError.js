import React from 'react';
import error from '../../../images/error.png';
import './error.css';

function RegularError(props){
	return(
		<img class="error" src={error} alt="Ocurio un error"/>
	)
}

export default RegularError;