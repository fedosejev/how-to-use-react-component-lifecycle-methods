import React from 'react';

let Counter = React.createClass({

  getDefaultProps: function () {
    console.debug('getDefaultProps');

    return {};
  },

  getInitialState: function () {
    console.debug('getInitialState');

    return {};
  },

  componentWillMount: function () {
    console.debug('componentWillMount');
  },

  componentDidMount: function () {
    console.debug('componentDidMount');
  },

  componentWillReceiveProps: function () {
    console.debug('componentWillReceiveProps');
  },

  shouldComponentUpdate: function () {
    console.debug('shouldComponentUpdate');

    return true;
  },

  componentWillUpdate: function () {
    console.debug('componentWillUpdate');
  },

  componentDidUpdate: function () {
    console.debug('componentDidUpdate');
  },

  componentWillUnmount: function () {
    console.debug('componentWillUnmount');
  },

  render: function () {
    console.debug('render');

    return (
      <h1 className="text-muted">Counter: {this.props.value}</h1>
    );
  }
});

export default Counter;