import { render, screen } from '@testing-library/react';
vi.mock('../constants/cocktailCodes', () => ({
  cocktailCodes: ['Margarita', 'Mojito', 'Martini'],
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
    expect(screen.getByText('Martini')).toBeInTheDocument();
  });
});
