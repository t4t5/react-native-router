'use strict';

var React = require('react-native');

var Router = require('../index');

var HomePage = require('./pages/HomePage');
var BackButton = require('./components/BackButton');
var SearchAndCompose = require('./components/icons/SearchAndCompose');
var AddPeople = require('./components/icons/AddPeople');

var {
  StyleSheet,
  View,
} = React;

var styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec'
  }
});



var firstRoute = {
  name: 'Home',
  component: HomePage,
  leftCorner: AddPeople
};

var TwitterApp = React.createClass({
  render() {
    return (
      <Router 
        firstRoute={firstRoute} 
        headerStyle={styles.header}
        backButtonComponent={BackButton}
        rightCorner={SearchAndCompose}
      />
    )
  }
});


module.exports = TwitterApp;
