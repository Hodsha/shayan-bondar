import React, { useContext, useEffect, useRef, useState } from 'react';
import './navbar.scss';
import { AiOutlineClose, AiFillHome, AiOutlineSetting } from 'react-icons/ai';
import { BiMoviePlay } from 'react-icons/bi'
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineGames, MdRecommend, MdOutlineLanguage, MdUpdate } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';
import { ThemeContext } from '../../Hooks/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const { theme } = useContext(ThemeContext);
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

    return (<>
        <nav>
            <ul className='menu nav-menu'>
                <li><a href="">Home</a></li>
                {/* <li><a href="">Contact</a></li> */}
                <li>
                    <a href="">Blogs</a>
                    <ul className='menu-items menu-item1'>
                        <li><a href="">Movies</a></li>
                        <li><a href="">Games</a></li>
                    </ul>
                </li>
                <li><a href="">Updates</a></li>

                <li>
                    <a href="">Settings</a>
                    <ul className='menu-items menu-item3'>
                        <li>Language: </li>
                        <li>Darkmode: </li>
                    </ul>
                </li>
            </ul>
        </nav>

        {/* responsive */}
        <nav ref={navbarRef}>
            {
                !isOpen && (
                    <RxHamburgerMenu onClick={handleSidebar} size={40} className="hamburger" />
                )
            }
            <div className={`sidebar ${isOpen ? 'is-active' : ''}`}>
                <AiOutlineClose onClick={handleSidebar} size={35} className="closeBtn" />
                <div >
                    <ul className='items'>
                        <li className='item'><a href="" className='link'><AiFillHome className="icons" size={25} />Home</a></li>
                        <li className='item' onClick={() => handleDropdownClick(1)}> <MdRecommend className="icons" size={25} />Blogs </li>
                        {
                            buttons[0].isOpen && (
                                <ul className='subitems'>
                                    <li className='subitem'><a href="" className='link'><BiMoviePlay className="sub_icons" size={25} />Movie</a></li>
                                    <li className='subitem'><a href="" className='link'><MdOutlineGames className="sub_icons" size={25} />Games</a></li>
                                </ul>
                            )
                        }
                        <li className='item'><a href="" className='link'><MdUpdate className="icons" size={25} />Updates</a></li>
                        <li className='item' onClick={() => handleDropdownClick(2)}> <AiOutlineSetting className="icons" size={25} />Settings</li>
                        {
                            buttons[1].isOpen && (
                                <ul className='subitems'>
                                    <li className='subitem'> <button
                                        onClick={handleToggleDarkMode}>
                                        {theme.darkMode ? <FaSun className='text-yellow-300' size={30} /> : <FaMoon className='text-white' size={30} />}
                                    </button></li>
                                    <li className='subitem'> <BsSun className="sub_icons" size={25} />Darkmode</li>
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
