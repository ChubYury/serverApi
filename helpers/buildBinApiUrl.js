const calculateTimeStart = (hoursBack) => {
  const nowDate = new Date();
  const timeStartDate = new Date(nowDate.getTime() - hoursBack * 60 * 60 * 1000);
  console.log(Math.floor(timeStartDate.getTime() / 1000));
  
  return Math.floor(timeStartDate.getTime() / 1000);
};

const buildBinaceApiUrl = (hoursBack, interval, count) => {
  const timeStart = calculateTimeStart(hoursBack);

  return `https://www.binance.com/bapi/composite/v1/public/promo/cmc/cryptocurrency/quotes/historical?id=1&time_start=${timeStart}&interval=${interval}h&count=${count}`
};

module.exports = { buildBinaceApiUrl };