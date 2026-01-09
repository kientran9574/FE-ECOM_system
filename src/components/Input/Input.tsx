import type { UseFormRegister } from 'react-hook-form'

interface IInputProps {
  type: HTMLInputElement['type']
  placeHolder?: string
  classNameWrap?: string
  name: string
  register: UseFormRegister<any>
  errorMessage?: string
  classNameInput?: string
  labelTitle: string
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
  return (
    <div className={classNameWrap}>
      <label htmlFor={name} className={classNameLabel}>
        {labelTitle}
      </label>
      <input id={name} type={type} placeholder={placeHolder} {...register(name)} className={classNameInput} />
      {errorMessage && <p className='text-red-500 text-sm mt-1 min-h-[1rem]'>{errorMessage}</p>}
    </div>
  )
}

export default Input
