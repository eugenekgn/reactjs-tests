import React from 'react';

export class GridRow extends React.Component {
  render() {
    return (<tr>
      <td>{this.props.employee.name}</td>
      <td>{this.props.employee.position}</td>
      <td>{this.props.employee.yearStarted}</td>
    </tr>)
  }
}