import React, { useState } from 'react';
import './movie.scss';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import CircularProgressBar from '../../components/Circular progress bar/CircularProgressBar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Circular from '../../components/Circular progress bar/Circular';

const Movie: React.FC = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const cards = [
        { id: 1, title: 'Tomb Raider', regie: 'Roar Uthaug', genre: 'Action, Thriller', minute: 150, ReleaseDate: '2016', rating: 7, img: 'https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png', youtube: 'https://www.youtube.com/watch?v=J_1rQfPVaLg' },
        { id: 2, title: 'Bright', regie: 'David Ayer', genre: 'Action, comedy, drama', minute: 160, ReleaseDate: '2017', rating: 8, img: 'https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg', youtube: 'https://www.youtube.com/watch?v=OSaGxQSKoNE'},
        { id: 3, title: 'Black Panther', regie: 'Ryan Coogler', genre: 'Action, comedy, drama, marvel', minute: 170, ReleaseDate: '2018', rating: 9, img: 'https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg', youtube: 'https://www.youtube.com/watch?v=pxgLR99TWAk' },
    ];
    const handleSwipeLeft = () => {
        setCurrentCardIndex((prevIndex) => prevIndex === 0 ? cards.length - 1 : prevIndex - 1);
    };

    const handleSwipeRight = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const currentCard = cards[currentCardIndex];

    return (
        <div className='boxcard'>
            <div className='movie_container'>
                <div className='movie-header'>
                    <img src={currentCard.img} alt={currentCard.title} className='bild' />
                    <h1 id='movie_title'>{currentCard.title}</h1>
                    
                </div>
           
            </div>
            <div className='arrows'>
                <AiOutlineArrowLeft onClick={handleSwipeLeft} size={40} className='leftArrow' />
                <AiOutlineArrowRight onClick={handleSwipeRight} size={40} className='rightArrow' />
            </div>
        </div>
    );
};

export default Movie;


{/* <div className='arrows'>
<AiOutlineArrowLeft onClick={handleSwipeLeft} size={40} className='leftArrow' />
sadfsdfsdfsadfdsfsdaf
<AiOutlineArrowRight onClick={handleSwipeRight} size={40} className='rightArrow' />
</div> */}