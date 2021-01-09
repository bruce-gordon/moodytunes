import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Result from "./Result";

describe("Result", () => {
  it("displays correct information in the Result", () => {
    const mockAddFavorite = jest.fn();
    render(
      <Result
        key='123'  
        id='1'
        artist='some artist'
        title='some title'
        releaseDate='1983'
        genre='hip hop'
        addFavorite={mockAddFavorite}
      />
    );
    expect(screen.getByText("some artist")).toBeInTheDocument();
    expect(screen.getByText("some title")).toBeInTheDocument();
    expect(screen.getByText("1983")).toBeInTheDocument();
    expect(screen.getByText("hip hop")).toBeInTheDocument();
  });
  
  it("call addFavorite() with correct params", () => {
    const mockAddFavorite = jest.fn();
    render(
      <Result
        key='123'  
        id='1'
        artist='some artist'
        title='some title'
        releaseDate='1983'
        genre='hip hop'
        addFavorite={mockAddFavorite}
      />
    );
    const favButton = screen.getByRole('button', { name: /⭐/i })
    userEvent.click(favButton);
    expect(mockAddFavorite).toHaveBeenCalledWith('1');
  });
});
