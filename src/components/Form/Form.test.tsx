import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Form from "./Form";
import "@testing-library/jest-dom";
import { getTracksByMoodAPI } from "../../utilities/apiCalls";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
jest.mock("../../utilities/apiCalls");

describe("App", () => {
  const mockGetMoodyTunes = jest.fn();

  it("Should render all elements on the Form", () => {
    render(
      <MemoryRouter>
        <Form getMoodyTunes={mockGetMoodyTunes} />
      </MemoryRouter>
    );
    const heading = screen.getByText(
      "Generate a list of songs that fit you're mood."
    );
    const moodHeader = screen.getByText("Please select your Mood:");
    const mood1 = screen.getByText("Happy");
    const mood2 = screen.getByText("Sad");
    const mood3 = screen.getByText("Angry");
    const decadeHeader = screen.getByText("Please select a Decade:");
    const the70s = screen.getByText("70's");
    const the80s = screen.getByText("80's");
    const the90s = screen.getByText("90's");

    const happyRadio = screen.getByRole("radio", { name: /happy/i });
    const sadRadio = screen.getByRole("radio", { name: /sad/i });
    const angryRadio = screen.getByRole("radio", { name: /angry/i });
    const decade70Radio = screen.getByRole("radio", { name: /70's/i });
    const decade80Radio = screen.getByRole("radio", { name: /80's/i });
    const decade90Radio = screen.getByRole("radio", { name: /90's/i });
    const submitButton = screen.getByRole("link", { name: /get songs/i });

    expect(heading).toBeInTheDocument();
    expect(moodHeader).toBeInTheDocument();
    expect(mood1).toBeInTheDocument();
    expect(mood2).toBeInTheDocument();
    expect(mood3).toBeInTheDocument();
    expect(decadeHeader).toBeInTheDocument();
    expect(the70s).toBeInTheDocument();
    expect(the80s).toBeInTheDocument();
    expect(the90s).toBeInTheDocument();
    expect(happyRadio).toBeInTheDocument();
    expect(sadRadio).toBeInTheDocument();
    expect(angryRadio).toBeInTheDocument();
    expect(decade70Radio).toBeInTheDocument();
    expect(decade80Radio).toBeInTheDocument();
    expect(decade90Radio).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("Should make function call with correct params", () => {
    const mockGetMoodyTunes = jest.fn();

    render(
      <MemoryRouter>
        <Form getMoodyTunes={mockGetMoodyTunes} />
      </MemoryRouter>
    );

    const happyRadio = screen.getByRole("radio", { name: /happy/i });
    const decade70Radio = screen.getByRole("radio", { name: /70's/i });
    const submitButton = screen.getByRole("link", { name: /get songs/i });

    userEvent.click(happyRadio);
    userEvent.click(decade70Radio);
    userEvent.click(submitButton);

    expect(mockGetMoodyTunes).toHaveBeenCalledWith(
      "660000,950000",
      "",
      "date70"
    );
  });
});
