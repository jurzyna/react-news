import {GET_POSTS, GET_POSTS_COMMIT, GET_POSTS_ERROR} from '../Actions/posts.action'

const initialState = {
    items: [],
    loading: false,
    loaded: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                loading: true
            };
        case GET_POSTS_COMMIT:
            return {
                ...state,
                loading: false,
                loaded: true,
                items: action.payload
            };
        case GET_POSTS_ERROR:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            };
        default:
            return state;
    }
}
