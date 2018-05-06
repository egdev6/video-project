import React from 'react';
import MediaContainer from '../containers/MediaContainer';
import './playlist.css';

//Componente funcional->si no requiere ciclo de vida
function Playlist(props){
	return(
		<div className="Playlist">
			{
				props.playlist.map((item) => {
					return <MediaContainer 
						id={item} 
						key={item} 
						openModal={props.handleOpenModal}
					/>
				})
			}
		</div>
	)
}
export default Playlist;