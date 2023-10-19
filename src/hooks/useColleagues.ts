import { useEffect, useState } from 'react';
import { matchEverySearchTerm } from '../shared/utils';
import { Colleague, ColleagueRaw } from '../shared/types';

const apiUrl = `${process.env.REACT_APP_API_URL}`;
const authorizationHeader = `${process.env.REACT_APP_API_HEADER}`;
const apiOptions = {
  method: 'GET',
  headers: {
    Authorization: authorizationHeader,
  },
};

const transformColleagueData = (colleagues: ColleagueRaw[]): Colleague[] => {
  return colleagues.map(
    ({ name, office, imagePortraitUrl, imageWallOfLeetUrl }) => {
      const imageUrl = imageWallOfLeetUrl
        ? imageWallOfLeetUrl
        : imagePortraitUrl || '';
      return { name, office, imageUrl: imageUrl };
    }
  );
};

const useColleagues = () => {
  const [colleaguesData, setColleaguesData] = useState<Colleague[]>([]);
  const [colleagues, setColleagues] = useState<Colleague[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState<String | null>(null)

  useEffect(() => {
    const fetchColleagues = async () => {
      try {
        setNotification('Loading...')
        const response = await fetch(apiUrl, apiOptions);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();

        const transformedColleagues = transformColleagueData(jsonData);

        setNotification(null)
        setColleaguesData(transformedColleagues);
      } catch (error) {
        setNotification('Could not fetch colleagues :(')
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

  return { colleagues, notification, searchTerm, setSearchTerm };
};

export default useColleagues;
