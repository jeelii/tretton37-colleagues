import { employeesResponse } from '../../mocks/emplyees';
import { ColleagueCard } from '../ColleagueCard';
import './colleagueOverview.css';

export const ColleagueOverview = () => {
  return (
    <section className="colleague__overview">
      {employeesResponse.map((employee, index) => {
        return <ColleagueCard {...employee} key={index} />;
      })}
    </section>
  );
};
