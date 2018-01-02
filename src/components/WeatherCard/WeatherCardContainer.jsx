import WeatherCard from './WeatherCard'
import {connect} from 'react-redux'

const (props) =>

const mapStateToProps = (state) => {
  return {
    city: state.city.data
  };
};

export default connect(mapStateToProps)(WeatherCard)
