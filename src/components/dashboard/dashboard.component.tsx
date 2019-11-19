import React, { Component } from 'react';
import './dashboard.component.css';
import FooterComponent from '../footer/footer.component';
import HeaderComponent from '../header/header.component';
import FeedService from '../../services/feed.service';
import { Link } from 'react-router-dom';

class DashboardComponent extends Component<{}, {feeds: any[]}> {
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
      this.setState({ feeds: res.data });
    }).catch();
  }
  render() {
    return (
      <section>
        <HeaderComponent />
        <section className='container-fluid'>
          <Link to='/create' className="btn btn-primary">new</Link>
          {this.state.feeds.map((value, index) => {
            return (<article >
              <section className='card'>
                {JSON.stringify(value)}
                <h1 className='card-heading'>{value.title}</h1>
                <section className='card-footer'><Link to={value.articleId ? `/view/article/${value.articleId}` : `/view/gif/${value.gifId}`} className='btn btn-primary'>more...</Link></section>
              </section>
            </article>)
          })}
        </section>
        <FooterComponent />
      </section>
    );
  }
};

export default DashboardComponent;
