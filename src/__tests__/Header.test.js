import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

function Header() {
  return <div>hello from the Header!</div>;
}
export default Header;

test("displays the text 'hello from the Header!'", () => {
  render(<Header />);

  expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();
});
