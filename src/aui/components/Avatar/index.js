import React from 'react'
import classNames from 'classnames'
import './style.scss'

const Avatar = ({ src, alt, className, ...rest }) => {
  const classes = classNames({
    avatar: true,
    [`${className}`]: className
  })

  return <img className={classes} src={src} alt={alt} {...rest} />
}

export default Avatar
