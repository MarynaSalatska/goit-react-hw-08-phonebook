import { $privateHost } from 'redux/auth/loginApi';

export const fetchContacts = async () => {
  const { data } = await $privateHost.get('/contacts');
  return data;
};

export const addContacts = async ({ name, number }) => {
  const { data } = await $privateHost.post(`/contacts`, { name, number });
  return data;
};

export const deleteContact = async contactId => {
  const { data } = await $privateHost.delete(`/contacts/${contactId}`);
  console.log(data);
  return data;
};

// export const token = {
//   set: (token, token_type) => {
//     $privateHost.defaults.headers.common.Authorization = `${token_type} ${token}`;
//   },
//   unSet: () => {
//     $privateHost.defaults.headers.common.Authorization = '';
//   },
// };

//