import React, { useContext, useEffect, useState } from 'react'
import './game.scss';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineYoutube } from 'react-icons/ai';
import { SiImdb } from 'react-icons/si';
import { IMovie } from '../../entities/IMovie';
import { ThemeContext } from '../../Hooks/ThemeContext';
export default function Game() {
  const [movie, setMovie] = useState<IMovie[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(movie.length);
  const [isLoading, setIsLoading] = useState(true);
  const [Data, setData] = useState(true);
  const currentCard = movie[currentCardIndex];
  const { theme } = useContext(ThemeContext);
  const { darkMode } = theme;

  useEffect(() => {
    new Promise(resolve => setTimeout(resolve, 2000));
    // getMovies().then((res: IMovie | any) => {
    //   const timer = setTimeout(() => {
    //     setMovie(res);
    //     setIsLoading(false);
    //     setData(false);
    //   }, 2000);
    //   return () => clearTimeout(timer);
    // }).catch((error: any) => {
    //   console.error(error);
    //   setIsLoading(false);
    // })

  }, [])

  const handleSwipeLeft = () => {
    setCurrentCardIndex((prevIndex) => prevIndex === 0 ? movie.length - 1 : prevIndex - 1);
  };

  const handleSwipeRight = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % movie.length);
  };
  return (
    <div className={`${darkMode ? 'bg-slate-950' : 'bg-white'}  ${darkMode ? 'text-white' : 'text-black'} h-screen`}>
      <div className={`${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
        <div className='game_container'>
          <div className="game_card" id="backgroundshadow">
            <div className="info_section">
              <div className="game_header">
                <img
                  className="gameImg"
                  src="https://images.unsplash.com/photo-1470299568568-d4e15c4b6472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80"
                  alt="sadfsadf"
                />
                <h1 id='game_title'>GTA V</h1>
                <h4 id='directorHeader'>
                  Publisher: Rockstar Games
                </h4>
                <div id=''>
                  <span className="minutes">Release: 2013</span>
                  <p className="type">Genres: Open-World, Action-Adventure </p>
                </div>
              </div>
              <div className="game_desc">
                <p className="text" id='synopsisText' >beschreibungsdfsdafsadfdssafdsafsadfsafsdfdsafdsjkdshflksdjhfdskjfhdslkjfhasdlkfjshadlkjdfhjsdlkfjadsölkfjdsaölfkdsajaöflksadjfölaskdjfasödlkfjsdaölkfjdsaölfkdjslfkjdsölkfjsadölkfjsdölksdjfölskdfjsdakjlföjasdkfjdsaölfkasdjfölkasdjfösdlkfjsdölkfjdsölkfjlksdajfaölsdakjfösdalkfjsdaölfkjsadölkj dsflk jsdfkj dsfölkjsdafölkjdsöflkj öldksajf lsdakfjasdlkfj sadölk </p>
              </div>

              <div className="icon_design">
                <div className='float-left '>
                  <span id="star">★</span>
                  <span id="score" className=''>5/10</span>
                </div>
                <div className='game_youtube'>
                  <a href="https://www.youtube.com/watch?v=_8PdcZCpl0c" target="_blank" >
                    <AiOutlineYoutube
                      size={40}
                      color='white'
                    />
                  </a>
                  <a href="https://www.youtube.com/watch?v=_8PdcZCpl0c" target="_blank" className='ml-6'>
                    <SiImdb
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

            <AiOutlineArrowRight onClick={handleSwipeRight} size={50} className='rightArrow' />
          </div>
        </div>
      </div>
    </div>
  )
}
