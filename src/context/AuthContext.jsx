import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const storageKey = 'app.auth.user'

  // Rehydrate auth state from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (parsed && parsed.id) {
          setUser(parsed)
        }
      }
    } catch (err) {
      // ignore corrupted storage
    } finally {
      setIsLoading(false)
    }
  }, [])

  const login = (userData) => {
    const next = { 
      id: userData.id || 'u1', 
      role: userData.role || 'regular', 
      name: userData.name || 'User',
      mobile: userData.mobile,
      userType: userData.userType || 'regular', // 'regular' or 'role-based'
      ...userData
    }
    setUser(next)
    try { localStorage.setItem(storageKey, JSON.stringify(next)) } catch {}
    return next
  }

  const logout = () => {
    setUser(null)
    try { 
      localStorage.removeItem(storageKey)
      localStorage.removeItem('app.auth.selectedRole')
    } catch {}
  }

  const isRoleBasedUser = () => {
    return user && user.userType === 'role-based' && user.role && user.role !== 'regular'
  }

  const isRegularUser = () => {
    return user && user.userType === 'regular'
  }

  const value = useMemo(() => ({
    user,
    isLoading,
    isAuthenticated: !!user,
    isRoleBasedUser: isRoleBasedUser(),
    isRegularUser: isRegularUser(),
    login,
    logout,
  }), [user, isLoading])

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}


