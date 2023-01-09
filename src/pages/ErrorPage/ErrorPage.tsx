import { FC } from 'react';
import { useRouteError } from 'react-router-dom';
import './ErrorPage.css';

type RouteError = {
  statusText?: string;
  message?: string;
};

const ErrorPage: FC = () => {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message || 'Unknown error'}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
