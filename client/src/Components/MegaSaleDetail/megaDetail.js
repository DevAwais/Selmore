import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import './megaDetail.css';
import AbBanner from '../About Selmore/abBanner';
import Megapanel1 from './megaDetailPanel1';
import Megapanel2 from './megaDetailPanel2';

class MegaDetail extends Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div>
				<Header showDropDown={this.props.showDropDown} hideDropDown={this.props.hideDropDown} dropDownUser={this.props.dropDownUser} />
				<AbBanner advertise={'BILLBOARD'} bred={'CATEGORY'} bred2={'> BILLBOARD'} bred3={'> MEGA SALE'} />
				<Megapanel1 data={this.props.location.state} />
				<Megapanel2 />
				<Footer />
			</div>
		);
	}
}
export default MegaDetail;