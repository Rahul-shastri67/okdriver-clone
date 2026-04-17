import { createContext, useContext, useState, useEffect } from 'react'
import { authAPI } from '../services/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [driver, setDriver] = useState(() => {
    try {
      const stored = localStorage.getItem('rp_driver')
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  })
  const [loading, setLoading] = useState(false)

  const login = async (phone, password) => {
    const res = await authAPI.login({ phone, password })
    const { token, driver: d } = res.data
    localStorage.setItem('rp_token', token)
    localStorage.setItem('rp_driver', JSON.stringify(d))
    setDriver(d)
    return d
  }

  const register = async (name, phone, password) => {
    const res = await authAPI.register({ name, phone, password })
    const { token, driver: d } = res.data
    localStorage.setItem('rp_token', token)
    localStorage.setItem('rp_driver', JSON.stringify(d))
    setDriver(d)
    return d
  }

  const logout = () => {
    localStorage.removeItem('rp_token')
    localStorage.removeItem('rp_driver')
    setDriver(null)
  }

  return (
    <AuthContext.Provider value={{ driver, login, register, logout, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
