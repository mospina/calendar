class Entry {

  /*
   * date : Date
   * time : Date
   * label : String
   * Reminder: Bool
   * intervalOfRepetition : Time delta
  */

  // REQUIRES: date and time are in ISO format 'YYYY-MM-DD' 'HH:MM'
  // MODIFIES: this
  // EFFECTS: Set date and time during initialization
  constructor(date, time){
    this._date = new Date(date + 'T' + time);
  };

  // EFFECTS: returns date without time
  get date(){
    let year = this._date.getFullYear();
    let month = this._date.getMonth() + 1;
    let day = this._date.getDate();

    return year + "-" + this.leadingZero(month) + "-" + this.leadingZero(day)
  };

  // EFFECTS: returns time without date
  get time(){
    let hours = this._date.getHours();
    let minutes = this._date.getMinutes();
    
    return this.leadingZero(hours) + ":" + this.leadingZero(minutes)
  };

  // EFFECTS: returns label
  get label(){
    return this._label;
  };

  // EFFECTS: returns interval
  get interval(){
    return this._interval;
  };

  // EFFECTS: returns reminder
  get reminder(){
    return this._reminder;
  };

  // REQUIRES: date to be in ISO format 'YYYY-MM-DD'
  // MODIFIES: this
  // EFFECTS: set date, using existing time or 00:00
  set date(date){
    let time = this.time
    this._date = new Date(date + 'T' + time);
  };

  // REQUIRES: time to be in ISO format 'HH:MM:SS'
  // MODIFIES: this
  // EFFECTS: set date using date from existing date or now.
  set time(time){
    let date = this.date
    this._date = new Date(date + 'T' + time);
  };

  // MODIFIES: this
  set label(label){
    this._label = label;
  };

  // REQUIRES: interval to be one of (daily, weekly, monthly, annually)
  // MODIFIES: this
  // EFFECTS: set interval of repetition.
  set interval(interval){
    this._interval = interval;
  };

  // EFFECTS: returns reminder
  set reminder(reminder){
    this._reminder = reminder;
  };

  leadingZero(number){
    let n = number.toString();
    if (n.length == 1) {
      return "0" + n;
    }
    return n;
  }
}

export { Entry };
