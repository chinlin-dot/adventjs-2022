const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

function wrapping(gifts) {
  return gifts.map(item => `${'*'.repeat(item.length+2)}\n*${item}*\n${'*'.repeat(item.length+2)}`)
}


console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */
