// Objective
// Build a reusable dropdown component in React. This component should allow users to select an item from a list. The dropdown should:

// Display a placeholder when no item is selected.
// Allow the user to click on the dropdown to see a list of options.
// Close the dropdown when an item is selected or the user clicks outside of it.
// Call a callback function when an item is selected, passing the selected item as an argument.
// Be accessible, including keyboard navigation (e.g., use Tab and Enter).

// Requirements
// Props for the Component:

// options: An array of strings representing the dropdown options.
// onSelect: A callback function that is triggered when an option is selected.
// placeholder: A string for the placeholder text.
// Functionalities:

// Open/close the dropdown when clicked.
// Highlight options using arrow keys and select using Enter.
// Close the dropdown when clicking outside or pressing Escape.
// Accessibility Features:

// Use proper ARIA roles (e.g., role="listbox" for the dropdown, role="option" for items).
// Ensure keyboard accessibility.

import { useState } from 'react';


export const DropDown = ({options, onSelect, placeholder}) => {
  console.log(options);
  return (
    <div>
      <label htmlFor="dropdown">DropDown</label>
      <select role="listbox" name="dropdown" onChange={onSelect}>
        <option role="option" value={placeholder}>{placeholder}</option>
        {options.map(option => {
          return <option role="option" value={option}>{option}</option>
        })}
      </select>
    </div>
  )
}