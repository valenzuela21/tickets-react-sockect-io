import { render, screen } from '@testing-library/react';
import TicketApp from './TicketApp';

test('renders learn react link', () => {
  render(<TicketApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
