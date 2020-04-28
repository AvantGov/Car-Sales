// * action types: 
import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/index'



const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export default (state = initialState, action) => {
  console.log('reducer overall:', state, action)
  switch(action.type){
    case ADD_FEATURE:
      console.log('add feature ran')
      return {
        ...state,
        car: {
          ...state.car,
          features: [ ...state.car.features, action.payload]
        }
        
      };
    case REMOVE_FEATURE:
      console.log('remove item ran')
      return {
        ...state
      }
    default:
      return state;
  }
}