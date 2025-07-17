import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Sidebar } from './shared/components/Sidebar';
import CocktailPage from './pages/CocktailPage';
import NotFoundPage from './pages/NotFoundPage';
import { cocktailCodes } from './features/cocktails/constants/cocktailCodes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route
                path="/"
                element={<Navigate to={`/${cocktailCodes[0]}`} replace />}
              />

              <Route path="/:code" element={<CocktailPage />} />

              <Route path="/404" element={<NotFoundPage />} />

              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
