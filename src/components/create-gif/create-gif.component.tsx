import React from 'react';
import './create-gif.component.css';
import HeaderComponent from '../header/header.component';
import FooterComponent from '../footer/footer.component';

const CreateGifComponent = () => {
  return (
    <section>
      <HeaderComponent />
      <section className='container-fluid'>
        Post a New Gif
      </section>
      <form method="post">
        
      </form>
      <FooterComponent />
    </section>
  );
};

export default CreateGifComponent;
