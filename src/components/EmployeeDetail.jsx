import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../EmployeeForm.css';

function EmployeeDetail(props) {
  // grab the id from the web address, e.g. /employees/4680
  const { id } = useParams();

  // find the employee with that id
  const employee = props.employees.find(
    (employee) => employee.EmployeeId === parseInt(id)
  );
  const { EmployeeId, name, email, title, department } = employee || {};

  return (
    <div className="employee-detail">
      <table>
        <tbody>
          <tr>
            <td><label>Employee ID: </label></td>
            <td>{EmployeeId}</td>
          </tr>
          <tr>
            <td><label>Name: </label></td>
            <td>{name}</td>
          </tr>
          <tr>
            <td><label>Email: </label></td>
            <td>{email}</td>
          </tr>
          <tr>
            <td><label>Job Title: </label></td>
            <td>{title}</td>
          </tr>
          <tr>
            <td><label>Department: </label></td>
            <td>{department}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/add-employee">Back to Employee List</Link>
    </div>
  );
}

export default EmployeeDetail;