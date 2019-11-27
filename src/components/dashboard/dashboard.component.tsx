import React, { Component } from 'react';
import './dashboard.component.css';
import FooterComponent from '../footer/footer.component';
import HeaderComponent from '../header/header.component';
import FeedService from '../../services/feed.service';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import CreateGifComponent from '../create-gif/create-gif.component';
import CreateArticleComponent from '../create-article/create-article.component';

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
class DashboardComponent extends Component<{store: any}, { feeds: any[], error: any, page?: 'create-article' | 'create-gif'| 'view' | undefined }> {
  constructor(props: any) {
    super(props);
    this.state = {
      feeds: [],
      error: null,
    };
    this.handleLinkToArticle = this.handleLinkToArticle.bind(this);
    this.handleLinkToGif = this.handleLinkToGif.bind(this);
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
  handleLinkToGif(): void {
    this.setState({ page: 'create-gif'})
  }
  handleLinkToArticle(): void {
    this.setState({ page: 'create-article'})
  }
  render() {
    
    if (this.state.page === 'create-gif') {
      return (<CreateGifComponent store={this.props.store}/>);
    }
    if (this.state.page === 'create-article') {
      return (<CreateArticleComponent store={this.props.store}/>);
    }
    return (
      <section>
        <HeaderComponent store={this.props.store} />
        <Router>
          <section className='container-fluid header-component'>
            <NavLink onClick={this.handleLinkToArticle} to='/create/article' className="btn btn-primary btn-sm">New Article</NavLink>
            &nbsp;<NavLink onClick={this.handleLinkToGif} to='/create/gif' className="btn btn-primary btn-sm">New Gif</NavLink>
            <section className='d-flex flex-wrap'>
              {this.state.feeds.map((value, index) => {
                return (<article key={index} className='col-md-6'>
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
          </section>
          <FooterComponent />
        </Router>
      </section>
    );
  }
};

export default DashboardComponent;
