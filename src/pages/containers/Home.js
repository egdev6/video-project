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
import * as actions from '../../actions/index';
import {bindActionCreators} from 'redux';

class Home extends Component{

	handleOpenModal = (id) => {
		this.props.actions.openModal(id);
	}
	handleCloseModal = (event) => {
		this.props.actions.closeModal();
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
					isLoading={this.props.isLoading}
					/>
					{
						this.props.modal.get('visibility') &&
						<ModalContainer>
							<Modal handleClick={this.handleCloseModal}>
								<VideoPlayer 
									autoplay
									id={this.props.modal.get('id')}
									// src={this.state.media.src}
									// title={this.state.media.title}
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

	const loading = state.get('isLoading').get('active');

	return{
		categories,
		search: searchResult,
		modal: state.get('modal'),
		isLoading: loading
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);