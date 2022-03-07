import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from './components/GifGrid';

export const CodeslatorGifApp = () => {
  const [categories, setCategories] = useState<string[]>([])

  return (
    <>
      <div className="container mt-3">
        <h1>CodesGifs App</h1>
        <AddCategory categories={categories} setCategories={setCategories} />
        <div className="mt-3">
          {categories.map((category, index) => (
            <>
              <GifGrid key={index} category={category} />
              <hr />
            </>
          ))}
        </div>
      </div>
    </>
  )
}
