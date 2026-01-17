import { motion, type HTMLMotionProps } from 'motion/react'
import { forwardRef, type ReactNode } from 'react'

type MotionButtonProps = Omit<HTMLMotionProps<'button'>, 'children'>

interface IButtonProps extends MotionButtonProps {
  isPending: boolean
  icon?: ReactNode
  children: ReactNode
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { children, disabled, isPending, icon, className, ...rest } = props
  const newClassName = disabled ? `${className} disabled:opacity-80 cursor-not-allowed` : className
  return (
    <motion.button whileTap={{ scale: 0.97 }} className={newClassName} disabled={disabled} ref={ref} {...rest}>
      {isPending ? icon : <span>{children}</span>}
    </motion.button>
  )
})

Button.displayName = 'Button'

export default Button
