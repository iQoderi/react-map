/**
 * Created by qoder on 16-5-9.
 */
const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Link = ReactRouter.Link;
const IndexRouter = ReactRouter.IndexRouter;
const Redirect = ReactRouter.Redirect;

const HotelFilter = require('../hotelFilter/hotelFilter');
const HotelList = require('../hotelList/hotelList');

let routes = (
  <Router location="hash">
    <Route path="/hotelFilter" name='hotelFilter' component={HotelFilter}/>
    <Route path="/hotelList" name='hotelList' component={HotelList}/>
  </Router>
);


var Hotel = React.createClass({
  render: function () {
    return routes;
  }
});

module.exports = Hotel;
