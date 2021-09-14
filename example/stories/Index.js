import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';

class Index extends React.Component {
  static navigationOptions ({ navigation }) {
    const { params } = navigation.state;
    return {
      header: null,
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      },
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  navigate(params) {
    this.props.navigation.navigate('StoriesEmpty', params)
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
          <Text style={styles.storiesTitle}>Bedtime Stories</Text>
          <Text style={styles.storiesSubTitle}></Text>
          <TouchableHighlight underlayColor="none" style={{backgroundColor: '#000', padding: 8, borderRadius: 5, width: 120}} activeOpacity={0.85} onPress={() => this.setState({loading: false})}>
            <Text style={[styles.storiesSubTitle, {color: '#FFF', marginBottom: 0, marginTop: 0}]}>Welcome</Text>
          </TouchableHighlight>
        </View>
      );
    } else {
      return (
        <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
          <View>
            <Text style={styles.storiesTitle}>Bedtime Stories</Text>
            <Text style={styles.storiesSubTitle}>for Sleepy Girls</Text>
          </View>
          <View style={styles.storiesRows}>
            <View style={styles.storiesRow}>
              <TouchableHighlight underlayColor="none" activeOpacity={0.85} onPress={()=>this.props.navigation.navigate('StoriesChoose')}>
                <>
                  <Image style={{width: 120, height: 120, backgroundColor: '#e4e0e0', borderRadius: 5}} source={{uri: 'https://semantic-ui.com/images/wireframe/image.png'}} />
                  <Text style={styles.storiesSubTitle}>Choose story</Text>
                </>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="none" activeOpacity={0.85} onPress={()=>this.navigate({title: 'Surprise', text: `Story ${Math.ceil(Math.random() * 10)}`})}>
                <>
                  <Image style={{width: 120, height: 120, backgroundColor: '#e4e0e0', borderRadius: 5}} source={{uri: 'https://semantic-ui.com/images/wireframe/image.png'}} />
                  <Text style={styles.storiesSubTitle}>Surprise</Text>
                </>
              </TouchableHighlight>
            </View>
            <View style={styles.storiesRow}>
              <TouchableHighlight underlayColor="none" activeOpacity={0.85} onPress={()=>this.navigate({title: 'Tutorial', text: `Empty`})}>
                <>
                  <Image style={{width: 120, height: 120, backgroundColor: '#e4e0e0', borderRadius: 5}} source={{uri: 'https://semantic-ui.com/images/wireframe/image.png'}} />
                  <Text style={styles.storiesSubTitle}>Tutorial</Text>
                </>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="none" activeOpacity={0.85} onPress={()=>this.navigate({title: 'For Mum or dad', text: `Empty`})}>
                <>
                  <Image style={{width: 120, height: 120, backgroundColor: '#e4e0e0', borderRadius: 5}} source={{uri: 'https://semantic-ui.com/images/wireframe/image.png'}} />
                  <Text style={[styles.storiesSubTitle, {width: 120}]}>For Mum or dad</Text>
                </>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      );
    }
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
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  storiesRows: {
    width: '80%'
  },
  storiesRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
}

module.exports = Index;
