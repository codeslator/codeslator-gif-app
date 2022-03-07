import { useState } from 'react';
import { gifApi } from '../apis/gifApi';
import { Gif } from '../interfaces/index';

const useGif = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [gifs, setGifs] = useState<Gif[]>([]);

  const fetchGifs = async (search: string) => {
    setIsLoading(true);
    const { data } = await gifApi.get('', {
      params: {
        q: encodeURI(search)
      }
    });
    setIsLoading(false);
    const gifs = data.data.map((img: any) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      };
    });
    setGifs(gifs);
  }

  return {
    gifs,
    isLoading,
    fetchGifs,
  };
};

export default useGif;