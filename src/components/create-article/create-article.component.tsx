import React, { Component } from 'react';
import './create-article.component.css';
import HeaderComponent from '../header/header.component';
import FooterComponent from '../footer/footer.component';

class CreateArticleComponent extends Component<{ store: any }, {}>  {
  render() {
    return (
      <section>
        <HeaderComponent store={this.props.store} />
        Post a New Article
        <form method="post">
          
        </form>
        <FooterComponent />
      </section>
    );
  }
};

export default CreateArticleComponent;
