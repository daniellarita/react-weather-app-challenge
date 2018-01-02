import Navigation from 'react-toolbox/lib/navigation'

// Module
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class NavBar extends React.Component {
  state = {
    date: (new Date).toDateString()
  }
  render () {
    return (
      <Navigation type="horizontal">
        <Link to="/">
          <h3>Weather</h3>
        </Link>
        <h3>{this.state.date}</h3>
      </Navigation>
    )
  }
}

export default connect()(NavBar)
