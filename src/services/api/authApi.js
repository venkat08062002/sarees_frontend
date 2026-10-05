import { AUTH_PATHS } from '../../constants/api.js'
import { apiClient } from '../../lib/apiClient.js'

export const authApi = {
  register: (body) =>
    apiClient(AUTH_PATHS.register, { method: 'POST', body: JSON.stringify(body) }),
  login: (body) =>
    apiClient(AUTH_PATHS.login, { method: 'POST', body: JSON.stringify(body) }),
  me: (accessToken) =>
    apiClient(AUTH_PATHS.me, {
      headers: { Authorization: `Bearer ${accessToken}` },
    }),
  refreshToken: (body) =>
    apiClient(AUTH_PATHS.refreshToken, { method: 'POST', body: JSON.stringify(body) }),
  logout: (body) =>
    apiClient(AUTH_PATHS.logout, { method: 'POST', body: JSON.stringify(body) }),
  forgotPassword: (body) =>
    apiClient(AUTH_PATHS.forgotPassword, { method: 'POST', body: JSON.stringify(body) }),
  resetPassword: (body) =>
    apiClient(AUTH_PATHS.resetPassword, { method: 'POST', body: JSON.stringify(body) }),
}
