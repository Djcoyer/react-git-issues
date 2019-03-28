import React, {Component} from 'react';
import {withRouter} from 'react-router';

class IssueDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }


    render() {
        return (
            <div><p>I'm the Issue {this.props.match.params.id} Details</p></div>
        )
    }
}

export default withRouter(IssueDetails);