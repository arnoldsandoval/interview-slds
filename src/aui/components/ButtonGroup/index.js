import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const ButtonGroup = ({ children, label, className }) => {
  return (
    <div
      role="group"
      aria-label={label}
      className={`button-group ${className}`}>
      {children}
    </div>
  )
}

ButtonGroup.defaultProps = {
  children: false
}

ButtonGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  label: PropTypes.string.isRequired
}

export default ButtonGroup
