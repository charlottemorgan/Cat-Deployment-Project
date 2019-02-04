import React from 'react'
import { Link } from 'react-router-dom'

const CatCard = ({ _id, name, age, image, breed }) => {
  return(
    <div className="card">
      <Link to={`/cats/${_id}`}>
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>
        <div className="card-image">
          <figure className="image" style={{ backgroundImage: `url(${image})`}} />
        </div>
        <div className="card-content">
          <div className="content">
            <p><strong>Breed: </strong>{breed}</p>
            <p><strong>Age: </strong>{age}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CatCard
