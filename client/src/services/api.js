import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('rp_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('rp_token')
      localStorage.removeItem('rp_driver')
    }
    return Promise.reject(error)
  }
)

export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  getMe: () => api.get('/auth/me'),
}

export const driverAPI = {
  getProfile: () => api.get('/drivers/profile'),
  getEarnings: () => api.get('/drivers/earnings'),
  activate: () => api.put('/drivers/activate'),
  submitKYC: (data) => api.put('/auth/kyc', data),
  selectScooter: (id) => api.post(`/drivers/select-scooter/${id}`),
}

export const scooterAPI = {
  getAll: (params) => api.get('/scooters', { params }),
  getOne: (id) => api.get(`/scooters/${id}`),
}

export default api