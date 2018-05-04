import React, {Component} from 'react';
import HomeLayout from '../components/HomeLayout';
import Categories from '../../categories/components/Categories';
import Related from '../components/Related';
import ModalContainer from '../../widgets/containers/ModalContainer';
import Modal from '../../widgets/components/Modal';
import HandleError from '../../error/containers/HandleError';
import VideoPlayer from '../../player/containers/VideoPlayer';

class Home extends Component{
	state = {
		modalVisible: false,
	}
	handleOpenModal = (event) => {
		this.setState({
			modalVisible: true,
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
					<VideoPlayer 
						autoplay
					/>
					<Categories 
					handleOpenModal={this.handleOpenModal}
					categories={this.props.data.categories} />
					{
						this.state.modalVisible &&
						<ModalContainer>
							<Modal handleClick={this.handleCloseModal}>
								<h1>Modal</h1>
							</Modal>
						</ModalContainer>
					}
				</HomeLayout>
			</HandleError>
		)
	}
}

export default Home;