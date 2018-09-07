const host = 'http://localhost:8081'
const url = host + '/api/seller'
// eslint-disable-next-line
const getOthers = host + '/api/others'

const $http = require('axios')

const getMsg = function (page, limit) {
  let params = {
    page: page,
    limit: limit
  }
  return $http.post(url, params)
}
export default {getMsg}
