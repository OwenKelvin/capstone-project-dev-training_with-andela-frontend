import React, { Component } from 'react';
import './dashboard.component.css';
import FooterComponent from '../footer/footer.component';
import HeaderComponent from '../header/header.component';
import FeedService from '../../services/feed.service';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class ArticleBody extends Component<
  { url: string | undefined | null, article: string | undefined | null },
  { url: string | undefined | null, article: string | undefined | null }> {
  constructor(props: any) {
    super(props);
    this.state = {
      url: props.url,
      article: props.article
      
    };
  }
  render() {
    if (this.state.url) {
      return (<img src={this.state.url} alt='Shared Gif'/>);
    }
    return (<section>{this.state.article}</section>);
  }
}
class DashboardComponent extends Component<{}, { feeds: any[], error: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      feeds: [],
      error: null
    };
  }
  componentDidMount() {
    this.getFeeds();
  }
  getFeeds() {
    FeedService.getAllFeeds().then((res) => {
      this.setState({ feeds: res.data });
    }).catch((err) => {
      this.setState({ error: err })
    });
  }
  render() {
    return (
      <section>
        <HeaderComponent />
        <Router>
          <section className='container-fluid header-component'>
            <Link to='/create' className="btn btn-primary">new</Link>
            {this.state.feeds.map((value, index) => {
              return (<article >
                <section className='card'>
                  <h1 className='card-heading'>{value.title}</h1>
                  <section className="card-body">
                    <ArticleBody article={value.article} url={value.url} />
                    <section className='card-footer'>
                      <Link to={value.articleId ? `/view/article/${value.articleId}` : `/view/gif/${value.gifId}`} className='btn btn-sm btn-primary'>more...</Link></section>
                  </section>
                </section>
              </article>)
            })}
          </section>
          <FooterComponent />
        </Router>
      </section>
    );
  }
};

export default DashboardComponent;
