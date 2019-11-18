import { apiLink } from '../config/api.config';
import fetch from 'cross-fetch';
import AuthService from './auth.service';

export interface ICredentials {
  email: string,
  password: string
}
const FeedService = {
  async getAllFeeds() {
    console.log(AuthService.getToken());
    const url = `${apiLink}/feed`;
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' +  AuthService.getToken()
      },
      referrer: 'no-referrer',
    });
    return await response.json();
  }
}
export default FeedService;
