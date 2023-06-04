import React, { useContext } from 'react'
import { ThemeContext } from '../../Hooks/ThemeContext';

export default function Home() {
    const { theme } = useContext(ThemeContext);
    const { darkMode } = theme;
    return (
        <div className={`${darkMode ? 'bg-black' : 'bg-white'} text-${darkMode ? 'white' : 'black'}`}>
                <p>asdfsadfsd</p>
        </div>
    )
}
