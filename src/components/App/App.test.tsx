import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
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

describe("App", () => {
  it("should without crashing", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const heading = screen.getByText("Generate a list of songs that fit you're mood.")
    expect(heading).toBeInTheDocument()
  });

  it("Should show me Results after submitting the Form", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const heading = screen.getByText("Generate a list of songs that fit you're mood.")
    expect(heading).toBeInTheDocument()
  });
});
