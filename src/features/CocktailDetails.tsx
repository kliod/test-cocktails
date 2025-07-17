/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import LazyImage from '../components/LazyImage';

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  [key: string]: any;
}

export const CocktailDetails: React.FC<{ cocktail: Cocktail }> = ({
  cocktail,
}) => {
  const ingredients = Object.keys(cocktail)
    .filter((key) => key.startsWith('strIngredient') && cocktail[key])
    .map((key, index) => ({
      name: cocktail[key],
      measure: cocktail[`strMeasure${index + 1}`],
    }));

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
