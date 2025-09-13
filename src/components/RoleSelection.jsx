import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const roles = [
  {
    key: 'agent',
    title: 'Agents',
    description: 'Manage orders, payments, and your portfolio in one place.',
    icon: '👨‍💼',
  },
  {
    key: 'manufacturer',
    title: 'Manufacturers',
    description: 'Oversee production, catalogs, and fulfillment workflows.',
    icon: '🏭',
  },
  {
    key: 'contractor',
    title: 'Contractors',
    description: 'Access assigned projects, documentation, and reporting.',
    icon: '🔨',
  },
]

export default function RoleSelection({ onRoleSelect }) {
  const [selectedRole, setSelectedRole] = useState('')
  const navigate = useNavigate()

  const handleRoleSelect = (role) => {
    setSelectedRole(role)
    try {
      localStorage.setItem('app.auth.selectedRole', role)
    } catch (e) {
      console.warn('localStorage set failed', e)
    }
    onRoleSelect(role)
  }

  const handleContinue = () => {
    if (selectedRole) {
      navigate(`/login/role-based/${selectedRole}`)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Role</h1>
        <p className="text-gray-600">Select the role that best describes your business needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {roles.map((role) => (
          <div
            key={role.key}
            onClick={() => handleRoleSelect(role.key)}
            className={`border-2 rounded-lg p-6 cursor-pointer transition-all duration-200 ${
              selectedRole === role.key
                ? 'border-blue-500 bg-blue-50 shadow-lg'
                : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
            }`}
          >
            <div className="text-4xl mb-4 text-center">{role.icon}</div>
            <h3 className="text-xl font-semibold text-center mb-2">{role.title}</h3>
            <p className="text-gray-600 text-center text-sm">{role.description}</p>
            {selectedRole === role.key && (
              <div className="mt-4 text-center">
                <div className="inline-flex items-center text-blue-600">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Selected
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={handleContinue}
          disabled={!selectedRole}
          className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
            selectedRole
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Continue with {selectedRole ? roles.find(r => r.key === selectedRole)?.title : 'Role'}
        </button>
      </div>

      <div className="text-center mt-6">
        <p className="text-gray-500 text-sm">
          Don't need a specific role? 
          <button
            onClick={() => navigate('/login/regular')}
            className="text-blue-600 hover:underline ml-1"
          >
            Continue as Regular User
          </button>
        </p>
      </div>
    </div>
  )
}
