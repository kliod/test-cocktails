import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingIndicator from '../shared/components/LoadingIndicator';
import ErrorBoundary from '../shared/components/ErrorBoundary';
import { CocktailDetails } from '../features/cocktails/components/CocktailDetails';
import { TCocktail } from '../features/cocktails/types';
import { useGetCocktailsByCodeQuery } from '../features/cocktails/hooks';

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
        {data?.map((cocktail: TCocktail) => (
          <CocktailDetails key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </div>
    </ErrorBoundary>
  );
};

export default CocktailPage;
