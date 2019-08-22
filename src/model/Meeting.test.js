import {Meeting} from './Meeting.js';

describe('Meeting', () => {
  const meeting = new Meeting('2020-03-12', '10:00');

  const attendees = ['one@example.com',
                     'two@example.com',
                     'three@example.com',
                     'four@example.com',
                     'five@example.com']

  it('addAttendee adds email to the list', () => {
    expect(meeting._attendees.length).toBe(0);
    meeting.addAttendee('attendee@example.com')
    expect(meeting._attendees.length).toBe(1);
  });

  it('addAttendee does not add an existing email', () => {
    meeting._attendees = [];
    expect(meeting._attendees.length).toBe(0);
    meeting.addAttendee('attendee@example.com')
    expect(meeting._attendees.length).toBe(1);
    meeting.addAttendee('attendee@example.com')
    expect(meeting._attendees.length).toBe(1);
  });

  it('removeAttendee delete email from the list', () => {
    meeting._attendees = attendees;
    expect(meeting._attendees.length).toBe(5);
    meeting.removeAttendee('three@example.com');
    expect(meeting._attendees.includes('three@example.com')).toBeFalsy();
    meeting.removeAttendee('one@example.com');
    expect(meeting._attendees.includes('one@example.com')).toBeFalsy();
    meeting.removeAttendee('five@example.com');
    expect(meeting._attendees.includes('five@example.com')).toBeFalsy();
    expect(meeting._attendees.length).toBe(2);
  });

  it('removeAttendee does not modify list if email is not included', () => {
    meeting._attendees = attendees;
    expect(meeting._attendees.length).toBe(5);
    meeting.removeAttendee('six@example.com');
    expect(meeting._attendees.length).toBe(5);
  });

  it('sendInvites execute email sending function for each attendee', () => {
    const email = jest.fn();
    meeting.sendInvites(email);
    expect(email).toHaveBeenCalled();
  });

  it('attendees getter return list of attendees', () => {
    meeting._attendees = [];
    expect(meeting.attendees.length).toBe(0);
    meeting._attendees = attendees;
    expect(meeting.attendees.length).toBe(5);
  });
});
