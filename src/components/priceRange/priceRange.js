/**
 *
 * Created by qoder on 16-5-9.
 */
const React = require('react');

const PriceRange = React.createClass({
  getInitialState: function () {
    return {
      priceShow:'none'
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
    return (
      <li>
        <span onClick={this.handleClick}>价格范围</span>
        <div style={{display:this.state.priceShow}}>
          <input type="checkbox" value="0,200" className="price"/>200以下
          <input type="checkbox" value="200,300" className="price"/>200-300
          <br/>
          <input type="checkbox" value="300,500" className="price"/>300-500
          <input type="checkbox" value="500,3000" className="price"/>500以上
        </div>
      </li>
    )
  }
});


module.exports = PriceRange;
