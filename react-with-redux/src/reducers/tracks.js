const initialState = [];

export default function playlist(state = initialState, action) {
    console.log(action);
    if(action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'FETCH_TRACKS_SUCCESS') {
        return action.payload;
    }  
    return state;
}