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
  return (
    <BrowserRouter>
      <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/add-employee">Add Employee</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-employee" element={<EmployeeForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App