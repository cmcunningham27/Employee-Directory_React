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
    sorted: false,
    nameSorted: false,
    searchTerm: '',
    filteredEmployees: []
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
      this.setState({ nameSorted: false });
    } else {
      this.setState ({ employees: this.state.employees.sort((a, b) => (a.name > b.name) ? -1 : 1) });
      this.setState({ sorted: false });
      this.setState({ nameSorted: false });
    }
  };

  handleSortByPhone = () => {
    if(!this.state.sorted) {
      this.setState({ employees: this.state.employees.sort((a, b) => (a.phone > b.phone) ? 1 : -1) });
      this.setState({ sorted: true });
      this.setState({ nameSorted: false });
    } else {
      this.setState ({ employees: this.state.employees.sort((a, b) => (a.phone > b.phone) ? -1 : 1) });
      this.setState({ sorted: false });
      this.setState({ nameSorted: false });
    }
  };

  handleByName = async (event) => {
    await this.setState({ searchTerm: event.target.value.toLowerCase() });
    this.setState({ filteredEmployees: this.state.employees.filter(employee => employee.name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase())) });
    this.setState({ nameSorted: true });
  };

  render() {

    let list;
    if(!this.state.nameSorted) {
      list = <EmployeeList employees={this.state.employees} formatDate={this.formatDate} />;
    } else {
      list = <EmployeeList employees={this.state.filteredEmployees} formatDate={this.formatDate} />;
    };

    return (
      <div className='App'>
        <Header />
        <Wrapper backgroundColor='#ECF0F1'>
          <Search handleSortByName={this.handleSortByName} handleSortByPhone={this.handleSortByPhone} handleByName={this.handleByName} searchTerm={this.state.searchTerm} />
          {list}
        </Wrapper>
      </div>
  )
  }
  
};

export default App;
