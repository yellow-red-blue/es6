export function diffElement (arr1 :(number | string | boolean) [], arr2 :(number | string | boolean)[]) :any []{
  let arr = []
  let arrSame = arr1.filter((el) => {
    return arr2.indexOf(el) !== -1
  })
  let unquireOne = arr1.filter(el => {
    return arr2.indexOf(el) === -1
  })
  let unquireTwo = arr2.filter(el => {
    return arr1.indexOf(el) === -1
  })
  let diffEl = [...unquireOne, ...unquireTwo]
  let sameArr = [...new Set([...arr1, ...arr2])]
  let sArr = []
  let allArr = [...arr1, ...arr2]
  allArr.forEach(el => {
    if (sArr.indexOf(el) === -1) {
      sArr.push(el)
    }
  })
  return arr
}
const s = diffElement([1,3,4, 8], [])

export function addZero(num: number | string) : string{
  const str = num.toString()
  return str[1] ? str : `0${str}`
}
export function addZero1(num: number | string) : string {
  const str = num.toString()
  return str.padStart(2, '0')
}
export function getUrlParams(paramName: string, url?: string) :string {
  const localUrl = url || window.location.href
  const arr = localUrl.split('?')[1].split('&')
  let obj = {}
  arr.forEach(el => {
    const key = el.split('=')[0]
    const val = el.split('=')[1]
    obj[key] = val
  })
  return obj[paramName]

}
addZero('80')
