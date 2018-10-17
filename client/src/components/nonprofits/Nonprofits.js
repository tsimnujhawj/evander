import React, { Component } from 'react';
import '../../App.css';
import API from "../../utils/api"

import Search from "./Search"
import Results from "./Results"

class Nonprofits extends Component {
  constructor(){
    super();
    this.state = {
      nonProfitName: "",
      nonProfitState: "",
      nonProfitCategory: "",
      pageSize: "",
      nonProfitRes: []
    }
}

handleNonprofitNameChange = (event) => {
  this.setState({ nonProfitName: event.target.value });
}

handleNonprofitStateChange = (event) => {
  this.setState({ nonProfitState: event.target.value });
}

handleNonprofitCategoryChange = (event) => {
  this.setState({ nonProfitCategory: event.target.value });
}

handlePageSize = (event) => {
  this.setState({ pageSize: event.target.value });
}

  // When the search form submits, perform an api search with user input
  handleFormSubmit = (event) => {
    event.preventDefault();
    API.searchNonProfits(this.state.nonProfitName, this.state.nonProfitState, this.state.nonProfitCategory, this.state.pageSize)
      .then((res) => {
        this.setState({ nonProfitRes: res.data });
        console.log("this.state.nonProfitRes: ", this.state);
      });
  }

  renderResults = () => {
    return this.state.nonProfitRes.map(nonProfitOrg => (
      <Results
        name={nonProfitOrg.charityName}
        mission={nonProfitOrg.mission}
        url={nonProfitOrg.websiteURL}
        tagline={nonProfitOrg.tagLine}
      />
    ));
  }

  render() {
    return (
      <div>
        
        <Search
        handleNonprofitNameChange={this.handleNonprofitNameChange}
        handleNonprofitStateChange={this.handleNonprofitStateChange}
        handleNonprofitCategoryChange={this.handleNonprofitCategoryChange}
        handlePageSize={this.handlePageSize}
        handleFormSubmit={this.handleFormSubmit}
        />

        {this.renderResults()}


      </div>
      
    );
  }
}

export default Nonprofits;
