import { useState } from 'react';
import { gifApi } from '../apis/gifApi';
import { GifData } from '../interfaces/index';

const initialState = {
  gifs: [],
  isLoading: true,
}

const useGif = () => {
  const [state, setState] = useState<GifData>(initialState);

  const fetchGifs = async (search: string) => {
    const { data } = await gifApi.get('', {
      params: {
        q: encodeURI(search)
      }
    });
    const gifs = data.data.map((img: any) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      };
    });
    setState({ gifs, isLoading: false });
  }

  return {
    gifs: state.gifs,
    isLoading: state.isLoading,
    fetchGifs,
  };
};

export default useGif;