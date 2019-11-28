import { apiLink } from '../config/api.config';
import fetch from 'cross-fetch';
import AuthService from './auth.service';


const ArticleService = {
  async createNew(data: any) {
    const url = `${apiLink}/articles`;
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + AuthService.getToken()
      },
      referrer: 'no-referrer',
      body: JSON.stringify(data)
    });
    return await response.json();
  },
}
export default ArticleService;
