// * dependencies:
import React from 'react';
import { connect } from 'react-redux'
import { removeFeature } from '../actions/index'


const AddedFeature = props => {
  
  const removeFeature = event => {
    event.preventDefault();
    props.removeFeature(props.feature)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
        className="button"
        onClick={removeFeature}
      >X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
