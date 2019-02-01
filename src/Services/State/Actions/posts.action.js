
/**
 * ACTION TYPES
 */
export const GET_POSTS = 'get posts';

/**
 * ACTION CREATORS
 */
export const getPortfolio = (payload) => ({type: GET_POSTS, payload});

/**
 * THUNKS
 */
export function getPostsThunk() {
    return dispatch => {
        const items = [];

        /// export const portfolioRef = databaseRef.child("portfolio");
        // base.ref('/portfolio/entities')
        //     .once('value', snap => {
        //         snap.forEach(data => {
        //             items.push(data.val())
        //         })
        //     })
        //     .then(() => dispatch(getPortfolio(items)))
    }
}

