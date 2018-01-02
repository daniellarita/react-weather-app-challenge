import axios from 'axios'
const API_KEY = 'f5704993d9e381b443d9752a9cbb2844'
const ROOT_URL = 'https://api.openweathermap.org/data/2.5/weather?q='

const SET_CITY = 'SET_CITY'

const initialState = {
  data: []
}

export default function reducer (state = initialState, action) {
  const newState = Object.assign({ }, state)
  switch (action.type) {
    case SET_CITY:
      const newListOfCities = state.data.concat([action.city])
      newState.data = newListOfCities
      break
    default:
      return state
  }
  return newState
}

export const setCity = (city) => ({
  type: SET_CITY,
  city
})

export const setCityAction = (city) => {
  return (dispatch, getState) => {
    return axios.get(`${ROOT_URL}${city}&appid=${API_KEY}`)
      .then(res => {
        return dispatch(setCity(res.data))
      })
  }
}
