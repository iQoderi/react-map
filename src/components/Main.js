require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

const Menu = require('../components/menu/menu');
const Hotel = require('../components/hotelRouter/hotelRouter');


var AppComponent = React.createClass({
  render: function () {
    return (
      <div className="container clearfloat">
        <div className="select-cont">
          <Menu/>
          <Hotel/>
        </div>
        {this.props.children}
      </div>
    )
  }
});

export default AppComponent;


