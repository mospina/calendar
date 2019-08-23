import {Calendar} from './Calendar.js';
import {Meeting} from './Meeting.js';
import {Event} from './Event.js';
import {Reminder} from './Reminder.js';
import {DateUtils} from '../utils/DateUtils.js';

describe('Calendar constructor', () => {

  it('set date to now', () => {
    const calendar = new Calendar('one@example.com');
    expect(calendar._date).toBeDefined();
    expect(calendar._email).toBeDefined();
    expect(calendar._entries).toBeDefined();
    expect(calendar._date).toBeInstanceOf(Date);
  });
});

describe('Calendar getters and setters', () => {
  const calendar = new Calendar('one@example.com');
  
  it('get date returns a formated string', () => {
    expect(calendar._date).toBeInstanceOf(Date);
    expect(calendar.date).toMatch(/\d{4}-\d{2}-\d{2}/)
  });

  it('get time returns a formated string', () => {
    expect(calendar._date).toBeInstanceOf(Date);
    expect(calendar.time).toMatch(/\d{2}:\d{2}/)
  });

  it('set and get email', () => {
    expect(calendar._email).toBe('one@example.com');
    calendar.email = 'two@example.com';
    expect(calendar._email).toBe('two@example.com');
    expect(calendar.email).toBe('two@example.com');
  });

  it('updateDate set date to now', () => {
    let past = calendar._date
    calendar.updateDate()
    let present = calendar._date
    expect(present.getMilliseconds()).toBeGreaterThan(past.getMilliseconds());
  });
});

describe('Calendar.entries methods', () => {
  const yesterday = '2020-03-11'
  const today = '2020-03-12'
  const tomorrow = '2020-03-13'
  const nextMonth = '2020-04-12'

  const calendar =  new Calendar('one@example.com');
  calendar._date = new Date('2020-03-12T01:00');
  
  const meeting1 = new Meeting(yesterday, '10:00');
  const meeting2 = new Meeting(today, '10:00');
  const event1 = new Event(today, '10:25');
  const event2 = new Event(tomorrow, '10:25');
  const reminder1 = new Event(today, '00:30');
  const reminder2 = new Event(nextMonth, '10:25');

  it('addEntry add different type of entries', () => {
    expect(calendar._entries.length).toBe(0);
    calendar.addEntry(meeting1);
    expect(calendar._entries.length).toBe(1);
    calendar.addEntry(event1);
    expect(calendar._entries.length).toBe(2);
    calendar.addEntry(reminder1);
    expect(calendar._entries.length).toBe(3);
  });

  it('removeEntry delete given entry from list of entries', () => {
    calendar._entries = [meeting1, event1, reminder1];
    expect(calendar._entries.length).toBe(3);
    calendar.removeEntry(meeting1);
    expect(calendar._entries.length).toBe(2);
    calendar.removeEntry(reminder1);
    expect(calendar._entries.length).toBe(1);
    calendar.removeEntry(event1);
    expect(calendar._entries.length).toBe(0);
  });

  it('getTodayEntries return only entries for today', () => {
    calendar._entries = [meeting1, meeting2, event1, event2, reminder1, reminder2];
    expect(calendar._entries.length).toBe(6);
    
    let todayEntries = calendar.getTodayEntries();
    expect(todayEntries.length).toBe(2);
  });

  it('getThisWeekEntries return only entries for this Week', () => {
    calendar._entries = [meeting1, meeting2, event1, event2, reminder1, reminder2];
    expect(calendar._entries.length).toBe(6);

    let weekEntries = calendar.getThisWeekEntries();
    expect(weekEntries.length).toBe(3);
    expect(weekEntries.includes(reminder1)).not.toBeTruthy()
  });

  it('getEntryByLevel returns null if not found', () => {
    let label = 'Meeting 1';
    event2.label = label;
    calendar._entries = [meeting1, meeting2, event1, reminder1, reminder2];
    expect(calendar._entries.length).toBe(5);

    let entry = calendar.getEntryByLabel(label)
    expect(entry).not.toBeDefined();
  });
});
