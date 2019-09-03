// @flow

import React, { Component } from 'react';

type InputProps = 
  { value : string, 
    onChange : (SyntheticEvent<HTMLInputElement>)=>void, 
    label : string
  }

function Input(props : InputProps) { 
  const { value, onChange, label} = props;

  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <input 
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

type CheckboxProps = 
  { value : boolean, 
    onChange : (SyntheticEvent<HTMLInputElement>)=>void, 
    label : string
  }

function Checkbox(props : CheckboxProps) { 
  const { value, onChange, label} = props;

  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <input 
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
    </div>
  );
}

type SelectProps = 
  { value : boolean, 
    onChange : (SyntheticEvent<HTMLSelectElement>)=>void, 
    label : string,
    options : Array<string>
  }

function Select(props : CheckboxProps) { 
  const { value, onChange, label, options} = props;

  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <select value={value} onChange={onChange}>
      { options.map((item) => (
          <option key={item} value={item}>{item}</option> 
          )
        )
      }
      </select>
    </div>
  );
}

type TextareaProps = 
  { value : string, 
    onChange : (SyntheticEvent<HTMLTextareaElement>)=>void, 
    label : string
  }

function Textarea(props : CheckboxProps) { 
  const { value, onChange, label} = props;

  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <textarea value={value} onChange={onChange} />
    </div>
  );
}

export {Input, Checkbox, Select, Textarea};
