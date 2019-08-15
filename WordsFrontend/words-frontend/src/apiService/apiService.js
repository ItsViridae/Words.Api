import Api from './api';

export default {
  login (url) {
    return Api().get(url)
  },
  get (url) {
    return Api().get(url)
  },
  post (url, data, options) {
    if (!options) {
      return Api().post(url, data, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
    } else {
      return Api().post(url, data, options)
    }
  },
  add (url, data) {
    return Api().post(url, data)
  },
  edit (url, data) {
    return Api().put(url, data)
  },
  delete (url, data) {
    return Api().delete(url, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: data
    })
  }
}
