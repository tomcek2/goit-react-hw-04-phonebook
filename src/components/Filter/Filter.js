import React from 'react';
import css from './Filter.module.css';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <label className={css.filterLabel}>
      Find contacts by name:
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={e => onFilterChange(e.target.value)}
        placeholder="Search by name..."
      />
    </label>
  );
};
