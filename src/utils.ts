export const matchSearchTerm = (searchTerm: string, matchString: string) => {
  return matchString.toLowerCase().includes(searchTerm.toLowerCase());
};

export const separateSearchTerms = (searchTerm: string) => {
  const filterLetters = /[^\p{L}]+/gu;
  return searchTerm
    .split(' ')
    .map((searchPart) => searchPart.replace(filterLetters, ''))
    .filter((searchPart) => searchPart !== '');
};

export const matchEverySearchTerm = (
  searchTerm: string,
  matchString: string
) => {
  const searchTerms = separateSearchTerms(searchTerm);
  return searchTerms.every((searchTerm) => {
    return matchSearchTerm(searchTerm, matchString);
  });
};
