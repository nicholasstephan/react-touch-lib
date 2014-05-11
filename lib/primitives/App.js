/** @jsx React.DOM */

var React = require('react');

var STYLE = {
  bottom: 0,
  left: 0,
  overflow: 'hidden',
  position: 'fixed',
  right: 0,
  top: 0
};

var App = React.createClass({displayName: 'App',
  handleTouch: function(e) {
    e.preventDefault();
  },

  render: function() {
    return this.transferPropsTo(
      React.DOM.div( {onTouchMove:this.handleTouch, style:STYLE}, 
        this.props.children
      )
    );
  }
});

module.exports = App;