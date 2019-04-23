import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import ResizeObserver from 'resize-observer-polyfill'
import { Heading, Button, Icon, Card } from 'aui'
import { integerToCurrency } from 'utils'
import classNames from 'classnames'
import { ShoppingListItem } from 'components'
import { ReactComponent as IllustrationRainy } from 'images/illustration-rainy.svg'
import './style.scss'

class ShoppingList extends Component {
  constructor(props) {
    super(props)

    this.containerElement = React.createRef()

    this.state = {
      layout: null
    }
  }

  componentDidMount() {
    const element = this.containerElement.current
    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        const width = entry.contentRect.width
        if (width > 860) {
          this.setState({
            layout: 'wide'
          })
        } else {
          this.setState({
            layout: null // set to null since this component is mobile first
          })
        }
      }
    })
    // Observe one or multiple elements
    observer.observe(element)
  }

  render() {
    const {
      onReset,
      onItemRemove,
      onItemUpdateUnits,
      items,
      count,
      subtotal
    } = this.props

    const { layout } = this.state

    const quantityOptions = (unitsAvailable, max = 10) => {
      const options = []
      let index

      for (index = 1; index < max; index++) {
        if (index > unitsAvailable) {
          options.push(
            <option key={index} disabled>
              {index}
            </option>
          )
        } else {
          options.push(<option key={index}>{index}</option>)
        }
      }

      return options
    }

    const noItems = items.length === 0
    const shoppingListClasses = classNames({
      'shopping-list': true,
      'layout-wide': layout === 'wide'
    })

    const buttonLayout = layout === 'wide' ? null : 'full'
    const shoppingListItemLayout = layout === 'wide' ? 'expanded' : null

    return (
      <div ref={this.containerElement}>
        <Card>
          <Heading
            level="1"
            aria-hidden="true"
            className="shopping-list-heading">
            <Icon className="bg-brand" glyph="cart" />
            Shopping List
          </Heading>
          <div className={shoppingListClasses}>
            <div
              className="table-shopping-list"
              role="table"
              aria-label="Shopping List">
              {noItems && (
                <div className="shopping-list-empty">
                  <IllustrationRainy aria-hidden="true" />
                  <Heading level="2">
                    There are currently no items in your shopping cart
                  </Heading>
                  <Button onClick={onReset} theme="link" size="sm">
                    Continue shopping?
                  </Button>
                </div>
              )}

              {!noItems && (
                <Fragment>
                  <div
                    className={`shopping-list-item heading layout-${shoppingListItemLayout}`}
                    role="row">
                    <div role="rowgroup">
                      <span className="product-name" role="columnheader">
                        Product
                      </span>
                      <span className="product-cost" role="columnheader">
                        Price
                      </span>
                      <span
                        className="product-action-units"
                        role="columnheader">
                        Quantity
                      </span>
                    </div>
                  </div>
                  {items.map((item, index) => (
                    <ShoppingListItem
                      layout={shoppingListItemLayout}
                      key={index}
                      item={item}
                      className={shoppingListItemLayout}
                      onItemRemove={onItemRemove}
                      onItemUpdateUnits={onItemUpdateUnits}
                      quantityOptions={quantityOptions}
                    />
                  ))}
                </Fragment>
              )}
            </div>
            <div className="product-list-summary">
              <Heading level="2" className="subtotal">
                Subtotal ({count} items): {integerToCurrency(subtotal)}
              </Heading>
              <Button
                disabled={noItems}
                onClick={() => window.alert('Proceed to Checkout')}
                theme="brand"
                layout={buttonLayout}>
                Proceed to checkout
              </Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

ShoppingList.propTypes = {
  onReset: PropTypes.func.isRequired,
  onItemRemove: PropTypes.func.isRequired,
  onItemUpdateUnits: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  subtotal: PropTypes.number.isRequired
}

export default ShoppingList
