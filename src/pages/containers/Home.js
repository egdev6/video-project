import React, {Component} from 'react';
import HomeLayout from '../components/HomeLayout';
import Categories from '../../categories/components/Categories';
import Related from '../components/Related';
import ModalContainer from '../../widgets/containers/ModalContainer';
import Modal from '../../widgets/components/Modal';
import HandleError from '../../error/containers/HandleError';
import VideoPlayer from '../../player/containers/VideoPlayer';
import {connect} from 'react-redux';
import {List as list} from 'immutable';

class Home extends Component{
	state = {
		modalVisible: false,
	}

	handleOpenModal = (media) => {
		this.setState({
			modalVisible: true,
			media
		});
	}
	handleCloseModal = (event) => {
		this.setState({
			modalVisible: false,
		});
	}
	render(){
		return (
			<HandleError>
				<HomeLayout>
					<Related />
					<Categories 
					handleOpenModal={this.handleOpenModal}
					categories={this.props.categories} 
					search={this.props.search}
					/>
					{
						this.state.modalVisible &&
						<ModalContainer>
							<Modal handleClick={this.handleCloseModal}>
								<VideoPlayer 
									autoplay
									src={this.state.media.src}
									title={this.state.media.title}
								/>
							</Modal>
						</ModalContainer>
					}
				</HomeLayout>
			</HandleError>
		)
	}
}

function mapStateToProps(state, props){
	const categories = state.get('data').get('categories').map((id) => {
		return state.get('data').get('entities').get('categories').get(id);
	});

	let searchResult = list();
	const search = state.get('data').get('search');

	if(search){
		const mediaList = state.get('data').get('entities').get('media');
		searchResult = mediaList.filter((item) => {
			return item.get('author').toLowerCase().includes(search.toLowerCase());
		}).toList();
	}
	return{
		categories,
		search: searchResult,
	}
}

export default connect(mapStateToProps)(Home);