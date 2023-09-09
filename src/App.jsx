import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Registration from './pages/register/Registration'
import Employee from './pages/employee/Employee'
import Header from './components/header/Header'


const App = () => {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
      </Router>

  )
}

export default App