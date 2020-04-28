import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';



const AdditionalFeatures = props => {
  
  console.log('features props:',props)
  
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};



// ! need mapstatetoprops

const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures
  };
}


// !  need actions 

export default connect(mapStateToProps, {})(AdditionalFeatures);
