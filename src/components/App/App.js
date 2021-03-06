import React, { PropTypes } from 'react'

const App = ({...props}) => {
  return (
    <div className={'container'}>
        {props.children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
