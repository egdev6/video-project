import React from 'react';
import ReactDOM from 'react-dom';
//Componentes
import Home from '../pages/containers/Home';
//API data
import data from '../api.json';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
	data: {
		...data
	}
}

const store = createStore(
	(state) => state,//reducer
	initialState,//initialState
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),//enhacer
);

console.log(store.getState());

const homeContainer = document.getElementById('home-container');
ReactDOM.render(
	<Provider store={store}>
		<Home />
	</Provider>		
,homeContainer);