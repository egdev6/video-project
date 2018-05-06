import React, {Component} from 'react';
import Search from '../components/Search';
import {connect} from 'react-redux';

class SearchContainer extends Component{
	state = {
		value:"",
	}
	handleSubmit = event => {
		event.preventDefault();
		this.props.dispatch({
			type: 'SEARCH_VIDEO',
			payload: {
				query: this.input.value,
			}
		});
	}
	setInputRef = element => {
		this.input = element;
	}
	handleChange = event => {
		this.setState({
			value:event.target.value,
		});
	}
	render(){
		return(
			<Search 
				setRef={this.setInputRef}
				handleSubmit={this.handleSubmit}
				handleChange={this.handleChange}
			/>
		)
	}
}

export default connect()(SearchContainer);