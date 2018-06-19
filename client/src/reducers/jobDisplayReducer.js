import jobSearchCst from '../constants/jobSearchCst'

import { SERVER_CST } from '../actions/types'

const getGoodList = (list, op) => {
    let result = []
    if(op === jobSearchCst.JOB_DISPLAY_MISSED){ result = list.filter(a => a.job.status === SERVER_CST.JOB_DISPLAY_MISSED ? a : null)}    
    else if(op === jobSearchCst.JOB_DISPLAY_PENDING){ result = list.filter(a => a.job.status === SERVER_CST.JOB_DISPLAY_PENDING ? a : null)} 
    else result = Object.assign({}, list)
    return result
}

const jobDisplayReducer = (state = {
    jobs: [], // All Jobs
    jobs2Display: [], // Selected Jobs (missing, pending, most recent first, etc.)
    status: "",
    isList: true
}, action) => {
    switch (action.type) {
        case jobSearchCst.SET_DISPLAY_NOT_LIST:{
            return state.isList = false
        }
        case jobSearchCst.JOB_ADD: {
            return Object.assign({}, state, {
                jobs: action.payload,
                jobs2Display: getGoodList(action.payload, state.status),
                isList: true
            })
        }
        case jobSearchCst.JOB_UPDATE: {
            return Object.assign({}, state, {
                jobs: action.payload,
                jobs2Display: getGoodList(action.payload, state.status),
                isList: true
            })
        }
        case jobSearchCst.JOB_DISPLAY_ALL: {
            return Object.assign({}, state, {
                jobs: action.payload,
                jobs2Display: action.payload,
                status: jobSearchCst.JOB_DISPLAY_LIST,
                isList: true
            })
        }
        case jobSearchCst.JOB_DISPLAY_PENDING: {
            return Object.assign({}, state, {
                jobs2Display: state.jobs.filter(a => a.job.status === SERVER_CST.JOB_DISPLAY_PENDING ? a : null),
                status: jobSearchCst.JOB_DISPLAY_PENDING,
                isList: true
            })
        }
        case jobSearchCst.JOB_DISPLAY_MISSED: {
            return Object.assign({}, state, {
                jobs2Display: state.jobs.filter(a => a.job.status === SERVER_CST.JOB_DISPLAY_MISSED ? a : null),
                status: jobSearchCst.JOB_DISPLAY_MISSED,
                isList: true
            })
        }
        case jobSearchCst.JOB_DISPLAY_SORT_COMPANY_BY_NAME: {
            return Object.assign({}, state, {
                jobs2Display: action.payload,
                status: jobSearchCst.JOB_DISPLAY_SORT_COMPANY_BY_NAME,
                isList: true
            })
        }
        case jobSearchCst.JOB_DISPLAY_RECENT_FIRST: {
            return Object.assign({}, state, {
                jobs: action.payload,
                jobs2Display: action.payload,
                status: jobSearchCst.JOB_DISPLAY_RECENT_FIRST,
                isList: true
            })
        }
        default: return state
    }
}

export default jobDisplayReducer