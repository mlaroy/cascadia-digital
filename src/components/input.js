import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { value, name, changeHandler, label, isEmpty, type = 'text', placeholder } = this.props;
    return (
      <div className="form-field mb-4">
        <label className="block mb-1 text-sm">
          {label}
          <input className="mt-1" placeholder={placeholder} name={name} type={type} id={name} value={value} onChange={(e) => changeHandler(e.target.value)} />
        </label>
        {isEmpty && (
          <span className="text-sm text-red">This field is requred</span>
        )}
      </div>
    );
  }
}

export default Input;
