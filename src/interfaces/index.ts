import { Dispatch, SetStateAction } from 'react'

export interface AddCategoryProps {
  categories: string[],
  setCategories: Dispatch<SetStateAction<string[]>>
}

export type GifGridProps = {
  category: string;
};

export interface GifGridItemProps {
  gif: Gif;
}

export type Gif = {
  id: string;
  title: string;
  url: string;
}

export type GifData = {
  gifs: Gif[],
  isLoading: boolean;
}