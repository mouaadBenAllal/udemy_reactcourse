import React from "react";
import "./Person.css";

const person = props => (
  <div className="Person">
    <p onClick={props.click}>
      Im a {props.name} and i'm {props.age}
    </p>
    <input type="text" onChange={props.changed} defaultValue={props.name} />
  </div>
);

export default person;
