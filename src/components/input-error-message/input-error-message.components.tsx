import { FunctionComponent } from 'react'
import {} from './input-error-message.components'
import { InputErrorMessageContainer } from './input-error-message.styles'

const InputErrorMessage: FunctionComponent = ({ children }) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
}

export default InputErrorMessage
