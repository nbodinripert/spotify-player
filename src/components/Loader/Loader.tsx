import { FC } from 'react';
import { Audio } from 'react-loader-spinner';
import './Loader.css';

const Loader: FC = () => {
  //#region [render]
  return (
    <Audio ariaLabel="loading" wrapperClass="audio-loader" color="#D2C6E0" />
  );
  //#endregion
};

export default Loader;
