import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomeComponent from './home/home.component';
import LoginComponent from './login/login.component';
import DashboardComponent from './dashboard/dashboard.component';
import ViewArticleComponent from './view-article/view-article.component';
import CreateArticleComponent from './create-article/create-article.component';
import CreateGifComponent from './create-gif/create-gif.component';
import AdminComponent from './admin/admin.component';

class App extends Component<{ store:any, match?: any }, {}> {
  render() {
    return (
      <main className='App'>
        <Router>
          <Route exact path='/' component={HomeComponent} />
          <Route exact path='/login' component={LoginComponent} />
          <Route exact path='/dashboard' component={DashboardComponent} />
          <Route exact path='/view/article/:articleId' component={ViewArticleComponent} />
          <Route exact path='/create/article' component={CreateArticleComponent} />
          <Route exact path='/create/gif' component={CreateGifComponent} />
          <Route exact path='/admin' component={AdminComponent} />
        </Router>
      </main>
    );
  }
};

export default App;
