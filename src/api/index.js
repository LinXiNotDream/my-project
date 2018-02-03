import axios from 'axios'

// var baseUrl = 'http://192.168.0.110:3000/api'

function instance (params) {
  axios.get('http://192.168.0.110:3000/api/test/user/users')
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}

export default instance
