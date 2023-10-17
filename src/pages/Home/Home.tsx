import React, { useContext } from 'react'
import { ThemeContext } from '../../Hooks/ThemeContext';
import './home.scss';
import { useTranslation } from 'react-i18next';

export default function Home() {
    const { theme } = useContext(ThemeContext);
    const { darkMode } = theme;
    const {t} = useTranslation();
    
    return (
        <div className={`${darkMode ? 'bg-slate-950' : 'bg-white'}  ${darkMode?'text-white' : 'text-black'}`}>
            <div id="bodyStyle" >
                <div className="gradient">
                    <section>
                        <h2 className="text-4xl">{t('HomeTitle')}</h2>
                        <br />
                        <p>{t('Introduction')}</p>
                    </section>
                    <section>
                        <h2 className="text-3xl">{t('AboutMe')}</h2><br />
            
                        <h3 className="text-4xl">{t('CodingSkills')}</h3><br />
                        <p className="space-maker">{t('AboutCoding')}</p>
                        <h3 className="superscription">{t('SportQues.')}</h3><br />
                        <p className="space-maker">{t('Sport')}<br /> </p>

                        <h3 className="superscription">{t('DogQues.')}</h3><br />
                        <p className="space-maker">
                        {t('Scar')}<br /> 
                        </p>
                        {/* <h3 className="superscription">{t('Goal')}</h3><br />
                        <p className="space-maker">well i can answer that quickly. just check out my page where i introduce you my favorite movies and series<br /> <br /> </p> */}

                        {/* <h3 className="superscription">which places have you already visited?</h3><br />
                        <p className="space-maker">I haven't traveled much yet, but one of my goals is to visit as many capitals as possible. I've already been to Berlin, Rome, Paris, London and my next destination is Athens or Stockholm.  <br /> <br /> </p> */}

                        <h3 className="superscription">{t('GoalsQues.')}</h3>
                        <p className="space-maker"><br />{t('Goals')} <br />

                        </p>
                        <h3 className="superscription">{t('MusicQues.')}</h3><br />
                        <p>{t('Music')}</p>
                    </section>
                </div>
            </div>

        </div>
    )
}
