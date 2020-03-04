const baseUrl = 'http://localhost:3001'

const get = (path) => {
  return fetch(baseUrl + path).then(response => response.json()).then((resp) => {
      return resp;
  })
}

const request = (path, data, method) => {
  return fetch(baseUrl + path, {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json()).then((resp) => {
    return resp;
  }).catch((error) => {
    console.log(error)
  });
}

const post = (path, data) => {
  return request(path, data, 'POST');
}

const del = (path, data) => {
  return request(path, data, 'DELETE');
}

module.exports = {
  get    : get,
  post   : post,
  del : del
};



