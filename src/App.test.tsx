import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dinosaur explorer title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Dinosaur Explorer/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders subtitle about prehistoric creatures', () => {
  render(<App />);
  const subtitleElement = screen.getByText(/Discover the fascinating world of prehistoric creatures/i);
  expect(subtitleElement).toBeInTheDocument();
});

test('renders dinosaur emojis in title', () => {
  render(<App />);
  const emojiElement = screen.getByText(/🦕 Dinosaur Explorer 🦖/i);
  expect(emojiElement).toBeInTheDocument();
});
