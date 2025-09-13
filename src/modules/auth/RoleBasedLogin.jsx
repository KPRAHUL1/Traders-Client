import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth.js'

const roleConfig = {
  agent: {
    title: 'Agent Login',
    description: 'Manage orders, payments, and your portfolio',
    dashboardPath: '/agent/dashboard'
  },
  manufacturer: {
    title: 'Manufacturer Login',
    description: 'Oversee production, catalogs, and fulfillment',
    dashboardPath: '/manufacturer/dashboard'
  },
  contractor: {
    title: 'Contractor Login',
    description: 'Access assigned projects and documentation',
    dashboardPath: '/contractor/dashboard'
  }
}

export default function RoleBasedLogin() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const { role } = useParams()
  const from = location.state?.from?.pathname

  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState('mobile')
  const [isLoading, setIsLoading] = useState(false)

  const config = roleConfig[role] || roleConfig.agent

  useEffect(() => {
    if (!role || !roleConfig[role]) {
      navigate('/role-selection')
    }
  }, [role, navigate])

  const requestOtp = async (e) => {
    e.preventDefault()
    const clean = (mobile || '').replace(/\D/g, '')
    if (clean.length < 10) return
    
    setIsLoading(true)
    // Simulate OTP request
    setTimeout(() => {
      setIsLoading(false)
      setStep('otp')
    }, 1000)
  }

  const onVerify = (e) => {
    e.preventDefault()
    if (otp.length < 4) return
    
    // Simulate OTP verification
    const userData = {
      id: `${role}_${Date.now()}`,
      name: `${role.charAt(0).toUpperCase() + role.slice(1)} User`,
      mobile: mobile,
      userType: 'role-based',
      role: role
    }
    
    login(userData)
    navigate(from || config.dashboardPath, { replace: true })
  }

  if (!role || !roleConfig[role]) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {config.title}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {config.description}
          </p>
        </div>

        <div className="bg-white py-8 px-6 shadow rounded-lg">
          {step === 'mobile' ? (
            <form onSubmit={requestOtp} className="space-y-6">
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <div className="mt-1">
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    inputMode="numeric"
                    placeholder="e.g. 9876543210"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading || mobile.length < 10}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending OTP...' : 'Get OTP'}
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={onVerify} className="space-y-6">
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                  Enter OTP
                </label>
                <div className="mt-1">
                  <input
                    id="otp"
                    name="otp"
                    type="text"
                    inputMode="numeric"
                    placeholder="Enter the 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    required
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  OTP sent to +91 {mobile}
                </p>
              </div>

              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={otp.length < 4}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Verify & Continue
                </button>
                <button
                  type="button"
                  onClick={() => setStep('mobile')}
                  className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Use different number
                </button>
              </div>
            </form>
          )}

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Need a different role?</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => navigate('/role-selection')}
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Choose Different Role
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
