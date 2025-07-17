import { render, screen } from '@testing-library/react';
vi.mock('../constants/cocktailCodes', () => ({
  cocktailCodes: ['margarita', 'mojito', 'a1', 'kir'],
}));
import { Sidebar } from '../shared/components/Sidebar';
import { MemoryRouter } from 'react-router-dom';

describe('Sidebar', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders links for all cocktail codes', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(screen.getByText('Margarita')).toBeInTheDocument();
    expect(screen.getByText('Mojito')).toBeInTheDocument();
    expect(screen.getByText('A1')).toBeInTheDocument();
    expect(screen.getByText('Kir')).toBeInTheDocument();
  });
});
