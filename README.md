React Native Router
===================
Awesome navigation for your React Native app.

![Twitter navigation](http://tristanedwards.me/u/react-native-router/native-router.gif)

Install
-------

Make sure that you are in your React Native project directory and run:

```npm install react-native-router --save```

Usage
-----

```javascript
var Router = require('react-native-router');
```

The basics:
```javascript
// The initial page
var HelloPage = React.createClass({
  render: function() {
    return <Text>Hello world!</Text>;
  }
});

// Your route object should contain at least:
// - The name of the route (which will become the navigation bar title)
// - The component object for the page to render
var firstRoute = {
  name: 'Welcome!',
  component: HelloPage
};

// The Router wrapper
var MyApp = React.createClass({
  render() {
    return (
      <Router firstRoute={firstRoute} />
    )
  }
});

AppRegistry.registerComponent('routerTest', () => MyApp);
```

Boom. That's it.

From the "Hello world!"-page you can then navigate further to a new component by calling ```this.props.toRoute()```. Let's build upon the HelloPage component in our first example:

```javascript
var HelloPage = React.createClass({

  nextPage: function() {
    this.props.toRoute({
      name: "A new screen",
      component: HelloPage
    });
  },

  render: function() {
    return (
      <View>
        <TouchableHighlight onPress={this.nextPage} underlayColor="transparent">
          <Text>Next page please!</Text>
        </TouchableHighlight>
      </View>
    );
  }
});
```

Now, when you click on "Next page please!", it will go to the next page (which in this case is still HelloPage but with a new title). Keep in mind that ```this.props.toRoute()``` needs to be called from one of the top-level routes, therefore, if your link is deeply nested within multiple components, you need to make sure that the action "bubbles up" until it reaches the parent route, which in turn calls ```this.props.toRoute()```.


A more advanced example: Twitter app
------------------------------------

To see more of the router in action, you can check out the Twitter example app that comes with the package. Just make sure that you first drag all the images from ```node_modules/react-native-router/twitter-example/images``` to your project's Images.xcassets:

![Drag the assets to xcassets](http://tristanedwards.me/u/react-native-router/drag-assets.gif)

After that, don't forget to rebuild the app in XCode before you launch the simulator. Then test the app by requiring the TwitterApp component:

```javascript
var TwitterApp = require('./node_modules/react-native-router/twitter-example');

var {
  AppRegistry
} = React;

AppRegistry.registerComponent('routerTest', () => TwitterApp);
```

Configurations
--------------

The **`<Router \>`** object used to initialize the navigation can take the following props:
- `firstRoute` (required): A React class corresponding to the first page of your navigation
- `headerStyle`: Apply a StyleSheet to the navigation bar. You'll probably want to change the backgroundColor for example.
- `titleStyle`: Apply a StyleSheet to the navigation bar titles. Useful for changing the font or text color.
- `backButtonComponent`: By default, the navigation bar will display a simple "Back" text for the back button. To change this, you can specify your own backButton component (like in the Twitter app).
- `rightCorner`: If you have the same occuring action buttons on the right side of your navigation bar (like the Twitter "Compose"-button), you can specify a component for that view.
- `customAction`: A special callback prop for your action buttons (this can be handy for triggering a side menu for example). The action gets triggered from your custom `leftCorner` or `rightCorner` components by calling `this.props.customAction("someActionName")` from them. It is then picked up like this: `<Router customAction={this.doSomething} />`.

The **`this.props.toRoute()`** callback prop takes one parameter (a JavaScript object) which can have the following keys:
- `name`: The name of your route, which will be shown as the title of the navigation bar unless it is changed.
- `component` (required): The React class corresponding to the view you want to render.
- `leftCorner`: Specify a component to render on the left side of the navigation bar (like the "Add people"-button on the first page of the Twitter app)
- `rightCorner`: Specify a component to render on the right side of the navigation bar
- `titleComponent`: Specify a component to replace the title. This could for example be your logo (as in the first page of the Instagram app)
- `headerStyle`: change the style of your header for the new route. You could for example specify a new backgroundColor and the router will automatically make a nice transition from one color to the other!
- `data`: Send custom data to your route.


Todos
-----
When swiping from left to right to go back, it would be nice if the navigation bar's opacity gradually changed with the user's finger position. (See [Issue #1](https://github.com/t4t5/react-native-router/issues/1))

Questions?
---------

If something is unclear or if you just want to say hi, feel free to [follow me on Twitter](https://twitter.com/t4t5)!

