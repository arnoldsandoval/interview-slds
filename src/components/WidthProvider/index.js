import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Button, ButtonGroup } from 'aui'
import './style.scss'

class WidthProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      layout: 'full'
    }
  }

  render() {
    const { children } = this.props

    const classes = classNames({
      'width-provider': true,
      [`layout-${this.state.layout}`]: true
    })

    return (
      <div className={classes}>
        {children}
        <ButtonGroup
          label="Change shopping list container width"
          className="flex justify-center">
          <Button onClick={() => this.setState({ layout: 'sm' })} theme="brand">
            Small
          </Button>
          <Button onClick={() => this.setState({ layout: 'md' })} theme="brand">
            Medium
          </Button>
          <Button
            onClick={() => this.setState({ layout: 'full' })}
            theme="brand">
            Full
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}

WidthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default WidthProvider
