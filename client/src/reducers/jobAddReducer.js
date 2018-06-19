import jobSearchCst from '../constants/jobSearchCst'

const jobAddReducer = (state = {
    jobs: []
}, action) => {
    switch (action.type) {
        case jobSearchCst.JOB_ADD: {
            return Object.assign({}, state, {
                jobs: action.payload,
            })
        }
        default: return state
    }
}

export default jobAddReducer