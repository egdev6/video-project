import React, {Component} from 'react';
import './video.css';

class Video extends Component{
	componentWillReceiveProps(nextProps){
		if(nextProps.pause != this.props.pause){
			this.togglePlay();
		}
	}
	togglePlay(){
		if(this.props.pause){
			this.video.play();
		}else{
			this.video.pause();
		}
	}
	setRef = element => {
		this.video = element;
	}
	render(){
		return (
			<div className="Video">
				<video 
						autoPlay={this.props.autoPlay}
						src={this.props.src}
						ref={this.setRef}
				/>
			</div>
		)
	}
}

export default Video;