import React from 'react';
import Game from './Game';
import './games.css';

let GamesJSON = require('../../data/games.json');

const Games = () => {
  return (
    <div className="games">
        <Game 
            image={GamesJSON[0].image}
            title={GamesJSON[0].title}
            text={GamesJSON[0].text}
            link={GamesJSON[0].link}
        />
        <Game 
            image={GamesJSON[1].image}
            alt={GamesJSON[1].alt}
            title={GamesJSON[1].title}
            text={GamesJSON[1].text}
            link={GamesJSON[1].link}
        />
        <Game
            image={GamesJSON[2].image}
            alt={GamesJSON[2].alt}
            title={GamesJSON[2].title}
            text={GamesJSON[2].text}
            link={GamesJSON[2].link}
        />
    </div>

  );
};

export default Games;