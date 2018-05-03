import React from 'react';
import Playlist from '../../playlist/components/Playlist.js';
import './category.css';

function Category(props){
	return (
		<div className="Category">
			<p>{props.description}</p>
			<h2>{props.title}</h2>
			<Playlist 
				playlist={props.playlist} 
				handleOpenModal={props.handleOpenModal}
			/>
		</div>
	)
}

export default Category;