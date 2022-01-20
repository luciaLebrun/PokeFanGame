import React from 'react';
import './filterableGames.css';
import Game from '../games/Game';

let Games = require('../../data/games.json');

const FilterableGames = () => {
    return (
        <div>
            {Games.map((game) => (
                <Game
                    alt={game.alt}
                    image={game.image}
                    title={game.title}
                    text={game.text}
                    link={game.link}
                />
            ))}
        </div>
    );
};

export default FilterableGames;