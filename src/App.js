import React from 'react';
import Quest from './Quest';
import Footer from './Footer';
import Kanye1 from './assets/kanye1.PNG';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={Kanye1} alt="kanye-head-one"/>
      <Quest />
      <Footer />
    </div>
  );
}

export default App;
