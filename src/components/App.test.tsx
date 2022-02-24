import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

it('Render react row app', () => {
    render(<App />);
    const linkElement = screen.getByText(/React raw app ts/i);
    expect(linkElement).toBeInTheDocument();
});
