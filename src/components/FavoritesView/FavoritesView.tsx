import React from 'react';

interface FavoritesViewProps {
  favoriteSongs: {
    id: string, 
    artist: string, 
    title: string, 
    releaseDate: string, 
    genre: string,
    addFavorite: Function
  }[];
}
 
const FavoritesView: React.SFC<FavoritesViewProps> = () => {
  return ( 
    <h1>Favorites View</h1>
   );
}
 
export default FavoritesView;