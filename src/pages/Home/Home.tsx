import React, { useContext } from 'react'
import { ThemeContext } from '../../Hooks/ThemeContext';
import './home.scss';
import Loader from '../../components/Loader/Loader';


export default function Home() {
    const { theme } = useContext(ThemeContext);
    const { darkMode } = theme;
    return (
        <div className={`${darkMode ? 'bg-slate-950' : 'bg-white'}  ${darkMode?'text-white' : 'text-black'}`}>
            <Loader />
            <div id="bodyStyle" >
                <div className="gradient">
                    <section>
                        <h2 className="text-4xl">Who is this guy?</h2>
                        <p>Hello there! I'm Shayan, an aspiring web developer from germany.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-3xl">About Me</h2><br />

                        <h3 className="text-4xl">Coding skills</h3><br />
                        <p className="space-maker">Through my training and independent learning I have acquired these skills. Of course I still have to learn a lot but this is how I assess my skills for a junior developer after 3 years of training.</p>
                        <h3 className="superscription">what sport do you practice?</h3><br />
                        <p className="space-maker">I used to play a loft of football. Now I do MMA to stay fit.<br /> </p>

                        <h3 className="superscription">what kind of dog do you have?</h3><br />
                        <p className="space-maker">
                            i have a belgian malinois named Scar and he is 3 years old. He is very playful and crazy. Even though he is quite big you don't have to be afraid of him.
                            You can just bribe him with some treats.<br /> <br />
                        </p>
                        <br /> <br />
                        <h3 className="superscription">what are your favorite movies and series?</h3><br />
                        <p className="space-maker">well i can answer that quickly. just check out my page where i introduce you my favorite movies and series<br /> <br /> </p>

                        <h3 className="superscription">which places have you already visited?</h3><br />
                        <p className="space-maker">I haven't traveled much yet, but one of my goals is to visit as many capitals as possible. I've already been to Berlin, Rome, Paris, London and my next destination is Athens or Stockholm.  <br /> <br /> </p>

                        <h3 className="superscription">what are your goals?</h3>
                        <p className="space-maker">I always want to improve. whether in sports, coding or general in life.<br /> <br />


                        </p>
                        <h3 className="superscription">What type of music do you listen to?</h3><br />
                        <p>I listen to everything. There is no bad genre. It just depends on my mood or the location</p><br /><br /><br /><br /><br />
                    </section>
                </div>
            </div>

        </div>
    )
}
