import './App.css';
import React, { Component } from 'react';
import Navigation from './components/Navigation';
import PageContent from './components/PageContent';

export default class App extends Component {
  render() {
    return (
      <div>
     <h1>Devcamp builder project</h1>
     <Navigation />
     <PageContent />
    </div> 
    );
  }
}

