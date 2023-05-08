import { useState } from 'react';

const useForm = ({ onSubmit, initialState }) => {
  const [state, setState] = useState(initialState);

  const handleChange = ({ target }) => {
    let { name, value } = target;

    setState(prevState => ({
      ...prevState,
      [name]: String(value),
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(state);

    setState(initialState);
  };
  return { state, handleChange, handleSubmit };
};

export default useForm;
