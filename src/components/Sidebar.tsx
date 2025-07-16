import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import { cocktailCodes } from '../constants/cocktailCodes';

export const Sidebar: React.FC = () => {
  return (
    <nav className="sidebar">
      <ul>
        {cocktailCodes.map((code) => {
          const isActive = useMatch(`/${code}`);
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
