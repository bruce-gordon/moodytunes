import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavoritesView from "./FavoritesView";
import {fakeSearchResults, testSong, testDuplicateSong} from '../common/testData'

describe("FavoritesView", () => {
  const mockRemoveFavorite = jest.fn();    

  it("Should render Favorite View header", () => {
    render(
      <FavoritesView
        favoriteSongs={fakeSearchResults}
        removeFavorite={mockRemoveFavorite}
      />
    );
    const favoritesTitle = screen.getByRole('heading', { name: /favorites view/i })
    
    expect(favoritesTitle).toBeInTheDocument();
  });

  it("Should render Favorite component", () => {
    render(
      <FavoritesView
        favoriteSongs={fakeSearchResults}
        removeFavorite={mockRemoveFavorite}
      />
    );

    expect(screen.getByText("John Lennon")).toBeInTheDocument();
    expect(screen.getByText("Real Love")).toBeInTheDocument();
    expect(screen.getAllByText("1988")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Pop")[0]).toBeInTheDocument();
  });
});