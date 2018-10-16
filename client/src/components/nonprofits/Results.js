import React from "react";

const Results = props => (
  <div className="container">
    <li className="list-group-item">
      <h4>
        {props.name}
      </h4>
      <h6>
        {props.city} - {props.state}
      </h6>
      Contact: <a href="#">{props.name}</a>
    </li>
  </div>
  );

export default Results;