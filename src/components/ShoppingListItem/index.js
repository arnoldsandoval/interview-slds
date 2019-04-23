import React from 'react'
import { Button, Avatar, InputSelect, Icon } from 'aui'
import { integerToCurrency } from 'utils'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './style.scss'

const ShoppingListItem = ({
  layout,
  onItemRemove,
  onItemUpdateUnits,
  quantityOptions,
  item
}) => {
  const classes = classNames({
    'shopping-list-item': true,
    [`layout-${layout}`]: layout
  })

  return (
    <div className={classes} role="row">
      <div role="rowgroup">
        <div className="product-name" role="cell">
          <Avatar
            src="https://via.placeholder.com/48x48"
            srcSet="https://via.placeholder.com/48x48 1x, https://via.placeholder.com/96x96 2x"
            alt={`Descriptive text for ${
              item.name
            }, the text should describe convey image content and or context. The placeholder does neither.`}
            className="product-image"
          />
          <div className="text-truncate">
            <strong>{item.name}</strong>
            <div>In Stock</div>
          </div>
        </div>
        <div className="product-cost" role="cell">
          <strong>{integerToCurrency(item.costPerUnit)}</strong>
        </div>
        <div className="product-action-remove" role="cell">
          <Button
            onClick={() => onItemRemove(item)}
            theme="link"
            size="sm"
            className="text-lowercase label-text-remove">
            <Icon className="bg-brand" glyph="delete" />
            <span>Remove</span>
          </Button>
        </div>
        <div className="product-action-units" role="cell">
          <InputSelect
            onChange={selectedUnits => onItemUpdateUnits(item, selectedUnits)}>
            {quantityOptions(item.unitsAvailable)}
          </InputSelect>
        </div>
      </div>
    </div>
  )
}

ShoppingListItem.propTypes = {
  layout: PropTypes.oneOf(['expanded', null]),
  onItemRemove: PropTypes.func.isRequired,
  onItemUpdateUnits: PropTypes.func.isRequired,
  quantityOptions: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

export default ShoppingListItem
