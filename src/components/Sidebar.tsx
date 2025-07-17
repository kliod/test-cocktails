import React from 'react';
import { Link } from 'react-router-dom';
import { cocktailCodes } from '../constants/cocktailCodes';

export const Sidebar: React.FC = () => {
  const currentPath = window.location.pathname;

  return (
    <nav className="sidebar">
      <ul>
        {cocktailCodes.map((code) => {
          const isActive = `/${code}` === currentPath;
          return (
            <li key={code}>
              <Link to={`/${code}`} className={isActive ? 'active' : ''}>
                {code.charAt(0).toUpperCase() + code.slice(1)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
