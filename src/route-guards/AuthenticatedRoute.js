import React from 'react';
import {withRouter} from 'react-router';

const AuthenticatedRoute = props => {
    console.log("AUTHENTICATE");
    if(localStorage.getItem('token'))
        return props.children;
    
    props.history.push('/public');
    return null;
};


export default withRouter(AuthenticatedRoute);