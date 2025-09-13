import { useNavigate, useLocation, useParams, Link } from 'react-router-dom'
import { useState, useMemo } from 'react'
import { useAuth } from '../../hooks/useAuth.js'

const userRoles = ['agent', 'contractor', 'manufacturer']

export default function UserLogin() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const { role: roleParam } = useParams()
  const storageKey = 'app.auth.selectedRole'
  const from = location.state?.from?.pathname

  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState('mobile') // 'mobile' | 'otp'

  const selectedRole = useMemo(() => {
    const roleFromUrl = roleParam && userRoles.includes(roleParam) ? roleParam : ''
    if (roleFromUrl) return roleFromUrl
    try { return localStorage.getItem(storageKey) || '' } catch (e) { return '' }
  }, [roleParam])

  const destinationForRole = (r) => {
    if (r === 'agent') return '/agent/dashboard'
    if (r === 'contractor') return '/contractor/dashboard'
    if (r === 'manufacturer') return '/manufacturer/dashboard'
    return '/'
  }

  const requestOtp = (e) => {
    e.preventDefault()
    const clean = (mobile || '').replace(/\D/g, '')
    if (clean.length < 10) return
    setStep('otp')
  }

  const onVerify = (e) => {
    e.preventDefault()
    if (otp.length < 4) return
    const role = selectedRole || 'agent'
    try { localStorage.setItem(storageKey, role) } catch (err) { /* ignore */ }
    login(role, { name: role })
    const to = destinationForRole(role)
    navigate(from || to, { replace: true })
  }

  return (
    <div className="w-full max-w-sm bg-white rounded-md shadow p-6 space-y-4">
      <h1 className="text-xl font-semibold text-center">Sign in</h1>
      <div className="text-xs text-gray-500 text-center">User authentication via mobile number</div>

      {selectedRole ? (
        <div className="text-sm text-gray-600 text-center">Selected role: <span className="font-medium text-gray-900">{selectedRole}</span></div>
      ) : (
        <div className="text-xs text-center text-gray-500">No role selected. Defaulting to Agent.</div>
      )}

      {step === 'mobile' ? (
        <form onSubmit={requestOtp} className="space-y-3">
          <label className="block text-sm">
            <span className="text-gray-700">Mobile number</span>
            <input
              type="tel"
              inputMode="numeric"
              placeholder="e.g. 9876543210"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
              required
            />
          </label>
          <button type="submit" className="w-full px-3 py-2 rounded bg-gray-900 text-white">Get OTP</button>
        </form>
      ) : (
        <form onSubmit={onVerify} className="space-y-3">
          <label className="block text-sm">
            <span className="text-gray-700">Enter OTP</span>
            <input
              type="text"
              inputMode="numeric"
              placeholder="Enter the 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
              required
            />
          </label>
          <button type="submit" className="w-full px-3 py-2 rounded bg-gray-900 text-white">Verify & Continue</button>
          <button type="button" onClick={() => setStep('mobile')} className="w-full px-3 py-2 rounded border">Use different number</button>
        </form>
      )}

      <div className="text-xs text-gray-500 text-center">
        Admin? <Link to="/admin/login" className="underline">Use admin login</Link>
      </div>
    </div>
  )
}


