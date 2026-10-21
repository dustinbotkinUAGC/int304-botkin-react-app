import { useState } from 'react'                              // NEW
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import EmployeeForm from './components/EmployeeForm'

function Home() {
  return (
    <div>
      <h1>INT304 React App</h1>
      <p>Welcome to my Week 1 React project.</p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This React application was created for INT304 Web Design and Development.</p>
    </div>
  )
}

function App() {
  // NEW: the list of employees, loaded from local storage if any were saved before
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem('employees')
    return saved ? JSON.parse(saved) : []
  })

  // NEW: add a new employee to the list
  const addEmployee = (employee) => {
    setEmployees([...employees, employee])
  }

  // NEW: save the list to local storage
  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    alert('Employee data saved!')
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/add-employee">Add Employee</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/add-employee"
          element={
            <div>
              <EmployeeForm onSubmit={addEmployee} />            {/* NEW: prop added */}
              <button onClick={saveData}>Save Data</button>       {/* NEW */}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App