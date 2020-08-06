import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test('testing if inputs can take value and exist', () => {
  render(<ContactForm />)
  const firstNameInput = screen.getByLabelText(/first name/i)
  const lastNameInput = screen.getByLabelText(/last name/i)
  const emailInput = screen.getByLabelText(/email/i)
  const messageInput = screen.getByLabelText(/message/i)
  fireEvent.change(firstNameInput, {target: {value: "Hayden"}})
  fireEvent.change(lastNameInput, {target: {value: "Bender"}})
  fireEvent.change(emailInput, {target: {value: "hayden.bender@yahoo.com"}})
  fireEvent.change(messageInput, {target: {value: "Hey there bruh!"}})
  const submitButton = screen.getByRole('button', {name: /submit/i})
  fireEvent.click(submitButton)
})