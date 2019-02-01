import { GET_POSTS } from '../Actions/posts.action'

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
        default:
            return state;
    }
}
