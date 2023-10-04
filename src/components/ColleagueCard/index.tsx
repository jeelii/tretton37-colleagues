import { FunctionComponent } from 'react';
import './colleagueCard.css';

export type Colleague = {
  name: string;
  email: string;
  phoneNumber: string | null;
  office: string | null;
  manager: string | null;
  orgUnit: string | null;
  mainText: string | null;
  gitHub: string | null;
  twitter: string | null;
  stackOverflow: string | null;
  linkedIn: string | null;
  imagePortraitUrl: string | null;
  imageWallOfLeetUrl: string | null | undefined;
  highlighted: boolean;
  published: boolean;
  primaryRole: string | null;
  secondaryRole: string | null;
  area: string | null;
};

type Image = {
  imageUrl: string | null | undefined;
};

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
  const { name, office, imagePortraitUrl, imageWallOfLeetUrl } = props;
  const imageUrl = imageWallOfLeetUrl ? imageWallOfLeetUrl : imagePortraitUrl;
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
