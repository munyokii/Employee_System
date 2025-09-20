import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Employee from './Components/Employee'
import Category from './Components/Category'
import Profile from './Components/Profile'
import AddCategory from './Components/AddCategory'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/adminlogin" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path='' element={<Home />} />
        <Route path='/dashboard/employee' element={<Employee />} />
        <Route path='/dashboard/category' element={<Category />} />
        <Route path='/dashboard/profile' element={<Profile />} />
        <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
