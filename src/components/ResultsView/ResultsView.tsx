import React from "react";
import Result from "../Result/Result";
import {ResultsViewProps} from '../common/Types'

const ResultsView = ({ addFavorite, songResults }: ResultsViewProps) => {
  const songs = songResults.map(song => {
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
  return (
    <section className="results-view">
      <h2 className="container-title">
        MoodyTunes Results
      </h2>
      {songs}
    </section>
  )
};

export default ResultsView;
