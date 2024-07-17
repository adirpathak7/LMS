import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import lmslogo from '../images/lmslogo.jpg'

const Navbar = () => {
    return (
        <div>
            <header className="header sticky top-0 flex items-center justify-between py-0 px-6">
                <h1 className="w-12 h-12">
                    <a href="/" className='hover:text-slate-50 duration-200 font-bold'>
                        <img src={lmslogo} alt="LMS Logo" />
                    </a>
                </h1>
                <nav className="nav font-semibold text-lg">
                    <ul className="flex items-center">
                        <li className="p-4 border-b-2 border-slate-50 border-opacity-0 hover:border-opacity-100 hover:text-slate-50 duration-200 cursor-pointer active">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="p-4 border-b-2  border-slate-50 border-opacity-0 hover:border-opacity-100 hover:text-slate-50 duration-200 cursor-pointer">
                            <Link to="/Courses">Courses</Link>
                        </li>
                        <li className="p-4 border-b-2 border-slate-50 border-opacity-0 hover:border-opacity-100 hover:text-slate-50 duration-200 cursor-pointer">
                            <Link to="/">Guide</Link>
                        </li>
                        <li className="p-4 border-b-2 border-slate-50 border-opacity-0 hover:border-opacity-100 hover:text-slate-50 duration-200 cursor-pointer">
                            <Link to="/Contact">Contact</Link>
                        </li>
                        <li className="p-4">
                            <Link to="/Login" className='text-lg font-semibold bg-slate-50 hover:bg-slate-800 w-full text-center rounded-md hover:text-white px-2 py-1'>
                                Login
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Navbar