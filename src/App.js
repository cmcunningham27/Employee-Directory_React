import Header from './components/Header/header';
import Wrapper from './components/Wrapper/wrapper';
import Search from './components/Search/search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper backgroundColor='#ECF0F1'>
        <Search />
      </Wrapper>
    </div>
  )
};

export default App;
