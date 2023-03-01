import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRegister } from 'redux/auth/auth';
import css from './Form.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userMap = {
    name: setName,
    email: setEmail,
    password: setPassword,
  };
  const handleChange = e => {
    const { name, value } = e.target;
    userMap[name](value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      userRegister({
        name,
        email,
        password,
      })
    );
    e.target.reset();
  };
  return (
    <>
      <h3>Сторінка реєстрації</h3>
      <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
        <label className={css.label} label="Name">
          Name
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label className={css.label} label="Email">
          Email
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label className={css.label} label="Password">
          Password
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <button type="submit">Signup</button>
      </form>
    </>
  );
}

// <div>
//   <h1>сторінка реєстрації</h1>

// </div>;

//  {
/* <form
        onSubmit={handleSubmit}
        className={''.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          onChange={handleChange}
        />
        <Stack spacing={2} direction="row">
          <Button variant="contained">Signup </Button>
        </Stack>
      </form> */
//  }
