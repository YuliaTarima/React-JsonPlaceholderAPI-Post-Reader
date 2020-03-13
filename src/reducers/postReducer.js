import {FETCH_POSTS, NEW_POST} from '../actions/types';

const initialState = {
    items: [],//post coming from fetch action
    item: {}//single post we add after get the response back
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            // console.log('fectching in postReducer');
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            //console.log('newPost in postReducer');
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}