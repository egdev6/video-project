import React, {Component} from 'react';
import VideoPlayerLayout from '../components/VideoPlayerLayout';
import Video from '../components/Video';
import Title from '../components/Title';
import PlayPause from '../components/PlayPause';

class VideoPlayer extends Component{
	state = {
		pause: true,
	}
	togglePlay = evento => {
		this.setState({
			pause: !this.state.pause
		});
	}
	componentDidMount(){
		this.setState({
			pause: (!this.props.autoplay) 
		});
	}
	render(){
		return (
			<VideoPlayerLayout>
				<Title 
					title="Esto es un video"
				/>
				<PlayPause 
					pause={this.state.pause}
					handleClick={this.togglePlay}
				/>
				<Video 
					autoPlay={this.props.autoplay}
					pause={this.state.pause}
					src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" 
				/>
			</VideoPlayerLayout>
		)
	}
}

export default VideoPlayer;