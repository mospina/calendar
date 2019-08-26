import React from 'react';

const EmailForm = ({value, onChange, onSubmit, children}) =>
  <form onSubmit={onSubmit} className="email-form"> 
    <input 
      type="text"
      value={value}
      onChange={onChange} 
    />
    <button type="submit">{children}</button>
  </form>

export {EmailForm};
    
