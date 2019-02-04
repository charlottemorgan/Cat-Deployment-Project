import React from 'react'
import axios from 'axios'


import CatForm from './CatForm'

class CatsNew extends React.Component {
  constructor() {
    super()

    this.state = {
      cats: {
        name: '',
        age: '',
        color: '',
        image: '',
        gender: '',
        breed: ''
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name,value } }) {
    const cats = {...this.state.cats, [name]: value }
    this.setState({ cats })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios
      .post('/api/cats', this.state.cats, {
      })
      .then(() => this.props.history.push('/cats'))
      .catch(err => this.setState({ errors: err.response.cats.errors }))
  }

  render() {

    return(
      <main className="section">
        <div className="container">
          <CatForm
            cats={this.state.cats}
            errors={this.state.errors}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </main>
    )
  }
}




export default CatsNew
