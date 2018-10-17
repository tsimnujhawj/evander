import axios from "axios";

const API = {
    // Query nonprofit API
    searchNonProfits: function(nonProfitName, nonProfitState, nonProfitCategory, pageSize) {
      const queryURL = `https://api.data.charitynavigator.org/v2/Organizations?app_id=625abd8a&app_key=ba146d702594ad52f1454686f5b55c08&search=${nonProfitName}&categoryID=${nonProfitCategory}&state=${nonProfitState}&pageSize=${pageSize}`;
      return axios.get(queryURL);
    }
  };
  
  export default API;