import React from 'react';
import Media from './Media.js';
import './playlist.css';

//Componente funcional->si no requiere ciclo de vida
function Playlist(props){
	return(
		<div className="Playlist">
			{
				props.playlist.map((item) => {
					return <Media {...item} key={item.id} />
				})
			}
		</div>
	)
}
export default Playlist;