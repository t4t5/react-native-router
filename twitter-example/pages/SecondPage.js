'use strict';

var React = require('react-native');
var ThirdPage = require('./ThirdPage');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;


var RightCorner = React.createClass({
  render() {
    return (
      <View style={styles.button} />
    )
  }
});


var SecondPage = React.createClass({
  goToRoute: function() {
    this.props.toRoute({
      name: "Retweeted by",
      component: ThirdPage,
      rightCorner: RightCorner
    });
  },

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.goToRoute}>Second page!</Text>
        <RightCorner />
      </View>
    )
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: 'orange'
  }
});


module.exports = SecondPage;
