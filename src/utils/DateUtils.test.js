import {DateUtils} from './DateUtils';

describe('subtractTime', () =>{
  it('subtract minutes', () => {
    let time = DateUtils.subtractTime('10:00', '00:30');
    expect(time).toBe('09:30');
  });  

  it('subtract hours', () => {
    let time = DateUtils.subtractTime('10:00', '01:30');
    expect(time).toBe('08:30');
  });  

  it('ignore bad input for time', () => { 
    // It should actually raise an error
    let time = DateUtils.subtractTime('hello', '01:30');
    expect(time).toBe('');
  });  

  it('ignore bad input for minus', () => {
    let time = DateUtils.subtractTime('10:00', 'hello');
    expect(time).toBe('10:00');
  });  
});
