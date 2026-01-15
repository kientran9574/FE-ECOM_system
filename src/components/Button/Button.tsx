import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPending: boolean
  icon: ReactNode
}

const Button = (props: IButtonProps) => {
  const { children, disabled, isPending, icon, className, ...rest } = props
  const newClassName = disabled ? className + `cursor-not-allowed` : className
  return (
    <button className={newClassName} disabled={disabled} {...rest}>
      {isPending && icon}
      <span>{children}</span>
    </button>
  )
}

export default Button
