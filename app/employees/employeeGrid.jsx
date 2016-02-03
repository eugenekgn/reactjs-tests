import React from 'react';
import ReactDOM from 'react-dom'
import EmployeeService from './employee.service.js'
//import GridRow from './employeeGrid.row.jsx'


//TODO: move this out to a different file
class GridRow extends React.Component {
  render() {
    return (<tr>
      <td>{this.props.employee.name}</td>
      <td>{this.props.employee.position}</td>
      <td>{this.props.employee.yearStarted}</td>
    </tr>)
  }
}


class EmployeeGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = { employees: [] };
  }

  componentDidMount() {
    //TODO: stack class
    let employeeService = new EmployeeService();
    this.setState({ employees: employeeService.getEmployees() })
  }

  render() {
    let employeesList = this.state.employees.map((employee) => {
      return <GridRow key={employee.name} employee={employee}/>;
    });
    return (
      <table className="table table-bordered table-striped table-hover">
        <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Year Started</th>
        </tr>
        </thead>
        <tbody>
        {employeesList}
        </tbody>
      </table>
    )
  }
}

ReactDOM.render(<EmployeeGrid />, document.getElementById('root'));



