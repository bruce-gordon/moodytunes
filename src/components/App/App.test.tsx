import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import { getTracksByMoodAPI } from "../../utilities/apiCalls";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
jest.mock("../../utilities/apiCalls");
import {fakeSearchResults, testSong, testDuplicateSong} from '../common/testData'

describe("App", () => {
  it("should have a home page", () => {
    render(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App />
      </MemoryRouter>
    );
    const navHome = screen.getByRole('link', { name: /home/i })
    const navFav = screen.getByRole('link', { name: /favorites/i })
    const heading = screen.getByRole('heading', { name: /moodytunes/i })
    const prompt = screen.getByRole('heading', { name: /generate a list of songs that fit your mood\./i })
    expect(prompt).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(navHome).toBeInTheDocument()
    expect(navFav).toBeInTheDocument()
  });

  it("Should have a favorites page", () => {
    render(
      <MemoryRouter initialEntries={[ '/favorites' ]} >
        <App />
      </MemoryRouter>
    );
    
    const favHeading = screen.getByRole('link', { name: /favorites/i })
    expect(favHeading).toBeInTheDocument()
  });

  it("Should navigate home when clicking 'home' ", () => {
    render(
      <MemoryRouter initialEntries={[ '/favorites' ]} >
        <App />
      </MemoryRouter>
    );
    
    const navHome = screen.getByRole('link', { name: /home/i })
    userEvent.click(navHome)

    const prompt = screen.getByRole('heading', { name: /generate a list of songs that fit your mood\./i })
    expect(prompt).toBeInTheDocument()
  });

  it("Should navigate to favorites when clicking 'Go To Favorites' ", () => {
    render(
      <MemoryRouter initialEntries={[ '/' ]} >
        <App />
      </MemoryRouter>
    );
    
    const navFav = screen.getByRole('link', { name: /favorites/i })
    userEvent.click(navFav)

    const favHeading = screen.getByRole('heading', { name: /favorites view/i })
    expect(favHeading).toBeInTheDocument()
  });
});
