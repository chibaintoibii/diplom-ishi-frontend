export interface InputProps {
  label?: string
  placeholder?: string
  isRequired?: boolean;
  modelValue: string
  autoFocus?: boolean
  inputType?: 'text' | 'password'
}