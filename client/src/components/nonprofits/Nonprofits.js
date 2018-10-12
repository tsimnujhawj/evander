import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { nonProfits } from '../../actions/nonProfitsActions';
import Results from "./Results";

class NonProfits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      category: '',
      search: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const nonprofitData = {
      name: this.state.name,
      category: this.state.category,
      search: this.state.search,
      
    };

    this.props.nonProfits(nonprofitData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displayNonprofitInputs } = this.state;

    let nonprofitInputs;

    if (displayNonprofitInputs) {
      nonprofitInputs = (
        <div>
          <InputGroup
            placeholder="Search Non Profit Name"
            name="Name"
            icon="fab fa-twitter"
            value={this.state.name}
            onChange={this.onChange}
            error={errors.name}
          />

          <InputGroup
            placeholder="Non Profit Location"
            name="location"
            icon="fab fa-facebook"
            value={this.state.location}
            onChange={this.onChange}
            error={errors.location}
          />

          <InputGroup
            placeholder="Non Profit Category"
            name="category"
            icon="fab fa-linkedin"
            value={this.state.category}
            onChange={this.onChange}
            error={errors.category}
          />

        </div>
      );
    }

    // Select options for location
    const options = [
      { label: 'Alabama', value: 'AL' },
      { label: 'Alaska', value: 'AL' },
      { label: 'Arkansas', value: 'AL' },
      { label: 'Arizona', value: 'AL' },
      { label: 'California', value: 'AL' },
      { label: 'Colorado', value: 'AL' },
      { label: 'Connecticut', value: 'AL' },
      { label: 'Delaware', value: 'AL' },
      { label: 'District of Columbia', value: 'AL' },
      { label: 'Florida', value: 'AL' },
      { label: 'Georgia', value: 'AL' },
      { label: 'Hawaii', value: 'AL' },
      { label: 'Idaho', value: 'AL' },
      { label: 'Illinois', value: 'AL' },
      { label: 'Iowa', value: 'AL' },
      { label: 'Indiana', value: 'AL' },

      { label: 'Kansas', value: 'AL' },
      { label: 'Kentucky', value: 'AL' },
      { label: 'Louisiana', value: 'AL' },
      { label: 'Maine', value: 'AL' },
      { label: 'Maryland', value: 'AL' },
      { label: 'Massachusetts', value: 'AL' },
      { label: 'Michigan', value: 'AL' },
      { label: 'Minnesota', value: 'AL' },
      { label: 'Mississippi', value: 'AL' },
      { label: 'Missouri', value: 'AL' },
      { label: 'Montana', value: 'AL' },
      { label: 'Nebraska', value: 'AL' },
      { label: 'Nevada', value: 'AL' },
      { label: 'New Hampshire', value: 'AL' },
      { label: 'New Jersey', value: 'AL' },
      { label: 'New Mexico', value: 'AL' },

      { label: 'New York', value: 'AL' },
      { label: 'North Carolina', value: 'AL' },
      { label: 'North Dakota', value: 'AL' },
      { label: 'Ohio', value: 'AL' },

      { label: 'Oklahoma', value: 'OK' },
      { label: 'Oregon', value: 'OR' },
      { label: 'Pennsylvania', value: 'PA' },
      { label: 'Rhode Island', value: 'RI' },
      { label: 'South Carolina', value: 'SC' },
      { label: 'South Dakota', value: 'SD' },
      { label: 'Tennessee', value: 'TN' },
      { label: 'Texas', value: 'TX' },
      { label: 'Utah', value: 'UT' },
      { label: 'Vermont', value: 'VT' },
      { label: 'Virginia', value: 'VA' },
      { label: 'Washington', value: 'WA' },

      { label: 'West Virginia', value: 'WV' },
      { label: 'Wisconsin', value: 'WI' },
      { label: 'Wyoming', value: 'WY' },
      { label: 'Puerto Rico', value: 'PR' },
      { label: 'Palau', value: 'PW' },
      { label: 'Outside U.S.', value: 'ZZ' },
 
    ];

    // Select options for Category
    const options2 = [
      { label: 'Arts, Culture &amp; Humanities', value: 1 },
      { label: 'Education', value: 2 },
      { label: 'Environment and Animals', value: 3 },
      { label: 'Health', value: 4 },
      { label: 'Human Services', value: 5 },
      { label: 'International, Foreign Affairs', value: 6 },
      { label: 'Public, Societal Benefit', value: 7 },
      { label: 'Religion Related', value: 8 },
      { label: 'Mutual/Membership Benefit', value: 9 },
      { label: 'Unknown, UnclassNameified', value: 10 },
    ];

    return (
      <div className="search-nonprofits">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Find a Local Non-Profit Today.</h1>
              <p className="lead text-center">
                Enter your search criteria below.
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Search Non-Profit"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                  info=""
                />
                <SelectListGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  options={options}
                  error={errors.location}
                  info="Give us an idea of where you are interested in helping out."
                />
                <SelectListGroup
                  placeholder="Category"
                  name="category"
                  value={this.state.category}
                  onChange={this.onChange}
                  options={options2}
                  error={errors.category}
                  info="Cou"
                />

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
              <Results />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NonProfits.propTypes = {
  name: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  name: state.name,
  errors: state.errors
});

export default connect(mapStateToProps, { nonProfits })(
  withRouter(NonProfits)
);
