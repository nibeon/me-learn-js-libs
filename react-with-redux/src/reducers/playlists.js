const initialState = [
    'My home playlist',
    'My work playlist'
]

function playlist(state = initialState, action) {
    console.log(action);
    if (action.type === 'ADD_PLAYLIST') {
        return state;
    }  else if (action.type === 'DELETE_PLAYLIST') {
        return state;
    }
    return state;
}