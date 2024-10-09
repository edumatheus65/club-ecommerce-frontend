import React, { FunctionComponent, InputHTMLAttributes } from 'react'

import { CustomInputContainer } from './custom-input.style'

// Styles

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const CustomInput: FunctionComponent<CustomInputProps> = React.forwardRef<
  HTMLInputElement,
  CustomInputProps
>((props, ref) => {
  return <CustomInputContainer {...props} forwardedAs="input" ref={ref} />
})

CustomInput.displayName = 'CustomInput'

export default CustomInput
