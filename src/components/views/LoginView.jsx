// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../redux/auth';
import React, { useState } from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/auth/authOperations';
import css from './Form.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userMap = {
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
      userLogin({
        email,
        password,
      })
    )
    
    e.target.reset();
  };

  return (
    <div>
      <h3>Сторінка логіна</h3>
      <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
        <label className={css.label} label="Email">
          Email
          <input type="email" name="email" onChange={handleChange} />
        </label>

        <label className={css.label} label="Password">
          Password
          <input
            type="password"
            name="password"
            onChange={handleChange}
            minLength={7}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

// const dispatch = useDispatch();
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const handleChange = ({ target: { name, value } }) => {
//   switch (name) {
//     case 'email':
//       return setEmail(value);
//     case 'password':
//       return setPassword(value);
//     default:
//       return;
//   }
// };

// const handleSubmit = e => {
//   e.preventDefault();
//   dispatch(authOperations.logIn({ email, password }));
//   setEmail('');
//   setPassword('');
// };

/* <h2>Стторінка логіна</h2>

      <form  style={styles.form} autoComplete="off" onSubmit={handleSubmit}> 
        <label="Email"></label>
          Email
          <input
            type="email"
            name="email"
          onChange={handleChange}
          />
        

         <label="Password"></label>
          Email
          <input
            type="password"
            name="password"
          onChange={handleChange}
          />
     

        <button type="submit">Login</button>
      </form>
      <Outlet /> */
//
// {/* <form
//   className={''.root}
//   noValidate
//   autoComplete="off"
//   onSubmit={handleSubmit}
// >
//   <TextField
//     id="outlined-basic"
//     label="Email"
//     variant="outlined"
//     name="email"
//     onChange={handleChange}
//   />
//   <TextField
//     id="outlined-basic"
//     label="Password"
//     variant="outlined"
//     name="password"
//     onChange={handleChange}
//   />
//   <Stack spacing={2} direction="row">
//     <Button variant="contained">Login </Button>
//   </Stack>
// </form> */}
