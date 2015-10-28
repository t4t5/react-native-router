'use strict';

var React = require('react-native');
var Animated = require('Animated');
var Easing = require('Easing');

var NavButton = require('./NavButton');

var {
  StyleSheet,
  Text,
  View
} = React;


var NavBarContent = React.createClass({

  getInitialState: function() {
    return {
      opacity: this.props.willDisappear ? new Animated.Value(1) : new Animated.Value(0)
    };
  },

  componentWillReceiveProps: function(newProps) {
    if (newProps.route !== this.props.route) {
      this.state.opacity.setValue(this.props.willDisappear ? 1 : 0);

      setTimeout(() => {
        Animated.timing(
          this.state.opacity,
          {
            fromValue: this.props.willDisappear ? 1 : 0,
            toValue: this.props.willDisappear ? 0 : 1,
            duration: 1000,
            easing: Easing.easeOutQuad
          }
        ).start();
      }, 0);
    }
  },

  goBack: function() {
    if (!this.props.willDisappear) {
      this.props.goBack();
    }
  },

  goForward: function(route) {
    this.props.goForward(route);
  },

  customAction: function(opts) {
    this.props.customAction(opts);
  },

  render() {
    var transitionStyle = {
      opacity: this.state.opacity,
    };

    var leftCorner;
    var rightCorner;
    var titleComponent;


    /**
     * Set leftCorner
     * (defaults to "Back"-button for routes with index > 0)
     */
    var leftCornerContent;

    if (this.props.route.leftCorner) {
      var LeftCorner = this.props.route.leftCorner;
      leftCornerContent = <LeftCorner toRoute={this.goForward} customAction={this.customAction} {...this.props.leftProps} {...this.props.route.leftCornerProps} />;
    } else if (this.props.route.index > 0) {
      leftCornerContent = <NavButton onPress={this.goBack} backButtonComponent={this.props.backButtonComponent} />;
    }

    leftCorner = (
      <View style={[styles.corner, styles.alignLeft]}>
        {leftCornerContent}
      </View>
    );

    /**
     * Set rightCorner
     */
    var rightCornerContent;

    if (this.props.route.rightCorner || this.props.rightCorner) {
      var RightCorner = this.props.route.rightCorner || this.props.rightCorner;
      rightCornerContent = <RightCorner toRoute={this.goForward} customAction={this.customAction} {...this.props.rightProps} {...this.props.route.rightCornerProps} />;
    }

    rightCorner = (
      <View style={[styles.corner, styles.alignRight]}>
        {rightCornerContent}
      </View>
    );

    /**
     * Set title message
     */
    var titleContent;

    if (this.props.route.titleComponent) {
      var TitleComponent = this.props.route.titleComponent;
      titleContent = <TitleComponent {...this.props.titleProps} />;
    } else {
      titleContent = (
        <Text style={[styles.navbarText, this.props.titleStyle]} numberOfLines={1}>
          {this.props.route.name}
        </Text>
      );
    }

    titleComponent = (
      <View style={{flex: 3}}>
        {titleContent}
      </View>
    );

    if(this.props.route.trans === true)
      var trans = { backgroundColor: 'transparent', borderBottomWidth: 0 };
    else
      var trans = {};

    var width = this.props.borderBottomWidth ? this.props.borderBottomWidth : 0;
    var color = this.props.borderColor ? this.props.borderColor : null;

    return (
      <Animated.View style={[styles.navbar, transitionStyle, this.props.route.headerStyle,{borderBottomWidth: width, borderColor: color}, trans]}>
        {leftCorner}
        {titleComponent}
        {rightCorner}
      </Animated.View>
    );
  }
});


var styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 64, // Default iOS navbar height
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 13
  },
  navbarText: {
    color: 'white',
    fontSize: 17,
    margin: 10,
    marginTop: 14,
    fontWeight: '600',
    textAlign: 'center',
    alignItems: 'center',
  },
  corner: {
    flex: 1,
    justifyContent: 'center',
  },

  alignLeft: {
    alignItems: 'flex-start'
  },
  alignRight: {
    alignItems: 'flex-end'
  },
  buttonTextLeft: {
    marginLeft: 10,
  },
  buttonTextRight: {
    marginRight: 10
  }
});


module.exports = NavBarContent;
