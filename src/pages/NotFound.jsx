import React from 'react';
import notfoundImage from '../assets/garfield-sad.gif';

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>404 - Página no encontrada</h1>
          <img
            src={notfoundImage}
            alt="Imagen de error"
            className="img-fluid mt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;

