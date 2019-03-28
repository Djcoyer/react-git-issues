const IssueReducer = (state = {
    foo:'bar'
}, action) => {
    switch(action.type) {


        default:
            return state;
    }
};

export default IssueReducer;
