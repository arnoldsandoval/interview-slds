export const sumOfArrayObjectKeys = (array, objKey) =>
  array.reduce((sum, obj) => {
    return sum + obj[objKey]
  }, 0)

// I have no idea what to call this
export const multiplier = (array, objKey1, objKey2) =>
  array.reduce((sum, obj) => {
    return sum + obj[objKey1] * obj[objKey2]
  }, 0)

export const integerToCurrency = (
  amount,
  currency = 'USD',
  locale = 'en-US'
) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0
  })

  return formatter.format(amount)
}
