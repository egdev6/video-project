import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component{
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (event) =>{

	}

	render(){
		return (
			<div className="media" onClick={this.handleClick}>
				<div className="media-cover">
					<img src={this.props.cover} alt="image"/>
					<h3 className="media-title">{this.props.title}</h3>
					<p className="media-author">{this.props.author}</p>
				</div>
			</div>
		)
	}
}

Media.propTypes = {
	cover: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['video', 'audio']).isRequired,
}
export default Media;