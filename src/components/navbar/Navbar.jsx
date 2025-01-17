import logo from '../../assets/Netflix_Logo_RGB.svg'
import avatar from '../../assets/Netflix-avatar.svg'
import Navbar_button from '../Links /Navbar_button'
import Icons from '../Icons/Icons';
import serach_icon from '../../assets/search-interface-symbol.svg'
import notification_btn from '../../assets/notification-bell.svg'
import './navbar.css'
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] =  useState('')

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {  
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className='first portion '>
                <img className='logo netflix' src={logo} alt="" />
                <ul>
                    <li>
                        <Navbar_button title={'Home'} link={'/home'} />
                    </li>
                    <li>
                    <Navbar_button title={'Tv Shows'} link={'/home'} />
                    </li>
                    <li>
                    <Navbar_button title={'Movies'} link={'/home'} />
                    </li>
                    <li>
                    <Navbar_button title={'New & Popluar'} link={'/home'} />
                    </li>
                    <li>
                    <Navbar_button title={'My List'} link={'/home'} />
                    </li>
                    <li>
                    <Navbar_button title={'Browser by Language'} link={'/home'} />
                    </li>
                </ul>
            </div>
            <div className="second portion">
                <Icons title={'search icon'} logo={serach_icon}></Icons>
                <Icons title={'notification'} logo={notification_btn}></Icons>
                <img className='netflix avatar' src={avatar} alt="" />
            </div>
        </nav>
        </div>
    )
}

export default Navbar