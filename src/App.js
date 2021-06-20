import React, {Component} from 'react';
import API from './utils/API';
import Header from './components/Header/header';
import Wrapper from './components/Wrapper/wrapper';
import Search from './components/Search/search';
import EmployeeList from './components/EmployeeList/employeeList';
import './App.css';

class App extends Component {
  state = {
    employees: [],
    sorted: false
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

  handleSortByName = () => {
    if(!this.state.sorted) {
      this.setState({ employees: this.state.employees.sort((a, b) => (a.name > b.name) ? 1 : -1) });
      this.setState({ sorted: true });
    } else {
      this.setState ({ employees: this.state.employees.sort((a, b) => (a.name > b.name) ? -1 : 1) });
      this.setState({ sorted: false });
    }
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Wrapper backgroundColor='#ECF0F1'>
          <Search />
          <EmployeeList employees={this.state.employees} formatDate={this.formatDate}/>
        </Wrapper>
      </div>
  )
  }
  
};

export default App;
