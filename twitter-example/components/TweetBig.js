'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View,
} = React;

var TweetBig = React.createClass({
  render() {
    return (
      <ScrollView>
        <View style={styles.tweetContainer}>
          <View style={styles.userContainer}>
            <Image source={{uri: "https://pbs.twimg.com/profile_images/497658257276538880/KrPEaVDu_400x400.jpeg"}} style={styles.avatar} />
            <View style={styles.rightContainer}>
              <Text style={styles.name}>Tristan Edwards</Text>
              <Text style={styles.username}>@t4t5</Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>The React Native Router is awesome!</Text>
          </View>
          <View style={styles.retweetContainer}>
            <Text style={styles.rtBold}>1</Text>
            <Text style={styles.rtText}>RETWEETS</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
});

var styles = StyleSheet.create({
  retweetContainer: {
    margin: 10,
    paddingTop: 8,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#DAE6F0'
  },
  rtBold: {
    fontSize: 14,
    marginRight: 3,
    fontWeight: '600',
  },
  rtText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#748999'
  },

  tweetContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#DAE6F0',
    paddingTop: 4
  },
  avatar: {
    backgroundColor: 'gray',
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius: 4
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  textContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'column'
  },
  username: {
    fontSize: 13,
    color: '#8999a5',
    marginTop: 2
  },
  name: {
    fontWeight: '600',
    fontSize: 15
  },
  text: {
    marginTop: 5,
    fontSize: 17,
    fontWeight: '300'
  },
  rightContainer: {
    flex: 1,
    padding: 10
  }
});


module.exports = TweetBig;
