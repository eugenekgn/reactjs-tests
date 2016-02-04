import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect-jsx';
import { GridRow } from './employeeGrid.row'


describe('Grid Row', () => {

  it('Row Actions Test', ()=> {

    let employee = {
      "name": "Person",
      "position": "Software Engineer",
      "yearStarted": 2010
    };

    console.log(GridRow);

    // shallow render
    // renders only one level deep
    const renderer = TestUtils.createRenderer();
    renderer.render(<GridRow employee={employee}/>);
    const output = renderer.getRenderOutput();
    console.log(output);
  });
});



