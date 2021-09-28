# My Cryptoportfolio - Local
Website: [My Cryptoportfolio - Local](https://rene78.github.io/My-Cryptoportfolio-Local/)

A fully local web app to get an overview over your cryptoportfolio. Nobody will ever see your private portfolio information. The only external API call is to CryptoCompare to get the current crypto prices.

Obiously this app will not sync with multiple devices. If you want this feature check out the version with a database connection: [My Cryptoportfolio](https://github.com/rene78/My-Cryptoportfolio). There the user portfolios are saved anonymously in a MongoDB Atlas database.

# How-to-use

* Copy index.html to a convenient place on your hard drive.
* Edit index.html, go to line 95 and replace the demoportfolio with your own one.
  * Ticker symbols can be found at [CryptoCompare](https://www.cryptocompare.com/), [CoinGecko](https://www.coingecko.com/) or similar pages.
  * Available fiat currencies can be seen from line 126 onwards.
* Double-click index.html to display your portfolio.