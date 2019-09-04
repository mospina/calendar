// @flow

import React, { Component } from 'react';
import './EntryList.css';
import {Entry} from '../model/Entry';

type Props = {
  entries : Array<Entry>
}

class EntryList extends Component<Props> {
  render(){
    const {entries} = this.props;

    return (
      <table className="entry-list-table">
      { entries.map((entry) =>
          <tr>
            <td>{entry.date}</td>
            <td>{entry.time}</td>
            <td>{entry.label}</td>
            // TODO: <td><button>details</button></td>
          </tr>
        )
      }
      </table>
    );
  };
}

export {EntryList};
