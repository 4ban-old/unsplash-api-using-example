import axios from "axios";
var Twit = require("twit");

// It could be twitter API if it didn't require Authentication
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Z6FfHDTCgE7BUFGyNwok2p1tmdnLYasNdWjyI8NVaZw",
  },
});

// Twitter API doesn't work because of CORS policy that can't be resolver without backend
export const twitter = new Twit({
  consumer_key: "Q41FYXLTw8VW1lPnYUG9B197z",
  consumer_secret: "US0gS4CSwhdMlegoxftNzMoUU9KbclFgUMgkW0k8EyaL3C7pwq",
  access_token: "174792862-53XcuSDGdtTGhMEeeGPpzIerTEEL5fsF6Yia9Qei",
  access_token_secret: "1hGwmoDYo2Py44fMuCRI6BGwZlz0XzAygyU1IF6laix9R",
  timeout_ms: 60 * 1000,
});
