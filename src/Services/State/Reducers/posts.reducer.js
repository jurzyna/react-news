import {GET_POSTS, GET_POSTS_ERROR} from '../Actions/posts.action'

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                loading: false,
                items: action.payload
            };
        case GET_POSTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}
