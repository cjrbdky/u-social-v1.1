import React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  Alert,
  FlatList,
  StatusBar,
  TouchableHighlight,
  TextInput,
  Dimensions,
  ScrollView,
  AsyncStorage
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator, CardStyleInterpolators } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { CardStackStyleInterpolator } from 'react-navigation-stack/src/vendor/index'

// example
import Stories from './Index';
import StoriesChoose from './Choose';
import StoriesEmpty from './Empty';

const App = createStackNavigator({
  Stories: { screen: Stories },
  StoriesChoose: { screen: StoriesChoose },
  StoriesEmpty: { screen: StoriesEmpty }
}, {
  mode: 'card',
  defaultNavigationOptions: {
    headerStyle: {
      elevation: 0, // 移除 Android Header 阴影
      shadowOpacity: 0, // 移除 iOS Header 阴影
    }
  },
})

const Root = createStackNavigator(
  {
    App: {
      screen: App,
      navigationOptions: {
        header: null,
        headerBackTitleVisible: false,
        headerStyle: {
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0
        }
      }
    }
  }, {
    mode: 'card',
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0, // 移除 Android Header 阴影
        shadowOpacity: 0, // 移除 iOS Header 阴影
      }
    },
  }
);

export default createAppContainer(Root)
// export default Root;
