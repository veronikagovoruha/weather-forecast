import { useState } from 'react';

import useForm from '../../../shared/hooks/useForm';

import { initialState } from './initialState';
import { fields } from './fields';

const WeatherSearchForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(({ id, name, value, type, placeholder, required }) => (
        <input
          key={id}
          name={name}
          value={state[value]}
          type={type}
          placeholder={placeholder}
          required={required}
          onChange={handleChange}
        />
      ))}
      <button type="submit">Search</button>
    </form>
  );
};

export default WeatherSearchForm;

/**
 * <input 
                onChange={handleChange}
                name='search'
                value={state.search}
                type="text"
                placeholder="Search"
                required
            /> */
