import RegisterHeader from '../components/RegisterHeader'
import Footer from '../../../components/Footer'
import type { ReactNode } from 'react'

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}

export default AuthLayout
