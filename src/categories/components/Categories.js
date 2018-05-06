import React from 'react';
import Category from './Category';
import SearchContainer from '../../widgets/containers/SearchContainer';
import Media from '../../playlist/components/Media.js';
import './categories.css';

function Categories(props){
	return (
		<div className="Categories">
			<SearchContainer />
			{
				props.search.map((item) => {
						return <Media 
							{...item.toJS()} 
							key={item.get('id')}
						/>
				})
			}
			{
				props.categories.map((item) => {
					return <Category 
						{...item.toJS()} 
						key={item.get('id')}
						handleOpenModal={props.handleOpenModal} 
					/>
				})
			}
		</div>
	)
}

export default Categories;