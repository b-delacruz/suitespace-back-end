import axios from "axios"

function getNews(req, res) {
  axios.get (`https://https://content.guardianapis.com/search?q=${req.params.search}&api-key=${process.env.NEWS_APIKEY}`)
  .then(apiResponse => {
    res.json(apiResponse.data)
  })
}

export {
  getNews
}