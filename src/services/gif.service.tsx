import { apiLink } from '../config/api.config';
import fetch from 'cross-fetch';
import AuthService from './auth.service';


const GifService = {
  async createNew(data: any) {
    const url = `${apiLink}/gifs`;
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'multipart/form-data  ',
        Authorization: 'Bearer ' + AuthService.getToken()
      },
      referrer: 'no-referrer',
      body: JSON.stringify(data)
    });
    return await response.json();
  },
}
export default GifService;
