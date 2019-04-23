import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.scss'
class InputSelect extends Component {
  handleChange = event => {
    const { onChange } = this.props
    const { value } = event.target
    onChange(value)
  }

  render() {
    const { children, className } = this.props
    const classes = classNames({
      'input-select': true,
      [`classNames`]: className
    })

    return (
      <div className="container-input-select">
        <select className={classes} onChange={this.handleChange}>
          {children}
        </select>
      </div>
    )
  }
}

InputSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string
}

export default InputSelect
