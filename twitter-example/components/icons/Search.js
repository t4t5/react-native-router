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

var SearchIcon = React.createClass({

  goToSearch: function() {
    this.props.goToSearch();
  },

  render() {
    return (
      <TouchableHighlight underlayColor="transparent" onPress={this.goToSearch}>
        <Image source={require('image!search_icon')} style={styles.icon} />
      </TouchableHighlight>
    )
  }
});


module.exports = SearchIcon;
