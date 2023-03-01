import axios from "axios";


const $publicHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const $privateHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export async function register(credential) {
  const { data } = await $publicHost.post('/users/signup', credential);
  return data;
}

export const token = {
  set: (token, token_type) => {
    $privateHost.defaults.headers.common.Authorization = `${token_type} ${token}`;
  },
  unSet: () => {
    $privateHost.defaults.headers.common.Authorization = '';
  },
};