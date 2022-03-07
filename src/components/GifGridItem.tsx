import { GifGridItemProps } from '../interfaces/index';

export const GifGridItem = ({ gif }: GifGridItemProps) => {
  const { title, url } = gif;
  return (
    <div className="card mb-3 animate__animated animate__fadeIn">
      <img src={url} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  )
}
