import React, {Component} from 'react';
import Media from '../components/Media';
import {connect} from 'react-redux';

class MediaContainer extends Component{
	openModal(){
		this.props.dispatch({
			type: 'OPEN_MODAL',
			payload:{
				 id 
			}
		});
	}
	render(){
 		return <Media openModal={} {...this.props.data.toJS()} />
 	}
}

function mapStateToProps(state, props){
	return{
		data: state.get('data').get('entities').get('media').get(props.id)
	}
}

export default connect(mapStateToProps)(MediaContainer);