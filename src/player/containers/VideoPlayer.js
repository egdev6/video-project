import React, {Component} from 'react';
import VideoPlayerLayout from '../components/VideoPlayerLayout';
import Video from '../components/Video';
import Title from '../components/Title';
import PlayPause from '../components/PlayPause';
import Timer from '../components/Timer';
import Controls from '../components/VideoPlayerControls';
import ProgressBar from '../components/ProgressBar';
import Spinner from '../components/Spinner';
import Volume from '../components/Volume';
import FullScreen from '../components/FullScreen';

class VideoPlayer extends Component{
	state = {
		pause: true,
		duration: 0,
		currentTime: 0,
		loading: false,
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
	handleLoadedMetadata = event => {
		this.video = event.target;
		this.setState({
			duration: this.video.duration 
		});
	}
	handleTimeUpdate = event => {
		this.setState({
			currentTime: this.video.currentTime
		})
	}
	handleProgressChange = event => {
		this.video.currentTime = event.target.value;
	}
	handleSeeking = event => {
		this.setState({
			loading: true,
		});
	}
	handleSeeked = event => {
		this.setState({
			loading: false,
		});
	}
	handleVolumeChange = event => {
		this.video.volume = event.target.value;
	}
	handleFullScreen = event => {
		var isFirefox = typeof InstallTrigger !== 'undefined';
		var isChrome = !!window.chrome && window.chrome.webstore;
		
		if(isFirefox){
			if(!document.mozFullScreenElement){
				this.player.mozRequestFullScreen();
			}else{
				document.mozCancelFullScreen();
			}
		}else if(isChrome){
			if(!document.webkitIsFullScreen){
				this.player.webkitRequestFullscreen();
			}else{
				document.webkitExitFullscreen();
			}
		}else{
			if(!document.isFullScreen){
				this.player.requestFullscreen();
			}else{
				document.exitFullscreen();
			}
		}
	}
	setRef = element => {
		this.player = element;
	}
	render(){
		return (
			<VideoPlayerLayout setRef={this.setRef}>
				<Title 
					title={this.props.title}
				/>
				<Controls>
					<ProgressBar 
						duration={this.state.duration}
						value={this.state.currentTime}
						handleProgressChange={this.handleProgressChange}
					/>
					<div className="block">
						<PlayPause 
							pause={this.state.pause}
							handleClick={this.togglePlay}
						/>
						<Timer 
							duration={this.state.duration}
							currentTime={this.state.currentTime}
						/>
					</div>
					<div className="block">
						<FullScreen 
							handleFullScreen={this.handleFullScreen}
						/>
						<Volume 
							handleVolumeChange={this.handleVolumeChange}
						/>
					</div>
				</Controls>
				<Spinner active={this.state.loading}/>
				<Video 
					autoPlay={this.props.autoplay}
					pause={this.state.pause}
					handleLoadedMetadata={this.handleLoadedMetadata}
					handleTimeUpdate={this.handleTimeUpdate}
					handleSeeking={this.handleSeeking}
					handleSeeked={this.handleSeeked}
					src={this.props.src}
				/>
			</VideoPlayerLayout>
		)
	}
}

export default VideoPlayer;