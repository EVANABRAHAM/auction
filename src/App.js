import React from 'react';
import Header from './components/header.js'; 
import './App.css';
import Signup from './components/signup.js'; 
import Content from './components/content.js'

function App() {
  return (
    <div>
      <Header />
      <Signup />
      <Content />
    </div>
  );
}

export default App;
