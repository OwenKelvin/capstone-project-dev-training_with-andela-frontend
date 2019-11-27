import React, { Component } from 'react';
import './create-gif.component.css';
import HeaderComponent from '../header/header.component';
import FooterComponent from '../footer/footer.component';


class CreateGifComponent extends Component<{ store: any }, { }> {
  render() {
    return (
      <section>
        <HeaderComponent store={this.props.store} />
        <section className='container-fluid'>
          Post a New Gif
      </section>
        <form method="post">

        </form>
        <FooterComponent />
      </section>
    );
  }
};

export default CreateGifComponent;
