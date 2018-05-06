import React from 'react';
import ReactDOM from 'react-dom';
//Componentes
import Home from '../pages/containers/Home';
//Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/index';
//Immutable JS
import {Map as map} from 'immutable';

const store = createStore(
	reducer,//reducer
	map(),//initialState
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),//enhacer
);

const homeContainer = document.getElementById('home-container');
ReactDOM.render(
	<Provider store={store}>
		<Home />
	</Provider>		
,homeContainer);