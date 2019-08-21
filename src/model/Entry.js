class Entry {

  /*
   * date : Date
   * label : String
   * Reminder: Bool
   * intervalOfRepetition : String
  */

  // REQUIRES: date and time are in ISO format 'YYYY-MM-DD' 'HH:MM'
  // MODIFIES: this
  // EFFECTS: Set date and time during initialization
  // @flow
  constructor(date: string, time: string): void{
    this._date = new Date(date + 'T' + time);
  };

  // EFFECTS: returns date without time
  // @flow
  get date(): string{
    let year = this._date.getFullYear();
    let month = this._date.getMonth() + 1;
    let day = this._date.getDate();

    return year + "-" + this.leadingZero(month) + "-" + this.leadingZero(day)
  };

  // EFFECTS: returns time without date
  // @flow
  get time(): string{
    let hours = this._date.getHours();
    let minutes = this._date.getMinutes();
    
    return this.leadingZero(hours) + ":" + this.leadingZero(minutes)
  };

  // EFFECTS: returns label
  // @flow
  get label(): string{
    return this._label;
  };

  // EFFECTS: returns interval
  // @flow
  get interval(): string{
    return this._interval;
  };

  // EFFECTS: returns reminder
  // @flow
  get reminder(): boolean{
    return this._reminder;
  };

  // REQUIRES: date to be in ISO format 'YYYY-MM-DD'
  // MODIFIES: this
  // EFFECTS: set date, using existing time or 00:00
  // @flow
  set date(date: string): void{
    let time = this.time
    this._date = new Date(date + 'T' + time);
  };

  // REQUIRES: time to be in ISO format 'HH:MM:SS'
  // MODIFIES: this
  // EFFECTS: set date using date from existing date or now.
  // @flow
  set time(time: string): void{
    let date = this.date
    this._date = new Date(date + 'T' + time);
  };

  // MODIFIES: this
  // @flow
  set label(label: string): void{
    this._label = label;
  };

  // REQUIRES: interval to be one of (daily, weekly, monthly, annually)
  // MODIFIES: this
  // EFFECTS: set interval of repetition.
  // type Interval = 'daily' | 'weekly' | 'monthly' | 'annually'
  // @flow
  set interval(interval: string): void{
    this._interval = interval;
  };

  // EFFECTS: returns reminder
  // @flow
  set reminder(reminder: boolean): void{
    this._reminder = reminder;
  };

  // EFFECTS: returns a string with a leading zero if number is one single digit
  // @flow
  leadingZero(number: number): string{
    let n = number.toString();
    if (n.length == 1) {
      return "0" + n;
    }
    return n;
  }
}

export { Entry };
