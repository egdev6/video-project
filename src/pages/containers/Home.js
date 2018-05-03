import React, {Component} from 'react';
import HomeLayout from '../components/HomeLayout';
import Categories from '../../categories/components/Categories';
import Related from '../components/Related';

class Home extends Component{
	render(){
		return (
			<HomeLayout>
				<Related />
				<Categories categories={this.props.data.categories} />
			</HomeLayout>
		)
	}
}

export default Home;