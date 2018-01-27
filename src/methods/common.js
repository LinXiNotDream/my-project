function addZero (num, n) {
  num += ''
  return Array(n > num.length ? (n - num.length + 1) : 0).join(0) + num
}

export default addZero
