import React from 'react';
import Result from '../Result/Result'


interface ResultsViewProps {
  songResults: 
    {
      id: string, 
      artist_display_name: string, 
      title: string, 
      releasedate: string, 
      genre: string,
    }[]
  addFavorite: Function};
const ResultsView = ({vorite, songResults }: ResultsViewProps) => { addFa
   const songs = songResults.map((song) => {
     return (
       <Result
        key={song.id} 
        id={song.id}
        artist={song.artist_display_name}
        title={song.title}
        releaseDate={song.releasedate}
        genre={song.genre}
        addFavorite={addFavorite}
       />
     );
   });
   return <section className="songList">
       <h1 className="container-title">MoodyTunes Results</h1>
       {songs}
       </section>;
}

export default ResultsView;