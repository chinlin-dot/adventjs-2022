// UNA CAJA DENTRO DE OTRA CAJA Y OTRA...

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

function fitsInOneBox(boxes) {
  return boxes.sort((a,b)=>a.l-b.l).every((box, i) =>{
    if(i === boxes.length-1) return true
    const nextBox = boxes[i+1]
    const boxi = box.l < nextBox.l && box.w < nextBox.w && box.h < nextBox.h
    return boxi
  })
}

fitsInOneBox(boxes) // false