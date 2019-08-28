// @flow

import React, { Component } from 'react';
import './App.css';
import {EmailForm} from './components/EmailForm'
import {CalendarWidget} from './components/Calendar';
import {Calendar} from './model/Calendar'

type Props = {}

type State = {
  email : string,
  calendar : ?Calendar
}

class App extends Component<Props, State> {

  constructor(props: Props){
    super(props);
    this.state = {
      email: '',
      calendar: null
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onEmailFormChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({email: event.currentTarget.value});
  }

  onEmailFormSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    const {email} = this.state;
    this.setState({calendar: new Calendar(email)});

    this.interval = setInterval(() => {
      const {calendar} = this.state;
      calendar.updateDate();
      this.setState({ calendar: calendar });
    }, 1000);

    event.preventDefault();
  };

  render(){
    const { email, calendar } = this.state;

    return (
      <div id="App">
        <h1>Calendar</h1>
        { calendar
          ? <CalendarWidget calendar={calendar} />
          : <EmailForm
              value={email}
              onChange={this.onEmailFormChange}
              onSubmit={this.onEmailFormSubmit}
            >
              Set email
            </EmailForm>
        }
      </div>
    );
  }
}

export default App;
