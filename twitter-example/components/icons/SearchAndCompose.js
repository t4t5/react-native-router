'use strict';

var React = require('react-native');

var SearchIcon = require('./Search');
var ComposeIcon = require('./Compose');

var SearchPage = require('../../pages/SearchPage');

var {
  StyleSheet,
  View,
  TextInput
} = React;


var styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 21,
    height: 21,
    marginTop: 4,
    marginRight: 15
  },
  input: {
    backgroundColor: '#3f88bf',
    width: 220,
    height: 32,
    marginTop: 6,
    paddingLeft: 10,
    color: 'white',
    borderRadius: 4
  }
});


var SearchBar = React.createClass({
  render() {
    return (
      <TextInput style={styles.input} placeholder="Search Twitter" />
    )
  }
});


var SearchAndCompose = React.createClass({

  goToSearch: function() {
    this.props.toRoute({
      name: "Search",
      component: SearchPage,
      rightCorner: ComposeIcon,
      titleComponent: SearchBar
    })
  },

  render() {
    return (
      <View style={styles.iconContainer}>
        <SearchIcon goToSearch={this.goToSearch} />
        <ComposeIcon />
      </View>
    )
  }
}); 


module.exports = SearchAndCompose;
