import React from 'react'

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
        <article className="song" id={id} style={{ border:'solid 3px' }}>
            <button>+</button>
            <h1>{artist} - {title}</h1>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <p>Release Date: {releaseDate}</p>
                <p>Genre: {genre}</p>
            </div>
            
        </article>
    )
}

export default Result;