import IconShoppe from '../../../icons/IconShoppe'

const RegisterHeader = () => {
  return (
    <header className='py-5'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-end gap-2'>
          <IconShoppe />
          <h1 className='text-2xl font-semibold'>Register</h1>
        </div>
      </div>
    </header>
  )
}

export default RegisterHeader
