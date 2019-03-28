import React from 'react';
import {withRouter} from 'react-router';

const AuthorizedRoute = props => {
    console.log("AUTHORIZE");
    if(localStorage.getItem('token'))
        return props.children;
    
    props.history.push('/public');
    return null;
};


export default withRouter(AuthorizedRoute);