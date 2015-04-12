'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;


var NavButton = React.createClass({

  onPress: function() {
    this.props.onPress();
  },

  render() {
    var backButton;

    if (this.props.backButtonComponent) {
      var BackButton = this.props.backButtonComponent;
      backButton = <View><BackButton /></View>
    } else {
      backButton = <Text style={styles.navbarText}>Back</Text>
    }

    return (
      <TouchableHighlight onPress={this.onPress} underlayColor="transparent">
        {backButton}
      </TouchableHighlight>
    )
  }
});


var styles = StyleSheet.create({
  navbarText: {
    color: 'white',
    fontSize: 16,
    margin: 10,
    fontWeight: '600',
    textAlign: 'center',
    alignItems: 'center',
  }
});


module.exports = NavButton;
