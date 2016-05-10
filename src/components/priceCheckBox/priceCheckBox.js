/**
 * Created by qoder on 16-5-9.
 */
const React = require('react');

const PriceCheckBox = React.createClass({
  render: function () {
    return (
      <span>
        <input type="checkbox" value={this.props.price.value}/>
        {this.props.price.title}
      </span>
    )
  }
});


module.exports = PriceCheckBox;
