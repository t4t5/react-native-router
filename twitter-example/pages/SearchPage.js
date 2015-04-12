'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


var ThirdPage = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text>Search page</Text>
      </View>
    )
  }
});


module.exports = ThirdPage;
