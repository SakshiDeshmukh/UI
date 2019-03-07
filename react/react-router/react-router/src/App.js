import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Menu } from './Menu';
import { Content } from './Content';

class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Content/>
      </div>
    );
  }
}

export default App;
/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Content} from './Content'
import {Menu} from './Menu'

class App extends Component {
  render() {
    return (
      <div>
      <Menu/>
      <Content/>
      </div>
    );
  }
}

export default App;*/
