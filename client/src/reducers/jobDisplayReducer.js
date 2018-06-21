import cst from '../constants/jobSearchCst'

import { SERVER_CST } from '../actions/types'

const getGoodList = (list, op) => {
    let result = []
    if(op === cst.DISPLAY_MISSED){ result = list.filter(a => a.job.status === SERVER_CST.DISPLAY_MISSED ? a : null)}    
    else if(op === cst.DISPLAY_PENDING){ result = list.filter(a => a.job.status === SERVER_CST.DISPLAY_PENDING ? a : null)} 
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
        case cst.ADD : {
            return Object.assign({}, state, {
                jobs: action.payload, // All Jobs
            })
        }
        case cst.GET_ALL : {
            return Object.assign({}, state, {
                jobs: action.payload, // All Jobs
            })
        }
        case cst.DISPLAY_ALL : {
            return Object.assign({}, state, {
                jobs2Display: state.jobs,
                status: action.type,
                isList: true
            })
        }
        case cst.DISPLAY_PENDING : {
            return Object.assign({}, state, {
                jobs2Display: state.jobs.filter(a => a.job.status === cst.DISPLAY_PENDING ? a : null),
                status: action.type,
                isList: true
            })
        }
        case cst.DISPLAY_MISSED : {
            return Object.assign({}, state, {
                jobs2Display: state.jobs.filter(a => a.job.status === cst.DISPLAY_MISSED ? a : null),
                status: action.type,
                isList: true
            })
        }
        case cst.DISPLAY_BY_COMPANY_NAME : {
            return Object.assign({}, state, {
                jobs2Display: action.payload,
                status: action.type,
                isList: true
            })
        }
        case cst.DISPLAY_RECENT_FIRST : {
            return Object.assign({}, state, {
                jobs2Display: action.payload,
                status: action.type,
                isList: true
            })
        }
        case cst.SET_DISPLAY_ONE_JOB : {
            return Object.assign({}, state, {
                jobs2Display: state.jobs.filter(a => a.job.id === action.payload ? a : null),
                isList: false
            })
        }
        case cst.SET_UPDATE_SUCCESS : {
            return Object.assign({}, state, {
                jobs: action.payload,
                jobs2Display: getGoodList(state.jobs, state.status),
            })
        }
        case cst.SET_DISPLAY_AS_LIST : {
            return Object.assign({}, state, {
                isList: true
            })
        }
        case cst.SET_DISPLAY : {
            return Object.assign({}, state, {
                jobs: action.payload,
            })
        }
        default: return state
    }
}

export default jobDisplayReducer