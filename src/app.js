import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import axios from 'axios'
import 'bulma'
import './style.scss'

import CatsIndex from './components/cats/CatsIndex'
import CatsShow from './components/cats/CatsShow'
import CatsNew from './components/cats/CatsNew'
import NavBar from './components/common/NavBar'
import Home from './Home'

class App extends React.Component {
  constructor() {
    super()

    this.state = {

    }
  }

  componentDidMount() {
    axios.get('/api/cats')
      .then(res => this.setState({ cats: res.data }))
  }


  render() {
    return(
      <BrowserRouter>
        <main>
          <NavBar />
          <Switch>
            <Route path="/cats/new" component={CatsNew} />
            <Route path="/cats/:id" component={CatsShow} />
            <Route path="/cats" component={CatsIndex} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
