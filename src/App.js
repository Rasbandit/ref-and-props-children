import React, { Component } from 'react';
import './App.css';

import Inputs from './components/inputs';
import SlideShow from './components/slideShow';
import FuncComp from './components/FuncComp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Inputs />
        <FuncComp props="look at me!" />
        <SlideShow>
          <img src="http://kitchenproject.com/history/Hot%20Dogs/images/HotDogs.jpg" alt="" />
          <img src="https://media.giphy.com/media/E5jGQ4yQIYhMY/giphy.gif" alt="" />
          <img src="http://casaldejoves.com/wp-content/uploads/2017/03/que-pensa-el-meu-gos-de-mi.jpg" alt="" />
          <img src="https://s-media-cache-ak0.pinimg.com/originals/0e/74/aa/0e74aab62abd03262f1a034dbf4f5784.jpg" alt="" />
        </SlideShow>
      </div>
    );
  }
}

export default App;
