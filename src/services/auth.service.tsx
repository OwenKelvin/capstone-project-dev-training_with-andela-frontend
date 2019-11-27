import { apiLink } from '../config/api.config';
import fetch from 'cross-fetch';

export interface ICredentials {
  email: string,
  password: string
}
const AuthService = {
  getToken(): string {
    if (localStorage && localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user') as string).token;
    }

    return '';
  },

  async authenticate(data = {}) {
    const url = `${apiLink}/auth/signin`;
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      referrer: 'no-referrer',
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  async loggedInUser(): Promise<any> {
    const url = `${apiLink}/auth/user`;
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AuthService.getToken()}`
      },
      referrer: 'no-referrer',
    });
    return await response.json();
  }
}
export default AuthService;
