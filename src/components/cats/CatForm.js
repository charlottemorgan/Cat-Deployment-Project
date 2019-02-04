import React from 'react'

const CatForm = ({ cats, handleChange, handleSubmit }) => {
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
      </div>
      <div className="field">
        <label className="label">Age</label>
        <div className="control">
          <input
            className="input"
            placeholder="Age"
            name="age"
            onChange={handleChange}
            value={cats.age}
          />
        </div>
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
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <textarea
            className="input"
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
            className="input"
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
            className="input"
            placeholder="Breed"
            name="breed"
            onChange={handleChange}
            value={cats.breed}
          />
        </div>
      </div>

      <button className="button">Submit</button>
    </form>
  )
}

export default CatForm
