import React from 'react'
import Link from 'next/link';
import { getNavbarContentData } from '../lib/fetchContent';
import { Navbar } from '../interfaces/Navbar';
import { NavbarRoot } from '../interfaces/NavbarRoot';

const NavbarPage = () => {
    const root: NavbarRoot = getNavbarContentData('navbar_data.json')
    const data: Navbar = root.es

    return (
        <header className="bg-secondary-content text-secondary py-4">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] bg-secondary-content shadow rounded-box">
                  <li><Link href="#home" className="mx-2">{data.home}</Link></li>
                  <li><Link href="#contact" className="mx-2">{data.contact}</Link></li>
                  <li><Link href="#education" className="mx-2">{data.education}</Link></li>
                  <li><Link href="#experiences" className="mx-2">{data.experiences}</Link></li>
                  <li><Link href="#projects" className="mx-2">{data.projects}</Link></li>
                  <li><Link href="#languages" className="mx-2">{data.languages}</Link></li>
                  <li><Link href="#courses" className="mx-2">{data.courses}</Link></li>
                </ul>
              </div>
              <h1 className="text-xl font-bold pl-5">{data.name}</h1>
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal">
                <li><Link href="#home" className="mx-2">{data.home}</Link></li>
                <li><Link href="#contact" className="mx-2">{data.contact}</Link></li>
                <li><Link href="#education" className="mx-2">{data.education}</Link></li>
                <li><Link href="#experiences" className="mx-2">{data.experiences}</Link></li>
                <li><Link href="#projects" className="mx-2">{data.projects}</Link></li>
                <li><Link href="#languages" className="mx-2">{data.languages}</Link></li>
                <li><Link href="#courses" className="mx-2">{data.courses}</Link></li>
              </ul>
            </div>
          </div>
        </header>
    )
}

export default NavbarPage
