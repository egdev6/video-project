import React, {Component} from 'react';
import Search from '../components/Search';

class SearchContainer extends Component{
	state = {
		value:"",
	}
	handleSubmit = event => {
		event.preventDefault();
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

export default SearchContainer;