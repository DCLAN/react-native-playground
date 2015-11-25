/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} = React;

var MOCKED_MOVIE_DATA = [
  {
    title: 'Star Wars: The Force Awakens',
    year: '2015',
    posters: {
      thumbnail: 'http://i.imgur.com/KE3RHWS.jpg'
    }
  }
];

var HelloWorld = React.createClass({
  render: function() {
    var movie = MOCKED_MOVIE_DATA[0];
    return (
      <View style={styles.container}>
        <Text>{movie.title}</Text>
        <Text>{movie.year}</Text>
        <Image style={styles.thumbnail}
          source={{uri: movie.posters.thumbnail}}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
   fontSize: 20,
   textAlign: 'center',
   margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  thumbnail: {
    height: 50,
    width: 44,
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
