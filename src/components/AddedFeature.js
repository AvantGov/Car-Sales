// * dependencies:
import React from 'react';
import { connect } from 'react-redux'


const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

// ! need to add mapstatetoprops
// ! need to add actions

export default connect(null, {})(AddedFeature);
