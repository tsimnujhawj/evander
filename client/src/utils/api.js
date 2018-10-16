import axios from "axios";

const API = {
    // Query nonprofit API
    searchNonProfits: function(nonProfitName, nonProfitState, nonProfitCategory) {
      const queryURL = `https://projects.propublica.org/nonprofits/api/v2/search.json?q=${nonProfitName}&state%5Bid%5D=${nonProfitState}&ntee%5Bid%5D=${nonProfitCategory}`;
      return axios.get(queryURL);
    }
  };
  
  export default API;