// @flow

import React, { Component } from 'react';
import {Entry} from '../model/Entry';

type Props = {
  addEntry : (Entry) => void
}

class EntryForm extends Component<Props> {

  runAddEntry = (fn: (Entry)=>void) => {
    const entry = new Entry('2019-08-28', '10:00');
    fn(entry);
  }

  render(){
    const {addEntry} = this.props;

    return (
      <div className="entry-form">
        <div className="form-menu">
          <button 
            onClick={() => this.runAddEntry(addEntry)}
            type="button">
              Add entry
          </button>
        </div>
        <div className="form">
        </div>
      </div>
    );
  }; 
}

export {EntryForm};
