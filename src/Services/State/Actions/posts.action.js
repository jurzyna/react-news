/**
 * ACTION TYPES
 */
import {fetchAsync} from "../../helpers";
import {baseUrl, newsApiOptions} from "../../Config/newsApiConfig";

export const GET_POSTS = 'get posts';
export const GET_POSTS_ERROR = 'get posts';
export const GET_POSTS_COMMIT = 'get posts commit';

/**
 * ACTION CREATORS
 */
export const getPosts = (payload) => ({type: GET_POSTS});
export const getPostsCommit = (payload) => ({type: GET_POSTS_COMMIT, payload});
export const getPostsError = (payload) => ({type: GET_POSTS_ERROR, payload});

/**
 * THUNKS
 */
export function getPostsThunk() {

    return dispatch => {
        dispatch(getPosts());
        fetchAsync(baseUrl, 'top-headlines', newsApiOptions)
            .then(data =>  dispatch(getPostsCommit(data.articles)))
            .catch(reason => {
                dispatch(getPostsError(reason))
            });

    }
}

