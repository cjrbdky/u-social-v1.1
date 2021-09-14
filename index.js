/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
// import App from './App';
import App from './example/stories/Root';
import {name as appName} from './app.json';

class Root extends React.Component {
  render() {
    return  <App { ...this.props } />
  }
}


AppRegistry.registerComponent(appName, () => Root);
