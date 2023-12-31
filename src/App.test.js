import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("can receive a new user and show it on a list", async () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });
  const button = screen.getByRole("button");

  console.log(nameInput);

  user.click(nameInput);
  user.keyboard("anto");
  user.click(emailInput);
  user.keyboard("anto@gmail.com");

  user.click(button);

  await waitFor(() => {
    const name = screen.getByRole("cell", { name: "anto" });
    const email = screen.getByRole("cell", { name: "anto@gmail.com" });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
