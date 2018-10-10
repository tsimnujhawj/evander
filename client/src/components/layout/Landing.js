import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center maintitle">
                <h1 className="display-3 mb-4">Tech That Cares</h1>
                <div className="lead">
                <p >
                  {' '}
                  Connecting Developers to Non-Profits and Non-Profits to Developers.
                </p>
                <p>
                  Creating a Community to Solve Tech Issues.
                </p>
                </div>
                <hr />
                <label className="searchskills"> 
                  Search for Skill:
                </label>
                <input className="searchskillsentry" type="text" name="name" />
                <button type="button" className="btn-size btn btn-success">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);