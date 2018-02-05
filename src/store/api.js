import fetch from '@/utils/fetch'

export let login = function (data) {
  return fetch({
    url: 'user/login',
    method: 'post',
    type: 'formData',
    data
  })
}
