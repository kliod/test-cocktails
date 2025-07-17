import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { TCocktail } from '../../../types/types';
export const cocktailApi = createApi({
  reducerPath: 'cocktailApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/',
  }),
  endpoints: (builder) => ({
    getCocktailsByCode: builder.query<TCocktail[], string>({
      query: (code) => `search.php?s=${code}`,
      transformResponse: (response: { drinks: TCocktail[] }) =>
        response.drinks || [],
    }),
  }),
});

export const { useGetCocktailsByCodeQuery } = cocktailApi;
