import {Entry} from './Entry.js';

describe('Entry constructor', () => {
  it('create a Entry object with a given date', () => {
    const entry = new Entry('2020-03-12', '10:25');
    expect(entry._date).toBeDefined();
  });
});

describe('Entry setters', () => {
  let entry = new Entry('2020-03-12', '10:25');

  function checkInitialState() {
    entry = new Entry('2020-03-12', '10:25');
    expect(entry._date.getFullYear()).toBe(2020);
    expect(entry._date.getHours()).toBe(10);
    expect(entry._label).not.toBeDefined();
    expect(entry._interval).not.toBeDefined();
    expect(entry._repeat).not.toBeDefined();
  }

  it('date set date using time from existing date', () => {
    checkInitialState();
    entry.date = '2021-03-12';
    expect(entry._date.getFullYear()).toBe(2021);
    expect(entry._date.getHours()).toBe(10);
  });

  it('time set time using date from existing data', () => {
    checkInitialState();
    entry.time = '01:00';
    expect(entry._date.getHours()).toBe(1);
    expect(entry._date.getFullYear()).toBe(2020);
  });

  it('label set label', () => {
    checkInitialState();
    entry.label = 'A special day';
    expect(entry._label).toBeDefined();
  });  

  it('repeat set repeat', () => {
    checkInitialState();
    entry.repeat = true;
    expect(entry._repeat).toBeDefined();
  });

  it('interval set interval', () => {
    checkInitialState();
    entry.interval = 'daily';
    expect(entry._interval).toBeDefined();
  });
});

describe('Entry getters', () => {
  const entry = new Entry('2020-03-12', '10:25');

  function setInitialState() {
    entry.label = 'A special day';
    entry.interval = 'monthly';
    entry.repeat = true;
  }

  it('date get date as string', () => {
    setInitialState();
    expect(entry.date).toBe('2020-03-12');
  });

  it('time get time as string', () => {
    setInitialState();
    expect(entry.time).toBe('10:25');
    entry.time = '01:00'
    expect(entry.time).toBe('01:00');
  });

  it('label get label', () => {
    setInitialState();
    expect(entry.label).toBe('A special day');
  });  

  it('repeat get repeat', () => {
    setInitialState();
    expect(entry.repeat).toBe(true);
  });

  it('interval set interval', () => {
    setInitialState();
    expect(entry.interval).toBe('monthly');
  });
});


