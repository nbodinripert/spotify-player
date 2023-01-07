import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

interface CardProps {
  imgUrl?: string;
  linkTo: string;
  title: string;
  details: string;
}

const Card: FunctionComponent<CardProps> = ({
  imgUrl,
  linkTo,
  title,
  details,
}) => {
  //#region [render]
  return (
    <Link to={linkTo} className="card">
      <img src={imgUrl} alt="cardImg" />
      <p className="card-title">{title}</p>
      <p className="card-details">{details}</p>
    </Link>
  );
  //#endregion
};

export default Card;
