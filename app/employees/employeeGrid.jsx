import React from 'react';
import ReactDOM from 'react-dom'
import data from '../../data.json'
import EmployeeGridRow from './displaySalaries.row.view'

class EmployeeGrid extends React.Component {
  getInitialState() {
    return {employees: []}
  },
  componentDidMount : {
    console.log(data);
    this.setState({employees: data})
  },

  render() {
    let employyesList = this.state.employees.map((element) => {
      return <EmployeeGridRow key={GuidHelper.guid()} employee={employee}/>;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Year Started</th>
          </tr>
        </thead>
        <tbody>
          {employyesList}
        </tbody>
      </table>
    )
  }
}
ReactDOM.render(< EmployeeGrid />, document.getElementById('root'));
