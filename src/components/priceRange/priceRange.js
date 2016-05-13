/**
 *
 * Created by qoder on 16-5-9.
 */
const React = require('react');
const ReactBootstrap = require('react-bootstrap');
const Button = ReactBootstrap.Button;
const PriceCheckBox = require('../priceCheckBox/priceCheckBox');
const PriceRange = React.createClass({
  getInitialState: function () {
    return {
      priceShow: 'none',
      priceRange: [
        {
          value: [0, 200],
          title: '200以下'
        },
        {
          value: [200, 300],
          title: '200-300'
        },
        {
          value: [300, 500],
          title: '300-500'
        },
        {
          value: [500, 3000],
          title: '500以上'
        }
      ]
    }
  },


  handleClick: function () {
    if (this.state.priceShow === 'none') {
      this.setState({
        priceShow: 'block'
      })
    } else {
      this.setState({
        priceShow: 'none'
      })
    }
  },
  render: function () {
    let PriceChoose = [];
    this.state.priceRange.forEach((price)=> {
      PriceChoose.push(<PriceCheckBox price={price}/>)
    });

    return (
      <li>
        <span onClick={this.handleClick}>价格范围</span>
        <div style={{display:this.state.priceShow}}>
          {PriceChoose}
        </div>
      </li>
    )
  }
});


module.exports = PriceRange;


