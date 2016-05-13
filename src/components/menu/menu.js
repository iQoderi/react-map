/**
 * Created by qoder on 16-5-9.
 */
const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Routes;
const Route = ReactRouter.Route;
const Link = ReactRouter.Link;
const IndexRouter = ReactRouter.IndexRouter;
const Redirect = ReactRouter.Redirect;

require('./menu.css');
const Menu = React.createClass({
  getInitialState: function () {
    return {
      filterClass: 'select',
      listClass: ''
    }
  },
  handleClick: function (e) {
    if (e.target.innerHTML === '筛选条件') {
      this.setState({
        filterClass: 'select',
        listClass: ''
      });
    } else {
      this.setState({
        filterClass: '',
        listClass: 'select'
      });
    }
  },
  render: function () {
    return (
      <div className="select-cont">
        <div className="menu">
          <div className={this.state.filterClass} onClick={this.handleClick}>
            <Link to="/hotelFilter">筛选条件</Link>
          </div>
          <div className={this.state.listClass} onClick={this.handleClick}>
            <Link to="/hotelList">酒店列表</Link>
          </div>
        </div>
      </div>)
  }
});


module.exports = Menu;
