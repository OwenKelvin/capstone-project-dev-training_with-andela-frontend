import React from 'react';
import './create-article.component.css';
import HeaderComponent from '../header/header.component';
import FooterComponent from '../footer/footer.component';

const CreateArticleComponent = () => {
  return (
    <section>
      <HeaderComponent />
      Post a New Article
      <form method="post">
        
      </form>
      <FooterComponent />
    </section>
  );
};

export default CreateArticleComponent;
