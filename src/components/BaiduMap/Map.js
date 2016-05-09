/**
 *
 * Created by qoder on 16-5-9.
 */

// var
var React = require('react');


var Map = React.createClass({
  componentDidMount: function () {
    var map = new BMap.Map('BMap');
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);

    var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
    var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
    var top_right_navigation = new BMap.NavigationControl({
      anchor: BMAP_ANCHOR_TOP_RIGHT,
      type: BMAP_NAVIGATION_CONTROL_SMALL
    });

    var size = new BMap.Size(10, 20);
    map.addControl(top_left_control);
    map.addControl(top_left_navigation);
    map.addControl(top_right_navigation);
    map.addControl(new BMap.CityListControl({
      anchor: BMAP_ANCHOR_TOP_LEFT,
      offset: size,
      // 切换城市之间事件
      // onChangeBefore: function(){
      //    alert('before');
      // },
      // 切换城市之后事件
      // onChangeAfter:function(){
      //   alert('after');
      // }
    }));
    var stCtrl = new BMap.PanoramaControl(); //构造全景控件
    stCtrl.setOffset(new BMap.Size(50, 20));
    map.addControl(stCtrl);//添加全景控件
    map.setCurrentCity("秦皇岛");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);
  },

  render: function () {
    return (
      <div className="BMap" id="BMap"></div>
    )
  }
});

module.exports = Map;
