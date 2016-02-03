import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect-jsx';
//import GridRow from './employeeGrid.row.jsx'

class GridRow extends React.Component {
  render() {
    return (<tr>
      <td>{this.props.employee.name}</td>
      <td>{this.props.employee.position}</td>
      <td>{this.props.employee.yearStarted}</td>
    </tr>)
  }
}

describe('Grid Row', () => {


  it('Row Actions Test', ()=> {

    let employee = {
      "name": "Person",
      "position": "Software Engineer",
      "yearStarted": 2010
    };

    // shallow render
    // renders only one level deep
    const renderer = TestUtils.createRenderer();
    renderer.render(<GridRow employee={employee}/>);
    const output = renderer.getRenderOutput();
    console.log(output);
  });
});



