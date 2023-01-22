export const usersFetching = () => {
    return {
        type: 'USERS_FETCHING'
    };
};

export const usersFetched = (users) => {
    return {
        type: 'USERS_FETCHED',
        payload: users
    };
};

export const usersFetchingError = () => {
    return {
        type: 'USERS_FETCHING_ERROR'
    };
};

export const oneUserFethcing = () => {
    return {
        type: 'ONE_USER_FETCHING'
    };
};

export const oneUserFetched = (user) => {
    return {
        type: 'ONE_USER_FETCHED',
        payload: user
    };
};

export const oneUserFethcingError = () => {
    return {
        type: 'ONE_USER_FETCHING_ERROR'
    };
};

export const followersFetching = () => {
    return {
        type: 'FOLLOWERS_FETCHING'
    };
};

export const followersFetched = (followers) => {
    return {
        type: 'FOLLOWERS_FETCHED',
        payload: followers
    };
};

export const followersFetcingError = () => {
    return {
        type: 'FOLLOWERS_FETCHING_ERROR'
    };
};

export const nextPage = (page) => {
    return {
        type: 'NEXT_PAGE',
        payload: page
    };
};

export const prevPage = (page) => {
    return {
        type: 'PREV_PAGE',
        payload: page
    };
};