import React, { useContext } from 'react';
import './timeline.scss';
import { ThemeContext } from '../../Hooks/ThemeContext';
import { useTranslation } from 'react-i18next';
const TimeLine = () => {
    const { theme } = useContext(ThemeContext);
    const { darkMode } = theme;
    const {t} = useTranslation();
//ToDo create component and a loop for the updates
    return (
        <div className={`${darkMode ? 'bg-slate-950' : 'bg-white'}  ${darkMode ? 'text-white' : 'text-black'} h-screen`}>
            <div className={`${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
                <div className="container">
                    
                    <div className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>language adjusted</h3>
                            <span>17.10.2023</span>
                            <p>{t('17102023')}</p>
                        </div>
                    </div>
                    <div className="timeline-block timeline-block-left">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>Fixed movie site</h3>
                            <span>08.07.2023</span>
                            <p>{t('08072023')}</p>
                        </div>
                    </div>
                    <div className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>Rework my website </h3>
                            <span>26.06.2023</span>
                            <p>{t('26062023')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeLine;
