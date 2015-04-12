'use strict';

var React = require('react-native');

var Router = require('./Router');

var HomePage = require('./HomePage');
var BackButton = require('./BackButton');
var SearchAndCompose = require('./icons/SearchAndCompose');
var AddPeople = require('./icons/AddPeople');

var {
  AppRegistry,
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

var MyApp = React.createClass({
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


AppRegistry.registerComponent('nav', () => MyApp);
