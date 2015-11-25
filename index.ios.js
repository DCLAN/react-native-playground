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
  TouchableHighlight, // Warning! This is IOS only!
} = React;

var MOCKED_MOVIE_DATA = [
  {
    title: 'Star Wars: The Force Awakens',
    year: '2015',
    posters: {
      thumbnail: 'http://i.imgur.com/KE3RHWS.jpg'
    }
  },
  {
    title: 'The Room',
    year: '2003',
    posters: {
      thumbnail: 'http://www.theroommovie.com/roompics/postera.jpg'
    }
  },
];
var HelloWorld = React.createClass({
  getInitialState: function() {
    return {
      movie: 0,
    };
  },
  buttonClicked: function() {
    var movieId = this.state.movie == 0 ? 1 :0;
    this.setState({'movie': movieId});
  },
  render: function() {
    console.log(this.state.movie);
    return this.renderMovie(MOCKED_MOVIE_DATA[this.state.movie]);
  },
  renderMovie: function(movie) {
    return (
      <View style={styles.container}>
        <Text>{movie.title}</Text>
        <Text>{movie.year}</Text>
        <Image style={styles.thumbnail}
          source={{uri: movie.posters.thumbnail}}/>
        <TouchableHighlight
          style={styles.button}
          onPress={this.buttonClicked.bind(this)}>
            <Text style={styles.buttonText}>Switch Movie</Text>
        </TouchableHighlight>
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
  button: {
    backgroundColor: '#0266C8',
  },
  buttonText: {
    color: '#FFFFFF',
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
