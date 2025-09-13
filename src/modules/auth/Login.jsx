import { useNavigate, useLocation, useParams, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.js'

const roles = ['superadmin', 'agent', 'contractor', 'manufacturer']

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()
  const from = location.state?.from?.pathname
  const storageKey = 'app.auth.selectedRole'

  const onLogin = (role) => {
    try { localStorage.setItem(storageKey, role) } catch (e) { console.warn('localStorage set failed', e) }
    login(role)
    if (role === 'superadmin') navigate('/superadmin/dashboard', { replace: true })
    else if (role === 'agent') navigate('/agent/dashboard', { replace: true })
    else if (role === 'contractor') navigate('/contractor/dashboard', { replace: true })
    else if (role === 'manufacturer') navigate('/manufacturer/dashboard', { replace: true })
    else navigate(from || '/', { replace: true })
  }

  const selectedRole = params.role || (() => {
    try { return localStorage.getItem(storageKey) || '' } catch (e) { console.warn('localStorage get failed', e); return '' }
  })()

  return (
    <div className="w-full max-w-sm bg-white rounded-md shadow p-6 space-y-4">
      <h1 className="text-xl font-semibold text-center">Sign in</h1>
      {selectedRole ? (
        <div className="space-y-3">
          <div className="text-sm text-gray-600">Selected role: <span className="font-medium text-gray-900">{selectedRole}</span></div>
          <button onClick={() => onLogin(selectedRole)} className="w-full px-3 py-2 rounded bg-gray-900 text-white">Continue as {selectedRole}</button>
          <div className="text-xs text-gray-500 text-center">Not your role? <Link to="/login" className="underline">Choose another</Link></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {roles.map((r) => (
            <button key={r} onClick={() => onLogin(r)} className="px-3 py-2 rounded border hover:bg-gray-50">
              {r}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}


