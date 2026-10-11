import React, { Component } from 'react';
import '../EmployeeForm.css';

class EmployeeForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        title: '',
        department: ''
      };
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
      handleSubmit = (event) => {
        event.preventDefault();
        console.log('New employee:', this.state);
        alert(`Employee ${this.state.name} added!`);
        this.setState({ name: '', email: '', title: '', department: '' });
      };
      render() {
        return (
          <div className="employee-form">
            <h2>New Employee</h2>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name"
                value={this.state.name} onChange={this.handleChange} required />
    
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email"
                value={this.state.email} onChange={this.handleChange} required />
    
              <label htmlFor="title">Job Title</label>
              <input id="title" type="text" name="title"
                value={this.state.title} onChange={this.handleChange} />
    
              <label htmlFor="department">Department</label>
              <input id="department" type="text" name="department"
                value={this.state.department} onChange={this.handleChange} />
    
              <button type="submit">Add Employee</button>
            </form>
          </div>
        );
      }
    }

    export default EmployeeForm;