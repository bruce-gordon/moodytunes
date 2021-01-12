import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ResultsView from "./ResultsView";
import {fakeSearchResults, fakeFavorites, testSong, testDuplicateSong} from '../common/testData'


describe("ResultsView", () => {
  it("Should render Result components", () => {
    const mockAddFavorite = jest.fn();
    
    render(
      <ResultsView
        songResults={fakeSearchResults}
        addFavorite={mockAddFavorite}
        moodName={ 'Content' }
        favoriteSongs={ fakeFavorites }
      />
    );
    const mood = screen.getByRole('heading', { name: /"content" song results:/i })

    expect(mood).toBeInTheDocument();
    expect(screen.getByText("John Lennon")).toBeInTheDocument();
    expect(screen.getByText("Real Love")).toBeInTheDocument();
    expect(screen.getAllByText("1988")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Pop")[0]).toBeInTheDocument();
  });
}); 
