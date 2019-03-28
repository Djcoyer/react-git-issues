import { FETCH_ISSUES_SUCCCESS } from "../actions/IssuesActions";

const IssueReducer = (state = {
    issues: [],
    error: {},
    isLoading: false
}, action) => {
    switch(action.type) {

        case  FETCH_ISSUES_SUCCCESS: {
            return {...state, issues:[...action.payload]};
        }

        default:
            return state;
    }
};

export default IssueReducer;
