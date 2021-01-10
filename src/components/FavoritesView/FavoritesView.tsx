import React, {useEffect} from 'react';
import Favorite from '../Favorite/Favorite';
import './FavoritesView.css';

interface FavoritesViewProps {
  favoriteSongs:
   {
    id: string,
    artist_display_name: string,
    title: string,
    releasedate: string,
    genre: string
  }[];
  removeFavorite: Function;
}

const FavoritesView = ({favoriteSongs, removeFavorite}: FavoritesViewProps) => {
  useEffect(() => {
    document.title = `MoodyTunes - Favorites (${favoriteSongs.length})`
  }, [])
  
  const favorites = favoriteSongs.map(fav => {
    return (
      <Favorite
        key={`${fav.id}1`}
        id={fav.id}
        artist={fav.artist_display_name}
        title={fav.title}
        releaseDate={fav.releasedate}
        genre={fav.genre}
        removeFavorite={removeFavorite}
      />
    );
  });
  return (
    <section className='favorites-view'>
      <h2>Favorites View</h2>
      { favorites }
    </section>
   );
}

export default FavoritesView;
