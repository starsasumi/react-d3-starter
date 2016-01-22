import React from 'react';
import ReactDOM from 'react-dom';
import d3Circle from './d3_circle.js';

var Chart = React.createClass({
  propTypes: {
    data: React.PropTypes.array,
    domain: React.PropTypes.object
  },

  componentDidMount: function() {
    // Get the DOMElement that would be used to insert the chart
    var el = ReactDOM.findDOMNode(this).getElementsByClassName("Chart")[0];

    d3Circle.create(el, {
      width: '100%',
      height: '300px'
    }, this.getChartState());
  },

  componentDidUpdate: function() {
    var el = this.getDOMNode();
    d3Circle.update(el, this.getChartState());
  },

  getChartState: function() {
    return {
      data: this.props.data,
      domain: this.props.domain
    };
  },

  componentWillUnmount: function() {
    var el = this.getDOMNode();
    d3Circle.destroy(el);
  },

  render: function() {
    return (
      <div>
        <h1>React D3 Starter</h1>
        <div className="Chart"></div>
      </div>
    );
  }
});

module.exports = Chart;
