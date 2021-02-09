export const staticData = [
  { id: 1, name: 'Test 1' },
  { id: 2, name: 'Test 2' },
  { id: 3, name: 'Test 3' },
  { id: 4, name: 'Test 4' },
  { id: 5, name: 'Test 5' },
  { id: 6, name: 'Test 6' },
  { id: 7, name: 'Test 7' },
  { id: 8, name: 'Test 8' },
  { id: 9, name: 'Test 9' },
  { id: 10, name: 'Test 10' },
  { id: 11, name: 'Test 11' },
  { id: 12, name: 'Test 12' },
  { id: 13, name: 'Test 13' },
  { id: 14, name: 'Test 14' },
  { id: 15, name: 'Test 15' },
  { id: 16, name: 'Test 16' },
  { id: 17, name: 'Test 17' },
  { id: 18, name: 'Test 18' },
  { id: 19, name: 'Test 19' },
  { id: 20, name: 'Test 20' },
];

export const getFilteredData = async (searchKey) => {
  return new Promise((resolve) => {
    resolve(staticData.filter((d) => d.name.toLowerCase().indexOf(searchKey) > -1));
  });
};