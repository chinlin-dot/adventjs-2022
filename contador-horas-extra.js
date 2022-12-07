// NADIE QUIERE HACER HORAS EXTRAS

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.


function countHours(year, holidays) {
  const fechaCompleta = holidays.map((holiday) => `${holiday}/${year}`)

  return fechaCompleta.map((holiday) => {
    return new Date(holiday).getDay()
  }).filter((item) => item !== 0 && item !== 6).length * 2
}

console.log(countHours(year, holidays))