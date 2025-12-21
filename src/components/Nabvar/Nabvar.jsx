import React from 'react';
import navLogo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';
import   Github  from '../../assets/git-icon.png';
const Nabvar = () => {
    return (
<div className='bg-white shadow-sm '>
    <div className="navbar max-w-7xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/apps'}>Apps</NavLink></li>
        <li><NavLink to={'/installation'}>Installation</NavLink></li>
      </ul>
    </div>
    <NavLink to={'/'} className="font-bold mr-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"><img src={navLogo} className='w-10 h-10 inline-block' alt="home-logo" />HERO.IO</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/apps'}>Apps</NavLink></li>
        <li><NavLink to={'/installation'}>Installation</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link  to={'https://github.com/gmsojibhosen'} className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"><img src={Github}  /> Contribute</Link>
  </div>
</div>
</div>
    );
};

export default Nabvar;