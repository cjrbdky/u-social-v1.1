import React, { Component, useState } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableHighlight,
} from 'react-native';

class Index extends React.Component {
  static navigationOptions ({ navigation }) {
    const { params } = navigation.state;
    return {
      headerTitle: (
        <Text allowFontScaling={false} numberOfLines={1} style={{
          fontSize: 17,
          fontWeight: '600',
          color: 'rgba(0, 0, 0, .9)',
          textAlign: 'center',
          marginHorizontal: 0
        }}>{params.title || ''}</Text>
      ),
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      },
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      params: this.props.navigation.state.params
    };
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
        <Text>{this.state.params.text}</Text>
      </View>
    );
  }
}

const styles = {
}

module.exports = Index;
