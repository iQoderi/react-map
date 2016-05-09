/**
 * Created by qoder on 16-5-9.
 */
const React = require('react');


require('./hotel.css');

const Hotel = React.createClass({
  getInitialState: function () {
    return {
      imgSrc: '',
      name: '',
      address: '',
      price: ''
    }
  },
  render: function () {
    return (
      <div className="clearfloat hotel">
        <dl>
          <dd><img src={this.props.hotelInfo.imgSrc}/></dd>
          <dt>{this.props.hotelInfo.name}</dt>
          <dt>{this.props.hotelInfo.address}</dt>
        </dl>
        <span className="price">{this.props.hotelInfo.price}元</span>
      </div>
    )
  }
});


module.exports = Hotel;
