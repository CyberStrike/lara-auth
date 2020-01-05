import transmit from './libs/transmit'

export async function postRegister (data) {
  return transmit('post', '/register', data)
}
export async function postLogout (data) {
  return transmit('post', '/logout')
}

export async function getUser () {
  return transmit('get', '/user')
}
