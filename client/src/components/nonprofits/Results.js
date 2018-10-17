import React from "react";

const Results = props => (
  <div className="container">
    <li className="list-group-item">
    <div className="org-header">
      <h4 id="org-name">
        {props.name}
      </h4>
      <h5>
        {props.tagline}
      </h5>
    </div>
      <h6>
        {props.mission}
      </h6>
      <br></br>
      Website: <a href={props.url}>{props.url}</a>
      <button type="button" className="btn btn-info" id="find-job-btn">Find Jobs</button>
      {/* {props.address} */}
    </li>
  </div>
  );

export default Results;