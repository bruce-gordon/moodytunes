import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Favorite from "./Favorite";

describe("Favorite", () => {
  it("displays correct information in the Favorite", () => {
    const mockRemoveFavorite = jest.fn();
    render(
      <Favorite
        key="123"
        id="1"
        artist="some artist"
        title="some title"
        releaseDate="1983"
        genre="hip hop"
        removeFavorite={mockRemoveFavorite}
      />
    );
    const artist = screen.getByText("some artist");
    const title = screen.getByText("some title");
    const releaseDate = screen.getByText("1983");
    const genre = screen.getByText("hip hop");
    const removeBtn = screen.getByRole("button", { name: /remove/i });

    expect(artist).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(releaseDate).toBeInTheDocument();
    expect(genre).toBeInTheDocument();
    expect(removeBtn).toBeInTheDocument();
  });

  it("call removeFavorite() with correct params", () => {
    const mockRemoveFavorite = jest.fn();
    render(
      <Favorite
        key="123"
        id="1"
        artist="some artist"
        title="some title"
        releaseDate="1983"
        genre="hip hop"
        removeFavorite={mockRemoveFavorite}
      />
    );
    const removeBtn = screen.getByRole("button", { name: /remove/i });
    expect(removeBtn).toBeInTheDocument();
    userEvent.click(removeBtn);
    expect(mockRemoveFavorite).toHaveBeenCalledWith('1');
  });
});
