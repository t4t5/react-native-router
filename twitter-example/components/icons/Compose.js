'use strict';

var React = require('react-native');

var {
  StyleSheet,
  TouchableHighlight,
  Image
} = React;


var styles = StyleSheet.create({
  icon: {
    width: 21,
    height: 21,
    marginTop: 4,
    marginRight: 15
  }
});

var ComposeIcon = React.createClass({
  render() {
    return (
      <TouchableHighlight underlayColor="transparent">
        <Image source={require('image!compose_icon')} style={styles.icon} />
      </TouchableHighlight>
    )
  }
});


module.exports = ComposeIcon;
