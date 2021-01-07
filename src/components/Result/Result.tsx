import React from 'react';
import './Result.css';

interface ResultProps {
    key: string;
    id: string;
    artist: string;
    title: string;
    releaseDate: string;
    genre: string;
};

const Result = ({ key, id, artist, title, releaseDate, genre }: ResultProps) => {
    return (
        <article className="song" id={id}>
            <div className="song-details">
                <button className="moodBtn">+</button>
                <div className="title-artist">
                    <h1>{title}</h1>
                    <h3>{artist}</h3>
                </div>
                <button className="favoriteBtn">*</button>
            </div>
            <div className="date-genre">
                <p><b>Release Date:</b> {releaseDate}</p>
                <p><b>Genre:</b> {genre}</p>
            </div>
            
        </article>
    )
}

export default Result;