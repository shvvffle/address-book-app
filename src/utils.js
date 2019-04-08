import axios from 'axios';

export function getRandomUsers(params) {
  let url;
  if (params) {
    url = 'https://randomuser.me/api/?results=50&nat=' + params;
  } else {
    url = 'https://randomuser.me/api/?results=50';
  }
  return axios.get(url);
}
