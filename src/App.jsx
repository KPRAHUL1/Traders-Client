import { Suspense } from 'react'
import { AuthProvider } from './context/AuthContext.jsx'
import { AppRoutes } from './routes/routes.jsx'

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<div className="p-6">Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </AuthProvider>
  )
}

export default App
