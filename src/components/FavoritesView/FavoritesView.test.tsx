import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FavoritesView from "./FavoritesView";

describe("FavoritesView", () => {
  it("Should render Favorite component", () => {
    const mockRemoveFavorite = jest.fn();    
    render(
      <FavoritesView
        favoriteSongs={[{
          id: '1',
          artist_display_name: 'some artist',
          title: 'some title',
          releasedate: '1983',
          genre: 'hip hop'
        }]}
        removeFavorite={mockRemoveFavorite}
      />
    );
    expect(screen.getByText("some artist")).toBeInTheDocument();
    expect(screen.getByText("some title")).toBeInTheDocument();
    expect(screen.getByText("1983")).toBeInTheDocument();
    expect(screen.getByText("hip hop")).toBeInTheDocument();
  });
});