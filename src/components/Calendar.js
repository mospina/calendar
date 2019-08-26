import React, { Component } from 'react';

class Calendar extends Component {

  render(){
    const {calendar} = this.props;

    return (
      <h3>{calendar.date + ' ' + calendar.time}</h3>
    )
  }
}

export {Calendar};
