/**
 * Created by qoder on 16-5-9.
 */
const React = require('react');

var HotelLeave = React.createClass({
  getInitialState: function () {
    return {
      leaveShow: 'none'
    }

  },

  handleClick: function () {
    if (this.state.leaveShow =='none') {
      this.setState({
        leaveShow: 'block'
      });
    } else {
      this.setState({
        leaveShow: 'none'
      });
    }
  },
  render: function () {
    return (
      <li>
        <span onClick={this.handleClick}>酒店级别</span>
        <div style={{display:this.state.leaveShow}}>
          <input type="checkbox" value="1" class="type"/>经济型
          <input type="checkbox" value="2" class="type"/>二星级
          <br/>
          <input type="checkbox" value="3" class="type"/>三星级
          <input type="checkbox" value="4" class="type"/>舒适四星级
          <br/>
          <input type="checkbox" value="5" class="type"/>高档五星级
        </div>
      </li>
    )
  }
});


module.exports = HotelLeave;
