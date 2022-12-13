const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

function distributeGifts(packOfGifts, reindeers) {
  let sumGifts = 0
  let sumReins = 0
  const pack = packOfGifts.map(gift => gift.length)
  const reins = reindeers.map(rein => rein.length)

  for(let i of pack) sumGifts+=i
  for(let i of reins) sumReins += (i * 2)
  
  return Math.trunc(sumReins / sumGifts)
}

distributeGifts(packOfGifts, reindeers) // 2