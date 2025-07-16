import { render, screen } from '@testing-library/react';
import { CocktailDetails } from '../features/CocktailDetails';

const mockCocktail = {
  idDrink: '1',
  strDrink: 'Margarita',
  strDrinkThumb: 'https://example.com/margarita.jpg ',
  strCategory: 'Ordinary Drink',
  strAlcoholic: 'Alcoholic',
  strGlass: 'Cocktail glass',
  strInstructions: 'Rub rim of cocktail glass with lime juice...',
  strIngredient1: 'Tequila',
  strMeasure1: '1 1/2 oz',
};

test('renders cocktail details correctly', () => {
  render(<CocktailDetails cocktail={mockCocktail} />);
  expect(screen.getByText('Margarita')).toBeInTheDocument();
  expect(screen.getByText('Tequila')).toBeInTheDocument();
});
