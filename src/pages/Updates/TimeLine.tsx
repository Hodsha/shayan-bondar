import React, { useContext } from 'react';
import './timeline.scss';
import { ThemeContext } from '../../Hooks/ThemeContext';
const TimeLine = () => {
    const { theme } = useContext(ThemeContext);
    const { darkMode } = theme;
    return (
        <div className={`${darkMode ? 'bg-slate-950' : 'bg-white'}  ${darkMode ? 'text-white' : 'text-black'} h-screen`}>
            <div className={`${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
                <div className="container">
                    
                    {/* <div className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>New Movie Recomm.</h3>
                            <span>23.05.2023</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                        </div>
                    </div> */}
                    <div className="timeline-block timeline-block-left">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>Fixed movie site</h3>
                            <span>08.07.2023</span>
                            <p>The movie site is fixed now. The responsive mobile view didnt work properly, the swipe arrows jumped up and down while I clicked on it, so i had to fix the position and add a new div to it.</p>
                        </div>
                    </div>
                    <div className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>Rework my website </h3>
                            <span>26.06.2023</span>
                            <p>I reworked my website. I added some new features like switch languages between german and english and darkmode. Plus i added new sites like timeline. Besides my whole website is responsive and have still have some ideas for the future so tuned.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeLine;
