// @flow

class DateUtils {

  static toDate(date: Date): string{
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return year + "-" + this.leadingZero(month) + "-" + this.leadingZero(day)
  }

  static toTime(date: Date): string{
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    return this.leadingZero(hours) + ":" + this.leadingZero(minutes)
  };

  // EFFECTS: returns a string with a leading zero if number is one single digit
  static leadingZero(number: number): string{
    let n = number.toString();
    if (n.length == 1) {
      return "0" + n;
    }
    return n;
  }
}

export {DateUtils};

