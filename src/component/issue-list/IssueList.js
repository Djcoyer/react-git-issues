import React, {Component} from 'react';
import { fetchIssues } from '../../api/IssuesApi';


class IssueList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            issues: []
        };
    }


    componentDidMount() {
        fetchIssues();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.issues && nextProps.issues !== this.state.issues) {
            this.setState({issues:nextProps.issues});
        }
    }

    render() {
        return (
            <div><p>I'm the Issue List</p></div>
        )
    }
}

