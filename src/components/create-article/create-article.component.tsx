import React, { Component, FormEvent } from 'react';
import './create-article.component.css';
import HeaderComponent from '../header/header.component';
import FooterComponent from '../footer/footer.component';
import ArticleService from '../../services/article.service';
export interface IArticle {
  id?: number,
  title?: string,
  article?: string
};

class CreateArticleComponent extends Component<{ store: any }, {formData: IArticle}>  {
  constructor(props: any) {
    super(props);
    this.state = {
      formData: {
        title: '',
        article: ''
      }
    }
    this.submitCreateArticle = this.submitCreateArticle.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateArticle = this.updateArticle.bind(this);
  }
  updateTitle(e: any) {
    this.setState({ formData: { ...this.state.formData, title: e.target.value } })
  }
  updateArticle(e: any) {
    this.setState({ formData: { ...this.state.formData, article: e.target.value } })

  }
  submitCreateArticle(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ArticleService.createNew(this.state.formData).then((res) => console.log(res))
      .catch((res) => console.log(res))
   
  }
  render() {
    return (
      <section className='create-article'>
        <HeaderComponent store={this.props.store} />
        <section className='container'>
          <h1>New Article</h1>
          <form onSubmit={this.submitCreateArticle}>
            <div className='form-group row'>
              <label htmlFor='title' className='col-sm-2 col-form-label'>Title</label>
              <div className='col-sm-10'>
                <input onChange={this.updateTitle} name='title' id='title' type='text' className='form-control' required/>
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='article' className='col-sm-2 col-form-label'>Article</label>
              <div className='col-sm-10'>
                <textarea onChange={this.updateArticle} id='article' className='form-control' required ></textarea>
              </div>
            </div>
            <div className='flex justify-content-end'>
              <button className='btn btn-primary btn-sm float-right'>Submit</button>
            </div>
          </form>
          
        </section>
        
        <FooterComponent />
      </section>
    );
  }
};

export default CreateArticleComponent;
