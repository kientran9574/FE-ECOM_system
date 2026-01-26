export const formatCurrent = (currency: number) => {
  return new Intl.NumberFormat('de-DE').format(currency)
}
export const formatNumberToSocialStyle = (value: number) => {
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1
  })
    .format(value)
    .replace('.', ',')
    .toLowerCase()
}
