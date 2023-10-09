import { FunctionComponent } from 'react';
import { ColleagueCard } from '../ColleagueCard';
import './colleagueOverview.css';
import { Colleague } from '../../types';

type Props = {
  colleagues: Colleague[];
};

export const ColleagueOverview: FunctionComponent<Props> = (props) => {
  const { colleagues } = props;

  return (
    <section className="colleague__overview">
      {colleagues.map((colleague, index) => {
        return <ColleagueCard {...colleague} key={index} />;
      })}
    </section>
  );
};
