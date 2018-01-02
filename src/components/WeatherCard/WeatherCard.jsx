import React, {PropTypes} from 'react'

const WeatherCard = (props) => {
  const city = props.children
  return (
    <div>
      <h2>{city.name}</h2>
      <p>The temperature is {city.main.temp} with a humidity of {city.main.humidity}.</p>
    </div>
  )
}

WeatherCard.propTypes = {
  children: PropTypes.object
}

export default WeatherCard
