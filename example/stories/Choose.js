import React, { Component, useState } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

class Choose extends React.Component {
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
        }}>Choose a story</Text>
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
      data: [0, 1, 2, 3, 4, 5, 6]
    };
  }

  navigate(params) {
    this.props.navigation.navigate('StoriesEmpty', params)
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        horizontal={false}
        numColumns={2}
        style={{marginTop: 20, marginBottom: 10}}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) =>
          <TouchableHighlight key={index} style={{width: '50%', alignItems: 'center'}} underlayColor="none" activeOpacity={0.85} onPress={()=>this.navigate({title: 'You Picked', text: `Story ${index + 1}`})}>
            <>
              <Image style={{width: 120, height: 120, backgroundColor: '#e4e0e0', borderRadius: 5}} source={{uri: 'https://semantic-ui.com/images/wireframe/image.png'}} />
              <Text style={styles.storiesSubTitle}>Story {index + 1}</Text>
            </>
          </TouchableHighlight>
        }
      />
    );
  }
}

const styles = {
  storiesTitle: {
    marginTop: 50,
    fontSize: 45,
    textAlign: 'center'
  },
  storiesSubTitle: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 40,
    textAlign: 'center'
  }
}

module.exports = Choose;
