import axios, { AxiosInstance } from 'axios';

export const gifApi: AxiosInstance = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/search?api_key=wJQe0qdkB1vOyziQ8FcQvFUiZlLXoIRI&limit=12'
});