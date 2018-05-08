export const starWarsData = async (category) => {
  const url = `https://swapi.co/api/${category}/`
  const randomNumber = Math.floor((Math.random() * 6) + 1)
  const fetchData = await fetch(url)
  // console.log( fetchData )
  const response = await fetchData.json()
  return response
}