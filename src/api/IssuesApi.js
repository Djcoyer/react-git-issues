import axios from 'axios';
import { fetchingIssues, fetchIssuesSuccess, fetchIssuesFailed } from '../actions/IssuesActions';


const fetchIssues = () => {
    let url = "";

    return dispatch => {
        dispatch(fetchingIssues());
        axios.get(url, {headers: {"Content-Type":"application/json", "Accept":"application/json"}})
        .then(res => {
            dispatch(fetchIssuesSuccess(res.data));
        }).catch(err => {
            dispatch(fetchIssuesFailed(err));
        });
    }
};

export {
    fetchIssues
};