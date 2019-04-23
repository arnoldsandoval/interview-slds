import React from 'react'
import { ShoppingList, WidthProvider } from 'components'
import { Store } from 'store'

const App = () => {
  const { state, dispatch } = React.useContext(Store)

  const handleReset = () => {
    dispatch({
      type: 'RESET_ITEMS'
    })
  }

  const handleItemRemove = item =>
    dispatch({
      type: 'ITEM_REMOVE',
      payload: item
    })

  const handleItemUpdateUnits = (item, units) =>
    dispatch({
      type: 'ITEM_UPDATE_UNITS',
      payload: { ...item, units: Number(units) }
    })

  const { items, count, subtotal } = state

  return (
    <div id="content" role="main">
      <WidthProvider>
        <div style={{ margin: '10rem 0' }}>
          <ShoppingList
            onReset={handleReset}
            onItemRemove={handleItemRemove}
            onItemUpdateUnits={handleItemUpdateUnits}
            items={items}
            count={count}
            subtotal={subtotal}
          />
        </div>
      </WidthProvider>
    </div>
  )
}

export default App
