import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Courses from './component/Courses';
import Login from './component/Login';
import Register from './component/Register';
import Load from './component/Load';
import Dashboard from './component/user/Dashboard';
import AdminLogin from './component/admin/AdminLogin';
import AdminDashboard from './component/admin/AdminDashboard';
import AdminCourses from './component/admin/AdminCourses';
import Contact from './component/Contact';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='/Courses' element={<Courses />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Load' element={<Load />} />
          </Route>
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/AdminLogin' element={<AdminLogin />} />
          <Route path='/AdminDashboard' element={<AdminDashboard />} >
            <Route path='AdminCourses' element={<AdminCourses />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;