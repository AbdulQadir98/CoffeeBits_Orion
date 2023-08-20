import React from 'react';

const ToDropdown = ({ value, onChange }) => (
  <select id="to" name="to" value={value} onChange={onChange}>
    <option value="Earth">Earth</option>
    <option value="Venus">Venus</option>
    <option value="Saturn">Saturn</option>
    <option value="Moon">Moon</option>
  </select>
);

export default ToDropdown;
