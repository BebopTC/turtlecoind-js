import XMLHttpRequest from 'xmlhttprequest'

const buildXHR = (host, port, success, error) => {
  let xhr = new XMLHttpRequest.XMLHttpRequest()
  xhr.open('POST', `${host}:${port}/json_rpc`)
  xhr.setRequestHeader("Content-type", "application/json")
  xhr.setRequestHeader("Accept", "application/json")

  xhr.onload = () => {
    success(xhr.response)
  }

  return xhr
}

export { buildXHR }
