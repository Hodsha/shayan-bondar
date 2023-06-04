import React, { useState } from 'react';
import './movie.scss';



const Movie: React.FC = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const cards = [
        {
            id: 1,
            title: 'Card 1',
            description: 'This is the first card',
            image: 'https://example.com/card1.jpg',
        },
        {
            id: 2,
            title: 'Card 2',
            description: 'This is the second card',
            image: 'https://example.com/card2.jpg',
        },
        {
            id: 3,
            title: 'Card 3',
            description: 'This is the second card',
            image: 'https://example.com/card2.jpg',
        },
        {
            id: 4,
            title: 'Card 4',
            description: 'This is the second card',
            image: 'https://example.com/card2.jpg',
        },
    ]
    const nextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const prevCard = () => {
        setCurrentCardIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="card-slider">
            <button className="slider-button prev" onClick={prevCard}>
                &#8249;
            </button>
            <div className="card-container">
                {cards.map((card, index) => (
                    <div
                        className={`card ${index === currentCardIndex ? 'active' : ''}`}
                        key={card.id}
                    >
                        <img src={card.image} alt={card.title} />
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
            <button className="slider-button next" onClick={nextCard}>
                &#8250;
            </button>
        </div>
    );
};

export default Movie;
