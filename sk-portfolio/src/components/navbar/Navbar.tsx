import React from 'react';
import './Navbar.css';
import SkIcon from '../skIcon/SkIcon';

const Navbar = () =>{
    return (
        <div className='Navbar'>
            <SkIcon size='small'/>
            <div className='NavbarContents'>
                <p className='NavbarContent'>AboutMe</p>
                <p className='NavbarContent'>My Projects</p>
                <p className='NavbarContent'>Contact Me</p>
            </div>
        </div>
    )
}
export default Navbar;