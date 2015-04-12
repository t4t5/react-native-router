'use strict';

var React = require('react-native');

var Tweet = require('../components/Tweet');
var TweetPage = require('../components/TweetBig');

var {
  StyleSheet,
  ScrollView
} = React;


var HomePage = React.createClass({
  goToRoute: function() {
    this.props.toRoute({
      name: "Tweet",
      component: TweetPage,
    });
  },

  render() {
    return (
      <ScrollView style={styles.container}>
        <Tweet onPress={this.goToRoute}/>
      </ScrollView>
    )
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f8fa'
  }
});


module.exports = HomePage;
