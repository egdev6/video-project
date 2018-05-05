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
		const {
			handleLoadedMetadata,
			handleTimeUpdate,
			handleSeeked,
			handleSeeking,
		} = this.props;

		return (
			<div className="Video">
				<video 
						autoPlay={this.props.autoPlay}
						src={this.props.src}
						ref={this.setRef}
						onLoadedMetadata={handleLoadedMetadata}
						onTimeUpdate={handleTimeUpdate}
						onSeeking={handleSeeking}
						onSeeked={handleSeeked}
				/>
			</div>
		)
	}
}

export default Video;