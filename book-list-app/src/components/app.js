import React, {Component} from 'react';
import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import {Provider} from 'react-redux';

export default class App extends Component {
  render() {
    return (
        <div>
          <BookList/>
          <BookDetail/>
        </div>
    );
  }
}
