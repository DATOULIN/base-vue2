import Cookies from 'js-cookie'

const TokenKey = 'NETILERSESSION_C'

export function getToken () {
  return Cookies.get(TokenKey)
}
