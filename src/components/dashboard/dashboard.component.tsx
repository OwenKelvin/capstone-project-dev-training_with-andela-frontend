import React, { Component } from 'react';
import './dashboard.component.css';
import FooterComponent from '../footer/footer.component';
import HeaderComponent from '../header/header.component';
import FeedService from '../../services/feed.service';

class DashboardComponent extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      feeds: []
    };
  }
  componentDidMount() {
    this.getFeeds();
  }
  getFeeds() {
    FeedService.getAllFeeds().then((res) => {
      this.setState({ feeds: res });
      console.log(res);
    }).catch();
  }
  render() {
    return (
      <section>
        <HeaderComponent />
        Body
            <FooterComponent />
      </section>
    );
  }
};

export default DashboardComponent;
