import React, { Component } from 'react';
import Header from '../Header/mainheader';
import Footer from '../footer';
import Biddpanel1 from './biddpanel1';
import Bidbanner from './biddingbanner';
import './bidding.scss';
import AbBanner from '../About Selmore/abBanner';

class Bidding extends Component {
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
        <Bidbanner advertise={'BIDDING'} bred={'Bidding'} />
        <Biddpanel1 />
        <Footer/>
      </div>
    );
  }
}

export default Bidding;
