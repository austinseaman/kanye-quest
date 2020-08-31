import React from 'react';
import Quest from './Quest'
import Kanye1 from './assets/kanye1.PNG'
import Kanye2 from './assets/kanye2.PNG'
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={Kanye1} alt="kanye-head-one"/>
      <Quest />
    </div>
  );
}

export default App;
