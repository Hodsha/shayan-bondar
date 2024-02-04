import React, { useContext, useEffect, useState } from 'react';
import './games.scss';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { ThemeContext } from '../../Hooks/ThemeContext';
import { AiOutlineYoutube } from 'react-icons/ai';
import { SiImdb } from 'react-icons/si';
import { getGames} from '../../Repository/phpDataBase/phpDatabase';
import Loader from '../../components/Loader/Loader';
import { IGame } from '../../entities/IGame';

const Games: React.FC = () => {
    const [game, setGame] = useState<IGame[]>([]);
    const [currentCardIndex, setCurrentCardIndex] = useState(game.length);
    const [isLoading, setIsLoading] = useState(true);
    const [Data, setData] = useState(true);
    const currentCard = game[currentCardIndex];
    const { theme } = useContext(ThemeContext);
    const { darkMode } = theme;

    useEffect(() => {
        new Promise(resolve => setTimeout(resolve, 2000));
        getGames().then((res: IGame | any) => {
            const timer = setTimeout(() => {
                setGame(res);
                setIsLoading(false);
                setData(false);
            }, 500);
            return () => clearTimeout(timer);
        })
        .catch((error: any) => {
            console.error(error);
            setIsLoading(false);
        })
    }, [])

    const handleSwipeLeft = () => {
        setCurrentCardIndex((prevIndex) => prevIndex === 0 ? game.length - 1 : prevIndex - 1);
    };

    const handleSwipeRight = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % game.length);
    };
    if (isLoading) {

        return <Loader />;
    }

    if (Data) {
        return <div>No data available....</div>;
    }

    return (
        <div className={`${darkMode ? 'bg-slate-950' : 'bg-white'}  ${darkMode ? 'text-white' : 'text-black'} h-screen`}>
            <div className={`${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
                <div className='movie_container'>
                    <div className="movie_card" id="backgroundshadow">
                        <div className="info_section">
                            <div className="movie_header">
                                <img
                                    className="movieImg"
                                    src={currentCard.Image}
                                    alt={currentCard.Title}
                                />
                                <h1 id='movie_title'>{currentCard.Title}</h1>
                                <h4 id='directorHeader'>
                                    {currentCard.Publisher}, {currentCard.ReleaseYear}
                                </h4>
                                <div id='header2'>
                           
                                    <p className="type">{currentCard.Genre}</p>
                                </div>
                            </div>
                            <div className="movie_desc">
                                <p className="text" id='synopsisText' >{currentCard.Synopsis} </p>
                            </div>

                            <div className="icon_design">
                                <div className='float-left '>
                                    <span id="star">★</span>
                                    <span id="score" className=''>{currentCard.Rating}/10</span>
                                </div>
                                <div className='movie_youtube'>
                                    <a href={currentCard.Youtube} target="_blank" >
                                        <AiOutlineYoutube
                                            size={40}
                                            color='white'
                                            />
                                    </a>                     
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='arrow_design'>
                        <AiOutlineArrowLeft onClick={handleSwipeLeft} size={50} className='leftArrow' />
                        {currentCard.ID}/{game.length}
                        <AiOutlineArrowRight onClick={handleSwipeRight} size={50} className='rightArrow' />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Games;