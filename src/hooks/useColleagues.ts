import { useEffect, useState } from 'react';
import { matchEverySearchTerm } from '../utils';
import { Colleague } from '../components/ColleagueCard';

const apiUrl = `${process.env.REACT_APP_API_URL}`;
const authorizationHeader = `${process.env.REACT_APP_API_HEADER}`;
const apiOptions = {
  method: 'GET',
  headers: {
    Authorization: authorizationHeader,
  },
};

const useColleagues = () => {
  const [colleaguesData, setColleaguesData] = useState<Colleague[]>([]);
  const [colleagues, setColleagues] = useState<Colleague[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchColleagues = async () => {
      try {
        const response = await fetch(apiUrl, apiOptions);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setColleaguesData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchColleagues();
  }, []);

  useEffect(() => {
    if (!colleaguesData.length) {
      return;
    }

    const filteredColleagues = colleaguesData.filter(
      ({ name, office = '' }) => {
        const colleagueMatchValues = `${name} ${office}`;
        const isMatch = matchEverySearchTerm(searchTerm, colleagueMatchValues);
        return isMatch;
      }
    );
    setColleagues(filteredColleagues);
  }, [searchTerm, colleaguesData]);

  return { colleagues, searchTerm, setSearchTerm };
};

export default useColleagues;
