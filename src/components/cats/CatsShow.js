import React from 'react'
import axios from 'axios'



class CatsShow extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cat: []
    }

  }

  componentDidMount() {
    axios.get(`/api/cats/${this.props.match.params.id}`)
      .then(res => this.setState({ cat: res.data }))

  }



  render() {
    if(!this.state.cat) return null
    const { name, age, image, breed, color, gender } = this.state.cat
    return(
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{name}</h1>
          <hr />

          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={image} alt={name}/>
              </figure>
            </div>

            <div className="column">
              <h4 className="title is-4">Age: {age}</h4>
              <hr />

              <h4 className="title is-4">Breed: {breed}</h4>

              <hr />
              <h4 className="title is-4">Color: {color}</h4>

              <hr />
              <h4 className="title is-4">Gender: {gender}</h4>

              <hr />


            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CatsShow
