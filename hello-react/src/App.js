import React, { Component } from 'react';

import './App.css';

import RegistrationForm from './RegistrationForm';

// import Dropdown from './Dropdown';
/*
import Header from './Header';

const menu = [
  {
    link: '/articles',
    label: 'Articles'
  },
  {
    link: '/contacts',
    label: 'Contacts'
  },
  {
    link: '/posts',
    label: 'Posts'
  }
];
*/

class App extends Component {
  render() {
    return (
      <div className="container">
        <RegistrationForm />
      </div>
    );
  }
}

export default App;
