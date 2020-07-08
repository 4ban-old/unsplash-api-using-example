import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the header", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Saver/i);
  expect(linkElement).toBeInTheDocument();
});
