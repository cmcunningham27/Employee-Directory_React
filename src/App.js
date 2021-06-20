import React, {Component} from 'react';
import Header from './components/Header/header';
import Wrapper from './components/Wrapper/wrapper';
import Search from './components/Search/search';
import EmployeeList from './components/EmployeeList/employeeList';
import './App.css';

class App extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    API.getEmployees()
      .then((res) => {
        this.setState({
          employees: res.data.results.map((e, i) => ({
            picture: e.picture.thumbnail,
            name: `${e.name.first} ${e.name.last}`,
            phone: e.phone,
            email: e.email,
            dob: e.dob.date,
            key: i
          }))
        })
      })
      .catch(err => console.log(err));
  };

  formatDate = (date) => {
    date = new Date(date);
    let dob = date.toLocaleDateString();
    return dob;
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <Wrapper backgroundColor='#ECF0F1'>
          <Search />
          <EmployeeList employees={this.state.employees} />
        </Wrapper>
      </div>
  )
  }
  
};

export default App;
