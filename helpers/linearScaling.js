function scalePrice(originalPrice, originalMin, originalMax, newMin = 10, newMax = 100) {
  /* Линейное масштабирование (переменные)
   *  - originalPrice — исходная цена (любая цена из массива объектов)
   *  - originalMin — минимальная цена в исходном наборе данных (минимальная цена из массива объектов). 
   *  - originalMax — максимальная цена в исходном наборе данных (максимальная цена из массива объектов). 
   *  - newMin — минимальная цена целевого диапазона ($1,000). 
   *  - newMax — максимальная цена целевого диапазона ($10,000). 
   *  - newPrice — масштабированная цена, которая будет находиться в диапазоне [$1,000, $10,000]. 
   */

  // console.log('this min: ', originalMin);
  

  return ((originalPrice - originalMin) * (newMax - newMin)) / (originalMax - originalMin) + newMin;
}

module.exports = { scalePrice }