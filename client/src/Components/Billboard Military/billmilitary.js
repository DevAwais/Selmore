import React, { Component } from 'react';
import Header from '../header';
import Militarypanel1 from './militarypanel1';
import Militarypanel2 from './militarypanel2';
import Militarypanel3 from './militarypanel3';
import './billmilitary.css';
import AbBanner from '../About Selmore/abBanner';

class Billboardmilitary extends Component {
	constructor(props) {
		super(props)
		this.state = {
		  dropDownUser: false,
		}
	  }
	
	  componentWillMount() {
		window.scrollTo(0, 0);
	  }
	
	  showDropDown = () => {
		this.setState({
		  dropDownUser: true
		})
	  }
	
	  hideDropDown = () => {
		this.setState({
		  dropDownUser: false
		})
	  }
	
	  render() {
		const { dropDownUser } = this.state;
		return (
			<div>
				<Header showDropDown={this.showDropDown} hideDropDown={this.hideDropDown} dropDownUser={dropDownUser} />
				<AbBanner advertise={'BILLBOARD'} bred={'CATEGORY'} bred2={'> BILLBOARD'} bred3={'> MILITARY ROAD CITY POINT'} />
				<Militarypanel1 data={this.props.location.state} />
				<Militarypanel2 />
				<Militarypanel3 />
			</div>
		);
	}
}
export default Billboardmilitary;