import React from 'react';
import './games.css';

const Game = ({ image, alt, title, text, link}) => {
    return (
        <div className="gameContainer">
            <div>
                <img alt={alt} src={`assets/${image}`}/>
            </div>
            <div className="paragraph">
                <h2>{title}</h2>
                <p>{text}</p>
                <form action={link} method="get" target="_blank">
                    <button type="submit">Télécharger</button>
                </form>
            </div>
        </div>
    );
}

export default Game;