import React from 'react';
import LazyImage from '../../../shared/components/LazyImage';
import '../styles/CocktailDetails.scss';
import { TCocktail } from '../types';

export const CocktailDetails: React.FC<{ cocktail: TCocktail }> = ({
  cocktail,
}) => {
  // There are up to 15 ingredients and measures in the API
  const ingredients = Array.from({ length: 15 }, (_, i) => {
    const name = cocktail[`strIngredient${i + 1}` as keyof TCocktail] as
      | string
      | undefined;
    const measure = cocktail[`strMeasure${i + 1}` as keyof TCocktail] as
      | string
      | undefined;
    if (name && name.trim() !== '') {
      return { name, measure: measure || '' };
    }
    return null;
  }).filter((item): item is { name: string; measure: string } => item !== null);

  return (
    <div className="cocktail-card">
      <div className="content-container">
        <div className="text-content">
          <h2>{cocktail.strDrink}</h2>
          <p>
            <strong>Category:</strong> {cocktail.strCategory}
          </p>
          <p>
            <strong>Alcoholic:</strong> {cocktail.strAlcoholic}
          </p>
          <p>
            <strong>Glass:</strong> {cocktail.strGlass}
          </p>
          <p>
            <strong>Instruction:</strong>
            <span className="instructions">{cocktail.strInstructions}</span>
          </p>
          <ul>
            {ingredients.map((item, i) => (
              <li key={i}>
                {item.measure} {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="image-container">
          <LazyImage
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            className="cocktail-image"
          />
        </div>
      </div>
    </div>
  );
};
