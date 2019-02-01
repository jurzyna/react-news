/**
 * ACTION TYPES
 */
import {fetchAsync} from "../../helpers";
import {baseUrl, newsApiOptions} from "../../Config/newsApiConfig";

export const GET_POSTS = 'get posts';
export const GET_POSTS_ERROR = 'get posts';

/**
 * ACTION CREATORS
 */
export const getPosts = (payload) => ({type: GET_POSTS, payload});
export const getPostsError = (payload) => ({type: GET_POSTS_ERROR, payload});

/**
 * THUNKS
 */
export function getPostsThunk() {

    return dispatch => {
        fetchAsync(baseUrl, 'top-headlines', newsApiOptions)
            .then(data =>  dispatch(getPosts(data.articles)))
            .catch(reason => {
                console.log(reason);
                dispatch(getPostsError(reason))
            });

    }
}

