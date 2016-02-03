import expect from 'expect'
import EmployeeService from './employee.service.js'

describe('Employee Service', () => {
  let employees = null;
  beforeEach(()=>{
    employees = new EmployeeService();
  });

  it('make sure the employee collection is not empty', ()=> {
    expect(employees).toNotBe(null);
    expect(employees.getEmployees().length).toEqual(5);
  });
});
