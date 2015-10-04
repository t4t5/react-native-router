'use strict';

var React = require('react-native');

var NavBarContent = require('./NavBarContent');

var {
  StyleSheet,
  View
} = React;


var NavBarContainer = React.createClass({

  getInitialState: function() {
    return {
      backButtonOpacity: 0,
      previousRoute: {} // Keep previousRoute for smooth transitions
    };
  },

  componentWillReceiveProps: function(newProps) {
    if (this.props && this.props.currentRoute.index !== newProps.currentRoute.index) {
      this.setState({
        previousRoute: this.props.currentRoute
      });
    }
  },

  goBack: function() {
    this.props.toBack(this.props.navigator);
  },

  goForward: function(route) {
    this.props.toRoute(route, this.props.navigator);
  },

  customAction: function(opts) {
    this.props.customAction(opts);
  },

  // We render both the current and the previous navbar (for animation)
  render: function() {
    if(this.props.currentRoute.trans === true)
      var trans = {backgroundColor: 'transparent'}
    else
      var trans = {}

    return (
      <View style={[styles.navbarContainer, this.props.style, trans]}>
        {this.props.currentRoute.trans
          ?( <View /> )
          :( <NavBarContent
            route={this.state.previousRoute}
            backButtonComponent={this.props.backButtonComponent}
            rightCorner={this.props.rightCorner}
            titleStyle={this.props.titleStyle}
            willDisappear="true" /> )
        }
        <NavBarContent
          route={this.props.currentRoute}
          backButtonComponent={this.props.backButtonComponent}
          rightCorner={this.props.rightCorner}
          titleStyle={this.props.titleStyle}
          borderBottomWidth={this.props.borderBottomWidth}
          borderColor={this.props.borderColor}
          goBack={this.goBack}
          goForward={this.goForward}
          leftProps={this.props.leftProps}
          rightProps={this.props.rightProps}
          customAction={this.customAction}
        />
      </View>    )
  }
});


var styles = StyleSheet.create({
  navbarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 64
  }
});


module.exports = NavBarContainer;
