// Module
import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import NavBar from '../NavBar/NavBar'

// File
import styles from './App.pcss'

const App = ({children}) => {
  return (
    <div className={styles.containerWrap}>
      <NavBar />
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node
}

export default connect()(App)
