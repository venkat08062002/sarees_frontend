/** Mirrors sarees_backend ApiConstants (/api/v1/...) */
export const API_V1 = '/api/v1'

export const AUTH_PATHS = {
  base: `${API_V1}/auth`,
  register: `${API_V1}/auth/register`,
  login: `${API_V1}/auth/login`,
  me: `${API_V1}/auth/me`,
  refreshToken: `${API_V1}/auth/refresh-token`,
  logout: `${API_V1}/auth/logout`,
  forgotPassword: `${API_V1}/auth/forgot-password`,
  resetPassword: `${API_V1}/auth/reset-password`,
}
