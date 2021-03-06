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
      profiles: [],
      submitBtn: false
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
    this.setState({
      submitBtn: true
    })
    
  }

  handleChange(event) {
    this.setState({
      topicBox: event.target.value,
      submitBtn: false
    })
    console.log(this.state.submitBtn);
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (this.state.topicBox != null && this.state.submitBtn === true) {

      if (profiles === null || loading) {
        profileItems = <Spinner />;
      } else {
        if (profiles.length > 0) {
          profileItems = profiles.map(profile => (
            <ProfileItem key={profile._id} profile={profile} />
          ));
        } else {
          profileItems = <h4>No profiles found...</h4>;
        }
      }
    }

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
                    {profileItems}
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