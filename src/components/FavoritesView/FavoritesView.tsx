import React from 'react';

interface FavoritesViewProps {
  favoriteSongs:
   {
    id: string, 
    artist_display_name: string, 
    title: string, 
    releasedate: string, 
    genre: string
  }[];
}
 
const FavoritesView: React.SFC<FavoritesViewProps> = () => {
  return ( 
    <h1>Favorites View</h1>
   );
}
 
export default FavoritesView;