import React from "react";
import Results from "./Results"

const Nonprofits = props => (
    <div>
  <div id="search-box-wrapper-wide" className="sidebar-version">
      <form target="_self" action="/nonprofits/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden"/>
        </form>
    <h2>Search for a Nonprofit</h2>
  
    <div className="search-box">
      <div className="small-label">Enter a nonprofit's name or city </div>
        <input type="text" name="q" id="q" value="" maxlength="105" className="text-input" />
 
    </div>
  
    <div>
      <div className="state label-holder">
        <label for="state">State</label>
        <select className="state-dropdown" name="state[id]" id="state_id"><option value="">Any State</option>
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
        <label for="ntee">Major nonprofit categories </label>
        <select name="ntee[id]" id="ntee_id"><option value="">Any Category</option>
  <option value="1">Arts, Culture &amp; Humanities</option>
  <option value="2">Education</option>
  <option value="3">Environment and Animals</option>
  <option value="4">Health</option>
  <option value="5">Human Services</option>
  <option value="6">International, Foreign Affairs</option>
  <option value="7">Public, Societal Benefit</option>
  <option value="8">Religion Related</option>
  <option value="9">Mutual/Membership Benefit</option>
  <option value="10">Unknown, UnclassNameified</option></select>
      </div>
</div>
  <Results />
    </div>
    </div>
  )


export default Nonprofits;
