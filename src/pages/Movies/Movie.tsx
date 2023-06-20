import React, { useContext, useEffect, useState } from 'react';
import './movie.scss';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import CircularProgressBar from '../../components/Circular progress bar/CircularProgressBar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Circular from '../../components/Circular progress bar/Circular';
import { ThemeContext } from '../../Hooks/ThemeContext';
import { AiOutlineYoutube } from 'react-icons/ai';
import { getMovie } from '../../Repository/myDataBase';
import axios from 'axios';

const Movie: React.FC = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const cards = [
        { id: 1, title: 'Tomb Raider', regie: 'Roar Uthaug', genre: 'Action, Thriller', minute: 150, ReleaseDate: '2016', rating: 7, img: 'https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png', youtube: 'https://www.youtube.com/watch?v=J_1rQfPVaLg' },
        { id: 2, title: 'Bright', regie: 'David Ayer', genre: 'Action, comedy, drama', minute: 160, ReleaseDate: '2017', rating: 8, img: 'https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg', youtube: 'https://www.youtube.com/watch?v=OSaGxQSKoNE' },
        { id: 3, title: 'Black Panther', regie: 'Ryan Coogler', genre: 'Action, comedy, drama, marvel', minute: 170, ReleaseDate: '2018', rating: 9, img: 'https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg', youtube: 'https://www.youtube.com/watch?v=pxgLR99TWAk' },
    ];
    const handleSwipeLeft = () => {
        setCurrentCardIndex((prevIndex) => prevIndex === 0 ? cards.length - 1 : prevIndex - 1);
    };

    const handleSwipeRight = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const currentCard = cards[currentCardIndex];

    const { theme } = useContext(ThemeContext);
    const { darkMode } = theme;

    const [data, setData] = useState<any>([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/data')
            .then((response) => response.json())
            .then((data) => setData(data));
            
    }, []);
    console.log(data);
    return (
        <div className={`${darkMode ? 'bg-slate-950' : 'bg-white'}  ${darkMode ? 'text-white' : 'text-black'} h-screen`}>
            <div className={`${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
                <div className='movie_container'>
                    <div className="movie_card" id="backgroundshadow">
                        <div className="info_section">
                            <div className="movie_header">
                                <img
                                    className="movieImg"
                                    src={currentCard.img}
                                    alt={currentCard.title}
                                />
                                <h1 id='movie_title'>{currentCard.title}</h1>
                                <h4 id='directorHeader'>
                                    {currentCard.regie}, {currentCard.ReleaseDate}
                                </h4>
                                <div id='header2'>
                                    <span className="minutes">{currentCard.minute} min</span>
                                    <p className="type">{currentCard.genre}</p>
                                </div>
                            </div>
                            <div className="movie_desc">
                                <p className="text" id='synopsisText' >orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                                    pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                                    Aenean vulputate eleifend tellus. </p>
                            </div>
                            <div id='icon_design_position'>
                                <p className="icon_design">
                                    <div className='float-left mr-4'>
                                        <span id="star">★</span>
                                        <span id="score" className=''>{currentCard.rating}/10</span>
                                    </div>
                                    <div className='movie_youtube mt-4'>
                                        <a href={currentCard.youtube} target="_blank" className="ml-2">
                                            <AiOutlineYoutube
                                                size={40}
                                                color='white'
                                            />
                                        </a>
                                    </div>


                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='arrow_design'>
                        <AiOutlineArrowLeft onClick={handleSwipeLeft} size={50} className='leftArrow' />
                        {currentCard.id}/{cards.length}
                        <AiOutlineArrowRight onClick={handleSwipeRight} size={50} className='rightArrow' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;