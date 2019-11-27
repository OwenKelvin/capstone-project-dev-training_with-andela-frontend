import React, { Component } from 'react';
import './view-article.component.css';
import FooterComponent from '../footer/footer.component';
import HeaderComponent from '../header/header.component';

class ViewArticleComponent extends Component<{store: any}, {}> {
  render() {
    return (
      <section>
        <HeaderComponent store={this.props.store} />
        <FooterComponent />
      </section>
    );
  }
};

export default ViewArticleComponent;
