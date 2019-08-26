// @flow

import React, { Component } from 'react';
import {Calendar} from '../model/Calendar';

type Props = {
  calendar : Calendar
}

class CalendarWidget extends Component<Props> {

  render(){
    const {calendar} = this.props;

    return (
      <h3>{calendar.date + ' ' + calendar.time}</h3>
    )
  }
}

export {CalendarWidget};
