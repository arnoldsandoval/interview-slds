import React from 'react'
import PropTypes from 'prop-types'

const Heading = ({ level, children, ...rest }) => {
  const H = `h${level}`
  return <H {...rest}>{children}</H>
}

Heading.propTypes = {
  level: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Heading
