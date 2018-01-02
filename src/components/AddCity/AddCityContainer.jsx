import AddCity from './AddCity'
import {connect} from 'react-redux'
import {setCityAction} from '../../reducers/cityReducer'

const mapDispatchToProps = (dispatch) => {
  return {
    getWeatherForCity (city) {
      return dispatch(setCityAction(city))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddCity)
