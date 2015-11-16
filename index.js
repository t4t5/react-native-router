'use strict';

var React = require('react-native');

var NavBarContainer = require('./components/NavBarContainer');

var {
  StyleSheet,
  Navigator,
  StatusBarIOS,
  View,
  Platform
} = React;


var Router = React.createClass({

  getInitialState: function() {
    return {
      route: {
        name: null,
        index: null
      },
      dragStartX: null,
      didSwitchView: null,
    };
  },

  /*
   * This changes the title in the navigation bar
   * It should preferrably be called for "onWillFocus" instad >
   * > but a recent update to React Native seems to break the animation
   */
  onDidFocus: function(route) {
    this.setState({ route: route });
  },

  onBack: function(navigator) {
    if (this.state.route.index > 0) {
      navigator.pop();
    }
  },

  onForward: function(route, navigator) {
    route.index = this.state.route.index + 1 || 1;
    navigator.push(route);
  },

  setRightProps: function(props) {
    this.setState({ rightProps: props });
  },

  setLeftProps: function(props) {
    this.setState({ leftProps: props });
  },

  customAction: function(opts) {
    this.props.customAction(opts);
  },

  renderScene: function(route, navigator) {

    var goForward = function(route) {
      route.index = this.state.route.index + 1 || 1;
      navigator.push(route);
    }.bind(this);

    var replaceRoute = function(route) {
      route.index = this.state.route.index || 0;
      navigator.replace(route);
    }.bind(this);

    var resetToRoute = function(route) {
      route.index = 0;
      navigator.resetTo(route);
    }.bind(this);

    var goBackwards = function() {
      this.onBack(navigator);
    }.bind(this);

    var goToFirstRoute = function() {
      navigator.popToTop();
    };

    var setRightProps = function(props) {
      this.setState({ rightProps: props });
    }.bind(this);

    var setLeftProps = function(props) {
      this.setState({ leftProps: props });
    }.bind(this);

    var customAction = function(opts) {
      this.customAction(opts);
    }.bind(this);

    var Content = route.component;

    // Remove the margin of the navigation bar if not using navigation bar
    var extraStyling = {};
    if (this.props.hideNavigationBar) {
      extraStyling.marginTop = 0;
    }

    var margin;
    if(route.trans === true)
      margin = 0;
    else if (this.props.hideNavigationBar === true)
      margin = this.props.noStatusBar ? 0 : 20;
    else
      margin = 64;

    return (
      <View
        style={[styles.container, this.props.bgStyle, extraStyling, {marginTop: margin}]}
        <Content
          name={route.name}
          index={route.index}
          data={route.data}
          toRoute={goForward}
          toBack={goBackwards}
          replaceRoute={replaceRoute}
          resetToRoute={resetToRoute}
          reset={goToFirstRoute}
          setRightProps={setRightProps}
          setLeftProps={setLeftProps}
          customAction={customAction}
          {...route.passProps}
        />
      </View>
    );

  },

  render: function() {

    // Status bar color
    if (Platform.OS === 'ios') {
      if (this.props.statusBarColor === "black") {
        StatusBarIOS.setStyle(0);
      } else {
        StatusBarIOS.setStyle(1);
      }
    } else if (Platform.OS === 'android') {
      // no android version yet
    }

    var navigationBar;

    if (!this.props.hideNavigationBar) {
      navigationBar =
      <NavBarContainer
        style={this.props.headerStyle}
        navigator={navigator}
        currentRoute={this.state.route}
        backButtonComponent={this.props.backButtonComponent}
        rightCorner={this.props.rightCorner}
        titleStyle={this.props.titleStyle}
        borderBottomWidth={this.props.borderBottomWidth}
        borderColor={this.props.borderColor}
        toRoute={this.onForward}
        toBack={this.onBack}
        leftProps={this.state.leftProps}
        rightProps={this.state.rightProps}
        customAction={this.customAction}
      />
    }

    return (
      <Navigator
        initialRoute={this.props.firstRoute}
        navigationBar={navigationBar}
        renderScene={this.renderScene}
        onDidFocus={this.onDidFocus}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
});


module.exports = Router;
