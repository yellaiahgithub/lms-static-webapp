import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

describe.skip("App", () => {
  it("Renders correctly", () => {
    const screen = render(<App />);
    expect(screen.container).toMatchSnapshot();
  });
});
