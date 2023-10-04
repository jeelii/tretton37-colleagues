import {
  matchSearchTerm,
  separateSearchTerms,
  matchEverySearchTerm,
} from './utils';

describe('matchSearchTerm', () => {
  it('should return true for matching search term', () => {
    expect(matchSearchTerm('nom', 'Nomen Nescio')).toBe(true);
  });

  it('should return false for non-matching search term', () => {
    expect(matchSearchTerm('kai', 'Nomen Nescio')).toBe(false);
  });
});

describe('separateSearchTerms', () => {
  it('should split and clean the search term into separate terms', () => {
    const searchTerm = 'Kai Lund, 23 hej!';
    const expectedTerms = ['Kai', 'Lund', 'hej'];
    expect(separateSearchTerms(searchTerm)).toEqual(expectedTerms);
  });
});

describe('matchEverySearchTerm', () => {
  it('should return true for matching all search terms', () => {
    expect(matchEverySearchTerm('nom nes', 'Nomen Nescio')).toBe(true);
  });

  it('should ignore invalid characters and return true for matching all valid characters', () => {
    expect(matchEverySearchTerm('nom!/% nes', 'Nomen Nescio')).toBe(true);
  });

  it('should return false for not matching all search terms', () => {
    expect(matchEverySearchTerm('nom kai', 'Nomen Nescio')).toBe(false);
  });
});
