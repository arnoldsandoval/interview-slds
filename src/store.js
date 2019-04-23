import React from 'react'
import PropTypes from 'prop-types'
import { sumOfArrayObjectKeys, multiplier } from 'utils'
import { cart } from 'data'

export const Store = React.createContext()

const initialState = cart

function reducer(state, action) {
  let items

  switch (action.type) {
    case 'RESET_ITEMS':
      return initialState
    case 'ITEM_REMOVE':
      items = state.items.filter(item => item.id !== action.payload.id)
      return {
        ...state,
        items,
        count: sumOfArrayObjectKeys(items, 'units'),
        subtotal: multiplier(items, 'costPerUnit', 'units')
      }
    case 'ITEM_UPDATE_UNITS':
      items = state.items.map(item => {
        const { units } = action.payload
        if (item.id === action.payload.id) {
          return {
            ...item,
            units
          }
        }
        return item
      })

      return {
        ...state,
        count: sumOfArrayObjectKeys(items, 'units'),
        subtotal: multiplier(items, 'costPerUnit', 'units'),
        items
      }
    default:
      return state
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { state, dispatch }

  return <Store.Provider value={value}>{children}</Store.Provider>
}

StoreProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
