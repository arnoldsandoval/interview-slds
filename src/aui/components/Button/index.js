import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.scss'

const Button = ({
  children,
  className,
  theme,
  size,
  layout,
  onClick,
  disabled
}) => {
  const classes = classNames({
    button: true,
    [`theme-${theme}`]: true,
    [`size-${size}`]: true,
    [`layout-${layout}`]: layout,
    [`${className}`]: className
  })

  return (
    <button disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  theme: 'default',
  size: 'md',
  outline: false
}

Button.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  theme: PropTypes.oneOf(['link', 'brand']).isRequired,
  layout: PropTypes.oneOf(['full']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
