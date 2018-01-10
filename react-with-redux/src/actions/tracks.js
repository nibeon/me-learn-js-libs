var mockApiData = [
    {
        id: 1,
        name: 'Enter sandman'
    },
    {
        id: 2,
        name: 'Welcome Home'
    },
    {
        id: 3,
        name: 'Master of Puppets'
    },
    {
        id: 4,
        name: 'Fde to Black'
    },
];

export const getTracks = () => dispatch => {
  setTimeout(() => {
    console.log('I got tracks');
    dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData })
  }, 2000);
}