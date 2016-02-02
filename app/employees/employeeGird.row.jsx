import React from 'react';

export default EmployeeGridRow extends React.Component {
  render() {
    <tr>
      <td>
        {this.props.employee.name}
      </td>
      <td>
        {this.props.employee.position}
      </td>
      <td>
        {this.props.employee.yearStarted}
      </td>
    </tr>
  }
};
