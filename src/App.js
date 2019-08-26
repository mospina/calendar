import React, { Component } from 'react';
import './App.css';
import {EmailForm} from './components/EmailForm'
import {Calendar} from './model/Calendar'

function DateTime() {
  const today = new Date();
  
  return (
    <h3>{today.toString()}</h3>
  )
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      calendar: null
    };
    
    this.onEmailFormChange = this.onEmailFormChange.bind(this);
    this.onEmailFormSubmit = this.onEmailFormSubmit.bind(this);
  }

  onEmailFormChange(event){
    this.setState({email: event.target.value});
  }

  onEmailFormSubmit(event){
    const {email} = this.state;
    this.setState({calendar: new Calendar(email)});

    event.preventDefault();
  };

  render(){
    const { email, calendar } = this.state;

    return (
      <div className="App">
        <h2>Calendar</h2>
        { calendar
          ? <DateTime />
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
