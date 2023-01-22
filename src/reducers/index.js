const initialState = {
    users: [],
    status: 'complete',
    oneUser: {},
    since: 0,
    perPage: 9,
    isShow: false,
    followers: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERS_FETCHING':
            return {
                ...state,
                status: 'loading'
            }
        case 'USERS_FETCHED':
            return {
                ...state,
                users: action.payload,
                status: 'complete',
                isShow: false
            }
        case 'USERS_FETCHING_ERROR':
            return {
                ...state,
                status: 'error'
            }
        case 'ONE_USER_FETCHING':
            return {
                ...state,
                status: 'loading'
            }
        case 'ONE_USER_FETCHED':
            return {
                ...state,
                oneUser: action.payload,
                status: 'complete',
                isShow: true
            }
        case 'ONE_USER_FETCHING_ERROR':
            return {
                ...state,
                status: 'error'
            }
        case 'FOLLOWERS_FETCHING':
            return {
                ...state,
                status: 'loading'
            }
        case 'FOLLOWERS_FETCHED':
            return {
                ...state,
                followers: action.payload,
                status: 'complete'
            }
        case 'FOLLOWERS_FETCHING_ERROR':
            return {
                ...state,
                status: 'error'
            }
        case 'NEXT_PAGE':
            return {
                ...state,
                since: action.payload
            }
        case 'PREV_PAGE':
            return {
                ...state,
                since: action.payload < 0 ? 0 : action.payload
            }
        default: return state
    }
};

export default reducer;