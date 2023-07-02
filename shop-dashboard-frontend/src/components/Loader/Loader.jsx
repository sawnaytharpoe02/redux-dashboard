import React from 'react';
import { DotLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="sweet-loading">
        <DotLoader
          color={'#e63946'}
          size={60}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default Loader;
