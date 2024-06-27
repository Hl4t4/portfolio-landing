'use client'
import React from 'react'
import { useState, useContext } from 'react';
import { LocaleContext } from './context';
import Link from 'next/link';
import { unstable_noStore as noStore } from 'next/cache'
// import { getNavbarContentData } from '../lib/fetchContent';
// import { navbarData } from '../page'
import { Navbar } from '../interfaces/Navbar';
import { NavbarRoot } from '../interfaces/NavbarRoot';

interface NavbarPageProps {
  navbarData: NavbarRoot;
}

const NavbarPage: React.FC<NavbarPageProps> = ({navbarData}) => {
    const root: NavbarRoot = navbarData
    // const [root, setSelectedRoot] = useState<NavbarRoot | null>(null)
    const {locale, setLocale} = useContext(LocaleContext)
    const [data, setSelectedData] = useState<Navbar | null>(root[locale])

    // if (locale) {
    //   setSelectedData(root[locale])
    // }
    // const [locale_value, setLocaleValue] = useState<string | undefined >(process.env.LOCALE)

    // const [isLoading, setLoading] = useState(true);
    // useEffect(() => {
    //   fetch('../../data/navbar_data.json')
    //   .then((res) => res.json())
    //   .then((jsonData) => 
    //     { setSelectedRoot(jsonData)
    //       setLoading(false);
    //     })
    //   .then(() => { if(root != null) setSelectedData(root.es) })
    // }, [])

    // if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>No data available</p>;
    // const root: NavbarRoot = getNavbarContentData('navbar_data.json')
    // const root: NavbarRoot = fetch('../data/navbar_data.json').then((res) => res.json()).then((jsonData) => {})
    // const data: Navbar = root.es
    noStore()
    // let locale_value = 

    // const [selectedLocale, setSelectedLocale] = useState('es')
    const handleLocaleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
      setLocale(event.target.value);
      setSelectedData(root[event.target.value]);
      // setSelectedLocale(event.target.value);
      
      // process.env.LOCALE = locale
      // if (event.target.value == 'en') { setSelectedData(root[event.target.value]) }
      // locale_value = selectedLocale;
    };

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
              <h1 className="text-xl font-bold pl-5 mr-2">{data.name}</h1>
              <select className="select select-bordered w-fit max-w-xs" value={locale} onChange={handleLocaleChange}>
                <option>es</option>
                <option>en</option>
              </select>
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
