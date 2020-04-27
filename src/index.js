// * dependencies:
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


// * components:
import App from './App';

// * styling:
import 'bulma/css/bulma.css';
import './styles.scss';



// ! Reducer:
function reducer() {
    return {
        title: 'hello world'
    }
}

// ! Store:
const store = createStore(reducer);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , rootElement
);
