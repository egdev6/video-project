import React from 'react';
import ReactDOM from 'react-dom';
//Componentes
import Home from '../pages/containers/Home';
//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
//Immutable JS
import {Map as map} from 'immutable';
import {logger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(
	reducer,//reducer
	map(),//initialState
	composeWithDevTools(
		applyMiddleware(
			logger,
			thunk,
		)
	)
);

const homeContainer = document.getElementById('home-container');

ReactDOM.render(
	<Provider store={store}>
		<Home />
	</Provider>		
,homeContainer);