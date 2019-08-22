// @flow

import {Entry} from './Entry.js';

class Reminder extends Entry {
  _note : string;

  // MODIFIES: this
  // EFFECTS: Set note
  set note(note: string): void{
    this._note = note
  };
  
  // EFFECTS: returns note
  get note(): string{
    return this._note;
  };

}

export {Reminder};
