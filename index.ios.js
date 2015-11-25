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

var HelloWorld = React.createClass({
  render: function() {
    var I_HAVE_NO_IDEA_WHAT_IM_DOING = "https://www.rover.com/blog/wp-content/uploads/2014/10/bailey-computer1.png";
    return (
      <View style={styles.container}>
        <Image style={styles.image}
          source={{uri: I_HAVE_NO_IDEA_WHAT_IM_DOING }}/>
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
  image: {
    height: 300,
    width: 420,
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
