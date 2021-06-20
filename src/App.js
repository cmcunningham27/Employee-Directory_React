import React, {Component} from 'react';
import Header from './components/Header/header';
import Wrapper from './components/Wrapper/wrapper';
import Search from './components/Search/search';
import './App.css';

class App extends Component {
  state = {
    employees: []
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Wrapper backgroundColor='#ECF0F1'>
          <Search />
        </Wrapper>
      </div>
  )
  }
  
};

export default App;
