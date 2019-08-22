import {Event} from './Event.js';
import {Reminder} from './Reminder.js';

describe('Event', () => {
  const event = new Event('2020-03-12', '10:25');
  const reminder = new Event('2020-03-12', '10:00');
  
  it('set reminder', () => {
    expect(event._reminder).not.toBeDefined()
    event.reminder = reminder;
    expect(event._reminder).toBeDefined()
  });

  it('set reminder', () => {
    event.reminder = reminder;
    expect(event.reminder).toBe(reminder);
  });
});
