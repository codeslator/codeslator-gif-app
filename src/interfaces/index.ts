import { Dispatch, SetStateAction } from 'react'

export interface AddCategoryProps {
  categories: string[],
  setCategories: Dispatch<SetStateAction<string[]>>
}

export type GifGridProps = {
  category: string;
}