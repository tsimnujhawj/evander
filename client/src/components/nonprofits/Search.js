import React from "react";

const Search = props => (
<div>

  <div id="search-box-wrapper-wide" className="sidebar-version">
    <form acceptCharset="UTF-8"><input name="utf8" type="hidden"/>
  <h2>Search for a Nonprofit</h2>
  
  <div className="search-box">
    <div className="small-label">Enter a nonprofit's name or city </div>
      <input type="text" name="nonProfitName" id="q" maxLength="105" className="text-input" onChange={props.handleNonprofitNameChange}/>
  </div>
  
  <div>
    <div className="state label-holder">
      <label htmlFor="state">State</label>
      <select className="state-dropdown" name="state[id]" id="state_id" onChange={props.handleNonprofitStateChange}><option value="">Any State</option>
  <option value="AL">Alabama</option>
  <option value="AK">Alaska</option>
  <option value="AR">Arkansas</option>
  <option value="AZ">Arizona</option>
  <option value="CA">California</option>
  <option value="CO">Colorado</option>
  <option value="CT">Connecticut</option>
  <option value="DE">Delaware</option>
  <option value="DC">District of Columbia</option>
  <option value="FL">Florida</option>
  <option value="GA">Georgia</option>
  <option value="HI">Hawaii</option>
  <option value="ID">Idaho</option>
  <option value="IL">Illinois</option>
  <option value="IA">Iowa</option>
  <option value="IN">Indiana</option>
  <option value="KS">Kansas</option>
  <option value="KY">Kentucky</option>
  <option value="LA">Louisiana</option>
  <option value="ME">Maine</option>
  <option value="MD">Maryland</option>
  <option value="MA">Massachusetts</option>
  <option value="MI">Michigan</option>
  <option value="MN">Minnesota</option>
  <option value="MS">Mississippi</option>
  <option value="MO">Missouri</option>
  <option value="MT">Montana</option>
  <option value="NE">Nebraska</option>
  <option value="NV">Nevada</option>
  <option value="NH">New Hampshire</option>
  <option value="NJ">New Jersey</option>
  <option value="NM">New Mexico</option>
  <option value="NY">New York</option>
  <option value="NC">North Carolina</option>
  <option value="ND">North Dakota</option>
  <option value="OH">Ohio</option>
  <option value="OK">Oklahoma</option>
  <option value="OR">Oregon</option>
  <option value="PA">Pennsylvania</option>
  <option value="RI">Rhode Island</option>
  <option value="SC">South Carolina</option>
  <option value="SD">South Dakota</option>
  <option value="TN">Tennessee</option>
  <option value="TX">Texas</option>
  <option value="UT">Utah</option>
  <option value="VT">Vermont</option>
  <option value="VA">Virginia</option>
  <option value="WA">Washington</option>
  <option value="WV">West Virginia</option>
  <option value="WI">Wisconsin</option>
  <option value="WY">Wyoming</option>
  <option value="PR">Puerto Rico</option>
  <option value="PW">Palau</option>
  <option value="ZZ">Outside U.S.</option></select>
  </div>

  <div className="ntee label-holder">
    <label htmlFor="ntee">Major nonprofit categories </label>
    <select name="ntee[id]" id="ntee_id" onChange={props.handleNonprofitCategoryChange}><option value="">Any Category</option>
    <option value="1">Animals</option>
  <option value="2">Arts, Culture &amp; Humanities</option>
  <option value="10">Community Development</option>
  <option value="3">Education</option>
  <option value="4">Environment</option>
  <option value="5">Health</option>
  <option value="8">Human and Civil Rights</option>
  <option value="6">Human Services</option>
  <option value="7">International</option>
  <option value="9">Religion</option>
  <option value="11">Research and Public Policy</option></select>
  </div>

  <div className="pageSize label-holder">
    <label htmlFor="pageSize">Search Result Length</label>
    <select name="pageSize" onChange={props.handlePageSize}>
    <option value="">Any</option>
    <option value="25">25</option>
    <option value="50">50</option>
    <option value="100">100</option>
    <option value="150">150</option>
    </select>
  </div>

</div>
<button type="submit" className="btn btn-success" onClick={props.handleFormSubmit}>Search</button>
</form>
</div>
</div>
)


export default Search;
