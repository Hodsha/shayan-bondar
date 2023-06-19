import React, { useContext, useEffect, useRef, useState } from 'react';
import './navbar.scss';
import { AiOutlineClose, AiFillHome, AiOutlineSetting, AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { BiMoviePlay } from 'react-icons/bi'
import { RxHamburgerMenu } from 'react-icons/rx';
import {  MdUpdate } from 'react-icons/md';
import { ThemeContext } from '../../Hooks/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ImBlog } from 'react-icons/im'
import { Link } from 'react-router-dom';
import i18n from '../../Services/language'

const Navbar: React.FC = () => {
    const { theme } = useContext(ThemeContext);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [language, setLanguage] = useState<string>("English");
    const [isOpen, setOpen] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);
    const [buttons, setButtons] = useState([
        { id: 1, isOpen: false },
        { id: 2, isOpen: false },
        { id: 3, isOpen: false }

    ]);

    const handleDropdownClick = (id: number) => {
        const updateButton = buttons.map((button) => {
            return button.id === id ? { id, isOpen: !button.isOpen } : button;
        })
        setButtons(updateButton);
    };

    const handleSidebar = () => {
        isOpen ? setOpen(false) : setOpen(true);
    }

    const handleClickOutside = (event: MouseEvent) => {

        if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleToggleDarkMode = () => {
        theme.toggleDarkMode();
    };

    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'de' : 'en';

        setLanguage(newLanguage === 'en' ? 'English' : 'Deutsch');
        i18n.changeLanguage(newLanguage);
        newLanguage === 'en' ? setIsChecked(false) : setIsChecked(true);
        localStorage.setItem('language', newLanguage);
    };

    useEffect(() => {
        const lastLanguage = localStorage.getItem('language');
        if (lastLanguage) {
            i18n.changeLanguage(lastLanguage);
            lastLanguage === 'en' ? setIsChecked(false) : setIsChecked(true);
        }
    }, [i18n]);

    return (<>
        {/* responsive */}
        <nav ref={navbarRef}>
            {
                !isOpen && (
                    <RxHamburgerMenu onClick={handleSidebar} size={40} className={`hamburger ${theme.darkMode ? 'dark' : ''}`} />
                )
            }
            <div className={`sidebar ${isOpen ? 'is-active' : ''}`}>
                <AiOutlineClose onClick={handleSidebar} size={35} className="closeBtn" />
                <div >
                    <ul className='items'>
                        <li className='item'> <Link to={'/'} className='link'><AiFillHome className="icons" size={25} />Home</Link></li>
                        <li className='item' onClick={() => handleDropdownClick(1)}>
                            <ImBlog className="icons" size={25} />Blogs
                            {buttons[0].isOpen ? <AiOutlineArrowUp size={15} className='arrow' /> : <AiOutlineArrowDown size={15} className='arrow' />}
                        </li>
                        {
                            buttons[0].isOpen && (
                                <ul className='subitems'>
                                    <li className='subitem'><Link to={'/Movie'} className='link'><BiMoviePlay className="sub_icons" size={25} />Movie</Link></li>
                                    {/* <li className='subitem'><a href="" className='link'><MdOutlineGames className="sub_icons" size={25} />Games</a></li> */}
                                </ul>
                            )
                        }
                        <li className='item'><Link to={'TimeLine'} className='link'><MdUpdate className="icons" size={25} />Updates</Link></li>
                        <li className='item' onClick={() => handleDropdownClick(2)}>
                            <AiOutlineSetting className="icons" size={25} />Settings
                            {buttons[1].isOpen ? <AiOutlineArrowUp size={15} className='arrow'/> : <AiOutlineArrowDown size={15} className='arrow'/>}
                        </li>
                        {
                            buttons[1].isOpen && (
                                <ul className='subitems'>
                                    <li className='subitem'>
                                        <button
                                            onClick={handleToggleDarkMode}>
                                            {theme.darkMode ? <FaSun className='ml-6 text-yellow-300' size={25} /> : <FaMoon className='ml-6 text-gray-500' size={25} />}
                                        </button>
                                    </li>
                                    <li className='subitem'>
                                        <button onClick={toggleLanguage} className='ml-6'>
                                            {isChecked ? <img src="https://flagcdn.com/28x21/de.png" width="28" height="21" alt="Germany" /> : <img src="https://flagcdn.com/28x21/gb.png" width="28" height="21" alt="United Kingdom" />}
                                        </button>
                                    </li>
                                </ul>
                            )
                        }

                    </ul>
                </div>
            </div>
        </nav>
    </>
    );
};

export default Navbar;
