import React from 'react';

const FromDropdown = ({ value, onChange }) => (
  <select id="from" name="from" value={value} onChange={onChange}>
    <option value="Earth">Earth</option>
    <option value="Venus">Venus</option>
    <option value="Saturn">Saturn</option>
    <option value="Moon">Moon</option>
  </select>
);

export default FromDropdown;
