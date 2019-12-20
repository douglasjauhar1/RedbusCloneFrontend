
const axios = require('axios')
const instance = axios.create({
  baseURL: "http://192.168.1.16:3000/v1/redbus/"
  // headers: {'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiOTMwMDU4ZDctZmRlYi00NmNmLWFmYTUtNTgyNGE0MzViZDkxIiwidXNlcm5hbWUiOiJlcmRpbnN1aGFyeWFkaSIsImVtYWlsIjoiZXJkaW5zdWhhcnlhZGlAZ21haWwuY29tIiwibGV2ZWwiOiIxIiwiaWF0IjoxNTc0OTMzMDI4LCJleHAiOjE1NzUwMTk0Mjh9.STC3JCrWyDs672IcASBOaHUoXRkiOz4RNj_hFZSZD6k'}  
});


module.exports = {
  instance() {
    return instance
  },

  axiosGet(url, token = null) {
    instance.defaults.headers.get['Authorization'] = token
    return instance.get(url)

  },

  
  axiosPost: (url, body, token= null) => {
    console.log("Token:", token);
    instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    instance.defaults.headers.post['Authorization'] = token
    return new Promise((resolve, reject) => {
      instance.post(url, body)
        .then(result => {
          resolve(result)
        })
        .catch(error => {
          reject(error.response)
        })
    })
  },

  axiosPut: (url, body, token= null) => {
    instance.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded'
    instance.defaults.headers.put['Authorization'] = token
    return new Promise((resolve, reject) => {
      instance.put(url, body)
        .then(result => {
          resolve(result)
        })
        .catch(error => {
          reject(error.response.status)
        })
    })
  },

  axiosDelete: (url, token) => {
    // instance.defaults.headers.delete['Content-Type'] = 'application/x-www-form-urlencoded'
    return new Promise((resolve, reject) => {
      instance.delete(url, {headers: {
        'Authorization': token 
      }})
        .then(result => {
          resolve(result)
        })
        .catch(error => {
          reject(error.response.status)
        })
    })
  },

  axiosPatch: (url, body) => {
    instance.defaults.headers.patch['Content-Type'] = 'multipart/form-data'
    return new Promise((resolve, reject) => {
      instance.patch(url, body, {
        onUploadProgress: progressEvent => {
          console.log('Upload progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
        }
      })
        .then(result => {
          resolve(result)
        })
        .catch(error => {
          reject(error.response)
        })
    })
  }


}