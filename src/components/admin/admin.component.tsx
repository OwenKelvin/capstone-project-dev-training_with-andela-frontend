import React, { Component } from 'react';
import HeaderComponent from '../header/header.component';
import FooterComponent from '../footer/footer.component';


class AdminComponent extends Component<{ store: any}, { }> {
  render() {
    return (<section>
      <HeaderComponent store={this.props.store} />
      <FooterComponent />
    </section>
    );
  }
}


export default AdminComponent;