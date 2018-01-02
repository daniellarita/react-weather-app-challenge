// Module
import React from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'

export default class AddCity extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      city: ''
    }
  }
  handleChange = (e) => {
    this.setState({city: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getWeatherForCity(this.state.city)
  }
  render (props) {
    return (
      <form>
        <label>City:</label>
        <input onChange={this.handleChange} />
        <Link to="/">
          <button onClick={this.handleSubmit}>Submit</button>
        </Link>
      </form>

    )
  }
}

AddCity.propTypes = {
  getWeatherForCity: PropTypes.func
}
