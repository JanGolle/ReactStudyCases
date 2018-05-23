import React, {Component} from 'react';
import BookList from '../containers/BookList';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import {Provider} from 'react-redux';

export default class App extends Component {
  render() {
    return (
        <div>
          <BookList/>
        </div>
    );
  }
}
