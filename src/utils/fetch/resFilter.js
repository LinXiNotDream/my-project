export default {
  errors (err) {
    alert(err)
    return err
  },
  interceptors (reseponse) {
    let res = reseponse.data
    if (res.code === 'LOGIN_ERROR') {
      alert(res.message)
      throw new Error(res.message)
    }
    if (!res.result) {
      alert(res.message)
      throw new Error(res.message)
    }
    return res.data
  }
}
