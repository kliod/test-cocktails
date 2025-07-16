import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cocktailApi = createApi({
  reducerPath: 'cocktailApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/',
  }),
  endpoints: (builder) => ({
    getCocktailsByCode: builder.query<any[], string>({
      query: (code) => `search.php?s=${code}`,
      transformResponse: (response: { drinks: any[] }) => response.drinks || [],
    }),
  }),
});

export const { useGetCocktailsByCodeQuery } = cocktailApi;
