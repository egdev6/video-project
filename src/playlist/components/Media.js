import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component{
	handleClick = (event) =>{

	}

	render(){
		return (
			<div className="media" onClick={this.props.handleClick}>
				<div className="media-cover">
					<div>
						<div className="media-image" style={{ backgroundImage: `url(${this.props.cover})`}} />
					</div>
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