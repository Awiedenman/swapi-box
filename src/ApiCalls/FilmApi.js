
export const filmCrawl = async ( ) => {
  const url = 'https://swapi.co/api/films/1'
  const fetchData = await fetch( url )
  // console.log( fetchData )
  const response = await fetchData.json()
  return {
    Title: response.title,
    Date: response.release_date,
    Crawl: response.opening_crawl
  }
}
