// @flow

import {Entry} from './Entry.js';
import {DateUtils} from '../utils/DateUtils.js';

class Calendar {
  _date : Date;
  _email : string;
  _entries : Array<Entry>;

  // REQUIRES: email to be a valid email
  // MODIFIES: this
  // EFFECTS: Set date to now, email to given string and initialize entries
  constructor(email: string): void{
    this._date = new Date();
    this._email = email;
    this._entries = [];
  };

  // EFFECTS: return date as a string
  get date(): string{
    return DateUtils.toDate(this._date);
  };
  
  // EFFECTS: return time as a string
  get time(): string{
    return DateUtils.toTime(this._date);
  };
  
  // EFFECTS: return email
  get email(): string{
    return this._email;
  };
  
  // REQUIRES: email to be a valid email
  // MODIFIES: this
  // EFFECTS: Set email to given string
  set email(email: string): void{
    this._email = email;
  };
  
  // MODIFIES: this
  // EFFECTS: Set date to now
  updateDate(): void{
    this._date = new Date();
  };
  
  // MODIFIES: this
  // EFFECTS: add entry to entries
  addEntry(entry: Entry): void{
    this._entries.push(entry);
  };
  
  // MODIFIES: this
  // EFFECTS: delete entry from entry list
  removeEntry(entry: Entry): void{
    this._entries = this._entries.reduce(
      (acc, item) => {
        if (item != entry) {
          acc.push(item);
        }
        return acc
      },
      []
    )
  };
  
  // EFFECTS: return list of entries whose date is today. 
  getTodayEntries(): Array<Entry>{
    let todayEntries = this._entries.filter(entry => entry.date == this.date);
    return todayEntries.filter(entry => entry.fullDate > this._date);
  };
  
  // EFFECTS: return list of entries whose date is in the next seven days
  getThisWeekEntries(): Array<Entry>{
    let nextWeek = new Date(this._date.toString());
    nextWeek.setDate(nextWeek.getDate() + 7);

    return this._entries.filter(entry => entry.fullDate > this._date && entry.fullDate < nextWeek);
  };

  getEntryByLabel(label: string): ?Entry{
    for (let entry of this._entries) {
      if (entry.label == label) {
        return entry;
      }
    }
  }
}

export {Calendar};
