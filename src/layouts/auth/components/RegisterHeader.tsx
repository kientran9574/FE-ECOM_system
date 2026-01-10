import { useMatch } from 'react-router-dom'
import IconShoppe from '../../../icons/IconShoppe'

const RegisterHeader = () => {
  const match = useMatch('/register')
  return (
    <header className='py-5'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-end gap-2'>
          <IconShoppe />
          <h1 className='text-xl font-semibold'>{match ? 'Đăng ký' : 'Đăng nhập'}</h1>
        </div>
      </div>
    </header>
  )
}

export default RegisterHeader
