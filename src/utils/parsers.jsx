export const converTimeToLima = (timestamp) => {
  const date = new Date(timestamp)
  const options = { timeZone: 'America/Lima', month: 'short', day: 'numeric', year: 'numeric'}
  const [day, month, year] = (new Intl.DateTimeFormat("es-ES", options).format(date)).split(" ")
  return `${month.charAt(0).toUpperCase()+month.slice(1)} ${day} del ${year}`
}

export default converTimeToLima