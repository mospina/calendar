// @flow

type Interval = 'daily' | 'weekly' | 'monthly' | 'annually';

class Entry {

   _date : Date
   _label : string
   _repeat: boolean
   _interval: Interval

  // REQUIRES: date and time are in ISO format 'YYYY-MM-DD' 'HH:MM'
  // MODIFIES: this
  // EFFECTS: Set date and time during initialization
  constructor(date: string, time: string): void{
    this._date = new Date(date + 'T' + time);
  };

  // EFFECTS: returns date without time
  get date(): string{
    let year = this._date.getFullYear();
    let month = this._date.getMonth() + 1;
    let day = this._date.getDate();

    return year + "-" + this.leadingZero(month) + "-" + this.leadingZero(day)
  };

  // EFFECTS: returns time without date
  get time(): string{
    let hours = this._date.getHours();
    let minutes = this._date.getMinutes();
    
    return this.leadingZero(hours) + ":" + this.leadingZero(minutes)
  };

  // EFFECTS: returns label
  get label(): string{
    return this._label;
  };

  // EFFECTS: returns interval
  get interval(): Interval{
    return this._interval;
  };

  // EFFECTS: returns repeat
  get repeat(): boolean{
    return this._repeat;
  };

  // REQUIRES: date to be in ISO format 'YYYY-MM-DD'
  // MODIFIES: this
  // EFFECTS: set date, using existing time or 00:00
  set date(date: string): void{
    let time = this.time
    this._date = new Date(date + 'T' + time);
  };

  // REQUIRES: time to be in ISO format 'HH:MM:SS'
  // MODIFIES: this
  // EFFECTS: set date using date from existing date or now.
  set time(time: string): void{
    let date = this.date
    this._date = new Date(date + 'T' + time);
  };

  // MODIFIES: this
  set label(label: string): void{
    this._label = label;
  };

  // REQUIRES: interval to be one of (daily, weekly, monthly, annually)
  // MODIFIES: this
  // EFFECTS: set interval of repetition.
  set interval(interval: Interval): void{
    this._interval = interval;
  };

  // EFFECTS: returns repeat
  set repeat(repeat: boolean): void{
    this._repeat = repeat;
  };

  // EFFECTS: returns a string with a leading zero if number is one single digit
  leadingZero(number: number): string{
    let n = number.toString();
    if (n.length == 1) {
      return "0" + n;
    }
    return n;
  }
}

export { Entry };
