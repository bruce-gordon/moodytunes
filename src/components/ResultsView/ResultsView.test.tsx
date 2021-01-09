import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ResultsView from "./ResultsView";

describe("ResultsView", () => {
  it("Should render Result components", () => {
    const mockAddFavorite = jest.fn();
    
    render(
      <ResultsView
        songResults={[{
          id: '1',
          artist_display_name: 'some artist',
          title: 'some title',
          releasedate: '1983',
          genre: 'hip hop'
        }]}
        addFavorite={mockAddFavorite}
      />
    );
    expect(screen.getByText("some artist")).toBeInTheDocument();
    expect(screen.getByText("some title")).toBeInTheDocument();
    expect(screen.getByText("1983")).toBeInTheDocument();
    expect(screen.getByText("hip hop")).toBeInTheDocument();
  });
});
