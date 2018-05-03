import React from 'react';
import ReactDOM from 'react-dom';
//Componentes
import Home from '../pages/containers/Home';
//API data
import data from '../api.json';

const app = document.getElementById('app');

ReactDOM.render(
		<Home data={data} />
,app);