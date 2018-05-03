import React from 'react';
import Category from './Category';
import SearchContainer from '../../widgets/containers/SearchContainer';
import './categories.css';

function Categories(props){
	return (
		<div className="Categories">
			<SearchContainer />
			{
				props.categories.map((item) => {
					return <Category 
						{...item} 
						key={item.id}
						handleOpenModal={props.handleOpenModal} 
					/>
				})
			}
		</div>
	)
}

export default Categories;