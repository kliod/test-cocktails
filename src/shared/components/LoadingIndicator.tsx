import React from 'react';
import '../styles/components/LoadingIndicator.scss';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="loading-indicator">
      <span>Загрузка данных...</span>
    </div>
  );
};

export default LoadingIndicator;
