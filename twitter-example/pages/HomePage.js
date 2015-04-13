'use strict';

var React = require('react-native');

var Tweet = require('../components/Tweet');
var TweetPage = require('../components/TweetBig');

var {
  StyleSheet,
  ScrollView
} = React;


var HomePage = React.createClass({

  getInitialState: function() {
    return {
      tweets: [
        {
          text: "The React Native Router is awesome!",
          user: {
            name: "Tristan Edwards",
            username: "t4t5",
            avatar: "https://pbs.twimg.com/profile_images/497658257276538880/KrPEaVDu_400x400.jpeg"
          },
        },
        {
          text: "Hello world!",
          user: {
            name: "Leonard Pauli",
            username: "LeonardPauli",
            avatar: "https://pbs.twimg.com/profile_images/436581173871927296/txEzObgk_400x400.jpeg"
          }
        }
      ]
    }
  },

  goToTweet: function(tweetData) {
    this.props.toRoute({
      name: "Tweet",
      component: TweetPage,
      data: tweetData
    });
  },

  render() {
    var Tweets = this.state.tweets.map((tweetData) => {
      return <Tweet {...tweetData} onPress={this.goToRoute} goToTweet={this.goToTweet} />;
    });

    return (
      <ScrollView style={styles.container}>
        {Tweets}
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
