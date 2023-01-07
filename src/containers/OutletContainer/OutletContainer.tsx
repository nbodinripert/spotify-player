import { ApolloError } from '@apollo/client';
import { FunctionComponent } from 'react';
import Loader from '../../components/Loader/Loader';
import './OutletContainer.css';

interface OutletContainerProps {
  children: JSX.Element | null;
  error?: ApolloError;
  loading: boolean;
}

const OutletContainer: FunctionComponent<OutletContainerProps> = ({
  loading,
  error,
  children,
}) => {
  //#region [render]
  return (
    <div className="outlet-container">
      {error || loading ? (
        <div className="outlet-container-center">
          {error ? (
            <div>
              Oups ! Une erreur inconnue est survenue. Veuillez recharger la
              page
            </div>
          ) : (
            <Loader />
          )}
        </div>
      ) : (
        children
      )}
    </div>
  );
  //#endregion
};

export default OutletContainer;
