import React from "react";
import propTypes from "prop-types";

export default function DefComp(props) {
  return (
    <div>
      <p className="text-danger"> Name: {props.name} </p>
      <p className="text-success">EyeColor: {props.eyeColor}</p>
      <p className="text-primary">Age : {props.age} </p>
    </div>
  );
}

DefComp.defaultProps = {
  name: "Mukhtar",
  eyeColor: "seagreen",
  age: "100",
};

DefComp.protoType = {
  name: propTypes.string,
  eyeColor: propTypes.string,
  age: propTypes.number,
};
