'use strict';

var React = require('react-native');

var FindPeoplePage = require('../../pages/FindPeoplePage');

var {
  StyleSheet,
  TouchableHighlight,
  Image
} = React;


var styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 18,
    marginTop: 5,
    marginLeft: 8
  }
});

var AddPeopleIcon = React.createClass({

  goToAddPage: function() {
    this.props.toRoute({
      name: "Find people",
      component: FindPeoplePage
    });
  },

  render() {
    return (
      <TouchableHighlight underlayColor="transparent" onPress={this.goToAddPage}>
        <Image source={require('image!add_people_icon')} style={styles.icon} />
      </TouchableHighlight>
    )
  }
});


module.exports = AddPeopleIcon;
