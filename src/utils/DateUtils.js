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
  
  // REQUIRES: time and minus to be of the form 'HH:MM'
  // EFFECTS: returns a string representing the given time minus the "minus" time
  static subtractTime(time : string, minus : string): string {
    let timeTotal = this.timeToMinutes(time);
    let minusTotal = this.timeToMinutes(minus);

    if (!timeTotal){
      return ''
    }

    if (!minusTotal) {
      return time
    }

    return this.minutesTotime(timeTotal - minusTotal);
  }

  static timeToMinutes(time : string): number {
    let timeArray = time.split(':').map((s) => parseInt(s, 10));
    return (timeArray[0] * 60) + timeArray[1];
  }

  static minutesTotime(minutes : number): string {
    let quotient = Math.floor(minutes/60);
    let remainder = minutes % 60;

    return this.leadingZero(quotient) + ':' + this.leadingZero(remainder);
  }
}

export {DateUtils};

