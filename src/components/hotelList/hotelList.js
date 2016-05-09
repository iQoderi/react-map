/**
 * Created by qoder on 16-5-9.
 */
/**
 * Created by qoder on 16-5-9.
 */
const React = require('react');
const Hotel = require('../hotel/hotel');

var yeoman = require('../../images/yeoman.png');

require('./hotelList.css');
const mapUrl = "http://api.map.baidu.com/geosearch/v3/nearby?ak=zYUnvOo9mtf5BA0MtGoFoW9lHEbrbGDx&geotable_id=135736&location=116.395884,39.932154&radius=100000";

var HotelList = React.createClass({

  render: function () {
    var HotelList = [
      {
        imgSrc: yeoman,
        price: 108,
        address: '东北大学秦皇岛分校',
        name: '7天快捷酒店'
      },

      {
        imgSrc: yeoman,
        price: 108,
        address: '东北大学秦皇岛分校',
        name: '7天快捷酒店'
      },

      {
        imgSrc: yeoman,
        price: 108,
        address: '东北大学秦皇岛分校',
        name: '7天快捷酒店'
      },

      {
        imgSrc: yeoman,
        price: 108,
        address: '东北大学秦皇岛分校',
        name: '7天快捷酒店'
      }
    ];

    var Hotels = [];
    HotelList.forEach(hotel=> {
      Hotels.push(<Hotel hotelInfo={hotel}/>);
    });
    return (
      <div className="scroll-clip">
        {Hotels}
      </div>
    )
  }
});


module.exports = HotelList;
