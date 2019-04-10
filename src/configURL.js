let API_URL
if (process.env["NODE_ENV"] === "development") {
  API_URL = "http://localhost:3001"
}else{
  API_URL = "https://arcus-color-palette-api.herokuapp.com"
}

export default API_URL
