import { useEffect } from 'react';
import { GifGridProps } from '../interfaces/index';
import useGif from '../hooks/useGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }: GifGridProps) => {
  const { fetchGifs, gifs } = useGif();

  useEffect(() => {
    fetchGifs(category)
  }, [category, fetchGifs])

  return (
    <>
      <h3 className="mb-3">{category}</h3>
      <div className="row">
        {gifs.map((gif) => (
          <div className="col-2">
            <GifGridItem key={gif.id} gif={gif} />
          </div>
        ))}
      </div>
    </>
  )
}