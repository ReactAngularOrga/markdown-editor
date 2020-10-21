import React, { Fragment } from 'react'

const Membre = ({ name, children }) => {
    return (
        <Fragment>
          <h2>Membre : {name.toUpperCase()}</h2>
          <div>{ children }</div>
        </Fragment>

    )
}

export default Membre