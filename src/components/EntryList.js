// @flow

import React, { Component } from 'react';
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
            <td>{entry.date}</td>
            <td>{entry.label}</td>
            <td><button>details</button></td>
          </tr>
        )
      }
      </table>
    );
  };
}

export {EntryList};
