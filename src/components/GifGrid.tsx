import { useEffect } from 'react';
import { GifGridProps } from '../interfaces/index';
import useGif from '../hooks/useGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }: GifGridProps) => {
  const { fetchGifs, gifs, isLoading } = useGif();

  useEffect(() => {
    fetchGifs(category)
  }, [category, fetchGifs])

  return (
    <>
      <h3 className="mb-3">{category}</h3>
      <div className="row">
        {isLoading && (
          <h4 className="text-center">Loading...</h4>
        )}
        {gifs.map((gif) => (
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <GifGridItem key={gif.id} gif={gif} />
          </div>
        ))}
      </div>
    </>
  )
}
