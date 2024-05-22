

const AuthToken = 'tuit_practice_auth_token'
class Auth {
  saveLogin(token: string) {
    localStorage.setItem(AuthToken, token)
  }

  logout() {
    localStorage.removeItem(AuthToken)
    window.location.reload()
  }

  isLoggedIn() {
    const token = localStorage.getItem(AuthToken) || ''

    return token.length > 0
  }

  getToken() {
    return localStorage.getItem(AuthToken)
  }
}

export default new Auth()