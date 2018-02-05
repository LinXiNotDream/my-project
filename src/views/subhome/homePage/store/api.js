import fetch from '@/utils/fetch'

export let getAllUsers = () => {
  return fetch({
    url: 'home/users',
    method: 'get'
  })
}
