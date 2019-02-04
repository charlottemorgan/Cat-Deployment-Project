import React from 'react'

const CatForm = ({ cats, handleChange, handleSubmit, errors }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={cats.name}
          />
        </div>
        {errors.name && <small className="help is-danger">Please enter a name</small>}
      </div>
      <div className="field">
        <label className="label">Age</label>
        <div className="control">
          <input
            className="input"
            placeholder="age"
            name="age"
            onChange={handleChange}
            value={cats.age}
          />
        </div>
        {errors.name && <small className="help is-danger">Please add an age</small>}
      </div>
      <div className="field">
        <label className="label">Color</label>
        <div className="control">
          <input
            className="input"
            placeholder="Color"
            name="color"
            onChange={handleChange}
            value={cats.color}
          />
        </div>
        {errors.name && <small className="help is-danger">Please add an image</small>}
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Image"
            name="image"
            onChange={handleChange}
            value={cats.image}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Gender</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Gender"
            name="gender"
            onChange={handleChange}
            value={cats.gender}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Breed</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Breed"
            name="breed"
            onChange={handleChange}
            value={cats.breed}
          />
        </div>
      </div>

      <button className="button is-primary">Submit</button>
    </form>
  )
}

export default CatForm
