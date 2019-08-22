import {Reminder} from './Reminder.js';

describe('Reminder', () => {
  const reminder = new Reminder('2020-03-12', '10:00');
  
  it('set note', () => {
    expect(reminder._note).not.toBeDefined();
    reminder.note = "Special day";
    expect(reminder._note).toBeDefined();
  });

  it('get note', () => {
    reminder.note = "Special day";
    expect(reminder.note).toBe("Special day");
  });
});
