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
    var trans,
      navbarStyle,
      navbarContent;

    if (this.props.currentRoute.trans) {
      trans = {backgroundColor: 'transparent'};
    } else {
      trans = {};
    }

    if (this.props.currentRoute.hideNavigationBar) {
      navbarStyle = styles.navbarContainerHidden;
    } else {
      navbarStyle = styles.navbarContainer;
    }

    if(this.props.currentRoute.trans) {
      navbarContent = (
        <NavBarContent
        route={this.state.previousRoute}
        backButtonComponent={this.props.backButtonComponent}
        rightCorner={this.props.rightCorner}
        titleStyle={this.props.titleStyle}
        willDisappear="true"></NavBarContent>
      );
    } else if (this.props.currentRoute.hideNavigationBar) {
      navbarContent = (
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
          titleProps={this.props.titleProps}
          customAction={this.customAction}>
      </NavBarContent>
      );
    } else {
      navbarContent = (
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
          titleProps={this.props.titleProps}
          customAction={this.customAction}>
        </NavBarContent>
      );
    }

    return (
      <View style={[navbarStyle, this.props.style, trans]}>
        {navbarContent}
      </View>
    );
  }
});

var styles = StyleSheet.create({
  navbarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 64
  },
  navbarContainerHidden: {
    position: 'absolute',
    top: -64,
    left: 0,
    right: 0,
    height: 64
  }
});

module.exports = NavBarContainer;
