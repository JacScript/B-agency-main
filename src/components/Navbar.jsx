import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
// import { Link } from 'react-scroll';
import logo from '../../src/assets/logo.png';
import Button from './Button'

//react icons
import {FaXmark, FaBars } from "react-icons/fa6"
import Dropdown from './Dropdown';
 



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
     
    //set toggle
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    }
 
    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > 100){
          setIsSticky(true);
        }
        else{
          setIsSticky(false);
        }
      };
      window.addEventListener('scroll',handleScroll);
 
      return () => {
        window.addEventListener('scroll',handleScroll);
      }
    });
 
    //navItems array
    const navItems = [
      {link:'Home',path: '/'},
      {link: 'Market', path: '/market'},
      {link: 'Converter', path: '/converter'}
      // {link:'Our Solution',path: 'solution'},
      // {link:'How It Works',path: 'works'},
      // {link:'Get started',path: 'start'},
      // {link:'Services',path: 'services'},
      // {link:'Features',path: 'features'},
    ];
    
 
   return (
     <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">  
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : "sticky top-0 left-0 right-0 border bg-white duration-300 "} `}>
        <div className="flex justify-between items-center text-base gap-8">
          <div>
          <a href="" className='text-2xl font-semibold flex items-center space-x-3' ><img src={logo} alt="" className='w-10 inline-block items-center'/><span className='text-[#263238]'>AGENCY</span></a>
              </div>

            
         {/* nav items for large devices */}
         <div className='flex'>
         <ul className="md:flex space-x-12 hidden mr-12">
             {
             navItems.map(({link, path}) => <Link key={path} spy={true} smooth={true} offset={-100} to={path} className="block cursor-pointer text-base text-grey900 hover:text-brandPrimary first:font-medium">{link}</Link> )
             }
         </ul>
         <div className='hidden md:flex '>
         <Dropdown/>
         </div>
         </div>
          
       

          {/* btn for large devices */}
          <div className="space-x-12 hidden lg:flex items-center">
              <a href="/" className="hidden lg:flex items-center text-brandPrimary hover:text-grey900">Login</a>
              <Button type="button" title='Sign up' variant='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'/>
          </div>

          {/* menu btn for only mobile devices */}
          <div className="md:hidden">
              <button
               onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-grey-500">
                  {
                      isMenuOpen ? (<FaXmark className="h-6 w-6 "/>) : (<FaBars className="h-6 w-6 "/>)
                  }
                   </button>
          </div>
        </div>

        {/* nav items for mobile devices */}

        <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${ isMenuOpen ? "block h-screen fixed top-0 right-0 left-0" : "hidden"}`}>
        {
             navItems.map(({link, path}) => <Link key={path} spy={true} smooth={true} offset={-100} to={path} className="block text-white  hover:text-brandPrimary first:font-medium">{link}</Link> )
             }
             <Dropdown/>
    </div>
      </nav>
     </header>
   )
 }

export default Navbar
