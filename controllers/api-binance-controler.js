// const Binance = require("binance-api-node").default;
const { scalePrice } = require('../helpers/linearScaling.js');
const { buildBinaceApiUrl } = require('../helpers/buildBinApiUrl.js');

const getBinanceData = async (_req, res) => {
  // const client = Binance();
  try {
    const url = buildBinaceApiUrl(730, 1, 701);
    const dataBinance = await fetch(url).then((res) => res.json())
    const quoteList = dataBinance.data.body.data.quotes;
    const minPriceObj = quoteList.reduce(
      (min, obj) => obj.quote.USD.price < min.quote.USD.price ? obj : min, 
      quoteList[0]
    );
    const maxPriceObj = quoteList.reduce(
      (max, obj) => obj.quote.USD.price > max.quote.USD.price ? obj : max, 
      quoteList[0]
    );
    const minPrice = minPriceObj.quote.USD.price;
    const maxPrice = maxPriceObj.quote.USD.price;
    
    quoteList.forEach(item => {
      item.quote.USD.price = scalePrice(item.quote.USD.price, minPrice, maxPrice, newMin = 1000, newMax = 10000);
    });
    
    res.status(200).json(dataBinance);
  } catch (error) {
    res.status(400).json({ message: "Data not found", err: error });
  }
};

module.exports = { getBinanceData };
