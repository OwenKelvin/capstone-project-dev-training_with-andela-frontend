import React from 'react';
import './login.component.css';
import logo from '../../images/logo.png';

const LoginComponent = () => {
  return (
    <main className='App top-10-pcnt'>
      <section className='d-flex justify-content-center flex-wrap'>
        <section className='d-none d-sm-block col-sm-4 col-lg-4'>
          <img alt='Logo' className='img-fluid' src={logo} />
        </section>
        <section className='col-sm-8 col-md-7 col-lg-6'>
          <form className='card'>
            <h1 className='card-heading'>
              <img alt='Logo' className='img-fluid  d-xs-block d-sm-none' src={logo} /> Login
              </h1>
            <section className='card-body'>
              <section className='form-group d-flex flex-wrap'>
                <label className='col-sm-12 col-lg-4' htmlFor='username'>Username</label>
                <section className='col-sm-12 col-lg-8'>
                  <input className='form-control' id='username' type='email' required />
                </section>
              </section>
              <section className='form-group d-flex flex-wrap'>
                <label className='col-sm-12 col-lg-4' htmlFor='password'>Password</label>
                <section className='col-sm-12 col-lg-8'>
                  <input className='form-control' id='password' type='password' required />
                </section>
              </section>
              <section className='d-flex justify-content-end'>
                <button className="btn btn-primary">
                  submit
                </button>
              </section>
            </section>
          </form>
        </section>
      </section>
    </main>
  );
};

export default LoginComponent;
