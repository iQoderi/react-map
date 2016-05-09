/**
 * Created by qoder on 16-5-9.
 */
const React = require('react');

require('./hotelFilter.css');
const Map = require('../BaiduMap/Map');
const PriceRange = require('../priceRange/priceRange');
const HotelLeave = require('../hotelLevel/hotelLeave');

const HotelFilter = React.createClass({
  componentDidMount: function () {

  },
  render: function () {
    return (
      <div className="scroll-clip">
        <div className="list">
          <ul>
            <PriceRange/>
            <HotelLeave/>
          </ul>
        </div>
        <Map/>
      </div>
    )
  }
});


module.exports = HotelFilter;
