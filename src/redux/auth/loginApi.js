import axios from "axios";

const $publicHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const $privateHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export async function login(credential) {
  const { data } = await $publicHost.post('/users/login', credential);
  return data;
}
