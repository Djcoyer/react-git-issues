import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IssueList from './component/issue-list/IssueList';
import IssueDetails from './component/issue-details/IssueDetails';
import AuthenticatedRoute from './route-guards/AuthenticatedRoute';
import AuthorizedRoute from './route-guards/AuthorizedRoute';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/public" exact render={() => <div>I'm the public component!</div>} />
          <AuthenticatedRoute>
            <Route path="/issues" exact component={IssueList} />
            <AuthorizedRoute requiredAccessLevel={1}>
              <Route path="/issues/:id" exact component={IssueDetails} />
            </AuthorizedRoute>
          </AuthenticatedRoute>

          <Route render={() => <div>Not Found</div>} />
        </Switch>

      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    foo: state.IssueReducer.foo
  }
};

const mapDispatchToProps = dispatch => {

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
