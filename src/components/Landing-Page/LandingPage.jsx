// Module
import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-toolbox/lib/button'
import {Link} from 'react-router'
import WeatherCard from '../WeatherCard/WeatherCard'

class LandingPage extends React.Component {

  handleAddButtonClick (e) {
    e.preventDefault()
  }
  render (props) {
    const cities = this.props.cities
    return (
      <div>
        <Link to="/add-city">
          <Button icon="add" floating />
        </Link>
        {cities.map((city, i) => {
          return (
            <WeatherCard key={i}>{city}</WeatherCard>
          )
        })
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    cities: state.city.data
  }
}

LandingPage.propTypes = {
  cities: PropTypes.array
}

export default connect(mapStateToProps)(LandingPage)
