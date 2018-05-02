import React from 'react';
import ReactDOM from 'react-dom';
//Componentes
import Playlist from './src/playlist/components/Playlist';
//API data
import data from './src/api.json';

const app = document.getElementById('app');

ReactDOM.render(<Playlist data={data} />,app);