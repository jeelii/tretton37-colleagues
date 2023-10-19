import { FunctionComponent } from 'react';
import './colleagueCard.css';
import { Colleague } from '../../shared/types';

type Image = Pick<Colleague, 'imageUrl'>;

const ColleagueImage: FunctionComponent<Image> = (props) => {
  const { imageUrl } = props;
  const imageBackground = `url(${imageUrl})`;
  return (
    <div className="card__image-wrapper">
      <div
        className="card__image"
        style={{ backgroundImage: imageBackground }}
      ></div>
    </div>
  );
};

export const ColleagueCard: FunctionComponent<Colleague> = (props) => {
  const { name, office, imageUrl } = props;
  return (
    <article className="card">
      <ColleagueImage imageUrl={imageUrl} />
      <div>
        <h2>{name}</h2>
        {office && <h3>Office: {office}</h3>}
      </div>
    </article>
  );
};
