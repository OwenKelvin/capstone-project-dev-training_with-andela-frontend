import React, { Component } from 'react';
import './create-gif.component.css';
import HeaderComponent from '../header/header.component';
import FooterComponent from '../footer/footer.component';
import GifService from '../../services/gif.service';


class CreateGifComponent extends Component<{ store: any }, { formData: any}> {
  constructor(props: any) {
    super(props);
    this.state = {
      formData: new FormData()
      // formData: {
      //   title: '',
      //   image: null
      // }
    }
    this.updateForm = this.updateForm.bind(this);
    this.submitCreateGif = this.submitCreateGif.bind(this);
  }
  updateForm(e: any) {
    let data = new FormData(document.querySelector('form') as HTMLFormElement);
    this.setState({ formData: data })
    // this.setState({ formData: { ...this.state.formData, title: e.target.value } })
  }
  submitCreateGif(event: any) {
    event.preventDefault();
    GifService.createNew(this.state.formData).then((res) => console.log(res))
      .catch((res) => console.log(res))
  }
  render() {
    return (
      <section>
        <HeaderComponent store={this.props.store} />
        <section className='container'>
          <h1>New Gif</h1>
          <form encType='multipart/form-data' onSubmit={this.submitCreateGif}>
            <div className='form-group row'>
              <label htmlFor='title' className='col-sm-2 col-form-label'>Title</label>
              <div className='col-sm-10'>
                <input onChange={this.updateForm} name='title' id='title' type='text' className='form-control' required />
              </div>
            </div>
            
            <div className='form-group row'>
              <label htmlFor='image' className='col-sm-2 col-form-label'>Title</label>
              <div className='col-sm-10'>
                <input onChange={this.updateForm} name='image' id='image' type='file' className='form-control' required />
              </div>
            </div>
            <div className='flex justify-content-end'>
              <button className='btn btn-primary btn-sm float-right'>Submit</button>
            </div>
          </form>
      </section>
        <form method="post">

        </form>
        <FooterComponent />
      </section>
    );
  }
};

export default CreateGifComponent;
