function addZero (num, n) {
  num += ''
  return Array(n > num.length ? (n - num.length + 1) : 0).join(0) + num
}
function pad (x) {
  return (x < 10) ? '0' + x : x
}

export default { addZero, pad }
