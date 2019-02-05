/**
 * ACTION TYPES
 */
import {fetchAsync} from "../../helpers";
import {baseUrl, newsApiOptions} from "../../Config/newsApiConfig";
import uuid from "uuid/v4";

export const GET_POSTS = 'get posts';
export const GET_POSTS_ERROR = 'get posts';
export const GET_POSTS_COMMIT = 'get posts commit';

/**
 * ACTION CREATORS
 */
export const getPosts = () => ({type: GET_POSTS});
export const getPostsCommit = (payload) => ({type: GET_POSTS_COMMIT, payload});
export const getPostsError = (payload) => ({type: GET_POSTS_ERROR, payload});

/**
 * THUNKS
 */
export function getPostsThunk() {

    return dispatch => {
        dispatch(getPosts());
        fetchAsync(baseUrl, 'top-headlines', newsApiOptions)
            .then(data =>  {
                // adding uuid to each item
                const dataWithUuid = data.articles.map(item => {
                    item.uuid = uuid();
                    return item;
                });
                dispatch(getPostsCommit(dataWithUuid));
                // save in local storage for offline use
                localStorage.setItem('posts', JSON.stringify(data.articles))
            })
            .catch(reason => {
                dispatch(getPostsError(reason));
                const dataCopy =  localStorage.getItem('posts');
                // read from storage when app is offline or error occurs
                if (dataCopy){
                    dispatch(getPostsCommit(JSON.parse(dataCopy)));
                }

            });

    }
}

