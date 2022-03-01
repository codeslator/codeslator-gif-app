import { useState, FormEvent, SyntheticEvent } from 'react';
import { AddCategoryProps } from '../interfaces/index';

export const AddCategory = ({ categories, setCategories }: AddCategoryProps) => {
  const [value, setValue] = useState<string>('');

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setCategories((prev: string[]) => [...prev, value])
    console.log(categories)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Search Category</h2>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Category"
              id="category"
              value={value}
              onChange={handleInput}
            />
          </div>
          <div className="col-3">
            <button className="btn btn-primary btn-full" type="submit">Submit</button>
          </div>
        </div>
      </form>
    </>
  )
}
