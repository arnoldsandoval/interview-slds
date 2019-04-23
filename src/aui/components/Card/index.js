import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const Card = ({ children }) => <div className="card">{children}</div>

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
export default Card
