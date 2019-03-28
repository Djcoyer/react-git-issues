const FETCHING_ISSUES = "FETCHING_ISSUES";
const FETCH_ISSUES_SUCCESS = "FETCH_ISSUES_SUCCCESS";
const FETCH_ISSUES_FAILED = "FETCH_ISSUES_FAILED";

const fetchingIssues = () => {
    return {
        type: FETCHING_ISSUES
    };
}


const fetchIssuesSuccess = (issues) => {
    return {
        type:FETCH_ISSUES_SUCCESS,
        payload:issues
    }
}

const fetchIssuesFailed = (err) => {
    return {
        type: FETCH_ISSUES_FAILED,
        payload: err
    }
};


export {
    fetchIssuesFailed,
    fetchIssuesSuccess,
    fetchingIssues,
    FETCHING_ISSUES,
    FETCH_ISSUES_FAILED,
    FETCH_ISSUES_SUCCCESS
};