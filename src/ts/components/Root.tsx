import * as React from 'react';
import App from './App';
import {
  Provider
} from 'react-redux';
import {
  Store
} from 'redux'
import {
  IStoreState
} from '../utils/Interfaces';

interface IProps {
  store: Store<IStoreState>
}

interface IState {

}
export default class Root extends React.Component<IProps, IState> {
  render() {
    const {store} = this.props;
    return (
      // If we need to use React router, it should be nested inside `Provider`
      // in here:
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}
