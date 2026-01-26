import type { InputHTMLAttributes } from 'react'
import type { UseFormRegister } from 'react-hook-form'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputElement['type']
  placeHolder?: string
  classNameWrap?: string
  name: string
  register?: UseFormRegister<any>
  errorMessage?: string
  classNameInput?: string
  labelTitle?: string
  classNameLabel?: string
}
const Input = ({
  type,
  placeHolder,
  classNameInput,
  classNameWrap,
  classNameLabel = 'block text-sm font-medium text-gray-600 mb-1',
  name,
  register,
  errorMessage,
  labelTitle
}: IInputProps) => {
  const registerResults = register ? register(name) : {}
  return (
    <div className={classNameWrap}>
      <label htmlFor={name} className={classNameLabel}>
        {labelTitle}
      </label>
      <input id={name} type={type} placeholder={placeHolder} {...registerResults} className={classNameInput} />
      {errorMessage && <p className='text-red-500 text-sm mt-1 min-h-[1rem]'>{errorMessage}</p>}
    </div>
  )
}

export default Input
