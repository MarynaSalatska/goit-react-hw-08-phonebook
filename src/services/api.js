import axios from 'axios';
axios.defaults.baseURL = 'https://63fcab068ef914c5559ca25b.mockapi.io';

export const fetchContacts = async () => {
  const { data } = await axios.get('contacts');
  return data;
};

export const addContacts = async ({ name, number }) => {
  const { data } = await axios.post(`/contacts`, { name, number });
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  console.log(data);
  return data;
};
