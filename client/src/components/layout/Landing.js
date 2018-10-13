import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import ProfileItem from '../profiles/ProfileItem';
import { getProfileBySkill } from '../../actions/profileActions';
import Spinner from '../common/Spinner';

class Landing extends Component {

  constructor() {
    super();
    this.state = {
      topicBox: null,
      profiles: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  handleSubmit() {
    this.props.getProfileBySkill(this.state.topicBox)
  }

  handleChange(event) {
    this.setState({
      topicBox: event.target.value
    })
  }

  render() {
    console.log(this.state)
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
                <input className="searchskillsentry" type="text" name="name" onChange={this.handleChange}/>
                <button type="button" className="btn-size btn btn-success" onClick={this.handleSubmit}>Submit</button>
                <div className = "profileSkills">
                    {this.state.profile ? this.state.profile.map(result => {
                      return <div key={result._id}>{result.skill}</div>
                    
                    }) : ''}
                </div>
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
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getProfileBySkill })(Landing);