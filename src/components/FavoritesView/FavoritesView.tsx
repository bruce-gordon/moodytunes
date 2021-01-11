import React from 'react';
import Favorite from '../Favorite/Favorite';
import './FavoritesView.css';
import { useLocalStorage } from '../../utilities/useLocalStorage';


interface FavoritesViewProps {
  removeFavorite: Function;
}


const FavoritesView = ({removeFavorite}: FavoritesViewProps) => {
  let storedFavs: any = useLocalStorage('favorites');
  storedFavs = storedFavs[0];
  if(storedFavs.length) {
  const favorites = storedFavs.map((fav: any) => {
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
      <article className='favs-container'>
        { favorites }
      </article>
    </section>
   );
  } else {
      return (
    <section className='no-favorites'>
      <h2>Favorites View</h2>
      <br/>
      <p>You currently do not have any favorite songs. <br/><br/>
      Click the '⭐️' to add a song to your Favorites.
      </p>
    </section>
   );
  }
}

export default FavoritesView;
