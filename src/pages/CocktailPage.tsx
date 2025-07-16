import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorBoundary from '../components/ErrorBoundary';
import { useGetCocktailsByCodeQuery } from '../services/cocktails/api/cocktailsApiSlice';
import { CocktailDetails } from '../features/CocktailDetails';

const CocktailPage: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetCocktailsByCodeQuery(code || '');

  useEffect(() => {
    if (!isLoading && !isError && data && data.length === 0) {
      navigate('/404', { replace: true });
    }
  }, [data, isLoading, isError, navigate]);

  if (isLoading) return <LoadingIndicator />;
  if (isError) return <div>Ошибка загрузки данных</div>;

  return (
    <ErrorBoundary>
      <div className="cocktail-page">
        {data?.map((cocktail) => (
          <CocktailDetails key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </div>
    </ErrorBoundary>
  );
};

export default CocktailPage;
