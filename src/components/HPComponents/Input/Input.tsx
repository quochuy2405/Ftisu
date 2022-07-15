import type { Input as TypeInput } from '../Interface'
import Styles from './Input.module.scss'

function Input(props: TypeInput): JSX.Element {
  const { name, value, handelChange, type, title, invalid, textInvalid } = props

  return (
    <>
      <fieldset className={Styles.inputField}>
        <legend>{title}</legend>
        <input value={value} type={type} name={name} onChange={(e) => handelChange(e)} />
      </fieldset>
      {invalid && <p className={Styles.invalid}>{textInvalid}</p>}
    </>
  )
}

export default Input
